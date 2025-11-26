<script setup lang="ts">
import { Motion } from 'motion-v'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card'

const { fadeInUp, stagger, cardEntrance } = useAnimations()
const { addBreadcrumbSchema } = useStructuredData()

// Dynamic canonical URL
useHead({
  link: [
    { rel: 'canonical', href: 'https://videre.cz/nas-tym' }
  ]
})

// SEO Meta tags
useSeoMeta({
  title: 'Oční lékaři Praha - Náš tým zkušených oftalmologů | Oční klinika Videre',
  description: 'Tým zkušených oftalmologů Oční kliniky Videre v Praze s více než 150 lety společné praxe. MUDr. Samer Al Marei, MUDr. Irena Svobodová, MUDr. Ingrid Pavlová a MUDr. Ahmed Sayed Ahmed. Členové České oftalmologické společnosti, atestovaní odborníci.',
  ogTitle: 'Oční lékaři Praha - Náš tým zkušených oftalmologů | Videre',
  ogDescription: 'Tým 4 zkušených oftalmologů s více než 150 lety společné praxe v Praze. Profesionální oční péče na nejvyšší úrovni.',
  ogImage: 'https://videre.cz/almarei.jpeg',
  ogUrl: 'https://videre.cz/nas-tym',
  ogLocale: 'cs_CZ',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Oční lékaři Praha - Náš tým zkušených oftalmologů | Videre',
  twitterDescription: 'Seznamte se s týmem 4 zkušených oftalmologů Oční kliniky Videre v Praze.'
})

// Breadcrumb structured data
addBreadcrumbSchema([
  { name: 'Domů', url: 'https://videre.cz' },
  { name: 'Náš tým', url: 'https://videre.cz/nas-tym' }
])

// Define OG Image
defineOgImageComponent('NuxtSeo', {
  
  title: 'Náš tým',
  description: 'Zkušení oftalmologové s více než 150 lety praxe',
  siteName: 'Videre.cz', siteLogo: 'https://videre.cz/logo.png', theme: '#0F766E', colorMode: 'light'
})

// Person structured data for doctors
useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'MedicalWebPage',
        name: 'Náš tým - Oční klinika Videre',
        description: 'Tým zkušených oftalmologů Oční kliniky Videre v Praze',
        mainEntity: [
          {
            '@type': 'Physician',
            name: 'MUDr. Samer Al Marei',
            medicalSpecialty: 'Ophthalmology',
            memberOf: {
              '@type': 'MedicalOrganization',
              name: 'Oční klinika Videre'
            }
          },
          {
            '@type': 'Physician',
            name: 'MUDr. Irena Svobodová',
            medicalSpecialty: 'Ophthalmology',
            memberOf: {
              '@type': 'MedicalOrganization',
              name: 'Oční klinika Videre'
            }
          },
          {
            '@type': 'Physician',
            name: 'MUDr. Ingrid Pavlová',
            medicalSpecialty: 'Ophthalmology',
            memberOf: {
              '@type': 'MedicalOrganization',
              name: 'Oční klinika Videre'
            }
          },
          {
            '@type': 'Physician',
            name: 'MUDr. Ahmed Sayed Ahmed',
            medicalSpecialty: 'Ophthalmology',
            memberOf: {
              '@type': 'MedicalOrganization',
              name: 'Oční klinika Videre'
            }
          }
        ]
      })
    }
  ]
})

