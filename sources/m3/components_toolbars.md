# Toolbars

slug: toolbars  |  updated: 2026-07-28T08:14:45.120Z

<!-- section: Overview -->

-
Two expressive variants: **docked toolbar** and **floating toolbar**

-
Use the vibrant color style for greater emphasis

-
Can display a wide variety of control types, like buttons, icon buttons, and text fields

-
Can be paired with FABs to emphasize certain actions

-
Don’t show at the same time as a navigation bar

_footer: Configurations of floating toolbars_
_altText: 2 variants of toolbars._

## Availability & resources

## M3 Expressive update

The **bottom app bar** is no longer recommended and should be replaced with the **docked toolbar**, which functions similarly, but is shorter and has more flexibility. The **floating toolbar** was created for more versatility, greater amounts of actions, and more variety in where it's placed. [More on GM3 Expressive](https://m3.material.io/blog/building-with-m3-expressive)

Variants and naming:

-
Added **docked toolbar**to replace **bottom app bar**

Size: Shorter height

-
Color: Standard or vibrant

-
Flexibility: More layout and element options

-
Added **floating toolbar** with the following configurations:

Layout: Horizontal or vertical

-
Color: Standard or vibrant

-
Flexibility: Can hold many elements and components. Can be paired with FAB.

-
**Bottom app bar**is still available, but not recommended

_footer: - Floating, vibrant color scheme and paired with FAB - Docked with embedded primary action instead of FAB_
_altText: 2 examples of toolbar variants._

## Differences from M2

- Color: New color mappings and compatibility with dynamic color
- Elevation: No shadow
- Layout: Container height is taller and the FAB is now contained within the app bar container

_footer: M2: Bottom app bar had higher elevation of 8dp and didn't contain the FAB_
_altText: M2 bottom app bar._

_footer: M3: Bottom app bar has new colors, a taller container, no elevation or shadow, and contains the FAB_
_altText: M3 bottom app bar._

<!-- section: Specs -->

## Variants

_footer: - Docked toolbar - Floating toolbar_
_altText: 2 variants of toolbars._

### Baseline variant

The baseline bottom app bar is no longer recommended. It should be replaced with the docked toolbar, which is very similar and more flexible.

_footer: - Bottom app bar (not recommended)_
_altText: Baseline bottom app bar, which looks like the docked toolbar, but is not recommended._

Variant
 |
M3
 |
M3 Expressive
 |

Docked toolbar
 |
--
 |
Available
 |

Floating toolbar
 |
--
 |
Available
 |

Bottom app bar
 |
Available
 |
Not recommended.  

Use **docked toolbar**.
 |

starNote:Implementation differs per platform. On Jetpack Compose, the floating toolbar is a separate component from the docked toolbar and bottom app bar.

## Configurations

_footer: - Standard and vibrant toolbars - Vertical floating toolbar - Floating toolbar with FAB_
_altText: Color configuration of toolbars._

Category

 |
Configuration

 |
 M3

 |
M3 Expressive

 |

Color

 |
Standard (default)

 |
Available as bottom app bar

 |
Available

 |

Vibrant

 |
--
 |
Available

 |

Floating toolbar layout

 |
Horizontal (default)

 |
--
 |
Available

 |

Vertical

 |
--
 |
Available

 |

Other elements
 |
With FAB
 |
Available as bottom app bar
 |
Available*
 |

