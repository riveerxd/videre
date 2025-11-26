<script setup lang="ts">
import { Motion } from 'motion-v'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card'

const { fadeInUp, stagger, cardEntrance, scrollFadeIn } = useAnimations()
const { addBreadcrumbSchema, addServiceSchema, addFAQSchema, addLocalBusinessSchema } = useStructuredData()

// Dynamic canonical URL
useHead({
  link: [
    { rel: 'canonical', href: 'https://videre.cz/sluzby/optika' }
  ]
})

// SEO Meta tags
useSeoMeta({
  title: 'Oční optika Praha 4 - Dioptrické brýle od 218 Kč | Optiscont Videre',
  description: 'Oční optika Optiscont v čekárně naší ordinace v Praze 4 na Zárubové. Více než 130 modelů brýlových obrub, kompletní dioptrické brýle již od 218 Kč po odečtení příspěvku pojišťovny. Doživotní záruka, dodání do týdne přímo domů.',
  ogTitle: 'Oční optika Praha 4 - Dioptrické brýle od 218 Kč | Optiscont Videre',
  ogDescription: 'Oční optika v čekárně naší ordinace v Praze 4. Více než 130 modelů obrub, kompletní brýle od 218 Kč, doživotní záruka.',
  ogImage: 'https://videre.cz/poliklinika_zarubova.jpg',
  ogUrl: 'https://videre.cz/sluzby/optika',
  ogLocale: 'cs_CZ',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Oční optika Praha 4 - Dioptrické brýle od 218 Kč | Optiscont Videre',
  twitterDescription: 'Oční optika v Praze 4. Více než 130 modelů obrub, kompletní brýle od 218 Kč s doživotní zárukou.'
})

// Breadcrumb structured data
addBreadcrumbSchema([
  { name: 'Domů', url: 'https://videre.cz' },
  { name: 'Služby', url: 'https://videre.cz/sluzby' },
  { name: 'Optika', url: 'https://videre.cz/sluzby/optika' }
])

// LocalBusiness schema for optika
addLocalBusinessSchema({
  name: 'Oční optika Optiscont - Videre',
  description: 'Oční optika s více než 130 modely brýlových obrub. Kompletní dioptrické brýle od 218 Kč po odečtení příspěvku pojišťovny. Doživotní záruka na všechny brýle.',
  url: 'https://videre.cz/sluzby/optika',
  telephone: '+420776471040',
  email: 'info@videre.cz',
  image: 'https://videre.cz/poliklinika_zarubova.jpg',
  address: {
    streetAddress: 'Zárubova 498/31',
    addressLocality: 'Praha 4',
    postalCode: '142 00',
    addressCountry: 'CZ'
  },
  geo: {
    latitude: 50.035267,
    longitude: 14.444947
  },
  priceRange: '$',
  medicalSpecialty: 'Optometry'
})

// Service schema for optika
addServiceSchema({
  name: 'Dioptrické brýle a brýlové obruby',
  description: 'Prodej dioptrických brýlí a brýlových obrub. Více než 130 modelů obrub k vyzkoušení, odborné poradenství, doživotní záruka. Kompletní brýle od 218 Kč.',
  provider: 'Oční optika Optiscont',
  serviceType: 'Therapeutic',
  url: 'https://videre.cz/sluzby/optika'
})

// Define OG Image
defineOgImageComponent('NuxtSeo', {
  
  title: 'Oční optika',
  description: 'Dioptrické brýle od 218 Kč s doživotní zárukou',
  siteName: 'Videre.cz', siteLogo: 'https://videre.cz/logo.png', theme: '#0F766E', colorMode: 'light'
})

// FAQ schema for optika
addFAQSchema([
  {
    question: 'Kolik stojí dioptrické brýle?',
    answer: 'Kompletní dioptrické brýle u nás pořídíte již od 218 Kč po odečtení maximálního příspěvku zdravotní pojišťovny. Cena závisí na typu obrub a typu čoček.'
  },
  {
    question: 'Jak dlouho trvá zhotovení brýlí?',
    answer: 'Brýle vám zhotovíme a doručíme domů do jednoho týdne od objednání. Doručení je formou dobírky.'
  },
  {
    question: 'Jakou záruku poskytujete na brýle?',
    answer: 'Na všechny brýle poskytujeme doživotní záruku. V případě poškození provedeme opravu nebo výměnu.'
  }
])

