<script setup lang="ts">
import { Motion } from 'motion-v'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card'

const { fadeInUp, stagger, cardEntrance, scrollFadeIn } = useAnimations()
const { addBreadcrumbSchema, addServiceSchema, addFAQSchema } = useStructuredData()

// Dynamic canonical URL
useHead({
  link: [
    { rel: 'canonical', href: 'https://videre.cz/sluzby/esteticka-medicina' }
  ]
})

// SEO Meta tags
useSeoMeta({
  title: 'Estetická medicína Praha - Botox, výplně, operace víček | Oční klinika Videre',
  description: 'Nabízíme estetické zákroky v oblasti očí a obličeje: plastické operace horních a dolních víček (blefaroplastika), odstranění patologických útvarů, aplikace výplní kyselinou hyaluronovou, Botox Dysport a mezoterapii. Zkušený oční chirurg s dlouholetou praxí v Praze.',
  ogTitle: 'Estetická medicína Praha - Botox, výplně, operace víček | Videre',
  ogDescription: 'Plastické operace víček, Botox Dysport, výplně kyselinou hyaluronovou a mezoterapie. Zkušený oční chirurg v Praze s dlouholetou praxí.',
  ogImage: 'https://videre.cz/vicka.jpg',
  ogUrl: 'https://videre.cz/sluzby/esteticka-medicina',
  ogLocale: 'cs_CZ',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Estetická medicína Praha - Botox, výplně, operace víček | Videre',
  twitterDescription: 'Plastické operace víček, Botox, výplně kyselinou hyaluronovou a mezoterapie v Praze.'
})

// Breadcrumb structured data
addBreadcrumbSchema([
  { name: 'Domů', url: 'https://videre.cz' },
  { name: 'Služby', url: 'https://videre.cz/sluzby' },
  { name: 'Estetická medicína', url: 'https://videre.cz/sluzby/esteticka-medicina' }
])

// Service schema for aesthetic medicine
addServiceSchema({
  name: 'Estetická medicína - plastické operace víček',
  description: 'Plastické operace horních a dolních víček (blefaroplastika), odstranění patologických útvarů v oblasti víček, aplikace Botoxu a výplní kyselinou hyaluronovou pro omlazení obličeje.',
  provider: 'Oční klinika Videre',
  serviceType: 'Cosmetic',
  url: 'https://videre.cz/sluzby/esteticka-medicina'
})

// Define OG Image
defineOgImageComponent('NuxtSeo', {
  
  title: 'Estetická medicína',
  description: 'Botox, výplně, plastické operace víček',
  siteName: 'Videre.cz', siteLogo: 'https://videre.cz/logo.png', theme: '#0F766E', colorMode: 'light'
})

// FAQ schema for aesthetic medicine
addFAQSchema([
  {
    question: 'Jak probíhá plastická operace víček?',
    answer: 'Plastická operace víček (blefaroplastika) je ambulantní zákrok prováděný v lokální anestezii. Zákrok trvá přibližně 1-2 hodiny a pacient odchází domů tentýž den. Hojení trvá obvykle 7-14 dní.'
  },
  {
    question: 'Jak dlouho vydrží efekt Botoxu?',
    answer: 'Efekt Botoxu (Dysport) na vyhlazení vrásek vydrží obvykle 3-6 měsíců. Pro udržení efektu doporučujeme opakovat aplikaci dle individuální potřeby.'
  },
  {
    question: 'Jsou výplně kyselinou hyaluronovou bezpečné?',
    answer: 'Ano, výplně kyselinou hyaluronovou jsou bezpečné a používáme pouze certifikované přípravky. Kyselina hyaluronová je látka přirozeně se vyskytující v těle, takže jsou reakce minimální. Efekt vydrží 6-12 měsíců.'
  }
])

