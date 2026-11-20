# Snackbar

slug: snackbar  |  updated: 2026-07-28T08:03:08.607Z

<!-- section: Overview -->

- Snackbars shouldn’t interrupt the user’s experience
- Usually appear at the bottom of the UI
- Can disappear on their own or remain on screen until the user takes action

_altText: Diagram of snackbar placement_

## Availability & resources

## Differences from M2

- Color: New color mappings and compatibility with dynamic color
- Behavior: Clarified that snackbars can either appear temporarily (dismissive) or persist until the user takes an action (non-dismissive)

_footer: Snackbars have new color mappings_
_altText: Example of snackbar on screen bottom_

<!-- section: Specs -->

_footer: - Container  - Icon (optional close affordance)  - Action (optional)  - Supporting text_
_altText: Diagram of snackbar indicating the four parts of its anatomy_

## Tokens and specs

Browse the component elements, attributes, tokens, and their values. [Learn more about design tokens](/m3/pages/design-tokens/overview)

## Color

Color values are implemented through design tokens. For design, this means working with color values that correspond with tokens. For implementation, a color value will be a token that references a value. [Learn more about design tokens](/m3/pages/design-tokens/overview)

_footer: Snackbar color roles used for light and dark schemes:  - Inverse surface - Inverse on surface - Inverse primary - Inverse on surface_
_altText: Diagram of snackbar indicating color and inverse text and labels_

## Measurements

_footer: Snackbar padding and size measurements_
_altText: Diagram of snackbar with action_

## Configurations

_footer: - Single line - Single line with action - Two lines - Two lines with action - Two lines with longer action_
_altText: 5 snackbar configurations._

<!-- section: Guidelines -->

_altText: Snackbar at the bottom of a mobile device._

## Usage

Snackbars inform users of a process that an app has performed or will perform. They appear temporarily, towards the bottom of the screen.

They shouldn't interrupt the user experience. People can browse the page content without being required to interact with the snackbar.

**Frequency**
Only one snackbar may be displayed at a time.

**Actions**
A snackbar can contain a single action. "Dismiss" or "cancel" actions are optional.

_altText: Snackbar showing 'Email archived' text with an 'Undo' text button._

### Similar components

Dialogs are also designed to show important messages.

Choose the right component based on the importance of the message. This component messaging strategy can help avoid overusing snackbars.

_footer: Dialogs require immediate action_
_altText: Dialog on a phone requiring the user to sign in to continue. Dismissing prevents them from progressing._

**When to use snackbars**
Snackbars communicate messages that are minimally interruptive and don’t require user action.

Component | Priority | User action |
Snackbar | Low priority | Optional: Snackbars disappear automatically |
Dialog | High priority | Required: Dialogs block app usage until the user takes a dialog action or exits the dialog (if available) |

### Accessibility requirements for web

On web, auto-dismissing snackbars are inaccessible for people with low vision or who require additional time to perceive information. This can be solved in 2 ways:

#### 1. Add inline feedback

Information in auto-dismissing snackbars must also be communicated using another accessible method inline or near the action that triggered the snackbar. 

For example, update the label on a "Save" button to “Saved”, and trigger an auto-dismissing snackbar that communicates the same message. 

#### 2. Make the snackbar actionable

Alternatively, add actions to the snackbar so it doesn't dismiss until acted on.

_footer: Also communicate snackbar information near the action that triggered the snackbar_
_altText: A button labelled "Save" changes to "Saved" after a moment. A snackbar confirms all changes are saved._

## Anatomy

_footer: - Container - Supporting text - Action (optional) - Close button (optional)_
_altText: 4 elements of a snackbar._

### Text label

Snackbars contain a text label that directly relates to the process being performed. In compact breakpoints, the text label can contain up to two lines of text.

_footer: Text labels are short, clear updates on processes that have been performed_
_altText: Snackbar on a mobile device reading: "Saved in Vacation album"._

_footer: Keep the snackbar text label to one line long when possible_
_altText: Snackbar on mobile with one line of content._

_footer: On mobile, the text label can be up to two lines long_
_altText: Snackbar on mobile with two lines of content._

_footer: Avoid adding icons to snackbars. If your message needs an icon, consider using a different component such as a dialog._
_altText: Snackbar on mobile with an icon and one line of content._

_footer: Avoid using stylized text or inline links in snackbars; they can add unwanted complexity. If your message needs a link, add a button instead, or use a different component._
_altText: Snackbar on mobile with bolded and hyperlinked words._

### Container

Snackbars are displayed in rectangular containers with a grey background. Containers should be completely opaque, so that text labels remain legible.

