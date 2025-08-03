# Helva Design System

This document outlines the unified design system implemented for Helva's website using Tailwind CSS.

## Typography Scale

### Heroes & Main Headings
- `text-hero` (64px) - Main landing page title
- `text-hero-sm` (48px) - Large section headings
- `text-hero-xs` (40px) - Smaller hero variants

### Section Headings
- `text-heading-xl` (48px) - Major section titles
- `text-heading-lg` (40px) - Large section headings  
- `text-heading` (32px) - Standard section headings
- `text-heading-sm` (24px) - Smaller section headings

### Subheadings & Titles
- `text-subheading` (20px) - Card titles, component headings
- `text-subheading-sm` (18px) - Smaller component titles

### Body Text
- `text-body-lg` (20px) - Large body text, descriptions
- `text-body` (18px) - Standard body text
- `text-body-sm` (16px) - Smaller body text
- `text-body-xs` (14px) - Fine print, captions

### Feature/Card Text
- `text-feature` (16px) - Feature card titles
- `text-feature-sm` (14px) - Smaller feature text
- `text-feature-xs` (12px) - Minimal feature text

## Color System

### Brand Colors
- `text-helva-primary` / `bg-helva-primary` - #32ADE6 (Main Helva blue)
- `text-helva-secondary` / `bg-helva-secondary` - #3B82F6 (Secondary blue)
- `bg-gradient-to-r from-helva-primary to-helva-secondary` - Brand gradient

### Text Colors
- `text-text-primary` - #FFFFFF (White, primary text)
- `text-text-secondary` - #D1D5DB (Gray-300, secondary text)
- `text-text-muted` - #9CA3AF (Gray-400, muted text)
- `text-text-subtle` - #6B7280 (Gray-500, subtle text)

### Surface Colors
- `bg-surface-primary` - #000000 (Black, main background)
- `bg-surface-secondary` - #111827 (Gray-900, secondary background)
- `bg-surface-tertiary` - #1F2937 (Gray-800, tertiary background)
- `bg-surface-card` - rgba(17, 24, 39, 0.9) (Semi-transparent card background)

### Border Colors
- `border-borders-primary` - rgba(75, 85, 99, 0.5) (Standard borders)
- `border-borders-secondary` - rgba(107, 114, 128, 0.3) (Subtle borders)
- `border-borders-accent` - rgba(50, 173, 230, 0.5) (Accent borders)

## Usage Examples

### Section Headers
```tsx
<h2 className="text-heading-xl sm:text-hero-sm text-text-primary mb-6">
  Section Title
</h2>
<p className="text-body-lg text-text-secondary">
  Section description
</p>
```

### Cards
```tsx
<div className="bg-surface-card border border-borders-primary rounded-xl">
  <h3 className="text-subheading text-text-primary">Card Title</h3>
  <p className="text-body text-text-secondary">Card content</p>
</div>
```

### Feature Cards
```tsx
<h3 className="text-feature sm:text-subheading-sm text-text-primary">
  Feature Name
</h3>
```

### Buttons & CTAs
```tsx
<button className="bg-helva-primary text-text-primary hover:bg-helva-secondary">
  Primary Action
</button>
```

## Responsive Design

All typography classes include responsive variants:
- Base: Mobile-first sizing
- `sm:` - Small screens and up
- `md:` - Medium screens and up
- `lg:` - Large screens and up

Example:
```tsx
<h1 className="text-hero-xs sm:text-hero-sm lg:text-hero">
  Responsive Hero
</h1>
```

## Implementation Status

✅ **Completed Components:**
- FeaturesSection.tsx
- HeroSection.tsx
- UseCasesSection.tsx
- PartnershipsSection.tsx
- RoadmapSection.tsx

🔄 **Remaining Components:**
- Footer.tsx
- Navigation.tsx
- FeatureCard.tsx components

## Migration Guide

When updating components:

1. Replace hardcoded colors with semantic tokens:
   - `text-white` → `text-text-primary`
   - `text-gray-400` → `text-text-muted`
   - `bg-black` → `bg-surface-primary`
   - `#32ADE6` → `helva-primary`

2. Replace hardcoded typography with scale:
   - `text-4xl sm:text-5xl` → `text-heading-xl sm:text-hero-sm`
   - `text-lg` → `text-body`
   - `text-xl` → `text-body-lg`

3. Use semantic border classes:
   - `border-gray-700/50` → `border-borders-primary`
   - Custom rgba borders → `border-borders-accent`
