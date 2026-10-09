---
version: alpha
name: VendaFácil
description: Operação simples e calorosa para lojas de alimentação e varejo local.
colors:
  ink: "#20221F"
  cream: "#F5F1E8"
  paper: "#FFFDF8"
  orange: "#ED6B3D"
  orange-soft: "#FFB097"
  purple: "#7657D9"
  green: "#6C9860"
  muted: "#77756D"
  line: "#DED8CA"
typography:
  display:
    fontFamily: "Arial, Helvetica, sans-serif"
    fontSize: "clamp(4rem, 7vw, 7.4rem)"
    fontWeight: 900
    lineHeight: 0.88
    letterSpacing: "-0.09em"
  heading:
    fontFamily: "Arial, Helvetica, sans-serif"
    fontSize: "2rem"
    fontWeight: 800
    lineHeight: 0.95
    letterSpacing: "-0.06em"
  body:
    fontFamily: "Arial, Helvetica, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.55
rounded:
  sm: "8px"
  md: "12px"
  lg: "18px"
  full: "999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "48px"
  section: "120px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "#FFFFFF"
    rounded: "{rounded.sm}"
    padding: "15px 18px"
  button-action:
    backgroundColor: "{colors.orange}"
    textColor: "#FFFFFF"
    rounded: "{rounded.sm}"
    padding: "15px 18px"
  surface:
    backgroundColor: "{colors.paper}"
    rounded: "{rounded.md}"
    border: "1px solid {colors.line}"

---

## Visual direction

VendaFácil should feel like a capable local operator, not generic enterprise software. Use a warm cream canvas, near-black structural surfaces, orange for action, lilac for insights, and green for healthy operation.

Prefer asymmetrical editorial compositions for marketing surfaces and dense, calm monitor/operate compositions for the dashboard. Do not use the hero-plus-three-card SaaS template in operational screens.

## Product rules

- Every order state must be visible without opening a detail screen.
- Every destructive or irreversible action needs confirmation and a recoverable state when possible.
- A merchant should understand what to do next within three seconds of opening the dashboard.
- Empty states explain the next useful action; they never say only “No data”.
- Loading states preserve layout with skeletons instead of jumping content.
- Availability changes should immediately communicate whether the customer can still buy the product.

## Motion posture

Motion communicates continuity and feedback, never decoration. Use short ease-out transitions for hover and feedback, spring-like layout transitions for kanban cards, and `AnimatePresence` for drawers, toasts, carts, and empty-state changes. Respect `prefers-reduced-motion` and never delay a primary action for animation.

## Component rules

Use semantic CSS variables and composable primitives. Prefer shadcn-style open components when a dialog, sheet, select, tabs, toast, table, or tooltip is needed. Customize the source to match these tokens instead of stacking one-off overrides.

Avoid indigo SaaS gradients, excessive glassmorphism, icon tiles above every heading, arbitrary dashboard numbers, rainbow palettes, and cards that exist only to fill space.
