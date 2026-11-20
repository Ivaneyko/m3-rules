# Date pickers

slug: date-pickers  |  updated: 2026-10-22T09:43:17.605Z

<!-- section: Overview -->

-
Date pickers can display past, present, or future dates

-
Three variants: docked, modal, modal input

-
Clearly indicate important dates, such as current and selected days

-
Follow common patterns, like a calendar view

_footer: - Docked date picker - Modal date picker - Modal date input_
_altText: 3 variants of date pickers side-by-side. The docked date picker has an outlined text field above a calendar view. The modal date picker allows people to select a date from a calendar view. The modal date input lets someone type in a date._

## Availability & resources

## Differences from M2

-
Typography and spacing: Titles and labels are larger and have increased spacing to accommodate 48dp target size

-
Color: New color mappings and compatibility with dynamic color

-
Variants: The three variants of date pickers have been renamed to not be device-dependent. The former desktop date picker is now known as the docked date picker. The former mobile date picker and date input are now known as modal date picker and modal date input to reinforce that the user must take an action.

_footer: M2: Date pickers had a drop shadow and different color mappings_
_altText: Old version of a date picker with a white background and shadows._

_footer: M3: Date pickers have larger typography, no shadow, and new color mappings compatible with dynamic color_
_altText: New version of date picker with a colorful background, rounded corners, and no shadows._

<!-- section: Specs -->

## Tokens & specs

Select a component variant below to see its elements, attributes, tokens, and their values.

## Docked date picker

_footer: - Outlined text field - Menu button: Month selection - Menu button: Year selection - Icon button - Weekdays label text - Unselected date - Today’s date - Outside month date - Text buttons - Selected date - Container_
_altText: Diagram indicating the 11 elements of a docked date picker._

_footer: - Outlined text field - Menu button: Month selection (pressed) - Menu button: Year selection (disabled) - Header - Menu - Selected list item - Unselected menu list item - Container_
_altText: Diagram indicating 8 elements of a docked date picker with an open dropdown menu showing the months May to November._

### Docked date picker color

Color values are implemented through design tokens. For design, this means working with color values that correspond with tokens. For implementation, a color value will be a token that references a value. [Learn more about design tokens](/m3/pages/design-tokens/overview/)

_footer: Docked date picker color roles used for light and dark themes:  - Primary - On surface variant - On surface variant - On surface - On surface - Primary - On surface variant - Primary - Surface container high - Primary - On primary_
_altText: 11 color roles of a docked date picker in light and dark themes._

_footer: Docked date picker menu color roles used for light and dark themes:  - Primary - On surface variant - On surface - Outline variant - Surface container high - Surface variant - On surface_
_altText: 7 color roles of a docked date picker menu in light and dark themes._

### Docked date picker measurements

_footer: Docked date picker padding and size measurements_
_altText: Diagram of padding, size, and layout measurements._

_footer: Docked date picker month menu padding and size measurements_
_altText: Diagram of padding, size, and layout measurements._

### Docked date picker configurations

_footer: - Day selection - Month selection - Year selection_
_altText: 3 configurations of docked date picker._

## Modal date picker

_footer: - Headline - Supporting text - Header - Container - Icon button - Icon buttons - Weekdays - Today’s date - Unselected date - Text buttons - Selected date - Menu button - Divider_
_altText: Diagram indicating the 13 elements of a modal date picker in the day selection view._

_footer: - Headline - Supporting text - Header - Container - Icon button - Unselected year - Selected year - Text buttons - Divider - Menu button_
_altText: 10 elements of a modal date picker menu._

_footer: - Headline - Supporting text - Icon button - Header - Text button - Icon button - Weekdays label text - Container - Today’s date - Unselected date - In-range active indicator - In-range date - Month subhead - Selected date - Divider_
_altText: Diagram indicating the 15 elements of a modal date picker when selecting a range of dates._

### Modal date picker color

Color values are implemented through design tokens. For design, this means working with color values that correspond with tokens. For implementation, a color value will be a token that references a value. [Learn more about design tokens](/m3/pages/design-tokens/overview/)

_footer: Modal date picker color roles used for light and dark themes in a day selection menu:  - On surface - On surface variant - Surface container high - On surface variant - On surface variant - On surface - Primary - On surface - Primary - Primary - On surface variant - Outline variant_
_altText: 12 color roles of a modal date picker day selection view._

_footer: Modal date picker color roles used for light and dark themes in a year selection menu:  - On surface - On surface variant - Surface container high - On surface variant - On surface variant - Primary - Primary - Outline variant - On surface variant_
_altText: Diagram of 9 color roles of a modal date picker year selection view._

