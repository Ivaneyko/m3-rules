# Actions: buttons, icon buttons, button groups, split button, FABs

Sources read: 2026-11-20 ([snapshot](../sources/SNAPSHOT.md)). Sizes in dp (`1dp` = `1px` on the web). Values from the Compose tokens are marked *tokens*; they're the same `md.comp.*` tokens the specs pages draw in pictures.

## Buttons

**Variants**: default and **toggle** (selection). **Configurations**: five sizes (XS, S default, M, L, XL), two shapes (round default, square), five colour styles (elevated, filled default, tonal, outlined, text) ([buttons → variants, configurations](../sources/m3/components_buttons.md#configurations)). Small buttons use **16dp** side padding; 24dp is no longer recommended ([M3 Expressive update](../sources/m3/components_buttons.md#m3-expressive-update)).

| Size | Height | Side padding | Icon | Icon–label gap | Outline (outlined) | Square corners | Pressed corners |
| --- | --- | --- | --- | --- | --- | --- | --- |
| XS | 32 | 16 | 20 | 8 | 1 | 12 | 8 |
| S | 40 | 16 | 20 | 8 | 1 | 12 | 8 |
| M | 56 | 24 | 24 | 8 | 1 | 16 | 12 |
| L | 96 | 48 | 32 | 12 | 2 | 28 | 16 |
| XL | 136 | 64 | 40 | 16 | 3 | 28 | 16 |

Round buttons are fully rounded at every size; a toggle turns from round to square when selected ([corner sizes](../sources/m3/components_buttons.md#corner-sizes); *tokens* `Button{XSmall…XLarge}Tokens` in [component-tokens](../sources/tokens/component-tokens.md#buttonsmalltokens)).

| Style | Container | Label and icon | Selected toggle | Elevation (rest / hover) |
| --- | --- | --- | --- | --- |
| Filled | `primary` | `on-primary` | unselected `surface-container` with `on-surface-variant`; selected `primary` with `on-primary` | 0 / 1 |
| Tonal | `secondary-container` | `on-secondary-container` | selected `secondary` with `on-secondary` | 0 / 1 |
| Outlined | none, `outline-variant` outline | `on-surface-variant` | selected `inverse-surface` with `inverse-on-surface` | 0 |
| Elevated | `surface-container-low` | `primary` | selected `primary` with `on-primary` | 1 / 2 |
| Text | none (shows only on interaction) | `primary` (the page); the Compose tokens give `on-surface-variant` | no toggle: toggle buttons don't use the text style | 0 |

(*tokens* `FilledButtonTokens`, `TonalButtonTokens`, `OutlinedButtonTokens`, `ElevatedButtonTokens`, `TextButtonTokens` in [component-tokens](../sources/tokens/component-tokens.md#filledbuttontokens); the page's colour table in [buttons → color](../sources/m3/components_buttons.md#color), which also allows other roles when container and text keep 3:1). Disabled: container `on-surface` at 10%, label and icon at 38% ([foundations → states](../foundations/states.md#disabled)).

**Guidelines** ([buttons → guidelines](../sources/m3/components_buttons.md#usage)):

- **By emphasis**: **filled** for the important, final action that completes a flow (Save, Join now, Confirm), **ideally one per page**; **tonal** for a lower-priority action that needs more weight than an outline (Next in onboarding); **outlined** for important actions that aren't the main one, often beside a filled button; **text** for the lowest priority, often in cards, dialogs and snackbars; **elevated** only when the button must stand out from a busy background ([color styles](../sources/m3/components_buttons.md#color-styles)).
- Don't overuse buttons; put low-priority actions in overflow menus, icon buttons, chips or links ([usage](../sources/m3/components_buttons.md#usage)).
- **Label**: 1–3 words, **sentence case**, on **one line, never wrapped or truncated** ([label text](../sources/m3/components_buttons.md#label-text)).
- **Width** fits the label and may stretch with the layout, **never narrower than the label**; on large windows constrain it or place it beside other elements so it doesn't become a long bar ([usage](../sources/m3/components_buttons.md#usage), [container](../sources/m3/components_buttons.md#container), [adaptive design](../sources/m3/components_buttons.md#resizing)).
- **Icon**: optional, **one**, at the **leading** side (the right in RTL), never stacked above the label ([icon](../sources/m3/components_buttons.md#icon-optional)).
- Outlined and text buttons depend on colour to be recognised: keep them away from look-alikes (an outlined button looks like a chip) and off busy backgrounds such as images ([label text](../sources/m3/components_buttons.md#label-text), [outlined style](../sources/m3/components_buttons.md#outlined-style)).
- **Never underline a text button**; use a link in body text ([text style](../sources/m3/components_buttons.md#text-style)).
- In dialogs, text buttons align to the **trailing edge** ([text style](../sources/m3/components_buttons.md#text-style)).
- **Toggle buttons** are for binary choices (Save, Favorite): outlined icon when off, filled when on (or a heavier weight); the label length stays about the same in both states ([toggle buttons](../sources/m3/components_buttons.md#toggle-buttons)).
- Icon and label stay grouped and centred as the button widens ([resizing](../sources/m3/components_buttons.md#resizing)).

**Accessibility** ([buttons → accessibility](../sources/m3/components_buttons.md#use-cases)): **3:1** against the background, measured on the container (elevated, filled, tonal) or on the label (outlined, text); XS and S keep a **48×48** target; **Tab** reaches it, **Space or Enter** activates it; the accessibility label matches the visible label, with context only when needed ([interaction & style](../sources/m3/components_buttons.md#interaction--style), [keyboard navigation](../sources/m3/components_buttons.md#keyboard-navigation), [labeling elements](../sources/m3/components_buttons.md#labeling-elements), [target areas](../sources/m3/components_buttons.md#target-areas)).

## Icon buttons

**Variants**: default and toggle. **Colour styles** by emphasis: filled, tonal, outlined, standard. **Five sizes**, **three widths** (narrow, default, wide), round or square ([icon buttons → usage](../sources/m3/components_icon-buttons.md#usage)).

| Size | Height | Icon | Side padding narrow / default / wide | Square corners | Pressed | Selected round → | Outline |
| --- | --- | --- | --- | --- | --- | --- | --- |
| XS | 32 | 20 | 4 / 6 / 10 | 12 | 8 | 12 | 1 |
| S | 40 | 24 | 4 / 8 / 14 | 12 | 8 | 12 | 1 |
| M | 56 | 24 | 12 / 16 / 24 | 16 | 12 | 16 | 1 |
| L | 96 | 32 | 16 / 32 / 48 | 28 | 16 | 28 | 2 |
| XL | 136 | 40 | 32 / 48 / 72 | 28 | 16 | 28 | 3 |

(*tokens* `{XSmall…XLarge}IconButtonTokens`: a selected round button turns square at the "selected round" step, a selected square one turns fully round; L lists its default padding as `Uniform`)

| Style | Container | Icon | Selected toggle | Unselected toggle |
| --- | --- | --- | --- | --- |
| Filled | `primary` | `on-primary` | `primary` / `on-primary` | `surface-container` / `on-surface-variant` |
| Tonal | `secondary-container` | `on-secondary-container` | `secondary` / `on-secondary` | `secondary-container` / `on-secondary-container` |
| Outlined | none, `outline-variant` outline | `on-surface-variant` | `inverse-surface` / `inverse-on-surface` | outline, `on-surface-variant` |
| Standard | none | `on-surface-variant` | icon `primary` | icon `on-surface-variant` |

(*tokens* `FilledIconButtonTokens`, `FilledTonalIconButtonTokens`, `OutlinedIconButtonTokens`, `IconButtonTokens`)

**Guidelines** ([icon buttons → guidelines](../sources/m3/components_icon-buttons.md#usage)):

- **Default** icon buttons open things (a menu, search); **toggle** ones are on/off (Favorite, Bookmark) ([usage](../sources/m3/components_icon-buttons.md#usage)).
- **Filled** for high-emphasis key actions, sparingly; **tonal** between filled and outlined, for a secondary action beside a high-emphasis one; **outlined** for medium emphasis; **standard** for low emphasis or on a colourful surface ([color](../sources/m3/components_icon-buttons.md#color)).
- Use size, width and colour for hierarchy; **buttons of similar importance are the same size** ([size & width](../sources/m3/components_icon-buttons.md#size--width)).
- **Icons**: default icon buttons use filled icons; toggles use an outlined icon off and filled on. Without a filled version, a selected icon becomes **semibold** (or bold), so selection never shows by colour alone ([icon](../sources/m3/components_icon-buttons.md#icon), [icon accessibility requirements](../sources/m3/components_icon-buttons.md#icon-accessibility-requirements)).
- Use only a few at once, for common, clear actions; many go in a toolbar or button group ([placement](../sources/m3/components_icon-buttons.md#placement)).
- **On hover an icon button shows a tooltip** describing the action, not the icon's name ([behavior → hover](../sources/m3/components_icon-buttons.md#hover)).

## Button groups

- **Standard group**: related buttons that react to each other; pressing one changes its width and shape, and the neighbours move. Same size and shape for all, except for hero moments or a selected button. Buttons in it are **12dp apart** (S, *tokens* `ButtonGroupSmallTokens`); the group hugs its buttons ([button groups → usage](../sources/m3/components_button-groups.md#usage), [container](../sources/m3/components_button-groups.md#container)).
- **Connected group**: selecting options, switching views or sorting. **Replaces the segmented button.** Only for **toggle buttons** in single- or multi-select; never when none can be toggled; **never mixed colour styles** ([usage](../sources/m3/components_button-groups.md#usage), [color](../sources/m3/components_button-groups.md#color)).
  - Buttons **2dp apart** at every size, outer corners full; inner corners **XS 4, S 8, M 8, L 16, XL 20**; at S **4 while pressed**; a selected button's inner corners **50%** (round) (*tokens* `ConnectedButtonGroupSmallTokens`; [shape](../sources/m3/components_button-groups.md#connected-button-group)).
  - XS and S groups keep **48dp** targets and a **48dp** minimum button width ([minimum widths](../sources/m3/components_button-groups.md#minimum-widths)).
  - **Spans the width** of its page or surface, with a maximum width on large windows ([container](../sources/m3/components_button-groups.md#container)).
- Both: **one line, never wrapped**; trailing buttons may collapse into an overflow menu at the end on small windows; the main action stays the most prominent at every breakpoint; don't stretch icon buttons beyond "wide" ([adaptive design](../sources/m3/components_button-groups.md#resizing), [presentation](../sources/m3/components_button-groups.md#presentation)).

## Split button

A main action plus a menu of related ones ([split button → usage](../sources/m3/components_split-button.md#usage)).

| Size | Height | Leading button padding (start / end) | Trailing button padding | Trailing icon | Inner corners (rest / pressed) |
| --- | --- | --- | --- | --- | --- |
| XS | 32 | 12 / 10 | 13 | 22 | 4 / 8 |
| S | 40 | 16 / 12 | 13 | 22 | 4 / 12 |
| M | 56 | 24 / 24 | 15 | 26 | 4 / 12 |
| L | 96 | 48 / 48 | 29 | 38 | 8 / 20 |
| XL | 136 | 64 / 64 | 43 | 50 | 12 / 20 |

The two parts are **2dp apart**, outer corners full; the trailing button's inner corners turn **50%** when open (*tokens* `SplitButton{XSmall…XLarge}Tokens`).

- The leading button: **1–2 words** and an icon. The trailing button always shows the **expand/collapse icon**, which **rotates 180°** inwards when the menu opens (standard motion scheme, not expressive) ([anatomy](../sources/m3/components_split-button.md#anatomy), [behavior](../sources/m3/components_split-button.md#behavior)).
- The menu opens **4dp** from the button, aligned with the trailing button where possible, otherwise with one of the button's sides ([menu placement](../sources/m3/components_split-button.md#menu-placement)).
- Each part has a **48×48** target; focus goes to the leading button, then the trailing one; the trailing button's label says more options exist and whether the menu is open ([split button → accessibility](../sources/m3/components_split-button.md#interaction--style), [labeling elements](../sources/m3/components_split-button.md#labeling-elements)).

## FAB

**Sizes**: FAB, **medium FAB (most recommended)**, large FAB. **The small FAB is no longer recommended** ([FAB → M3 Expressive update](../sources/m3/components_floating-action-button.md#m3-expressive-update), [usage](../sources/m3/components_floating-action-button.md#usage)).

| Size | Container | Icon | Corners |
| --- | --- | --- | --- |
| FAB | 56 | 24 | 16 |
| Medium FAB | 80 | 28 | 20 |
| Large FAB | 96 | 32 | 28 |

(*tokens* `FabBaselineTokens`, `FabMediumTokens`, `FabLargeTokens`; the small FAB in `FabSmallTokens` is 40 with 12 corners)

- **Colour**: tonal `primary-container` / `on-primary-container` or `secondary-container` / `on-secondary-container` (and tertiary), or the solid accent colours; **elevation 3**, 4 on hover; **0 when in a navigation rail** (*tokens* `FabPrimaryContainerTokens`, `FabSecondaryContainerTokens`; [M3 Expressive update](../sources/m3/components_floating-action-button.md#m3-expressive-update); [foundations → elevation](../foundations/elevation.md#levels)).
- **For the screen's most important, constructive action** (create, favourite, share, start); **never** a minor, destructive, overflow or unclear action, or a control that belongs in a toolbar ([actions](../sources/m3/components_floating-action-button.md#actions)).
- **At most one per screen**, and not on every screen ([usage](../sources/m3/components_floating-action-button.md#usage)). Never on a card or another component of its own ([adaptive design](../sources/m3/components_floating-action-button.md#adaptive-design)).
- **Placement**: lower right on compact and medium; on expanded, upper left, as in the navigation rail ([adaptive design](../sources/m3/components_floating-action-button.md#adaptive-design)).
- **Size by context**: the **FAB (56)** is best in compact windows where other actions may be on screen; the **medium FAB** for most other cases, in compact and medium windows; the **large FAB** on tablets and larger ([usage](../sources/m3/components_floating-action-button.md#usage), [adaptive design](../sources/m3/components_floating-action-button.md#adaptive-design)).
- **Icon**: clear, **filled**; on the web a **tooltip on hover**. No badges over it, no notifications in it ([anatomy](../sources/m3/components_floating-action-button.md#anatomy), [icon](../sources/m3/components_floating-action-button.md#icon)).

## Extended FAB

| Size | Height | Side padding | Icon | Icon–label gap | Corners |
| --- | --- | --- | --- | --- | --- |
| Small | 56 | 16 | 24 | 8 | 16 |
| Medium | 80 | 26 | 28 | 16 | 20 |
| Large | 96 | 28 | 32 | 20 | 28 |

(*tokens* `ExtendedFab{Small,Medium,Large}Tokens`; colour `primary-container` / `on-primary-container`, elevation 3, 4 on hover, in `ExtendedFabPrimaryTokens`.) The baseline and surface extended FABs are no longer recommended ([extended FAB → M3 Expressive update](../sources/m3/components_extended-fab.md#m3-expressive-update)).

- For **long scrolling views** that need the action always available (checkout), or when a label explains the action better than an icon ([usage](../sources/m3/components_extended-fab.md#usage)).
- **One per screen**; never one option among several actions (use filled buttons) ([additional emphasis](../sources/m3/components_extended-fab.md#additional-emphasis)).
- Label **1–2 words**, never wrapped or truncated; an icon is optional, **never an icon alone**; the container hugs its content ([anatomy](../sources/m3/components_extended-fab.md#anatomy)).
- Not on toolbars, cards or other containers, not in the upper half of a phone screen, and **not with a floating toolbar** ([placement](../sources/m3/components_extended-fab.md#placement)).
- Becomes a FAB when space is short; a FAB in a collapsed rail becomes an extended FAB when the rail expands ([responsive layout](../sources/m3/components_extended-fab.md#responsive-layout)).

## FAB menu

Replaces the speed dial and stacked small FABs ([FAB menu → M3 Expressive update](../sources/m3/components_fab-menu.md#m3-expressive-update)).

- **Opens only from a FAB**, never from an extended FAB or anything else; appears where the FAB was; aligned to the **trailing edge** (mirrored in RTL) ([usage](../sources/m3/components_fab-menu.md#usage)).
- **2–6 closely related items**, each with a **label** (never removed) and an icon (removed only if needed); items hug their content, no fixed widths, all rounded ([usage](../sources/m3/components_fab-menu.md#usage), [anatomy](../sources/m3/components_fab-menu.md#anatomy)).
- **Not with a floating toolbar or a navigation rail** ([usage](../sources/m3/components_fab-menu.md#usage)).
- The colour set (primary, secondary, tertiary) matches the FAB's ([color sets](../sources/m3/components_fab-menu.md#color-sets)).
- The FAB turns into the **close button**; items enter with the enter-and-exit transition from the FAB's top trailing corner ([appearing](../sources/m3/components_fab-menu.md#appearing)).
- Margins **16dp**, **24dp** on large and extra-large windows. **On the web it is a menu component** ([adaptive layout](../sources/m3/components_fab-menu.md#adaptive-layout)).
- Sizes (*tokens* `FabMenuBaselineTokens`): close button 56, fully round, icon 20; items 56 high, 24 side padding, icon 24, 8 icon–label gap, **4 between items**, fully round.

Open: the tokens give FAB menu items elevation level 3, while the elevation page lists "FAB menu (list items)" at level 0 ([elevation → component elevation](../sources/m3/styles_elevation.md#component-elevation)).
