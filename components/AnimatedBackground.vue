<script setup lang="ts">
const blobs = Array.from({ length: 30 }, (_, i) => {
  const size = Math.random() * 150 + 150; // 150-300px
  const top = Math.random() * 100;
  const left = Math.random() * 100;
  const animationDuration = Math.random() * 60 + 60; // 60-120s for slow drift
  const animationDelay = Math.random() * 15;
  const flyClass = `fly-${Math.floor(Math.random() * 4) + 1}`;
  const opacity = Math.random() * 0.3 + 0.15; // 0.15 - 0.45

  return {
    id: i,
    flyClass,
    style: {
      width: `${size}px`,
      height: `${size}px`,
      top: `${top}%`,
      left: `${left}%`,
      animationDuration: `${animationDuration}s`,
      animationDelay: `-${animationDelay}s`,
      opacity: opacity,
    }
  };
});
</script>

<template>
  <div class="fixed inset-0 overflow-hidden pointer-events-none z-0 bg-background">
    <div
      v-for="blob in blobs"
      :key="blob.id"
      class="blob absolute bg-primary rounded-full blur-3xl"
      :class="blob.flyClass"
      :style="blob.style"
    />
  </div>
</template>

<style>
.blob {
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
}

.fly-1 {
  animation-name: fly-1;
}

.fly-2 {
  animation-name: fly-2;
}

.fly-3 {
  animation-name: fly-3;
}

.fly-4 {
  animation-name: fly-4;
}

@keyframes fly-1 {
  0% { transform: translate(-50vw, -50vh) scale(0.8); }
  25% { transform: translate(30vw, 20vh) scale(1.1); }
  50% { transform: translate(50vw, 40vh) scale(0.9); }
  75% { transform: translate(-20vw, 60vh) scale(1.2); }
  100% { transform: translate(-50vw, -50vh) scale(0.8); }
}

@keyframes fly-2 {
  0% { transform: translate(0, 0) scale(1); }
  25% { transform: translate(40vw, -30vh) scale(1.3); }
  50% { transform: translate(60vw, 30vh) scale(0.7); }
  75% { transform: translate(-30vw, 50vh) scale(1.1); }
  100% { transform: translate(0, 0) scale(1); }
}

@keyframes fly-3 {
  0% { transform: translate(-60vw, 0) scale(1); }
  20% { transform: translate(-20vw, -30vh) scale(1.2); }
  40% { transform: translate(30vw, 10vh) scale(0.8); }
  60% { transform: translate(60vw, -10vh) scale(1.1); }
  80% { transform: translate(20vw, 40vh) scale(0.9); }
  100% { transform: translate(-60vw, 0) scale(1); }
}

@keyframes fly-4 {
  0% { transform: translate(0, -60vh) scale(0.9); }
  25% { transform: translate(-40vw, 0) scale(1.2); }
  50% { transform: translate(20vw, 50vh) scale(0.8); }
  75% { transform: translate(50vw, 10vh) scale(1.1); }
  100% { transform: translate(0, -60vh) scale(0.9); }
}
</style>