_footer: Modal date picker range selector color roles used for light and dark themes:  - On surface - On surface variant - On surface variant - Surface container high - Primary - On surface variant - On surface - Primary - On surface - Secondary container  - On secondary container  - Outline variant - On surface variant - Primary_
_altText: Diagram of 14 color roles of a modal date picker when selecting a range of dates._

### Modal date picker measurements

_footer: Modal date picker padding and size measurements_
_altText: Diagram of size and padding measurements in day selection view._

_footer: Modal date picker year selector padding and size measurements_
_altText: Diagram of size and padding measurements in year selection view._

_footer: Modal date picker date range selector padding and size measurements_
_altText: Diagram of size and padding measurements when selecting a range of dates._

### Modal date picker configurations

_footer: - Single date selection - Date range selection - Year selection_
_altText: 3 configurations of a modal date picker shown in dark mode._

## Modal date input

_footer: - Headline - Supporting text - Header - Container - Icon button - Outlined text field - Text buttons - Divider_
_altText: Diagram indicating the 8 elements of a modal date input._

### Modal date input color

Color values are implemented through design tokens. For design, this means working with color values that correspond with tokens. For implementation, a color value will be a token that references a value. [Learn more about design tokens](/m3/pages/design-tokens/overview/)

_footer: Modal date input color roles used for light and dark themes:  - On surface - On surface variant - Surface container high - On surface variant - Primary - Primary - Outline variant_
_altText: Diagram indicating the 7 color roles of a modal date input._

### Modal date input measurements

_footer: Modal date input padding and size measurements_
_altText: Diagram of the padding and size measurements of a modal date input._

### Modal date input configurations

_footer: - Single date input - Date range input_
_altText: 2 configurations of modal date input._

## Element states

_footer: States for date and year selection:   - Default (enabled) - Disabled - Hovered - Focused - Pressed (ripple)_
_altText: Diagram of 5 various states for date and year elements within date pickers._

<!-- section: Guidelines -->

_footer: Docked date picker on desktop_
_altText: A date picker opens in a form UI._

## Usage

Date pickers let people select a date or range of dates. They should be suitable for the context in which they appear.

Date pickers can be embedded into:

-
Dialogs on compact [breakpoints](/m3/pages/breakpoints) like mobile

-
Text field drop-downs on medium and expanded breakpoints like tablet and desktop

_footer: - Date picker dialog on mobile - Date picker text field dropdown on desktop_
_altText: 2 date picker variations: a dialog on mobile and a dropdown within a text field on desktop._

There are three variants of date pickers:

-
Docked date picker

-
Modal date picker

-
Modal date input

_footer: 1. Docked date picker_
_altText: A docked date picker component._

_footer: 2. Modal date picker_
_altText: A modal date picker component._

_footer: 3. Modal date input_
_altText: A modal date input component._

## Anatomy

### Docked date picker

_footer: - Text field - Menu button - Icon button - Label text - Menu - Text buttons - Container_
_altText: 7 elements of a docked date picker._

_footer: 1. Text field  2. Menu button  3. Menu_
_altText: 3 elements of a docked date picker._

### Modal date picker

_footer: - Headline - Supporting text - Container - Icon button - Previous/next month buttons - Day of week labels - Today’s date - Unselected date - Text buttons - Selected date - Menu button - Divider_
_altText: 12 elements of a modal date picker._

_footer: - Headline - Supporting text - Container - Icon button - Unselected year - Selected year - Text buttons - Divider - Menu button_
_altText: 9 elements of a modal date picker._

### Modal date input

_footer: 1. Headline  2. Supporting text 3. Container 4. Icon button 5. Date input 6. Text buttons 7. Divider_
_altText: 7 elements of a modal date input._

### Full-screen date picker

_footer: 1. Headline 2. Supporting text 3. Icon button 4. Container 5. Text button 6. Icon button 7. Divider 8. Day of week labels 9. Today’s date  10. Selected date range  11. Unselected date  12. Text buttons 13. Selected date range start date  14. Month label_
_altText: 14 elements of a full-screen date picker._

## Docked date picker

### Usage

Docked date pickers allow the selection of a specific date and year. The docked date picker displays a date input field by default, and a dropdown calendar appears when the user taps on the input field. Either form of date entry can be interacted with.

Docked date pickers are ideal for navigating dates in both the near future or past and the distant future or past, as they provide multiple ways to select dates.

_footer: Docked date picker on desktop_
_altText: Docked date picker on a desktop screen._

### Behavior

Dates can be added by using a keyboard or by navigating the calendar UI; both options are immediately available when the docked date picker is accessed.

_footer: Docked date picker_
_altText: Docked date picker with a text field and the UI picker showing the selected date._

_footer: Docked date pickers adjust size dynamically_
_altText: Animation of a docked date picker adjusting its size to the selected month._

