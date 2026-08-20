<script setup lang="ts">
import { ChevronLeft, ChevronRight, X } from 'lucide-vue-next'
import {
  FULL_DENSITIES,
  FULL_QUALITY,
  GRID_QUALITY,
  fullSizes,
  gridDensities,
  gridSizes,
  type GalleryImage
} from '~/lib/gallery'

interface Props {
  images: GalleryImage[]
  startIndex?: number
}

const props = withDefaults(defineProps<Props>(), { startIndex: 0 })
const emit = defineEmits<{ close: [] }>()

const current = ref(props.startIndex)
const dialog = ref<HTMLElement | null>(null)
const closeButton = ref<HTMLButtonElement | null>(null)

const count = computed(() => props.images.length)
const active = computed(() => props.images[current.value])

const go = (delta: number) => {
  current.value = (current.value + delta + count.value) % count.value
}

/**
 * Neighbours load eagerly so arrow/swipe navigation never shows a blank frame;
 * everything further out stays lazy. Wraps around the ends like navigation does.
 */
const isNear = (i: number) => {
  const distance = Math.abs(i - current.value)
  return Math.min(distance, count.value - distance) <= 1
}

/**
 * Caps display size at 1.4x the intrinsic pixels. The source photos are modest
 * resolution, and a hard cap keeps them from being stretched into softness on
 * large displays.
 */
const frameStyle = (image: GalleryImage) =>
  `max-width:min(92vw, ${Math.round(image.width * 1.4)}px);`
  + `max-height:min(calc(100dvh - 14rem), ${Math.round(image.height * 1.4)}px)`

/* Drag / swipe ------------------------------------------------------------- */

const dragX = ref(0)
const isDragging = ref(false)
let activePointer: number | null = null
let originX = 0
let trackWidth = 1

const onPointerDown = (event: PointerEvent) => {
  if (event.pointerType === 'mouse' && event.button !== 0) return
  activePointer = event.pointerId
  originX = event.clientX
  trackWidth = (event.currentTarget as HTMLElement).clientWidth || 1
  isDragging.value = true
}

const onPointerMove = (event: PointerEvent) => {
  if (!isDragging.value || event.pointerId !== activePointer) return
  dragX.value = event.clientX - originX
}

const onPointerUp = (event: PointerEvent) => {
  if (!isDragging.value || event.pointerId !== activePointer) return
  const travelled = dragX.value
  isDragging.value = false
  dragX.value = 0
  activePointer = null

  const threshold = Math.min(80, trackWidth * 0.15)
  if (travelled <= -threshold) go(1)
  else if (travelled >= threshold) go(-1)
}

const trackStyle = computed(() => ({
  transform: `translate3d(calc(${-current.value * 100}% + ${dragX.value}px), 0, 0)`,
  transition: isDragging.value ? 'none' : undefined
}))

/* Keyboard, focus, scroll lock -------------------------------------------- */

const trapTab = (event: KeyboardEvent) => {
  const root = dialog.value
  if (!root) return

  const focusable = Array.from(
    root.querySelectorAll<HTMLElement>('button:not([disabled]), [href], [tabindex]:not([tabindex="-1"])')
  ).filter(element => element.offsetParent !== null)
  if (!focusable.length) return

  const first = focusable[0]!
  const last = focusable[focusable.length - 1]!
  const focused = document.activeElement as HTMLElement | null

  if (event.shiftKey && (focused === first || !root.contains(focused))) {
    event.preventDefault()
    last.focus()
  } else if (!event.shiftKey && focused === last) {
    event.preventDefault()
    first.focus()
  }
}

const onKeydown = (event: KeyboardEvent) => {
  switch (event.key) {
    case 'Escape':
      event.preventDefault()
      emit('close')
      break
    case 'ArrowRight':
      event.preventDefault()
      go(1)
      break
    case 'ArrowLeft':
      event.preventDefault()
      go(-1)
      break
    case 'Home':
      event.preventDefault()
      current.value = 0
      break
    case 'End':
      event.preventDefault()
      current.value = count.value - 1
      break
    case 'Tab':
      trapTab(event)
      break
  }
}

let releaseScroll: (() => void) | null = null

onMounted(() => {
  window.addEventListener('keydown', onKeydown)

  const body = document.body
  const root = document.documentElement
  const previousBodyOverflow = body.style.overflow
  const previousRootOverflow = root.style.overflow
  const previousPadding = body.style.paddingRight
  const scrollbar = window.innerWidth - root.clientWidth

  // Locking body alone leaves the scrollbar behind when the page scrolls on the
  // root element, which is the usual case.
  body.style.overflow = 'hidden'
  root.style.overflow = 'hidden'
  if (scrollbar > 0) body.style.paddingRight = `${scrollbar}px`
  releaseScroll = () => {
    body.style.overflow = previousBodyOverflow
    root.style.overflow = previousRootOverflow
    body.style.paddingRight = previousPadding
  }

  nextTick(() => closeButton.value?.focus())
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKeydown)
  releaseScroll?.()
})
</script>

