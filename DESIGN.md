---
version: 2
name: Emmanuele Durante
description: >
  A restrained personal design system built around deep navy, warm ivory,
  and a controlled orange accent. The visual language should feel precise,
  mature and technical without resembling a software dashboard or developer
  portfolio template. Typography, proportion and spacing carry most of the
  identity. Orange is a signature, not decoration.

design_tokens:

  color:
    background: "#081A2C"
    background-deep: "#04111E"
    surface: "#102A43"

    text: "#F4F1EA"
    text-muted: "#A7ADB4"
    text-subtle: "#68727C"

    accent: "#FF641E"

    border: "rgba(244, 241, 234, 0.14)"
    border-strong: "rgba(244, 241, 234, 0.28)"

  font:
    body: "Instrument Sans"
    heading: "Instrument Sans"

  spacing:
    "1": "6px"
    "2": "12px"
    "3": "18px"
    "4": "24px"
    "5": "36px"
    "6": "48px"
    "7": "72px"
    "8": "96px"
    "9": "144px"

  radius:
    sm: "4px"
    md: "10px"
    lg: "18px"
    full: "9999px"

  type:
    caption:
      size: "12px"
      lineHeight: "1.4"
      weight: "500"

    body:
      size: "16px"
      lineHeight: "1.5"
      weight: "400"

    body-large:
      size: "20px"
      lineHeight: "1.4"
      weight: "400"

    heading-small:
      size: "32px"
      lineHeight: "1.15"
      weight: "500"

    heading:
      size: "56px"
      lineHeight: "1.05"
      weight: "500"

    display:
      size: "clamp(64px, 8vw, 104px)"
      lineHeight: "0.96"
      weight: "500"

components:

  link:
    color: "{color.text}"
    accentColor: "{color.accent}"
    fontSize: "16px"
    fontWeight: "500"

  button-primary:
    backgroundColor: "{color.text}"
    textColor: "{color.background}"
    borderRadius: "10px"
    padding: "12px 18px"
    fontSize: "15px"
    fontWeight: "500"

  button-accent:
    backgroundColor: "{color.accent}"
    textColor: "{color.background-deep}"
    borderRadius: "10px"
    padding: "12px 18px"
    fontSize: "15px"
    fontWeight: "600"

  button-quiet:
    backgroundColor: "transparent"
    textColor: "{color.text}"
    borderColor: "{color.border}"
    borderRadius: "10px"
    padding: "11px 17px"
    fontSize: "15px"
    fontWeight: "500"

  surface:
    backgroundColor: "{color.surface}"
    borderColor: "{color.border}"
    borderRadius: "18px"

---

# Emmanuele Durante — Design System

## Design personality

The visual language is restrained, precise and confident.

The system should feel closer to an editorial identity than a traditional
developer portfolio or SaaS interface.

The main canvas is deep navy rather than black.

Warm ivory replaces pure white.

Orange is the only brand accent and must be used sparingly.

The identity comes primarily from:

- typography
- spacing
- alignment
- scale
- negative space
- small interaction details

Do not compensate for minimal content by adding decorative UI.

---

## Color philosophy

### Navy

Navy is the primary environment of the site.

It should dominate large surfaces and create a sense of depth without using
gradients or visual effects.

### Ivory

Use warm ivory instead of pure white.

This avoids the hard black/white software aesthetic and gives the site a more
editorial character.

### Orange

Orange is the visual signature.

Use it for selected moments:

- focus states
- active states
- small markers
- hover details
- selected words
- subtle rules
- occasional calls to action

Do not use orange as the default background of every interactive element.

If too much orange is visible at once, the system has failed.

---

# Typography

Typography should carry most of the personality.

Use Instrument Sans consistently unless a later typography exploration
identifies a clearly stronger alternative.

Avoid mixing multiple font families simply to create visual interest.

Use scale, weight and whitespace instead.

Display text can become very large.

Body copy should remain quiet and highly readable.

Do not use monospace typography as a generic signal for “developer”.

---

# Layout

Prefer asymmetrical editorial composition over centered landing-page layouts.

Avoid:

- centered hero + subtitle + CTA
- three-column feature grids
- dashboard-like card systems
- repeating card sections
- excessive containers

Prefer:

- strong alignment
- large empty regions
- deliberate imbalance
- mixed text scales
- clear horizontal and vertical anchors

Content does not need to fill the viewport evenly.

---

# Surfaces

Use very few cards.

Most content should sit directly on the main canvas.

Introduce a surface only when grouping has semantic value.

Cards should not be used merely to make sparse content look fuller.

Avoid glassmorphism.

Avoid gradients.

Avoid decorative blur.

Avoid heavy drop shadows.

Depth should come mainly from:

- tone
- border
- spacing
- overlap when necessary

---

# Corners

The visual system should not rely heavily on pill shapes.

Use:

- 4px for small details
- 10px for controls
- 18px for occasional larger surfaces
- full radius only where the geometry explicitly calls for a pill

Do not use extremely rounded containers as a recurring brand motif.

---

# Interaction

Interactions should be precise rather than theatrical.

Good examples:

- orange underline appearing on hover
- a 1–2px positional shift
- text color transition
- subtle border change
- small orange marker entering or leaving
- controlled opacity transitions

Avoid:

- animated gradients
- custom cursor spectacle
- blobs
- mouse trails
- background shaders
- large parallax effects
- gratuitous page transitions

Motion should support hierarchy, not become content.

---

# Rules for AI agents

1. Use the design tokens rather than introducing arbitrary values.

2. Navy, ivory and orange define the identity.
   Do not introduce additional accent hues.

3. Orange must remain scarce.
   Do not use it as a general-purpose background color.

4. Prefer typography and spacing over cards, illustrations and decoration.

5. Do not imitate Shopify layouts, components, button shapes or navigation.

6. Do not recreate Shopify's monochrome black/white visual language.

7. Avoid generic developer-portfolio patterns.

8. Avoid generic SaaS patterns.

9. Do not introduce gradients, shader effects or generative backgrounds.

10. Do not add UI simply because an area looks empty.

11. Empty space is intentional when supported by strong composition.

12. Prefer one strong visual decision over several weaker decorative ones.

---

# Do

- Use deep navy as the dominant canvas.
- Use warm ivory typography.
- Use orange sparingly as a signature.
- Use large typography confidently.
- Maintain strong alignment.
- Keep component vocabulary small.
- Make mobile composition intentional.
- Treat accessibility and focus states as part of the visual system.

# Don't

- Do not recreate Shopify.
- Do not make the interface monochrome black and white.
- Do not use green as a Shopify-like semantic brand cue.
- Do not create pill-heavy UI.
- Do not use giant rounded cards.
- Do not use gradients.
- Do not use glassmorphism.
- Do not use excessive shadows.
- Do not show technology logos.
- Do not create skill cards.
- Do not build a conventional portfolio grid.
- Do not create content purely to occupy empty space.

---

# Technical direction

Implementation:

- Astro
- TypeScript
- native CSS

The design system should map cleanly to CSS custom properties.

Do not introduce Tailwind merely because the original reference used it.

Example:

```css
:root {
  --color-bg: #081a2c;
  --color-bg-deep: #04111e;
  --color-surface: #102a43;

  --color-text: #f4f1ea;
  --color-text-muted: #a7adb4;
  --color-accent: #ff641e;

  --space-1: 0.375rem;
  --space-2: 0.75rem;
  --space-3: 1.125rem;
  --space-4: 1.5rem;
  --space-5: 2.25rem;
  --space-6: 3rem;
  --space-7: 4.5rem;
  --space-8: 6rem;
  --space-9: 9rem;
}
