<script setup lang="ts">
import { Motion } from 'motion-v'
import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card'

const { fadeInUp, stagger, buttonPremium, scaleIn } = useAnimations()
const { addBreadcrumbSchema } = useStructuredData()

// Dynamic canonical URL
useHead({
  link: [
    { rel: 'canonical', href: 'https://videre.cz/ordinace/zarubova' }
  ]
})

// SEO Meta tags
useSeoMeta({
  title: 'Oční ordinace Praha 4 - Poliklinika Zárubova | Oční klinika Videre',
  description: 'Oční ordinace v Poliklinice Zárubova, Praha 4 - Krč. Komplexní oční vyšetření, diagnostika OCT a perimetrem, léčba očních onemocnění, estetická medicína a optika. Zkušení oftalmologové, moderní vybavení. Ordinujeme Po-Pá.',
  ogTitle: 'Oční ordinace Praha 4 - Poliklinika Zárubova | Oční klinika Videre',
  ogDescription: 'Komplexní oční péče v Praze 4 Krč. Moderní diagnostika OCT, zkušení oftalmologové, individuální přístup. Zárubova 498/31.',
  ogImage: 'https://videre.cz/poliklinika_zarubova.jpg',
  ogUrl: 'https://videre.cz/ordinace/zarubova',
  ogLocale: 'cs_CZ',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Oční ordinace Praha 4 - Poliklinika Zárubova | Videre',
  twitterDescription: 'Komplexní oční péče v Praze 4 Krč. Moderní diagnostika, zkušení oftalmologové.'
})

// Breadcrumb structured data
addBreadcrumbSchema([
  { name: 'Domů', url: 'https://videre.cz' },
  { name: 'Ordinace', url: 'https://videre.cz/#ordinace' },
  { name: 'Poliklinika Zárubova', url: 'https://videre.cz/ordinace/zarubova' }
])

// Define OG Image
defineOgImageComponent('NuxtSeo', {
  
  title: 'Ordinace Praha 4',
  description: 'Poliklinika Zárubova - Komplexní oční péče',
  siteName: 'Videre.cz', siteLogo: 'https://videre.cz/logo.png', theme: '#0F766E', colorMode: 'light'
})

// LocalBusiness structured data for SEO
useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'MedicalClinic',
        name: 'Oční klinika Videre - Poliklinika Zárubova',
        image: 'https://videre.cz/poliklinika_zarubova.jpg',
        '@id': 'https://videre.cz/ordinace/zarubova',
        url: 'https://videre.cz/ordinace/zarubova',
        telephone: '+420123456789',
        email: 'zarubova@videre.cz',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Zárubova 498/31',
          addressLocality: 'Praha 4',
          postalCode: '142 00',
          addressCountry: 'CZ'
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 50.035267,
          longitude: 14.444947
        },
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: 'Monday',
            opens: '13:00',
            closes: '19:00'
          },
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: 'Tuesday',
            opens: '08:00',
            closes: '17:00'
          },
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: 'Wednesday',
            opens: '08:00',
            closes: '15:00'
          },
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: 'Thursday',
            opens: '08:00',
            closes: '17:00'
          },
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: 'Friday',
            opens: '08:00',
            closes: '13:00'
          }
        ],
        medicalSpecialty: 'Ophthalmology',
        priceRange: '$$'
      })
    }
  ]
})

