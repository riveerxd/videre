<script setup lang="ts">
import { Motion } from 'motion-v'
import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card'

const { fadeInUp } = useAnimations()
const { addBreadcrumbSchema } = useStructuredData()

useHead({
  link: [
    { rel: 'canonical', href: 'https://videre.cz/partneri' }
  ]
})

useSeoMeta({
  title: 'Partnerské oční kliniky Praha a ČR - Spolupráce | Oční klinika Videre',
  description: 'Spolupracujeme s předními očními klinikami v České republice. Naši partneři NClinic, Clinic M a Oční Petřiny nabízejí laserové operace, léčbu glaukomu a komplexní oftalmologickou péči. Síť kvalitní oční péče v Praze.',
  ogTitle: 'Partnerské oční kliniky Praha a ČR | Oční klinika Videre',
  ogDescription: 'Síť spolupracujících očních klinik v České republice. NClinic, Clinic M, Oční Petřiny - laserové operace, léčba glaukomu, dětská oftalmologie.',
  ogImage: 'https://videre.cz/og-image.jpg',
  ogUrl: 'https://videre.cz/partneri',
  ogLocale: 'cs_CZ',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Partnerské oční kliniky Praha a ČR | Videre',
  twitterDescription: 'Spolupracujeme s předními očními klinikami v ČR pro komplexní péči o Váš zrak.'
})

addBreadcrumbSchema([
  { name: 'Domů', url: 'https://videre.cz' },
  { name: 'Partneři', url: 'https://videre.cz/partneri' }
])

defineOgImageComponent('OgImageCustom', {
  title: 'Partnerské kliniky',
  description: 'Síť spolupracujících očních klinik v ČR'
})

// Organization affiliation schema for partners
useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'Partnerské oční kliniky Oční kliniky Videre',
        description: 'Seznam partnerských očních klinik spolupracujících s Oční klinikou Videre',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            item: {
              '@type': 'MedicalClinic',
              name: 'NClinic',
              url: 'https://www.nclinic.cz',
              medicalSpecialty: 'Dentistry',
              description: 'Moderní zubní klinika poskytující komplexní stomatologickou péči s využitím nejnovějších technologií.'
            }
          },
          {
            '@type': 'ListItem',
            position: 2,
            item: {
              '@type': 'MedicalClinic',
              name: 'Videre 2',
              url: 'https://www.videre2.cz',
              medicalSpecialty: 'Ophthalmology',
              description: 'Precizní péče o zrak s lidským přístupem. Komplexní oční vyšetření s využitím moderních diagnostických technologií.'
            }
          }
          // Hidden partners - kept for future use:
          // {
          //   '@type': 'ListItem',
          //   position: 2,
          //   item: {
          //     '@type': 'MedicalClinic',
          //     name: 'Clinic M',
          //     url: 'https://www.clinicm.cz',
          //     medicalSpecialty: 'Ophthalmology',
          //     description: 'Specializované centrum pro diagnostiku a léčbu očních onemocnění s důrazem na individuální přístup.'
          //   }
          // },
          // {
          //   '@type': 'ListItem',
          //   position: 3,
          //   item: {
          //     '@type': 'MedicalClinic',
          //     name: 'Oční Petřiny',
          //     url: 'https://www.ocnipetriny.cz',
          //     medicalSpecialty: 'Ophthalmology',
          //     description: 'Oční ambulance poskytující široké spektrum oftalmologických služeb pro pacienty všech věkových kategorií.'
          //   }
          // }
        ]
      })
    }
  ]
})

const partners = [
  {
    name: 'NClinic',
    url: 'https://www.nclinic.cz',
    image: 'https://www.nclinic.cz/images/preview.png',
    description: 'Moderní zubní klinika poskytující komplexní stomatologickou péči s využitím nejnovějších technologií.',
    services: ['Zubní implantáty', 'Estetická stomatologie', 'Dentální hygiena']
  },
  {
    name: 'Videre 2',
    url: 'https://www.videre2.cz',
    image: 'https://www.videre2.cz/images/preview.png',
    description: 'Precizní péče o zrak s lidským přístupem. Komplexní oční vyšetření s využitím moderních diagnostických technologií a individuálním přístupem k pacientům.',
    services: ['Komplexní oční péče', 'OCT diagnostika', 'Plastika víček']
  }
  // Hidden partners - kept for future use:
  // {
  //   name: 'Clinic M',
  //   url: 'https://www.clinicm.cz',
  //   image: 'https://www.clinicm.cz/images/preview.png',
  //   description: 'Specializované centrum pro diagnostiku a léčbu očních onemocnění s důrazem na individuální přístup k pacientům.',
  //   services: ['Diagnostika očí', 'Léčba glaukomu', 'Kataraktová chirurgie']
  // },
  // {
  //   name: 'Oční Petřiny',
  //   url: 'https://www.ocnipetriny.cz',
  //   image: 'https://www.ocnipetriny.cz/images/preview.png',
  //   description: 'Oční ambulance poskytující široké spektrum oftalmologických služeb pro pacienty všech věkových kategorií.',
  //   services: ['Preventivní prohlídky', 'Dětská oftalmologie', 'Korekce zraku']
  // }
]
</script>

