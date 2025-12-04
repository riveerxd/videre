<script setup lang="ts">
import { Motion } from 'motion-v'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card'

const { fadeInUp, stagger, cardEntrance, scrollFadeIn } = useAnimations()
const { addBreadcrumbSchema, addFAQSchema } = useStructuredData()

// Dynamic canonical URL
useHead({
  link: [
    { rel: 'canonical', href: 'https://videre.cz/cenik' }
  ]
})

// SEO Meta tags
useSeoMeta({
  title: 'Ceník služeb Praha - Oční vyšetření, Botox, operace víček | Oční klinika Videre',
  description: 'Přehledný ceník očních služeb: vyšetření na řidičský průkaz 800 Kč, zbrojní průkaz 1500 Kč, OCT sítnice 700 Kč, Botox od 3000 Kč, výplně 4999 Kč/ml, plastika víček 15000 Kč. Transparentní ceny bez skrytých poplatků v Praze.',
  ogTitle: 'Ceník služeb Praha - Oční vyšetření, Botox, operace víček | Videre',
  ogDescription: 'Ceník očních vyšetření a estetické medicíny: řidičský průkaz 800 Kč, Botox od 3000 Kč, plastika víček 15000 Kč. Transparentní ceny v Praze.',
  ogImage: 'https://videre.cz/heroimage.webp',
  ogUrl: 'https://videre.cz/cenik',
  ogLocale: 'cs_CZ',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Ceník služeb Praha - Oční vyšetření, Botox, operace víček | Videre',
  twitterDescription: 'Transparentní ceník očních vyšetření a estetických zákroků v Praze. Bez skrytých poplatků.'
})

// Breadcrumb structured data
addBreadcrumbSchema([
  { name: 'Domů', url: 'https://videre.cz' },
  { name: 'Ceník', url: 'https://videre.cz/cenik' }
])

// Define OG Image
defineOgImageComponent('OgImageCustom', {
  title: 'Ceník služeb',
  description: 'Transparentní ceny očních vyšetření a estetické medicíny'
})

// FAQ schema for pricing questions
addFAQSchema([
  {
    question: 'Kolik stojí vyšetření na řidičský průkaz?',
    answer: 'Oční vyšetření na řidičský průkaz stojí 800 Kč včetně DPH. Cena je stejná pro všechny věkové kategorie včetně seniorů.'
  },
  {
    question: 'Jsou ceny uvedené v ceníku konečné?',
    answer: 'Ano, všechny ceny jsou uvedeny včetně DPH a bez skrytých poplatků. Ceny platí pro obě naše ordinace v Praze 4 a Praze 8.'
  },
  {
    question: 'Kolik stojí aplikace Botoxu?',
    answer: 'Cena aplikace Botoxu (Dysport) se liší dle oblasti: čelo, vrásky mezi obočím nebo u koutků očí - 3000 Kč za 25 jednotek. Individuální dávkování stojí 130 Kč za jednotku.'
  },
  {
    question: 'Kolik stojí plastická operace víček?',
    answer: 'Plastická operace horních nebo dolních víček stojí 15 000 Kč. Cena zahrnuje předoperační konzultaci, samotný zákrok a pooperační kontrolu.'
  },
  {
    question: 'Hradí pojišťovna oční vyšetření?',
    answer: 'Základní oční vyšetření pro pojištěnce je hrazeno zdravotní pojišťovnou. Vyšetření na řidičský průkaz, zbrojní průkaz a estetické zákroky hradí pacient.'
  }
])

// Price specification structured data for rich snippets
useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'OfferCatalog',
        name: 'Ceník služeb - Oční klinika Videre',
        description: 'Kompletní ceník očních vyšetření a estetické medicíny',
        provider: {
          '@type': 'MedicalClinic',
          name: 'Oční klinika Videre',
          url: 'https://videre.cz'
        },
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'MedicalProcedure',
              name: 'Vyšetření na řidičský průkaz',
              procedureType: 'Diagnostic'
            },
            price: '800',
            priceCurrency: 'CZK',
            priceValidUntil: '2025-12-31'
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'MedicalProcedure',
              name: 'Vyšetření na zbrojní průkaz',
              procedureType: 'Diagnostic'
            },
            price: '1500',
            priceCurrency: 'CZK',
            priceValidUntil: '2025-12-31'
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'MedicalProcedure',
              name: 'OCT vyšetření sítnice',
              procedureType: 'Diagnostic'
            },
            price: '700',
            priceCurrency: 'CZK',
            priceValidUntil: '2025-12-31'
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'MedicalProcedure',
              name: 'Aplikace Botoxu - oblast čela',
              procedureType: 'Cosmetic'
            },
            price: '3000',
            priceCurrency: 'CZK',
            priceValidUntil: '2025-12-31'
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'MedicalProcedure',
              name: 'Výplně kyselinou hyaluronovou',
              procedureType: 'Cosmetic'
            },
            price: '4999',
            priceCurrency: 'CZK',
            priceValidUntil: '2025-12-31'
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'MedicalProcedure',
              name: 'Plastická operace očních víček',
              procedureType: 'Surgical'
            },
            price: '15000',
            priceCurrency: 'CZK',
            priceValidUntil: '2025-12-31'
          }
        ]
      })
    }
  ]
})

