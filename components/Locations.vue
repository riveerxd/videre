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
    mapUrl: 'https://mapy.cz/zakladni?q=%C4%8Cumpel%C3%ADkov%C3%A1+1764%2F2+Praha+8',
    phone: '+420 123 456 789',
    hours: [
      { day: 'Pondělí - Pátek', time: '8:00 - 18:00' },
      { day: 'Sobota', time: '9:00 - 13:00' },
      { day: 'Neděle', time: 'Zavřeno' }
    ]
  },
  {
    name: 'Poliklinika Zárubova',
    street: 'Zárubova 498/31',
    city: 'Praha 4',
    zip: '142 00',
    mapUrl: 'https://mapy.cz/zakladni?q=Z%C3%A1rubova+498%2F31+Praha+4',
    phone: '+420 123 456 789',
    hours: [
      { day: 'Pondělí - Pátek', time: '8:00 - 18:00' },
      { day: 'Sobota', time: '9:00 - 13:00' },
      { day: 'Neděle', time: 'Zavřeno' }
    ]
  }
]
</script>

<template>
  <section id="ordinace" class="py-16 md:py-24 bg-muted/30">
    <div class="container mx-auto px-4 md:px-6 lg:px-8">
      <!-- Section Header -->
      <Motion tag="div" v-bind="fadeInUp" class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
          Naše ordinace
        </h2>
        <p class="text-lg text-muted-foreground max-w-2xl mx-auto">
          Navštivte nás v jedné z našich moderních poliklinik v Praze
        </p>
      </Motion>

      <!-- Locations Grid -->
      <Motion
        tag="div"
        v-bind="stagger(0.2).animate"
        class="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto"
      >
        <Motion
          v-for="(location, index) in locations"
          :key="index"
          tag="div"
          v-bind="cardEntrance"
        >
          <Card class="h-full hover:shadow-xl transition-shadow duration-300 border-2 hover:border-primary/30">
            <CardHeader class="pb-4">
              <div class="flex items-start justify-between gap-4">
                <div class="flex-1">
                  <CardTitle class="text-2xl mb-2 text-foreground">
                    {{ location.name }}
                  </CardTitle>
                  <CardDescription class="flex items-start gap-2 text-base">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-5 h-5 text-primary flex-shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>
                      {{ location.street }}<br>
                      {{ location.city }}, {{ location.zip }}
                    </span>
                  </CardDescription>
                </div>
                <div class="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
              </div>
            </CardHeader>

            <CardContent class="space-y-6">
              <!-- Opening Hours -->
              <div class="space-y-3">
                <div class="flex items-center gap-2 text-sm font-semibold text-foreground">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Ordinační hodiny
                </div>
                <div class="space-y-1.5 pl-7">
                  <div
                    v-for="(hour, idx) in location.hours"
                    :key="idx"
                    class="flex justify-between text-sm"
                  >
                    <span class="text-muted-foreground">{{ hour.day }}</span>
                    <span class="font-medium text-foreground">{{ hour.time }}</span>
                  </div>
                </div>
              </div>

              <!-- Action Buttons -->
              <div class="grid grid-cols-2 gap-3 pt-2">
                <!-- Call Button -->
                <Motion
                  tag="a"
                  :href="`tel:${location.phone}`"
                  v-bind="buttonPremium"
                  class="flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-medium text-sm shadow-md hover:shadow-lg"
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

                <!-- Map Button -->
                <Motion
                  tag="a"
                  :href="location.mapUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  v-bind="buttonPremium"
                  class="flex items-center justify-center gap-2 px-4 py-3 rounded-lg border-2 border-border bg-background hover:bg-accent hover:border-primary/50 transition-all font-medium text-sm text-foreground"
                  aria-label="Zobrazit na mapě"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                  Mapa
                </Motion>
              </div>
            </CardContent>
          </Card>
        </Motion>
      </Motion>
    </div>
  </section>
</template>
