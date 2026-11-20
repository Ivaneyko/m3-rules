# Dialogs

slug: dialogs  |  updated: 2026-07-28T07:11:33.307Z

<!-- section: Overview -->

-
Use dialogs to make sure users act on information

-
Two variants: basic and full-screen

-
Should be dedicated to completing a single task

-
Can also display information relevant to the task

-
Commonly used to confirm high-risk actions like deleting progress

_footer: - Basic dialog - Full-screen dialog_
_altText: Basic and full-screen dialog._

## Availability & resources

## Differences from M2

- Color: New color mappings and compatibility with dynamic color
- Layout: Greater padding to account for the increased corner-radius and title size
- Position: Option for custom basic dialog positioning
- Shape: Increased corner-radius
- Typography: Larger and darker headline

_footer: New updates to color, layout, position, shape, and typography_
_altText: Basic dialog with rounded corner, larger headline._

<!-- section: Specs -->

## Tokens & specs

Select a component variant below to see its elements, attributes, tokens, and their values.

## Basic dialogs

_footer: - Container - Icon (optional) - Headline (optional) - Supporting text - Divider (optional) - Button label text - Scrim_
_altText: Anatomy diagram numbering dialog elements._

### Basic dialog color

Color values are implemented through design tokens. For design, this means working with color values that correspond with tokens. For implementation, a color value will be a token that references a value. [Learn more about design tokens](/m3/pages/design-tokens/overview)

_footer: Basic dialog color roles used for light and dark themes:  - Surface container high - Secondary - On surface - On surface variant - Primary - Scrim_
_altText: Color mapping diagram labeling 6 color roles across the dialog and scrim._

### Basic dialog measurements

_footer: Basic dialog padding and size measurements_
_altText: Annotated diagram showing padding values._

Attribute | Value |
Container shape
 | 28dp corner radius |
Container height
 | Dynamic |
Container width
 | Min 280dp; Max 560dp |
Divider height
 | 1dp |
Icon size
 | 24dp |
Minimum width
 | 280dp  |
Maximum width
 | 560dp |
Alignment with icon
 | Center-aligned |
Alignment without icon
 | Start-aligned |
Top/Left/right/bottom padding
 | 24dp |
Padding between buttons
 | 8dp |
Padding between title and body
 | 16dp |
Padding between icon and title
 | 16dp |
Padding between body and actions
 | 24dp |

## Full-screen dialogs

_footer: - Container - Header - Icon (close affordance) - Headline (optional) - Text button - Divider (optional)_
_altText: Diagram numbering 6 full-screen dialog elements._

### Full-screen dialog color

Color values are implemented through design tokens. For design, this means working with color values that correspond with tokens. For implementation, a color value will be a token that references a value.

_footer: Full-screen dialog color roles used for light and dark themes:  - Surface container high - On surface - On surface - Primary - On surface variant_
_altText: Color mapping diagram shows 5 callout markers across the dialog._

### Full-screen dialog measurements

_footer: Full-screen dialog padding and size measurements_
_altText: Diagram noting layout measurements for padding values, title, height, and action regions._

Attribute | Value |
Container shape
 | 0dp corner radius |
Container height
 | Dynamic |
Container width
 | Container width; Max 560dp |
Header height
 | 56dp |
Header width
 | Container width |
Headline text alignment
 | Start-aligned |
Divider height
 | 1dp |
Icon (close affordance) size
 | 24dp |
Bottom action bar height
 | 56dp |
Bottom action bar width
 | Container width |
Top/left/right padding
 | 24dp |
Padding between elements
 | 8dp |

<!-- section: Guidelines -->

_footer: A basic dialog_
_altText: Basic dialog in isolation_

## Usage

A dialog is a modal window that appears in front of app content to provide critical information or ask for a decision. Dialogs disable all app functionality when they appear, and remain on screen until confirmed, dismissed, or a required action has been taken.

