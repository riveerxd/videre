<script setup lang="ts">
import { ref } from 'vue'
import { Motion } from 'motion-v'
import { Button } from '~/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '~/components/ui/sheet'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from '~/components/ui/navigation-menu'
import { ChevronDown } from 'lucide-vue-next'

// Navigation structure with dropdowns
interface SubLink {
  label: string
  href: string
}

interface NavItem {
  label: string
  href?: string
  subLinks?: SubLink[]
}

const navItems: NavItem[] = [
  { label: 'Úvod', href: '/' },
  {
    label: 'Ordinace',
    subLinks: [
      { label: 'Zárubova Praha 4', href: '/ordinace/zarubova' },
      { label: 'Čumpelíkova Praha 8', href: '/ordinace/cumpelikova' },
    ]
  },
  {
    label: 'Služby',
    subLinks: [
      { label: 'Služby', href: '/sluzby' },
      { label: 'Estetická medicína', href: '/sluzby/esteticka-medicina' },
      { label: 'Optika', href: '/sluzby/optika' },
    ]
  },
  // { label: 'Blog', href: '/blog' }, // Temporarily disabled for build
  { label: 'Ceník', href: '/cenik' },
  { label: 'Náš tým', href: '/nas-tym' },
  { label: 'Partneři', href: '/partneri' },
  // { label: 'Galerie', href: '/galerie' }, // Temporarily disabled for build
  // { label: 'Kontaktujte nás', href: '/kontakt' }, // Temporarily disabled for build
]

// Mobile menu state
const isMobileMenuOpen = ref(false)
const mobileDropdowns = ref<Record<string, boolean>>({})

const toggleMobileDropdown = (label: string) => {
  mobileDropdowns.value[label] = !mobileDropdowns.value[label]
}

// Close mobile menu when route changes
const route = useRoute()
watch(() => route.path, () => {
  isMobileMenuOpen.value = false
  mobileDropdowns.value = {}
})

// Animations
const { fadeInDown, stagger, fadeInUpShort } = useAnimations()

// Scroll state for transparent -> solid background
const isScrolled = ref(false)

const scrollToOrdinace = () => {
  isMobileMenuOpen.value = false

  const target = document.getElementById('ordinace')
  if (!target) {
    navigateTo('/#ordinace')
    return
  }

  const start = window.scrollY
  const targetRect = target.getBoundingClientRect()
  const targetCenter = targetRect.top + start + (targetRect.height / 2)
  const viewportCenter = window.innerHeight / 2
  const end = targetCenter - viewportCenter
  const duration = 1200
  const startTime = performance.now()

  const easeOutQuart = (t: number) => 1 - Math.pow(1 - t, 4)

  const animate = (currentTime: number) => {
    const elapsed = currentTime - startTime
    const progress = Math.min(elapsed / duration, 1)
    const eased = easeOutQuart(progress)

    window.scrollTo(0, start + (end - start) * eased)

    if (progress < 1) {
      requestAnimationFrame(animate)
    }
  }

  requestAnimationFrame(animate)
}

onMounted(() => {
  const handleScroll = () => {
    isScrolled.value = window.scrollY > 20
  }

  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })
})
</script>

