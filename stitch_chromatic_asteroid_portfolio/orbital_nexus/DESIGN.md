---
name: Orbital Nexus
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
  on-surface-variant: '#e1c0b2'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#a88a7e'
  outline-variant: '#594137'
  surface-tint: '#ffb695'
  primary: '#ffb695'
  on-primary: '#571f00'
  primary-container: '#ff7120'
  on-primary-container: '#5c2100'
  inverse-primary: '#a24000'
  secondary: '#bdf4ff'
  on-secondary: '#00363d'
  secondary-container: '#00e3fd'
  on-secondary-container: '#00616d'
  tertiary: '#c6c6c7'
  on-tertiary: '#2f3131'
  tertiary-container: '#9b9c9c'
  on-tertiary-container: '#323434'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdbcc'
  primary-fixed-dim: '#ffb695'
  on-primary-fixed: '#351000'
  on-primary-fixed-variant: '#7b2f00'
  secondary-fixed: '#9cf0ff'
  secondary-fixed-dim: '#00daf3'
  on-secondary-fixed: '#001f24'
  on-secondary-fixed-variant: '#004f58'
  tertiary-fixed: '#e2e2e2'
  tertiary-fixed-dim: '#c6c6c7'
  on-tertiary-fixed: '#1a1c1c'
  on-tertiary-fixed-variant: '#454747'
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
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.1em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '500'
    lineHeight: '1.3'
    letterSpacing: 0.05em
  body-lg:
    fontFamily: Space Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0.01em
  body-md:
    fontFamily: Space Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0.01em
  label-mono:
    fontFamily: Space Grotesk
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: 0.2em
spacing:
  container-max: 1440px
  gutter: 24px
  section-padding: 120px
  grid-unit: 8px
---

## Brand & Style

The design system is engineered for a high-performance professional portfolio that merges the technical precision of Web3 venture labs with a premium, curated aesthetic. The brand personality is visionary, precise, and technologically advanced, targeting an audience of founders, investors, and digital pioneers.

The visual direction is a sophisticated blend of **High-Contrast Minimalism** and **Glassmorphism**. It utilizes a "dark-mode-first" philosophy to create depth and focus, allowing high-fidelity 3D assets and vibrant accents to pierce through a deep, obsidian base. The asteroid background is integrated as a subtle, parallax atmospheric layer, grounding the futuristic interface in a tangible, cinematic space. High-contrast typography and razor-sharp geometric motifs (grids, line-art, and hexagons) ensure the content feels like a tactical dashboard or a high-end technical dossier.

## Colors

The palette is anchored in a deep **Obsidian (#0A0A0A)** background to maximize contrast and focus. The primary accent is **Tangerine (#FF7120)**, used specifically for critical calls-to-action and active states to evoke energy and momentum. A secondary **Electric Cyan (#00E5FF)** is introduced as a high-tech counterpoint, reserved for data visualizations, decorative glows, and subtle iconography.

Surface colors utilize varying levels of transparency and charcoal tones to create a sense of glass-like layering. Text follows a strict hierarchy: **Pure White (#FFFFFF)** for primary information and **Muted Silver (#E6E6E6)** for secondary body copy, ensuring impeccable legibility against the dark void.

## Typography

This design system utilizes **Space Grotesk** across all levels to maintain a cohesive, technical, and geometric feel. Headings are characterized by wide tracking and uppercase transformations, mimicking the "TOMORROW" wordmark for a futuristic, architectural presence. 

The typography hierarchy is intentionally dramatic; display headings use tight kerning and heavy weights for impact, while labels and utility text use increased letter-spacing to evoke a sense of machine-read precision. Line heights are generous in body copy to ensure readability against complex backgrounds.

## Layout & Spacing

The layout follows a **Fixed 12-Column Grid** system within a 1440px container. To reflect the structured nature of the source material, the grid is often explicitly visible as a design element, with subtle 1px lines or corner markers defining content areas.

Spacing is aggressive and rhythmic, based on an 8px base unit. Section transitions use significant vertical padding (120px+) to create a curated, gallery-like experience. Elements are often "boxed" within defined containers, utilizing a structured approach where gutters are kept consistent at 24px to maintain architectural alignment across various screen sizes.

## Elevation & Depth

Depth is achieved through **Glassmorphism** and **Tonal Layering** rather than traditional drop shadows. Containers use semi-transparent backgrounds (10-20% opacity) with a high-intensity backdrop blur (20px+) to "float" over the asteroid field background.

Edges are defined by "Ghost Borders"—ultra-thin 1px strokes with a linear gradient (top-left to bottom-right) that transition from white to transparent. For interactive elements, elevation is signaled by internal glows and outer blooms using the primary Tangerine color, making components appear as if they are self-illuminated from within the dark interface.

## Shapes

The shape language is strictly **Sharp (0px roundedness)** to emphasize technical precision and futuristic brutalism. Every card, button, and container uses hard 90-degree angles. To add sophistication, shapes are occasionally modified with "clipped corners" or hexagonal geometry, especially in decorative elements and image masks. Buttons and cards utilize 1px solid borders to maintain structural integrity and a "blueprint" aesthetic.

## Components

### Buttons & CTAs
Buttons are rectangular with zero border-radius. The primary CTA ("APPLY NOW" style) features a solid Tangerine fill with black text and a subtle outer glow on hover. Secondary buttons use a "Ghost" style with a 1px white border and a hover transition that fills the background with a 10% white tint.

### Cards
Portfolio and service cards are treated as glass modules. They feature a 1px border with a gradient stroke and a slight backdrop blur. Titles within cards use the wide-tracked uppercase typography, accompanied by small "corner-frame" icons in the top-right to reinforce the technical theme.

### Inputs & Form Fields
Input fields are minimalist, consisting of a bottom-only 1px border that glows Tangerine upon focus. Labels are positioned above the field in the 'label-mono' style to maintain the dossier feel.

### Navigation & Status
The navigation bar is a fixed glass element at the top of the viewport. Status indicators (like chips or project tags) use a monochromatic scheme with small dot icons to indicate active or archived states, mimicking a system dashboard.

### 3D Visual Motifs
High-fidelity 3D assets (spheres, geometric abstractions) are used sparingly as focal points, often placed behind text with a soft radial glow to draw the eye without distracting from the content.