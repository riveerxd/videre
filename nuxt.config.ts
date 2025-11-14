// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  devServer: {
    port: 7000
  },

  modules: ['@nuxtjs/sitemap', 'motion-v/nuxt', '@nuxt/image'],

  css: ['~/assets/css/app.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      htmlAttrs: {
        lang: 'cs'
      },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'canonical', href: 'https://videre.cz' },
        // Google Fonts - Lexend optimized for readability (perfect for eye clinic)
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Lexend:wght@300;400;500;600;700&display=swap'
        }
      ],
      meta: [
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'robots', content: 'index, follow' },
        { name: 'author', content: 'Videre.cz' },
        { property: 'og:site_name', content: 'Videre.cz' },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary_large_image' }
      ]
    }
  },

  site: {
    url: 'https://videre.cz',
    name: 'Videre.cz'
  },

  // SEO optimizations
  experimental: {
    payloadExtraction: true,
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/']
    },
    compressPublicAssets: true
  },

  routeRules: {
    '/': { prerender: true },
    '/**': { isr: true }
  },

  typescript: {
    strict: true,
    typeCheck: false
  },

  // Performance optimizations
  vite: {
    build: {
      cssCodeSplit: true
    }
  }
})