# Elevation

Sources read: 2026-11-20 ([snapshot](../sources/SNAPSHOT.md)). On the web `1dp` is `1px`.

## Levels

Elevation is the distance between two surfaces on the z-axis. Material has six levels ([elevation → applying elevation](../sources/m3/styles_elevation.md#all-surfaces-and-components-have-elevation-values); values in [ElevationTokens.kt](../sources/tokens/base/ElevationTokens.kt)):

| Level | Distance | Used at rest by |
| --- | --- | --- |
| 0 | 0dp | App bar (not scrolled); buttons (filled, tonal, outlined); button groups; cards (filled, outlined); carousel; chips; full-screen dialog; FAB and extended FAB **in a navigation rail**; FAB menu list items; icon buttons; lists; navigation rail; segmented button; docked side sheet; slider; split button; tabs |
| 1 | 1dp | Banner; modal bottom sheet; elevated button; elevated card; elevated chips; modal navigation drawer; modal side sheet |
| 2 | 3dp | App bar (scrolled); menus; navigation bar; rich tooltip; toolbar |
| 3 | 6dp | Date pickers; modal dialogs; extended FAB; FAB; FAB menu close button; search; time pickers |
| 4 | 8dp | Not a resting level: interaction only |
| 5 | 12dp | Not a resting level: interaction only |

([component elevation](../sources/m3/styles_elevation.md#component-elevation))

- A resting element sits on levels 0 to 3; **levels 4 and 5 are only for interaction**, such as hover and dragged ([applying elevation, the levels figure](../sources/m3/styles_elevation.md#changing-elevation)).
- **Keep each component's default elevation**; don't change it ([resting elevation](../sources/m3/styles_elevation.md#resting-elevation-default)).
- Use **few levels**: the fewer a UI has, the more they direct attention ([shadows](../sources/m3/styles_elevation.md#shadows), overview).
- **Interaction raises elevation by one level**, the same way for similar elements: a hovered FAB goes from 3 to 4, and every Material button rises one level on hover ([changing elevation](../sources/m3/styles_elevation.md#changing-elevation)).
- A component's elevation only places it relative to others; it has **no shadow or colour of its own** by default. Each platform decides how a level looks ([component elevation](../sources/m3/styles_elevation.md#component-elevation), overview).
- Surface tint colour is deprecated; use the level tokens 0–5 ([tokens](../sources/m3/styles_elevation.md#tokens)).

## Showing elevation

- A surface shows its elevation through its **edges** against its surroundings, its **overlap** with other surfaces, and its **distance** from them ([depicting elevation](../sources/m3/styles_elevation.md#depicting-elevation)).
- **By default M3 separates surfaces by tone** (different surface roles), not by shadow. A shadow or a scrim are the other ways ([tonal difference](../sources/m3/styles_elevation.md#tonal-difference)).
- Surface roles aren't tied to elevation, but **overlapping areas or components always use different colour roles**, so they read as separate ([surface color roles & elevation](../sources/m3/styles_elevation.md#surface-color-roles--elevation)).
- An interactive component's edges must contrast enough with what's under it to be seen as separate ([tonal difference](../sources/m3/styles_elevation.md#tonal-difference)).

## Shadows

- Unlike M2, shadows aren't applied to every level: use one **only to protect an element against a busy background or to encourage interaction** ([differences from M2](../sources/m3/styles_elevation.md#differences-from-m2)):
  - **Protect**: over a patterned or busy background, elevate cards, chips or buttons ([when to use visible shadows](../sources/m3/styles_elevation.md#protect-elements)).
  - **Encourage interaction**: an element may lift on focus, selection or a swipe, and lower when a higher one appears ([encourage interaction](../sources/m3/styles_elevation.md#encourage-interaction)).
- A small, sharp shadow means close to the surface behind; a larger, softer one means further away ([shadows](../sources/m3/styles_elevation.md#shadows)).

## Scrims

A scrim goes **under modals and expanded navigation menus** to focus attention on them. It uses the `scrim` colour role at **32%** opacity ([scrims](../sources/m3/styles_elevation.md#scrims); `ContainerOpacity 0.32` in [ScrimTokens](../sources/tokens/component-tokens.md#scrimtokens)).
