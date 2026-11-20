# Chips

slug: chips  |  updated: 2026-07-17T07:05:14.328Z

<!-- section: Overview -->

-
Use chips to show options for a specific context

-
Four variants: assist, filter, input, and suggestion

-
Chip elevation defaults to 0 but can be elevated if they need more visual separation

_footer: - Assist chip - Filter chip - Input chip - Suggestion chip_
_altText: 4 chip variants._

## Availability & resources

## Updates

**Aug 2024**

Updated stroke color from **outline** to **outline variant**.

_footer: The stroke color was softened to improve visual hierarchy between chips and buttons_
_altText: A chip with a clear outline is now a chip with a subtle outline._

## Differences from M2

-
Color: New color mappings and compatibility with dynamic color

-
Shape: Rounded rectangle 

-
Variants: Action chips have been separated into assist chips and suggestion chips. Choice chips are now a subset of filter chips

_footer: M2: Variants of chips are input, choice, filter, and action chips_
_altText: M2 chip variants._

_footer: M3: Variants of chips updated to assist, filter, input, and suggestion chips_
_altText: M3 chip variants._

<!-- section: Specs -->

## Tokens & specs

Select a component variant below to see its elements, attributes, tokens, and values.

## Assist chip

_footer: - Container - Label text - Leading icon_
_altText: Assist chip diagram numbering 3 elements._

### Assist chip color

Color values are implemented through design tokens. For design, this means working with color values that correspond with tokens. For implementation, a color value will be a token that references a value. [Learn more about design tokens](/m3/pages/design-tokens/overview)

_footer: Assist chip color roles used for light and dark themes:  - Surface container low (optional) - On surface - Outline - Primary_
_altText: Assist chip diagram numbering 4 color elements._

### Assist chip states

States are visual representations used to communicate the status of a component or interactive element. [Learn more about interaction states](/m3/pages/interaction-states/overview)

_footer: Selected and unselected assist chip states:  - Enabled - Disabled - Hovered - Focused - Pressed - Dragged_
_altText: 36 assist chips illustrating combinations of styles, selection and non-selection, and 6 interaction states._

### Assist chip measurements

_footer: Assist chip padding and size measurements_
_altText: 3 assist chips with measurements shown for variants with and without a leading icon._

Attribute
 | Value
 |
Height
 | 32dp |
Shape
 | 8dp corner radius |
Icon size
 | 18dp |
Vertical label text alignment
 | Center-aligned |
Horizontal label text alignment
 | Start-aligned |
Left/right padding
 | 16dp |
Left/right padding with icon
 | 8dp |
Padding between elements
 | 8dp |

## Filter chip

_footer: - Container - Label text - Leading icon - Trailing icon_
_altText: Filter chip diagram numbering 4 elements._

### Filter chip color

Color values are implemented through design tokens. For design, this means working with color values that correspond with tokens. For implementation, a color value will be a token that references a value. [Learn more about design tokens](/m3/pages/design-tokens/overview)

_footer: Filter chip color roles used for light and dark themes:  - On surface variant  - On secondary container  - Secondary container  - Outline variant  - Surface container low (optional)_
_altText: Filter chip diagram numbering 4 color elements._

### Filter chip states

States are visual representations used to communicate the status of a component or interactive element. [Learn more about interaction states](/m3/pages/interaction-states/overview)

_footer: Selected and unselected filter chip states:  - Enabled - Disabled - Hovered - Focused - Pressed - Dragged_
_altText: 24 filter chips showing combinations of elevated, non-elevated, selected, and non-selected styles, and 6 interaction states._

### Filter chip measurements

_footer: Filter chip padding and size measurements_
_altText: 3 filter chips with measurements shown for types with and without a leading icon and trailing icon._

Attribute
 | Value
 |
Container height
 | 32dp |
Container shape
 | 8dp corner radius |
Icon size
 | 18dp |
Vertical label text alignment
 | Center-aligned |
Horizontal label text alignment
 | Start-aligned |
Left/right padding
 | 16dp |
Left/right padding with icon
 | 8dp |
Padding between elements
 | 8dp |

## Input chip

_footer: - Container - Label text - Trailing icon - Leading icon_
_altText: Input chip diagram numbering 4 elements._

### Input chip color

Color values are implemented through design tokens. For design, this means working with color values that correspond with tokens. For implementation, a color value will be a token that references a value. [Learn more about design tokens](/m3/pages/design-tokens/overview)