starNote:*Implementation differs per platform. On Jetpack Compose, floating toolbar with FAB is [fully supported](https://developer.android.com/reference/kotlin/androidx/compose/material3/package-summary#HorizontalFloatingToolbar(kotlin.Boolean,androidx.compose.ui.Modifier,androidx.compose.material3.FloatingToolbarColors,androidx.compose.foundation.layout.PaddingValues,androidx.compose.material3.FloatingToolbarScrollBehavior,androidx.compose.ui.graphics.Shape,kotlin.Function1,kotlin.Function1,androidx.compose.ui.unit.Dp,androidx.compose.ui.unit.Dp,kotlin.Function1)). On other platforms, each component needs to be added separately.

## Tokens & specs

Browse the component elements, attributes, tokens, and their values. [Jump to baseline bottom app bar specs](/m3/pages/toolbars/specs#ad142675-3e3b-43b8-ba53-12c1f0b7138d)

## Anatomy

_footer: - Container - Placed components_
_altText: 2 elements of a toolbar._

### Flexibility & slots

When configuring a toolbar, think of it as a container with several slots. 

Each slot can be a different element. The most common elements are icon buttons, buttons, and text fields.

_footer: A toolbar is essentially a container with configurable slots_
_altText: A toolbar with 5 slots, conceptual spaces for UI elements, next to each other._

## Color

Color values are implemented through design tokens. For design, this means working with color values that correspond with tokens. For implementation, a color value will be a token that references a value. [Learn more about design tokens](/m3/pages/design-tokens/overview)

### Standard

_footer: Standard color schemes and icon button types:  - Surface container - Filled button (Primary, On primary) - Toggle tonal button (Secondary container, On secondary container) - Standard button (Primary)_
_altText: 4 color roles in the standard color scheme  of the floating toolbar in light and dark scheme._

### Vibrant

_footer: Vibrant color scheme and icon button types:  - Primary container - Filled button (Primary, On primary) - Toggle tonal button: (Surface container, On surface) - Standard button (On primary container)_
_altText: 4 color roles in the vibrant color scheme of the floating toolbar in light and dark scheme._

## Measurements

By default all toolbars are 64dp high, center-aligned, have equal padding between items, and have a minimum outside padding of 16dp.

### Docked toolbar

_footer: - Default margins and padding - Margins and padding with leading, middle, and trailing content_
_altText: Default internal padding of a docked toolbar._

_footer: Alignment and padding can be configured to create unique layouts:  - Left and right alignment - Center-aligned, 8dp padding between items_
_altText: 2 docked toolbars with different margins and alignment._

### Floating toolbar

_footer: Default padding of floating toolbar_
_altText: Diagram noting margin around edge of floating toolbar._

_footer: Floating toolbar size and padding measurements_
_altText: Diagram noting layout measurements._

_footer: Floating toolbar margins_
_altText: Diagram noting layout margins._

## Bottom app bar (baseline)

_footer: - Container_
_altText: Diagram of bottom app bar indicating the container._

### Tokens & specs

Bottom app bar tokens are in one token set.

### Color

Color values are implemented through design tokens. For designers, this means working with color values that correspond with tokens. In implementation, a color value will be a token that references a value. [Learn more about design tokens](/m3/pages/design-tokens/overview)

_footer: Bottom app bar color role used for light and dark themes:  - Surface container_
_altText: Diagram of bottom app bar indicating its color mappings._

### Measurements

_footer: Bottom app bar padding and size measurements_
_altText: Diagram showing layout values and paddings for bottom app bar._

### Common layouts

_footer: - Icon buttons and FAB - Icon buttons and no FAB_
_altText: Side by side view of bottom app bars in different configurations._

<!-- section: Guidelines -->

_footer: Toolbars can be used for a wide variety of use cases_
_altText: 5 toolbars of various colors, elements, and actions._

## Usage

Use a toolbar to provide actions related to the current page. 

Toolbars can contain many actions and can scale to show more actions in larger windows.

_footer: A toolbar provides actions related to the current page_
_altText: Vibrant toolbar at bottom of mobile screen._

There are two variants of toolbars:

-
**Docked toolbar**  Spans the full width of the window. It’s best used for global actions that remain the same across multiple pages.

-
**Floating toolbar**  Floats above the body content. It’s best used for contextual actions relevant to the body content or the specific page.

The baseline **bottom app bar**is no longer recommended, but is still supported.

_footer: Docked toolbar shows global controls_
_altText: Docked toolbar example._

_footer: Floating toolbar show controls relevant to the current page_
_altText: Floating toolbar example._

When actions don’t fit in a toolbar, add a menu.

_footer: Toolbar actions can open a menu_
_altText: Toolbar showing local navigation._

There are two color configurations:

- **Standard**  A low-emphasis color scheme best used for focusing attention on the body content.

- **Vibrant**  A high-emphasis color scheme that draws attention to the controls. It can also indicate a temporary change in the page behavior, such as entering edit mode.

Consider using alternative color roles to create greater or lesser emphasis depending on the needs of the app. Experiment with different color roles to achieve different effects.

_footer: Use the standard color scheme to draw focus to content outside the toolbar_
_altText: Toolbar with low-emphasis controls._

_footer: Use the vibrant color scheme to emphasize controls or actions_
_altText: Toolbar with high-emphasis controls._

### Toolbars & navigation bars

The toolbar and navigation bar are both placed at the bottom of the window, so should **not** be shown at the same time. Show the navigation bar on primary pages, and toolbars on subsequent pages with actions.

_footer: - Navigation bar on a primary page - Toolbar on a secondary page with contextual actions_
_altText: A navigation bar shown on the main email Inbox page, and a toolbar shown when reading the email._

Floating toolbars can be used as tabs between related subsequent pages in the product hierarchy. 

This helps group similar pages together, and shows that the selection affects the body content underneath.

_footer: Keep navigation distinct, and use a toolbar to display local navigation on a specific page_
_altText: Floating toolbar with secondary navigation labels._

Consider the existing app hierarchy when using a toolbar for local navigation. 

Avoid redundant or confusing navigation combinations in the same view.

_footer: Don’t show a navigation bar and a toolbar with navigation controls at the same time_
_altText: Floating toolbar with secondary navigation labels displaying above a bottom navigation bar._

## Anatomy

_footer: - Container - Elements_
_altText: Diagram of toolbar layouts._

### Container

The docked toolbar’s container spans the full width of the window. 

Avoid applying rounded corners to the container. This can imply the container expands or changes upon interaction.

_footer: Use straight corners for docked toolbars_
_altText: Docked toolbar with square corners._

_footer: Avoid modifying the container shape_
_altText: Docked toolbar with rounded corners._

As long as there's a minimum of 16dp padding on the leading and trailing edge, arrange controls inside however you see fit. The 32dp padding between items is just the default. 

All elements need a minimum 48x48dp target area to be accessible.

Be cautious of including too many controls as it can be overwhelming.

_footer: Don’t overwhelm people with too many controls_
_altText: Docked toolbar with too many controls._

The floating toolbar’s container should be fully visible on screen. If more actions are needed, use an overflow menu.

_footer: Choose the most essential actions to show on screen by default_
_altText: Floating toolbar with overflow menu icon._

_footer: Floating toolbars shouldn’t exceed the edge of the window or pane_
_altText: Floating toolbar that expands off edge of screen._

#### Elevation

Floating toolbars have elevation by default. 

If the content beneath the toolbar is visually distinct, elevation can be removed.

_footer: The elevation on floating toolbars can be removed if on a visually distinct background_
_altText: Vibrant floating toolbar that's easy to see in front of a neutral text background._

### Flexibility & slots

When configuring a toolbar, think of it as a container with several slots.

These slots can be populated by buttons, icon buttons, images, text fields, or any kind of custom component.

Icon buttons provide an even hierarchy of controls. Mixing in a filled icon button can help add emphasis to a single action.

_footer: Toolbars are made of slots that can contain many kinds of actions_
_altText: 5 toolbars with slots, and various combinations of buttons, icon buttons, filled icon buttons, and text fields._

Visually emphasizing a single action more than others is an effective way to create hierarchy and guide people to controls they use most often. Avoid emphasizing more than one action at a time.

Some common ways to add emphasis to toolbar actions include:

- Use different icon button color styles, such as filled, tonal, and standard
- Customize the color roles of a single action, such as a primary or secondary palette
- Use wide and narrow icon buttons 
- Pair the toolbar with a FAB

_footer: Two different ways to create a high emphasis action in toolbars_
_altText: 2 floating toolbars, 1 with a filled action button and 1 paired with a FAB._

_footer: Don’t emphasize multiple buttons with bold, primary colors, such as a button and FAB together. Emphasize one action at a time._
_altText: Floating toolbar with primary action and FAB._

_footer: Avoid mixing too many different controls in the same toolbar. A consistent control design keeps things clear._
_altText: Floating toolbar with different control designs._

Avoid using square icon buttons in floating toolbars. Their square shape conflicts with the fully-rounded shape of the floating toolbar container.

Square buttons can be used in the docked toolbar.

_footer: Don’t use square filled icon buttons in floating toolbars_
_altText: A floating toolbar, which is rounded, with squared icon buttons inside._

### Floating toolbar with FAB

A FAB can be placed next to a floating toolbar to present one high-priority action alongside a unified set of toolbar actions.

Use a FAB for the highest-priority action in the view, or to complement the controls.

_footer: Floating toolbars can be paired with FABs_
_altText: 3 toolbars paired with FABs._

## Position & orientation

Only place docked toolbars at the bottom of the window. 

If using other bottom-aligned elements, such as a navigation bar, don't use a docked toolbar.

_footer: Docked toolbars are always at the bottom of the window_
_altText: Docked toolbar on mobile._

Floating toolbars can be horizontal or vertical. 

Horizontal toolbars should have a minimum 16dp margin from the edge of the window.

_footer: Horizontal floating toolbars should be at least 16dp from the edge of the window_
_altText: Floating toolbar on mobile._

In larger breakpoints, floating toolbars can be vertical and placed on either side of the screen.

Vertical toolbars should have a minimum 24dp margin.

_footer: Maintain at least a 24dp margin for vertical toolbars_
_altText: Vertical floating toolbar with 24dp margin._

To keep vertical toolbars compact, don’t use wide icon buttons. 

Use narrow or default icon buttons instead.

_footer: Using wide buttons with vertical toolbars can unnecessarily widen toolbar containers and hide other UI elements_
_altText: Toolbar showing local navigation._

Vertical toolbars should be positioned opposite the navigation rail to balance out the screen and keep actions easy to access.

When showing a navigation rail and vertical floating toolbar at once, use the centered configuration of the navigation rail.

_footer: When a nav rail is visible, the floating toolbar should be vertical on the opposite edge of the window_
_altText: Large screen UI showing both a navigation rail and vertical floating toolbar._

## Adaptive design

Adaptive design allows an interface to respond or change based on context, such as the user, device, and usage. [More on adaptive design](/m3/pages/layout-overview/adaptive-design)

### Resizing

#### Docked

The docked toolbar should always span 100% of the screen width.

In compact breakpoints, elements in the toolbar should be evenly spaced.

In medium breakpoints and larger, adjust the padding between controls to create a comfortable layout. This can be achieved by: 

-
Centering all elements

-
Customizing to center a key action, and aligning other elements to the edges

_footer: Docked toolbar items should be evenly spaced in compact windows_
_altText: Docked toolbar with evenly spaced elements._

_footer: In medium breakpoints and larger, create a spacious layout by centering all elements_
_altText: Docked toolbar with centered elements._

_footer: Align controls to the edge of the screen to make them easier to reach on tablets, and to better highlight a primary action in the middle_
_altText: Docked toolbar with central action and some elements pushed to the edge._

On web and large screens, the docked toolbar can be rounded. Dividers can be used to organize large amounts of items. Only shrink the height and use extra small buttons if vertical space is limited.

_footer: On web and other large screens, docked toolbars can be rounded and placed in different parts of the page_
_altText: Docked toolbar with 15 actions for text editing on large screens, organized with dividers._

#### Floating

The container should only be as big as needed to hold the items inside before reaching the 16dp margin.

If there’s not enough space for all items, put them in an overflow menu in the trailing slot. As the breakpoint expands, more actions can be revealed.

The floating toolbar width can also be capped to keep it smaller and hide more elements.

_footer: Don’t add extra space to a toolbar beyond its necessary items_
_altText: Floating toolbar in compact window with excess padding._

_footer: At larger screen sizes, the container can display more controls before hitting the 16dp margin_
_altText: Floating toolbar in expanded window class._

Vertical toolbars aren’t recommended for compact windows.

They take up a significant area of the screen and may feel visually overwhelming, especially on screens with complex layouts.

Only use them when the screen is simple or when the toolbar has a few controls.

_footer: Vertical toolbars can cover important content in compact windows_
_altText: Vertical toolbar in a compact window._

### Presentation

In larger breakpoints, floating toolbars can be aligned to opposite edges of the screen so they're easy to reach and group similar actions. For example, consider placing the undo and redo actions in one toolbar, and editing controls like highlight, erase, and select in another. Stylistic differences can help emphasize each toolbar’s purpose and clarify hierarchy.

_footer: Multiple toolbars with different stylistic treatments can create hierarchy and distinguish different kinds of actions_
_altText: 2 toolbars, each with distinct stylistic treatment and actions._

Don’t use multiple toolbars in compact windows. There typically isn’t enough room on screen. 

Instead, use one toolbar for all actions.

_footer: Avoid using multiple toolbars in smaller windows_
_altText: Multiple toolbars in a compact window._

Actions at the trailing edge of the toolbar can collapse into an overflow menu at smaller breakpoints, and become visible again at larger sizes.

_footer: Actions at the trailing edge collapse into an overflow menu_
_altText: App bar resizing to wider view._

### Right-to-left languages

In right-to-left (RTL) languages, mirror individual items that need it, like icons and text direction. If the order of actions is important, flip the order of the actions as well.

_footer: In LTR languages, the **Next** button is intentionally placed on the trailing (right) edge_
_altText: Next button is on trailing edge for a LTR language._

_footer: In RTL languages, reverse the order so **Next** remains on the trailing edge when flipped, now on the left. Text is not translated to illustrate mirroring._
_altText: Next button is now on the trailing edge, at left, for RTL language._

## Behavior

### Scrolling

Docked toolbars can either remain on the screen during scroll, or animate offscreen.

_footer: Docked toolbars can animate offscreen_
_altText: Docked toolbar animating off screen._

Floating toolbars can remain on the screen, animate offscreen, or collapse into a single, high-emphasis action on scroll.

_footer: Floating toolbars can animate off screen_
_altText: Floating toolbar animating off screen._

On Jetpack Compose, the floating toolbar can collapse to a FAB or key action on scroll.

_footer: Floating toolbars can be customized to do other actions on scroll, like collapse into a single action_
_altText: Floating toolbar with several actions animating on scroll to hide all actions except the center one._

Don't collapse actions and scroll at the same time.

_footer: Toolbars shouldn't both collapse and transition off page_
_altText: A toolbar collapsing to one action, and moving off screen when the page is scrolled._

starNote:This is a rapidly changing space. Guidelines are primarily intended for designers at this time. Find what’s implemented in code in the [design kit](https://www.figma.com/community/file/1035203688168086460).

Extended reality (XR) interfaces have special design requirements, like showing apps in 3D space. Material has an XR-specific toolbar with custom specs and guidance. Read [XR developer documentation](https://developer.android.com/design/ui/xr/guides/foundations) for more details.

## Variants

There is one toolbar orbiter. It closely aligns with the floating toolbar. It can be configured to be horizontal or vertical.

_footer: - Horizontal floating toolbar - Vertical floating toolbar_
_altText: Horizontal and vertical toolbar orbiters._

## Anatomy

_footer: - Container - Placed components_
_altText: 2 elements of a toolbar orbiter: container and placed components._

## Color & elevation

XR uses color to communicate the elevation of UI elements and orbiters. With [spatial elevation](https://developer.android.com/design/ui/xr/guides/spatial-ui#spatial-elevation), the toolbar displays above the spatial panel on the Z-axis. Elevated toolbars can use any of these color options:

_footer: - Surface container - Surface container high - Surface container highest - Tertiary container_
_altText: 4 versions of toolbar elevation color strategy._

## Measurements

_footer: Measurements for toolbar orbiters_
_altText: Diagram with measurements for toolbar orbiters._

_footer: Padding for toolbar orbiters_
_altText: Diagram with 12dp padding for toolbar orbiters._

## Usage

A toolbar can appear in an orbiter for a more immersive experience. Currently, this spatial capability is only available in full space. In home space, use a regular toolbar on the same plane as the body content to mimic a 2D experience.

_footer: A toolbar’s behavior and placement changes from a 2D to a 3D experience_
_altText: Animation showing a toolbar changing from 2D to 3D._

## Behavior

### Local context (recommended)

When placed in local context, the toolbar orbiter is centered at the bottom of the spatial panel it controls. 

It repositions in response to layout or content changes.

_footer: In most cases, toolbars should be placed in local context. The orbiter is centered and anchored to the bottom of the panel it controls._
_altText: A toolbar orbiter placed in local context._

### Global context

When placed in global context, the toolbar orbiter is centered at the bottom of the app. 

It stays anchored to the app during layout or content changes.

_footer: In global context, toolbar orbiters are centered and anchored to the bottom of the app. This use case is less common, as toolbars usually contain actions that control a specific panel._
_altText: A toolbar orbiter placed in global context._

### Expand & collapse

Toolbar orbiters with more than five items can expand and collapse to reveal or hide additional content.

When a toolbar orbiter expands, it stays within the bounds of the adjacent spatial panel.

Alternatively, more complex toolbars can be split into multiple toolbars.

_footer: Toolbar orbiters can expand to reveal additional content, but should stay within the bounds of the adjacent spatial panel_
_altText: A spatial panel with a Google document has a toolbar orbiter that expands from 5 to 10 items._

### Additional toolbars

In some cases, full space apps can have more than one toolbar orbiter, placed in either global or local context.

_footer: Limit the use of multiple toolbars to rare cases when additional spatialization improves usability_
_altText: An app switches between 1 and 2 toolbar orbiters._

## Placement

### Offset & inset positioning

In full space, a toolbar orbiter can be positioned adjacent to or overlap a spatial panel.

_footer: The recommended toolbar orbiter position from the spatial panel is:   - Offset by 20dp or - Inset by 12dp_
_altText: Toolbar orbiter with offset positioning._

_footer: To prevent content obstruction, don’t overlap the toolbar orbiter and spatial panel above a 12dp inset threshold_
_altText: Toolbar orbiter with inset positioning above 12dp that obstructs content on the spatial panel._

### Horizontal alignment

_footer: Always align the toolbar orbiter within the horizontal bounds of nearby spatial panels_
_altText: A horizontal toolbar orbiter placed within the bounds of its spatial panel._

_footer: The toolbar orbiter shouldn’t exceed the width of adjacent spatial panels_
_altText: A horizontal toolbar orbiter that extends beyond the width of its spatial panel._

### Vertical alignment

_footer: Always align the toolbar orbiter within the vertical bounds of nearby spatial panels_
_altText: A vertical toolbar orbiter placed within the bounds of its spatial panel._

_footer: The toolbar orbiter shouldn’t exceed the height of adjacent spatial panels_
_altText: A vertical toolbar orbiter that extends beyond the height of its spatial panel._

### Spatial panel alignment

By default, toolbar orbiters are center-aligned to the spatial panel. Their placement can be adjusted to accommodate specific user needs, such as improved ergonomics or [right-to-left (RTL) languages](/m3/pages/understanding-layout/bidirectionality-rtl).

_footer: Depending on the configuration (horizontal or vertical) of the toolbar orbiter, it can align to the center, left, right, top, or bottom of a spatial panel_
_altText: Toolbar orbiter alignment options in relation to spatial panels._

Avoid placing a vertical toolbar orbiter between spatial panels. 

This negatively affects the interface structure and can make it difficult to find.

_footer: Don't place a vertical toolbar orbiter between spatial panels_
_altText: A vertical toolbar orbiter is placed between 2 spatial panels._

## Accessibility considerations

[XR accessibility](https://developer.android.com/design/ui/xr/guides/get-started#make-app) guidelines are still evolving. XR toolbars should follow applicable Material [toolbar accessibility standards](/m3/pages/toolbars/accessibility).

<!-- section: Accessibility -->

## Use cases

People should be able to the following with assistive technology:

- Navigate and activate any actions in the toolbar
- Select a destination from a menu
- Activate a back button
- Maintain access to toolbar controls when the content is scrolled or collapsed

## Interaction & style

The toolbar has no interactions by default. All interactions are with the elements placed inside.

**Touch**

- When tapping on an icon button in the toolbar, a touch ripple appears, indicating interaction feedback.

_footer: Touch: Tap_
_altText: An animation of the user tapping on an action item and the ripple effect being shown._

**Cursor**

- When hovered, the hover state provides a visual cue to the user that the element is interactive. 
- When clicked (in both active and inactive states), a ripple appears, showing the user feedback.

_footer: Cursor: Hover, Click_
_altText: A mouse hovering over a button in the top app bar, then clicking._

### Initial focus

Focus lands on the first interactive element. 

Use **Tab** to navigate through all other actions.

_footer: Use **Tab** to navigate through interactive elements_
_altText: Navigating the top app bar using arrow or tab on a keyboard._

_footer: Use **Space** or **Enter** to activate actions_
_altText: Activating actions in the top app bar using space or enter on a keyboard._

## Keyboard navigation
Keys | Actions |
Tab or Arrows
 | Navigate between interactive elements |
Space or Enter
 | Activate the focused element |

### Labeling elements

On web, the toolbar container should have the **toolbar** role. 

On mobile, it can be a generic container. 

All actions inside the toolbar should follow their respective accessibility guidelines.

_footer: On web, use the **toolbar** role_
_altText: A toolbar on web, with a “toolbar” role label._
