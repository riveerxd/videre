// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  devServer: {
    port: 7000
  },

  modules: ['@nuxtjs/sitemap', 'motion-v/nuxt', '@nuxt/image', 'nuxt-og-image', '@nuxt/icon'],

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
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
        // Preconnect for performance
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'dns-prefetch', href: 'https://www.google.com' },
        { rel: 'dns-prefetch', href: 'https://www.googletagmanager.com' },
        // Google Fonts - Lexend optimized for readability (perfect for eye clinic)
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Lexend:wght@300;400;500;600;700&display=swap'
        }
      ],
      meta: [
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
        { name: 'author', content: 'Oční klinika Videre' },
        { name: 'publisher', content: 'Videre s.r.o.' },
        { name: 'geo.region', content: 'CZ-PR' },
        { name: 'geo.placename', content: 'Praha' },
        { name: 'geo.position', content: '50.035267;14.444947' },
        { name: 'ICBM', content: '50.035267, 14.444947' },
        { property: 'og:site_name', content: 'Oční klinika Videre' },
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'cs_CZ' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@videre_cz' },
        { name: 'theme-color', content: '#12B68C' },
        { name: 'msapplication-TileColor', content: '#12B68C' }
      ]
    }
  },

  site: {
    url: 'https://videre.cz',
    name: 'Oční klinika Videre'
  },

  // Sitemap configuration
  sitemap: {
    xsl: false,
    defaults: {
      changefreq: 'weekly',
      priority: 0.8,
      lastmod: new Date().toISOString()
    },
    urls: [
      { loc: '/', priority: 1.0, changefreq: 'weekly' },
      { loc: '/sluzby', priority: 0.9, changefreq: 'weekly' },
      { loc: '/sluzby/esteticka-medicina', priority: 0.8, changefreq: 'monthly' },
      { loc: '/sluzby/optika', priority: 0.8, changefreq: 'monthly' },
      { loc: '/ordinace/zarubova', priority: 0.9, changefreq: 'weekly' },
      { loc: '/ordinace/cumpelikova', priority: 0.9, changefreq: 'weekly' },
      { loc: '/cenik', priority: 0.7, changefreq: 'monthly' },
      { loc: '/nas-tym', priority: 0.7, changefreq: 'monthly' }
    ]
  },

  // SEO optimizations
  experimental: {
    payloadExtraction: true,
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/', '/sluzby', '/sluzby/esteticka-medicina', '/sluzby/optika', '/ordinace/zarubova', '/ordinace/cumpelikova', '/cenik', '/nas-tym']
    },
    compressPublicAssets: true,
    minify: true
  },

  routeRules: {
    '/': { prerender: true },
    '/sluzby': { prerender: true },
    '/sluzby/**': { prerender: true },
    '/ordinace/**': { prerender: true },
    '/cenik': { prerender: true },
    '/nas-tym': { prerender: true },
    '/**': { isr: 3600 }
  },

  typescript: {
    strict: true,
    typeCheck: false
  },

  // Image optimization
  image: {
    quality: 80,
    format: ['webp', 'avif'],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536
    }
  },

  // OG Image configuration
  ogImage: {
    defaults: {
      width: 1200,
      height: 630
    },
    fonts: [
      'Lexend:400',
      'Lexend:500',
      'Lexend:600',
      'Lexend:700'
    ]
  },

  // Performance optimizations
  vite: {
    build: {
      cssCodeSplit: true,
      rollupOptions: {
        output: {
          manualChunks: {
            'motion': ['motion-v']
          }
        }
      }
    }
  }
})