Dialogs are purposefully interruptive, so they should be used sparingly. A less disruptive alternative is to use a dropdown menu, which provides options without interrupting a user’s experience.

_footer: There are two variants of dialogs:  - Basic dialog  - Full-screen dialog_
_altText: Diagram of basic and full-screen dialogs._

_footer: Use dialogs for prompts that block an app’s normal operation, and for critical information that requires a specific user task, decision, or acknowledgement_
_altText: Dialog in front of app content._

_footer: Don’t use dialogs for low- or medium-priority information. Instead use a snackbar, which can be dismissed or disappear automatically._
_altText: Low-priority dialog in front of app content._

### Similar components

Snackbars are also designed to show important messages.

Choose the right component based on the importance of the message. This component messaging strategy helps avoid overusing dialogs.

_footer: Snackbars can disappear automatically_
_altText: Snackbar on a phone saying that new photos were synced to the device. No buttons exist._

Component | Importance | Action needed |
Snackbar | Low importance | Optional: Snackbars may not have a button, and can disappear automatically |
Dialog | High importance | Required: Dialogs block the main content until an action is confirmed |

## Anatomy

### Basic dialog

_footer: - Container - Icon (optional) - Headline (optional) - Supporting text - Divider (optional) - Buttons label text - Scrim_
_altText: Diagram of 7 elements of basic dialog._

### Full-screen dialog

_footer: - Container - Header region - Icon (close affordance) - Headline (optional) - Button label text - Divider (optional)_
_altText: 6 elements of full-screen dialog._

### Container and scrim

Dialog containers appear above other screen elements and hold the dialog’s headline, text, buttons, and list items.

To focus attention on the dialog, surfaces behind the container are scrimmed with a temporary overlay to make them less prominent.

_footer: Basic dialogs appear over a background scrim_
_altText: Basic dialog shown above a scrim overlay that reduces the prominence of the background elements._

### Headline (optional)

A dialog’s purpose should be communicated by its headline and buttons or actionable items.

Headlines should:

- Contain a brief, clear statement or question
- Avoid apologies (“Sorry for the interruption”), alarm (“Warning!”), or ambiguity (“Are you sure?”)

_footer: This dialog title poses a specific question, concisely explains what’s involved in the request, and provides clear actions_
_altText: Dialog title asking “Use location service?”_

_footer: Don’t use dialog titles that pose an ambiguous question_
_altText: Dialog title asking “Are you sure?”_

Headlines should always be succinct. They can wrap to a second line if necessary, and be truncated.

In full-screen dialogs, long headlines or headlines of variable lengths (such as translations), can be placed in the content area instead of the app bar.

_footer: Avoid placing long headlines in a full-screen dialog’s app bar (1), as the truncated text may lead to misunderstanding_
_altText: Example full-screen dialog with truncated long headline._

_footer: Find ways to shorten app bar text, and place longer headlines into the content area (1) of a full-screen dialog_
_altText: Example full-screen dialog with short headline, and longer text in content area._

### Buttons

Dialog actions are most often represented as buttons and allow users to confirm, dismiss, or acknowledge something.

Buttons are aligned to the trailing edge of the dialog for easier interaction. The confirmation button is always closest to the edge. 

Button alignment responds automatically for right-to-left languages, where the confirmation button is aligned to the left edge.

_footer: Disable confirming actions (1) until a choice is made. Dismissive actions are never disabled._
_altText: Dialog with the confirmation button disabled because a required radio selection is missing._

_footer: Don’t place dismissive actions (1) to the right of confirming actions. Instead, place them to the left of confirming actions._
_altText: Dialog with the dismissing action "Cancel" on the right of the 2 buttons._

_footer: A single action may be provided only if it’s an acknowledgement_
_altText: Dialog with a single-action button: “OK”._

_footer: Avoid presenting people with unclear choices. **Cancel** doesn't make sense here because no clear action is proposed._
_altText: Dialog with 2 button choices: “Cancel”, “Got it”._

