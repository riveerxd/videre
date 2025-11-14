<script setup lang="ts">
const { addWebsiteSchema, addOrganizationSchema } = useStructuredData()

// Enhanced SEO Meta tags for eye clinic
useSeoMeta({
  title: 'Oční klinika Videre - Moderní péče o Vaše oči | Praha',
  description: 'Oční klinika Videre nabízí komplexní oční vyšetření, laserové operace a refrakční chirurgii. Dvě moderní ordinace v Praze s nejnovějšími technologiemi. Objednejte se online 24/7.',
  ogTitle: 'Oční klinika Videre - Moderní péče o Vaše oči',
  ogDescription: 'Komplexní oční vyšetření, laserové operace a refrakční chirurgie. Zkušený tým odborných lékařů v Praze 4 a Praze 8.',
  ogImage: '/heroimage.jpg',
  ogUrl: 'https://videre.cz',
  ogLocale: 'cs_CZ',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Oční klinika Videre - Moderní péče o Vaše oči',
  twitterDescription: 'Komplexní oční vyšetření, laserové operace a refrakční chirurgie v Praze. Objednejte se online 24/7.'
})

// Structured data for SEO
addWebsiteSchema({
  name: 'Oční klinika Videre',
  url: 'https://videre.cz',
  description: 'Moderní oční klinika v Praze nabízející komplexní péči o oči, laserové operace, refrakční chirurgii a oční vyšetření s využitím nejnovějších technologií.'
})

addOrganizationSchema({
  name: 'Oční klinika Videre',
  url: 'https://videre.cz',
  logo: 'https://videre.cz/logo.png',
  description: 'Oční klinika s dvěma ordinacemi v Praze poskytující komplexní oční péči'
})
</script>

<template>
  <main class="min-h-screen bg-background">
    <Hero />
    <Locations />
    <!-- Future sections will go here -->
  </main>
</template>
