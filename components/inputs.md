# Selection and input: text fields, select, checkbox, radio, switch, chips, menus, slider, search, pickers

Sources read: 2026-11-20 ([snapshot](../sources/SNAPSHOT.md)). Sizes in dp (`1dp` = `1px` on the web). *Tokens* marks values from the Compose tokens ([component-tokens](../sources/tokens/component-tokens.md)).

## Choosing a selection control

| The user… | Use |
| --- | --- |
| picks several related options from a list | Checkboxes |
| picks one option, **five or fewer**, all shown | Radio buttons |
| picks one option where space matters | A menu (it costs extra taps); in a form, a [select](#select-text-field-with-a-menu) |
| turns a **standalone** setting on or off, taking effect **at once** | Switch |
| picks one of two **opposing** options (list or map view) | Connected button group ([actions](actions.md#button-groups)) |
| filters a collection | Filter chips |

([checkbox → alternate selection controls](../sources/m3/components_checkbox.md#alternate-selection-controls), [radio button → alternate selection controls](../sources/m3/components_radio-button.md#alternate-selection-controls), [switch → usage](../sources/m3/components_switch.md#usage), [chips → filter chips](../sources/m3/components_chips.md#filter-chips))

## Text fields

| Part | Filled | Outlined |
| --- | --- | --- |
| Height | 56, also the target | 56, also the target |
| Padding | 8 top and bottom; sides 16 without icons, 12 with icons; 16 between an icon and the text | sides 16 without icons, 12 with icons; 16 between an icon and the text |
| Label | vertically centred when empty | vertically centred when empty; when populated it sits in the outline with 4 on each side |
| Supporting text | 4 below the field; 16 between it and the character counter | same |
| Container | `surface-container-highest`, top corners 4 | none, corners 4, `outline` 1 thick |
| Focused | indicator `primary`, **2** high (1 at rest, `on-surface-variant`) | outline `primary`, **2** thick |
| Error | indicator, label and supporting text `error` | outline, label and supporting text `error` |
| Text | input `on-surface` body large; label `on-surface-variant` body large; supporting `on-surface-variant` body small | same |
| Icons | 24, `on-surface-variant` | same |

([text fields → filled measurements](../sources/m3/components_text-fields.md#filled-text-field-measurements), [outlined measurements](../sources/m3/components_text-fields.md#outlined-text-field-measurements); colours *tokens* `FilledTextFieldTokens`, `OutlinedTextFieldTokens`)

- **Filled or outlined**: the same function; choose by the app's style, by what suits the UI, and by what stands out most from buttons and nearby content. Outlined has less emphasis, which simplifies forms where many fields sit together. **Both may appear on one screen, but never mixed within one section** ([text fields → usage](../sources/m3/components_text-fields.md#usage), [choosing text fields](../sources/m3/components_text-fields.md#choosing-text-fields-1)).
- **Label**: every field has one, **always visible**, aligned with the input, **never truncated or on two lines**. A field may skip its own label only when an **adjacent label** at its leading edge names it ([label text](../sources/m3/components_text-fields.md#label-text), [adjacent label](../sources/m3/components_text-fields.md#adjacent-label)).
- **Required fields**: an **asterisk** after the label, on **every** required field, **explained** either in supporting text or **in one note at the start of the form**; in the label's colour when the label has its own ([required text indicator](../sources/m3/components_text-fields.md#required-text-indicator)).
- **Input**: single line, multi-line (grows) or text area (fixed height); **prefix** (currency) and **suffix** (unit, email domain) ([input text](../sources/m3/components_text-fields.md#input-text), [prefix text](../sources/m3/components_text-fields.md#prefix-text)).
- **Supporting text** ideally one line; a **character counter** when there's a limit ([supporting text & character counter](../sources/m3/components_text-fields.md#supporting-text--character-counter)).
- **Errors**: error text **replaces** the supporting text (so the layout doesn't jump) and says **how to avoid the error** (the most likely one when several are possible). An **error icon** is strongly recommended ([error text](../sources/m3/components_text-fields.md#error-text), [error icon](../sources/m3/components_text-fields.md#error-icon)).
- **Icons**: optional: a signifier (a calendar opening a date picker), valid or error, **clear (only while there's text)**, voice input, a **dropdown arrow** for a nested choice; a 24-high image (a card logo). They swap sides in RTL ([icons & images](../sources/m3/components_text-fields.md#icons--images)).
- **Read-only** fields look like normal ones and are clearly labelled read-only ([read-only fields](../sources/m3/components_text-fields.md#read-only-fields)).
- **Width**: flexible with minimums and maximums; **never across the full width of a large screen** ([adaptive design](../sources/m3/components_text-fields.md#adaptive-design)).
- **Density** is opt-in, never the default ([density](../sources/m3/components_text-fields.md#density)).
- An outlined field's outline may need **3:1** against the background ([text fields → accessibility](../sources/m3/components_text-fields.md#interaction--style)).

Open: the Compose tokens give a **2** outline when focused; this rule set has no page text giving another value. Check the text fields specs page in a browser before using a different one.

## Select (text field with a menu)

A select is a **text field** (filled or outlined, with the sizes above) whose trailing **dropdown icon** says it opens a menu of options ([text fields → icons & images](../sources/m3/components_text-fields.md#icons--images), [menus → opening menus](../sources/m3/components_menus.md#opening-menus)). M3 calls the old exposed dropdown menu just a **menu** ([menus → differences from M2](../sources/m3/components_menus.md#differences-from-m2)).

| Part | Value |
| --- | --- |
| Field | the text field's: 56 high, its padding, colours and states; icons 24, except a filled select's leading icon, 20 in `FilledAutocompleteTokens` |
| Menu | corners 4 (*tokens* `MenuContainerShape`); items as in the [menu](#menus) |

(*tokens* `FilledAutocompleteTokens`, `OutlinedAutocompleteTokens`)

- **While the menu is open, the element that opened it keeps its pressed state**, also when opened from the keyboard ([selecting](../sources/m3/components_menus.md#selecting)).
- **Single-select**: choosing an item unselects the previous one. **Multi-select**: the menu stays open until it's dismissed ([single- and multi-select menus](../sources/m3/components_menus.md#single--and-multi-select-menus)).
- **Filtering (autocomplete)**: a text field filters the options as the user types, for long lists; items ease into their new places ([filtering](../sources/m3/components_menus.md#filtering)).
- **Long lists scroll** with a **persistent scrollbar**; a scrolling menu has no gaps, so groups use dividers ([scrolling](../sources/m3/components_menus.md#scrolling), [gaps & dividers](../sources/m3/components_menus.md#gaps--dividers-optional)).
- Five or fewer options that should all stay visible are radio buttons instead ([choosing a selection control](#choosing-a-selection-control)).

## Checkbox

| Part | Value |
| --- | --- |
| Box | 18, corners 2, unselected outline 2, `on-surface-variant` (error: `error`) |
| Selected | container `primary`, check `on-primary` |
| Target | 48; focus ring `secondary` |

(*tokens* `CheckboxTokens`)

- For **one or more** options from a list, sub-selections, or turning one item on or off on desktop (an on/off action happens at once) ([checkbox → usage](../sources/m3/components_checkbox.md#usage), [behavior](../sources/m3/components_checkbox.md#behavior)).
- **Parent and children**: checking the parent checks all; unchecking it unchecks all; **some checked makes the parent indeterminate**, and checking an indeterminate parent checks every child ([behavior](../sources/m3/components_checkbox.md#behavior)).

## Radio button

Icon 20; selected `primary`, unselected `on-surface-variant` (*tokens* `RadioButtonTokens`).

- **One of five or fewer** options, all visible; never nested, never for several choices ([radio button → usage](../sources/m3/components_radio-button.md#usage)).
- **Each has its own adjacent label**; listed **vertically**, with **one always selected**; tapping the label selects it too ([adjacent label text](../sources/m3/components_radio-button.md#adjacent-label-text), [placement](../sources/m3/components_radio-button.md#placement), [behavior](../sources/m3/components_radio-button.md#behavior)).

## Switch

| Part | Value |
| --- | --- |
| Track | 52×32, fully round; on `primary`; off `surface-container-highest` with a 2 `outline` |
| Handle | off 16, `outline`; on 24, `on-primary`; with an icon 24; **pressed 28**; icons 16 |
| Target | state layer 40 in a 48 target |

([switch → measurements](../sources/m3/components_switch.md#measurements); colours *tokens* `SwitchTokens`)

- A **binary** setting (on/off, true/false) that **takes effect immediately, without Save**; **never two opposing options** (use a connected button group) ([switch → usage](../sources/m3/components_switch.md#usage)).
- **Always an inline label** saying what it controls when on; an icon in the handle is optional and must be unambiguous ([label text](../sources/m3/components_switch.md#label-text), [anatomy](../sources/m3/components_switch.md#anatomy)).

## Chips

| Chip | Container | Selected | Label | Icons |
| --- | --- | --- | --- | --- |
| Assist | flat: `outline-variant` 1; elevated: `surface-container-low`, elevation 1 | — | `on-surface` | leading 18, `primary` |
| Filter | flat: `outline-variant` 1 (none when selected); elevated: `surface-container-low` | `secondary-container`, content `on-secondary-container` | `on-surface-variant` | leading `primary` unselected; trailing `on-surface-variant` |
| Input | `outline-variant` 1 | `secondary-container` / `on-secondary-container` | `on-surface-variant` | leading 18 or avatar 24 (round); trailing 18 |
| Suggestion | flat: `outline-variant` 1; elevated: `surface-container-low` | — | `on-surface-variant` | leading 18, `primary` |

All **32** high, **8** corners, label large (*tokens* `AssistChipTokens`, `FilterChipTokens`, `InputChipTokens`, `SuggestionChipTokens`). Label start-aligned; side padding **16** without an icon, **8** on a side with an icon; **8** between elements. An input chip with an avatar: left padding 4, right padding 8 (the page's labels) ([assist](../sources/m3/components_chips.md#assist-chip-measurements), [filter](../sources/m3/components_chips.md#filter-chip-measurements), [input](../sources/m3/components_chips.md#input-chip-measurements), [suggestion chip measurements](../sources/m3/components_chips.md#suggestion-chip-measurements)).

- **Chips aren't buttons**: chips are dynamic, contextual options in a **set** (forking paths); buttons are persistent steps forward (no more than 3 together) ([chips → chips aren't buttons](../sources/m3/components_chips.md#chips-arent-buttons)).
- **Variants**: **assist** for smart or automated actions (start with a verb: Add to calendar; may change Save → Saved); **filter** for filtering a collection; **input** for pieces of information the user entered (a contact in To); **suggestion** for generated suggestions (a reply) ([variants](../sources/m3/components_chips.md#variants)).
- **Label 20 characters or fewer**, button typography; drop articles to save space ([label text](../sources/m3/components_chips.md#label-text)).
- **Elevate only over an image or busy background**; on a plain page use the outline; **never use elevation for the pressed state** (use the ripple) ([container](../sources/m3/components_chips.md#container)).
- **Trailing icon**: input and filter chips only; **required on input chips (remove)**, optional on filter chips (remove or open a menu). A secondary action needs a **48×48** target, for example with an 88 minimum chip width ([trailing icon](../sources/m3/components_chips.md#trailing-icon-optional-input-and-filter-chips-only)).
- **Filter chips**: nouns for what to **include** (never "Exclude images"); selected ones show a leading **check mark**; all chip sets on a page are **either single-select or multi-select**; on compact the **whole chip** opens its menu; **never a single option**; more than two rows scroll sideways ([filter chips](../sources/m3/components_chips.md#filter-chips)).
- **Input chips** can be edited (back to text), selected and deleted with Backspace, reordered or moved; inline in a field, in a list, or scrolling sideways ([input chips](../sources/m3/components_chips.md#input-chips), [placement](../sources/m3/components_chips.md#placement)).
- **Assist chips** sit after the primary content ([assist chips](../sources/m3/components_chips.md#assist-chips)).

## Menus

M3 Expressive adds **vertical menus**, recommended for new designs, in **standard** and **vibrant** colours ([menus → M3 Expressive update](../sources/m3/components_menus.md#m3-expressive-update)).

| Part | Vertical menu (*tokens*) |
| --- | --- |
| Container | standard `surface-container-low`, vibrant `tertiary-container`; corners 16; elevation 2 |
| Items | 44 high (`Item`); corners 4, first and last 12, selected 12; padding 16 start and end, 8 top and bottom, 12 between elements; icons 20 |
| Groups | corners 8, 4 padding, **2** gap between segments |
| Text | label `on-surface`, supporting and icons `on-surface-variant` (vibrant: `on-tertiary-container`) |
| Selected item | standard `tertiary-container` / `on-tertiary-container`; vibrant `tertiary` / `on-tertiary` |

(*tokens* `SegmentedMenuTokens`, `StandardMenuTokens`, `VibrantMenuTokens`; the baseline menu, `MenuTokens`: `surface-container`, corners 4, elevation 2, selected `secondary-container`)

Baseline menu: **112–280** wide, corners 4; items **48** high, 12 side padding (with or without an icon), 12 between elements, icons 24; dividers 1 high with 8 above and below ([menu (baseline) → measurements](../sources/m3/components_menus.md#measurements-1)).

- **A temporary set of actions**; actions that must always show go in a **toolbar**. Smaller than a set of radio buttons or chips ([usage](../sources/m3/components_menus.md#usage)).
- **Vibrant** sparingly ([color options](../sources/m3/components_menus.md#color-options)).
- Opens on selecting an element (an icon, a button, a text field) or a specific gesture (right-click, long press): overflow, text field dropdown, select and context menus ([opening menus](../sources/m3/components_menus.md#opening-menus)).
- **An item that can't be used now is disabled, not removed** ([menu items](../sources/m3/components_menus.md#menu-items)).
- **Groups**: gaps (one or two at most, never in a scrolling menu) or dividers. **Gaps aren't available on the web: use dividers there** ([gaps & dividers](../sources/m3/components_menus.md#gaps--dividers-optional)).
- **No buttons, switches or other direct actions inside an item**; slots (images, swatches, progress) keep the item's padding and 48 targets ([flexibility & slots](../sources/m3/components_menus.md#flexibility--slots)).

## Search

| Part | Value |
| --- | --- |
| Search bar | 56 high, **360–720** wide, fully round, `surface-container-high`, elevation 3; label start-aligned; 4 between the icons' targets and the label; text `on-surface` body large; leading icon `on-surface`, trailing `on-surface-variant`; avatar 30 |
| Search view | `surface-container-high`; docked: **360–720** wide, **240** high up to **⅔** of the screen, corners 28, header 56; full-screen: full width and height, corners 0, header 72 |

([search → measurements](../sources/m3/components_search.md#measurements); colours *tokens* `SearchBarTokens`, `SearchViewTokens`)

- **Entry points**: a **search bar** to search one view ("Search your messages"); a **search app bar** when search is the main, global function; a **search icon button** when it's secondary ([search → usage](../sources/m3/components_search.md#usage)).
- **Focused search**: suggestions may show before typing, results while typing or after; both in a **list**, optionally with icons, category labels, avatars and filter chips; gaps group them ([usage](../sources/m3/components_search.md#usage), [gaps](../sources/m3/components_search.md#gaps)).
- **Layouts**: **docked** (a list below the bar, a scrim over the content) or **full-screen** ([placement](../sources/m3/components_search.md#placement)).
- The bar sits at the **top**; margins **24 unfocused, 12 focused** in the contained style (recommended), keeping its shape ([anatomy](../sources/m3/components_search.md#search-bar-container)).
- **Never `surface-container-high` on a `surface-container` background** ([container color](../sources/m3/components_search.md#container-color)).

## Slider

| Part | Value |
| --- | --- |
| Track | 16 high, fully round; active `primary`, inactive `secondary-container` |
| Handle | 4 wide, 44 high, `primary`, 6 from the track |
| Stops | 4 dots, `secondary-container` |
| Value | `inverse-surface` / `inverse-on-surface`, label large |

(*tokens* `SliderTokens`, which match the XS size below; M3 Expressive also adds sizes XS–XL and vertical sliders, [M3 Expressive update](../sources/m3/components_sliders.md#m3-expressive-update))

| Size | Track height | Track corners | Handle height | Inset icon |
| --- | --- | --- | --- | --- |
| XS | 16 | 8 | 44 | — |
| S | 24 | 8 | 44 | — |
| M | 40 | 12 | 52 | 24 |
| L | 56 | 16 | 68 | 24 |
| XL | 96 | 28 | 108 | 32 |

Handle 4 wide and value label 48 × 44 at every size ([sliders → measurements](../sources/m3/components_sliders.md#measurements)).

- For values along a range (volume, brightness, filter intensity); **changes take effect immediately** ([sliders → usage](../sources/m3/components_sliders.md#usage)).
- **Standard** (from zero), **centred** (zero or default in the middle), **range** (min and max); **no vertical range sliders** ([usage](../sources/m3/components_sliders.md#usage)).
- The value shows while dragging (one at a time on a range); not needed when shown elsewhere; a separate text field may mirror it and comes right after it in tab order ([value](../sources/m3/components_sliders.md#value)).
- **Stops** for preset values (the handle snaps); not too many. A stop at the end of the inactive track keeps 3:1 contrast ([stop indicators](../sources/m3/components_sliders.md#stop-indicators)).
- Values increase left to right, reversed in RTL ([track](../sources/m3/components_sliders.md#track)).

## Date and time pickers

- **Date pickers** in a **dialog on compact**, in a **text field dropdown on medium and expanded** ([date pickers → usage](../sources/m3/components_date-pickers.md#usage)). Variants:
  - **Docked**: a date field with a dropdown calendar; keyboard or calendar both available; good for near and distant dates.
  - **Modal**: swipe months, scroll years; **not for distant dates such as a date of birth** (use modal input or docked); supports ranges (flights, hotels).
  - **Modal input**: typed dates; switch with the modal picker through the edit or calendar icon.
  - On compact, a **full-screen** modal picker is recommended.
  ([docked date picker](../sources/m3/components_date-pickers.md#docked-date-picker-1), [modal date picker](../sources/m3/components_date-pickers.md#modal-date-picker-1), [modal date input](../sources/m3/components_date-pickers.md#modal-date-input-1))
- Modal date picker (*tokens* `DatePickerModalTokens`): 360×568, `surface-container-high`, corners 28, elevation 3; days 40, round; selected `primary` / `on-primary`; today outlined 1 `primary`; range `secondary-container`; years 72 × 36 with a round state layer.
- Modal date input (*tokens* `DateInputModalTokens`): 328×512, corners 28, header 120.
- **Time pickers** ([time pickers → usage](../sources/m3/components_time-pickers.md#usage)):
  - **Scroll**: compact, inline or on a sheet, menu or dialog; keeps surrounding content visible.
  - **Input**: keyboard entry, inline or modal; **both other pickers toggle to it** (keyboard icon) for accessible entry.
  - **Dial**: the most engaging, **modal only**; not for granular values (milliseconds).
  - Follows the **24-hour** setting (no AM/PM, an inner dial).
  - **Only when any minute can be chosen**; preset times use something simpler, such as buttons.
- Dial picker (*tokens* `TimePickerTokens`): `surface-container-high`, corners 28, elevation 3; dial 256, `surface-container-highest`; selector `primary`, handle 48.
- Time picker sizes ([time pickers → measurements](../sources/m3/components_time-pickers.md#measurements-1)): both pickers size to their content, headline start-aligned, **24** padding on every side.
  - **Input**: hour and minute fields 96 × 72; the AM/PM selector 52 × 72.
  - **Dial**: hour and minute selectors 96 × 80 (114 wide in the vertical 24-hour layout); the AM/PM selector 52 × 80 in its vertical layout, 216 × 38 in its horizontal one; dial 256, its handle 48, centre dot 8, track 2.
