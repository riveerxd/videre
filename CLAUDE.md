# Claude Development Guide - Videre.cz

This document provides project-specific guidelines for AI assistants working on the Videre.cz project.

## Project Overview

**Videre.cz** is a maximally optimized Nuxt 3 website built for Czech customers with a focus on:
- SEO excellence
- Performance optimization
- Accessibility (WCAG 2.1 AA compliance)
- Responsive design
- Clean, professional aesthetics

## Core Technologies

- **Framework**: Nuxt 3.17.7
- **Styling**: Tailwind CSS 3.4.17
- **Components**: shadcn-vue
- **Animations**: Motion for Vue (motion-v from motion.dev)
- **Language**: TypeScript
- **Target Audience**: Czech customers (content in Czech, code in English)

---

## Critical Project Rules

### 1. SEO Optimization (MAXIMUM PRIORITY)

#### Meta Tags
- **ALWAYS** include comprehensive meta tags on every page using `useSeoMeta()`
- **REQUIRED** meta tags for all pages:
  ```vue
  useSeoMeta({
    title: 'Page Title - Videre.cz',
    description: 'Czech description min 120 chars, max 160 chars',
    ogTitle: 'Page Title',
    ogDescription: 'Czech description',
    ogImage: '/og-image.jpg',
    ogUrl: 'https://videre.cz/page-url',
    ogLocale: 'cs_CZ',
    twitterCard: 'summary_large_image',
    twitterTitle: 'Page Title',
    twitterDescription: 'Czech description'
  })
  ```

#### Structured Data
- **ALWAYS** use the `useStructuredData()` composable for:
  - Organization schema on homepage
  - Website schema on homepage
  - Breadcrumb schema on nested pages
  - Appropriate schema types for content pages
- Example:
  ```vue
  const { addWebsiteSchema, addOrganizationSchema } = useStructuredData()
  addWebsiteSchema({ name: 'Videre.cz', url: 'https://videre.cz', description: '...' })
  ```

#### Semantic HTML
- Use proper heading hierarchy (h1 → h2 → h3, never skip levels)
- **ONE h1 per page** containing the main keyword
- Use semantic HTML5 elements: `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<footer>`
- Use `<picture>` with multiple sources for images
- Add descriptive `alt` text to all images

#### Performance
- **ALWAYS** use Nuxt image optimization
- Lazy load images below the fold
- Minimize JavaScript bundle size
- Use CSS code splitting
- Implement proper caching strategies
- Prerender static pages in `nuxt.config.ts`

#### Content Rules
- All user-facing content **MUST** be in Czech
- Use natural, keyword-rich Czech language
- Minimum 300 words for content pages
- Use descriptive link text (never "click here")

---

### 2. Color Scheme (STRICT ADHERENCE)

**Primary Brand Color**: `#12B68C` (HSL: 165° 82% 39%)

#### Color Usage Rules
- **Primary actions**: Use `bg-primary` and `text-primary-foreground`
  ```vue
  <button class="bg-primary text-primary-foreground">Tlačítko</button>
  ```
- **Secondary actions**: Use `bg-secondary` and `text-secondary-foreground`
- **Backgrounds**: White (`bg-background`) or light gray (`bg-muted`)
- **Text**:
  - Primary text: `text-foreground`
  - Secondary text: `text-muted-foreground`
- **Borders**: `border-border`

#### Available Color Classes
```
bg-primary, bg-secondary, bg-accent, bg-muted, bg-background, bg-card
text-primary, text-secondary, text-accent, text-muted-foreground, text-foreground
border-border, border-input
focus:ring-ring
```

#### Color Customization
- **NEVER** use arbitrary color values (e.g., `bg-[#123456]`)
- **NEVER** add new colors without updating `assets/css/app.css`
- If new color needed, discuss with team first
- Reference: See `COLORS.md` for complete palette

---

### 3. Animations (PREMIUM & SMOOTH)

**Animation Library**: Motion for Vue (motion-v from motion.dev)

