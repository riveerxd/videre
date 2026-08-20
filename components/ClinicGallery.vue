<script setup lang="ts">
import { Motion } from 'motion-v'
import { Expand } from 'lucide-vue-next'
import { usePreferredReducedMotion } from '@vueuse/core'
import {
  FULL_DENSITIES,
  FULL_QUALITY,
  GRID_QUALITY,
  fullSizes,
  gridDensities,
  gridSizes,
  type GalleryImage
} from '~/lib/gallery'
import { easings } from '~/composables/useAnimations'

interface Props {
  images: GalleryImage[]
  heading: string
  lead: string
  /** Gallery name used in the ImageGallery structured data. */
  name: string
  baseUrl?: string
}

const props = withDefaults(defineProps<Props>(), { baseUrl: 'https://videre.cz' })

const openIndex = ref<number | null>(null)
let trigger: HTMLElement | null = null

const open = (index: number, event: MouseEvent | KeyboardEvent) => {
  trigger = event.currentTarget as HTMLElement
  openIndex.value = index
}

/**
 * Fullscreen needs a larger copy of the photo than the tile does, and serving
 * the tile at fullscreen resolution would roughly triple what the page loads up
 * front. So instead the fullscreen copy is fetched on the first sign of intent —
 * hover, keyboard focus, or the press that precedes a tap — which in practice
 * means it is already in cache by the time the lightbox opens and the visitor
 * never sees the image resolve.
 */
const warmed = ref<number[]>([])

const warm = (index: number) => {
  if (!warmed.value.includes(index)) warmed.value.push(index)
}

// Resolved here rather than in the template: template expressions are plain JS,
// so TypeScript's non-null assertion is not available there.
const warmedImages = computed(
  () => warmed.value.map(index => props.images[index]).filter((image): image is GalleryImage => !!image)
)

const close = () => {
  openIndex.value = null
  // Send focus back where it came from, so keyboard users do not restart at the
  // top of the document.
  nextTick(() => trigger?.focus())
}

/* Reveal ------------------------------------------------------------------- */

const reducedMotion = usePreferredReducedMotion()

/**
 * Tiles cascade in as the mosaic scrolls into view. The delay is derived from
 * the index rather than a parent stagger so each tile animates independently of
 * how the grid reflows across breakpoints.
 */
const reveal = (index: number) => {
  if (reducedMotion.value === 'reduce') {
    return {
      initial: { opacity: 0 },
      whileInView: { opacity: 1, transition: { duration: 0.01 } },
      inViewOptions: { once: true }
    }
  }

  return {
    initial: { opacity: 0, y: 28, scale: 0.97 },
    whileInView: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.75,
        delay: Math.min(index, 5) * 0.07,
        ease: easings.smooth
      }
    },
    inViewOptions: { once: true, margin: '-80px' }
  }
}

/* Layout ------------------------------------------------------------------- */

/**
 * The one landscape photo anchors the mosaic: full width while the grid is
 * narrow, half of it once there are four columns. Portrait tiles beside the
 * anchor take the row's height and crop ~11% off their sides, which is why the
 * anchor sits next to the two least side-sensitive frames.
 */
const tileClass = (image: GalleryImage, index: number) => {
  if (image.wide) return 'col-span-2 aspect-[4/3] sm:col-span-3 lg:col-span-2'

  // Below lg the anchor takes the full grid width, so every portrait sits in a
  // row of its own kind and keeps its native 3:4. At lg the anchor is only half
  // the grid and these two tiles share its row. Dropping their ratio there lets
  // them stretch to whatever height the anchor sets — a fixed ratio cannot,
  // because the anchor spans a column gap that no static ratio accounts for.
  // The extra height is cropped off their sides by object-cover, about 11%.
  const sharesAnchorRow = index === 1 || index === 2
  return sharesAnchorRow
    ? 'col-span-1 aspect-[3/4] lg:aspect-auto'
    : 'col-span-1 aspect-[3/4]'
}

/* Structured data ---------------------------------------------------------- */

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'ImageGallery',
        name: props.name,
        associatedMedia: props.images.map(image => ({
          '@type': 'ImageObject',
          contentUrl: `${props.baseUrl}${image.src}`,
          name: image.caption,
          caption: image.caption,
          description: image.alt,
          width: image.width,
          height: image.height
        }))
      })
    }
  ]
})
</script>

