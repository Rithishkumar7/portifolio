---
name: Celestial Kinetic
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#cbc3d7'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#958ea0'
  outline-variant: '#494454'
  surface-tint: '#d0bcff'
  primary: '#d0bcff'
  on-primary: '#3c0091'
  primary-container: '#a078ff'
  on-primary-container: '#340080'
  inverse-primary: '#6d3bd7'
  secondary: '#4cd7f6'
  on-secondary: '#003640'
  secondary-container: '#03b5d3'
  on-secondary-container: '#00424e'
  tertiary: '#fbabff'
  on-tertiary: '#580065'
  tertiary-container: '#e14ef6'
  on-tertiary-container: '#4d0059'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e9ddff'
  primary-fixed-dim: '#d0bcff'
  on-primary-fixed: '#23005c'
  on-primary-fixed-variant: '#5516be'
  secondary-fixed: '#acedff'
  secondary-fixed-dim: '#4cd7f6'
  on-secondary-fixed: '#001f26'
  on-secondary-fixed-variant: '#004e5c'
  tertiary-fixed: '#ffd6fd'
  tertiary-fixed-dim: '#fbabff'
  on-tertiary-fixed: '#36003e'
  on-tertiary-fixed-variant: '#7c008e'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  display-xl:
    fontFamily: Space Grotesk
    fontSize: 72px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.03em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: '0'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: '0'
  label-sm:
    fontFamily: Space Grotesk
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.0'
    letterSpacing: 0.1em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 64px
  section-gap: 160px
---

## Brand & Style

This design system centers on a high-end, cinematic interpretation of the cosmos. The brand personality is authoritative yet experimental, evoking the precision of aerospace engineering and the vastness of deep space. It targets a sophisticated audience that values technical excellence and artistic flair.

The visual style is a hybrid of **Minimalism** and **Glassmorphism**. It utilizes expansive whitespace (negative space) to represent the vacuum of the universe, while UI elements appear as high-precision instruments floating in orbit. The "asteroids" theme is translated through dynamic motion and "impact" points—where user interaction triggers chromatic glows and subtle light dispersion. The overall emotional response should be one of awe, clarity, and premium craftsmanship.

## Colors

The palette is rooted in the "Deep Space" spectrum. The foundation is built on **Cosmic Black (#050505)** for primary surfaces and **Dark Navy (#0A0F1E)** for secondary depth layers. 

Interactive elements use a "Chromatic Burst" strategy:
- **Electric Violet (Primary):** Used for primary actions and core focus states.
- **Cyan (Secondary):** Used for data visualization and technical details.
- **Magenta (Tertiary):** Used for rare highlights and brand accents.
- **Amber:** Reserved strictly for cautionary states or high-priority calls to action, mimicking the glow of atmospheric reentry.

Gradients should be used sparingly on borders and active states to simulate light refracting off glass surfaces in a vacuum.

## Typography

The typography strategy contrasts technical geometry with utilitarian clarity. 

**Space Grotesk** is used for headings and labels to lean into the scientific, futuristic aesthetic. Headings must use tight tracking (letter-spacing) to feel dense and impactful, like a heavy celestial body. 

**Inter** provides the functional counterpoint for body text, ensuring maximum readability for long-form project descriptions and professional experience. All body text should maintain a generous line height to prevent the dark interface from feeling cramped.

## Layout & Spacing

The layout follows a **Fixed Grid** model for the main content container to maintain a curated, editorial feel, while the background "asteroid" animation remains fluid and full-bleed.

A 12-column grid is used for desktop layouts with wide gutters to emphasize the minimalist philosophy. Section vertical spacing is intentionally aggressive (160px+) to create a sense of vastness between content blocks. This "vacuum spacing" ensures that each portfolio piece or section feels like its own isolated discovery in space.

## Elevation & Depth

Depth is conveyed through **Glassmorphism** and light emission rather than traditional shadows. 

- **Level 1 (Base):** Cosmic Black background.
- **Level 2 (Asteroid Field):** The background animation layer with particles moving at varying Z-indices.
- **Level 3 (Surface):** Dark Navy containers with 40% opacity and a 12px background blur.
- **Level 4 (Floating Cards):** Glass surfaces with 60% opacity, 20px background blur, and a 1px "chromatic" border (a very subtle linear gradient of Violet to Cyan at 30% opacity).

Instead of drop shadows, use **Ambient Glows**. When a card is hovered, a soft, diffused radial gradient of the Primary color should appear behind the element, suggesting a light source or atmospheric glow.

## Shapes

The design system uses **Rounded** geometry (0.5rem base) to soften the technical edge of the typography. This creates a "cockpit" or "lens" feel. 

Interactive elements like buttons and chips utilize a slightly higher roundedness for a pill-shaped appearance when necessary, while main content containers stay at the standard `rounded-lg` (1rem) or `rounded-xl` (1.5rem) to maintain a structural, architectural presence.

## Components

### Buttons
Primary buttons use a subtle "Atmospheric Reentry" gradient (Violet to Magenta). The border is a high-contrast Cyan line at 1px. Upon hover, the button should "ignite," increasing the glow intensity and shifting the gradient position.

### Glass Cards
The signature component. Cards must feature a `backdrop-filter: blur(16px)` and a thin, semi-transparent border. They should implement a subtle "floating" animation using a sine wave CSS keyframe to simulate zero gravity.

### Asteroid Container
A performance-optimized `canvas` or `SVG` layer that sits behind all content. Particles should have a "trailing" blur effect and move slower than the scroll speed to create a parallax depth effect.

### Input Fields
Minimalist underlines or ghost-box styles. Focus states should trigger a "scanning" animation—a thin Cyan line that travels across the bottom of the input field.

### Chips/Tags
Small, pill-shaped elements with a Dark Navy background and high-contrast labels. Used for skills or categories, they should appear as "readouts" from a digital display.

### Navigation
A fixed, top-aligned glass bar. The active state is indicated by a "chromatic flare"—a small, vibrant dot of Cyan light centered beneath the nav item.