const services = [
  {
    title: 'Plastické operace víček',
    image: '/vicka.jpg',
    items: [
      'Plastická operace horních a dolních víček',
      'Odstranění patologických útvarů v oblasti víček',
      'Odstranění kožních výrůstků',
      'Odstranění ječných zrn'
    ],
    note: 'Provádí zkušený oční chirurg s dlouholetou praxí'
  },
  {
    title: 'Kapky k prodlužování řas',
    image: '/rasy.png',
    description: 'Máme dobré zkušenosti s používáním kapek k prodloužení, zahuštění a zvýraznění vlastních řas. Pozitivní reference i od kosmetiček, které dávají přednost této metodě před nalepováním řas umělých.',
    items: []
  },
  {
    title: 'Aplikace výplní',
    image: '/vyplne.jpeg',
    items: [
      'Aplikace kyselinou hyaluronovou s dlouhodobým efektem',
      'Zvětšení objemu rtů',
      'Vyplnění nosoretních vrásek',
      'Korekce prohlubeň pod bradou',
      'Vyplnění hlubokých vrásek v obličeji'
    ],
    note: 'Ošetření provádí lékař'
  },
  {
    title: 'Botox',
    image: '/botox.jpeg',
    description: 'Odstranění vrásek a vyhlazení pleti. Aplikujeme Dysport inj. a cena je určena orientačně dle průměrné aplikované dávky v příslušné oblasti.',
    items: []
  },
  {
    title: 'Mezoterapie',
    description: 'Injekční aplikace výživných aktivních látek pod kůži ke zlepšení celkového stavu pleti. Ošetření provádí lékař.',
    items: []
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
              Estetická medicína
            </h1>
            <p class="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Nabízíme komplexní estetické služby v oblasti očí a obličeje. Všechny zákroky provádí zkušený lékař s dlouholetou praxí v moderně vybaveném prostředí.
            </p>
          </Motion>
        </div>
      </header>

      <!-- Services Section -->
      <section class="pb-24 md:pb-32">
        <div class="container mx-auto px-6 md:px-8 lg:px-12 xl:px-24">
          <Motion tag="div" v-bind="fadeInUp" class="mb-16 text-center">
            <h2 class="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Poskytujeme
            </h2>
            <p class="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Specializujeme se na estetické zákroky s důrazem na přirozený výsledek a bezpečnost
            </p>
          </Motion>

          <Motion
            tag="div"
            v-bind="stagger(0.15).animate"
            class="space-y-16"
          >
            <!-- Service Cards -->
            <Motion
              v-for="(service, index) in services"
              :key="index"
              tag="div"
              v-bind="scrollFadeIn"
            >
              <Card class="overflow-hidden border-0 bg-background/80 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500 rounded-[2.5rem] ring-1 ring-border/50 group">
                <div
                  :class="[
                    'grid gap-0',
                    service.image
                      ? index % 2 === 0
                        ? 'md:grid-cols-[1.2fr,0.8fr]'
                        : 'md:grid-cols-[0.8fr,1.2fr]'
                      : 'md:grid-cols-1'
                  ]"
                >
                  <!-- Content -->
                  <div
                    :class="[
                      'p-8 md:p-12 flex flex-col justify-center',
                      service.image && index % 2 === 1 ? 'md:order-2' : ''
                    ]"
                  >
                    <div class="space-y-6">
                      <div>
                        <h3 class="text-2xl md:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                          {{ service.title }}
                        </h3>
                        <p v-if="service.description" class="text-lg text-muted-foreground leading-relaxed">
                          {{ service.description }}
                        </p>
                      </div>
                      
                      <!-- List of items if available -->
                      <ul v-if="service.items.length > 0" class="space-y-4">
                        <li
                          v-for="(item, itemIndex) in service.items"
                          :key="itemIndex"
                          class="flex items-start gap-4 text-muted-foreground"
                        >
                          <div class="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 mt-0.5">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="w-3.5 h-3.5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              stroke-width="3"
                            >
                              <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span class="text-base leading-relaxed">{{ item }}</span>
                        </li>
                      </ul>

                      <!-- Note if available -->
                      <div
                        v-if="service.note"
                        class="inline-block px-6 py-3 bg-primary/5 border border-primary/10 rounded-xl"
                      >
                        <p class="text-sm text-primary font-medium flex items-center gap-2">
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
                          <span>{{ service.note }}</span>
                        </p>
                      </div>
                    </div>
                  </div>

                  <!-- Image -->
                  <div
                    v-if="service.image"
                    :class="[
                      'relative overflow-hidden min-h-[300px] md:min-h-[450px]',
                      service.image && index % 2 === 1 ? 'md:order-1' : ''
                    ]"
                  >
                    <NuxtImg
                      :src="service.image"
                      :alt="service.title"
                      class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                      format="webp"
                    />
                    <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                </div>
              </Card>
            </Motion>
          </Motion>
        </div>
      </section>

      <!-- Why Choose Us Section -->
      <section class="py-24 md:py-32 relative overflow-hidden">
        <div class="container mx-auto px-6 md:px-8 lg:px-12 xl:px-24 relative z-10">
          <Motion tag="div" v-bind="fadeInUp" class="text-center mb-16">
            <h2 class="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Proč si vybrat nás
            </h2>
          </Motion>

          <Motion
            tag="div"
            v-bind="stagger(0.1).animate"
            class="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <Motion tag="div" v-bind="cardEntrance">
              <Card class="h-full text-center border-0 bg-background/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 rounded-[2rem] p-8 group">
                <CardHeader class="p-0 mb-6">
                  <div class="mx-auto w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-10 h-10 text-primary group-hover:text-white transition-colors duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="1.5"
                    >
                      <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <CardTitle class="text-xl font-bold">Zkušený tým</CardTitle>
                </CardHeader>
                <CardContent class="p-0">
                  <p class="text-base text-muted-foreground leading-relaxed">
                    Všechny zákroky provádí zkušený oční chirurg s dlouholetou praxí
                  </p>
                </CardContent>
              </Card>
            </Motion>

            <Motion tag="div" v-bind="cardEntrance">
              <Card class="h-full text-center border-0 bg-background/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 rounded-[2rem] p-8 group">
                <CardHeader class="p-0 mb-6">
                  <div class="mx-auto w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-10 h-10 text-primary group-hover:text-white transition-colors duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="1.5"
                    >
                      <path stroke-linecap="round" stroke-linejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                  <CardTitle class="text-xl font-bold">Kvalitní přípravky</CardTitle>
                </CardHeader>
                <CardContent class="p-0">
                  <p class="text-base text-muted-foreground leading-relaxed">
                    Používáme pouze ověřené a certifikované přípravky s dlouhodobým efektem
                  </p>
                </CardContent>
              </Card>
            </Motion>

            <Motion tag="div" v-bind="cardEntrance">
              <Card class="h-full text-center border-0 bg-background/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 rounded-[2rem] p-8 group">
                <CardHeader class="p-0 mb-6">
                  <div class="mx-auto w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-10 h-10 text-primary group-hover:text-white transition-colors duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="1.5"
                    >
                      <path stroke-linecap="round" stroke-linejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <CardTitle class="text-xl font-bold">Přirozený výsledek</CardTitle>
                </CardHeader>
                <CardContent class="p-0">
                  <p class="text-base text-muted-foreground leading-relaxed">
                    Zaměřujeme se na přirozený vzhled a individuální přístup ke každému klientovi
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
              Zajímá Vás estetická medicína?
            </h2>
            <p class="text-lg text-muted-foreground mb-10 leading-relaxed">
              Objednejte se na konzultaci v jedné z našich ordinací v Praze. Rádi zodpovíme Vaše dotazy a navrhneme optimální řešení.
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
        <h2>Estetická medicína v Praze - Oční klinika Videre</h2>
        <p>
          Oční klinika Videre nabízí komplexní služby estetické medicíny v oblasti očí a obličeje. Naše ordinace v Praze 4 a Praze 8 jsou vybaveny moderní technikou pro provádění estetických zákroků.
        </p>
        <h3>Plastické operace víček</h3>
        <p>
          Plastická operace víček (blefaroplastika) je jedním z nejčastějších estetických zákroků v oblasti očí. Provádíme operace horních i dolních víček, které pomohou odstranit přebytečnou kůži a tuk, čímž oči získají mladší a svěžejší vzhled. Zákroky provádí zkušený oční chirurg s dlouholetou praxí.
        </p>
        <h3>Botox a výplně</h3>
        <p>
          Aplikace botulotoxinu (Dysport) a dermálních výplní kyselinou hyaluronovou jsou neinvazivní metody pro vyhlazení vrásek a omlazení pleti. Tyto metody jsou bezpečné, účinné a výsledky jsou okamžitě viditelné. Aplikace provádí lékař s odpovídající kvalifikací.
        </p>
        <h3>Mezoterapie a prodlužování řas</h3>
        <p>
          Mezoterapie je metoda aplikace výživných látek přímo pod kůži pro zlepšení celkového stavu pleti. Pro prodlužování a zahuštění řas nabízíme kapky s prokázaným efektem, které jsou šetrnou alternativou k umělým řasám.
        </p>
      </section>
    </article>
  </div>
</template>