const location = {
  name: 'Poliklinika Zárubova',
  street: 'Zárubova 498/31',
  city: 'Praha 4',
  zip: '142 00',
  image: '/poliklinika_zarubova.jpg',
  phone: '+420 123 456 789',
  email: 'zarubova@videre.cz',
  hours: [
    { day: 'Pondělí', time: '13:00 - 19:00' },
    { day: 'Úterý', time: '8:00 - 12:30 | 13:00 - 17:00' },
    { day: 'Středa', time: '8:00 - 12:30 | 13:00 - 15:00' },
    { day: 'Čtvrtek', time: '8:00 - 12:30 | 13:00 - 17:00' },
    { day: 'Pátek', time: '8:00 - 13:00' }
  ],
  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2562.2844669284844!2d14.444947176837968!3d50.03526697151859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b94c1f8c8f8f1%3A0x1234567890abcdef!2zWsOhcnVib3ZhIDQ5OC8zMSwgMTQyIDAwIFByYWhhIDQtS3LEjQ!5e0!3m2!1scs!2scz!4v1234567890123!5m2!1scs!2scz',
  mapUrl: 'https://mapy.cz/zakladni?q=Z%C3%A1rubova+498%2F31+Praha+4'
}
</script>

<template>
  <div class="min-h-screen">
    <!-- Page Header -->
    <article>
      <header class="relative py-24 md:py-32 overflow-hidden">
        <!-- Background decorative blobs -->
        <div class="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <div class="absolute top-[10%] left-[10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px]" />
          <div class="absolute bottom-[10%] right-[10%] w-[30%] h-[30%] bg-accent/5 rounded-full blur-[100px]" />
        </div>

        <div class="container relative z-10 mx-auto px-6 md:px-8 lg:px-12 xl:px-24">
          <Motion tag="div" v-bind="fadeInUp" class="mb-12 text-center max-w-3xl mx-auto">
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight">
              {{ location.name }}
            </h1>
            <p class="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Moderní oční péče v Praze 4
            </p>
          </Motion>

          <!-- Clinic Image - Full Width -->
          <Motion tag="div" v-bind="fadeInUp" class="mb-12">
            <div class="relative w-full h-[300px] md:h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl ring-1 ring-border/50 group">
              <NuxtImg
                :src="location.image"
                :alt="'Venkovní pohled na vstup do Polikliniky Zárubova v Praze 4, kde sídlí naše oční ordinace'"
                width="1200"
                height="500"
                format="webp"
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="eager"
                fetchpriority="high"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
            </div>
          </Motion>

          <!-- Contact + Opening Hours Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <!-- Contact Information -->
            <Motion tag="div" v-bind="fadeInUp">
              <Card class="h-full border-0 bg-background/50 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 rounded-[2rem] overflow-hidden ring-1 ring-border/50 group">
                <CardHeader class="p-8 pb-4">
                  <div class="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <CardTitle class="text-2xl font-bold">Kontaktní informace</CardTitle>
                </CardHeader>
                <CardContent class="p-8 pt-4 space-y-6">
                  <div class="flex items-start gap-4 text-base">
                    <div class="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 mt-0.5">
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
                    </div>
                    <div class="text-muted-foreground text-lg">
                      {{ location.street }}<br>
                      {{ location.zip }} {{ location.city }}
                    </div>
                  </div>

                  <div class="flex items-center gap-4 text-base">
                    <div class="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
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
                    </div>
                    <a :href="`tel:${location.phone}`" class="text-lg text-foreground hover:text-primary transition-colors font-medium">
                      {{ location.phone }}
                    </a>
                  </div>

                  <div class="flex items-center gap-4 text-base">
                    <div class="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <a :href="`mailto:${location.email}`" class="text-lg text-foreground hover:text-primary transition-colors font-medium">
                      {{ location.email }}
                    </a>
                  </div>

                  <div class="grid grid-cols-2 gap-4 pt-4">
                    <Motion
                      tag="a"
                      :href="`tel:${location.phone}`"
                      v-bind="buttonPremium"
                      class="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-all font-semibold shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5"
                      aria-label="Zavolejte nám"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      Zavolat
                    </Motion>

                    <Motion
                      tag="a"
                      :href="`mailto:${location.email}`"
                      v-bind="buttonPremium"
                      class="flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-border bg-background hover:bg-accent/10 hover:border-primary/30 transition-all font-semibold text-foreground hover:-translate-y-0.5"
                      aria-label="Napište nám email"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      Email
                    </Motion>
                  </div>
                </CardContent>
              </Card>
            </Motion>

            <!-- Opening Hours -->
            <Motion tag="div" v-bind="fadeInUp">
              <Card class="h-full border-0 bg-background/50 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 rounded-[2rem] overflow-hidden ring-1 ring-border/50 group">
                <CardHeader class="p-8 pb-4">
                  <div class="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <CardTitle class="text-2xl font-bold">Ordinační hodiny</CardTitle>
                </CardHeader>
                <CardContent class="p-8 pt-4">
                  <div class="space-y-4">
                    <div
                      v-for="(hour, idx) in location.hours"
                      :key="idx"
                      class="flex justify-between items-center text-base py-2 border-b border-border/50 last:border-0"
                    >
                      <span class="text-muted-foreground font-medium">{{ hour.day }}</span>
                      <span class="font-bold text-foreground">{{ hour.time }}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Motion>
          </div>

          <!-- Google Maps -->
          <Motion tag="section" v-bind="fadeInUp" class="mb-12">
            <Card class="overflow-hidden border-0 bg-background/50 backdrop-blur-sm shadow-xl rounded-[2rem] ring-1 ring-border/50">
              <CardHeader class="p-8 pb-4">
                <CardTitle class="text-2xl font-bold">Jak se k nám dostanete</CardTitle>
              </CardHeader>
              <CardContent class="p-0">
                <div class="w-full h-96 md:h-[500px] grayscale hover:grayscale-0 transition-all duration-700">
                  <iframe
                    :src="location.mapEmbedUrl"
                    width="100%"
                    height="100%"
                    style="border:0;"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    title="Interaktivní mapa s umístěním oční ordinace v Poliklinice Zárubova, Praha 4"
                    class="w-full h-full"
                  />
                </div>
              </CardContent>
            </Card>
          </Motion>

          <!-- SEO Content - Hidden but crawlable -->
          <section class="hidden">
            <h2>O naší oční ordinaci v Praze 4</h2>
            <p>
              Naše oční ordinace v Poliklinice Zárubova v Praze 4 poskytuje komplexní oční péči pro pacienty všech věkových kategorií. Zaměřujeme se na prevenci, diagnostiku a léčbu očních onemocnění s využitím moderních vyšetřovacích metod a nejnovějších poznatků v oboru oftalmologie.
            </p>
            <p>
              Díky strategické poloze v Praze 4 je naše ordinace snadno dostupná jak pro místní obyvatele, tak pro pacienty z širšího okolí. Poliklinika Zárubova je moderní zdravotnické zařízení s bezbariérovým přístupem, parkováním a dobrou dostupností městskou hromadnou dopravou.
            </p>
            <h3>Náš tým a vybavení</h3>
            <p>
              V ordinaci pracuje tým zkušených oftalmologů, kteří se průběžně vzdělávají a sledují nejnovější trendy v oboru. Disponujeme moderním diagnostickým přístrojovým vybavením, které nám umožňuje provádět precizní vyšetření očí a včas odhalit případné oční problémy.
            </p>
            <h3>Poskytované služby</h3>
            <p>
              Komplexní oční vyšetření včetně měření zrakové ostrosti, preventivní prohlídky pro dospělé i děti, diagnostika a léčba očních onemocnění (zánětlivá onemocnění, glaukom, katarakta), vyšetření nitroočního tlaku, vyšetření očního pozadí, předepsání brýlí a kontaktních čoček, kontroly po očních operacích.
            </p>
            <h3>Jak se objednat</h3>
            <p>
              Objednání k vyšetření je možné telefonicky během ordinačních hodin nebo e-mailem. Doporučujeme si objednat termín předem, abychom Vám mohli věnovat dostatečný čas a zajistit kvalitní péči. V případě akutních potíží nás prosím kontaktujte telefonicky.
            </p>
          </section>
        </div>
      </header>
    </article>
  </div>
</template>
