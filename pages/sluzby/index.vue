<script setup lang="ts">
import { Motion } from 'motion-v'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card'

const { fadeInUp, stagger, cardEntrance } = useAnimations()
const { addBreadcrumbSchema, addServiceSchema, addFAQSchema } = useStructuredData()

// Dynamic canonical URL
useHead({
  link: [
    { rel: 'canonical', href: 'https://videre.cz/sluzby' }
  ]
})

// SEO Meta tags
useSeoMeta({
  title: 'Oční služby v Praze - Vyšetření, diagnostika, léčba | Oční klinika Videre',
  description: 'Poskytujeme komplexní oční péči včetně vyšetření zraku, předpisu brýlí a kontaktních čoček, diagnostiku a léčbu očních onemocnění, preventivní prohlídky a estetickou medicínu. Moderní OCT, perimetr, pachymetr. Zkušení oftalmologové v Praze.',
  ogTitle: 'Oční služby v Praze - Vyšetření, diagnostika, léčba | Videre',
  ogDescription: 'Komplexní oční vyšetření, diagnostika pomocí OCT a perimetru, léčba očních onemocnění, předpis brýlí a kontaktních čoček. Moderní technologie v Praze.',
  ogImage: 'https://videre.cz/poliklinika_zarubova.jpg',
  ogUrl: 'https://videre.cz/sluzby',
  ogLocale: 'cs_CZ',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Oční služby v Praze - Vyšetření, diagnostika, léčba | Videre',
  twitterDescription: 'Komplexní oční vyšetření, diagnostika a léčba očních onemocnění v Praze. Moderní technologie.'
})

// Breadcrumb structured data
addBreadcrumbSchema([
  { name: 'Domů', url: 'https://videre.cz' },
  { name: 'Služby', url: 'https://videre.cz/sluzby' }
])

// Service schema for main services
addServiceSchema({
  name: 'Komplexní oční vyšetření',
  description: 'Komplexní oční vyšetření dětí a dospělých včetně měření zrakové ostrosti, vyšetření předního a zadního segmentu oka, měření nitroočního tlaku a diagnostiky očních onemocnění.',
  provider: 'Oční klinika Videre',
  serviceType: 'Diagnostic',
  url: 'https://videre.cz/sluzby'
})

// Define OG Image
defineOgImageComponent('OgImageCustom', {
  title: 'Naše služby',
  description: 'Komplexní oční péče, diagnostika a léčba očních onemocnění'
})

// FAQ schema for common questions
addFAQSchema([
  {
    question: 'Jaké oční vyšetření provádíte?',
    answer: 'Provádíme komplexní oční vyšetření dětí a dospělých, vyšetření na brýle a kontaktní čočky, preventivní prohlídky, vyšetření na řidičský průkaz, diagnostiku glaukomu, katarakty, makulární degenerace a dalších očních onemocnění pomocí moderních přístrojů jako OCT, perimetr a pachymetr.'
  },
  {
    question: 'Jak se objednat na oční vyšetření?',
    answer: 'Objednat se můžete telefonicky na našich pobočkách v Praze 4 (Poliklinika Zárubova) nebo v Praze 8 (Poliklinika Čumpelíkova) během ordinačních hodin, případně e-mailem.'
  },
  {
    question: 'Kolik stojí oční vyšetření?',
    answer: 'Ceny našich služeb naleznete v sekci Ceník. Základní oční vyšetření je hrazeno pojišťovnou, některé nadstandardní služby jsou placeny pacientem.'
  },
  {
    question: 'Co je OCT vyšetření a kdy je potřeba?',
    answer: 'OCT (optická koherenční tomografie) je neinvazivní zobrazovací metoda, která vytváří detailní snímky sítnice a zrakového nervu. Je klíčová pro diagnostiku a sledování makulární degenerace, glaukomu a diabetické retinopatie.'
  },
  {
    question: 'Jak často bych měl chodit na oční prohlídku?',
    answer: 'Doporučujeme pravidelné oční vyšetření jednou ročně. U dětí, seniorů, diabetiků a pacientů s očním onemocněním je vhodná častější kontrola dle doporučení lékaře.'
  }
])

