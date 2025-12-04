<script setup lang="ts">
const { addWebsiteSchema, addMedicalOrganizationSchema } = useStructuredData()

// Dynamic canonical URL
useHead({
  link: [
    { rel: 'canonical', href: 'https://videre.cz' }
  ]
})

// Enhanced SEO Meta tags for eye clinic
useSeoMeta({
  title: 'Oční klinika Videre Praha - Komplexní péče o Váš zrak | Dvě ordinace v Praze',
  description: 'Oční klinika Videre nabízí komplexní oční vyšetření, diagnostiku očních onemocnění, estetickou medicínu a optiku. Dvě moderní ordinace v Praze 4 a Praze 8 s nejnovějšími technologiemi. Zkušení oftalmologové, individuální přístup.',
  ogTitle: 'Oční klinika Videre Praha - Komplexní péče o Váš zrak',
  ogDescription: 'Komplexní oční vyšetření, diagnostika, estetická medicína a optika. Zkušený tým oftalmologů v Praze 4 a Praze 8. Objednejte se telefonicky.',
  ogImage: 'https://videre.cz/heroimage.webp',
  ogUrl: 'https://videre.cz',
  ogLocale: 'cs_CZ',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Oční klinika Videre Praha - Komplexní péče o Váš zrak',
  twitterDescription: 'Komplexní oční vyšetření, diagnostika a estetická medicína v Praze. Dvě moderní ordinace.'
})

// Structured data for SEO
addWebsiteSchema({
  name: 'Oční klinika Videre',
  url: 'https://videre.cz',
  description: 'Moderní oční klinika v Praze nabízející komplexní péči o oči, diagnostiku očních onemocnění, estetickou medicínu a oční optiku s využitím nejnovějších technologií.'
})

// Define OG Image
defineOgImageComponent('OgImageCustom', {
  title: 'Oční klinika Videre',
  description: 'Komplexní péče o Vaše oči s využitím nejnovějších technologií'
})

// Comprehensive Medical Organization schema with both locations
addMedicalOrganizationSchema({
  name: 'Oční klinika Videre',
  url: 'https://videre.cz',
  logo: 'https://videre.cz/logo.png',
  description: 'Oční klinika Videre poskytuje komplexní oftalmologické služby ve dvou moderních ordinacích v Praze. Nabízíme oční vyšetření, diagnostiku a léčbu očních onemocnění, estetickou medicínu a oční optiku.',
  telephone: '+420603141490',
  email: 'ocnicumpelikova@email.cz',
  locations: [
    {
      name: 'Oční klinika Videre - Poliklinika Zárubova',
      address: 'Zárubova 498/31',
      locality: 'Praha 4',
      postalCode: '142 00'
    },
    {
      name: 'Oční klinika Videre - Poliklinika Čumpelíkova',
      address: 'Čumpelíkova 2',
      locality: 'Praha 8',
      postalCode: '182 00'
    }
  ]
})
</script>

<template>
  <main class="min-h-screen">
    <Hero />
    <Locations />
    <News />
    <ServicesOverview />
    <Testimonials />
    <!-- Future sections will go here -->
  </main>
</template>