_footer: Snackbar containers use a solid background color with a shadow to stand out against content_
_altText: Snackbar showing a light text label on a black color container._

_footer: The text label shouldn’t share the same color as the text button_
_altText: A snackbar with button text the same color as supporting text._

_footer: Don’t use a filled or elevated button in a snackbar, as it draws too much attention_
_altText: A snackbar with the action in elevated style._

_footer: In wide layouts, extend the container width to accommodate longer text labels_
_altText: An extended snackbar on tablet with a long text label._

_footer: An app can apply slight transparency to the container background, as long as text remains clearly legible_
_altText: Snackbar with a slightly transparent container and a clearly visible text label._

_footer: Avoid significantly altering the shape of a snackbar container_

### Action

Snackbars can display a single text button that lets users take action on a process performed by the app. Snackbars shouldn’t be the only way to access a core use case, to make an app usable.

_footer: To distinguish the action from the text label, text buttons should display colored text_
_altText: A snackbar container with rounded corners._

_footer: If an action is long, it can be displayed on a third line_
_altText: Snackbar with a long text button displayed on a third line._

_footer: To allow users to amend choices, display an "Undo" action_
_altText: Snackbar with a single text button labeled undo._

_footer: A dismiss action is unnecessary, as snackbar disappears on their own by default_
_altText: Snackbar with a single text button labeled dismiss._

## Placement

### At the bottom of a UI

Snackbars should be placed at the bottom of a UI, in front of the main content. In some cases, snackbars can be nudged upwards to avoid overlapping with other UI elements near the bottom, such as FABs or docked toolbars.

Avoid placing a snackbar in front of frequently used touch targets or navigation.

_footer: Place a snackbar in front of the main content_
_altText: Snackbar appearing in front of photo content._

_footer: Avoid placing snackbars in front of navigation components_
_altText: Snackbar placed in front of the navigation components._

To ensure accessibility for keyboard users on the web, avoid positioning the snackbar in a way that completely obscures actionable elements. Blocking elements makes it difficult to know what is being focused and selected.

_footer: Adjust the size of the snackbar to avoid blocking elements in focus_
_altText: Thin snackbar in front of a focused element that is still visible._

_footer: Don’t let the snackbar fully cover elements in focus_
_altText: Larger snackbar that is obscuring a focused element._

Snackbars can span the entire width of the screen only when a UI does not use persistent navigation components like app bars or navigation bars.

Snackbars that span the entire width of a UI can push up FABs when they appear.

_footer: Snackbars can span the entire width of a UI. However, they should not appear in front of navigation or other important UI elements like floating action buttons._
_altText: Snackbar spanning the width of a mobile device is placed in front of the navigation components and FAB._

**Snackbars and floating action buttons (FABs)**

Snackbars should appear above FABs.

_footer: Snackbar above a FAB_
_altText: Snackbar placed above a FAB on a mobile device._

_footer: Don’t place a snackbar in front of a FAB_
_altText: Snackbar placed in front of a FAB on a mobile device._

_footer: Don’t place a snackbar behind a FAB_
_altText: Snackbar placed behind a FAB on a mobile device._

## Responsive layout

### Compact breakpoint

In compact breakpoints, snackbars should expand vertically from 48dp to 64dp to accommodate one or two lines of text, while maintaining a  fixed distance from the leading, trailing, and bottom edges of the screen.

_altText: Snackbar with its label text extending to the second line and maintaining fixed distance from the edges of a mobile device._

### Medium & expanded breakpoints

On medium and expanded breakpoints, like tablet and desktop, snackbars should scale horizontally to accommodate longer text strings, keeping in mind that the ideal line length for text is typically between 40-60 characters.

Snackbars use a flexible distance from the trailing edge of the screen. Whenever possible, snackbars on medium and large displays should aim for a single line of text with an  optional button.

_altText: A horizontally expanded snackbar placed at the bottom of screen on a medium-size device._

In wider layouts, snackbars can be left-aligned or center-aligned if they are consistently placed on the same spot at the bottom of the screen.

_footer: Left-aligned snackbar_
_altText: A left-aligned snackbar placed at the bottom of screen on a medium-size device._

_footer: Center-aligned snackbar_
_altText: A center-aligned snackbar placed at the bottom of screen on a medium-size device._

_footer: Don’t place snackbars flush to one edge of the layout_
_altText: Snackbar displayed at the left edge of the screen, near the bottom, on a medium-sized device._

_footer: Don’t place consecutive snackbars side by side or next to one another_
_altText: 2 snackbars placed side-by-side at the bottom of the screen on a medium-size device._

