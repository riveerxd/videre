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
  { label: 'Blog', href: '/blog' },
  { label: 'Ceník', href: '/cenik' },
  { label: 'Náš tým', href: '/nas-tym' },
  { label: 'Galerie', href: '/galerie' },
  { label: 'Kontaktujte nás', href: '/kontakt' },
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
</script>

<template>
  <Motion
    tag="nav"
    v-bind="fadeInDown"
    class="sticky top-0 z-50 bg-background shadow-sm border-b border-border"
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
            class="relative w-10 h-10 md:w-12 md:h-12"
          >
            <img
              src="/logo.png"
              alt="Videre.cz logo"
              class="w-full h-full object-contain"
              width="48"
              height="48"
            />
          </Motion>
          <span class="text-xl md:text-2xl font-bold transition-colors duration-300" style="color: #06B4D6;">
            Videre
          </span>
        </NuxtLink>

        <!-- Desktop Navigation -->
        <Motion
          tag="div"
          v-bind="stagger(0.05).animate"
          class="hidden lg:block"
        >
          <NavigationMenu>
            <NavigationMenuList>
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
                      class="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-bold transition-colors hover:text-primary focus:text-primary focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                      active-class="text-primary"
                    >
                      {{ item.label }}
                    </NuxtLink>
                  </NavigationMenuLink>

                  <!-- Dropdown -->
                  <template v-else-if="item.subLinks">
                    <NavigationMenuTrigger class="text-sm font-bold">
                      {{ item.label }}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div class="w-auto min-w-[200px] p-3 bg-card border border-border rounded-lg shadow-lg">
                        <ul class="space-y-1">
                          <li v-for="subLink in item.subLinks" :key="subLink.href">
                            <NavigationMenuLink as-child>
                              <NuxtLink
                                :to="subLink.href"
                                class="block select-none whitespace-nowrap rounded-md px-3 py-2 text-xs font-semibold text-foreground/80 no-underline outline-none transition-all duration-200 hover:text-primary hover:translate-x-0.5 focus:text-primary"
                                active-class="text-primary"
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

        <!-- Mobile Menu -->
        <div class="lg:hidden">
          <Sheet v-model:open="isMobileMenuOpen">
            <SheetTrigger as-child>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Otevřít navigační menu"
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
            <SheetContent side="right" class="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle>Navigace</SheetTitle>
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
                    class="block px-4 py-3 text-base font-bold text-foreground hover:text-primary rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary"
                    active-class="text-primary"
                  >
                    {{ item.label }}
                  </NuxtLink>

                  <!-- Dropdown -->
                  <div v-else-if="item.subLinks" class="space-y-1">
                    <button
                      @click="toggleMobileDropdown(item.label)"
                      class="w-full flex items-center justify-between px-4 py-3 text-base font-bold text-foreground hover:text-primary rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary"
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
                          class="block px-4 py-2 text-sm font-bold text-muted-foreground hover:text-primary rounded-lg transition-all duration-300"
                          active-class="text-primary"
                        >
                          {{ subLink.label }}
                        </NuxtLink>
                      </div>
                    </Transition>
                  </div>
                </Motion>
              </Motion>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  </Motion>
</template>

<style scoped>
/* Ensure smooth transitions */
nav {
  will-change: transform;
}
</style>
