# Containment: cards, lists, dividers, carousel, dialogs, sheets

Sources read: 2026-11-20 ([snapshot](../sources/SNAPSHOT.md)). Sizes in dp (`1dp` = `1px` on the web). *Tokens* marks values from the Compose tokens ([component-tokens](../sources/tokens/component-tokens.md)).

## Cards

| Variant | Container | Elevation | Outline | Corners |
| --- | --- | --- | --- | --- |
| Elevated | `surface-container-low` | 1 | — | 12 |
| Filled | `surface-container-highest` | 0 | — | 12 |
| Outlined | `surface` | 0 | 1, `outline-variant` | 12 |

Icons 24, `primary` (*tokens* `ElevatedCardTokens`, `FilledCardTokens`, `OutlinedCardTokens`). Side padding **16**; at most **8** between cards ([cards → measurements](../sources/m3/components_cards.md#measurements)).

- **For content and actions about one subject**, easy to scan, with a clear hierarchy; can lead into more detail ([cards → usage](../sources/m3/components_cards.md#usage)).
- **Don't force content into cards** when spacing, headings or dividers give a simpler hierarchy ([same](../sources/m3/components_cards.md#usage)).
- The three variants work the same; choose by style. Filled separates least, elevated more, outlined most ([same](../sources/m3/components_cards.md#usage)).
- Only the container is required; size follows content. Content: thumbnail, image, video, headline, subhead, supporting text; dividers full width for expandable parts, inset between related content ([anatomy](../sources/m3/components_cards.md#anatomy)).
- Avoid text or icons on images; if needed, add a scrim or a shape behind them for contrast ([layering text, icons, and images](../sources/m3/components_cards.md#layering-text-icons-and-images)).
- **A card is either one directly actionable target, or a non-actionable container holding actions** (buttons, links, controls), not both, so actions aren't stacked ([cards → accessibility](../sources/m3/components_cards.md#interaction--style)). Only an actionable card shows hover, a ripple and focus; with non-actionable cards, Tab goes straight to their actions ([same](../sources/m3/components_cards.md#interaction--style)).
- An overflow menu sits in the upper-right or lower-right corner ([actions](../sources/m3/components_cards.md#actions)).
- **Collections** (grid, list, carousel) share one resting elevation; sorting and filtering sit **outside** the collection and apply to every card ([cards in a collection](../sources/m3/components_cards.md#cards-in-a-collection)).
- **Don't scroll inside a card**: expand it (container transform, for hero moments) ([behavior → expanding](../sources/m3/components_cards.md#expanding)).
- **Swipe**: one swipe action per card; no swipeable content (carousels, pagination) inside a card. A moved card rises and goes in front of everything except app bars and navigation ([gestures](../sources/m3/components_cards.md#gestures)). Dragging and swiping need a single-pointer alternative, such as a menu ([dragging and dismissing](../sources/m3/components_cards.md#dragging-and-dismissing)).
- **Adaptive**: on compact, consider a list instead of cards; on large windows use columns, rows or carousels instead of stretching cards across the screen ([adaptive design](../sources/m3/components_cards.md#adaptive-design)).
- **Keyboard**: a directly actionable card is **one Tab stop** (role **button** or **link**), activated with **Space** or **Enter**; a non-actionable card is no Tab stop and has no role, and Tab visits each of its actions before the next card. A decorative image in a card is hidden from screen readers ([focus](../sources/m3/components_cards.md#focus), [keyboard navigation](../sources/m3/components_cards.md#keyboard-navigation), [labeling elements](../sources/m3/components_cards.md#labeling-elements)).

## Lists

M3 Expressive adds the **expressive list**, recommended for new designs, in **standard** or **segmented** style with highlighted selection ([lists → M3 Expressive update](../sources/m3/components_lists.md#m3-expressive-update)).

| Part | Value |
| --- | --- |
| Item height | one line 56, two lines 72, three lines 88 |
| Padding | 16 start and end, 10 top and bottom, 12 between elements |
| Leading | icon 24, avatar 40 (full), image 56×56, video 100×56 (large 114×64) |
| Trailing icon | 24 |
| Container | list 16 corners; expressive item 4, selected item 16; segmented items 2 apart |
| Colour | item `surface`; label `on-surface` (body large); supporting and trailing text `on-surface-variant` (body medium); overline label small; leading and trailing icons `on-surface-variant`; avatar `primary-container` / `on-primary-container` |
| Selected item | `secondary-container`, all content `on-secondary-container` |
| Divider | 16 inset at both ends |

(*tokens* `ListTokens`)

- Lists group text, icons, images and actions vertically, for reading and for choosing discrete items ([usage](../sources/m3/components_lists.md#usage)).
- **Every item puts the same element in the same place**; visuals at the **leading edge**, never in the middle ([usage](../sources/m3/components_lists.md#usage), [leading media](../sources/m3/components_lists.md#leading-media)).
- Label brief; **supporting text 1–3 lines**; trailing text is supplemental (a price, a count, a date) ([label & supporting text](../sources/m3/components_lists.md#label--supporting-text), [trailing text](../sources/m3/components_lists.md#trailing-text)).
- Round or expressive avatars for people and entities; square or rectangular images for products and videos ([avatars](../sources/m3/components_lists.md#avatars)).
- **Selection controls**: checkboxes for several, switches for settings, radio buttons for one; at the leading or trailing end. The **whole item** shows the selected state ([selection controls](../sources/m3/components_lists.md#selection-controls), [list selection modes](../sources/m3/components_lists.md#list-selection-modes)).
- **Modes**: single-select (radio, no nested actions, no checkboxes); multi-select (checkboxes or switches, no nested actions, no radios); single-action (the whole item does one thing, no nested actions, no selected state); multi-action (the primary action takes most of the item, extra actions at the trailing end); non-interactive ([list selection modes](../sources/m3/components_lists.md#list-selection-modes)).
- **Gaps for contained (segmented) lists; dividers only for uncontained or complex lists** that need a stronger split ([gaps & dividers](../sources/m3/components_lists.md#gaps--dividers)).
- **Adaptive**: edge to edge on compact, opening a details page; list and details side by side from medium; may become a carousel or multi-column on larger windows; keep 40–60 characters per line ([adaptive design](../sources/m3/components_lists.md#line-length), [compact breakpoints](../sources/m3/components_lists.md#compact-breakpoints)).
- Swipe-revealed actions need another way to reach them, such as a more icon ([swipe](../sources/m3/components_lists.md#swipe)).
- **Selection is never shown by colour alone**: add a radio button or checkbox, an icon, or a non-colour style ([indicate selection with more than color](../sources/m3/components_lists.md#indicate-selection-with-more-than-color)).
- **Keyboard**: **Tab** moves to the list and out of it; focus goes to the **selected item**, otherwise the first. **Down** or **Right** moves to the next item and **Up** or **Left** to the previous, **wrapping** at the ends; **Space** or **Enter** selects or activates. In a multi-action list, Tab focuses the item's first element and the arrows move between all its focusable elements ([keyboard navigation](../sources/m3/components_lists.md#keyboard-navigation), [focus](../sources/m3/components_lists.md#focus)).
- **Accessible names**: an item is named by its label and supporting text. On the web a selectable list is a **listbox** named by its kind of selection, its items **options** with a selected state; a list you can't select from has no role ([labeling elements](../sources/m3/components_lists.md#labeling-elements)).

## Dividers

1 thick, `outline-variant` (*tokens* `DividerTokens`).

| Divider | Start margin | End margin |
| --- | --- | --- |
| Full width | 0 | 0 |
| Inset | 16 | 0 |
| Middle inset | 16 | 16 |

4 between a divider and its supporting text. The page also lists a right margin of 8 and a bottom margin of 8 without saying which divider they belong to ([divider → measurements](../sources/m3/components_divider.md#measurements)).

- **Full width** between larger, unrelated sections, or between interactive and non-interactive areas (in a card); **inset** between related items, aligned with their leading element (an icon or avatar) ([divider → full-width](../sources/m3/components_divider.md#full-width-dividers), [inset](../sources/m3/components_divider.md#inset-dividers)).
- Use them **sparingly**; too many clutter the screen ([full-width dividers](../sources/m3/components_divider.md#full-width-dividers)).

## Carousel

| Layout | For | Scrolling |
| --- | --- | --- |
| Multi-browse | Many visual items at once (photos); on compact at most 3 items with text | Snap |
| Uncontained | Traditional carousel, customised or text-heavy items flowing past the edge; multi-aspect ratio variant for items 9:16 to 16:9 | Default or snap |
| Hero, center-aligned hero | Spotlighting one large item with a peek at the next | Snap |
| Full-screen | Vertical, immersive feeds; portrait on compact and medium only | Snap only |

([carousel → usage](../sources/m3/components_carousel.md#usage))

| Layout | Padding | Between items | Item corners | Small items |
| --- | --- | --- | --- | --- |
| Multi-browse, hero, center-aligned hero | 16 at the sides, 8 top and bottom | 8 | 28 | 40–56 wide |
| Uncontained (and multi-aspect ratio) | 16 at the leading edge only, 8 top and bottom | 8 | 28 | — |
| Full-screen | 0 | 16 | — | — |

Items are vertically centred (centred in full-screen); large and medium items are dynamic in width ([carousel → multi-browse measurements](../sources/m3/components_carousel.md#measurements), [full-screen measurements](../sources/m3/components_carousel.md#measurements-5)).

- Items are fully visible except in the uncontained layout ([usage](../sources/m3/components_carousel.md#usage)); items are `surface` ([specs → color](../sources/m3/components_carousel.md#color)).
- **On a vertically scrolling page, all items must be reachable without scrolling sideways**: a **Show all** button below it, or an arrow icon button beside its header, opening a vertical page of every item. Don't add arrows or icons inside or beside the carousel. Not needed for full-screen carousels ([accessibility requirements on scrolling pages](../sources/m3/components_carousel.md#accessibility-requirements-on-scrolling-pages), [requirements on scrolling pages](../sources/m3/components_carousel.md#requirements-on-scrolling-pages)).
- With **reduced motion**, no parallax and no growing items; items reach the window's edges ([reduced motion](../sources/m3/components_carousel.md#reduced-motion)).
- **Keyboard**: **Tab** puts focus on the first item; **Tab** or the **arrows** move between items; **Space** or **Enter** activates one; **Up** and **Down** leave the carousel for the next element (such as Show all) ([initial focus](../sources/m3/components_carousel.md#initial-focus), [keyboard navigation](../sources/m3/components_carousel.md#keyboard-navigation)).
- **Accessible name**: the container's label reads the number of items and which one is focused ([labeling elements](../sources/m3/components_carousel.md#labeling-elements)).

## Dialogs

| Part | Basic dialog |
| --- | --- |
| Container | `surface-container-high`, elevation 3, corners 28 |
| Width | 280–560 |
| Padding | 24 all sides; 16 icon–title, 16 title–body, 24 body–actions, 8 between buttons |
| Icon | 24, `secondary`; with an icon the content is centred, without it start-aligned |
| Text | headline `on-surface`, headline small; supporting text `on-surface-variant`, body medium; actions `primary`, label large |

([dialogs → basic dialog measurements](../sources/m3/components_dialogs.md#basic-dialog-measurements); colours *tokens* `DialogTokens`)

- **For critical information or a decision that blocks the app's normal use**, sparingly. **Low or medium priority is a snackbar**, a choice without interruption a menu ([usage](../sources/m3/components_dialogs.md#usage), [similar components](../sources/m3/components_dialogs.md#similar-components)).
- **Headline**: a brief, clear statement or question; **no apologies, no "Warning!", no "Are you sure?"** ([headline](../sources/m3/components_dialogs.md#headline-optional)).
- **Buttons** at the **trailing edge**, the **confirming action nearest the edge**, the dismissing one before it. **At most two**: one alone only to acknowledge; two means confirm and dismiss. A confirming action may be disabled until a choice is made; **a dismissing action never is**. **No third action** (Learn more): expand inline instead. Stacked buttons put the confirming one on top ([buttons](../sources/m3/components_dialogs.md#buttons)).
- **Full-screen dialog**: for a series of tasks (a new calendar event), forms with keyboard input, changes not saved instantly, or content that opens more dialogs. **Compact only**; medium and up use a basic dialog. Save confirms; the close X (the app bar's only navigation) or Cancel dismisses, and closing with unsaved changes asks in a basic dialog. The confirm label says what happens (Send, Create), never Done, OK or Close ([full-screen dialog](../sources/m3/components_dialogs.md#full-screen-dialog), [navigation](../sources/m3/components_dialogs.md#navigation)). Sizes: corners 0, at most 560 wide; header 56 with a start-aligned headline and a 24 close icon; a bottom action bar 56 high across the full width; dividers 1; 24 padding at the top and sides, 8 between elements ([full-screen dialog measurements](../sources/m3/components_dialogs.md#full-screen-dialog-measurements)).
- **Errors**: field errors inline, all at once; general errors (network) in a basic dialog when confirming fails ([error messages](../sources/m3/components_dialogs.md#error-messages)).
- **Position**: centred by default; on larger windows it may be placed elsewhere, at least **56** from the window's edges; never partly off screen or covered ([adaptive design](../sources/m3/components_dialogs.md#expanded-breakpoint), [position](../sources/m3/components_dialogs.md#position)).
- **Scrolling**: avoid it; if needed, the title stays at the top and the buttons at the bottom ([scrolling](../sources/m3/components_dialogs.md#scrolling)).
- **Focus** goes to the first interactive element when it opens and cycles inside it with Tab and Shift+Tab; Space or Enter triggers the focused element ([initial focus](../sources/m3/components_dialogs.md#initial-focus), [keyboard navigation](../sources/m3/components_dialogs.md#keyboard-navigation)). Focus returns to what opened it when it closes ([foundations → focus](../foundations/icons-and-accessibility.md#focus-and-keyboard)). **Esc** closes it ([keyboard navigation](../sources/m3/components_dialogs.md#keyboard-navigation)).
- **Accessible name**: the headline; on the web a basic dialog has the **alertdialog** role; its buttons and fields are named by their own rules ([labeling elements](../sources/m3/components_dialogs.md#labeling-elements)).

## Bottom sheets

| Part | Value |
| --- | --- |
| Container | `surface-container-low`, top corners 28, elevation 1 |
| Width | full width up to **640**, with a **72** top margin; wider windows give it a **56** top margin and 56 side margins |
| Drag handle | 32×4, `on-surface-variant`, centred, 22 above and below, a **48** target; optional |

([bottom sheets → measurements](../sources/m3/components_bottom-sheets.md#measurements); *tokens* `SheetBottomTokens`)

- Supplementary content and actions **on phones** ([usage](../sources/m3/components_bottom-sheets.md#usage)).
- **Standard**: lives beside the main UI, both usable (a music player, details over a map); has preset heights, and at full height a collapse icon in an app bar ([standard bottom sheets](../sources/m3/components_bottom-sheets.md#standard-bottom-sheets)).
- **Modal**: blocks the app like a dialog; an alternative to a menu or a simple dialog on phones, especially for long lists or items with descriptions and icons. **Mobile only.** Opens at **at most 50%** of the screen height, can be pulled to full height and scrolls inside. Closes on a choice, a scrim tap, a swipe down, or its close button, which a full-height sheet shows ([modal bottom sheets](../sources/m3/components_bottom-sheets.md#modal-bottom-sheets), [visibility](../sources/m3/components_bottom-sheets.md#visibility)).
- **Keyboard**: Tab reaches the drag handle; Space or Enter steps through the heights ([bottom sheets → keyboard navigation](../sources/m3/components_bottom-sheets.md#keyboard-navigation), [initial focus](../sources/m3/components_bottom-sheets.md#initial-focus)). **Label only the drag handle**, as a **button** ([labeling](../sources/m3/components_bottom-sheets.md#labeling)).
- On medium and expanded windows it has a maximum width; for more complex tasks and flows consider a non-transient surface such as a floating sheet ([responsive layout](../sources/m3/components_bottom-sheets.md#medium-and-expanded-breakpoints)).

## Side sheets

- **Standard**: supplementary content or actions beside the main content (filters, details), mostly on **medium and expanded** windows; stays while the content is used, and the content area shrinks to make room. **Modal** on compact; it must be closed to use the content ([side sheets → usage](../sources/m3/components_side-sheets.md#usage), [adaptive design](../sources/m3/components_side-sheets.md#adaptive-design)).
- At the **trailing edge** (left in RTL), full height, fixed width (**400** max as a third pane, [foundations → layout](../foundations/layout.md#panes)); may be inset **16** from the edges, no more ([usage](../sources/m3/components_side-sheets.md#usage)).
- A **close icon button** is highly recommended; a back button for a second level; a divider above action buttons or between kinds of content ([anatomy](../sources/m3/components_side-sheets.md#anatomy)).
- **Padding**: 24 at the start and end (16 at the start before a leading icon), 12 between the top elements ([side sheets → standard side sheet measurements](../sources/m3/components_side-sheets.md#standard-side-sheet-measurements), [modal side sheet measurements](../sources/m3/components_side-sheets.md#modal-side-sheet-measurements)).
- **Bottom actions**: 72 high, 16 above and 24 below, aligned to the **start** (left in left-to-right) ([side sheets → modal side sheet measurements](../sources/m3/components_side-sheets.md#modal-side-sheet-measurements)).
- **Scrolls vertically on its own, never horizontally** ([behavior](../sources/m3/components_side-sheets.md#behavior)).
- **Accessibility**: role **dialog**; its actions are in the Tab order; **Tab** reaches the icon buttons, **Space** or **Enter** activates them ([labeling](../sources/m3/components_side-sheets.md#labeling), [initial focus](../sources/m3/components_side-sheets.md#initial-focus), [keyboard navigation](../sources/m3/components_side-sheets.md#keyboard-navigation)).
- Elevation: standard (docked) 0, modal 1 ([foundations → elevation](../foundations/elevation.md#levels)).