_footer: Input chip color roles used for light and dark themes:  - On surface variant - Surface container low (optional) - On surface variant - On surface variant - Outline variant - Primary - Secondary container - On secondary container - On secondary container_
_altText: Input chip diagram numbering 5 color elements._

### Input chip states

States are visual representations used to communicate the status of a component or interactive element. [Learn more about interaction states](/m3/pages/interaction-states/overview)

_footer: Selected and unselected input chip states:  - Enabled - Disabled - Hovered - Focused - Pressed - Dragged_
_altText: 33 input chips illustrating combinations of styles, selection and non-selection, and 6 interaction states._

### Input chip measurements

_footer: Input chip padding and size measurements_
_altText: 2 input chips with measurements: 1 with a trailing icon only; 1 with an avatar as a leading icon and a trailing icon._

Attribute
 | Value
 |
Container height
 | 32dp |
Container shape
 | 8dp corner radius |
Icon size
 | 18dp |
Avatar shape
 | 12dp corner radius |
Avatar size
 | 24dp |
Vertical label text alignment
 | Center-aligned |
Horizontal label text alignment
 | Start-aligned |
Left padding for avatar
 | 4dp |
Right padding for avatar
 | 8dp |
Left/right padding for icon
 | 8dp |
Padding between elements
 | 8dp |
Target size for close icon
 | Min 48dp |

## Suggestion chip

_footer: - Container - Label text_
_altText: Suggestion chip diagram numbering 2 elements._

### Suggestion chip color

Color values are implemented through design tokens. For design, this means working with color values that correspond with tokens. For implementation, a color value will be a token that references a value. [Learn more about design tokens](/m3/pages/design-tokens/overview)

_footer: Suggestion chip color roles used for light and dark themes:  - Outline - Surface container low (optional) - On surface variant_
_altText: Suggestion chip diagram numbering 3 color elements._

### Suggestion chip states

States are visual representations used to communicate the status of a component or interactive element. [Learn more about interaction states](/m3/pages/interaction-states/overview)

_footer: Selected and unselected suggestion chip states:  - Enabled - Disabled - Hovered - Focused - Pressed - Dragged_
_altText: 24 suggestion chips illustrating combinations of styles across 6 interaction states._

### Suggestion chip measurements

_footer: Suggestion chip padding and size measurements_
_altText: 2 suggestion chips with measurements shown for variants with and without a leading icon._

Attribute
 | Value
 |
Container height
 | 32dp |
Container shape
 | 8dp corner radius |
Icon size
 | 18dp |
Vertical label text alignment
 | Center-aligned |
Horizontal label text alignment
 | Start-aligned |
Left/right padding without icon
 | 16dp |
Left/right padding with icon
 | 8dp |
Padding between elements
 | 8dp |

<!-- section: Guidelines -->

_footer: There are four variants of chips: Assist, filter, input, and suggestion_
_altText: 4 chip variants: Assist, filter, input, and suggestion._

## Usage

Chips help people enter information, make selections, filter content, or trigger actions. They're best used to help people accomplish their current task faster and easier.

_footer: Chips appear as a group of interactive elements_
_altText: 3 assist chips in restaurant review app._

### Chips aren’t buttons

Chips and buttons are similar. They both provide visual cues to prompt people to take actions and make selections. 

While buttons appear consistently and with familiar calls to action, chips are dynamic to the situation, and appear as a group of interactive elements.

Use chips to enhance a person's current journey and encourage action. Use buttons to progress them through the product and for significant actions.

_footer: Use chips to present contextual, supplemental options_
_altText: Chips used for “Reserve a table” and “Order delivery” in a restaurant app._

_footer: Avoid replacing major actions with chips. Actions that progress people to the next or previous step should always be displayed as buttons._
_altText: Chips used for Save and Cancel actions in a dialog._

Chips should dynamically offer various actions depending on the current task, whereas a button should be a persistent fixture of a layout. 

Chips represent forking paths for a current task, while buttons represent linear steps.

_footer: Use buttons for the final step in a task_
_altText: Button labeled “Save task” in a task management app._

_footer: Avoid using chips to finish or progress a task_
_altText: Chip labeled “Save task” in a task management app._

Multiple chips should appear together in a set, whereas there should be no more than 3 buttons in a single arrangement.

Chip sets can be scrolled horizontally.

_footer: Chips can be scrolled horizontally_
_altText: Multiple chips in event reminder._

_footer: Don’t display a single chip by itself. Chips should appear in a set._
_altText: Single chip in event reminder._

### Variants

