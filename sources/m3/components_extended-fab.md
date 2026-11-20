# Extended FABs

slug: extended-fab  |  updated: 2026-07-27T13:55:35.429Z

<!-- section: Overview -->

-
Use for the most common or important action on a screen

-
Three variants: small, medium, and large

-
Use instead of FAB when label text is needed to understand action

_footer: - Small extended FAB - Medium extended FAB - Large extended FAB_
_altText: 3 extended fab sizes._

## Availability & resources

## M3 Expressive update

**May 2025**

The extended FAB now has three sizes: small, medium, and large, each with updated type styles. These align with the FAB sizes for an easier transition between FABs. The baseline extended FAB is no longer recommended and should be replaced with the small extended FAB. Surface and FABs are also no longer recommended. [More on M3 Expressive](https://m3.material.io/blog/building-with-m3-expressive)

Variants and naming:

-
Added new sizes

Small: 56dp

-
Medium: 80dp

-
Large: 96dp

-
No longer recommended

Baseline extended FAB (56dp)

-
Surface extended FAB

Updates:

-
Adjusted typography to be larger

_footer: The baseline extended FAB is replaced with a set of small, medium, and large extended FABs with new typography_
_altText: The baseline extended FAB and the small, medium, and large extended FABs from the expressive update._

## Differences from M2

- Color: New color mappings and compatibility with dynamic color
- Layout: Extended FAB is the same height as the FAB
- Shape: Boxier style with smaller corner radius

_footer: M2: Extended FABs are pill-shaped and have a different height and elevation_
_altText: Diagram comparing the M2 FAB and extended FAB._

_footer: M3: Extended FABs share the same height, boxier shape, and simpler elevation model as FABs_
_altText: Diagram comparing the M3 FAB and extended FAB._

<!-- section: Specs -->

## Variants

_footer: - Small extended FAB - Medium extended FAB - Large extended FAB_
_altText: 3 variants of extended FABs._

### Baseline variants

The baseline extended FAB is no longer recommended in the M3 expressive update. Use a small extended FAB; the type style was updated from **label large** to **title medium**, and the inner padding was reduced. [View baseline extended FAB specs](/m3/pages/extended-fab/specs#01e114e6-8c3d-4d39-9376-65aa5c10e01b)

_footer: - Extended FAB_
_altText: 1 baseline extended FAB._

Variant
 |
M3
 |
M3 Expressive
 |

Small extended FAB
 |
--
 |
Available
 |

Medium extended FAB
 |
--
 |
Available
 |

Large extended FAB
 |
--
 |
Available
 |

Extended FAB (baseline) 
 |
Available
 |
Not recommended.
Use **small extended FAB.**

 |

## Tokens & specs

Use the table's menu to select a token set. Extended FAB tokens are organized by size and color.

## Anatomy

_footer: - Container - Label text - Icon_
_altText: 3 elements of extended FABs._

## Color

Color values are implemented through design tokens. For design, this means working with color values that correspond with tokens. For implementation, a color value will be a token that references a value. [Learn more about design tokens](/m3/pages/design-tokens/overview/)

### Color styles

Extended FABs can use several combinations of **color** and **on color** styles, such as **primary** and **on primary**. The following color mappings provide the same level of contrast and functionality, so choose a color mapping based on visual preference.

_footer: Extended FAB color roles used for light and dark schemes:  - Primary container & on primary container (default) - Secondary container & on secondary container - Tertiary container & on tertiary container - Primary & on primary - Secondary & on secondary - Tertiary & on tertiary_
_altText: 6 extended FAB color styles._

### Baseline color styles

Extended FABs should no longer use surface color styles. They’re still available, but not recommended.

_footer: - Surface container FAB_
_altText: 1 baseline extended FAB color style._

## States

States are visual representations used to communicate the status of a component or interactive element. [Learn more about interaction states](/m3/pages/interaction-states/overview)

When using a non-default color mapping for extended FABs, make sure the state layer color is the same as the icon color. For example, the state layer color for primary mapping should be md.sys.color.primary.

_footer: - Enabled - Hovered - elevation 4 - Focused - Pressed_
_altText: 4 states of extended FABs._

## Measurements

_footer: Size and padding measurements of the small, medium, and large extended FABs_
_altText: Extended FAB padding and size measurements._

_footer: Extended FABs should have margins of 16dp_
_altText: Extended FAB margin measurements._

## Baseline extended FAB

_footer: - Container - Label text - Icon_
_altText: 3 elements of baseline extended FAB._

### Baseline configurations

_footer: With icon_
_altText: Baseline extended FAB with icon._

_footer: Without icon_
_altText: Baseline extended FAB without icon._

### Baseline tokens

Use the table's menu to select a token set. The baseline extended FAB token sets are organized by common tokens, then by surface and branded color styles. Other color styles like primary, secondary, and tertiary are still used by the latest extended FABs.

### Baseline colors

Color values are implemented through design tokens. For design, this means working with color values that correspond with tokens. For implementation, a color value will be a token that references a value. [Learn more about design tokens](/m3/pages/design-tokens/overview/)

_footer: Extended FAB color roles used for light and dark schemes:  - Primary container + shadow - On primary container - On primary container_
_altText: 3 baseline extended FAB color roles._

#### Additional color mappings

Extended FABs can use other combinations of container and icon colors. The color mappings below provide the same legibility and functionality as the default, so the color mapping you use depends on style alone.

_footer: Extended FABs can use different combinations of container and icon colors_
_altText: 3 deprecated extended FABs with different container and icon colors._

### Baseline states

States are visual representations used to communicate the status of a component or interactive element. [Learn more about interaction states](/m3/pages/interaction-states)

_footer: - Enabled - Hovered - Focused - Pressed_
_altText: 4 states of baseline extended FAB._

### Baseline measurements

_footer: Extended FABs have a padding of 16dp_
_altText: Margins of baseline extended FAB._

_footer: Extended FAB height, width, and icon size_
_altText: Size of baseline extended FAB while on screen._

Attribute | Value |

Container height
 |
56dp
 |

Container width
 |
Dynamic, 80dp min
 |

Container shape
 |
16dp corner radius
 |

Icon size
 |
24dp
 |

Padding
 |
16dp
 |

<!-- section: Guidelines -->

_footer: Extended FABs are more prominent than regular FABs_
_altText: Vibrant extended FAB on an email screen._

## Usage

Use an extended FAB on screens with long, scrolling views that require persistent access to an action, such as a checkout screen. 

Use it when label text helps understand the main action, or to add further emphasis to the button.

_footer: Extended FABs ensure the main action is visible at all times_
_altText: A centered extended FAB is used to check out in a shopping app._

_footer: Use an extended FAB to provide constant access to a primary action above long-scrolling surface content_
_altText: Extended FAB on an article with lots of body content to publish that article._

_footer: Use an extended FAB to emphasize a page’s primary action_
_altText: Extended FAB on a task list to create a new task._

### Additional emphasis

The extended FAB can provide more emphasis and clarity to a product’s primary action. 

Since it has room for both a text label and icon, the extended FAB can be effective where an icon alone is ambiguous. However, the relationship between an extended FAB's icon and label should be clear.

_footer: An extended FAB can be effective where an icon alone is too vague_
_altText: Extended FAB labeled “find flights” with an airplane icon, which would be unclear on its own._

Like the regular FAB, only one extended FAB should be used per screen. 

Multiple FABs compete for attention. 

If additional high-level actions are required, consider adding more buttons elsewhere on the page.

_footer: Only show one prominent action at a time with the extended FAB_
_altText: An extended FAB used on a screen._

_footer: Don’t use multiple extended FABs in one screen as it disrupts visual hierarchy_
_altText: 2 extended FABs used on 1 screen._

The extended FAB shouldn't be used as an option in a set of actions. 

Instead, use filled buttons for a similar level of emphasis.

_footer: Use a button with appropriate styling to emphasize it in a group of buttons_
_altText: Filled button labeled “finish setup” next to a “back” button._

_footer: Don’t use the extended FAB to convey an option in a set of actions_
_altText: Extended FAB labeled “finish setup” next to a “back” button._

### Choosing a size

There are three variants of extended FABs: small, medium, and large.

Choose an appropriately-sized extended FAB to add the right amount of emphasis for an action. 

In compact windows with one prominent action, the large extended FAB can be appropriate.

In larger breakpoints, use a medium or large extended FAB.

_footer: There are three sizes of extended FABs_
_altText: 1 large, 1 medium, and 1 small extended FAB on 3 different screen sizes._

## Anatomy

_footer: - Container - Label text - Icon (optional)_
_altText: 3 extended FAB elements._

### Container

The extended FAB container is a rounded rectangle that hugs its contents. 

The extended FAB grows and shrinks with text length.

_footer: The extended FAB container hugs the icon and text_
_altText: Fixed-width extended FAB, centered, ignoring layout grid._

### Icon (optional)

An extended FAB's icon should intuitively represent its action.

_footer: Unlike standard FABs, extended FABs don't require an icon_
_altText: Extended FAB without an icon, labeled “Save draft”._

_footer: An extended FAB can't have an icon without a text label_
_altText: Extended FAB with icon only, with no label text._

### Label text

The extended FAB’s label should clearly describe its action.

Use 1–2 words at most. Keep in mind that localization may increase the amount of characters and width of the extended FAB.

_footer: Shorten the text as much as needed. Include an icon for additional context._
_altText: Extended FAB with short text “Save”._

_footer: Avoid wrapping or truncating text_
_altText: Extended FAB with wrapping text “Save draft in folder”._

## Placement

_footer: Place the extended FAB above the rest of the UI, off of elements like app bars_
_altText: Extended FAB placed above navigation bar._

_footer: Don’t place the extended FAB on top of toolbars. It disrupts the consistency of the elevation and surface layers._
_altText: Extended FAB overlaid on a docked toolbar._

_footer: Don’t place the extended FAB in the upper half of a mobile screen, as it disrupts the reading of the UI_
_altText: Extended FAB below an app bar at the top of a mobile screen._

_footer: Don’t place extended FABs on cards or inside other containers_
_altText: An extended FAB labeled "Confirm" on a dialog to "Confirm your location"._

Avoid putting other floating components, like the floating toolbar, on screen with the extended FAB.

_footer: Floating toolbars can be paired with FABs, but not extended FABs_
_altText: The extended FAB is next to a floating toolbar._

## Responsive layout

The FAB and extended FAB can transform into each other depending on available space and layout. 

In a collapsed navigation rail, a FAB would be used. When the rail is expanded, the FAB can transform into an extended FAB.

_footer: When space is limited, an extended FAB can transform into a FAB_
_altText: Example of extended FAB transforming into standard FAB._

### Right-to-left languages

Extended FABs should mirror their elements in right-to-left (RTL) languages.

_footer: Icons should be placed to the left of labels for left-to-right (LTR) languages_
_altText: Extended FAB in a left-to-right language placed at the bottom right of a screen. The icon is to the left of the text._

_footer: Icons should be placed to the right of labels for RTL languages_
_altText: Extended FAB in a right-to-left language placed at the bottom left of a screen. The icon is to the right of the text._

### Breakpoints

In compact and medium breakpoints, the extended FAB should be placed at the bottom of the screen, either center-aligned or aligned to the trailing edge of the window.

_footer: The extended FAB can be center-aligned_
_altText: Extended FAB center-aligned on a mobile screen._

_footer: The extended FAB can be aligned to the trailing edge of the window_
_altText: Extended FAB right-aligned on a mobile screen._

In expanded and larger breakpoints, the extended FAB should appear either:

-
At the bottom right edge of the window, in both LTR and RTL languages

-
Within the navigation rail

_footer: The extended FAB can be right-aligned in both LTR and RTL languages_
_altText: Extended FAB at bottom right of screen._

_footer: The extended FAB can be at the top of the expanded navigation rail_
_altText: Extended FAB in navigation drawer._

## Behavior

### Appearing

The extended FAB surface expands when appearing on screen using an [enter and exit](/m3/pages/motion-transitions/transition-patterns#e1c2a650-d7a4-4a6d-9025-e6b7845291ed) transition pattern.

_footer: An extended FAB expands when appearing on screen_
_altText: Extended FAB appearing on screen._

### Expanding

The extended FAB can expand and adapt to any shape using a [container transform](/m3/pages/motion-transitions/transition-patterns) transition pattern. 

This includes a surface that is part of the app structure, or a surface that spans the entire screen.

_footer: An extended FAB can expand and adapt to any shape_
_altText: Extended FAB adapting to various shapes._

### Transforming

The extended FAB can transform into a FAB on scroll to temporarily take up less space on screen.

_footer: An extended FAB can transform into a FAB_
_altText: Extended FAB transforming into a FAB when the page is scrolled._

### Scrolling

The extended FAB can transform into a FAB when scrolling down, and back to an extended FAB when scrolling up.

_footer: An extended FAB collapses and expands when scrolling_
_altText: Extended FAB transforming while scrolling._

When the FAB switches to an extended FAB, the following transitions occur:

- The FAB shape changes
- FAB icon moves to the left
- FAB text label fades in

_footer: FAB switches to an extended FAB_
_altText: FAB transforming into extended FAB._

<!-- section: Accessibility -->

## Use cases

People should be able to do the following using assistive technology:

- Navigate to and activate the extended FAB

## Interaction & style

To make it easier for users of screen readers to reach a primary action such as an extended FAB, consider placing the action in the upper left region of large web screens, like in an expanded navigation rail.

In smaller windows, the best place for the extended FAB is the lower right corner of a screen.

_footer: Extended FABs can be placed in the expanded navigation rail_
_altText: On a large screen, the Compose FAB is placed on the upper left region in an email app with the expanded window on the right._

_footer: Place extended FABs in an easy-to-reach place that doesn’t obstruct other actions_
_altText: In a compact window, the Compose FAB is placed on the lower right region in an email app._

_footer: Don’t place extended FABs over another actionable element_
_altText: In a compact window, the Compose FAB is overlapping other buttons in an email app._

## Initial focus

Ensure the extended FAB is prioritized in the overall focus order to create an efficient experience for people who navigate UIs with assistive tech. 

On mobile, the focus order may start with the app bar, move to the navigation bar, and then skip past any other content on the page to land on the extended FAB.

When using an extended FAB, both the visible label and icon should be treated as one focusable element. The extended FAB doesn’t need a tooltip because it already has a visible label.

_footer: Ensure extended FABs get focus when navigating with assistive technology_
_altText: A focused extended FAB in the lower right region of a mobile screen._

_footer: Tooltips aren’t required since the extended FAB has label text_
_altText: A focused extended FAB with a tooltip matching the text label._

## Keyboard navigation

Keys | Actions |
**Tab** | Moves focus to the extended FAB |
**Space**or **Enter**
 | Activates the extended FAB |

## Labeling elements

To ensure the action is clear, use consistent icons and text labels, such as a **Compos****e**icon with a **Compose** text label. 

The icon and text label combination should have one distinct purpose.

The accessibility label must include the same first word as the visible label. For example, if the visible button is **Create**, then the accessibility label might say **Create a new invite**.

_footer: The accessibility label reads **Compose**to match the extended FAB's displayed label_
_altText: Accessibility labels of an extended FAB._