const features = [
  {
    icon: 'shield',
    title: 'Doživotní záruka',
    description: 'Na všechny brýle poskytujeme doživotní záruku pro Váš klid'
  },
  {
    icon: 'eye',
    title: 'Velký výběr',
    description: 'Více než 130 modelů obrub brýlí k vyzkoušení přímo v čekárně'
  },
  {
    icon: 'users',
    title: 'Odborné poradenství',
    description: 'Zkušení optici Vám pomohou vybrat ideální brýle'
  },
  {
    icon: 'truck',
    title: 'Rychlé dodání',
    description: 'Vaše brýle s pouzdrem obdržíte do týdne domů na dobírku'
  },
  {
    icon: 'clock',
    title: 'Během čekání',
    description: 'Brýle si můžete vybrat a objednat již během čekání na vyšetření'
  },
  {
    icon: 'tag',
    title: 'Výhodná cena',
    description: 'Kompletní dioptrické brýle již od 218 Kč po odečtení příspěvku pojišťovny'
  }
]

const howItWorks = [
  {
    step: '1',
    title: 'Vyšetření zraku',
    description: 'Nejprve absolvujete oční vyšetření u našeho oftalmologa, který stanoví přesné parametry Vašich brýlí'
  },
  {
    step: '2',
    title: 'Výběr obrouček',
    description: 'V čekárne si v klidu vyzkoušíte více než 130 modelů obrub a vyberete si ty, které Vám nejvíce sluší'
  },
  {
    step: '3',
    title: 'Objednávka',
    description: 'Zkušení optici Vám pomohou s výběrem a na základě předpisu vytvoří objednávku dioptrických brýlí'
  },
  {
    step: '4',
    title: 'Výroba a dodání',
    description: 'Optici vyrobí dioptrická skla dle předpisu, zasadí je do vybraných obrouček a do týdne Vám brýle doručí domů'
  }
]

const getIcon = (iconName: string) => {
  const icons: Record<string, string> = {
    shield: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
    eye: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z',
    users: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z',
    truck: 'M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0',
    clock: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
    tag: 'M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z'
  }
  return icons[iconName] || icons.eye
}
</script>