const services = [
  'Komplexní oční vyšetření dětí a dospělých a předpis brýlové korekce',
  'Zhotovení brýlí v naší oční optice',
  'Vyšetření a diagnostika chorob předního a zadního očního segmentu (slzné cesty, onemocnění rohovky, šedý zákal, makulární degenerace, glaukom, diabetu, hypertenze a cévních patologií)',
  'Vyšetření, předoperační příprava a objednání k operaci katarakty (šedý zákal), glaukom (zelený zákal), sítnice a péče o pacienty po operaci',
  'Preventivní a vstupní prohlídky, vyšetření na řidičský průkaz, zbrojní průkaz',
  'Vyšetření na kontaktní čočky a jejich aplikaci, pravidelné kontroly',
  'Nadstandardní diagnostická vyšetření (počítačový perimetr, OCT, Pachymetr)',
  'Léčebné programy očních onemocnění v úzké spoluprací s prestižními očními klinikami'
]

const technologies = [
  {
    name: 'Aplanační tonometr',
    description: 'Měření nitroočního tlaku je základem v péči o glaukomové pacienty (zelený zákal) a patří též k základnímu preventivnímu programu v naší ordinaci. Každý, kdo dovršil 40-ti let věku, by měl toto vyšetření podstoupit…'
  },
  {
    name: 'Autokeratorefraktometr',
    description: 'Přístroj je nepostradatelným pomocníkem v každé oční ambulanci. Slouží k zjištění oční vady (krátkozrakost, dalekozrakost, astigmatismus) a měří parametry rohovky nutné pro správný výběr kontaktních čoček…'
  },
  {
    name: 'Perimetr',
    description: 'Pomocí perimetru vyšetřujeme zorné pole. Toto vyšetření mapuje funkci sítnice, zrakového nervu a zrakové dráhy až k centru vidění v mozku. Vyšetření se též provádí u řidičů ke zjištění dostatečného periferního vidění…'
  },
  {
    name: 'OCT',
    description: 'Tento přístroj využívá infračervené světlo k zobrazení biologických tkání v jejich příčném průřezu. Pomáhá stanovit správnou diagnózu očního onemocnění, porovnávat vyšetření v časových intervalech, naplánovat odpovídající léčbu a vyhodnotit její účinnost…'
  },
  {
    name: 'Pachymetr',
    description: 'Tloušťku rohovky měříme pomocí ultrazvukového přístroje – pachymetru. Její znalost je důležitá pro správné vyhodnocení zjištěného nitroočního tlaku u glaukomového onemocnění (zelený zákal). Je nezbytným parametrem i v refrakční chirurgii k rozhodnutí způsobu operace u očních vad…'
  }
]
</script>