#### Philosophy
- **Premium feel**: All animations should feel smooth, polished, and high-end
- **Subtle not flashy**: Animations enhance UX, never distract
- **Performance first**: GPU-accelerated, 60fps minimum
- **Accessibility**: Always respect `prefers-reduced-motion`

#### Required Setup
All animations are centralized in `composables/useAnimations.ts`:
```vue
<script setup>
import { Motion } from 'motion-v'
const { heroEntrance, buttonPremium, cardEntrance } = useAnimations()
</script>
```

**Installation**: Package `motion-v` is already configured in `nuxt.config.ts` modules. Motion component auto-imports are available throughout the app.

#### Animation Rules

##### When to Animate
✅ **DO animate:**
- Page entrances (hero sections, initial content)
- User interactions (buttons, cards, links)
- Scroll-triggered content revelations
- State changes (loading → success, expand/collapse)
- Micro-interactions for tactile feedback

❌ **DON'T animate:**
- Critical content (must be immediately accessible)
- Large blocks of text (readability issues)
- Rapidly repeating elements (annoying)
- Navigation during tasks (disruptive)

##### Timing Guidelines
- **Entrances**: 600-1200ms (smooth and elegant)
- **Interactions**: 200-400ms (responsive and snappy)
- **Micro-interactions**: 100-200ms (instant feedback)
- **Stagger delay**: 50-150ms between items

#### Animation Presets

##### Entrance Animations
```vue
<!-- Hero section - dramatic entrance -->
<Motion tag="div" v-bind="heroEntrance">
  <h1>Vítejte</h1>
</Motion>

<!-- Fade in from bottom -->
<Motion tag="div" v-bind="fadeInUp">
  <p>Content</p>
</Motion>

<!-- Scale in (modals, cards) -->
<Motion tag="div" v-bind="scaleIn">
  <div>Card</div>
</Motion>
```

##### Interactive Animations
```vue
<!-- Premium button with hover + tap -->
<Motion tag="button" v-bind="buttonPremium">
  Klikněte
</Motion>

<!-- Card with hover lift -->
<Motion tag="div" v-bind="cardEntrance">
  Card content
</Motion>
```

##### Staggered Lists
```vue
<!-- Container with stagger -->
<Motion tag="div" v-bind="stagger(0.1).animate">
  <Motion
    v-for="item in items"
    tag="div"
    v-bind="fadeInUp"
  >
    {{ item }}
  </Motion>
</Motion>
```

##### Scroll Animations
```vue
<!-- Fade in when scrolled into view -->
<Motion tag="section" v-bind="scrollFadeIn">
  <h2>Section appears on scroll</h2>
</Motion>
```

#### Custom Animations

When creating custom animations, follow these patterns:

```vue
<Motion
  tag="div"
  :initial="{ opacity: 0, y: 30 }"
  :animate="{
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }
  }"
  :whileHover="{ scale: 1.03, transition: { duration: 0.3 } }"
  :whileTap="{ scale: 0.98 }"
>
  Custom animated content
</Motion>
```

#### Performance Guidelines

1. **Animate transform and opacity only** (GPU-accelerated):
   ```vue
   <!-- Good: GPU-accelerated -->
   :animate="{ opacity: 1, y: 0, scale: 1 }"

   <!-- Bad: CPU-bound -->
   :animate="{ width: '100px', height: '50px' }"
   ```

2. **Use will-change sparingly**:
   ```vue
   <Motion tag="div" style="will-change: transform, opacity">
   ```

3. **Limit simultaneous animations**:
   - Maximum 10-15 elements animating at once
   - Use stagger for large lists

4. **Avoid layout thrash**:
   - Don't animate width/height
   - Use scale instead of changing dimensions

#### Accessibility

**ALWAYS respect reduced motion**:
```typescript
// This is already handled in useAnimations()
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
```

All animations in `useAnimations.ts` automatically respect this preference.

#### Animation Checklist

