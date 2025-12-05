<script setup lang="ts">
import { Button } from '~/components/ui/button'

const isImageLoaded = ref(false)

const onImageLoad = () => {
  isImageLoaded.value = true
}

const scrollToOrdinace = (e: Event) => {
  e.preventDefault()
  const target = document.getElementById('ordinace')
  if (!target) return

  const isMobile = window.innerWidth < 768
  const start = window.scrollY
  const targetRect = target.getBoundingClientRect()

  // Mobile: scroll to top with offset for navbar, Desktop: center in viewport
  const navbarHeight = 80
  const end = isMobile
    ? targetRect.top + start - navbarHeight
    : targetRect.top + start + (targetRect.height / 2) - (window.innerHeight / 2)

  const duration = 1200
  const startTime = performance.now()

  const easeOutQuart = (t: number) => 1 - Math.pow(1 - t, 4)

  const animate = (currentTime: number) => {
    const elapsed = currentTime - startTime
    const progress = Math.min(elapsed / duration, 1)
    const eased = easeOutQuart(progress)

    window.scrollTo(0, start + (end - start) * eased)

    if (progress < 1) {
      requestAnimationFrame(animate)
    }
  }

  requestAnimationFrame(animate)
}

onMounted(() => {
  // Safety timeout in case image load event doesn't fire or takes too long
  setTimeout(() => {
    if (!isImageLoaded.value) {
      isImageLoaded.value = true
    }
  }, 2000)
})
</script>

<template>
  <section 
    class="relative w-full py-24 md:py-32 lg:py-40 overflow-hidden"
    :class="{ 'animations-running': isImageLoaded }"
  >
    <!-- Background decorative blobs - hidden on mobile for performance -->
    <div class="hidden md:block absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
      <div class="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-primary/5 rounded-full blur-[120px]" />
      <div class="absolute top-[20%] -right-[10%] w-[40%] h-[60%] bg-accent/5 rounded-full blur-[100px]" />
    </div>

    <div class="container relative z-10 mx-auto px-6 md:px-8 lg:px-12 xl:px-24">
      <div class="relative bg-background md:bg-background/80 md:backdrop-blur-sm rounded-[2rem] shadow-2xl overflow-hidden ">
        <div class="flex flex-col lg:flex-row items-stretch">
          <!-- Content Section - 45% width on desktop -->
          <div class="relative w-full lg:w-[45%] order-2 lg:order-1 flex flex-col justify-center items-start p-8 md:p-12 lg:p-16 xl:p-20 bg-background md:bg-background/95 md:backdrop-blur md:supports-[backdrop-filter]:bg-background/60">
            
            <!-- Badge -->
            <div class="mb-6 animate-enter" style="--stagger: 1">
              <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 shadow-sm">
                <div class="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span class="text-sm font-medium text-primary tracking-wide">Moderní oční péče</span>
              </div>
            </div>

            <!-- Main Title -->
            <div class="mb-6 animate-enter" style="--stagger: 2">
              <h1 class="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-[1.1] tracking-tight">
                Oční klinika <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/80">Videre</span>
              </h1>
            </div>

            <!-- Subtitle -->
            <div class="mb-10 animate-enter" style="--stagger: 3">
              <p class="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg">
                Komplexní péče o Vaše oči s využitím nejnovějších technologií a individuálního přístupu.
              </p>
            </div>

            <!-- CTA Section -->
            <div class="w-full space-y-6 animate-enter" style="--stagger: 4">
              <!-- Primary CTA -->
              <div class="flex flex-col sm:flex-row gap-4">
                <NuxtLink
                  to="/sluzby"
                  class="inline-flex items-center justify-center h-14 text-lg px-8 rounded-full bg-primary text-primary-foreground shadow-lg hover:shadow-primary/25 hover:bg-primary/90 transition-all duration-300 hover:-translate-y-0.5 font-medium"
                >
                  Naše služby
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </NuxtLink>

                <a
                  href="#ordinace"
                  class="inline-flex items-center justify-center h-14 text-lg px-8 rounded-full border border-primary/20 bg-background hover:bg-primary/5 hover:text-primary transition-all duration-300 font-medium"
                  @click="scrollToOrdinace"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Zavolat
                </a>
              </div>
            </div>
          </div>

          <!-- Image Section - 55% width on desktop -->
          <div class="relative w-full lg:w-[55%] order-1 lg:order-2 overflow-hidden group bg-muted animate-enter aspect-[2/1]" style="--stagger: 0">
            <NuxtImg
              src="/heroimage.webp"
              alt="Oční klinika Videre - Moderní ordinace s pokročilou diagnostickou technologií pro komplexní péči o Vaše oči"
              class="absolute inset-0 w-full h-full object-cover object-center transition-all duration-700 ease-out group-hover:scale-105"
              :class="isImageLoaded ? 'opacity-100' : 'opacity-0'"
              width="1400"
              height="700"
              format="webp"
              quality="90"
              loading="eager"
              fetchpriority="high"
              @load="onImageLoad"
            />

            <!-- Gradient overlay -->
            <div class="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent lg:bg-gradient-to-l lg:from-transparent lg:via-transparent lg:to-background/20" />
          </div>
        </div>
      </div>
    </div>

  </section>
</template>

<style scoped>
/* Simple, clean entrance animation */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-enter {
  opacity: 0;
}

.animations-running .animate-enter {
  animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  animation-delay: calc(var(--stagger) * 0.1s);
}

@media (min-width: 1024px) {
  section {
    container-type: inline-size;
  }
}
</style>
