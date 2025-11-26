<script setup lang="ts">
import { Motion } from 'motion-v'
import { Card, CardContent } from '~/components/ui/card'

const { fadeInUp, stagger, cardEntrance } = useAnimations()

const testimonials = [
  {
    name: 'Jana Nováková',
    role: 'Pacientka, Laserová operace',
    text: 'Děkuji celému týmu kliniky Videre za profesionální přístup a skvělou péči. Laserová operace mi změnila život, konečně vidím bez brýlí!',
    rating: 5,
    initials: 'JN'
  },
  {
    name: 'Petr Svoboda',
    role: 'Pacient, Operace šedého zákalu',
    text: 'Operace šedého zákalu proběhla naprosto bez problémů. Pan doktor byl velmi milý a vše mi vysvětlil. Mohu jen doporučit.',
    rating: 5,
    initials: 'PS'
  },
  {
    name: 'Eva Dvořáková',
    role: 'Pacientka, Estetická medicína',
    text: 'Navštívila jsem kliniku kvůli plastice víček a s výsledkem jsem nadmíru spokojená. Jizvičky nejsou vůbec vidět a vypadám o 10 let mladší.',
    rating: 5,
    initials: 'ED'
  }
]
</script>

<template>
  <section id="recenze" class="py-24 md:py-32 relative overflow-hidden">
    <!-- Decorative background -->
    <!-- Removed solid background overlay to show global background -->
    
    <div class="container relative z-10 mx-auto px-6 md:px-8 lg:px-12 xl:px-24">
      <!-- Section Header -->
      <Motion tag="div" v-bind="fadeInUp" class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 tracking-tight">
          Co říkají naši klienti
        </h2>
        <p class="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Spokojenost našich pacientů je pro nás na prvním místě.
        </p>
      </Motion>

      <!-- Testimonials Grid -->
      <Motion
        tag="div"
        v-bind="stagger(0.2).animate"
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
      >
        <Motion
          v-for="(testimonial, index) in testimonials"
          :key="index"
          tag="div"
          v-bind="cardEntrance"
        >
          <Card class="h-full border-0 shadow-lg bg-background/80 backdrop-blur-sm rounded-2xl p-8 flex flex-col gap-6">
            <!-- Stars -->
            <div class="flex gap-1">
              <svg
                v-for="i in 5"
                :key="i"
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5 text-yellow-400 fill-current"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>

            <!-- Text -->
            <p class="text-foreground/80 leading-relaxed italic flex-1">
              "{{ testimonial.text }}"
            </p>

            <!-- Author -->
            <div class="flex items-center gap-4 mt-auto pt-6 border-t border-border/50">
              <div class="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg">
                {{ testimonial.initials }}
              </div>
              <div>
                <div class="font-bold text-foreground">{{ testimonial.name }}</div>
                <div class="text-sm text-muted-foreground">{{ testimonial.role }}</div>
              </div>
            </div>
          </Card>
        </Motion>
      </Motion>
    </div>
  </section>
</template>