Dialogs should contain a maximum of two actions.

- If a single action is provided, it must be an acknowledgement action
- If two actions are provided, one must be a confirming action, and the other a dismissing action

_footer: Display two text buttons next to one another_
_altText: Dialog with 2 buttons side-by-side: “Disagree”, “Agree”._

_footer: Stacked buttons accommodate longer button text, but take up more room. Confirming actions appear above dismissive actions._
_altText: Dialog with 2 stacked buttons: “Turn on speed boost”, “No thanks”._

Providing a third action, such as **Learn more**, is not recommended as it navigates the user away from the dialog, leaving the dialog task unfinished.

Rather than adding a third action, an inline expansion can display more information. If more extensive information is needed, provide it prior to entering the dialog.

_footer: The **Learn more** action (1) navigates away from this dialog, potentially leaving it in an indeterminate state_
_altText: Dialog with 3 text buttons: Learn more, Disagree, Agree._

## Basic dialog

Basic dialogs interrupt users with urgent information, details, or actions. Common use cases for basic dialogs include alerts, quick selection, and confirmation.

_footer: Basic dialogs require a person to take action before it will close_
_altText: Example of basic dialog action request._

_footer: Basic dialogs can give people the ability to provide confirmation of a choice before committing to it_
_altText: Example of basic dialog confirmation._

Basic dialogs most often appear as alerts or lists, but can have a variety of layouts and component combinations, including lists, date pickers, and time pickers.

_footer: Date picker dialogs allow people to tap a date, then confirm it by tapping **OK**_
_altText: Date picker dialog._

_footer: Time picker dialogs allow people to move the clock hand and then confirm by tapping **OK**_
_altText: Time picker dialog._

## Full-screen dialog

Full-screen dialogs fill the entire screen, containing actions that require a series of tasks to complete. One example is creating a calendar entry with the event title, date, location, and time.

Because they take up the entire screen, full-screen dialogs are the only dialogs over which other dialogs can appear.

