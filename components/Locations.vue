<script setup lang="ts">
import { Motion } from 'motion-v'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card'

const { fadeInUp, stagger, cardEntrance, buttonPremium } = useAnimations()

const locations = [
  {
    name: 'Poliklinika Čumpelíkova',
    street: 'Čumpelíková 1764/2',
    city: 'Praha 8',
    zip: '182 00',
    image: '/poliklinika_cumpelikova.jpg',
    pageUrl: '/ordinace/cumpelikova',
    phone: '+420 603 141 490',
    email: 'ocnicumpelikova@email.cz',
    hours: [
      { day: 'Pondělí', time: '8:00 - 12:30 | 13:00 - 16:00' },
      { day: 'Úterý', time: '8:00 - 12:30 | 13:00 - 16:00' },
      { day: 'Středa', time: '8:00 - 12:30 | 13:00 - 16:00' },
      { day: 'Čtvrtek', time: '8:00 - 12:30 | 13:00 - 17:00' },
      { day: 'Pátek', time: '8:00 - 13:00' }
    ]
  },
  {
    name: 'Poliklinika Zárubova',
    street: 'Zárubova 498/31',
    city: 'Praha 4',
    zip: '142 00',
    image: '/poliklinika_zarubova.jpg',
    pageUrl: '/ordinace/zarubova',
    phone: '+420 776 471 040',
    email: 'videresestra@email.cz',
    hours: [
      { day: 'Pondělí', time: '13:00 - 19:00' },
      { day: 'Úterý', time: '8:00 - 12:30 | 13:00 - 17:00' },
      { day: 'Středa', time: '8:00 - 12:30 | 13:00 - 15:00' },
      { day: 'Čtvrtek', time: '8:00 - 12:30 | 13:00 - 17:00' },
      { day: 'Pátek', time: '8:00 - 13:00' }
    ]
  }
]
</script>

<template>
  <section id="ordinace" class="py-24 md:py-32 relative overflow-hidden">
    <!-- Decorative background elements -->
    <div class="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
      <div class="absolute top-[10%] right-[5%] w-[30%] h-[30%] bg-primary/5 rounded-full blur-[100px]" />
      <div class="absolute bottom-[10%] left-[5%] w-[20%] h-[20%] bg-accent/5 rounded-full blur-[80px]" />
    </div>

    <div class="container relative z-10 mx-auto px-6 md:px-8 lg:px-12 xl:px-24">
      <!-- Section Header -->
      <Motion tag="div" v-bind="fadeInUp" class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 tracking-tight">
          Naše ordinace
        </h2>
        <p class="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Navštivte nás v jedné z našich moderních poliklinik v Praze.
          <br class="hidden md:block" />
          Poskytujeme špičkovou péči v příjemném prostředí.
        </p>
      </Motion>

      <!-- Locations Grid -->
      <Motion
        tag="div"
        v-bind="stagger(0.2).animate"
        class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto"
      >
        <Motion
          v-for="(location, index) in locations"
          :key="index"
          tag="div"
          v-bind="cardEntrance"
        >
          <Card class="h-full group hover:shadow-2xl transition-all duration-500 border-0 bg-background/80 backdrop-blur-sm ring-1 ring-border/50 overflow-hidden rounded-[2rem]">
            <!-- Location Image -->
            <div class="relative h-64 overflow-hidden">
              <NuxtImg
                :src="location.image"
                :alt="`Fotografie ${location.name}`"
                width="600"
                height="400"
                format="webp"
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90" />
              <div class="absolute bottom-6 left-6 right-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <h3 class="text-white text-2xl font-bold drop-shadow-lg mb-2">
                  {{ location.name }}
                </h3>
                <div class="flex items-center gap-2 text-white/90 text-sm font-medium">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>{{ location.city }}</span>
                </div>
              </div>
            </div>

            <CardContent class="p-8 space-y-8">
              <!-- Address -->
              <div class="flex items-start gap-4">
                <div class="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <h4 class="font-semibold text-foreground mb-1">Adresa</h4>
                  <p class="text-muted-foreground leading-relaxed">
                    {{ location.street }}<br>
                    {{ location.city }}, {{ location.zip }}
                  </p>
                </div>
              </div>

              <!-- Opening Hours -->
              <div class="space-y-4">
                <div class="flex items-center gap-4">
                  <div class="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 text-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 class="font-semibold text-foreground">Ordinační hodiny</h4>
                </div>
                
                <div class="pl-14 space-y-2">
                  <div
                    v-for="(hour, idx) in location.hours"
                    :key="idx"
                    class="flex justify-between text-sm py-1 border-b border-border/50 last:border-0"
                  >
                    <span class="text-muted-foreground font-medium">{{ hour.day }}</span>
                    <span class="font-semibold text-foreground">{{ hour.time }}</span>
                  </div>
                </div>
              </div>

              <!-- Action Buttons -->
              <div class="grid grid-cols-2 gap-4 pt-4">
                <!-- Call Button -->
                <Motion
                  tag="a"
                  :href="`tel:${location.phone}`"
                  v-bind="buttonPremium"
                  class="flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-all font-semibold text-sm shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5"
                  aria-label="Zavolejte nám"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Zavolat
                </Motion>

                <!-- Details Button -->
                <NuxtLink
                  :to="location.pageUrl"
                  class="flex items-center justify-center gap-2 px-6 py-4 rounded-xl border border-border bg-background hover:bg-primary/5 hover:border-primary/30 transition-all font-semibold text-sm text-foreground hover:-translate-y-0.5 active:bg-primary/5"
                  aria-label="Více informací o ordinaci"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Více info
                </NuxtLink>
              </div>
            </CardContent>
          </Card>
        </Motion>
      </Motion>
    </div>
  </section>
</template>
