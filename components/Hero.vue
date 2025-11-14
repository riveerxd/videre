<script setup lang="ts">
import { Motion } from 'motion-v'
import { Button } from '~/components/ui/button'

const { heroEntrance, stagger, fadeInUp, fadeInUpShort, buttonPremium } = useAnimations()
</script>

<template>
  <section class="relative w-full overflow-hidden bg-background">
    <div class="relative flex flex-col lg:flex-row items-stretch min-h-[500px] md:min-h-[600px] lg:min-h-[700px]">
        <!-- Image Section - 60% width on desktop -->
        <Motion
          tag="div"
          v-bind="heroEntrance"
          class="w-full lg:w-[60%] relative order-2 lg:order-1 lg:absolute lg:left-0 lg:top-0 lg:bottom-0"
        >
          <NuxtImg
            src="/heroimage.jpg"
            alt="Oční klinika Videre - Moderní ordinace s pokročilou diagnostickou technologií pro komplexní péči o Vaše oči"
            class="w-full h-full object-cover object-center"
            width="1400"
            height="700"
            format="webp"
            quality="90"
            loading="eager"
            fetchpriority="high"
          />

          <!-- Gradient overlay for better text readability on mobile -->
          <div class="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent lg:hidden" />
        </Motion>

        <!-- Content Section - glass-morphism overlay on desktop -->
        <Motion
          tag="div"
          v-bind="stagger(0.15).animate"
          class="w-full lg:w-[40%] lg:ml-auto relative z-10 flex flex-col justify-center items-start p-6 md:p-8 lg:p-12 bg-background lg:bg-background/95 lg:backdrop-blur-xl order-1 lg:order-2"
        >
          <!-- Main Title -->
          <Motion tag="div" v-bind="heroEntrance" class="mb-6">
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Oční klinika Videre
            </h1>
          </Motion>

          <!-- Subtitle -->
          <Motion tag="div" v-bind="fadeInUp" class="mb-6">
            <p class="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Moderní péče o Vaše oči s využitím nejnovějších technologií a individuálního přístupu
            </p>
          </Motion>

          <!-- Features List -->
          <Motion tag="div" v-bind="fadeInUp" class="mb-8 space-y-3">
            <div class="flex items-start gap-3">
              <div class="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-4 h-4 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p class="text-base text-foreground">
                Komplexní oční vyšetření s moderní diagnostikou
              </p>
            </div>

            <div class="flex items-start gap-3">
              <div class="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-4 h-4 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p class="text-base text-foreground">
                Laserové operace a refrakční chirurgie
              </p>
            </div>

            <div class="flex items-start gap-3">
              <div class="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-4 h-4 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p class="text-base text-foreground">
                Zkušený tým odborných lékařů
              </p>
            </div>
          </Motion>

          <!-- CTA Section -->
          <Motion tag="div" v-bind="fadeInUpShort" class="w-full space-y-4">
            <!-- Primary CTA - Large & Prominent -->
            <Motion
              tag="a"
              href="#objednat"
              v-bind="buttonPremium"
              class="group relative block overflow-hidden rounded-xl bg-primary p-6 shadow-xl hover:shadow-2xl transition-all duration-300"
              aria-label="Objednejte se online na vyšetření"
            >
              <div class="flex items-center justify-between gap-4">
                <div class="flex-1">
                  <div class="flex items-center gap-3 mb-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-6 h-6 text-primary-foreground"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span class="text-xl md:text-2xl font-bold text-primary-foreground">
                      Objednat se online
                    </span>
                  </div>
                  <p class="text-sm text-primary-foreground/90 ml-9">
                    Rychlé objednání 24/7 • Potvrzení do 2 hodin
                  </p>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6 text-primary-foreground transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <!-- Gradient overlay for depth -->
              <div class="absolute inset-0 bg-gradient-to-r from-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Motion>

            <!-- Secondary CTAs - Grid -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <!-- Phone CTA -->
              <Motion
                tag="a"
                href="tel:+420123456789"
                v-bind="buttonPremium"
                class="group flex items-center gap-3 p-4 rounded-lg border-2 border-border bg-background hover:bg-accent hover:border-primary/50 transition-all duration-300"
                aria-label="Zavolejte nám"
              >
                <div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div class="text-left flex-1">
                  <div class="font-semibold text-foreground text-sm">
                    Zavolat
                  </div>
                  <div class="text-xs text-muted-foreground">
                    Po-Pá 8:00-18:00
                  </div>
                </div>
              </Motion>

              <!-- Services CTA -->
              <Motion
                tag="a"
                href="#sluzby"
                v-bind="buttonPremium"
                class="group flex items-center gap-3 p-4 rounded-lg border-2 border-border bg-background hover:bg-accent hover:border-primary/50 transition-all duration-300"
                aria-label="Prohlédněte si naše služby"
              >
                <div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <div class="text-left flex-1">
                  <div class="font-semibold text-foreground text-sm">
                    Naše služby
                  </div>
                  <div class="text-xs text-muted-foreground">
                    Kompletní přehled
                  </div>
                </div>
              </Motion>
            </div>
          </Motion>
        </Motion>
    </div>
  </section>
</template>

<style scoped>
/* Ensure smooth transitions for responsive changes */
@media (min-width: 1024px) {
  section {
    container-type: inline-size;
  }
}
</style>