const doctors = [
  {
    name: 'MUDr. Samer Al Marei',
    title: 'oční lékař',
    image: '/almarei.jpeg',
    education: [
      '2008 – Promoce na Masarykově univerzitě LF',
      '2016 – Atestace z oftalmologie',
      '2017 – IPVZ – Specializační kurz – Aplikace botulotoxinu a výplňových materiálů v korektivní dermatologii'
    ],
    languages: 'čeština, angličtina, arabština',
    experience: [
      'Nemocnice Na Bulovce v Praze',
      'Fakultní nemocnice u Sv. Anny v Brně',
      'Nemocnice Kyjov',
      'Hekma Hospital, Sýrie'
    ],
    memberships: [
      'Člen České oftalmologické společnosti',
      'Člen Syrské oftalmologické společnosti',
      'Česká lékařská komora'
    ]
  },
  {
    name: 'MUDr. Irena Svobodová',
    title: 'oční lékař',
    image: '/svobodova.jpeg',
    education: [
      'Vystudovala lékařskou fakultu všeobecného lékařství Karlovy univerzity v Hradci Králové',
      'Před-atestační přípravu absolvovala na očním oddělení Thomayerovy nemocnice v Praze Krči'
    ],
    languages: null,
    experience: [
      'Více jak 35 let praxe v oboru',
      'Od roku 1992 má soukromou praxi',
      'Od roku 2011 souběžně se svou ordinací pracovala 7 let na klinice Gemini'
    ],
    memberships: [
      'Člen České oftalmologické společnosti',
      'Česká lékařská komora'
    ]
  },
  {
    name: 'MUDr. Ingrid Pavlová',
    title: 'oční lékař',
    image: '/pavlova.jpeg',
    education: [
      'Vystudovala lékařskou fakultu všeobecného lékařství Karlovy univerzity v Praze',
      'Před-atestační přípravu absolvovala na II. oční klinice FN'
    ],
    languages: 'čeština, angličtina, němčina, ruština',
    experience: [
      'Více jak 40 let praxe v oboru',
      'Od roku 1992 má soukromou praxi',
      'Pracovala na očním oddělení na Bulovce v Praze'
    ],
    memberships: [
      'Člen České oftalmologické společnosti',
      'Česká lékařská komora'
    ]
  },
  {
    name: 'MUDr. Ahmed Sayed Ahmed',
    title: 'oční lékař',
    image: '/ahmed.jpeg',
    education: [
      '1979 – Promoce na Masarykově univerzitě (dříve J. E. Purkyně)',
      '1982 – Atestace z oftalmologie v Českých Budějovicích'
    ],
    languages: null,
    experience: [
      'Více jak 40 let praxe v oboru',
      '2 roky Vojenská nemocnice oční odd. v Lattakia, Sýrie',
      'Od roku 1990 oční odd. LF nemocnice Lattakia, Sýrie do roku 2012',
      'Vlastní soukromá praxe od roku 1986'
    ],
    memberships: [
      'Člen Syrské oftalmologické společnosti',
      'Člen Syrské lékařské komory'
    ]
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
              Náš tým
            </h1>
            <p class="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Seznamte se s našimi zkušenými oftalmology s dlouholetou praxí v oboru. Každý člen našeho týmu je odborník s odpovídající kvalifikací a bohatými zkušenostmi.
            </p>
          </Motion>
        </div>
      </header>

      <!-- Team Members -->
      <section class="pb-24 md:pb-32">
        <div class="container mx-auto px-6 md:px-8 lg:px-12 xl:px-24">
          <Motion
            tag="div"
            v-bind="stagger(0.15).animate"
            class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto"
          >
            <!-- Doctor Cards -->
            <Motion
              v-for="(doctor, index) in doctors"
              :key="index"
              tag="div"
              v-bind="cardEntrance"
            >
              <Card class="h-full group hover:shadow-2xl transition-all duration-500 border-0 bg-background/80 backdrop-blur-sm ring-1 ring-border/50 overflow-hidden rounded-[2rem]">
                <!-- Doctor Photo with Name Overlay -->
                <div class="relative h-[450px] overflow-hidden">
                  <NuxtImg
                    :src="doctor.image"
                    :alt="doctor.name"
                    width="600"
                    height="450"
                    format="webp"
                    class="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90" />
                  <div class="absolute bottom-6 left-6 right-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <h2 class="text-white text-2xl font-bold drop-shadow-lg mb-2">
                      {{ doctor.name }}
                    </h2>
                    <div class="inline-flex items-center px-3 py-1 rounded-full bg-primary/20 border border-primary/30 backdrop-blur-md">
                      <span class="text-white/95 text-sm font-medium">
                        {{ doctor.title }}
                      </span>
                    </div>
                  </div>
                </div>

                <CardContent class="p-8 space-y-6">
                  <!-- Education -->
                  <div class="space-y-3">
                    <h3 class="text-sm font-bold text-primary uppercase tracking-wider flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                      </svg>
                      Vzdělání
                    </h3>
                    <ul class="space-y-2 pl-6 border-l-2 border-primary/10">
                      <li
                        v-for="(item, eduIndex) in doctor.education"
                        :key="eduIndex"
                        class="text-sm text-muted-foreground leading-relaxed"
                      >
                        {{ item }}
                      </li>
                    </ul>
                  </div>

                  <!-- Languages -->
                  <div v-if="doctor.languages" class="space-y-3">
                    <h3 class="text-sm font-bold text-primary uppercase tracking-wider flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                      </svg>
                      Znalost jazyků
                    </h3>
                    <p class="text-sm text-muted-foreground pl-6 border-l-2 border-primary/10">{{ doctor.languages }}</p>
                  </div>

                  <!-- Experience -->
                  <div class="space-y-3">
                    <h3 class="text-sm font-bold text-primary uppercase tracking-wider flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      Praxe
                    </h3>
                    <ul class="space-y-2 pl-6 border-l-2 border-primary/10">
                      <li
                        v-for="(item, expIndex) in doctor.experience"
                        :key="expIndex"
                        class="text-sm text-muted-foreground leading-relaxed"
                      >
                        {{ item }}
                      </li>
                    </ul>
                  </div>

                  <!-- Memberships -->
                  <div class="space-y-3">
                    <h3 class="text-sm font-bold text-primary uppercase tracking-wider flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                      Členství
                    </h3>
                    <ul class="space-y-2 pl-6 border-l-2 border-primary/10">
                      <li
                        v-for="(item, memIndex) in doctor.memberships"
                        :key="memIndex"
                        class="text-sm text-muted-foreground leading-relaxed"
                      >
                        {{ item }}
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </Motion>
          </Motion>
        </div>
      </section>

      <!-- Team Stats -->
      <section class="py-24 relative overflow-hidden">
        <div class="container mx-auto px-6 md:px-8 lg:px-12 xl:px-24 relative z-10">
          <Motion
            tag="div"
            v-bind="stagger(0.1).animate"
            class="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <Motion tag="div" v-bind="cardEntrance">
              <Card class="text-center border-0 bg-background/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl p-6">
                <CardContent class="pt-6">
                  <div class="text-5xl md:text-6xl font-bold text-primary mb-4 tracking-tighter">
                    40+
                  </div>
                  <p class="text-muted-foreground font-medium">
                    Let zkušeností našich lékařů
                  </p>
                </CardContent>
              </Card>
            </Motion>

            <Motion tag="div" v-bind="cardEntrance">
              <Card class="text-center border-0 bg-background/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl p-6">
                <CardContent class="pt-6">
                  <div class="text-5xl md:text-6xl font-bold text-primary mb-4 tracking-tighter">
                    4
                  </div>
                  <p class="text-muted-foreground font-medium">
                    Zkušení oční lékaři
                  </p>
                </CardContent>
              </Card>
            </Motion>

            <Motion tag="div" v-bind="cardEntrance">
              <Card class="text-center border-0 bg-background/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl p-6">
                <CardContent class="pt-6">
                  <div class="text-5xl md:text-6xl font-bold text-primary mb-4 tracking-tighter">
                    5+
                  </div>
                  <p class="text-muted-foreground font-medium">
                    Jazyků které ovládáme
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
          <Motion tag="div" v-bind="fadeInUp" class="text-center max-w-3xl mx-auto">
            <h2 class="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Svěřte své oči do rukou odborníků
            </h2>
            <p class="text-lg text-muted-foreground mb-10 leading-relaxed">
              Objednejte se na vyšetření k jednomu z našich zkušených oftalmologů v Praze.
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
                Objednat se
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
                Naše služby
              </NuxtLink>
            </div>
          </Motion>
        </div>
      </section>

      <!-- SEO Content - Hidden but crawlable -->
      <section class="hidden">
        <h2>Zkušení oftalmologové v Praze</h2>
        <p>
          Oční klinika Videre disponuje týmem zkušených oftalmologů s dlouholetou praxí v oboru. Naši lékaři mají celkem více než 150 let společných zkušeností v péči o oči. Všichni jsou členy České oftalmologické společnosti a České lékařské komory.
        </p>
        <h3>MUDr. Samer Al Marei</h3>
        <p>
          MUDr. Samer Al Marei absolvoval Masarykovu univerzitu v roce 2008 a atestaci z oftalmologie získal v roce 2016. Specializuje se také na aplikaci botulotoxinu a výplňových materiálů v korektivní dermatologii. Ovládá češtinu, angličtinu a arabštinu. Získal zkušenosti v Nemocnici Na Bulovce v Praze, Fakultní nemocnici u Sv. Anny v Brně a dalších prestižních zdravotnických zařízeních.
        </p>
        <h3>MUDr. Irena Svobodová</h3>
        <p>
          MUDr. Irena Svobodová má více jak 35 let praxe v oboru oftalmologie. Vystudovala lékařskou fakultu Karlovy univerzity v Hradci Králové a před-atestační přípravu absolvovala na očním oddělení Thomayerovy nemocnice v Praze Krči. Od roku 1992 má soukromou praxi a 7 let pracovala také na klinice Gemini.
        </p>
        <h3>MUDr. Ingrid Pavlová</h3>
        <p>
          MUDr. Ingrid Pavlová přináší do našeho týmu více než 40 let zkušeností v oftalmologii. Vystudovala lékařskou fakultu Karlovy univerzity v Praze a před-atestační přípravu absolvovala na II. oční klinice FN. Ovládá češtinu, angličtinu, němčinu a ruštinu. Od roku 1992 má soukromou praxi a pracovala na očním oddělení na Bulovce v Praze.
        </p>
        <h3>MUDr. Ahmed Sayed Ahmed</h3>
        <p>
          MUDr. Ahmed Sayed Ahmed je oční lékař s více než 40 lety praxe. Promoci získal na Masarykově univerzitě v roce 1979 a atestaci z oftalmologie v Českých Budějovicích v roce 1982. Pracoval ve Vojenské nemocnici v Lattakia v Sýrii a na očním oddělení LF nemocnice Lattakia. Vlastní soukromou praxi vede od roku 1986.
        </p>
      </section>
    </article>
  </div>
</template>
