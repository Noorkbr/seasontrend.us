# Levwo Hybrid Design System

## 🎨 Design Philosophy

This design system combines the **modern ecommerce aesthetic** of Levwo with the **premium luxury style** of Forex Trading Platform, creating a sophisticated yet approachable user experience.

---

## Color Palette

### Primary Colors
- **Primary Blue**: `#0ea5e9` - Fresh, trustworthy, modern
- **Secondary Cyan**: `#06b6d4` - Modern, energetic
- **Primary Dark**: `#0284c7` - Depth variant
- **Primary Light**: `#38bdf8` - Highlight variant

### Premium Accents
- **Gold Accent**: `#D4AF37` - Premium, luxury, exclusive
- **Accent Secondary**: `#ec4899` - Vibrant, energetic
- **Amber**: `#f59e0b` - Warm, inviting

### Text Colors
- **Dark Text**: `#0f172a` - High contrast, primary content
- **Secondary Text**: `#475569` - Supporting content
- **Light Text Silver**: `#c0c0c0` - Premium feel, subtle content
- **Very Light**: `#94a3b8` - Disabled states

### Backgrounds
- **White**: `#ffffff` - Clean ecommerce background
- **Light**: `#f8fafc` - Subtle depth
- **Tertiary**: `#f1f5f9` - Section separation
- **Dark**: `#0f172a` - Footer, dark sections

### Status Colors
- **Success**: `#22c55e` - Confirmations, positive actions
- **Alert/Error**: `#ef4444` - Warnings, errors
- **Warning**: `#f59e0b` - Caution states
- **Info**: `#3b82f6` - Informational messages

### Gradients
```css
/* Primary Gradient */
linear-gradient(135deg, #0ea5e9 0%, #06b6d4 100%)

/* Gold Premium Gradient */
linear-gradient(135deg, #D4AF37 0%, #f59e0b 100%)

/* Triple Gradient (Logo/Highlights) */
linear-gradient(135deg, #0ea5e9 0%, #06b6d4 50%, #f59e0b 100%)

/* Gold Shine Gradient */
linear-gradient(90deg, #D4AF37 0%, #f0d9a0 50%, #D4AF37 100%)
```

---

## Typography

### Font Families
- **Primary Sans**: `Inter` (400, 500, 600, 700, 800)
- **Display Serif**: `Playfair Display` (600, 700, 800) - Elegant headlines
- **System Fallback**: `-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`

### Font Sizes
```css
--font-xs: 0.75rem;      /* 12px - Small labels */
--font-sm: 0.875rem;     /* 14px - Body small */
--font-base: 1rem;       /* 16px - Body text */
--font-lg: 1.125rem;     /* 18px - Large body */
--font-xl: 1.25rem;      /* 20px - Small headings */
--font-2xl: 1.5rem;      /* 24px - Sub-headings */
--font-3xl: 1.875rem;    /* 30px - Headings */
--font-4xl: 2.25rem;     /* 36px - Large headings */
--font-5xl: 3rem;        /* 48px - Hero titles */
--font-6xl: 4rem;        /* 64px - Display titles */
```

### Font Weights
- **Light**: 300
- **Regular**: 400
- **Medium**: 500
- **Semi-bold**: 600
- **Bold**: 700
- **Extra-bold**: 800

### Line Heights
- **Tight**: 1.1 - Display headings
- **Snug**: 1.375 - Headings
- **Normal**: 1.5 - Default
- **Relaxed**: 1.625 - Body text
- **Loose**: 1.75 - Long-form content

---

## Spacing Scale

```css
--spacing-xs: 0.5rem;    /* 8px */
--spacing-sm: 1rem;      /* 16px */
--spacing-md: 1.5rem;    /* 24px */
--spacing-lg: 2rem;      /* 32px */
--spacing-xl: 3rem;      /* 48px */
--spacing-2xl: 4rem;     /* 64px */
--spacing-3xl: 6rem;     /* 96px */
```

---

## Border Radius

```css
--radius-sm: 0.5rem;     /* 8px - Subtle rounding */
--radius-md: 0.75rem;    /* 12px - Standard cards */
--radius-lg: 1rem;       /* 16px - Large cards */
--radius-xl: 1.5rem;     /* 24px - Premium elements */
--radius-2xl: 2rem;      /* 32px - Hero cards */
--radius-full: 9999px;   /* Circular - Pills, avatars */
```

---

## Shadows System

### Standard Shadows
```css
--shadow-sm: 0 1px 3px 0 rgba(0, 0, 0, 0.08);
--shadow-md: 0 4px 12px -2px rgba(0, 0, 0, 0.12);
--shadow-lg: 0 12px 24px -4px rgba(0, 0, 0, 0.15);
--shadow-xl: 0 20px 40px -8px rgba(0, 0, 0, 0.18);
--shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
```

