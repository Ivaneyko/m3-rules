# Interaction states and selection

Sources read: 2026-11-20 ([snapshot](../sources/SNAPSHOT.md)). On the web `1dp` is `1px`.

## The states

| State | What it shows | State layer opacity |
| --- | --- | --- |
| Enabled | The element can be used; its default style | none |
| Disabled | The element can't be used | none (see [Disabled](#disabled)) |
| Hover | A cursor rests on the element | 8% |
| Focused | Keyboard or voice has highlighted the element | 10% |
| Pressed | A tap or click (also by keyboard or voice) | 10% |
| Dragged | The element is pressed and moved | 16% |

([states](../sources/m3/foundations_interaction_states.md#state-layer-tokens--values); the same values in [StateTokens.kt](../sources/tokens/base/StateTokens.kt))

## State layers

- A state layer is a semi-transparent overlay **in the colour of the element's content**: the icon's colour, or the label's when there is no icon. On a `secondary-container` button with `on-secondary-container` text, the layer is `on-secondary-container`; on a `surface` container with `primary` content, it's `primary` ([states → state layers, on colors](../sources/m3/foundations_interaction_states.md#on-colors)).
- It sits **between the container and the content**, and covers the whole element, part of it, or a circle over part of it ([states → state layers](../sources/m3/foundations_interaction_states.md#state-layers)).
- **Only one state layer shows at a time** on an element ([states → state layers](../sources/m3/foundations_interaction_states.md#state-layers)).
- A circular state layer is **40dp**, inside a **48dp** interactive target ([states → state layers](../sources/m3/foundations_interaction_states.md#state-layers)).
- Every state has **two visual indicators**, so it doesn't depend on one cue alone ([states → overview](../sources/m3/foundations_interaction_states.md#states)).
- States combine: hover with focused, selected or pressed; focused with hover or selected; pressed with hover, focused or selected ([states → hover, focused, pressed](../sources/m3/foundations_interaction_states.md#behavior-1)).
- Apply states the same way across components ([states → overview](../sources/m3/foundations_interaction_states.md#states)).

## Which components take which state

A container that holds actions doesn't take a state as a whole; its actionable children do. An app bar never shows hover, focus or press itself, only its buttons do ([states](../sources/m3/foundations_interaction_states.md#hover)).

| State | Taken by | Not taken by |
| --- | --- | --- |
| Disabled | Buttons, cards, checkboxes, chips, list items, radio buttons, switches, text fields | App bars, badges, dialogs, FABs, menus, navigation bar / drawer / rail, sheets, tabs, tooltips |
| Hover | Buttons, cards, checkboxes, chips, date and time pickers, list items, sliders, switches, text fields | App bars, badges, dialogs, menus, navigation bar / drawer / rail, sheets, tabs |
| Focused | Buttons, cards, checkboxes, chips, date and time pickers, list items, selection controls, text fields | App bars, badges, banners, dialogs, navigation bar / drawer / rail, sheets (and a card as a container) |
| Pressed | Buttons, cards, checkboxes, chips, list items, text fields | App bars, badges, bottom navigation, dialogs, menus, sheets, tabs |
| Dragged | Cards, chips, list items, sliders | App bars, badges, buttons, dialogs, menus, navigation bar / drawer / rail |

([states → applying states](../sources/m3/foundations_interaction_states.md#enabled))

A card takes hover, focus and press only when it is **directly actionable** as a whole; a card that holds actions (buttons, links) doesn't, and its actions do ([cards → accessibility](../sources/m3/components_cards.md#interaction--style)). That explains why the states page lists cards on both sides of the focused row.

## Disabled

- A disabled element **can't be focused, dragged or pressed**, and doesn't change on hover or tap ([states → disabled → behavior](../sources/m3/foundations_interaction_states.md#behavior)).
- It is shown by colour and reduced elevation, and **doesn't need to meet the contrast requirements** ([states → disabled](../sources/m3/foundations_interaction_states.md#disabled)).
- Any number of elements can be disabled at once ([states → disabled → behavior](../sources/m3/foundations_interaction_states.md#behavior)).
- **An unavailable FAB isn't shown disabled; it isn't shown at all** ([states → disabled](../sources/m3/foundations_interaction_states.md#disabled)).
- The opacities come from each component's tokens ([component tokens](../sources/tokens/component-tokens.md)):
  - label and icon: **38%** in every component that has a disabled state;
  - container: **10%** for buttons and icon buttons (filled, tonal, outlined, elevated, text), **12%** for elevated chips, the selected chip and the older filled tonal button token set, **4%** for a filled text field, **38%** for cards, checkboxes and selected list and menu items;
  - outline: **12%** (outlined button, chips, outlined text field).
  - So "disabled container at 12%" is not one value for every component: take it from the component's own tokens.

## Hover, focus, pressed and dragged

- **Hover** fades in and out ([states → hover → behavior](../sources/m3/foundations_interaction_states.md#behavior-1)). Only one element shows hover at a time ([same](../sources/m3/foundations_interaction_states.md#behavior-1)).
- **Focus** applies to every interactive component. On the web, an element reached with **Tab** also shows a ring-like **keyboard focus indicator** ([states → focused → keyboard focus indicator](../sources/m3/foundations_interaction_states.md#keyboard-focus-indicator)). Only one element has focus at a time ([states → focused → behavior](../sources/m3/foundations_interaction_states.md#behavior-2)).
- **Pressed** is high emphasis and shown by a **ripple**. Buttons and cards may also rise in elevation while pressed. Only one element is pressed at a time ([states → pressed](../sources/m3/foundations_interaction_states.md#pressed)).
- **Dragged** is low emphasis, so it doesn't distract from the task; list items, chips and cards may rise in elevation. Only one element is dragged at a time ([states → dragged](../sources/m3/foundations_interaction_states.md#dragged)).

Open: the snapshot doesn't give the keyboard focus indicator's thickness, offset or colour as text. Take them from the component's specs page (`sources/m3/components_*.md`, Measurements) or, if it shows them only in a picture, from m3.material.io in a browser.

## Selection

- Selection is shown by **a check mark, a checkbox, a change in surface colour, or a combination** ([selection → selection indicators](../sources/m3/foundations_interaction_selection.md#selection-indicators)).
- Components that can be selected: cards, checkboxes, chips, data tables, icon buttons, list items, menu items, pickers, radio buttons, segmented buttons, sliders, switches ([same](../sources/m3/foundations_interaction_selection.md#selection-indicators)).
- The navigation bar, navigation drawer, navigation rail and tabs show the selected item with an **active indicator**, and **only one item is selected at a time** ([same](../sources/m3/foundations_interaction_selection.md#selection-indicators)).
- **Touch**: enter selection mode with a long press or a shortcut (tapping an item's avatar); tap more items to add them; tap selected items, or an action in the toolbar, to leave. Long press and drag selects several at once, unless that gesture already moves items ([selection → types of selection](../sources/m3/foundations_interaction_selection.md#types-of-selection)).
- **Desktop**: when selection is the main task, checkboxes are always visible. When it's secondary, an item's checkbox appears on hover, and all of them appear once one item is selected ([selection → click](../sources/m3/foundations_interaction_selection.md#click)).
