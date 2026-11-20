# Motion

Sources read: 2026-11-20 ([snapshot](../sources/SNAPSHOT.md)).

## Two systems

- **Components and motion use the motion physics system** (springs) since M3 Expressive; products should move to it ([easing and duration](../sources/m3/styles_motion_easing-and-duration.md#easing-and-duration), the note at the top).
- **Transitions between screens still use the older easing and duration system**, which is no longer maintained but stays valid for them ([same](../sources/m3/styles_motion_easing-and-duration.md#easing-and-duration); [transitions](../sources/m3/styles_motion_transitions.md#what-makes-a-good-transition), "M3 transitions use the legacy easing and duration system").

## Springs (components)

- Two preset **motion schemes**: **expressive**, Material's default for most situations, hero moments and key interactions (it overshoots and bounces); and **standard**, more functional with minimal bounce, for utilitarian products. Most motion in a product uses one scheme ([motion physics system → motion schemes](../sources/m3/styles_motion_overview.md#the-basics-motion-schemes)).
- Tokens come in two kinds and three speeds ([spring tokens](../sources/m3/styles_motion_overview.md#spring-tokens)):
  - **Spatial**: anything that moves on screen (position, rotation, size, rounded corners); overshoots and bounces into place ([style](../sources/m3/styles_motion_overview.md#style)).
  - **Effects**: colour and opacity, with no overshoot ([same](../sources/m3/styles_motion_overview.md#style)).
  - **Default** for animations that cover part of the screen (a bottom sheet, the expanded rail); **fast** for small components (switches, buttons); **slow** for full-screen animations ([speed](../sources/m3/styles_motion_overview.md#speed)).
- The scheme is chosen at the product level, not in the token: `md.sys.motion.spring.fast.spatial` in the expressive scheme ([spring tokens](../sources/m3/styles_motion_overview.md#spring-tokens)).

### On the web: springs as curves

The web has no built-in springs: **use springs where possible**; otherwise use these curves, which mimic them, for animations without interruptions or gestures ([cross-platform experiences](../sources/m3/styles_motion_overview.md#cross-platform-experiences), [web: convert springs to curves](../sources/m3/styles_motion_overview.md#web-convert-springs-to-curves)):

| Spring | `cubic-bezier(…)` | Duration |
| --- | --- | --- |
| Expressive fast spatial | 0.42, 1.67, 0.21, 0.90 | 350ms |
| Expressive default spatial | 0.38, 1.21, 0.22, 1.00 | 500ms |
| Expressive slow spatial | 0.39, 1.29, 0.35, 0.98 | 650ms |
| Expressive fast effects | 0.31, 0.94, 0.34, 1.00 | 150ms |
| Expressive default effects | 0.34, 0.80, 0.34, 1.00 | 200ms |
| Expressive slow effects | 0.34, 0.88, 0.34, 1.00 | 300ms |
| Standard fast spatial | 0.27, 1.06, 0.18, 1.00 | 350ms |
| Standard default spatial | 0.27, 1.06, 0.18, 1.00 | 500ms |
| Standard slow spatial | 0.27, 1.06, 0.18, 1.00 | 750ms |
| Standard fast effects | 0.31, 0.94, 0.34, 1.00 | 150ms |
| Standard default effects | 0.34, 0.80, 0.34, 1.00 | 200ms |
| Standard slow effects | 0.34, 0.88, 0.34, 1.00 | 300ms |

The spring values themselves (damping, stiffness) are in [ExpressiveMotionTokens.kt](../sources/tokens/base/ExpressiveMotionTokens.kt) and [StandardMotionTokens.kt](../sources/tokens/base/StandardMotionTokens.kt).

## Easing and duration (transitions)

| Easing | CSS | Use |
| --- | --- | --- |
| Emphasized | none in CSS: use **standard** instead | Begin and end on screen; also exit temporarily (ends at rest just off screen) |
| Emphasized decelerate | `cubic-bezier(0.05, 0.7, 0.1, 1.0)` | Enter the screen |
| Emphasized accelerate | `cubic-bezier(0.3, 0.0, 0.8, 0.15)` | Exit the screen permanently |
| Standard | `cubic-bezier(0.2, 0.0, 0, 1.0)` | Small, quick, utility transitions; the web's fallback for emphasized |
| Standard decelerate | `cubic-bezier(0, 0, 0, 1)` | Enter (small) |
| Standard accelerate | `cubic-bezier(0.3, 0, 1, 1)` | Exit (small) |

([tokens → easing](../sources/m3/styles_motion_easing-and-duration.md#emphasized-easing-set), [choosing an easing set](../sources/m3/styles_motion_easing-and-duration.md#choosing-an-easing-set), [choosing an easing type](../sources/m3/styles_motion_easing-and-duration.md#choosing-an-easing-type))

| Durations | Values | Use |
| --- | --- | --- |
| Short 1–4 | 50, 100, 150, 200ms | Small utility transitions (selection controls: 200ms, standard) |
| Medium 1–4 | 250, 300, 350, 400ms | Across a medium area (a FAB opening a sheet: 400ms, emphasized) |
| Long 1–4 | 450, 500, 550, 600ms | Large expressive transitions (a card to full screen: 500ms, emphasized) |
| Extra long 1–4 | 700, 800, 900, 1000ms | Rare: ambient transitions without user input (a carousel's auto-advance: 1000ms) |

([tokens → duration](../sources/m3/styles_motion_easing-and-duration.md#short-durations))

- **Starting pairs**: emphasized 500ms on screen; emphasized decelerate 400ms entering; emphasized accelerate 200ms exiting; standard 300ms, standard decelerate 250ms, standard accelerate 200ms ([suggested easing and duration pairs](../sources/m3/styles_motion_easing-and-duration.md#suggested-easing-and-duration-pairs)).
- **Duration grows with the area** a transition covers ([transition size](../sources/m3/styles_motion_easing-and-duration.md#transition-size)).
- **Exits are shorter than entrances**: leaving needs less attention than what comes next ([enter vs. exit transitions](../sources/m3/styles_motion_easing-and-duration.md#enter-vs-exit-transitions)).
- Not so fast that it's jarring, not so slow that users wait ([duration](../sources/m3/styles_motion_easing-and-duration.md#duration)).

## Transition patterns

| Pattern | For | Commonly with |
| --- | --- | --- |
| **Container transform** | An element opening into more detail (a card into its page); the strongest link between two states and the most expressive | Cards, lists, image galleries, search boxes, sheets, FABs, chips |
| **Forward and backward** | Moving between consecutive levels of a hierarchy (an inbox to a thread): a horizontal slide | Lists, cards, buttons, links |
| **Lateral** | Peers at one level (tabs, a photo album): elements slide together, no fade | Tabs, carousels, image galleries |
| **Top level** | Top-level destinations: the old screen fades out quickly, then the new one fades in, with no shared elements | Navigation bar, rail, drawer |
| **Enter and exit** | A component appearing or leaving, inside the screen (a dialog) or across its edge (a sheet) | FABs, dialogs, menus, snackbars, time pickers, tooltips; app bars, banners, navigation, sheets |
| **Skeleton loader** | From a loading state to the loaded UI: shapes where content will appear, a subtle pulse from top left to bottom right, then the content fades in quickly | — |

([transitions](../sources/m3/styles_motion_transitions.md#container-transform))

- **Container transform** for hero moments and shallow hierarchies, never in deep hierarchies, where it becomes too much ([choosing → container transform](../sources/m3/styles_motion_transitions.md#container-transform-1)).
- **Forward and backward**: use the platform's default ([choosing → forward and backward](../sources/m3/styles_motion_transitions.md#forward-and-backward-1)).
- **Lateral**: never for hierarchical screens, and don't fade the content while it slides ([choosing → lateral](../sources/m3/styles_motion_transitions.md#lateral-1)).
- **Top level**: never lateral, since that implies swiping between destinations, which clashes with carousels and swipeable list items ([choosing → top level](../sources/m3/styles_motion_transitions.md#top-level-1)).
- **Enter and exit**: never for navigating hierarchical screens ([choosing → enter and exit](../sources/m3/styles_motion_transitions.md#enter-and-exit-1)).
- A component enters **away from its nearest edge**: a menu at the top expands downwards, a snackbar at the bottom upwards. Avoid scale and z-axis motion, which imply an elevation change ([enter and exit → within screen bounds](../sources/m3/styles_motion_transitions.md#within-screen-bounds)).
- Where things enter sets the app's spatial model: notifications from the top, a navigation drawer from the left, bottom sheets and the keyboard from the bottom ([beyond screen bounds](../sources/m3/styles_motion_transitions.md#beyond-screen-bounds)).
- App bars and the navigation bar may slide off on scroll to give space ([same](../sources/m3/styles_motion_transitions.md#beyond-screen-bounds)).

## Good transitions

- **Reduced motion**: when the user's reduced-motion setting is on, use subtle fades instead of large slides or scaling, and turn off decorative effects such as parallax and shape morphing ([follows accessibility settings](../sources/m3/styles_motion_transitions.md#follows-accessibility-settings)). On the web this is `prefers-reduced-motion`.
- **Consistent**: the same kind of transition for the same kind of change ([consistent](../sources/m3/styles_motion_transitions.md#consistent)).
- **Stable layouts**: skeleton loaders instead of content that pops in or shifts ([stable layouts](../sources/m3/styles_motion_transitions.md#stable-layouts)).
- **No jump cuts** by default; one may suit pure efficiency, such as opening a menu in a productivity app ([no jarring jump cuts](../sources/m3/styles_motion_transitions.md#no-jarring-jump-cuts)).
- **One direction**: grouped elements move along one axis; only important elements (a hero image) stay persistent ([unified direction](../sources/m3/styles_motion_transitions.md#unified-direction)).
- **Clean fades**: fade the old content out fully before fading the new in; keep any cross fade short. Don't fade a bottom sheet as it enters or exits ([clean fades](../sources/m3/styles_motion_transitions.md#clean-fades)).
- **Simple style**: no bouncy springs on common transitions ([simple style](../sources/m3/styles_motion_transitions.md#simple-style)).