const standardServices = [
  {
    name: 'Vyšetření na řidičský průkaz',
    price: '800 Kč',
    note: null
  },
  {
    name: 'Vyšetření na řidičský průkaz - Senioři',
    price: '800 Kč',
    note: null
  },
  {
    name: 'Vyšetření na zbrojní průkaz',
    price: '1 500 Kč',
    note: null
  },
  {
    name: 'Preventivní prohlídky pro zaměstnavatele',
    price: '1 000 Kč',
    note: 'Cílené vyšetření pro zaměstnavatele nebo jiné nezdravotnické instituce'
  },
  {
    name: 'Vyšetření OCT – sítnice, obě oči',
    price: '700 Kč',
    note: 'Pojištěnci 111 a 213 zdarma (Zárubova)'
  },
  {
    name: 'Vyšetření samoplátců - nepojištěných klientů',
    price: '2 000 Kč',
    note: 'Preventivní vyšetření'
  },
  {
    name: 'Výpis karty',
    price: '300 Kč',
    note: null
  },
  {
    name: 'Sepsání potvrzení',
    price: '800 Kč',
    note: 'Které nesouvisí s léčebnou činností'
  }
]

const aestheticServices = [
  {
    category: 'Výplně',
    items: [
      {
        name: 'Aplikace intradermálních výplní kyselinou hyaluronovou',
        price: '4 999 Kč',
        note: 'Cena za 1 ml'
      }
    ]
  },
  {
    category: 'Botox',
    items: [
      {
        name: 'Oblast čela',
        price: '3 000 Kč',
        note: '25 jednotek'
      },
      {
        name: 'Svislé vrásky mezi obočím',
        price: '3 000 Kč',
        note: '25 jednotek'
      },
      {
        name: 'Vrásky u vnějších koutků očí',
        price: '3 000 Kč',
        note: '25 jednotek'
      },
      {
        name: 'Botox proti pocení do obou podpaží',
        price: '7 000 Kč',
        note: '50 jednotek'
      },
      {
        name: 'Individuální dávka',
        price: '130 Kč',
        note: 'Cena za 1 jednotku (v případě, že si klient přeje méně jednotek)'
      }
    ]
  },
  {
    category: 'Mezoterapie',
    items: [
      {
        name: 'Mezoterapie pleti',
        price: 'od 2 500 Kč',
        note: 'Cena dle spotřebovaného materiálu'
      }
    ]
  },
  {
    category: 'Další zákroky',
    items: [
      {
        name: 'Odstranění patologických útvarů v oblasti očních víček',
        price: 'od 1 000 Kč',
        note: null
      },
      {
        name: 'Kapky k prodlužování řas a vyšetření',
        price: '1 500 Kč',
        note: '1 lahvička'
      }
    ]
  }
]