<template>
  <div class="min-h-screen">
    <article>
      <!-- Page Header -->
      <header class="relative py-24 md:py-32 overflow-hidden">
        <!-- Background decorative blobs -->
        <div class="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <div class="absolute top-[10%] left-[10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px]" />
          <div class="absolute bottom-[10%] right-[10%] w-[30%] h-[30%] bg-accent/5 rounded-full blur-[100px]" />
        </div>

        <div class="container relative z-10 mx-auto px-6 md:px-8 lg:px-12 xl:px-24">
          <Motion tag="div" v-bind="fadeInUp" class="text-center max-w-3xl mx-auto">
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight">
              Naše služby
            </h1>
            <p class="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Poskytujeme komplexní oční péči s využitím moderních diagnostických a léčebných metod. Náš tým zkušených oftalmologů se postará o zdraví vašich očí.
            </p>
          </Motion>
        </div>
      </header>

      <!-- Services Section -->
      <section class="pb-24 md:pb-32">
        <div class="container mx-auto px-6 md:px-8 lg:px-12 xl:px-24">
          <Motion tag="div" v-bind="fadeInUp" class="mb-12">
            <h2 class="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Provádíme
            </h2>
          </Motion>

          <Motion tag="div" v-bind="fadeInUp">
            <Card class="border-0 bg-background/50 backdrop-blur-sm shadow-xl rounded-[2rem] overflow-hidden ring-1 ring-border/50">
              <CardContent class="p-8 md:p-10">
                <ul class="space-y-6">
                  <li
                    v-for="(service, index) in services"
                    :key="index"
                    class="flex items-start gap-4 text-muted-foreground group"
                  >
                    <div class="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 mt-0.5 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span class="text-base md:text-lg leading-relaxed group-hover:text-foreground transition-colors">{{ service }}</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </Motion>
        </div>
      </section>

      <!-- Technologies Section -->
      <section class="py-24 md:py-32 relative overflow-hidden">
        <div class="container mx-auto px-6 md:px-8 lg:px-12 xl:px-24 relative z-10">
          <Motion tag="div" v-bind="fadeInUp" class="mb-16">
            <h2 class="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Technologie
            </h2>
            <p class="text-lg text-muted-foreground max-w-3xl leading-relaxed">
              Naše ordinace jsou vybaveny nejmodernějšími diagnostickými přístroji pro přesnou diagnostiku a sledování očních onemocnění.
            </p>
          </Motion>

          <Motion
            tag="div"
            v-bind="stagger(0.1).animate"
            class="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <Motion
              v-for="(tech, index) in technologies"
              :key="index"
              tag="div"
              v-bind="cardEntrance"
            >
              <Card class="h-full border-0 bg-background/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 rounded-[2rem] overflow-hidden ring-1 ring-border/50 group">
                <CardHeader class="p-8 pb-4">
                  <CardTitle class="text-xl md:text-2xl text-primary font-bold group-hover:translate-x-1 transition-transform">{{ tech.name }}</CardTitle>
                </CardHeader>
                <CardContent class="p-8 pt-4">
                  <p class="text-base text-muted-foreground leading-relaxed">
                    {{ tech.description }}
                  </p>
                </CardContent>
              </Card>
            </Motion>
          </Motion>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="py-24 md:py-32">
        <div class="container mx-auto px-6 md:px-8 lg:px-12 xl:px-24">
          <Motion tag="div" v-bind="fadeInUp" class="text-center max-w-2xl mx-auto">
            <h2 class="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Potřebujete oční vyšetření?
            </h2>
            <p class="text-lg text-muted-foreground mb-10 leading-relaxed">
              Objednejte se v jedné z našich ordinací v Praze. Jsme tu pro Vás.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <NuxtLink
                to="/#ordinace"
                class="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-all font-semibold shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Naše ordinace
              </NuxtLink>
            </div>
          </Motion>
        </div>
      </section>

      <!-- SEO Content - Hidden but crawlable -->
      <section class="hidden">
        <h2>Komplexní oční péče v Praze</h2>
        <p>
          Oční klinika Videre poskytuje kompletní spektrum oftalmologických služeb v Praze. Naše dvě moderní ordinace v Praze 4 a Praze 8 jsou vybaveny nejnovější diagnostickou a léčebnou technikou pro zajištění špičkové péče o Vaše oči.
        </p>
        <h3>Preventivní oční vyšetření</h3>
        <p>
          Pravidelné preventivní prohlídky jsou klíčem k udržení zdravého zraku. Doporučujeme kompletní oční vyšetření minimálně jednou ročně, u dětí, seniorů a rizikových pacientů častěji. Naše vyšetření zahrnuje měření zrakové ostrosti, vyšetření předního segmentu oka, měření nitroočního tlaku a vyšetření očního pozadí.
        </p>
        <h3>Diagnostika a léčba očních onemocnění</h3>
        <p>
          Specializujeme se na diagnostiku a léčbu širokého spektra očních onemocnění včetně glaukomu, katarakty, diabetické retinopatie, makulární degenerace a zánětlivých onemocnění očí. Využíváme moderní diagnostické metody jako OCT, perimetrie a další.
        </p>
        <h3>Brýle a kontaktní čočky</h3>
        <p>
          Nabízíme odborný předpis brýlí a kontaktních čoček včetně komplexního poradenství při výběru vhodných brýlových obrub a čoček. Provádíme aplikaci kontaktních čoček a instruktáž péče o ně.
        </p>
      </section>
    </article>
  </div>
</template>