<template>
  <div class="min-h-screen">
    <article>
      <!-- Page Header -->
      <header class="py-12 md:py-16">
        <div class="container mx-auto px-6 md:px-8 lg:px-12 xl:px-24">
          <Motion tag="div" v-bind="fadeInUp" class="text-center max-w-3xl mx-auto">
            <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Oční optika
            </h1>
            <p class="text-lg text-muted-foreground mb-6">
              V prostoru čekárny je Vám nyní k dispozici nová optika Optiscont s.r.o. s širokým výběrem obrub a výhodnými cenami.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center items-center text-muted-foreground">
              <div class="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Zárubova 498/31, Praha 4</span>
              </div>
              <div class="hidden sm:block text-muted-foreground">•</div>
              <div class="flex items-center gap-2">
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
                <a href="tel:+420776471040" class="hover:text-primary transition-colors">+420 776 471 040</a>
              </div>
            </div>
          </Motion>
        </div>
      </header>

      <!-- Price Highlight -->
      <section class="py-12">
        <div class="container mx-auto px-6 md:px-8 lg:px-12 xl:px-24">
          <Motion tag="div" v-bind="fadeInUp" class="text-center max-w-2xl mx-auto">
            <div class="inline-block">
              <p class="text-sm font-medium text-primary mb-2">Speciální nabídka</p>
              <h2 class="text-3xl md:text-4xl font-bold text-foreground mb-2">
                Kompletní brýle již od <span class="text-primary">218 Kč</span>
              </h2>
              <p class="text-sm text-muted-foreground">
                (po odečtení maximálního příspěvku zdravotní pojišťovny)
              </p>
            </div>
          </Motion>
        </div>
      </section>

      <!-- Features Grid -->
      <section class="py-16 md:py-24">
        <div class="container mx-auto px-6 md:px-8 lg:px-12 xl:px-24">
          <Motion tag="div" v-bind="fadeInUp" class="mb-12 text-center">
            <h2 class="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Výhody naší optiky
            </h2>
            <p class="text-muted-foreground max-w-2xl mx-auto">
              Vše, co potřebujete pro pohodlný nákup brýlí na jednom místě
            </p>
          </Motion>

          <Motion
            tag="div"
            v-bind="stagger(0.1).animate"
            class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <Motion
              v-for="(feature, index) in features"
              :key="index"
              tag="div"
              v-bind="cardEntrance"
            >
              <Card class="h-full border-0 bg-background/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 rounded-[2rem] p-8 group ring-1 ring-border/50">
                <CardHeader class="p-0 mb-6">
                  <div class="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="1.5"
                    >
                      <path stroke-linecap="round" stroke-linejoin="round" :d="getIcon(feature.icon)" />
                    </svg>
                  </div>
                  <CardTitle class="text-xl font-bold">{{ feature.title }}</CardTitle>
                </CardHeader>
                <CardContent class="p-0">
                  <p class="text-base text-muted-foreground leading-relaxed">
                    {{ feature.description }}
                  </p>
                </CardContent>
              </Card>
            </Motion>

            <Motion tag="div" v-bind="cardEntrance">
              <Card class="h-full border-0 bg-background/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 rounded-[2rem] p-8 group ring-1 ring-border/50">
                <CardHeader class="p-0 mb-6">
                  <div class="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="1.5"
                    >
                      <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <CardTitle class="text-xl font-bold">Odborné poradenství</CardTitle>
                </CardHeader>
                <CardContent class="p-0">
                  <p class="text-base text-muted-foreground leading-relaxed">
                    Náš zkušený personál Vám pomůže s výběrem nejvhodnějších brýlí pro Váš typ obličeje a zrakovou vadu.
                  </p>
                </CardContent>
              </Card>
            </Motion>

            <Motion tag="div" v-bind="cardEntrance">
              <Card class="h-full border-0 bg-background/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 rounded-[2rem] p-8 group ring-1 ring-border/50">
                <CardHeader class="p-0 mb-6">
                  <div class="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="1.5"
                    >
                      <path stroke-linecap="round" stroke-linejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <CardTitle class="text-xl font-bold">Servis a opravy</CardTitle>
                </CardHeader>
                <CardContent class="p-0">
                  <p class="text-base text-muted-foreground leading-relaxed">
                    Provádíme drobné opravy, úpravy a čištění brýlí ultrazvukem.
                  </p>
                </CardContent>
              </Card>
            </Motion>
          </Motion>
        </div>
      </section>

      <!-- Process Section -->
      <section class="py-24 md:py-32 relative overflow-hidden">
        <div class="container mx-auto px-6 md:px-8 lg:px-12 xl:px-24 relative z-10">
          <Motion tag="div" v-bind="fadeInUp" class="mb-16 text-center">
            <h2 class="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Jak to u nás funguje
            </h2>
            <p class="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Celý proces od vyšetření až po zhotovení brýlí pod jednou střechou
            </p>
          </Motion>

          <div class="relative">
            <!-- Connecting line for desktop -->
            <div class="hidden md:block absolute top-[2.5rem] left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent z-0"></div>

            <Motion
              tag="div"
              v-bind="stagger(0.2).animate"
              class="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10"
            >
              <Motion
                v-for="(step, index) in steps"
                :key="index"
                tag="div"
                v-bind="fadeInUp"
                class="text-center group"
              >
                <div class="w-20 h-20 mx-auto bg-background rounded-2xl shadow-lg flex items-center justify-center mb-6 relative z-10 ring-1 ring-border/50 group-hover:scale-110 transition-transform duration-300">
                  <span class="text-3xl font-bold text-primary">{{ index + 1 }}</span>
                </div>
                <h3 class="text-xl font-bold text-foreground mb-3">{{ step.title }}</h3>
                <p class="text-base text-muted-foreground leading-relaxed">{{ step.description }}</p>
              </Motion>
            </Motion>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="py-24 md:py-32">
        <div class="container mx-auto px-6 md:px-8 lg:px-12 xl:px-24">
          <Motion tag="div" v-bind="fadeInUp" class="text-center max-w-2xl mx-auto">
            <h2 class="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Navštivte naši optiku
            </h2>
            <p class="text-lg text-muted-foreground mb-10 leading-relaxed">
              Přijďte si vybrat nové brýle do jedné z našich poboček. Těšíme se na Vás.
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
                Kde nás najdete
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
                  <path stroke-linecap="round" stroke-linejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Zpět na služby
              </NuxtLink>
            </div>
          </Motion>
        </div>
      </section>

      <!-- SEO Content - Hidden but crawlable -->
      <section class="hidden">
        <h2>Oční optika Videre Praha</h2>
        <p>
          Oční optika Videre nabízí komplexní služby v oblasti korekce zraku. V našich pobočkách v Praze 4 a Praze 8 naleznete široký výběr brýlových obrub a čoček od předních světových výrobců.
        </p>
        <h3>Brýlové obruby a čočky</h3>
        <p>
          Nabízíme dámské, pánské i dětské brýlové obruby různých značek, materiálů a cenových relací. Spolupracujeme s renomovanými výrobci brýlových čoček, jako jsou Essilor, Zeiss, Hoya a další. Nabízíme jednoohniskové, bifokální i multifokální čočky, čočky pro práci s počítačem, sluneční dioptrické brýle a další speciální optické pomůcky.
        </p>
        <h3>Měření zraku a aplikace kontaktních čoček</h3>
        <p>
          Součástí našich služeb je odborné měření zraku optometristou nebo očním lékařem. Provádíme také aplikaci kontaktních čoček včetně zácviku manipulace a péče o čočky. Nabízíme kontaktní čočky všech typů - jednodenní, čtrnáctidenní, měsíční, torické i multifokální.
        </p>
      </section>
    </article>
  </div>
</template>