const surgeryServices = [
  {
    name: 'Plastická operace horních víček',
    price: '15 000 Kč',
    note: null
  },
  {
    name: 'Plastická operace dolních víček',
    price: '15 000 Kč',
    note: null
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
              Ceník služeb
            </h1>
            <p class="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Přehled cen za vyšetření a zákroky nehrazené zdravotní pojišťovnou. Ceny jsou uvedeny včetně DPH.
            </p>
          </Motion>
        </div>
      </header>

      <!-- Standard Services -->
      <section class="pb-24 md:pb-32">
        <div class="container mx-auto px-6 md:px-8 lg:px-12 xl:px-24">
          <Motion tag="div" v-bind="fadeInUp" class="mb-12">
            <h2 class="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Zákroky nehrazené zdravotní pojišťovnou
            </h2>
            <p class="text-muted-foreground max-w-3xl">
              Vyšetření a služby, které nejsou hrazeny z veřejného zdravotního pojištění
            </p>
          </Motion>

          <Motion tag="div" v-bind="fadeInUp">
            <Card class="border-0 bg-background/50 backdrop-blur-sm shadow-xl rounded-[2rem] overflow-hidden ring-1 ring-border/50">
              <CardContent class="p-0">
                <div class="divide-y divide-border/50">
                  <div
                    v-for="(service, index) in standardServices"
                    :key="index"
                    class="p-6 md:p-8 hover:bg-muted/30 transition-colors group"
                  >
                    <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div class="flex-1">
                        <h3 class="font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                          {{ service.name }}
                        </h3>
                        <p v-if="service.note" class="text-sm text-muted-foreground leading-relaxed">
                          {{ service.note }}
                        </p>
                      </div>
                      <div class="text-2xl font-bold text-primary shrink-0 bg-primary/5 px-4 py-2 rounded-xl">
                        {{ service.price }}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Motion>
        </div>
      </section>

      <!-- Aesthetic Medicine -->
      <section class="py-24 md:py-32 relative overflow-hidden">
        <div class="container mx-auto px-6 md:px-8 lg:px-12 xl:px-24 relative z-10">
          <Motion tag="div" v-bind="fadeInUp" class="mb-16">
            <h2 class="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Estetická medicína
            </h2>
            <p class="text-lg text-muted-foreground max-w-3xl leading-relaxed">
              Profesionální estetické zákroky v oblasti očí a obličeje
            </p>
          </Motion>

          <Motion
            tag="div"
            v-bind="stagger(0.1).animate"
            class="space-y-8"
          >
            <Motion
              v-for="(categoryGroup, groupIndex) in aestheticServices"
              :key="groupIndex"
              tag="div"
              v-bind="cardEntrance"
            >
              <Card class="border-0 bg-background/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 rounded-[2rem] overflow-hidden ring-1 ring-border/50">
                <CardHeader class="bg-primary/5 border-b border-primary/10 p-6 md:p-8">
                  <CardTitle class="text-2xl text-primary font-bold">{{ categoryGroup.category }}</CardTitle>
                </CardHeader>
                <CardContent class="p-0">
                  <div class="divide-y divide-border/50">
                    <div
                      v-for="(item, itemIndex) in categoryGroup.items"
                      :key="itemIndex"
                      class="p-6 md:p-8 hover:bg-muted/30 transition-colors group"
                    >
                      <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div class="flex-1">
                          <h3 class="font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                            {{ item.name }}
                          </h3>
                          <p v-if="item.note" class="text-sm text-muted-foreground leading-relaxed">
                            {{ item.note }}
                          </p>
                        </div>
                        <div class="text-xl md:text-2xl font-bold text-primary shrink-0">
                          {{ item.price }}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Motion>
          </Motion>
        </div>
      </section>

      <!-- Plastic Surgery -->
      <section class="py-24 md:py-32">
        <div class="container mx-auto px-6 md:px-8 lg:px-12 xl:px-24">
          <Motion tag="div" v-bind="fadeInUp" class="mb-16">
            <h2 class="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Plastická operace očních víček
            </h2>
            <p class="text-lg text-muted-foreground max-w-3xl leading-relaxed">
              Chirurgické zákroky prováděné zkušeným očním chirurgem s dlouholetou praxí
            </p>
          </Motion>

          <Motion tag="div" v-bind="scrollFadeIn">
            <Card class="border-0 bg-background/50 backdrop-blur-sm shadow-xl rounded-[2rem] overflow-hidden ring-1 ring-border/50">
              <CardContent class="p-0">
                <div class="divide-y divide-border/50">
                  <div
                    v-for="(surgery, index) in surgeryServices"
                    :key="index"
                    class="p-6 md:p-8 hover:bg-muted/30 transition-colors group"
                  >
                    <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div class="flex-1">
                        <h3 class="font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                          {{ surgery.name }}
                        </h3>
                        <p v-if="surgery.note" class="text-sm text-muted-foreground leading-relaxed">
                          {{ surgery.note }}
                        </p>
                      </div>
                      <div class="text-2xl font-bold text-primary shrink-0 bg-primary/5 px-4 py-2 rounded-xl">
                        {{ surgery.price }}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Motion>

          <Motion tag="div" v-bind="fadeInUp" class="mt-8">
            <div class="p-6 bg-primary/5 border-l-4 border-primary rounded-r-xl shadow-sm">
              <p class="text-base text-foreground leading-relaxed">
                <strong class="text-primary block mb-1">Poznámka:</strong> Všechny plastické operace víček provádí zkušený oční chirurg s dlouholetou praxí. Cena zahrnuje předoperační konzultaci, samotný zákrok a pooperační kontrolu.
              </p>
            </div>
          </Motion>
        </div>
      </section>

      <!-- Important Information -->
      <section class="py-24">
        <div class="container mx-auto px-6 md:px-8 lg:px-12 xl:px-24">
          <Motion tag="div" v-bind="fadeInUp">
            <Card class="border-0 bg-background shadow-xl rounded-[2rem] p-8 md:p-10 ring-1 ring-border/50">
              <CardHeader class="p-0 mb-8">
                <CardTitle class="flex items-center gap-3 text-2xl md:text-3xl">
                  <div class="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  Důležité informace
                </CardTitle>
              </CardHeader>
              <CardContent class="p-0 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="flex items-start gap-4 p-4 rounded-xl bg-muted/30">
                  <div class="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 mt-0.5">
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
                  <p class="text-muted-foreground font-medium">
                    Všechny ceny jsou uvedeny včetně DPH
                  </p>
                </div>
                <div class="flex items-start gap-4 p-4 rounded-xl bg-muted/30">
                  <div class="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 mt-0.5">
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
                  <p class="text-muted-foreground font-medium">
                    Ceny jsou platné pro obě naše ordinace v Praze 4 a Praze 8
                  </p>
                </div>
                <div class="flex items-start gap-4 p-4 rounded-xl bg-muted/30">
                  <div class="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 mt-0.5">
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
                  <p class="text-muted-foreground font-medium">
                    Před estetickými zákroky doporučujeme absolvovat konzultaci se specialistou
                  </p>
                </div>
                <div class="flex items-start gap-4 p-4 rounded-xl bg-muted/30">
                  <div class="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 mt-0.5">
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
                  <p class="text-muted-foreground font-medium">
                    Některá vyšetření mohou být hrazena zdravotní pojišťovnou na doporučení lékaře
                  </p>
                </div>
              </CardContent>
            </Card>
          </Motion>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="py-24 md:py-32">
        <div class="container mx-auto px-6 md:px-8 lg:px-12 xl:px-24">
          <Motion tag="div" v-bind="fadeInUp" class="text-center max-w-2xl mx-auto">
            <h2 class="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Máte dotazy k cenám?
            </h2>
            <p class="text-lg text-muted-foreground mb-10 leading-relaxed">
              Kontaktujte nás telefonicky nebo se objednejte na konzultaci v jedné z našich ordinací.
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
                  <path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Kontaktovat ordinaci
              </NuxtLink>
              <NuxtLink
                to="/sluzby"
                class="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-border bg-background hover:bg-accent/10 hover:border-primary/30 transition-all font-semibold text-foreground hover:-translate-y-0.5"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Zobrazit všechny služby
              </NuxtLink>
            </div>
          </Motion>
        </div>
      </section>

      <!-- SEO Content - Hidden but crawlable -->
      <section class="hidden">
        <h2>Ceník očních vyšetření v Praze</h2>
        <p>
          Oční klinika Videre nabízí transparentní ceník všech služeb a vyšetření. Specializujeme se na komplexní oční péči včetně vyšetření na řidičský průkaz, zbrojní průkaz, preventivní prohlídky pro zaměstnavatele a OCT vyšetření sítnice.
        </p>
        <h3>Vyšetření nehrazená pojišťovnou</h3>
        <p>
          Nabízíme vyšetření na řidičský průkaz za 800 Kč, vyšetření na zbrojní průkaz za 1500 Kč a komplexní preventivní prohlídky pro zaměstnavatele. OCT vyšetření sítnice je pro pojištěnce 111 a 213 v ordinaci Zárubova zdarma, ostatní samoplátci hradí 700 Kč.
        </p>
        <h3>Estetická medicína a plastická chirurgie</h3>
        <p>
          V oblasti estetické medicíny poskytujeme aplikace botoxu od 3000 Kč, výplně kyselinou hyaluronovou za 4999 Kč za ml a mezoterapii od 2500 Kč. Plastické operace očních víček provádíme za 15000 Kč, zákroky zajišťuje zkušený oční chirurg s dlouholetou praxí.
        </p>
        <h3>Kvalitní péče za spravedlivé ceny</h3>
        <p>
          Všechny naše služby jsou poskytovány odborníky s využitím moderních technologií. Ceny jsou finální včetně DPH bez skrytých poplatků. Pro některá vyšetření je možné využít příspěvek zdravotní pojišťovny na doporučení lékaře.
        </p>
      </section>
    </article>
  </div>
</template>
