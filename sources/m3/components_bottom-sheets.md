# Bottom sheets

slug: bottom-sheets  |  updated: 2026-07-28T07:45:12.661Z

<!-- section: Overview -->

-
Use bottom sheets in compact and medium breakpoints

-
Two variants: standard and modal

-
Content should be additional or secondary (not the app’s main content)

-
Bottom sheets can be dismissed in order to interact with the main content

_footer: - Standard bottom sheet - Modal bottom sheet_
_altText: Side by side view of standard bottom sheet modal bottom sheet_

## Availability & resources

## Differences from M2

- Color: New color mappings and compatibility with dynamic color
- Shape: Bottom sheets have a 28dp top corner radius
- Layout: New max-width of 640dp and an optional drag handle with an accessible 48dp hit target

_altText: Diagram of floating sheet set on screen background_

<!-- section: Specs -->

Modal bottom sheets are above a scrim while standard bottom sheets don't have a scrim. Besides this, both variants of bottom sheets have the same specs.

_footer: - Container - Drag handle (optional) - Scrim_
_altText: Diagram of container, drag handle, scrim_

## Tokens and specs

Browse the component elements, attributes, tokens, and their values. [Learn more about design tokens](/m3/pages/design-tokens/overview)

## Color

Color values are implemented through design tokens. For design, this means working with color values that correspond with tokens. For implementation, a color value will be a token that references a value. [Learn more about design tokens](/m3/pages/design-tokens/overview)

_footer: Bottom sheet color roles used for both light and dark schemes:  - Scrim*  - On surface variant  - Surface container low  *On Android platforms, the scrim color and opacity is automatically handled by the system UI._
_altText: Two diagrams featuring color opposites of scrim, container, drag handle_

## Measurements

_footer: Bottom sheet padding and size measurements_
_altText: Bottom sheet on larger device with 56dp top and 56dp side margins_

Bottom sheets span the full window width up to 640dp. When the window width exceeds 640dp, bottom sheets adjust to have a top margin of 56dp and side margins of 56dp. 
Attribute | Value |

Drag handle alignment (horizontal)
 |
Center
 |

Drag handle padding top/bottom
 |
22dp
 |

Top margin
 |
72dp
 |
Top margin (window width > 640dp) | 56dp |

Start/end margin (window width > 640dp)
 |
56dp
 |

Width
 |
Full width, up to max-width 640dp
 |
Height | Variable |

<!-- section: Guidelines -->

_footer: - Standard bottom sheets - Modal bottom sheets_
_altText: Two variants of bottom sheets._

## Usage

Bottom sheets display supplementary content and actions on a mobile screen.

_footer: Bottom sheet containing contacts and applications_
_altText: Photo sharing bottom sheet with contact list, app icons, and action buttons._

Bottom sheets are a versatile component that can contain a wide variety of information and layouts, including menu items (in list or grid layouts), actions, and supplemental content.

_footer: Bottom sheet with menu items in a list_
_altText: Bottom sheet displaying 3 menu options._

## Anatomy

A container is the only required element of a bottom sheet. Bottom sheet layouts can vary widely to support the kinds of content they contain.

_footer: - Container - Drag handle (optional) - Scrim (modal only)_
_altText: 3 elements of a bottom sheet._

### Container

Bottom sheet containers hold all bottom sheet elements. Their size is determined by the space those elements occupy.

The container is the only required element of a bottom sheet. All other elements are optional.

_footer: Bottom sheets are flexible containers that adapt to their content and available space_
_altText: Empty bottom sheet container._

### List items (optional)

Lists are a continuous group of text or images. List items can include label text, icons, and text buttons, among other elements.

_footer: Bottom sheet containing a list with icons_
_altText: A bottom sheet displaying a list of actions for a song._

### Dividers (optional)

Dividers can be used to separate related content in bottom sheets.

_footer: Bottom sheet with a divider separating kinds of actions_
_altText: Bottom sheet with image action buttons and contact list separated by an inset divider._

### Media (optional)

**Thumbnail**
Bottom sheets can include thumbnails for an avatar or logo.

**Image**
Bottom sheets can include photos, illustrations, and other graphics, such as weather icons.

**Video**
Bottom sheets can include video.

_footer: Bottom sheets can contain thumbnails, images, and video_
_altText: A bottom sheet displaying various media formats, including thumbnails, images, and video._

## Standard bottom sheets

Standard bottom sheets co-exist with the screen’s main UI region and allow for simultaneously viewing and interacting with both regions, especially when the main UI region is frequently scrolled or panned.

Use a standard bottom sheet to display content that complements the screen’s primary content, such as an audio player in a music app.

_footer: The music player in this standard bottom sheet allows people to control their music while browsing albums_
_altText: Bottom sheet with music player controls visible while browsing albums._

At full-screen height, standard bottom sheets contain a collapse icon in an app bar to return to their initial position.

Standard bottom sheets can contain supplementary content that continues below the screen, such as location information over a map.

_footer: A bottom sheet can have preset positions from full-screen height to preview_

## Modal bottom sheets

Like dialogs, modal bottom sheets appear in front of app content, disabling all other app functionality when they appear, and remaining on screen until confirmed, dismissed, or a required action has been taken.

_footer: A modal bottom sheet must be interacted with or dismissed. Its blocking behavior makes it suitable for a menu, such as in this files app, to help people focus on their available choices._
_altText: A modal sheet with filter options to categorize files in the app._

Use a modal bottom sheet as an alternative to inline menus or simple dialogs on mobile, especially when offering a long list of action items, or when items require longer descriptions and icons.

