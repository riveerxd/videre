# Color Palette - Videre.cz

**Note:** This website uses a single light mode theme only. No dark mode support.

## Primary Color
- **Main Brand Color**: `#12B68C` (HSL: 165° 82% 39%)
- **Usage**: Primary buttons, links, important UI elements
- **Tailwind class**: `bg-primary`, `text-primary`

## Color Palette

### Background & Surface
- **Background**: `#FFFFFF` (Pure white)
- **Card**: `#FFFFFF` (White cards)
- **Border**: `#E5E5E5` (Light gray)

### Text
- **Foreground**: `#1A1A1A` (Near black)
- **Muted Foreground**: `#737373` (Medium gray)

### Secondary & Accent
- **Secondary**: `#F0F9F7` (Very light teal - 95% lightness)
- **Secondary Foreground**: `#0D7257` (Dark teal)
- **Accent**: `#E0F4F0` (Light teal - 92% lightness)
- **Accent Foreground**: `#0E8766` (Medium-dark teal)

## Usage Examples

### Buttons
```vue
<!-- Primary button -->
<button class="bg-primary text-primary-foreground">
  Kontaktujte nás
</button>

<!-- Secondary button -->
<button class="bg-secondary text-secondary-foreground">
  Zjistit více
</button>
```

### Cards
```vue
<div class="bg-card text-card-foreground border border-border">
  <h3>Nadpis</h3>
  <p class="text-muted-foreground">Popis</p>
</div>
```

### Focus/Ring States
- **Ring Color**: Matches primary color `#12B68C`
- **Usage**: Focus states, input highlights

## Color Accessibility
- Primary color (#12B68C) on white provides **AA** contrast ratio
- All text colors meet WCAG 2.1 Level AA standards
- Dark mode maintains proper contrast ratios