_footer: The year selection menu replaces the calendar view_
_altText: Animation of a docked date picker changing from calendar view to year selection menu view._

### Month selection

Month selection can be navigated with the corresponding back and next arrows or by tapping the dropdown menu.

_footer: Docked date picker month selection_
_altText: Docked date picker with a list of months May through September. August is selected._

### Year selection

Year selection can be navigated with the corresponding back and next arrows or by tapping the dropdown menu.

_footer: Docked date picker year selection_
_altText: Docked date picker with a list of years 2025 to 2029. 2025 is selected._

## Modal date picker

### Behavior

Modal date pickers navigate across dates in several ways:

- To navigate across months, swipe horizontally
- To navigate across years, scroll vertically
- To access the year picker, tap the year

Don’t use a modal date picker to prompt for dates in the distant past or future, such as a date of birth. In these cases, use a modal input picker or a docked date picker instead.

_footer: To navigate across months, swipe horizontally_
_altText: Animation of a docked date picker being swiped horizontally to navigate across months._

_footer: To navigate across years, tap the year picker and scroll vertically_
_altText: Animation of a year picker in a docked date picker being tapped and scrolled vertically to navigate across years._

### Date range selection

Date range selection provides a start and end date. Common use cases include:

- Booking a flight
- Reserving a hotel

Modal date pickers navigate across date ranges in several ways:

- To select a range of dates, tap the start and end dates on the calendar
- To navigate across months, scroll vertically

_footer: Modal date range picker_
_altText: Animation of a date range being selected on a modal date range picker._

_footer: Modal date range picker with vertical scroll_
_altText: Animation of a modal date range picker being scrolled vertically to navigate across months._

## Modal date input

### Usage

Modal date inputs allow the manual entry of dates using the numbers on a keyboard. People can input a date or a range of dates in a dialog.

_footer: Modal date with manual input_
_altText: A modal date input component._

_footer: For dates that don’t require a calendar view, the modal date input can be the default view_
_altText: A modal date input component showing a day in 1979, which would be difficult to choose using UI._

_footer: Alternatively, a text field with appropriate hint text can prompt for dates, such as in a form_
_altText: A modal date input with hint text for entering the date._

### Behavior

You can swap between the modal date picker and modal date input using the edit or calendar icon.

_footer: Switching from a modal date picker to a mobile date input for selecting ranges_
_altText: Animation of a modal date picker switching to a modal date input when the range selection icon is tapped._

_footer: Switching from a modal date picker to a modal date input for selecting a single date_
_altText: Animation of a modal date picker switching to a modal date input when the edit icon is tapped._

### Compact breakpoint

On compact [breakpoints](/m3/pages/breakpoints/overview), such as mobile, a full-screen modal date picker is recommended to increase readability and touch target size. It can cover the entire screen.

_footer: A full-screen modal date picker on mobile_
_altText: A full-screen view of modal date picker on a mobile device._

### Medium and expanded breakpoints

The docked date picker works best for medium and expanded breakpoints. It displays a date input field by default, and a dropdown calendar appears when a person taps on the input field. A person can interact with either form of date entry.

Docked date pickers are ideal for navigating dates in both the near future or past, and in the distant future or past, as they provide multiple ways to select dates.

_footer: A docked date picker with a full calendar view is best used on larger devices_
_altText: A docked date picker displaying a full calendar view on a large screen device._

### Selection

Selection is indicated through color, drawing visual attention. In date ranges, start and end dates are selected, while dates in-between appear connected with a subtle highlight.

_footer: Differences between selected the selected date range (August 17–23) and today's date (August 5) are shown through color and fill_
_altText: Animation of a modal date range picker showing visual differences between selecting a date range and today's date._

### Appearing and disappearing

Like other kinds of dialogs, modal date pickers use an enter and exit transition pattern to appear on the screen.

To exit a date picker, the input can either be confirmed (**OK**) or dismissed (**Cancel**). Interacting outside of the dialog will also dismiss the time picker. Unless one of these actions is taken, a time picker will continue to retain focus. Mobile full-screen pickers also have an additional close affordance (x) icon button and **Save** confirmation.

Docked date pickers appear just below the input field.

_footer: Modal date pickers can be dismissed through interacting with content outside the dialog, or with the action buttons in the lower right_
_altText: Animation of a modal date picker's enter and exit transition._

_footer: Interacting with the input for a docked date picker makes the calendar view appear below_
_altText: Animation of a docked date picker's calendar icon being clicked making the calendar view appear for date selection._

### Responsive layout

The sizing of the docked and modal date picker components don’t scale responsively to different breakpoints.

_footer: Don’t scale the date picker responsively to a larger size_
_altText: Docked date picker enlarged on a large screen responsively._

