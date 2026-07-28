---
name: Obsidian Elite
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
  on-surface-variant: '#e7bdb7'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#ad8883'
  outline-variant: '#5d3f3b'
  surface-tint: '#ffb4aa'
  primary: '#ffb4aa'
  on-primary: '#690003'
  primary-container: '#ff5545'
  on-primary-container: '#5c0002'
  inverse-primary: '#c0000a'
  secondary: '#c7c6c6'
  on-secondary: '#2f3131'
  secondary-container: '#484949'
  on-secondary-container: '#b8b8b8'
  tertiary: '#c6c6c7'
  on-tertiary: '#2f3131'
  tertiary-container: '#909191'
  on-tertiary-container: '#282a2a'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdad5'
  primary-fixed-dim: '#ffb4aa'
  on-primary-fixed: '#410001'
  on-primary-fixed-variant: '#930005'
  secondary-fixed: '#e3e2e2'
  secondary-fixed-dim: '#c7c6c6'
  on-secondary-fixed: '#1a1c1c'
  on-secondary-fixed-variant: '#464747'
  tertiary-fixed: '#e2e2e2'
  tertiary-fixed-dim: '#c6c6c7'
  on-tertiary-fixed: '#1a1c1c'
  on-tertiary-fixed-variant: '#454747'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  display-xl:
    fontFamily: Montserrat
    fontSize: 64px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  display-lg:
    fontFamily: Montserrat
    fontSize: 40px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.03em
  display-lg-mobile:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '800'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Montserrat
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: -0.01em
  body-md:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '400'
    lineHeight: '1.5'
    letterSpacing: '0'
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1'
    letterSpacing: 0.1em
  mono-data:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1'
    letterSpacing: -0.02em
spacing:
  base: 4px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 48px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
---

## Brand & Style

This design system establishes a high-performance environment for elite competitive gaming. It intentionally moves away from the saturated neon aesthetics common in the industry, opting instead for a "Dark Minimalist" approach that parallels luxury automotive and high-end fintech interfaces.

The brand personality is clinical, disciplined, and prestigious. The UI should evoke a sense of high-fidelity precision, treating gaming statistics and competitive entry points with the same gravity as financial assets.

**Design Style: Professional Dark Minimalism**
- **Atmosphere:** Deep matte surfaces with high-contrast functional elements.
- **Visual Strategy:** Reliance on structural hierarchy, ultra-thin hairlines, and tactical use of whitespace to signify quality.
- **Imagery:** Desaturated, high-contrast photography with monochromatic treatments. Use subtle grain overlays on large backgrounds to add a tactile, premium feel.

## Colors

The palette is strictly controlled to maintain a serious, high-stakes atmosphere. 

- **The Void:** Use `#050505` (Obsidian) for primary application backgrounds to create absolute depth.
- **The Surface:** Use `#0D0D0D` (Matte Charcoal) for cards, containers, and elevated surfaces.
- **Performance Red:** `#FF3B30` is the sole high-energy accent. It is reserved strictly for "Live" indicators, "Join Match" buttons, and critical failure states.
- **Elite Silver & White:** Use `#A2A2A2` for secondary metadata and pure `#FFFFFF` for primary headings to ensure maximum legibility against the dark void.

## Typography

The typographic system utilizes a dual-font strategy to balance aggressive branding with functional utility.

- **Headlines:** Montserrat is used for its geometric, authoritative presence. Set headings with tight leading and negative letter-spacing to create a "locked-in" professional appearance.
- **UI & Body:** Inter provides a systematic, neutral base for complex data. 
- **Data Display:** For scores and timers, use Inter with medium weights and slightly tighter tracking to mimic high-end digital instrument clusters.
- **Labels:** Small caps with increased letter-spacing should be used for category tags and eyebrow headers to provide a structural, architectural feel.

## Layout & Spacing

The layout is built on a strict 4px grid system, emphasizing horizontal alignment and rhythmic vertical stacking. 

- **Grid:** Use a 12-column fluid grid for desktop with 24px gutters. For mobile, shift to a 4-column grid with 16px margins.
- **Density:** Maintain high information density. Elements should feel compactly packed but clearly delineated by subtle borders rather than large gaps.
- **Alignment:** Use heavy left-alignment for all text blocks to maintain a clean vertical axis. Components like scoreboards should use tabular alignment for numerical data.

## Elevation & Depth

This system rejects traditional drop shadows in favor of "Object-on-Object" layering and lighting effects.

- **Tier 1 (Base):** Obsidian `#050505` background.
- **Tier 2 (Containers):** Charcoal `#0D0D0D` surfaces. Delineation is achieved via a 1px solid border of `rgba(255, 255, 255, 0.08)`.
- **Tier 3 (Active/Hover):** Increase border opacity to `0.2` and apply a very subtle inner glow (1px spread) rather than an outer shadow.
- **Depth Metaphor:** Use background blurs (30px+) only when a modal interrupts the flow, creating a "frosted obsidian" effect that keeps the focus on the elite interaction.

## Shapes

The design system utilizes a **Sharp** (0px) radius for all core components to reinforce the feeling of precision, technical hardware, and high-performance engineering.

- **Exceptions:** Use full "Pill" shapes (`rounded-full`) exclusively for small status indicators (e.g., "Online" dots) or secondary utility chips to provide a visual break from the rigid grid.
- **Borders:** All container borders must be exactly 1px. Do not use thicker strokes as they degrade the "high-fidelity" feel.

## Components

**Buttons**
- **Primary:** Solid White or Performance Red. Sharp corners. Typography is bold, centered, and black or dark charcoal for maximum contrast.
- **Secondary/Ghost:** 1px Silver border, transparent background. White text. On hover, the background fills with a 5% white tint.

**Inputs**
- Darker than the container (`#050505`). Bottom-border only (1px) or full subtle border. Focus state changes the border to pure White.

**Cards**
- No shadows. Defined by 1px borders. Use a "Header" section within the card with a slightly lighter background (`#151515`) to separate metadata from content.

**Lists & Leaderboards**
- Alternating row zebra-striping is forbidden. Use 1px horizontal dividers. Highlight the "User Row" with a subtle Performance Red left-edge accent (2px wide).

**Data Visualizations**
- Graphs should use thin white lines with no area fill. Points of interest are marked with Performance Red dots.

**Status Chips**
- Small, uppercase, and monochromatic. Use a "Performance Red" dot next to the text only for "Live" or "Critical" statuses.