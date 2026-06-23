---
name: Institutional Precision
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#5a4136'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#8e7164'
  outline-variant: '#e3bfb1'
  surface-tint: '#a33e00'
  primary: '#a33e00'
  on-primary: '#ffffff'
  primary-container: '#ff6600'
  on-primary-container: '#561d00'
  inverse-primary: '#ffb596'
  secondary: '#505f76'
  on-secondary: '#ffffff'
  secondary-container: '#d3e3ff'
  on-secondary-container: '#56657d'
  tertiary: '#0062a1'
  on-tertiary: '#ffffff'
  tertiary-container: '#009cfc'
  on-tertiary-container: '#003155'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdbcd'
  primary-fixed-dim: '#ffb596'
  on-primary-fixed: '#360f00'
  on-primary-fixed-variant: '#7c2e00'
  secondary-fixed: '#d3e3ff'
  secondary-fixed-dim: '#b7c7e2'
  on-secondary-fixed: '#0b1c30'
  on-secondary-fixed-variant: '#38485e'
  tertiary-fixed: '#d0e4ff'
  tertiary-fixed-dim: '#9ccaff'
  on-tertiary-fixed: '#001d35'
  on-tertiary-fixed-variant: '#00497b'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  display:
    fontFamily: IBM Plex Sans
    fontSize: 48px
    fontWeight: '600'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: IBM Plex Sans
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: IBM Plex Sans
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
  headline-md:
    fontFamily: IBM Plex Sans
    fontSize: 24px
    fontWeight: '500'
    lineHeight: 32px
  headline-sm:
    fontFamily: IBM Plex Sans
    fontSize: 20px
    fontWeight: '500'
    lineHeight: 28px
  body-lg:
    fontFamily: IBM Plex Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: IBM Plex Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: IBM Plex Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: IBM Plex Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: IBM Plex Sans
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 14px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 48px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 40px
---

## Brand & Style

This design system balances the high-energy vitality of a modern financial startup with the rigorous structural integrity of an established asset management firm. It is engineered for professional environments where data density and clarity are paramount, yet it seeks to differentiate through a bold, high-contrast aesthetic.

The visual style is **Corporate / Modern**, leaning into a structured grid and a "technocratic" feel. By utilizing a vibrant primary brand color against a deep, authoritative neutral base, the UI evokes confidence, urgency, and precision. It communicates a brand that is forward-thinking (orange) but grounded in security and intellect (deep navy).

The target audience includes institutional investors, asset managers, and high-net-worth individuals who require a tool that feels as powerful and reliable as the capital they manage.

## Colors

The palette is led by a vibrant **Electric Orange** (#FF6600), derived from the brand identity to signal action, growth, and key interactive touchpoints. This is balanced by **Deep Navy** (#0A1B2F), used for primary typography, headers, and high-contrast surfaces to maintain institutional gravity.

- **Primary:** Used for primary buttons, active states, and critical data highlights.
- **Secondary (Navy):** Used for navigation backgrounds, heading text, and structural accents.
- **Neutral:** A range of Slate grays (#64748B) handles secondary text, borders, and disabled states.
- **Surface:** The background defaults to a very light, cool gray (#F8FAFC) to reduce eye strain while maintaining a crisp, professional environment.

Color is used sparingly but purposefully to drive attention toward data-driven insights and calls to action.

## Typography

The design system exclusively utilizes **IBM Plex Sans**, a typeface designed to reflect the relationship between man and machine. Its engineered, neutral grotesque style provides the "Institutional" character required for financial data.

- **Headlines:** Set in SemiBold (600) or Medium (500) to establish a clear hierarchy. Display and Large headlines use tight letter-spacing for a modern, editorial impact.
- **Body:** Standardized at 16px for optimal readability in complex dashboards.
- **Labels:** Small, uppercase labels with increased letter-spacing are used for table headers, metadata, and category tags to ensure clarity even at small scales.
- **Numerical Data:** Should utilize tabular lining figures (monospaced numbers) where possible to ensure vertical alignment in financial tables.

## Layout & Spacing

The layout is built on a **Fluid 12-column grid** for desktop, transitioning to a 4-column grid for mobile. It follows an **8px base unit** to ensure mathematical consistency across all components and spacing.

- **Data Density:** In data-heavy views (spreadsheets, analytics), the vertical rhythm may tighten to a 4px increment to maximize information density without sacrificing legibility.
- **Margins:** Large outer margins (40px) on desktop provide "breathing room" for focused analysis.
- **Alignment:** All elements must snap to the grid. Use 24px gutters to clearly separate modular cards and widgets.

## Elevation & Depth

To maintain a "Precision" feel, this design system avoids heavy shadows, instead using **Tonal Layers** and **Low-Contrast Outlines**.

- **Surface Tiers:** The primary background is the lowest level. Content sits on white cards (#FFFFFF) with a 1px border (#E2E8F0).
- **Z-Axis:** Depth is communicated by adding a subtle, extra-diffused shadow (0px 4px 12px rgba(10, 27, 47, 0.05)) only when an element is interactive or "lifted" (e.g., a modal or a card on hover).
- **Dividers:** Use thin, 1px lines in Slate-100 to separate information within cards. Avoid shadows for internal separation to keep the interface flat and efficient.

## Shapes

The shape language is defined by **8px corners** (Level 2: Rounded). This specific radius is soft enough to feel approachable and modern, yet sharp enough to maintain a serious, institutional architectural feel.

- **Components:** Buttons, input fields, and cards all share the 8px radius.
- **Nested Elements:** Elements inside a container should have a slightly smaller radius (4px) to maintain visual nesting harmony.
- **Pill Accents:** Tags and status chips may use a full pill-shape (32px radius) to contrast against the more rigid 8px structural containers.

## Components

### Buttons
- **Primary:** Solid Orange (#FF6600) with White text. Bold, 8px radius.
- **Secondary:** Deep Navy (#0A1B2F) border and text. No fill.
- **Ghost:** Clear background with Navy or Gray text; used for secondary actions to reduce visual noise.

### Cards
- White background, 8px radius, 1px Slate border.
- Card headers should use a 1px bottom border and the `label-md` typography style for titles.

### Input Fields
- White background with 1px Slate-200 border.
- On focus, the border transitions to Orange (#FF6600) with a subtle 2px outer glow (rgba(255, 102, 0, 0.15)).

### Data Tables
- Header row uses a light gray background (#F1F5F9).
- Cell text uses `body-sm`. Numeric columns are right-aligned.
- 1px horizontal dividers only; avoid vertical lines to keep the look modern.

### Chips & Status
- **Success:** Soft Green background with Deep Green text.
- **Warning:** Soft Orange background with Deep Orange text.
- **Neutral:** Soft Gray background with Navy text.