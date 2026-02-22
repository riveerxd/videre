<script setup lang="ts">
import { Motion } from 'motion-v'

const { fadeInUp } = useAnimations()

const currentYear = new Date().getFullYear()

const insuranceLogos = [
  { src: '/VZP.png', alt: 'Všeobecná zdravotní pojišťovna', scale: 1 },
  { src: '/ozp.png', alt: 'Oborová zdravotní pojišťovna', scale: 1 },
  { src: '/vozp.png', alt: 'Vojenská zdravotní pojišťovna', scale: 1 },
  { src: '/zpmv.png', alt: 'Zdravotní pojišťovna ministerstva vnitra', scale: 1 },
  { src: '/czpz.png', alt: 'Česká průmyslová zdravotní pojišťovna', scale: 1 },
  { src: '/rbp.png', alt: 'RBP zdravotní pojišťovna', scale: 1.4 },
  { src: '/pvzp.webp', alt: 'Pojišťovna VZP', scale: 1 }
]

const links = [
  { label: 'Úvod', href: '/' },
  { label: 'Služby', href: '/sluzby' },
  { label: 'Ceník', href: '/cenik' },
  { label: 'Náš tým', href: '/nas-tym' },
  { label: 'Partneři', href: '/partneri' },
  { label: 'Ordinace', href: '/#ordinace' }
]

const services = [
  { label: 'Všechny služby', href: '/sluzby' },
  { label: 'Estetická medicína', href: '/sluzby/esteticka-medicina' },
  { label: 'Optika', href: '/sluzby/optika' }
]

const contact = {
  address: 'Poliklinika Zárubova, Praha 4\nPoliklinika Čumpelíkova, Praha 8'
}
</script>

<template>
  <footer class="relative z-10 border-t border-border pt-16 pb-8 footer-bg">
    <div class="container mx-auto px-6 md:px-8 lg:px-12 xl:px-24">
      <!-- Insurance Logo Marquee -->
      <div class="mb-12 overflow-hidden">
        <p class="text-center text-sm text-muted-foreground mb-6">Spolupracujeme se zdravotními pojišťovnami</p>
        <div class="marquee-container py-6">
          <div class="marquee-track">
            <div
              v-for="(logo, index) in [...insuranceLogos, ...insuranceLogos, ...insuranceLogos]"
              :key="index"
              class="marquee-item"
            >
              <NuxtImg
                :src="logo.src"
                :alt="logo.alt"
                class="h-8 md:h-10 w-auto object-contain max-w-[120px] md:max-w-[150px]"
                :style="{ transform: `scale(${logo.scale})` }"
                height="48"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <!-- Brand -->
        <div class="space-y-6">
          <NuxtLink to="/" class="flex items-center gap-3 group">
            <NuxtImg
              src="/logo.png"
              alt="Oční klinika Videre - logo"
              class="h-10 w-auto"
              width="80"
              height="48"
              format="webp"
              loading="lazy"
            />
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
            <li class="flex items-center gap-3 text-muted-foreground">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <span class="flex flex-col"><span class="font-medium text-foreground">Videre s.r.o.</span><span>IČO: 24318779</span></span>
            </li>
            <li class="flex items-start gap-3 text-muted-foreground">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-primary mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span class="whitespace-pre-line">{{ contact.address }}</span>
            </li>
            <!-- Social Links -->
            <li class="flex items-center gap-4 pt-2">
              <a
                href="https://www.instagram.com/videre_s.r.o"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Sledujte nás na Instagramu"
                class="text-muted-foreground hover:text-primary transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/videre.cz/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Sledujte nás na Facebooku"
                class="text-muted-foreground hover:text-primary transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
        <p>&copy; {{ currentYear }} Videre. Všechna práva vyhrazena.</p>
        <span>Made by <a href="https://riveer.cz/" target="_blank" rel="noopener noreferrer" class="text-primary font-medium cursor-pointer hover:underline">river</a></span>
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

/* CSS-only marquee - no flash on load */
.marquee-container {
  overflow: hidden;
  mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
  -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
}

.marquee-track {
  display: flex;
  width: max-content;
  animation: marquee 25s linear infinite;
}

.marquee-track:hover {
  animation-play-state: paused;
}

.marquee-item {
  flex-shrink: 0;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-33.333%);
  }
}

@media (prefers-reduced-motion: reduce) {
  .marquee-track {
    animation: none;
  }
}
</style>
