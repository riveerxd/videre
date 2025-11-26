<script setup lang="ts">
import { Motion } from 'motion-v'
import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card'
import { Button } from '~/components/ui/button'

const { fadeInUp, stagger, cardEntrance } = useAnimations()

const services = [
  {
    title: 'Komplexní oční vyšetření',
    description: 'Vyšetření dětí i dospělých včetně předpisu brýlové korekce a diagnostiky očních onemocnění.',
    icon: 'eye',
    href: '/sluzby'
  },
  {
    title: 'Estetická medicína',
    description: 'Plastické operace víček, Botox, výplně kyselinou hyaluronovou a mezoterapie od zkušeného chirurga.',
    icon: 'beauty',
    href: '/sluzby/esteticka-medicina'
  },
  {
    title: 'Řidičský a zbrojní průkaz',
    description: 'Rychlé vyšetření pro řidičský průkaz od 800 Kč a zbrojní průkaz. Bez dlouhého čekání.',
    icon: 'license',
    href: '/cenik'
  },
  {
    title: 'OCT vyšetření sítnice',
    description: 'Moderní diagnostika sítnice a zrakového nervu. Pro pojištěnce 111 a 213 zdarma v ordinaci Zárubova.',
    icon: 'scan',
    href: '/sluzby'
  },
]
</script>

<template>
  <section id="sluzby" class="py-24 md:py-32 relative">
    <div class="container mx-auto px-6 md:px-8 lg:px-12 xl:px-24">
      <!-- Section Header -->
      <Motion tag="div" v-bind="fadeInUp" class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 tracking-tight">
          Naše služby
        </h2>
        <p class="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Poskytujeme komplexní péči o Váš zrak na nejvyšší úrovni.
        </p>
      </Motion>

      <!-- Services Grid -->
      <Motion
        tag="div"
        v-bind="stagger(0.15).animate"
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        <Motion
          v-for="(service, index) in services"
          :key="index"
          tag="div"
          v-bind="cardEntrance"
        >
          <Card class="h-full group hover:shadow-xl transition-all duration-300 border border-border/50 bg-background hover:border-primary/20 rounded-2xl overflow-hidden flex flex-col">
            <CardHeader class="p-6 pb-4">
              <div class="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                <!-- Icons -->
                <!-- Eye exam icon -->
                <svg v-if="service.icon === 'eye'" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                <!-- Beauty/aesthetics icon -->
                <svg v-else-if="service.icon === 'beauty'" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
                <!-- License/ID card icon -->
                <svg v-else-if="service.icon === 'license'" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                </svg>
                <!-- OCT scan icon -->
                <svg v-else-if="service.icon === 'scan'" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <CardTitle class="text-xl font-bold text-foreground leading-tight group-hover:text-primary transition-colors">
                {{ service.title }}
              </CardTitle>
            </CardHeader>

            <CardContent class="p-6 pt-0">
              <p class="text-muted-foreground leading-relaxed text-sm">
                {{ service.description }}
              </p>
            </CardContent>
          </Card>
        </Motion>
      </Motion>

      <!-- All Services Button -->
      <Motion tag="div" v-bind="fadeInUp" class="text-center mt-12">
        <Button as-child variant="outline" class="rounded-full px-8 border-primary/20 hover:bg-primary/5 hover:text-primary">
          <NuxtLink to="/sluzby">Zobrazit všechny služby</NuxtLink>
        </Button>
      </Motion>
    </div>
  </section>
</template>