<!-- section: Accessibility -->

## Use cases

People should be able to:

- Enter dates manually by inputting text, without using the picker
- Use multiple input methods, making it accessible to those using assistive technology

On the docked date picker, the text field can be used for input.
On the modal date picker, the date input option should be available using the edit icon.

## Interaction & style

The edit icon indicates the ability to switch to the modal date input.

Interactive targets for all elements meet Material's 48x48dp minimum touch target requirement. Increasing density would negatively impact accessibility by limiting tappable/clickable targets.

_footer: The edit icon indicates the ability to switch to the modal date input_
_altText: Date picker with the edit icon focused._

_footer: Touch targets are 48x48dp_
_altText: Touch target used to select September 17 to 23 on a date picker._

## Date entry methods

The date entry component offers two ways to enter a date:

- Direct text entry into a text field
- Through the date picker

The calendar icon is the exclusive entry point for the date picker.

This improves efficiency for a screen reader and other keyboard users, as it makes interaction with the date picker optional and reduces the amount of key presses required to input a date.

Each input is a separate tab stop, which improves discoverability of the control.

_footer: Entering a date either through direct text entry or the date picker_
_altText: Text input field next to a date picker icon provides a choice of how to enter the date._

## Accessible date input

Automatically format the date after the user hits “Enter“ or navigates out of the text field. Don't automatically format the date by adding slashes or other special characters while the user is typing (also known as input masks). This can cause confusion for people using screen readers because it changes what they typed.  

To reduce errors, accept a range of formats including dashes, spaces, slashes, dots, and 0 to the left of a single digit month/day. This is especially helpful for assistive technology users who might be more prone to errors when interacting with complex inputs.

_footer: The text field's logic can adapt to the user's actual input format, applying the correct formatting after the user has completed their text entry_
_altText: Numeric entry 08172323 automatically formatted to 08/17/2023._

## Optional **Clear** button

If it's not needed for your use case, remove the **Clear** button from the screen to reduce the number of tab stops for keyboard users.

_footer: Remove non-critical actions to reduce the number of tab stops for keyboard users_
_altText: Optional clear button on lower left corner of a date picker._

## Affordance for keyboard shortcuts

Ensure keyboard shortcuts are readily available for keyboard and screen reader users by providing the shortcut key in the tooltip. It should be included in the hint description to be read out by the screen reader.

As shown here, the previous year button is interactive and can therefore be focused via the keyboard. Upon focus, the tooltip explains the behavior of the button and shows the shortcut key.

_footer: Keyboard tooltip example for date picker_
_altText: Shift + Page up is the keyboard shortcut to go to the previous year on a date picker._

## Truncated labels & tooltips

Truncating labels isn't ideal, but tooltips allow the full text to be shown on hover or keyboard focus.

Days of the week are not interactive and are therefore not focusable via keyboard, yet the tooltip is available on hover. The date picker relies on the conventionality of these abbreviations for some assistive technology users.

_footer: Days of the week are not navigable via keyboard, so the tooltip is shown only on pointer hover_
_altText: A pointer hover over the “T” day on a date picker produces the tooltip “Tuesday.”_

## Color contrast between dates

Dates should have contrast of at least 4.5:1 between the link text colors and the background.

_footer: Dates pass the 4.5:1 contrast minimum_
_altText: A date picker’s label text passes the color contrast minimum of 4.5:1._

## Keyboard navigation

**Keys** | **Actions** |
Enter/return | Enter/return |
Enter/return | Closes the calendar and saves the selected date |
Page up/down | Move to the same date on next/previous month |
Home/End     | Move to the first day of the month |
Shift + Page up/down | Moves to the same date in the next/previous year |
Shift + M | Moves to the month list dropdown |
Shift + Y | Moves to the year list dropdown |

## Labeling elements

The text field's accessibility label should clearly state the purpose of the input (for example, event date or reservation date) and should match the placeholder text when the field is empty.

The helper text (below the text field) should specify the date format (for example, MM/DD/YYYY or YYYY/MM/DD) and act as a description for the text field. The default helper text is "MM/DD/YYYY," but this can be customized.

_footer: The accessibility label clearly states the kind of input as an event date_
_altText: Text field accessibility labels._

**Element** | **A11y label** | **Role** |
Previous / next month and year | “{label}” | Button |
Month and year dropdowns | “{label}” | Button |
Days of the week | Column header |  |
Month grid | Grid |  |

## Screen reader verbalizations

To support screen reader users, labels are used to enumerate the complete date. This allows screen reader users to hear the full context of "Monday, August 17” instead of just part of the date.

_footer: Screen readers will state the full day, month, date, and year instead of just the number 17_
_altText: Current date label providing day, month, and year for screen reader accessibility._
