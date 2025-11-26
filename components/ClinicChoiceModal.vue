<script setup lang="ts">
import {
  DialogRoot,
  DialogTrigger,
  DialogPortal,
  DialogOverlay,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from 'reka-ui'
import { X } from 'lucide-vue-next'
import { Button } from '~/components/ui/button'

const props = defineProps<{
  open?: boolean
}>()

const emit = defineEmits<{
  'update:open': [value: boolean]
}>()

const clinics = [
  {
    name: 'Poliklinika Čumpelíkova',
    address: 'Čumpelíková 1764/2, Praha 8',
    phone: '+420 123 456 789',
    hours: 'Po-Pá 8:00-16:00',
    image: '/poliklinika_cumpelikova.jpg'
  },
  {
    name: 'Poliklinika Zárubova',
    address: 'Zárubova 498/31, Praha 4',
    phone: '+420 123 456 789',
    hours: 'Po-Pá 8:00-16:00',
    image: '/poliklinika_zarubova.jpg'
  }
]
</script>

<template>
  <DialogRoot :open="open" @update:open="emit('update:open', $event)">
    <DialogPortal>
      <DialogOverlay class="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
      <DialogContent class="fixed left-[50%] top-[50%] z-[100] grid w-[95vw] max-w-lg md:max-w-2xl translate-x-[-50%] translate-y-[-50%] gap-4 border border-white/10 bg-background/95 p-4 sm:p-6 shadow-2xl duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] rounded-2xl backdrop-blur-xl">
        <div class="flex flex-col space-y-1.5 text-center sm:text-left mb-2">
          <DialogTitle class="text-xl sm:text-2xl font-semibold leading-none tracking-tight text-foreground">
            Vyberte kliniku
          </DialogTitle>
          <DialogDescription class="text-sm text-muted-foreground">
            Zvolte prosím, na kterou pobočku si přejete zavolat.
          </DialogDescription>
        </div>

        <div class="grid gap-3 sm:gap-4 max-h-[60vh] overflow-y-auto sm:max-h-none pr-1">
          <div
            v-for="clinic in clinics"
            :key="clinic.name"
            class="group relative flex items-center gap-3 sm:gap-4 rounded-xl border border-border bg-card p-3 hover:bg-primary/5 transition-colors overflow-hidden"
          >
            <!-- Image -->
            <div class="relative w-20 h-20 sm:w-24 sm:h-24 rounded-lg overflow-hidden shrink-0">
              <NuxtImg
                :src="clinic.image"
                :alt="clinic.name"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                width="150"
                height="150"
              />
              <div class="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
            </div>

            <!-- Content -->
            <div class="flex flex-col justify-center flex-1 min-w-0">
              <h3 class="font-semibold text-base sm:text-lg text-foreground truncate">{{ clinic.name }}</h3>
              <div class="flex items-center gap-1.5 text-xs sm:text-sm text-muted-foreground mb-2 sm:mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span class="truncate">{{ clinic.address }}</span>
              </div>
              
              <a
                :href="`tel:${clinic.phone}`"
                class="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-3 py-2 text-xs sm:text-sm font-medium text-primary-foreground shadow hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 transition-all w-full sm:w-auto sm:self-start"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Zavolat
              </a>
            </div>
          </div>
        </div>

        <DialogClose class="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
          <X class="h-4 w-4" />
          <span class="sr-only">Zavřít</span>
        </DialogClose>
      </DialogContent>
    </DialogPortal>
  </DialogRoot>
</template>
