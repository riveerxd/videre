<script setup lang="ts">
defineProps<{
  title?: string
  description?: string
}>()
</script>

<template>
  <div
    :style="{
      width: '1200px',
      height: '630px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: '60px 70px',
      fontFamily: 'Lexend',
      background: 'linear-gradient(135deg, #ffffff 0%, #f1f5f9 50%, #d1fae5 100%)',
      position: 'relative',
    }"
  >
    <!-- Decorative circles -->
    <div
      :style="{
        position: 'absolute',
        top: '-120px',
        right: '-80px',
        width: '400px',
        height: '400px',
        borderRadius: '200px',
        background: 'rgba(18, 182, 140, 0.12)',
      }"
    />
    <div
      :style="{
        position: 'absolute',
        bottom: '-100px',
        left: '-60px',
        width: '300px',
        height: '300px',
        borderRadius: '150px',
        background: 'rgba(18, 182, 140, 0.08)',
      }"
    />

    <!-- Main content -->
    <div :style="{ display: 'flex', flexDirection: 'column', flex: '1', position: 'relative', zIndex: '1' }">
      <!-- Title -->
      <div
        :style="{
          fontSize: '72px',
          fontWeight: '700',
          color: '#0f172a',
          lineHeight: '1.1',
          marginBottom: '24px',
        }"
      >
        {{ title || 'Oční klinika Videre' }}
      </div>

      <!-- Description -->
      <div
        :style="{
          fontSize: '32px',
          fontWeight: '400',
          color: '#475569',
          lineHeight: '1.4',
          maxWidth: '800px',
        }"
      >
        {{ description || 'Komplexní péče o Váš zrak v Praze' }}
      </div>
    </div>

    <!-- Bottom brand section -->
    <div :style="{ display: 'flex', alignItems: 'center', gap: '20px', position: 'relative', zIndex: '1' }">
      <img
        src="/logo.png"
        width="64"
        height="64"
        :style="{
          width: '64px',
          height: '64px',
        }"
      />
      <div
        :style="{
          fontSize: '28px',
          fontWeight: '600',
          color: '#0f172a',
        }"
      >
        Oční klinika <span :style="{ color: '#0F766E' }">Videre</span>
      </div>
    </div>

    <!-- Bottom accent line -->
    <div
      :style="{
        position: 'absolute',
        bottom: '0',
        left: '0',
        width: '1200px',
        height: '8px',
        background: 'linear-gradient(90deg, #12B68C 0%, #0F766E 100%)',
      }"
    />
  </div>
</template>