Modal bottom sheets are used in mobile apps only.

_footer: Modal bottom sheets can be used instead of menus to present additional actions_
_altText: A modal bottom sheet displayed as an alternative to a traditional menu, presenting a list of actions._

### Visibility

To provide access to its top actions, the initial vertical position of modal bottom sheets is capped at 50% of the screen height.

Modal bottom sheets whose contents exceed 50% of the screen height can then be pulled across the full screen and scrolled internally to access their remaining items.

_footer: The initial vertical position of modal bottom sheets can't exceed 50% of the screen height_
_altText: A modal bottom sheet covering half of the screen, so both images and actions are accessible._

Modal bottom sheets appear when triggered by a user action, such as tapping a button or an overflow icon. They can be dismissed by:

- Tapping a menu item or action within the bottom sheet
- Tapping the scrim
- Swiping the sheet down
- Using a close affordance within the bottom sheet’s app bar, if available

Display a close affordance in a full-screen modal bottom sheet.

_footer: Tapping the scrim dismisses a modal bottom sheet_
_altText: A modal bottom sheet disappearing by tapping the scrim._

_footer: A modal bottom sheet can be dismissed by swiping the sheet down_
_altText: A modal bottom sheet disappearing by swiping the sheet down._

## Responsive layout

### Compact breakpoint

In compact breakpoints, like mobile devices, bottom sheets extend across the width of a screen and are elevated above the primary content.

_footer: Bottom sheets should extend to the width of the screen on mobile_
_altText: A bottom sheet extended to the width of a mobile screen._

### Medium and expanded breakpoints

For larger screens with medium and expanded breakpoints, bottom sheets have a default max-width to prevent undesired layouts and awkward spacing. However, this can be overridden if needed. For more complex tasks and flows, consider using a non-transient surface such as a floating sheet.

_footer: Bottom sheets on larger screens like tablet have a max width that can be overridden_
_altText: A bottom sheet extended to its max-width on a large screen device, not spanning the full screen._

On larger expanded breakpoints, like desktop, a bottom sheet can be swapped for a side sheet that shows similar content.

_footer: Side sheets can contain the same content as bottom sheets and may be more suitable for desktop_
_altText: A side sheet on desktop._

## Behavior

Bottom sheets can offer an expansion option where the sheet is fully raised and toggled between a collapsed and expanded state. This provides a more predictable footprint of the sheet, and can be set by the system or toggled by the user.

_footer: A bottom sheet for sharing can appear fully raised if needed_
_altText: Bottom sheet fully raised, showing photo actions, sharing options, and albums to add the photo to._

_footer: Alternately, a bottom sheet for sharing can appear collapsed for a more focused set of actions_
_altText: Collapsed bottom sheet, showing focused set of options._

### Custom positioning

The drag handle can be dragged or selected to change the bottom sheet height. 

Sheets should be able to cycle through preset heights and close completely without dragging. Selecting the drag handle should toggle through preset heights or close the sheet, while selecting the scrim should always close the bottom sheet.

If the bottom sheet has multiple preset heights but can’t use a drag handle, Material requires the inclusion of a single-pointer alternative to change height.

_footer: Interacting with the drag handle can quickly move a bottom sheet through preset heights_
_altText: Bottom sheet with a visible drag handle that can be used to adjust its height._

_footer: A bottom sheet can automatically resize to another height after interacting with the drag handle_
_altText: Bottom sheet resized using the visible drag handle._

### Scrolling

Bottom sheets can be horizontally scrolled, independent of the rest of the screen’s content.

_footer: Bottom sheets should be scrollable when their content exceeds the initial viewable height_
_altText: Bottom sheet that can be scrolled horizontally._

### Back

On Android, a gesture called predictive back allows a user to swipe left or right on the bottom sheet. 

- Bottom sheet detaches from the left and right edges of the screen to signal it will close
- Previous screen is revealed in a preview

A list of compatible components is available in the [gestures article](/m3/pages/gestures).

_footer: Preview of the result of the gesture, **release** to commit, **fling** to commit, and **cancel**_

<!-- section: Accessibility -->

## Use cases

Users should be able to:

- Resize bottom sheets without having to rely on touch gestures

## Interaction & style

### Touch target area

The top 48dp portion of the bottom sheet is interactive when user-initiated resizing is available and the drag handle is present.

_footer: To ensure touch target accessibility, the top portion of a bottom sheet can be reserved for resize interactions_
_altText: Touch target area of a bottom sheet._

### Initial focus

The optional drag handle can be focused in the tab order and interacted with using non-touch inputs, such as keyboard or switch controls.

_footer: Visible focus shown on the drag handle affordance_
_altText: Focus on the drag handle of a bottom sheet._

### Dragging

Include a single-pointer alternative for any action that can be completed by dragging.

Drag handles should cycle the bottom sheet through available heights when selected. If a drag handle can’t be used, add a button to do this action.

_footer: Interacting with the drag handle can quickly move a bottom sheet through preset heights_
_altText: Bottom sheet with focused drag handle at lower preset height._

_footer: A bottom sheet can automatically resize to another height after interacting with the drag handle_
_altText: Bottom sheet with drag handle at higher preset height._

## Keyboard navigation

Keys | Actions |
Tab | Focus lands on drag handle |
Space / Enter | Toggles between available heights |

## Labeling

Label only the drag handle. The accessibility role for the drag handle is “button.”

_footer: Label the drag handle_
_altText: Labeled drag handle with role of button._
