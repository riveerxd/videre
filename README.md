# Videre.cz

A maximally optimized Nuxt 3 website with Tailwind CSS and shadcn-vue components, built for excellent SEO performance.

**Note:** All user-facing content is in Czech (for Czech customers), while code remains in English.

## Features

- **Nuxt 3** - The Intuitive Vue Framework
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn-vue** - High-quality, accessible component library
- **TypeScript** - Full type safety
- **SEO Optimized** - Comprehensive SEO configuration including:
  - Meta tags and Open Graph
  - Structured data (JSON-LD)
  - Sitemap generation
  - Robots.txt
  - Canonical URLs
  - Performance optimizations

## Project Structure

```
videre.cz/
├── assets/          # Static assets (CSS, images)
├── components/      # Vue components
│   └── ui/         # shadcn-vue components
├── composables/     # Vue composables
├── layouts/         # Page layouts
├── lib/            # Utility functions
├── middleware/      # Route middleware
├── pages/          # Application pages
├── plugins/        # Nuxt plugins
├── public/         # Public static files
└── nuxt.config.ts  # Nuxt configuration
```

## Development

Install dependencies:

```bash
npm install
```

Start the development server on `http://localhost:3000`:

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

Generate static site:

```bash
npm run generate
```

## SEO Features

### Meta Tags
All pages use `useSeoMeta()` composable for optimal meta tag management.

### Structured Data
Use the `useStructuredData()` composable to add JSON-LD structured data:

```vue
<script setup>
const { addOrganizationSchema, addWebsiteSchema, addBreadcrumbSchema } = useStructuredData()

addWebsiteSchema({
  name: 'Videre.cz',
  url: 'https://videre.cz',
  description: 'Your description'
})
</script>
```

### Performance Optimizations
- Automatic code splitting
- CSS minification
- Terser minification with console.log removal
- Asset compression
- Prerendering and ISR (Incremental Static Regeneration)

## Adding shadcn-vue Components

Install components using the shadcn-vue CLI:

```bash
npx shadcn-vue@latest add button
npx shadcn-vue@latest add card
```

Components will be added to `components/ui/`.

## Environment Variables

Create a `.env` file for environment-specific configuration:

```env
NUXT_PUBLIC_SITE_URL=https://videre.cz
```

## License

Proprietary