Use a [container transform](/m3/pages/motion-transitions/transition-patterns#b67cba74-6240-4663-a423-d537b6d21187) pattern to transition a FAB into a full-screen dialog.

_footer: Full-screen dialogs contain actions that require a series of tasks to complete_
_altText: A FAB transitioning into a full-screen dialog._

When a full-screen dialog is closed without being saved, a basic dialog appears in front of it to confirm selections should be discarded without saving changes.

_footer: A basic modal dialog appears when a full-screen dialog is closed without being saved_
_altText: Closing a full-screen dialog triggers a basic dialog asking to discard the changes._

Full-screen dialogs may be used for content or tasks that meet any of these criteria:

-
Dialogs that include components which require keyboard input, such as form fields

-
When changes aren’t saved instantly

-
When components within the dialog open additional dialogs

Full-screen dialogs are for compact breakpoints only, like mobile devices. For medium and expanded breakpoints, use a basic dialog.

### Saving selections

To save a selection in a full-screen dialog, use **Save**.  The close icon or dismissive action, such as **Cancel** or **Back**, should close the dialog.

### Confirmation

The confirmation action should be clear about what happens next, like **Send** or **Create**. Avoid using vague terms like **Done**, **OK**, or **Close**. Only trigger an additional basic dialog if the action fails. Don’t disable the confirmation button.

_footer: A **Create** button is clear that the event will be created_
_altText: Full-screen dialog with create button as confirmation action._

_footer: Don’t trigger a basic dialog when the confirming action is selected_
_altText: Full-screen dialog with an additional basic dialog asking if you want to create this event._

### Dismissing

When someone dismisses a full-screen dialog, a basic dialog should appear to confirm that they want to discard the unsaved changes.

_footer: Use a basic dialog to confirm that the user wants to discard unsaved changes_
_altText: A basic dialog with options to either keep editing or discard unsaved changes._

_footer: Don’t use the confirming action to dismiss the full-screen dialog_
_altText: A full-screen dialog with a Close button as the confirming action._

### Error messages

Errors about the dialog fields should always appear inline where they occur. Some components like text fields have built-in error messaging, while others like checkboxes and radio buttons need error messages to be added next to the fields.

General errors such as network issues preventing saving or submitting should appear in a basic dialog when the confirming action fails.

Error messages should clearly but briefly explain the source of the error and how to fix it. Show all errors on the page at once so people can fix everything before trying again.

_footer: Error messages related to the fields should be displayed inline_
_altText: A full-screen dialog with inline error messages for text fields._

_footer: Errors unrelated to the fields can be displayed in a basic dialog_
_altText: A basic dialog mentioning that entries were not saved due to a connection issue._

### Dialog windows

Launching a full-screen dialog temporarily resets the app’s perceived elevation, allowing simple menus or dialogs to appear above the full-screen dialog. They cover the screen and don’t appear as a floating modal window.

### Navigation

Because full-screen dialogs can only be completed, dismissed, or closed, the close “X” icon button should be the only navigation option in the app bar.

## Adaptive design

Dialogs can swap variants as the breakpoint changes. For example, a full-screen dialog can change into a basic dialog at larger breakpoints.

_footer: - Full-screen dialog on mobile - Dialog on a tablet_
_altText: Example of full-screen dialog on left, simple dialog on right_

### Medium breakpoint

Basic dialogs appear in a center position by default.

Their position can be overridden to provide a more ergonomic experience.

_footer: Dialog custom positioned on the right side of the screen_
_altText: Basic dialog on tablet photos app._

### Expanded breakpoint

Dialogs on expanded breakpoints, like desktop, are modal windows above a scrim. This puts the dialog at the forefront of a person's view, calling attention to the action prompted in the dialog.

_footer: Desktop dialogs call attention to the required action_
_altText: Example of desktop dialog._

Basic dialogs can be custom-positioned anywhere on larger screens, respecting margins to prevent edge collision.

_footer: Custom placement area for basic dialogs that respects a 56dp margin from the edges of the screen_
_altText: Basic dialog position diagram._

## Behavior

### Appearing

Dialogs appear without warning, requiring users to stop their current task. They should be used sparingly, as not every choice or setting warrants interruption.

Dialogs use an [enter and exit](/m3/pages/motion-transitions/transition-patterns#e1c2a650-d7a4-4a6d-9025-e6b7845291ed) transition pattern to appear on screen.

_footer: A dialog appears with an enter and exit transition_
_altText: Dialog entering and exiting screen using fade transition._

### Position

Dialogs retain focus until dismissed or an action has been taken, such as choosing a setting. They shouldn’t be obscured by other elements or appear partially on screen, with the exception of full-screen dialogs.

_footer: Dialogs shouldn’t be obscured by other elements except for full-screen dialogs_
_altText: A basic dialog covering a full-screen dialog._

### Scrolling

Most dialog content should avoid scrolling. Even when scrolling is required, the dialog title is pinned at the top, with buttons pinned at the bottom. This ensures selected content remains visible alongside the title and buttons, even upon scroll.

Dialogs don’t scroll with elements outside of the dialog, such as the background.

_footer: When viewing a scrollable list of options, the dialog title and buttons remain fixed_
_altText: Example of fixed dialog title and buttons._

starNote:This is a rapidly changing space. Guidelines are primarily intended for designers at this time. Find what’s implemented in code in the [design kit](https://www.figma.com/community/file/1035203688168086460).

Extended reality (XR) introduces spatial capabilities, such as using depth to make dialogs stand out from the background. Currently, spatial dialogs are only available in full space. For home space, follow Material’s general [dialog guidance](/m3/pages/dialogs/guidelines#b33988d3-88e6-432c-acb1-4461a84171c9).

## Color & elevation

XR uses [color roles](/m3/pages/color-roles/tab-1#89f972b1-e372-494c-aabc-69aea34ed591) to communicate the elevation of UI elements. Dialogs can use two color options: **surface container high** or **surface container highest**.

starNote:Color and elevation for spatial dialogs can be customized by makers and are not available in Jetpack Compose yet.

_footer: - Surface container high - Surface container highest_
_altText: 2 spatially elevated dialogs with surface-container-high and surface-container-highest color roles._

For effective visual hierarchy, a dialog should be the most prominent element. 

Add a scrim behind a dialog to improve its visibility. Scrims prevent other content from being selected until the dialog action is complete.

_footer: Make sure a spatial dialog’s color is higher than all other UI elements, and use a scrim_
_altText: Dialog with surface-container-highest color and a scrim._

The dialog should have the highest elevation in the product.

For example, if a dialog is **surface container high**, don’t use **surface container highest** for any other elements.

_footer: If a dialog’s color is **surface container high**, don’t use **surface container highest** for any other element_
_altText: Dialog with surface-container-high color and no scrim. An orbiter is at a higher elevation than the dialog._

## Usage

[Basic dialogs](/m3/pages/dialogs/guidelines#97ac3858-3932-4084-ae8e-73e42b7cb752) are recommended when designing for XR’s expanded window sizes. This keeps the required action in the person’s [field of view](https://developer.android.com/design/ui/xr/guides/spatial-ui#where-place). Limit use of [full-screen dialogs](/m3/pages/dialogs/guidelines#007536b9-76b1-474a-a152-2f340caaff6f) to compact window sizes, like mobile devices.

_footer: A basic dialog elevated above an app in home space_
_altText: Basic dialog in XR._

_footer: Avoid using full-screen dialogs in XR. Required actions could appear beyond a person’s field of view._
_altText: Full-screen dialog in XR._

## Spatial dialogs

In full space, dialogs can be elevated spatially via [overrides](https://developer.android.com/develop/xr/jetpack-xr-sdk/material-design#use-enablexrcomponentoverrides). This helps dialogs stand out from their background in XR.

_footer: Side view of a basic dialog with spatial elevation in full space_
_altText: Side view of basic dialog showcasing spatial elevation._

## Behavior

### Effect

The spatial dialog should scale uniformly. It also fades in when appearing, and fades out when disappearing. 

The dialog's scrim only fades in and out.

_footer: Front view of a spatial dialog in motion in full space_
_altText: A direct view of a spatial dialog appearing and disappearing._

### Movement

When activated, the spatial dialog rises from the app to the highest resting level on the Z-axis. 

When the action is complete, it returns to a normal resting level.

The dialog's scrim stays at the app content level at all times. 

To prevent motion sickness, use [standard easing](/m3/pages/motion-easing-and-duration/tokens-specs#601d5552-a6e6-4d74-9886-ff8f24b9ec35) and [long duration](/m3/pages/motion-easing-and-duration/tokens-specs#48bf653e-46f9-48f5-87e0-eaf8ea3fe716) motion tokens.

_footer: Side view of a spatial dialog in motion in full space_
_altText: A spatial dialog elevating on the Z-axis, as seen from a side angle._

## Placement

Consider factors like field of view, viewing distance, and possible interactions when deciding where to place dialogs in XR.

### Elevation: highest resting level

Display spatial dialogs at the highest resting level. When setting the depth value of the highest resting level, make sure the elevated dialog is at a comfortable viewing distance from the person. [More on spatial elevation](https://developer.android.com/design/ui/xr/guides/spatial-ui#spatial-elevation)

_footer: A spatial dialog moves to the highest resting level in full space_
_altText: An animated side view of a dialog moving from the lowest to the highest resting level._

### Center spatial dialogs in field of view

Spatial dialogs should be centered in a person’s [field of view](https://developer.android.com/design/ui/xr/guides/spatial-ui#where-place). If the dialog **can't** track head movements, position it in the center of the app’s content. 

If the dialog **can** track head movements, configure it with a lazy follow behavior. This keeps the dialog anchored to the center of a person’s field of view until an action is taken.

_footer: A dialog in full space stays centered in a person’s field of view_
_altText: A dialog follows a person’s head movements, remaining centered in their field of view._

## Accessibility considerations

[XR accessibility](https://developer.android.com/design/ui/xr/guides/get-started#make-app) guidelines are still evolving. Spatial dialogs should follow applicable Material [dialog accessibility standards](/m3/pages/dialogs/accessibility).

<!-- section: Accessibility -->

## Use cases

People should be able to use assistive technology to:

- Open and close a dialog
- Provide and submit other inputs if the dialog is interactive, such as a text field or selectable list
- Scroll the dialog to access all of its contents if that content extends beyond the container of the dialog

## Interaction & style

### Use sparingly

Dialogs are purposefully interruptive. This means they appear in front of app content and disrupt the flow of content for people who may, for example, be using a screen reader to navigate the page.

As such, dialogs should be used sparingly and only to provide critical information. Less critical information should be presented in a non-blocking way within the flow of app content.

_footer: Present non-critical information using other UI within the flow of app content_
_altText: An inline tooltip doesn’t block a photo app’s content on a mobile screen. A modal dialog blocks the content of a photo app on a mobile screen._

_footer: Avoid putting non-critical information in a dialog_
_altText: A modal dialog blocks the content of a photo app on a mobile screen. A modal dialog blocks the content of a photo app on a mobile screen._

### 200% text size

Avoid excessive text wrapping or truncation by choosing concise strings. 

On Android, headlines should be kept concise enough to fit within **four** lines after the text size is increased to 200%. If a headline exceeds this limit and gets truncated, provide an alternative way to access the full content in a single tap.

_footer: Avoid excessive text wrapping or truncation by choosing concise strings_
_altText: A dialog with 200% text wraps multiple times in the header and description. It covers most of the mobile screen._

### Elements within dialogs

Because dialogs can contain various elements within them, refer to the relevant accessibility guidelines for each element. 

Some common examples include:

- Text fields
- Typography
- Buttons

_footer: Full-screen dialogs can contain various elements such as (1) text fields, (2) typography, and (3) buttons, which each may have their own accessibility guidelines_
_altText: 3 elements of a full-screen dialog._

## Initial focus

When a dialog appears, focus should automatically land on the first interactive element within the dialog.

_footer: Initial focus lands on the first interactive element within a dialog. The tab key moves focus through the next interactive elements in a cycle._
_altText: A modal dialog titled “Permanently delete?” whose second interactive element is focused by selecting the Tab key._

_footer: The shift and tab keys together move focus in the opposite direction. The space or enter key triggers or commits the action of the focused element._
_altText: A modal dialog titled “Permanently delete?” whose previous interactive element is focused on by selecting both the Shift and Tab keys._

## Keyboard navigation

Keys | Actions |
Tab | Focus lands on the next interactive element contained in the dialog, or the first element if focus is currently on the last element |
Shift + Tab
 | Focus lands on the previous interactive element contained in the dialog, or the last element if focus is currently on the first element |
Space or Enter
 | Triggers or commits the action of the focused element |
Escape
 | Closes the dialog |

## Labeling elements

The accessibility label for a dialog is typically the same as the dialog’s title or headline.

On web, basic dialogs should have the **alert dialog** role.

_footer: Basic dialogs are known as alert dialogs on web_
_altText: An alert dialog with a title “Set up traffic updates?”  Its label is “Set up traffic updates?” and its role as “Alert Dialog.”_

Components contained within the dialog, such as buttons, should be labeled according to the guidelines specific to those components.

For common examples, see:

- Buttons
- Text fields

_footer: Elements within a dialog should be labeled according to their guidelines_
_altText: A full-screen dialog titled “New event” containing a “Save” button and a text field, both with their own accessibility labels._
