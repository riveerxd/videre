<script setup lang="ts">
import { Motion } from 'motion-v'
import { CardContent, CardHeader, CardTitle } from '~/components/ui/card'

const { fadeInUp, stagger, cardEntrance } = useAnimations()

const news = [
  {
    title: 'Dovolená v ordinacích',
    description: 'Do 4. 1. 2026 včetně máme v našich ordinacích dovolenou. Děkujeme za pochopení a přejeme krásné svátky.',
    date: '2025-12-20',
    icon: 'calendar'
  },
  {
    title: 'Příjímáme nové pacienty',
    description: 'Jsme rádi, že můžeme přijímat nové pacienty do naší oční kliniky. Nabízíme komplexní péči o Vaše oči s využitím nejmodernějších technologií.',
    date: '2025-11-15',
    icon: 'user-plus'
  }
]
</script>

<template>
  <section id="novinky" class="py-24 md:py-32 relative">
    <div class="container mx-auto px-6 md:px-8 lg:px-12 xl:px-24">
      <!-- Section Header -->
      <Motion tag="div" v-bind="fadeInUp" class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 tracking-tight">
          Novinky
        </h2>
        <p class="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Aktuální informace z naší oční kliniky
        </p>
      </Motion>

      <!-- News Grid -->
      <Motion
        tag="div"
        v-bind="stagger(0.15).animate"
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
      >
        <Motion
          v-for="(item, index) in news"
          :key="index"
          tag="div"
          v-bind="cardEntrance"
        >
          <div class="h-full group rounded-2xl border border-border/50 bg-background hover:border-primary/20 hover:shadow-xl transition-all duration-300 overflow-hidden">
            <CardHeader class="p-6 pb-4">
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/10 transition-colors">
                  <svg
                    v-if="item.icon === 'calendar'"
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <svg
                    v-if="item.icon === 'user-plus'"
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                  </svg>
                </div>
                <div class="flex-1">
                  <div class="text-sm font-medium text-primary mb-1">
                    {{ new Date(item.date).toLocaleDateString('cs-CZ', { year: 'numeric', month: 'long', day: 'numeric' }) }}
                  </div>
                  <CardTitle class="text-xl font-bold text-foreground leading-tight group-hover:text-primary transition-colors">
                    {{ item.title }}
                  </CardTitle>
                </div>
              </div>
            </CardHeader>

            <CardContent class="p-6 pt-2">
              <p class="text-muted-foreground leading-relaxed">
                {{ item.description }}
              </p>
            </CardContent>
          </div>
        </Motion>
      </Motion>
    </div>
  </section>
</template>
