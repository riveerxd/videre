<script setup lang="ts">
import { Motion } from 'motion-v'

const { fadeInUp } = useAnimations()

const currentYear = new Date().getFullYear()

const links = [
  { label: 'Úvod', href: '/' },
  { label: 'Služby', href: '/sluzby' },
  { label: 'Ceník', href: '/cenik' },
  { label: 'Náš tým', href: '/nas-tym' },
  { label: 'Ordinace', href: '/#ordinace' }
]

const services = [
  { label: 'Všechny služby', href: '/sluzby' },
  { label: 'Estetická medicína', href: '/sluzby/esteticka-medicina' },
  { label: 'Optika', href: '/sluzby/optika' }
]

const contact = {
  address: 'Poliklinika Zárubova, Praha 4\nPoliklinika Čumpelíkova, Praha 8',
  phone: '+420 123 456 789',
  email: 'info@videre.cz'
}
</script>

<template>
  <footer class="relative z-10 border-t border-border pt-16 pb-8 footer-bg">
    <div class="container mx-auto px-6 md:px-8 lg:px-12 xl:px-24">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <!-- Brand -->
        <div class="space-y-6">
          <NuxtLink to="/" class="flex items-center gap-3 group">
            <div class="w-10 h-10 relative">
              <img
                src="/logo.png"
                alt="Videre.cz logo"
                class="w-full h-full object-contain"
              />
            </div>
            <span class="text-2xl font-bold text-foreground">Videre</span>
          </NuxtLink>
          <p class="text-muted-foreground leading-relaxed">
            Moderní oční klinika poskytující komplexní péči o Váš zrak s využitím nejnovějších technologií.
          </p>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="font-semibold text-foreground mb-6">Rychlé odkazy</h3>
          <ul class="space-y-3">
            <li v-for="link in links" :key="link.href">
              <NuxtLink
                :to="link.href"
                class="text-muted-foreground hover:text-primary transition-colors"
              >
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Services -->
        <div>
          <h3 class="font-semibold text-foreground mb-6">Služby</h3>
          <ul class="space-y-3">
            <li v-for="service in services" :key="service.href">
              <NuxtLink
                :to="service.href"
                class="text-muted-foreground hover:text-primary transition-colors"
              >
                {{ service.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h3 class="font-semibold text-foreground mb-6">Kontakt</h3>
          <ul class="space-y-4">
            <li class="flex items-start gap-3 text-muted-foreground">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-primary mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span class="whitespace-pre-line">{{ contact.address }}</span>
            </li>
            <li>
              <a :href="`tel:${contact.phone}`" class="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {{ contact.phone }}
              </a>
            </li>
            <li>
              <a :href="`mailto:${contact.email}`" class="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {{ contact.email }}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
        <p>&copy; {{ currentYear }} Videre. Všechna práva vyhrazena.</p>
        <span>Made by <span class="text-primary font-medium">river</span></span>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer-bg {
  background-color: hsl(var(--background) / 0.7);
  backdrop-filter: blur(12px);
}

@supports (backdrop-filter: blur(12px)) {
  .footer-bg {
    background-color: hsl(var(--background) / 0.6);
  }
}
</style>
