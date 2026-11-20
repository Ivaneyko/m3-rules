# Menus

slug: menus  |  updated: 2026-07-28T07:32:19.493Z

<!-- section: Overview -->

- Use a **menu** to show a temporary set of actions. To show actions on screen at all times, use a **toolbar** instead
- Menus can open from many components, including icon buttons, split buttons, and text fields
- **Context menus** provide actions for a specific element, like an image or highlighted text, and usually open with a secondary click

_footer: Vertical menus can include vibrant colors, gaps, dividers, and submenus to organize a list of choices_
_altText: 1 vertical menu with vibrant colors opens from a split button, and 1 vertical menu with a submenu._

## Availability & resources

## M3 Expressive update

**November 2025**

**Vertical menus** were introduced with new shapes, color styles, selection states, and refined submenu motion. Gaps can be used for a more flexible layout on Android. [More on M3 Expressive](https://m3.material.io/blog/building-with-m3-expressive)

Variants:

- Added **vertical menus**, recommended for new designs
- Baseline **menu** is still available

Color styles: 

- Standard
- Vibrant

_footer: Vibrant colors help selected menu items stand out_
_altText: A vertical menu using shape and vibrant color to show a selected state._

## Differences from M2

- **Color**: New color mappings and compatibility with dynamic color
- **Variants**: Dropdown menu and exposed dropdown menu are now both referred to as menu, since they differ only in the element which opens the menu surface

_footer: M2: Former menu colors don’t contrast with the background_
_altText: Menu with gray color._

_footer: M3: Menus feature new color mappings and dynamic color_
_altText: Menu with purple background and outline._

<!-- section: Specs -->

## Variants

### Vertical menus

Use vertical menus for a more expressive look and feel, including rounded corners, standard and vibrant color styles, more selection states, and submenu motion.

_footer: - Vertical menu with gap - Vertical menu with divider_
_altText: 2 vertical menus use shape and color to indicate selected state._

### Baseline variant

In M3 Expressive, baseline menu is still available to use, but doesn’t have the latest shapes, color styles, selection states, and motion. [See baseline menu specs](/m3/pages/menus/specs#a80df2f9-8610-4ce0-b3a3-b9ee749d5c98)

_footer: A baseline **menu** has square corners, as compared to a **vertical menu’s** round corners and expressive styling_
_altText: A baseline menu variant with square corners and standard colors._

**Variant**
 |
**M3**
 |
**M3 Expressive**
 |

Vertical menus
 |
--
 |
Available
 |

Menu (baseline)
 |
Available
 |
Available
 |

## Configurations

### Vertical menus layout

_footer: - Standard - Grouped_
_altText: 2 menus: 1 standard, and 1 with a gap, creating groups._

**Category** | **Configuration** | **M3** | **M3 Expressiv****e** |
Color | Standard | Available | Available |
Vibrant | -- | Available |
Layout | Standard | Available | Available |
Grouped | -- | Available |

## Tokens & specs

Browse the component elements, attributes, tokens, and their values. [Learn about design tokens](/m3/pages/design-tokens/overview)

## Anatomy

### Vertical menus

_footer: - Menu item - Leading icon (optional) - Menu item text - Trailing icon (optional) - Badge (optional) - Trailing text (optional) - Container - Supporting text (optional) - Label text (optional) - Gap (optional) - Divider (optional)_
_altText: A diagram of a vertical menu._

## Color

Color values are implemented through design tokens. For designers, this means working with color values that correspond with tokens. In implementation, a color value will be a token that references a value. [Learn more about design tokens](/m3/pages/design-tokens/overview)

Menus have two color mappings:

- Standard: Surface-based
- Vibrant: Tertiary-based

These mappings provide options for lower or higher visual emphasis. Vibrant menus are more prominent so should be used sparingly.

_footer: - Standard color scheme - Vibrant color scheme_
_altText: 2 vertical menus: 1 with lower visual emphasis, and 1 vibrant menu with bold shades._

### Standard colors

_footer: Vertical menus color roles used for light and dark themes:  - On surface variant - On surface - On surface (state layer) - Surface container low - On surface variant - On surface variant - Tertiary container (selected) - On tertiary container (selected) - On surface variant - On surface variant - On tertiary container (selected)_
_altText: 2 vertical menus with standard color roles mapped to 11 elements._

### Vibrant colors

_footer: Vertical menus color roles used for light and dark themes:  - On tertiary container - On tertiary container - On tertiary container (state layer) - Tertiary container - On tertiary container - On tertiary container - Tertiary (selected) - On tertiary (selected) - On tertiary container - On tertiary container - On tertiary (selected)_
_altText: 2 vertical menus with vibrant color roles mapped to 11 elements._

## States

States are visual representations used to communicate the status of a component or an interactive element. [More on interaction states](/m3/pages/interaction-states/overview)

Shape morphing in vertical menus creates an expressive active state. As focus moves between submenus, the corner shape changes to highlight the active menu. [More on menu focus](/m3/pages/menus/guidelines#7cc1d01b-a454-48c7-8306-e60347ffd17f)

_footer: - Enabled - Disabled - Hovered - Focused - Pressed - Active (main menu reveals submenu)_
_altText: 6 vertical menu states in light and dark themes._

## Measurements

_footer: Vertical menu padding and size measurements_
_altText: Vertical menu marked with spacing and padding measurements._

## Menu (baseline)

The baseline menu variant is available and continues to work in existing products. However, M3 expressive vertical menus are recommended for new designs.

### Baseline tokens & specs

Browse the component elements, attributes, tokens, and their values. [Learn about design tokens](/m3/pages/design-tokens/overview)

### Anatomy

_footer: - List item - List item leading icon - List item trailing icon - Container - List item trailing text - Divider_
_altText: Diagram of 6 elements of a baseline menu._

### Color

_footer: Baseline menu color roles used for light and dark themes:  - On surface variant - On surface - On surface - opacity: 0.08 - Surface container - On surface variant - On surface variant - On surface variant - Surface container highest - Outline variant_
_altText: 9 color roles of a baseline menu in light and dark themes._

### States

#### Default menu items

_footer: - Enabled - Disabled - Hovered - Focused - Pressed_
_altText: Diagram numbering the 5 default states of a baseline menu._

#### Selected menu items

_footer: - Enabled - Disabled - Hovered - Focused - Pressed_
_altText: 5 states of a selected baseline menu item._

[State specs are in the token module above](/m3/pages/menus/specs#c811d2fa-469a-4e4e-9d9f-0f535c5c9b4c)

### Measurements

_footer: Baseline menu padding and size measurements_
_altText: Diagram of a baseline menu’s padding, text alignment, height, and width._

Attribute
 | Value
 |
Container width
 | 112dp min, 280dp max |
Corner radius
 | 4dp |
Vertical label text alignment
 | Center-aligned |
Horizontal label text alignment
 | Start-aligned |
Left/right padding
 | 12dp |
Left/right padding with-icon
 | 12dp |
List item height
 | 48dp |
Padding between elements within a list item
 | 12dp |
Divider top/bottom padding
 | 8dp |
Divider height
 | 1dp |
Divider width
 | Dynamic |
Leading/trailing icon size
 | 24dp |

### Configurations

A baseline menu appears when a person interacts with a button, action, or other control. 

A few examples:

- Button
- Text field
- Icon button
- Selected text

_altText: Examples of 4 baseline menu inputs._

<!-- section: Guidelines -->

_footer: A menu in the **vibrant** color style is more expressive, and one with **standard** colors is more utilitarian_
_altText: 2 vertical menus, 1 with vibrant colors, 1 with standard colors and grouped items._

## Usage

Use a menu to show a temporary set of actions. To show actions on screen at all times, use a toolbar instead. 

A menu takes up less space than a set of radio buttons or chips. 

### Color options

Menus have two color mappings:

-
Standard: Surface-based, lower visual emphasis

-
Vibrant: Tertiary-based, higher visual emphasis

Vibrant menus are more prominent, and should be used sparingly.

_footer: On web, menus can open submenus_
_altText: Menu shows item “Line spacing” opening a submenu. In the second menu, “Custom 1.2” is selected with vibrant color._

### Opening menus

Menus temporarily appear in front of all other permanent UI elements.

A menu should open when a person:

-
Selects an element, such as an icon, button, or text field

-
Performs a specific action to trigger the menu, like right-click or press-and-hold

Use menus in situations that need extra actions, like: 

-
Overflow menus

-
Text field dropdown menus

-
Select menus

-
Context menus

_footer: Menus appear in front of all other UI elements_
_altText: A grouped menu with Undo, Redo, Cut, Copy, and Paste options appear over highlighted text in an ebook._

### Menu groups

Vertical menu items can be grouped by adding a divider or small gap. Use groups to bundle similar actions together.  

[Gaps and dividers guidelines](/m3/pages/menus/guidelines#d75ac70c-9122-4b4c-bd60-b856bc66c9bc)

_footer: Menu items can be grouped to be more scannable:  - Standard vertical menu - Grouped vertical menu_
_altText: 2 vertical menus: a standard menu with no gap and a grouped menu with 1 gap._

### Context menus

Context menus provide a list of additional actions a person can take on an item. A secondary click, like a right-click on a mouse or a two-finger tap on a trackpad, opens a context menu.

_footer: A context menu appears when right clicking with a mouse or trackpad. It can reveal key actions related to the associated content._
_altText: A context menu pops up from a newspaper link. The menu items are: Open in new window, Save link as, Copy address, and Inspect._

## Anatomy

_footer: - Menu item - Leading icon (optional) - Menu item text - Trailing icon (optional) - Badge (optional) - Trailing text (optional) - Container - Supporting text (optional) - Label text (optional) - Gap (optional) - Divider (optional)_
_altText: Diagram outlining 11 elements of a menu’s anatomy._

### Menu items

Menu items can include label text, leading icons, trailing icons, and keyboard commands. 

When a menu item can only be used under specific conditions, it should appear disabled rather than be removed.

_footer: The **Redo** action is disabled when that action isn’t available_
_altText: Menu shows 1 item that’s  disabled, “Redo”. The text color of the disabled item is lighter than the active items._

### Gaps & dividers (optional)

Gaps and dividers can be used to separate and group menu items.

**Gaps**

Use a gap to visually divide menu items into distinct groups. Gaps are more expressive than dividers and make the relationship between items clear.

- Avoid changing the size of the gap
- Limit the number of gaps in a menu to one or two
- Don’t use gaps in scrollable menus

_footer: Gaps separate menu items using expressive shapes_
_altText: 2 vertical menus with 5 items. A gap separates items into a group of 3 and group of 2._

starNote:Gaps are not currently available on web

**Dividers** 

Dividers create a more subtle separation between items. Use a divider for:

- Scrollable menus
- Text fields with a dropdown menu, where a grouped treatment isn’t appropriate

On web, use a divider to separate menu items.

_footer: Dividers separate menu items in baseline menus and on web_
_altText: A menu on a web interface with items separated by a divider line._

## Flexibility & slots

Menus have custom slots that support more flexible item layouts.

When creating a complicated menu, think of the menu item as a container with a swappable slot.

Slots work best with simple content such as:

- Images
- Progress indicators
- Color swatches

_footer: Slots can appear anywhere in a menu_
_altText: A menu showing an undefined slot that could be used for a different element, such as an image._

**Slot accessibility**

Use caution when adding slots to menus:

- Make sure the menu remains accessible
- Elements must follow the rules and interaction patterns of the menu component
- Keep the same menu item padding
- Targets should be 48x48dp or larger

Don't add buttons, switches, or other direct actions into the menu item. Nested elements should only perform one action. Adding multiple actions can break keyboard navigation and screen reader functionality.

[More on required accessibility guidelines](/m3/pages/menus/accessibility/)

_footer: Reserve the use of slots for use cases that maintain the menu’s accessibility and functionality_
_altText: 1 diagram and 1 menu showing icons in each item’s leading slot._

## Placement

A menu is positioned relative to the window edge. It typically appears below, next to, or in front of the element that generates it.

If a menu is in a position to be cut off, it should automatically reposition to appear to the left, right, or above the element that generates it.

_footer: Menus can appear around or in front of the element that opened them_
_altText: 6 abstract shapes showing how a menu can extend from the edge of the screen._

### Submenus

Submenus should open next to the parent menu item without overlapping it.

Submenus are best used on large screens where there's space. [See adaptive guidance](/m3/pages/menus/guidelines#e588ae16-7a76-4bf9-8532-8d931a13ca35) for alternatives on mobile.

_footer: Position submenus to the side of the parent item_
_altText: A submenu opens to the right of its parent menu item, and doesn’t cover it. A selected submenu item includes a checkmark and vibrant highlight._

starNote:Submenus are not currently available on Jetpack Compose

## Adaptive design

### Compact breakpoints

Consider adapting menus into bottom sheets on small screens. They have more space to display additional items and longer labels.

_footer: A bottom sheet can replace a menu on smaller screens_
_altText: A bottom sheet shows longer labels and improved readability on a compact window._

### Other breakpoints

On medium and expanded windows, menus are most effective as they appear in context with the content. On larger screens, menus can also display more items, and can use submenus to organize complex sets of options.

_footer: On large screens, a menu is often more appropriate than a bottom sheet_
_altText: A menu with vibrant color on a mid-size screen, with the same elements as a bottom sheet._

## Behavior

### Appearing

A menu can appear when a person interacts with an element on the page, like a button, text field, filter chip, or highlighted text.

A menu’s position on screen affects where and how it appears. If opened at the top of the screen, it expands downwards to avoid being cropped.

_footer: Menus at different positions on a screen open in different directions, adapting to the available space_
_altText: A menu activated at the top of the screen expands downwards, then a menu opened at the bottom of the screen expands upward._

_footer: A menu can open from a split button_
_altText: A menu expands downward from the top of the screen, appearing below a split button._

_footer: A menu can appear in context, like next to highlighted text or a selected image_
_altText: A menu expands both above and below a line of selected text, separated by a gap._

_footer: A menu can open from a text field_
_altText: Selecting the “Phone type” text field reveals a menu with multiple options: Business, Mobile (selected), and Home._

_footer: A menu can open from a filter chip_
_altText: A filter chip for “Cycling” in a map UI reveals more menus items: Running, Walking, and Hiking._

**Motion**

Menus use an enter and exit transition. This animation creates a relationship between the menu and the element that generates it.

When a menu expands, the trigger element becomes pressed. When an item is selected, a ripple appears on touch.

_footer: A menu expands when opened, and has a ripple when an item is selected_
_altText: An animation for entering a new contact’s address. The state selection menu expands and the state California is selected._

In dense products, such as on desktop, menus can open instantly to reduce motion.

_footer: Desktop menus can open instantly_
_altText: A menu for changing a font type opens instantly on a desktop UI._

### Filtering

A menu can include a text field to filter options. This pattern is also known as autocomplete. 

As someone types, the list of menu options filters to show relevant results. This helps people quickly find the right option from a long list. 

Menu items ease into their new position as the menu is filtered.

_footer: As a person types in the text field, the menu options filter to match the input_
_altText: An animation showing a text field being typed into. As text is added, the list of menu items below filters down to show only matching options._

### Scrolling

Menus can scroll when all menu items can’t display at once. In this state, menus show a persistent scrollbar.

Don’t use gaps if a menu scrolls; this is currently unsupported.

_footer: When content is scrollable, menus display scrollbars_
_altText: A font menu on a document shows a scrollbar to access font options not currently visible._

### Selecting

When a menu is opened, the corresponding button or icon button should remain the same visually, with the addition of a pressed state.

This should happen even when opening from a keyboard shortcut.

_footer: Tapping the icon triggers a menu. Choosing a menu option doesn’t change the icon generating the menu._
_altText: The overflow icon remains the same, even after the menu is opened._

### Single- and multi-select menus

Menus can allow either single-select or multi-select actions:

- **Single-select** menus can have one item selected at a time. When a new item is selected, the previously selected item is automatically unselected.
- **Multi-select** menus can have many selected items. They stay open until the person dismisses the menu.

[More on selection accessibility requirements](/m3/pages/menus/accessibility#149778c9-eb42-4a56-8a0b-9932181ac2cd)

_footer: Menus can be single- or multi-select_
_altText: 1 menu for dietary options shows a single selection, Vegan. Another menu shows Vegan and Nut-free selections at the same time._

## Focus

When a menu has multiple submenus, focus follows the current hovered or focused submenu. 

**Shape morphing**

As a person moves from one submenu to the next, the corners of the focused submenu become more rounded, while the unfocused submenu becomes less rounded. This adds a dynamic quality to menu interactions.

_footer: On a custom menu, the corner shape changes to indicate focus as the cursor moves across submenus_
_altText: On a submenu next to a main menu, a selected item’s corner shape expands for added emphasis._

## Density

On web only, density levels control the spacing between elements. Increasing density decreases the top and bottom padding. [More on layout density](/m3/pages/understanding-layout/density)

_footer: Density of menus from 0 to -3_
_altText: 4 menus becoming increasingly dense and compressed._

<!-- section: Accessibility -->

## Use cases

People should be able to do the following using assistive technology:

- Navigate to, open, and close a menu
- Navigate between and select menu items

## Interaction & style

Menu items need certain cues to clearly show when they're selected: 

- By default, menu items change shape and color when selected
- The default color contrast is 3:1 between selected and unselected menu items
- It's recommended to include another visual cue, like a checkmark

_footer: Use multiple visual cues like color, shape, and icons to show that an item is selected_
_altText: A state dropdown menu with the selected item Alaska highlighted in a vibrant color, with a checkmark icon._

## Flexibility & slots

Use caution when adding slots to menus:

- Make sure the menu remains accessible
- Elements must follow the rules and interaction patterns of the menu component
- Keep the same menu item padding
- Targets should be 48x48dp or larger

Don't add buttons, switches, or other direct actions into the menu item. Nested elements should only perform one action. Adding multiple actions can break keyboard navigation and screen reader functionality.

[More on slots in menus](/m3/pages/menus/guidelines#8a1684bb-99a5-4a73-91a0-068d0b406127)

_footer: Reserve the use of slots for use cases that maintain the menu’s accessibility and functionality_
_altText: 1 diagram and 1 menu showing icons in each item’s leading slot._

## Focus

**Initial focus**

When a menu opens, focus should be placed on the first menu item. This allows people using a keyboard or other assistive technologies to begin navigating the menu immediately.

**Exiting a menu**

People expect to exit a menu by:

- Selecting an option
- Tapping **Escape** or outside of the menu
- Using the system back button

Where focus is placed after closing the menu depends on the app.

_footer: Keyboard navigation on Android and web:  - **Tab** to select a menu item - **Space** or **Enter** to open a menu - **Space** or **Enter** to select a menu item - **Escape** to close a menu_
_altText: 4 common keyboard navigation methods for menus on Android and web._

## Keyboard navigation

**Keys**
 | **Actions**
 |
**Tab** | Focus lands on menu |

**Space**or**Enter**
 |
For closed menus: Opens menu or submenu

For open menus: Selects a menu item
 |
**Up** and **Down** arrows |
For closed menus: Opens menu 

For open menus: Moves focus to the next item
 |
**Left** and **Right** arrows | Opens or closes a submenu |
**Letters** | Focus moves to the next menu item starting with letter |
**Escape** | Closes menu |

## Interactability

Disabled menu items can receive focus but aren't selectable.

Dividers and gaps can't receive focus.

_footer: Disabled menu items can receive focus_
_altText: A disabled menu item “Share” is in focus._

_footer: A divider or gap can’t receive focus_
_altText: A divider with focus._

## Labeling elements

Accessibility labels are used with assistive technology devices like screen readers. 

The accessibility label should be the same as the menu item text.

The role is [dependent on platform](/m3/pages/menus/accessibility#9c562e2c-da3a-4212-a2e3-ac91ba450b65).

_footer: The menu item’s accessibility label aligns with the UI text_
_altText: A “Preview” menu item has an accessibility label of ”preview”._

**Element** |
**A11y label**
 |
**Role (Web)**
 | **Role (Android Views)** |
**Role (Jetpack Compose)**
 |
Menu item text | Preview | Menu item | Generic actionable element | Generic actionable element  |

For menu items with text and an icon, the icon’s accessibility label should be marked as **decorative** to avoid redundant verbalizations.

_footer: For menu items with text and an icon, the icon’s accessibility label is **decorative**_
_altText: A menu item icon of an eye next to the word “preview” has a note of “Decorative.”_