### Colored Shadows (Premium)
```css
--shadow-primary: 0 8px 24px -4px rgba(14, 165, 233, 0.25);
--shadow-gold: 0 8px 24px -4px rgba(212, 175, 55, 0.3);
--shadow-accent: 0 8px 24px -4px rgba(245, 158, 11, 0.25);
```

### Inner Shadows (Glassmorphism)
```css
inset 0 1px 2px rgba(255, 255, 255, 0.1)
```

---

## Transitions & Animations

### Transition Timing
```css
--transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1);   /* Quick feedback */
--transition-base: 250ms cubic-bezier(0.4, 0, 0.2, 1);   /* Standard */
--transition-slow: 350ms cubic-bezier(0.4, 0, 0.2, 1);   /* Smooth */
```

### Keyframe Animations

#### Shimmer (3s) - Header announcements
```css
@keyframes shimmer {
    0% { left: -100%; }
    100% { left: 100%; }
}
```

#### Gradient Shift (3s) - Logo/text effects
```css
@keyframes gradientShift {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
}
```

#### Bounce (2s) - Cart counter
```css
@keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-3px); }
}
```

#### Float (6s-8s) - Hero cards
```css
@keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-30px); }
}
```

#### Pulse (2s) - Badges
```css
@keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
}
```

#### Shine (3s) - Gold gradients (Forex style)
```css
@keyframes shine {
    0% { background-position: 0% 50%; }
    100% { background-position: 200% 50%; }
}
```

#### Slide In (300ms) - Notifications
```css
@keyframes slideIn {
    from {
        transform: translateX(400px);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
}
```

#### Slide Up (500ms) - Scroll reveals
```css
@keyframes slideUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
```

---

## Components

### Buttons

#### .btn (Base)
- Padding: `0.875rem 2rem`
- Border-radius: `var(--radius-full)`
- Font-weight: 600
- Transition: All 250ms
- Ripple effect on hover

#### .btn-primary
- Background: `linear-gradient(135deg, #0ea5e9 0%, #06b6d4 100%)`
- Color: White
- Shadow: `var(--shadow-primary)`
- Hover: Transform up 3px, brightness 1.1

#### .btn-gold (Premium)
- Background: `linear-gradient(135deg, #D4AF37 0%, #f59e0b 100%)`
- Color: White
- Shadow: `var(--shadow-gold)`
- Animation: Shine effect
- Hover: Transform, scale 1.02

#### .btn-outline
- Background: Transparent
- Border: 2px solid primary
- Color: Primary
- Hover: Filled with primary color

#### Sizes
- `.btn-sm`: Padding `0.625rem 1.5rem`, Font `0.875rem`
- `.btn-lg`: Padding `1.125rem 2.5rem`, Font `1.125rem`

### Cards

#### .card (Standard)
- Background: White
- Border-radius: `var(--radius-xl)`
- Shadow: `var(--shadow-md)`
- Border: 1px solid `rgba(14, 165, 233, 0.1)`
- Hover: Transform up 12px, shadow-2xl

#### .card-premium (Luxury)
- Glassmorphism: `backdrop-filter: blur(12px)`
- Background: `rgba(255, 255, 255, 0.95)`
- Border: 2px solid `#D4AF37`
- Gold gradient border accent
- Shadow: `var(--shadow-gold)`

### Input Fields

#### .input (Standard)
- Padding: `1rem 1.5rem`
- Border-radius: `var(--radius-lg)`
- Border: 1px solid `rgba(0, 0, 0, 0.1)`
- Background: White
- Transition: 300ms

#### .input-glass (Premium)
- Background: `rgba(255, 255, 255, 0.8)`
- Backdrop-filter: `blur(8px)`
- Border: 1px solid `rgba(212, 175, 55, 0.2)`
- Focus: Gold highlight `0 0 0 4px rgba(212, 175, 55, 0.1)`

### Badges

#### .badge (Standard)
- Padding: `0.5rem 1rem`
- Border-radius: `var(--radius-full)`
- Font-size: `0.75rem`
- Font-weight: 700
- Shadow: `var(--shadow-md)`

#### .badge-premium
- Background: `linear-gradient(135deg, #D4AF37 0%, #f59e0b 100%)`
- Animation: Pulse 2s
- Box-shadow: `var(--shadow-gold)`

---

## Sections

### Hero Section
- Background: Gradient with animated blobs
- Floating blob animations (6s-8s)
- Premium glass stats cards
- Gradient text for main headline
- CTA buttons with hover effects

### Product Cards
- White background with subtle border
- Image overlay on hover
- Badge positioning (top-right)
- Price gradient text
- Add-to-cart button with ripple
- Hover: Scale 1.02, shadow-2xl