Before committing animations:
- [ ] Animations feel smooth and premium
- [ ] Duration is appropriate (not too fast/slow)
- [ ] Respects `prefers-reduced-motion`
- [ ] Works on mobile (60fps)
- [ ] Doesn't block critical content
- [ ] Enhances UX (doesn't distract)
- [ ] Uses GPU-accelerated properties only

#### Common Patterns

**Hero Section**:
```vue
<Motion tag="div" v-bind="stagger(0.15).animate">
  <Motion tag="h1" v-bind="heroEntrance">Main Title</Motion>
  <Motion tag="p" v-bind="fadeInUp">Subtitle</Motion>
  <Motion tag="div" v-bind="fadeInUpShort">
    <Motion tag="button" v-bind="buttonPremium">CTA</Motion>
  </Motion>
</Motion>
```

**Feature Grid**:
```vue
<Motion tag="div" v-bind="stagger(0.1).animate" class="grid grid-cols-3 gap-6">
  <Motion
    v-for="feature in features"
    tag="div"
    v-bind="cardEntrance"
  >
    {{ feature.title }}
  </Motion>
</Motion>
```

**Interactive Button**:
```vue
<Motion
  tag="button"
  :whileHover="{ scale: 1.03, boxShadow: '0 8px 30px rgba(18, 182, 140, 0.4)' }"
  :whileTap="{ scale: 0.98 }"
>
  Hover me
</Motion>
```

#### Bundle Size
- Motion for Vue: ~5KB gzipped
- Stays well within 200KB JS budget
- No impact on Lighthouse scores

---

### 4. Component Library (shadcn-vue)

#### Component Rules
- **ALWAYS** use shadcn-vue components for UI elements
- **NEVER** create custom components for:
  - Buttons
  - Input fields
  - Cards
  - Dialogs/Modals
  - Dropdowns/Selects
  - Tabs
  - Accordions
  - Alerts

#### Installing Components
```bash
npx shadcn-vue@latest add button
npx shadcn-vue@latest add card
npx shadcn-vue@latest add input
```

#### Component Usage Example
```vue
<template>
  <Card>
    <CardHeader>
      <CardTitle>Nadpis</CardTitle>
      <CardDescription>Popis</CardDescription>
    </CardHeader>
    <CardContent>
      <!-- Content -->
    </CardContent>
  </Card>
</template>
```

#### Custom Components
- Only create custom components for:
  - Business logic components
  - Layout components
  - Complex domain-specific widgets
- Place in `components/` directory
- Always use TypeScript with proper prop types

---

### 5. Accessibility (WCAG 2.1 AA)

#### Required Practices
- **Keyboard Navigation**: All interactive elements must be keyboard accessible
- **Focus Indicators**: Visible focus states on all interactive elements
- **ARIA Labels**: Add `aria-label` for icons and non-text content
- **Color Contrast**:
  - Normal text: 4.5:1 minimum
  - Large text (18pt+): 3:1 minimum
  - Primary color (#12B68C) passes on white background
- **Alt Text**: All images must have descriptive alt attributes
- **Form Labels**: All inputs must have associated labels
- **Skip Links**: Add skip-to-content link on every page
- **Semantic HTML**: Use proper HTML5 semantic elements

#### Testing Checklist
- [ ] Can navigate entire page with keyboard only
- [ ] Screen reader announces all content correctly
- [ ] All images have alt text
- [ ] All forms have labels
- [ ] Color contrast passes WCAG AA
- [ ] No flashing/blinking content

---

### 6. Responsive Design

#### Breakpoints (Tailwind defaults)
```
sm: 640px   // Small devices
md: 768px   // Medium devices
lg: 1024px  // Large devices
xl: 1280px  // Extra large devices
2xl: 1536px // 2X Extra large devices
```

#### Mobile-First Approach
- **ALWAYS** write styles mobile-first
- Base styles = mobile (no prefix)
- Add complexity with breakpoint prefixes

```vue
<!-- Correct: Mobile-first -->
<div class="p-4 md:p-6 lg:p-8">

<!-- Incorrect: Desktop-first -->
<div class="p-8 lg:p-6 md:p-4">
```

#### Responsive Typography
```vue
<h1 class="text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
  Hlavní nadpis
</h1>
```

#### Responsive Layout
- Use `flex` or `grid` with responsive variants
- Hide/show elements with `hidden md:block`
- Adjust spacing with responsive padding/margin

#### Touch Targets
- Minimum 44x44px for all interactive elements (mobile)
- Adequate spacing between clickable elements

---

### 7. Performance Optimization

#### Image Optimization
```vue
<!-- Use Nuxt Image -->
<NuxtImg
  src="/images/hero.jpg"
  alt="Popis obrázku v češtině"
  width="800"
  height="600"
  loading="lazy"
  format="webp"
/>
```

#### Code Splitting
- Use dynamic imports for heavy components:
```vue
<script setup>
const HeavyComponent = defineAsyncComponent(() =>
  import('~/components/HeavyComponent.vue')
)
</script>
```

#### Bundle Size
- Keep JavaScript bundles under 200KB (gzipped)
- Remove unused dependencies
- Tree-shake unused code

#### Caching Strategy
- Static assets: 1 year cache
- API responses: appropriate cache headers
- Use ISR for dynamic content

#### Metrics Targets
- **Lighthouse Score**: 95+ (all categories)
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Time to Interactive**: < 3.5s
- **Cumulative Layout Shift**: < 0.1

---

### 8. TypeScript Standards

#### Type Safety
- **ALWAYS** use TypeScript for all `.vue`, `.ts` files
- **NO** `any` types (use `unknown` if necessary)
- Define interfaces for all props and emits
- Use type inference where possible

#### Component Props
```vue
<script setup lang="ts">
interface Props {
  title: string
  count: number
  isActive?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  isActive: false
})
</script>
```

#### Composables
```typescript
export const useMyComposable = () => {
  const data = ref<string>('')

  const fetchData = async (): Promise<void> => {
    // Implementation
  }

  return {
    data: readonly(data),
    fetchData
  }
}
```

---

### 9. Naming Conventions

#### Files
- Components: PascalCase (`MyComponent.vue`)
- Composables: camelCase with `use` prefix (`useAuth.ts`)
- Pages: kebab-case (`about-us.vue`)
- Utilities: camelCase (`formatDate.ts`)

#### Variables & Functions
- camelCase for variables and functions
- PascalCase for classes and types
- UPPER_SNAKE_CASE for constants

```typescript
// Good
const userName = 'Jan'
const fetchUserData = () => {}
interface UserProfile {}
const MAX_RETRIES = 3

// Bad
const user_name = 'Jan'
const FetchUserData = () => {}
interface userProfile {}
const maxRetries = 3
```

#### CSS Classes
- Use Tailwind utility classes
- For custom classes: kebab-case
- BEM notation for complex custom components

---

### 10. Code Organization

#### Directory Structure
```
videre.cz/
├── assets/
│   └── css/
│       └── app.css         # Tailwind + custom CSS
├── components/
│   ├── ui/                 # shadcn-vue components
│   └── [Feature].vue       # Custom components
├── composables/            # Vue composables
├── layouts/                # Page layouts
├── lib/                    # Utility functions
├── pages/                  # Auto-routed pages
├── public/                 # Static assets
└── server/                 # Server-side code
```

#### Component Structure
```vue
<script setup lang="ts">
// 1. Imports
import { ref } from 'vue'

// 2. Props & Emits
interface Props {
  title: string
}
const props = defineProps<Props>()

// 3. Composables
const { data } = useMyComposable()

// 4. Reactive state
const count = ref(0)

// 5. Computed properties
const doubleCount = computed(() => count.value * 2)

// 6. Functions
const increment = () => {
  count.value++
}

// 7. Lifecycle hooks
onMounted(() => {
  // Initialization
})

// 8. SEO
useSeoMeta({ /* ... */ })
</script>

<template>
  <!-- Template -->
</template>

<style scoped>
/* Only if custom styles absolutely necessary */
</style>
```

---

### 11. Content Guidelines

#### Language
- **User-facing content**: Czech only
- **Code**: English (variables, functions, comments)
- **Documentation**: English

#### Czech Content Rules
- Use formal "Vy" form for addressing customers
- Professional, friendly tone
- No typos or grammatical errors
- SEO keywords naturally integrated
- Clear, concise sentences

#### Examples
```vue
<!-- Good -->
<h1>Vítejte na Videre.cz</h1>
<p>Nabízíme profesionální webové řešení</p>

<!-- Bad - English content -->
<h1>Welcome to Videre.cz</h1>

<!-- Bad - Informal Czech -->
<h1>Čau, vítej!</h1>
```

---

### 12. Git Commit Messages

Follow Conventional Commits:

```
feat: add contact form component
fix: resolve mobile menu overflow
docs: update README with setup instructions
style: format code with prettier
refactor: simplify user authentication logic
perf: optimize image loading
test: add unit tests for utils
chore: update dependencies
```

---

### 13. Testing Requirements

#### Unit Tests
- Test all utility functions
- Test composables
- Use Vitest

#### E2E Tests
- Test critical user flows
- Use Playwright or Cypress

#### Accessibility Tests
- Run axe-core on all pages
- Manual keyboard navigation testing

---

### 14. Common Pitfalls to Avoid

❌ **DON'T**:
- Use English text in user-facing content
- Use arbitrary colors outside the design system
- Create custom button/input components (use shadcn-vue)
- Skip meta tags or structured data
- Use `any` type in TypeScript
- Ignore accessibility requirements
- Use non-responsive units (px only)
- Skip image optimization
- Create pages without SEO considerations

✅ **DO**:
- Write all content in Czech
- Use design system colors consistently
- Use shadcn-vue components
- Add comprehensive meta tags and structured data
- Write fully typed TypeScript
- Test with keyboard and screen readers
- Use responsive Tailwind classes
- Optimize all images
- Consider SEO for every page

---

### 15. Performance Budget

| Metric | Budget | Critical |
|--------|--------|----------|
| Total JS | < 200KB | Yes |
| Total CSS | < 50KB | Yes |
| Images (per page) | < 1MB | Yes |
| Fonts | < 100KB | Yes |
| Lighthouse Performance | > 95 | Yes |
| Lighthouse Accessibility | 100 | Yes |
| Lighthouse SEO | 100 | Yes |

---

### 16. Deployment Checklist

Before deploying to production:

- [ ] All pages have proper meta tags
- [ ] Structured data validates (Google Rich Results Test)
- [ ] Lighthouse scores meet targets (95+ all categories)
- [ ] All images optimized and have alt text
- [ ] No TypeScript errors
- [ ] All content is in Czech
- [ ] Responsive on all breakpoints (tested)
- [ ] Keyboard navigation works completely
- [ ] No console errors or warnings
- [ ] robots.txt and sitemap.xml configured
- [ ] Forms have proper validation and error messages
- [ ] HTTPS enabled
- [ ] Performance budget met

---

## Quick Reference

### Color Palette
- Primary: `#12B68C` → `bg-primary`
- Background: `#FFFFFF` → `bg-background`
- See `COLORS.md` for full palette

### Component Installation
```bash
npx shadcn-vue@latest add [component-name]
```

### SEO Composable
```vue
const { addWebsiteSchema, addOrganizationSchema, addBreadcrumbSchema } = useStructuredData()
```

### Dev Server
```bash
npm run dev  # Port 7000
```

---

## Resources

- [Nuxt 3 Documentation](https://nuxt.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn-vue Documentation](https://www.shadcn-vue.com/)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Google SEO Guide](https://developers.google.com/search/docs)

---

## Contact & Questions

For questions or clarifications about these guidelines, please consult the project documentation or reach out to the development team.

**Remember**: SEO, Performance, Accessibility, and Color Consistency are non-negotiable priorities for this project.