## Behavior

### Appearing and disappearing

Snackbars appear without warning, but they don’t block users from interacting with page content.

Snackbars without actions can auto-dismiss after 4–10 seconds, depending on platform. Avoid using auto-dismissing snackbars on web unless there's also inline feedback.

_altText: Snackbar without an action button appearing and disappearing within 4 seconds from the screen of a mobile device._

Snackbars with actions should remain on the screen until the user takes an action on the snackbar, or dismisses it.

_altText: Snackbars with actions should remain on the screen until the user takes an action on the snackbar, or dismisses it._

### Consecutive snackbars

Consecutive snackbars must appear one at a time. 

Snackbars without actions appear and disappear automatically, while those with actions remain on screen until dismissed. However, a snackbar with updated information can immediately replace an outdated snackbar.

_altText: Two snackbars appear sequentially on a mobile device. The first includes an action button._

_footer: Don’t stack snackbars on top of one another_
_altText: 2 snackbars appear sequentially on a mobile device and are stacked on top of one another. The first includes an action button._

_footer: Don’t animate other components along with snackbar animations, such as the floating action button_
_altText: FAB's position is displaced when a snackbar enters the screen of a mobile device._

<!-- section: Accessibility -->

### Use cases

Users should be able to:

- Be alerted, but not disrupted, when a snackbar appears
- Move focus to an actionable snackbar
- Take action on a snackbar using assistive technology

### Interaction & style

Snackbars with actions shouldn't auto-dismiss. This way, users can read and interact with it at their own pace.

Snackbars without actions can auto-dismiss after a sufficient amount of time, however this can still present difficulties on web without additional feedback. 

Each platform has its own requirements for auto-dismiss durations, however common acceptable durations are 4–10 seconds.

_footer: Auto-dismissing snackbars should remain on screen long enough to read the information_
_altText: A snackbar saying "Email marked as read" with no button._

Snackbars use a color intended to stand out against UI elements. Use the default color mapping to avoid color conflict issues.

_footer: Snackbar should visually stand out_
_altText: Snackbar with a dark container on a UI page in light theme._

### Accessibility requirements on web

On web, auto-dismissing snackbars can be difficult to navigate for people with low vision or who require additional time to perceive information. This information can be made clearer for all users in two ways:

#### 1. Add inline feedback

Information in auto-dismissing snackbars must also be communicated inline or near the action that triggered the snackbar.

For example, update the label on a "Save" button to “Saved”, and trigger an auto-dismissing snackbar that communicates the same message.

#### 2. Make the snackbar actionable

Alternatively, add actions to the snackbar so it doesn't dismiss until acted on. Actionable snackbars shouldn't auto-dismiss.

_footer: Communicate snackbar information near the action that triggered the snackbar_
_altText: A "save" button changes to say "saved", alongside a snackbar that confirms changes were saved._

Note: Material Web doesn't yet include the snackbar component. This guidance still applies to custom-made snackbars.

### Focus

Snackbars have the following focus requirements:

- When a snackbar appears, announce the message but don't move focus.
- Don't automatically move focus.
- Don't trap focus in the snackbar. Users should be able to freely navigate in and out.
- On web, a shortcut should exist for users to move focus to snackbars with actions (like Alt+G). Ensure that this shortcut is clearly documented, like in a help article.

_footer: Focus returns from the snackbar (1) to the previously focused element (2)_
_altText: Taking a menu item action moves focus to a snackbar. Moving focus out of the snackbar returns it to the same menu item._

Focus exits the snackbar differently per platform:

- Ideally, focus should either return to the element that triggered the snackbar, or go to the next most logical element on the page.
- On Android Compose, focus may move to the nearest visible element, or to the first actionable item on the page.

_footer: If the previously focused element is no longer on the page, focus should move from the snackbar (1) to the next most logical element (2)_
_altText: Confirming in a dialog moves focus to a snackbar. Moving focus out of the snackbar returns it to a page element._

### Keyboard navigation
Keys | Actions |
Tab | Moves focus between interactive elements |
Esc | Dismisses the snackbar when in focus |

### Labeling elements

Snackbars should be announced once they appear on the screen, but shouldn’t grab focus or prevent people from completing their current task. 

- On Android and web, use a live region with a polite (queued) announcement instead of an assertive announcement.
- On iOS 17+, snackbars use polite announcements by default.

If a snackbar appears when the app is launched, it should be announced after the page’s title, but not receive focus.

_footer: Snackbars are announced when they appear, but don't trap focus_
_altText: Snackbar accessibility label examples._