<template>
  <div class="min-h-screen">
    <article>
      <header class="relative py-24 md:py-32 overflow-hidden">
        <div class="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <div class="absolute top-[10%] left-[10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px]" />
          <div class="absolute bottom-[10%] right-[10%] w-[30%] h-[30%] bg-accent/5 rounded-full blur-[100px]" />
        </div>

        <div class="container relative z-10 mx-auto px-6 md:px-8 lg:px-12 xl:px-24">
          <Motion tag="div" v-bind="fadeInUp" class="mb-16 text-center max-w-3xl mx-auto">
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight">
              Partnerské kliniky
            </h1>
            <p class="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Spolupracujeme s předními očními klinikami v České republice, abychom Vám zajistili tu nejlepší péči o Váš zrak.
            </p>
          </Motion>

          <div class="flex flex-wrap justify-center gap-8 mb-16">
            <Motion
              v-for="partner in partners"
              :key="partner.name"
              tag="div"
              v-bind="fadeInUp"
              class="w-full max-w-md"
            >
              <Card class="h-full border-0 bg-background/50 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 rounded-[2rem] overflow-hidden ring-1 ring-border/50 group flex flex-col">
                <!-- Partner Image -->
                <div class="relative w-full h-64 overflow-hidden bg-muted shrink-0">
                  <NuxtImg
                    v-if="partner.image"
                    :src="partner.image"
                    :alt="`${partner.name} - partnerská oční klinika v České republice`"
                    class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    width="400"
                    height="192"
                  />
                  <div v-else class="w-full h-full flex items-center justify-center bg-primary/5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-16 h-16 text-primary/30"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="1.5"
                    >
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                </div>
                <CardHeader class="p-8 pb-4 shrink-0">
                  <CardTitle class="text-2xl font-bold">{{ partner.name }}</CardTitle>
                </CardHeader>
                <CardContent class="p-8 pt-4 flex flex-col flex-1">
                  <p class="text-muted-foreground leading-relaxed min-h-[5rem]">
                    {{ partner.description }}
                  </p>

                  <div class="flex flex-wrap gap-2 mt-6 min-h-[4.5rem]">
                    <span
                      v-for="service in partner.services"
                      :key="service"
                      class="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full h-fit"
                    >
                      {{ service }}
                    </span>
                  </div>

                  <div class="mt-auto pt-8">
                    <a
                      :href="partner.url"
                      target="_blank"
                      rel="noopener noreferrer"
                      :title="`Navštívit webové stránky ${partner.name} - oční klinika`"
                      :aria-label="`Přejít na web partnerské oční kliniky ${partner.name}`"
                      class="flex items-center justify-center gap-2 w-full px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold shadow-lg hover:bg-primary/90 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
                    >
                      <span>Navštívit {{ partner.name }}</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        aria-hidden="true"
                      >
                        <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </Motion>
          </div>

          <Motion tag="section" v-bind="fadeInUp" class="max-w-4xl mx-auto">
            <Card class="border-0 bg-background/50 backdrop-blur-sm shadow-xl rounded-[2rem] overflow-hidden ring-1 ring-border/50">
              <CardContent class="p-8 md:p-12">
                <h2 class="text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Proč spolupracujeme?
                </h2>
                <div class="prose prose-lg text-muted-foreground max-w-none">
                  <p>
                    Věříme, že kvalitní oční péče by měla být dostupná každému. Proto spolupracujeme s dalšími předními očními klinikami v České republice a společně vytváříme síť specializovaných pracovišť.
                  </p>
                  <p>
                    Díky této spolupráci můžeme našim pacientům nabídnout širší spektrum služeb, sdílet odborné znalosti a zajistit kontinuitu péče i v případě specializovaných zákroků.
                  </p>
                  <p>
                    Každá z partnerských klinik přináší jedinečné odborné zaměření a zkušenosti, což nám umožňuje poskytovat komplexní oftalmologickou péči na nejvyšší úrovni.
                  </p>
                </div>
              </CardContent>
            </Card>
          </Motion>
        </div>
      </header>

      <!-- SEO Content - Hidden but crawlable -->
      <section class="hidden">
        <h2>Partnerské oční kliniky v České republice</h2>
        <p>
          Oční klinika Videre spolupracuje s předními očními klinikami v České republice. Díky této spolupráci můžeme našim pacientům nabídnout komplexní oftalmologickou péči včetně specializovaných zákroků, které nejsou dostupné v každé oční ordinaci.
        </p>
        <h3>NClinic - Zubní klinika</h3>
        <p>
          NClinic je moderní zubní klinika poskytující komplexní stomatologickou péči. Nabízí nejnovější technologie pro zubní implantáty, estetickou stomatologii a dentální hygienu. Spolupracujeme pro zajištění komplexní zdravotní péče našim pacientům.
        </p>
        <!-- Hidden partners SEO content - kept for future use:
        <h3>Clinic M - Léčba očních onemocnění</h3>
        <p>
          Clinic M se specializuje na diagnostiku a léčbu závažných očních onemocnění. Jejich odborníci se zaměřují na léčbu glaukomu, kataraktovou chirurgii a péči o pacienty s diabetickou retinopatií. Individuální přístup k pacientům je jejich hlavní předností.
        </p>
        <h3>Oční Petřiny - Komplexní oční péče</h3>
        <p>
          Oční ambulance Petřiny poskytuje široké spektrum oftalmologických služeb pro pacienty všech věkových kategorií. Specializují se na preventivní prohlídky, dětskou oftalmologii a korekci zraku. Jsou ideální volbou pro rodinnou oční péči.
        </p>
        -->
        <h3>Výhody spolupráce očních klinik</h3>
        <p>
          Síť spolupracujících očních klinik přináší pacientům mnoho výhod: rychlejší přístup ke specializovaným zákrokům, sdílení odborných znalostí mezi lékaři, kontinuitu péče při přechodu mezi zařízeními a možnost druhého názoru od dalších odborníků. Všechny partnerské kliniky sdílejí stejné hodnoty - kvalitní péči, moderní technologie a individuální přístup k pacientům.
        </p>
      </section>
    </article>
  </div>
</template>