<template>
  <section aria-labelledby="gallery-heading" class="mb-12 mt-4">
    <Motion tag="div" v-bind="reveal(0)" class="mb-8 md:mb-10">
      <h2
        id="gallery-heading"
        class="mb-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl"
      >
        {{ heading }}
      </h2>
      <p class="max-w-2xl text-lg leading-relaxed text-muted-foreground">
        {{ lead }}
      </p>
    </Motion>

    <div class="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
      <Motion
        v-for="(image, index) in images"
        :key="image.src"
        v-bind="reveal(index)"
        :class="tileClass(image, index)"
      >
        <figure
          class="group relative block h-full w-full overflow-hidden rounded-[1.25rem] bg-muted ring-1 ring-border/60 sm:rounded-[1.75rem]"
        >
          <button
            type="button"
            class="absolute inset-0 block h-full w-full cursor-zoom-in outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            :aria-label="`Zvětšit fotografii: ${image.caption}`"
            @click="open(index, $event)"
            @pointerenter="warm(index)"
            @pointerdown="warm(index)"
            @focus="warm(index)"
          >
            <!-- Blur-up placeholder: an inlined 20px WebP, so a tile is never an
                 empty box while its photo arrives. -->
            <span
              class="absolute inset-0 scale-110 bg-cover bg-center blur-lg"
              :style="{ backgroundImage: `url(${image.lqip})` }"
              aria-hidden="true"
            />

            <NuxtPicture
              :src="image.src"
              :alt="image.alt"
              :width="image.width"
              :height="image.height"
              :sizes="gridSizes(image)"
              :densities="gridDensities(image)"
              format="avif,webp"
              legacy-format="webp"
              :quality="GRID_QUALITY"
              loading="lazy"
              decoding="async"
              class="absolute inset-0 block h-full w-full"
              :img-attrs="{
                class: 'h-full w-full object-cover transition-transform motion-reduce:transition-none [transition-duration:900ms] [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] motion-safe:group-hover:scale-[1.06]'
              }"
            />

            <span
              class="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-foreground/85 via-foreground/40 to-transparent"
              aria-hidden="true"
            />

            <span
              class="pointer-events-none absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-background/85 text-foreground opacity-0 shadow-lg backdrop-blur transition-all duration-300 group-hover:opacity-100 motion-safe:translate-y-1 motion-safe:group-hover:translate-y-0"
              aria-hidden="true"
            >
              <Expand class="h-4 w-4" :stroke-width="2" />
            </span>
          </button>

          <figcaption
            class="pointer-events-none absolute inset-x-0 bottom-0 p-3 text-sm font-medium text-background transition-colors duration-300 sm:p-4 sm:text-base"
          >
            {{ image.caption }}
          </figcaption>
        </figure>
      </Motion>
    </div>

    <!-- Off-screen rather than display:none, so the fetch actually happens.
         Rendered as a <picture> with the lightbox's exact delivery settings so
         the browser negotiates the identical file, making the open a cache hit. -->
    <div
      v-if="warmedImages.length"
      aria-hidden="true"
      class="pointer-events-none fixed left-0 top-0 h-px w-px overflow-hidden opacity-0"
    >
      <NuxtPicture
        v-for="image in warmedImages"
        :key="`warm-${image.src}`"
        :src="image.src"
        alt=""
        :width="image.width"
        :height="image.height"
        :sizes="fullSizes(image)"
        :densities="FULL_DENSITIES"
        :quality="FULL_QUALITY"
        format="avif,webp"
        legacy-format="webp"
        loading="eager"
        decoding="async"
      />
    </div>

    <Teleport v-if="openIndex !== null" to="body">
      <Transition
        appear
        enter-active-class="transition duration-300 ease-out motion-reduce:transition-none"
        enter-from-class="opacity-0 motion-safe:scale-[0.97]"
        enter-to-class="opacity-100 scale-100"
        leave-active-class="transition duration-200 ease-in motion-reduce:transition-none"
        leave-from-class="opacity-100 scale-100"
        leave-to-class="opacity-0 motion-safe:scale-[0.98]"
      >
        <GalleryLightbox
          :images="images"
          :start-index="openIndex"
          @close="close"
        />
      </Transition>
    </Teleport>
  </section>
</template>
