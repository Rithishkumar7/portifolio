---
name: Sky Interstellar
colors:
  surface: '#f3fbfb'
  surface-dim: '#d3dcdc'
  surface-bright: '#f3fbfb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#edf5f6'
  surface-container: '#e7eff0'
  surface-container-high: '#e1eaea'
  surface-container-highest: '#dce4e5'
  on-surface: '#151d1e'
  on-surface-variant: '#3b494b'
  inverse-surface: '#2a3233'
  inverse-on-surface: '#eaf2f3'
  outline: '#6a7a7b'
  outline-variant: '#b9cacb'
  surface-tint: '#006970'
  primary: '#006970'
  on-primary: '#ffffff'
  primary-container: '#00f0ff'
  on-primary-container: '#006970'
  inverse-primary: '#00dbe9'
  secondary: '#5d5e5f'
  on-secondary: '#ffffff'
  secondary-container: '#e0dfdf'
  on-secondary-container: '#626363'
  tertiary: '#00696d'
  on-tertiary: '#ffffff'
  tertiary-container: '#6fecf2'
  on-tertiary-container: '#006a6e'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#7df4ff'
  primary-fixed-dim: '#00dbe9'
  on-primary-fixed: '#002022'
  on-primary-fixed-variant: '#004f54'
  secondary-fixed: '#e3e2e2'
  secondary-fixed-dim: '#c6c6c6'
  on-secondary-fixed: '#1a1c1c'
  on-secondary-fixed-variant: '#464747'
  tertiary-fixed: '#79f5fb'
  tertiary-fixed-dim: '#59d8de'
  on-tertiary-fixed: '#002021'
  on-tertiary-fixed-variant: '#004f52'
  background: '#f3fbfb'
  on-background: '#151d1e'
  surface-variant: '#dce4e5'
typography:
  display-lg:
    fontFamily: Space Grotesk
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '500'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Space Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Space Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Space Grotesk
    fontSize: 12px
    fontWeight: '600'
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
  unit: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  xxl: 80px
  gutter: 24px
  margin: 32px
---

## Brand & Style
This design system captures the weightless, expansive feeling of the upper atmosphere transitioning into a daytime nebula. It is built for aerospace interfaces, high-tech research tools, or avant-garde creative platforms that require a sense of limitless scale and ethereal precision.

The visual style is a hyper-refined evolution of **Glassmorphism**, characterized by extreme transparency and high-diffusion background blurs. Unlike traditional dark cosmic themes, this system utilizes a "daytime" luminosity that feels airy rather than heavy. Interaction patterns should feel "kinetic"—elements should float, drift, or pulse with a subtle orbital momentum. The emotional goal is to evoke clarity, wonder, and a sense of calm, high-altitude perspective.

## Colors
The palette abandons the void of deep space for the luminosity of the exosphere. 
- **Base Layers:** Utilize Pale Sky Blues and Misty Azures for the primary canvas, creating an expansive, airy foundation. Soft Midnight Blue is reserved strictly for high-contrast text or deep structural elements, never reaching a true pitch black.
- **Accents:** Shimmering Silver provides a metallic, tech-forward sheen to borders and dividers. Electric Cyan and Soft Aurora Green serve as the "kinetic" energy of the UI, used for primary actions, success states, and data visualizations.
- **Luminosity:** Gradients should mimic the scattering of light in a thin atmosphere—soft, multi-stop transitions between azure and transparent silver.

## Typography
This design system relies exclusively on **Space Grotesk** to maintain a technical, futuristic edge that balances the softness of the glass effects. 

Headlines should be set with tight tracking to feel like solid structural anchors. Body text requires generous line height to maintain the "airy" feel of the theme. Use the "label-caps" style for metadata or technical readouts to simulate cockpit instrumentation. Text color should primarily use the Soft Midnight Blue at varying opacities to ensure legibility against the luminous background.

## Layout & Spacing
The layout follows a **fluid grid** model to mimic the unbounded nature of the sky. 

Elements are spaced using a 4px baseline, but with a preference for larger "breathing room" (xl and xxl units) to prevent the UI from feeling cluttered. Gutters are kept wide (24px) to allow the background gradients and blurs to flow between components. Container widths should be dynamic, often utilizing max-widths rather than fixed pixel dimensions to ensure the interface feels like it is floating within the viewport.

## Elevation & Depth
Depth is communicated through **Delicate Glassmorphism** rather than traditional shadows.
- **Layers:** Surface layers use ultra-thin 1px Shimmering Silver strokes (15-20% opacity) to define boundaries.
- **Backdrop Blur:** Use high blur values (20px to 40px) combined with a very low-opacity white or azure fill (5-10%). This creates a "misty" occlusion effect.
- **Light Source:** A subtle top-down global illumination should be simulated by adding a slight inner-glow to the top edge of floating cards.
- **Z-Index:** Higher elevation levels are indicated by increased transparency and stronger backdrop blurs, making the element appear closer to the "viewer" and further from the "atmosphere" below.

## Shapes
Shapes in this design system are **Rounded**, avoiding harsh sharp corners to maintain the ethereal, cloud-like aesthetic. 

Standard components use a 0.5rem (8px) radius. Larger containers or "hero" cards should use the `rounded-xl` (1.5rem / 24px) setting to emphasize their floating nature. Interactive elements like buttons can occasionally utilize pill-shapes to contrast against more geometric data containers, suggesting a softer touchpoint for the user.

## Components
- **Buttons:** Primary buttons use a gradient of Electric Cyan to Soft Aurora Green with white text. Ghost buttons use a Shimmering Silver border and high-transparency fill.
- **Cards:** These are the primary expression of the theme. Use a `backdrop-filter: blur(30px)` and a 1px border of `rgba(192, 192, 192, 0.2)`. No heavy drop shadows; use a subtle ambient glow in a pale blue tint instead.
- **Input Fields:** Minimalist containers with a bottom-border focus state in Electric Cyan. The background should be a slightly darker "Misty Azure" than the main canvas.
- **Chips/Badges:** Small, pill-shaped elements with low-opacity Aurora Green backgrounds and high-contrast Midnight Blue text for status indicators.
- **Kinetic Loaders:** Use thin, concentric silver rings that rotate at varying speeds, creating a celestial "orbital" animation.
- **Data Visualizations:** Lines and points should glow with a soft "bloom" effect, appearing as stars or satellites against the misty background layers.