Choose the chip variant based on its purpose and author. 

Does the chip represent an action (assist chip) or filter results (filter chip)? 

Is its content generated by the product (suggestion chip), or by the person using the product (input chip)?

_footer: There are four chip variants:   - Assist   - Filter   - Input   - Suggestion_
_altText: 4 chip variants._

Purpose
 |
Chip variant
 |
Rationale
 |
Example
 |

Action
 |
[Assist chip](/m3/pages/chips/guidelines#5dd1928c-1476-4029-bdc5-fde66fc0dcb1)
 |
Assist chips represent smart or automated actions that can span multiple apps
 |
**Add to calendar** action
 |

Filter
 |
[Filter chip](/m3/pages/chips/guidelines#8d453d50-8d8e-43aa-9ae3-87ed134d2e64)
 |
Filter chips represent filters for a collection
 |
Platform selector on material.io/components
 |

Information, user-authored
 |
[Input chip](/m3/pages/chips/guidelines#4d2d5ef5-3fcd-46e9-99f2-067747b2393f)
 |
Input chips represent discrete pieces of information entered by a person
 |
Gmail contact in the **To** field
 |

Information, product-authored
 |
[Suggestion chip](/m3/pages/chips/guidelines#36d7bb16-a9bf-4cf6-a73d-8e05510d66a7)
 |
Suggestion chips help narrow a person’s intent by presenting dynamically-generated suggestions
 |
Suggested chat response
 |

## Anatomy

_footer: - Container - Label text - Leading icon or image (optional) - Trailing icon (required for input chips, optional for filter chips)_
_altText: Diagram of 4 elements of a chip._

### Container

All chips are slightly rounded with an 8dp corner.

_footer: Chips have rounded corners_
_altText: Diagram of rounded corner of chip container._

**Shadows & elevation**

Chip containers can be elevated if placed on top of an image or dynamic background.

_footer: When on complicated backgrounds, chip containers can be elevated_
_altText: 3 elevated assist chips above image of restaurant photograph._

_footer: Use an outline to define the edge of the chip's container on regular backgrounds_
_altText: 3 variants of chips in an outlined style._

_footer: Chips may use elevation when placed on an image_
_altText: 3 variants of chips in an elevated style above restaurant photograph._

_footer: Chips shouldn't be elevated when placed directly on the page_
_altText: 4 elevated chips above blank background._

_footer: Avoid using elevation to indicate a chip's pressed state. Instead, use the visual ripple effect._
_altText: Elevated chip in pressed state._

### Label text

Chip label text should be 20 characters or fewer, and have the same typography style as buttons.

Chip labels should remain brief for the limited space available. Skip conventional grammar rules, such as articles (take "a" walk), to save space.

_footer: Keep chip labels short_
_altText: Filter chip in maps app labeled “Walking.”_

_footer: Avoid chip labels longer than 20 characters_
_altText: Filter chip in maps app labeled “Walking navigation session."_

### Leading icon or image (optional)

Chips can contain a leading icon, logo, or circular image. Use a system icon to help identify a chip's category.

_footer: Chips can contain a logo, icon, or circular image_
_altText: 2 input chips, 1 with a leading circular avatar and the other with a leading icon._

The leading icon color for unselected chips can be customized through theming. While the default color role is **primary**, the **on surface variant** color role is a good alternative when the icon style requires less emphasis.

_footer: **Primary** color (left) and **on surface variant** color (right)_
_altText: 2 screens of a restaurant page with chips labeled "Add photos" and "Add dishes." The leading icons are purple in 1, grey in the other._

Leading circular images are sized larger than leading icons to provide more space for detail. Icons are designed to be legible at small sizes.

See the [Specs tab](/m3/pages/chips/specs/) for precise measurement values.

_footer: Leading images, such as avatars, are sized larger than leading icons or logos_
_altText: 2 input chips, 1 with a 24dp leading avatar and the other with an 18dp leading icon._

### Trailing icon (optional, input and filter chips only)

The trailing icon is present for input and filter chips.

On input chips, it's required and must be used to remove the chip. On filter chips, it's optional, and can be used to open a menu or remove the chip. 

Secondary actions (such as a trailing icon button for **Remove**) must have a 48x48dp interaction target that doesn’t interfere with the chip's primary action (such as **Edit** or **Drag**). To achieve this, apply a minimum width of 88dp to the chip, or 42dp to the label text.

_footer: Interaction targets for actions like **Edit** or **Close** have a size of 48x48. This can be achieved by setting the minimum container width to 88dp._
_altText: A chip with 88dp min width has 2 touch targets of 48x48dp._

## Assist chips

Assist chips represent smart or automated actions that can span multiple apps, such as opening a calendar event from the home screen. Assist chips function as though the person asked an assistant to complete the action. They should appear dynamically and contextually in a UI.

An alternative to assist chips are buttons, which should appear persistently and consistently.

_footer: The text in most assist chips begins with a short verb, like **Get**or **Add**_
_altText: 2 assist chips labeled “Add to my itinerary” and “12 mins from hotel” on map screen about Los Cantantes._

_footer: An assist chip can surface supplemental information like a calendar event, as well as provide contextual actions_
_altText: 2 assist chips labeled “Event location” and “Chat” on phone lock screen._

_footer: During an interaction, assist chips can transform into modals, transition into full-screen views of new content, or readjust to display more results inline_
_altText: Assist chip transformed into time picker with radio buttons._

Assist chips can trigger an action or show progress and confirmation.

Write assist chips like buttons: start with a verb. Adjust text dynamically if the state changes, like **Save** to **Saved**.

_footer: Tapping an assist chip triggers a contextual action_
_altText: 3 assist chips labeled “Mail,” ”Messenger”, and “Video Chat” on a travel article._

_footer: Assist chips can show progress and confirmation feedback_
_altText: Assist chip showing confirmation upon selection._

Assist chips are displayed after primary content, such as below a card or persistently at the bottom of a screen.

_footer: Assist chips should be shown underneath primary content_
_altText: 3 assist chips labeled “Turn on lights”, “Set alarm”, and "Close Blinds" on Welcome Home screen._

## Filter chips

Filter chips use tags or descriptive words to filter content. They can be a good alternative to segmented buttons or checkboxes when viewing a list or search results.

Tapping on a filter chip activates it and appends a leading checkmark icon to the starting edge of the chip label.

Write filter chips with nouns that describe the category to **include** in the results. Avoid negative phrases like **Exclude images**.

_footer: Filter chips rely on tags or descriptive words to filter content_
_altText: 4 filter chips labeled “Docs” “Slides” “Sheets” and “Images” with “Slides” and “Sheets” selected_

_footer: Filter chips in a shopping app_
_altText: 5 filter chips representing popular electronics categories in a shopping app. The chip “Game consoles” is selected._

_footer: Filter chips in a real estate app_
_altText: 6 filter chips representing apartment amenities in a real estate app. 2 of the chips are selected._

Tap a chip to select it. Multiple chips can be selected or unselected.

_footer: An icon can be added to indicate when a filter chip is selected_
_altText: 6 filter chips representing apartment amenities in a real estate app. 3 selected chips include checkmarks while 3 don’t._

_footer: Filter chip suggestions can dynamically change as a person starts to select filters_
_altText: 3 amenities chips are selected, and 2 neighborhoods._

Alternatively, a single chip can be selected. This offers an alternative to segmented buttons, radio buttons, or single select menus.

However, avoid mixing chip set behaviors. All chip sets on a page should be either single-select or multi-select.

_footer: Filter chips can be set so that selecting a single chip automatically deselects all other chips in the set_
_altText: filter chips labeled “Extra soft”, “Soft”, “Medium”, and “Hard” First, the “Extra soft” chip is selected, then it unselects as the “Medium” chip is selected._

In medium and expanded breakpoints, filter chips may contain a trailing icon to directly remove the chip or open a menu of options.

In compact windows, the trailing icon's target area is too small to be accessible on its own. However, if the whole chip can be selected to accomplish the action, the chip is likely still accessible.

_footer: The remove icon helps users remove the filter_
_altText: Filter chip with trailing remove icon._

_footer: Filter chips can open a menu for more filtering options_
_altText: Filter chip with trailing menu icon._

When combined with a menu, the filter chip opens a list of selectable options.

_footer: In compact windows, make sure the whole chip opens the menu. Otherwise, the target area is likely too small to be accessible._
_altText: In a trail selector mobile app, a person selects the whole chip to change the menu selection from Walking to Cycling._

Filter chips can be used with other components, such as search fields and sheets.

_footer: Filter chips can be shown underneath a search field_
_altText: 4 filter chips below search field_

_footer: Use a side sheet to organize many filter chips_
_altText: Filter chips used as tags in a side sheet on a file application._

_footer: Filter chips can wrap to a new row. If there are more than two rows, consider using horizontal scrolling to access them all._
_altText: 6 filter chips wrapping to 2 rows_

_footer: Filter chips can scroll horizontally to show many options_
_altText: 4 filter chips with right-most chip partly offscreen, indicating the chips are horizontally scrollable_

_footer: Filter chips should not present only a single option_
_altText: Single filter chip option beneath the header “Category”_

## Input chips

Input chips represent discrete pieces of information entered by a person, such as Gmail contacts or filter options within a search field.

They enable user input and verify that input by converting text into chips.

_footer: Input chips transform text based on a person's input_
_altText: Contacts transformed into 2 input chips in a draft event invite_

Input chips can support editing to change their contents, such as correcting an email address. In edit mode, the chip reverts back to a text string. Editing can be triggered by interacting with the chip, either by selecting it or by a second interaction after selection.

_footer: Input chips converted from email addresses are editable_
_altText: Contact transformed into input chip in the “To” filed of an email draft._

_footer: Using the backspace key with the cursor before a chip selects the entire chip. The chip can then be deleted when the user taps the backspace key again._
_altText: Animation showing selection of chip with backspace key._

A single field can contain multiple input chips. These chips can be reordered or moved into other fields.

_footer: Multiple input chips in one field_
_altText: 2 input chips in the “To” field of an email draft_

_footer: Input chips being moved from one field to another_
_altText: 1 input chip moved from the “To” field to the “CC” field of an email draft_

Input chips can expand to show more information or options. A container transform transition pattern is used to reveal additional content.

_footer: Input chips can expand_
_altText: Contact input chip expands to show multiple email addresses for that contact_

### Placement

Input chips can be integrated with other components.

They can appear:

- Inline with the cursor in a text field
- In a stacked list
- In a list that can be horizontally scrolled

_footer: Input chips can wrap to a new row if all chips need to be visible_
_altText: 4 input chips wrapping to 2 rows._

_footer: Input chips can scroll horizontally_
_altText: 3 input chips horizontally scrolling._

### Icons & images

The leading icon of input chips can be an icon, logo, or circular image.

_footer: Input chips can contain an icon, logo, or circular image_
_altText: 2 input chips, 1 with leading thumbnail, 1 with leading icon._

The trailing icon is always aligned to the end side of the container. It’s placed:

- On the right for left-to-right (LTR) languages, such as English
- On the left for right-to-left (RTL) languages, such as Farsi

_footer: Input chips can be a more flexible way to filter search results, compared to filter chips_
_altText: 2 input chips with trailing icons following the label text._

_footer: Input chips make it easier to add and remove contacts_
_altText: 3 input chips with trailing icons following the label text._

_footer: Overflowed chips in a text field should follow the same behavior as regular text. An unfocused text field with overflowed content should display the beginning of the input. Tapping the field snaps the user to the end of the input with the cursor and keyboard active._
_altText: Animation of overflowed chips in a text field._

## Suggestion chips

Suggestion chips help narrow a user’s intent by presenting dynamically generated suggestions, such as possible responses or search filters.

Write suggestion chips as nouns or short phrases, depending on context. Avoid exceeding 20 characters when possible.

_footer: The text labels within suggestion chips are most often nouns or short phrases_
_altText: 3 suggestion chips offering ID options in a photo-recognition app._

_footer: Suggestion chips can offer quick-reply options in a chat or email app_
_altText: 3 suggestion chips with automated reply options in a chat app._

_footer: A suggestion chip can help the user start a search_
_altText: 2 suggestion chips with search options “What song is this?” and “What are the lyrics?”_

### Placement

When displaying multiple chips together, place them inline as a row of options, not listed vertically. Overflowing chips should break to the next line. 

If the field is only one row high, chip sets can scroll horizontally instead.

Keep an 8dp minimum space between chips. Chips must also have a minimum 48dp target size, regardless of placement or density. If required, the target can extend beyond the visible container of the chip.

Text labels for chips should be concise. Chip labels will truncate when in a wrapped layout, and when they are wider than the full width of the window.

_footer: - Margins between chips - Margin between each line_
_altText: Diagram of margins between a set of chips._

<!-- section: Accessibility -->

## Use cases

People should be able to do the following with assistive technology:

- Use a chip to perform an action
- Navigate to a chip
- Activate a chip

## Interaction & style

The chip label needs at least 3:1 contrast with the background.

A chip that performs an action should present the same semantics as a button to a platform's accessibility API.

_footer: High contrast helps differentiate chips clustered together_
_altText: The chip label needs to pass 3:1 contrast._

### Horizontal overflow

When there are too many chips to fit on one row, provide a way to display them all at once and avoid scrolling. 

**Reflow method:**Use a filter chip as a leading element to reflow the horizontal list. This should shift down the content below and make room for all chips to show.

_footer: The **Show all**filter chip is used to reflow the list, displaying all chips at once and pushing down the content below_
_altText: Selecting a leading button pushes chips previously reachable only by scroll below, making them all visible._

**Menu method:**Create a leading button to display all chip options in a menu. Use this option to avoid shifting the position of the content below.

Don’t use the menu method on chips with a second action, like a remove icon.

_footer: The **Show all** leading button shows a menu of chip options, keeping the place of content below_
_altText: Selecting a filter button produces a menu with all previously hidden chips visible._

### Avoid applying density by default

Don't apply density to chips by default — this lowers their targets below our best practice of 48x48 CSS pixels. Instead, give people a way to choose a higher density, like selecting a denser layout or changing the theme.

To ensure that this density setting can be easily reverted when it's active, keep all the targets to change it at minimum 48x48 CSS pixels each.

## Keyboard navigation

Keys | Actions |
**Tab** | Moves focus to enabled chip or chip group |
**Space** or **Enter** | Activates, selects, or deselects the focused chip |
**Backspace** or **Delete** | Removes currently focused input chip |
**Arrows** | Moves focus between chips |

## Labeling elements

Element
 |
A11y label
 |
Role (Web)
 |
Role (Android Views (MDC-Android))
 |
Role (Jetpack Compose)
 |

Image / Icon within chip
 |
Hide image
 |
-
 |
-
 |
-
 |

Basic chip (one action)
 |
“{chip content}”
 |
gridcell
 |
button
 |
button
 |

Selectable chip
 |
“{chip content}”
 |
gridcell
 |
radio button
 |
checkbox
 |

Remove icon (no other action)
 |
“Remove {chip content}”
 |
-
 |
-
 |
-
 |

Two actions (e.g., select + remove)
 |
“{chip content}.” Then

“Remove {chip content}”.
 |
button or checkbox
 |
button or checkbox
 |
button or checkbox
 |

The accessibility label for a chip is the chip's label text. Additional actions, like remove, are labeled separately.

_footer: Accessibility tags should include both the label and role_
_altText: Accessibility tags for a chip._

### Multi-select

For multi-select chip sets, **Space** or **Enter** will select the focused chip and allow you to select all of the chips. **Space** or **Enter** will also deselect a focused selected chip.

_footer: While multiple chips can be selected, only one can be in focus_
_altText: Accessibility tags for a multi-select chip._

### Drop-down list

The accessibility label should align with each list item’s text label. 

For list items with text and an icon, the accessibility label should be marked as decorative to avoid redundant verbalizations.

_footer: The accessibility label should be the text label_
_altText: Accessibility tags for a drop-down list chip._

### Input chip remove action

Display the remove icon whenever a chip can be removed. On mobile, if remove is the only chip action, the remove icon isn't necessary. Instead the chip can be removed by selecting it and pressing the **Delete** key on the keyboard.

Each chip is a focusable element. 

- If a chip only has a remove icon, the entire chip and icon are one focusable element.
- If a chip has a second action, like select, then the chip content and remove icon are two separate focusable elements.

_footer: The remove action is focused when the chip can also be selected_
_altText: A focused remove action within a chip._

### Showing chip interactivity

Material requires that chips use a secondary indicator to show that they are interactive in context, allowing users with low vision and cognitive disabilities to see them.

Use one of the following methods: 

-
Add a label before the chip group suggesting interaction, such as **Select type**

_footer: Labels introducing a chip group can indicate that they are selectable_
_altText: Label saying “Select type” above a series of chips, with “Extra soft” selected._

-
Provide interactive page context, such as **Filter results**, indicating chips can be selected to narrow results

_footer: Page context can indicate how search results will be narrowed by selecting chips_
_altText: Page context saying “Filter results” above chips listing different categories._

-
Use the **outline** color role, instead of **outline variant**, to ensure a minimum 3:1 contrast

-
Include an interactive chip label, such as **Turn on lights**, or leading icon

_footer: Chips can show they are interactive with a darker outline color stroke_
_altText: A selectable chip with more pronounced outline stroke._

_footer: Chips can also use a leading icon or label to show interactivity_
_altText: A chip labeled “Turn on lights” with a leading icon related to lights._