<template>
  <nav
    class="navbar fixed top-0 w-full z-50 transition-all duration-300"
    :class="isScrolled ? 'navbar--scrolled' : 'navbar--transparent'"
    role="navigation"
    aria-label="Hlavní navigace"
  >
    <div class="container mx-auto px-6 md:px-8 lg:px-12 xl:px-24">
      <div class="flex items-center justify-between h-20">
        <!-- Logo and Brand -->
        <NuxtLink
          to="/"
          class="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-lg"
          aria-label="Videre.cz - Úvodní stránka"
        >
          <Motion
            tag="div"
            :whileHover="{ scale: 1.05 }"
            :whileTap="{ scale: 0.95 }"
            class="relative flex-shrink-0"
          >
            <NuxtImg
              src="/logo.png"
              alt="Oční klinika Videre - logo"
              class="h-8 md:h-10 w-auto"
              width="80"
              height="48"
              format="webp"
              loading="eager"
            />
          </Motion>
          <span class="text-xl md:text-2xl font-bold transition-colors duration-300 text-foreground group-hover:text-primary">
            Videre
          </span>
        </NuxtLink>

        <!-- Desktop Navigation -->
        <div class="hidden lg:flex items-center gap-6">
          <Motion
            tag="div"
            v-bind="stagger(0.05).animate"
          >
            <NavigationMenu>
              <NavigationMenuList class="gap-1">
                <Motion
                  v-for="item in navItems"
                  :key="item.label"
                  tag="div"
                  v-bind="fadeInUpShort"
                >
                  <NavigationMenuItem>
                    <!-- Simple link -->
                    <NavigationMenuLink v-if="item.href" as-child>
                      <NuxtLink
                        :to="item.href"
                        class="group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:text-primary focus:text-primary focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                        active-class="text-primary font-semibold"
                      >
                        {{ item.label }}
                      </NuxtLink>
                    </NavigationMenuLink>

                    <!-- Dropdown -->
                    <template v-else-if="item.subLinks">
                      <NavigationMenuTrigger class="h-10 px-4 text-sm font-medium hover:text-primary data-[state=open]:text-primary bg-transparent">
                        {{ item.label }}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <div class="w-[220px] p-2 bg-background/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-xl">
                          <ul class="space-y-1">
                            <li v-for="subLink in item.subLinks" :key="subLink.href">
                              <NavigationMenuLink as-child>
                                <NuxtLink
                                  :to="subLink.href"
                                  class="block select-none rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground no-underline outline-none transition-all duration-200 hover:text-primary focus:text-primary"
                                  active-class="text-primary font-semibold"
                                >
                                  {{ subLink.label }}
                                </NuxtLink>
                              </NavigationMenuLink>
                            </li>
                          </ul>
                        </div>
                      </NavigationMenuContent>
                    </template>
                  </NavigationMenuItem>
                </Motion>
              </NavigationMenuList>
            </NavigationMenu>
          </Motion>

          <!-- CTA Button -->
          <Motion
            tag="div"
            v-bind="fadeInUpShort"
            class="ml-4"
          >
            <Button
              @click="scrollToOrdinace"
              class="bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-primary/25 transition-all duration-300 rounded-full px-6"
            >
              Zavolejte nám
            </Button>
          </Motion>
        </div>

        <!-- Mobile Menu -->
        <div class="lg:hidden">
          <Sheet v-model:open="isMobileMenuOpen">
            <SheetTrigger as-child>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Otevřít navigační menu"
                class="hover:bg-primary/5"
              >
                <svg
                  v-if="!isMobileMenuOpen"
                  class="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                <svg
                  v-else
                  class="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" class="w-[300px] sm:w-[400px] border-l border-white/10 bg-background/95 backdrop-blur-xl">
              <SheetHeader>
                <SheetTitle class="text-left text-xl font-bold text-primary">Navigace</SheetTitle>
              </SheetHeader>
              <Motion
                tag="nav"
                v-bind="stagger(0.08).animate"
                class="flex flex-col gap-2 mt-8"
              >
                <Motion
                  v-for="item in navItems"
                  :key="item.label"
                  tag="div"
                  v-bind="fadeInUpShort"
                >
                  <!-- Simple link -->
                  <NuxtLink
                    v-if="item.href"
                    :to="item.href"
                    class="block px-4 py-3 text-base font-medium text-foreground hover:text-primary rounded-lg transition-all duration-300"
                    active-class="text-primary font-semibold"
                  >
                    {{ item.label }}
                  </NuxtLink>

                  <!-- Dropdown -->
                  <div v-else-if="item.subLinks" class="space-y-1">
                    <button
                      @click="toggleMobileDropdown(item.label)"
                      class="w-full flex items-center justify-between px-4 py-3 text-base font-medium text-foreground hover:text-primary rounded-lg transition-all duration-300"
                    >
                      {{ item.label }}
                      <ChevronDown
                        :class="[
                          'w-4 h-4 transition-transform duration-300',
                          mobileDropdowns[item.label] ? 'rotate-180' : ''
                        ]"
                      />
                    </button>
                    <Transition
                      enter-active-class="transition-all duration-200 ease-out"
                      enter-from-class="opacity-0 -translate-y-1"
                      enter-to-class="opacity-100 translate-y-0"
                      leave-active-class="transition-all duration-150 ease-in"
                      leave-from-class="opacity-100 translate-y-0"
                      leave-to-class="opacity-0 -translate-y-1"
                    >
                      <div v-if="mobileDropdowns[item.label]" class="pl-4 space-y-1">
                        <NuxtLink
                          v-for="subLink in item.subLinks"
                          :key="subLink.href"
                          :to="subLink.href"
                          class="block px-4 py-2.5 text-sm font-medium text-muted-foreground hover:text-primary rounded-lg transition-all duration-300"
                          active-class="text-primary font-semibold"
                        >
                          {{ subLink.label }}
                        </NuxtLink>
                      </div>
                    </Transition>
                  </div>
                </Motion>
                
                <!-- Mobile CTA -->
                <Motion tag="div" v-bind="fadeInUpShort" class="mt-4 px-4">
                  <Button
                    @click="scrollToOrdinace"
                    class="w-full bg-primary hover:bg-primary/90 text-white shadow-lg"
                  >
                    Zavolejte nám
                  </Button>
                </Motion>
              </Motion>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>

    </nav>
</template>

<style scoped>
.navbar {
  will-change: background-color, backdrop-filter, box-shadow;
}

.navbar--transparent {
  background-color: transparent;
  border: 0 !important;
  border-style: none !important;
  border-width: 0 !important;
  backdrop-filter: none;
  box-shadow: none;
}

.navbar--scrolled {
  background-color: hsl(var(--background) / 0.95);
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.03), 0 1px 0 0 rgb(0 0 0 / 0.05);
}

/* Enable backdrop blur only on larger screens for performance */
@media (min-width: 768px) {
  .navbar--scrolled {
    background-color: hsl(var(--background) / 0.7);
    backdrop-filter: blur(12px);
  }

  @supports (backdrop-filter: blur(12px)) {
    .navbar--scrolled {
      background-color: hsl(var(--background) / 0.6);
    }
  }
}
</style>