### Testimonials
- White cards on gradient background
- Quote marks with Playfair Display
- Gold star ratings
- Author avatars with gradient borders
- Hover: Translate up 8px

### Newsletter
- Full-width gradient background
- White form inputs with shadows
- Glass blur effect
- Premium CTA button
- Floating bubble background

### Footer
- Dark gradient background
- Gold gradient logo text
- Social icons with hover effects
- Links with underline animation

---

## Glassmorphism Effects

### Standard Glass
```css
background: rgba(255, 255, 255, 0.9);
backdrop-filter: blur(8px);
-webkit-backdrop-filter: blur(8px);
border: 1px solid rgba(255, 255, 255, 0.2);
```

### Premium Glass
```css
background: rgba(255, 255, 255, 0.95);
backdrop-filter: blur(12px);
-webkit-backdrop-filter: blur(12px);
border: 1px solid rgba(212, 175, 55, 0.3);
box-shadow: var(--shadow-gold);
```

---

## Hover Effects

### Scale Transform
- Small: `scale(1.02)` - Subtle elements
- Medium: `scale(1.05)` - Cards, buttons
- Large: `scale(1.1)` - Icons, badges

### Translate
- Up: `translateY(-3px)` to `translateY(-12px)`
- Down: `translateY(3px)` - Pressed states
- Horizontal: `translateX(4px)` - List items

### Brightness
- Hover: `brightness(1.1)` - Buttons
- Active: `brightness(0.95)` - Pressed state

---

## Responsive Breakpoints

```css
/* Mobile First */
@media (min-width: 640px) { /* Small tablets */ }
@media (min-width: 768px) { /* Tablets */ }
@media (min-width: 1024px) { /* Desktop */ }
@media (min-width: 1280px) { /* Large desktop */ }

/* Specific Breakpoints */
@media (max-width: 480px) { /* Small mobile */ }
@media (max-width: 768px) { /* Mobile & small tablets */ }
@media (max-width: 1024px) { /* Tablets */ }
```

### Touch Targets (Mobile)
- Minimum: 44px × 44px
- Recommended: 48px × 48px
- Spacing: 8px minimum between targets

---

## Accessibility

### Color Contrast
- Text on white: Minimum 4.5:1 (WCAG AA)
- Large text: Minimum 3:1
- Interactive elements: Clear focus states

### Focus States
- Visible outline: 2px solid primary
- Box-shadow ring: `0 0 0 4px rgba(14, 165, 233, 0.2)`
- Skip to content link

### Motion
- Respect `prefers-reduced-motion`
- Provide static alternatives
- Optional animation disable

### Screen Readers
- Semantic HTML5 elements
- ARIA labels for icons
- Alt text for images
- Descriptive link text

---

## Performance Guidelines

### Animation Performance
- Use `transform` and `opacity` for 60 FPS
- Avoid animating `width`, `height`, `top`, `left`
- Use `will-change` sparingly
- Leverage GPU acceleration

### Image Optimization
- Lazy loading: `loading="lazy"`
- Responsive images: `srcset`
- WebP format with fallbacks
- Proper sizing and compression

### CSS Optimization
- Critical CSS inline
- Defer non-critical CSS
- Minimize reflows/repaints
- Use CSS variables for theme values

---

## Usage Examples

### Premium Gold Button
```html
<button class="btn btn-gold btn-lg">
  Exclusive Access
</button>
```

### Glassmorphism Card
```html
<div class="card card-premium">
  <h3>Premium Feature</h3>
  <p>Luxury experience included</p>
</div>
```

### Gradient Text
```html
<h1 class="gradient-text">
  Premium Quality
</h1>
```

### Gold Badge
```html
<span class="badge badge-premium">
  EXCLUSIVE
</span>
```

---

## Best Practices

1. **Consistency**: Use design tokens (CSS variables) throughout
2. **Performance**: Optimize animations for 60 FPS
3. **Accessibility**: Ensure WCAG 2.1 AA compliance
4. **Responsiveness**: Mobile-first approach
5. **Premium Feel**: Strategic use of gold accents (don't overuse)
6. **Trust**: Maintain clean, professional aesthetic
7. **Conversions**: Clear CTAs with strong contrast
8. **Hierarchy**: Use typography scale consistently

---

## Version History

### v1.0.0 (Current)
- Initial hybrid design system
- Combined Levwo + Forex premium aesthetics
- Complete color palette with gold accents
- Typography system with Playfair Display
- Animation library (8 keyframe animations)
- Component library (buttons, cards, inputs, badges)
- Glassmorphism effects
- Responsive design system
- Accessibility guidelines

---

**Design System Status**: ✅ Production Ready

*Last Updated*: 2025-11-04