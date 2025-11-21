<template>
  <div class="relative min-h-screen bg-background">
    <!-- Decorative Background Elements -->
    <!-- Decorative Background Elements -->
    <AnimatedBackground />

    <!-- Content -->
    <Navbar />
    <main class="relative z-10">
      <slot />
    </main>
    <Footer />
  </div>
</template>