<template>
  <div
    ref="dialog"
    role="dialog"
    aria-modal="true"
    aria-label="Fotogalerie ordinace"
    class="lightbox fixed inset-0 z-[100] flex flex-col overflow-hidden bg-white/90 backdrop-blur-xl"
  >
    <!-- Header: counter + close -->
    <div class="flex flex-none items-center justify-between gap-4 px-4 py-3 sm:px-6">
      <p class="text-sm font-medium tabular-nums text-muted-foreground">
        <span class="text-foreground">{{ current + 1 }}</span> / {{ count }}
      </p>

      <button
        ref="closeButton"
        type="button"
        class="grid h-11 w-11 place-items-center rounded-full text-muted-foreground outline-none ring-primary transition-colors duration-200 hover:bg-foreground/5 hover:text-foreground focus-visible:ring-2"
        aria-label="Zavřít galerii"
        @click="emit('close')"
      >
        <X class="h-5 w-5" :stroke-width="2" aria-hidden="true" />
      </button>
    </div>

    <!-- Stage -->
    <div class="relative flex min-h-0 flex-1 items-center overflow-hidden">
      <div
        class="track flex h-full w-full items-center"
        :class="{ 'is-dragging': isDragging }"
        :style="trackStyle"
        @pointerdown="onPointerDown"
        @pointermove="onPointerMove"
        @pointerup="onPointerUp"
        @pointercancel="onPointerUp"
      >
        <figure
          v-for="(image, index) in images"
          :key="image.src"
          :aria-hidden="index === current ? undefined : 'true'"
          class="flex h-full w-full flex-none items-center justify-center px-4 sm:px-16"
        >
          <!-- Shrink-wraps the full-resolution image so the layers behind it
               align with the photo itself rather than with the stage. -->
          <div class="relative overflow-hidden rounded-xl shadow-2xl ring-1 ring-border">
            <!-- First paint, from the inlined 20px placeholder. Costs nothing. -->
            <span
              class="absolute inset-0 scale-105 bg-cover bg-center blur-lg"
              :style="{ backgroundImage: `url(${image.lqip})` }"
              aria-hidden="true"
            />

            <!-- The mosaic tile's own bytes, already in cache. Fills the stage
                 the instant it opens, so the full-resolution fetch below is
                 never something the visitor waits on. -->
            <NuxtPicture
              :src="image.src"
              alt=""
              :width="image.width"
              :height="image.height"
              :loading="isNear(index) ? 'eager' : 'lazy'"
              :sizes="gridSizes(image)"
              :densities="gridDensities(image)"
              :quality="GRID_QUALITY"
              format="avif,webp"
              legacy-format="webp"
              decoding="async"
              aria-hidden="true"
              class="absolute inset-0 block h-full w-full"
              :img-attrs="{ class: 'h-full w-full object-cover' }"
            />

            <NuxtPicture
              :src="image.src"
              :alt="image.alt"
              :width="image.width"
              :height="image.height"
              :loading="isNear(index) ? 'eager' : 'lazy'"
              :sizes="fullSizes(image)"
              :densities="FULL_DENSITIES"
              :quality="FULL_QUALITY"
              format="avif,webp"
              legacy-format="webp"
              decoding="async"
              class="relative block w-fit"
              :img-attrs="{
                class: 'block h-auto w-auto select-none',
                style: frameStyle(image),
                draggable: 'false'
              }"
            />
          </div>
        </figure>
      </div>

      <!-- Previous / next -->
      <button
        type="button"
        class="absolute left-2 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/80 text-foreground shadow-lg outline-none ring-1 ring-border backdrop-blur transition-[background-color,transform] duration-200 hover:bg-white focus-visible:ring-2 focus-visible:ring-primary motion-safe:hover:scale-105 sm:left-4 sm:h-12 sm:w-12"
        aria-label="Předchozí fotografie"
        @click="go(-1)"
      >
        <ChevronLeft class="h-6 w-6" :stroke-width="2" aria-hidden="true" />
      </button>

      <button
        type="button"
        class="absolute right-2 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/80 text-foreground shadow-lg outline-none ring-1 ring-border backdrop-blur transition-[background-color,transform] duration-200 hover:bg-white focus-visible:ring-2 focus-visible:ring-primary motion-safe:hover:scale-105 sm:right-4 sm:h-12 sm:w-12"
        aria-label="Následující fotografie"
        @click="go(1)"
      >
        <ChevronRight class="h-6 w-6" :stroke-width="2" aria-hidden="true" />
      </button>
    </div>

    <!-- Caption + thumbnails -->
    <div class="flex-none px-4 pb-4 pt-3 sm:px-6 sm:pb-6">
      <p
        class="mb-3 text-center text-base font-medium text-foreground sm:text-lg"
        aria-live="polite"
      >
        {{ active.caption }}
      </p>

      <!-- w-max inside a scroll container centres the rail while it fits and
           scrolls it when it does not, without flexbox centring swallowing the
           overflowing ends. -->
      <div class="thumb-rail overflow-x-auto p-1">
        <ul class="mx-auto flex w-max snap-x gap-2">
          <li v-for="(image, index) in images" :key="`thumb-${image.src}`" class="flex-none snap-start">
            <button
              type="button"
              class="block overflow-hidden rounded-md outline-none transition-opacity duration-200 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              :class="index === current
                ? 'opacity-100 ring-2 ring-primary ring-offset-2 ring-offset-white'
                : 'opacity-60 hover:opacity-100'"
              :aria-label="`Zobrazit fotografii ${index + 1}: ${image.caption}`"
              :aria-current="index === current ? 'true' : undefined"
              @click="current = index"
            >
              <NuxtImg
                :src="image.src"
                alt=""
                :width="84"
                :height="112"
                format="webp"
                quality="72"
                densities="1"
                loading="lazy"
                decoding="async"
                class="h-12 w-9 object-cover sm:h-14 sm:w-[42px]"
              />
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.track {
  touch-action: pan-y;
  transition: transform 520ms cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform;
}

.track.is-dragging {
  cursor: grabbing;
}

/* The rail stays swipeable; only the native scrollbar chrome is suppressed,
   because its default light track paints a stray band across the dark stage. */
.thumb-rail {
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.thumb-rail::-webkit-scrollbar {
  display: none;
}

@media (prefers-reduced-motion: reduce) {
  .track {
    transition-duration: 1ms;
  }
}
</style>
