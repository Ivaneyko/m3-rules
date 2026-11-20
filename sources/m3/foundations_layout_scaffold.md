# Scaffold

> A fundamental UI design structure that provides a standard platform for assembling key components

slug: scaffold  |  updated: 2026-07-17T05:27:27.930Z

<!-- section: Overview -->

-
The layout scaffold structures every piece of an adaptive layout into bars, rails, and panes

-
Bars can frame the page to help people navigate through a product

-
Rails create the perimeter space surrounding panes, creating space for elements like navigation and toolbars

-
Panes hold a product’s primary content, adapting to breakpoints (previously window size classes) and other conditions

## Availability & resources

Type
 |
Resource
 |
Status
 |

Design
 |
[M3 Design Kit (Figma)](https://www.figma.com/community/file/1035203688168086460)
 |
Available
 |
 |
[Spacing system & tokens](/m3/pages/spacing)
 |
Available
 |

Implementation
 |
[Jetpack Compose: Rulers](https://developer.android.com/reference/kotlin/androidx/compose/ui/layout/Ruler)
 |
Available
 |

_footer: - Safety region  - Bar  - Pane  - Rail_
_altText: 2 diagrams of mobile and desktop layouts, identifying the parts of a scaffold._

<!-- section: Bars -->

## Bars

Bars frame the screen to help people navigate through a product. They typically contain an app bar or bottom navigation bar.

Bars can span a single pane or across the full width of a window.

_footer: - A navigation bar occupies the bottom bar region on mobile  - An app bar occupies the top bar region on the web_
_altText: Navigation bar on mobile and app bar on desktop._

App bars are placed at the top of the screen to help people navigate, providing a title and 1–2 essential actions like search or back.

_footer: - The app bar sits at the top of the screen, outside of the safety region_
_altText: A photo app with an app bar below the safety region and above a grid of photos._

Navigation bars let people switch between 3–5 primary UI views at compact or medium breakpoints.

_footer: - The navigation bar sits at the bottom of the screen, above the safety region_
_altText: A photo app with a navigation bar below a grid of photos._

### Safety region

Bars are placed adjacent to the safety regions, which contain [system UI](https://developer.android.com/develop/ui/compose/system/system-bars) elements.

The safety region shouldn’t contain primary content.

_footer: - The safety region—at the top and bottom edges of the screen on compact devices—protect system UI elements_
_altText: A photo app with a safety region above an app bar and grid of photos._

<!-- section: Rails -->

## Rails

Rails are the next level in layout after bars, filling the perimeter space surrounding panes or floating above them.

_footer: Rails occupy the spaces immediately adjacent to bars:  - A toolbar sits above the navigation bar  - A navigation rail and companion rail occupy the leading and trailing sides of a large window_
_altText: Rail regions highlighted, a bottom toolbar on mobile, and a leading and trailing rail on desktop._

On compact screens, the top and bottom rail regions can be used for components like:

-
Toolbars

-
Chat inputs

-
FABs

-
Other primary controls related to an individual screen

_footer: - On mobile, a toolbar can float in the rail region_
_altText: A mobile photo app highlighting a toolbar above a navigation bar._

On larger screens, there are rails on the sides of the screen (as well as top and bottom). The leading side rail region commonly holds the navigation rail.

_footer: At larger breakpoints, the leading rail region can be occupied by an expanded navigation rail_
_altText: A photo app on desktop, highlighting an expanded navigation rail._

The rail region on the trailing side of a large screen can hold supporting controls or actions that modify or relate to the content in a pane.

_footer: The rail region can also be occupied by a vertical toolbar or other controls_
_altText: A photo app on desktop, highlighting a trailing vertical toolbar._

In [XR](/m3/pages/xr-design/overview/), rail components can become [orbiters](https://developer.android.com/design/ui/xr/guides/spatial-ui#orbiters), which float outside the visible content area.

_footer: In full space, an XR navigation rail can float outside the main content as an orbiter_
_altText: A photo app in immersive XR, with a navigation rail floating outside the pane._

<!-- section: Panes -->

## Panes

All layouts are made up of 1–3 panes. The type of layout and amount of panes you choose should depend on the breakpoint (previously window size classes) and the type of product being built.

_footer: Layouts often include multiple panes that work together_
_altText: A two-pane layout on desktop._

All layouts are made up of 1–3 visible panes. The type of layout and amount of panes you choose should depend on the breakpoint and the type of product you're building.

Breakpoint
 |
Recommended pane total
 |
Other pane totals
 |

Compact
 |
1
 |
--
 |

Medium
 |
1
 |
2
 |

Expanded
 |
2
 |
1
 |

Large
 |
2
 |
1
 |

Extra-large
 |
2
 |
1, 3
 |

Panes can be:

-
Fixed: Width doesn’t change based on available space

-
Flexible: Width changes based on available space, and can grow and shrink

All layouts need at least one flexible pane.

_footer: - Fixed pane  - Flexible pane_
_altText: A device with 2 panes: 1 fixed and 1 flexible._

Panes can be permanent or temporary. Temporary panes can appear and be dismissed when necessary, affecting the layout and size of other panes.

_footer: Panes can be displayed permanently side by side_
_altText: 2 permanent panes._

_footer: Temporary panes can be dismissed_
_altText: Right pane with a close button being dismissed. The left pane fills the available space._

### Single-pane layouts

Single-pane layouts use one flexible pane that extends to fit the available space in a layout’s width. They can be used at any breakpoint, but are recommended for compact and medium.

_footer: A single flexible pane adapts to fit any breakpoint_
_altText: A mobile screen with 1 flexible pane._

### Two-pane layouts

**Split-pane layout**

A split-pane layout keeps the spacer visually centered. It’s best for foldable devices and dynamic layouts.

When a navigation rail or drawer is present, it only reduces the size of one pane. The other pane remains at 50% of the window width.

_footer: The navigation and first pane should be 50% of the window width to keep the spacer centered_
_altText: 2 flexible panes in a split-pane layout._

With a navigation bar, or no navigation, both panes span 50% of the window width by default.

_footer: With no navigation rail visible, split-pane layouts set each pane to 50% width by default_
_altText: 2 flexible panes at 50% width, with a navigation bar below them spanning the whole window._

**Fixed-and-flexible layout**

This layout is common for expanded, large, and extra-large breakpoints. The fixed-and-flexible panes can appear in whichever order is best for the content.

The fixed pane is often temporary, and used for side sheets or lists with light information density.

_footer: - Fixed pane  - Flexible pane_
_altText: Fixed and flexible panes arranged 2 different ways._

### Three-pane layouts

While less common, the extra-large breakpoint supports using a standard side sheet as a third pane. When the side sheet is present, the expanded navigation rail can remain visible, change into a collapsed navigation rail, or hide completely. Don't use more than three panes. 

Note: Fixed panes at this breakpoint are recommended to be 412dp, but side sheets have a default maximum width of 400dp.

_footer: - A standard side sheet can be used as a third pane_
_altText: Extra large breakpoint with 2 panes and a side sheet acting as a third pane._

## Pane expansion & resizing

Panes can be resized, expanded, and collapsed using drag handles. 

-
In a split-pane layout, both flexible panes can be freely adjusted, or can snap to certain widths.

-
In a fixed-and-flexible layout, the drag handle can fully collapse and expand the fixed pane. This makes it easy to switch between a single-pane and two-pane layout.

The drag handle should also toggle between layout sizes when selected. This can be a tap, double tap, or long press.

_footer: Drag handles can adjust pane size in a list-detail layout_
_altText: A drag handle is used to collapse a two-pane layout into a single-pane layout._

At expanded, large, and extra-large breakpoints, two-pane layouts can be customized to snap to set widths when resized.

The recommended custom widths are:

-
360dp

-
412dp

-
Split-pane with spacer centered visually

_footer: Panes can snap to custom widths when releasing the drag handle_
_altText: A drag handle adjusts the panes to recommended custom widths._

### Persistent pane resizing

The persistent resizing behavior remembers a person's pane width preference. Use this for most resizable layouts.

_footer: Pane widths persist even after a person closes the app_
_altText: Resizing the panes and then resetting the app preserves the set width._

The width persists even after a breakpoint change. This means that if a two-pane layout is collapsed to one pane at any size, it’ll remain collapsed even when changing breakpoints.

_footer: When a two-pane layout is resized to a single full-width pane, that pane should remain at full-width after switching breakpoints_
_altText: Resizing the panes and then rotating a tablet back and forth preserves the set width._

### Temporary pane resizing

The temporary resizing behavior doesn't remember a person’s preferences for pane width. This is primarily used in supporting pane layouts where resizing is uncommon.

_footer: Supporting pane layouts can have a pane drag handle to temporarily resize the secondary content_
_altText: Resizing the panes and then closing the second pane resets the set width when expanded again._

With temporary resizing, panes should always return to the default layout after the pane or product is closed and reopened. This ensures content is a suitable size for most interactions.

_footer: The pane width can be temporarily adjusted using the drag handle, but will return to the default layout_
_altText: Layouts with temporary resizing reset any custom widths to the default._

## Displaying multiple panes

Multiple panes can be displayed in three ways: co-planar, floating, or docked. The layout depends on breakpoint, what the pane does, and how people interact with it:

-
Co-planar: Two side-by-side panes. To stay accessible, persistent utilities like tool panels should be co-planar with primary content.

-
Floating: A small pane displays above larger panes. Temporary tasks should remain floating regardless of breakpoint, such as a dialog.

-
Docked: A small pane pinned to the edge of a window. For example, a bottom sheet can be docked to show additional actions.

_footer: Co-planar: Panes are displayed side by side_
_altText: A foldable open screen with 2 co-planar panes displayed side by side._

_footer: Floating: A pane is displayed above other panes or content, like a dialog_
_altText: A foldable open screen with a floating pane displayed above other elements._

_footer: Docked: A pane is displayed above other panes and one of its edges extends beyond one side of the screen, like a bottom sheet_
_altText: A foldable open screen with a docked pane to the bottom of the screen displayed above other elements._

## How panes adapt

Pane layouts can adapt using three strategies: **show and hide, levitate,** or **reflow**. When a window is resized or changes orientation, these strategies allow panes to reorganize themselves to preserve context and meaning.

### Show and hide

As the breakpoint size or orientation changes, panes can enter and exit the screen or appear next to one another.

_footer: A pane can be shown or hidden depending on the available space and orientation_
_altText: 1 pane animates off-screen when the device is vertical, then reappears when horizontal._

### Levitate

Panes can be elevated above other content as **floating** or **docked** panes. This strategy helps panes appear relative to their triggers.

Floating panes:

-
Appear in front of the body content

-
Can be customized to be dragged or resized

When adding controls that resize or move a floating pane, provide accessible controls.

_footer: A co-planar pane can float when switching breakpoint or orientation_
_altText: 1 pane floats on top of the other when the device changes to a vertical orientation._

On large screens:

-
Floating panes are the default

-
The scrim behind a floating pane is optional

_footer: - Floating pane with a scrim  - Floating pane without a scrim_
_altText: 2 ways of showing floating panes on large screens, with and without a scrim._

Docked panes are usually at the bottom of the window, like a bottom sheet.

At medium and expanded breakpoints, docked panes can adapt into floating panes.

_footer: A docked pane can adapt into a floating pane at medium and expanded breakpoints_
_altText: A docked pane on mobile turning into a floating pane on desktop._

Alternatively, at medium and expanded breakpoints, a docked pane can adapt into a co-planar pane.

_footer: A docked pane can also adapt into a co-planar pane at medium and expanded breakpoints_
_altText: A docked pane on the lower half of a mobile screen changes to a co-planar pane on a larger screen._

On large screens, consider changing docked panes into co-planar panes.

_footer: - A compact screen can have a docked pane  - On a large screen, it should change to a co-planar pane_
_altText: A docked pane on mobile and a co-planar pane on a tablet._

### Reflow

Panes can be reorganized on screen as the breakpoint or orientation changes, also known as reflow.

For example, in a vertical orientation, the supporting pane can move underneath the primary pane.

_footer: In a vertical orientation, the supporting pane can move below the primary pane_
_altText: A supporting pane changes orientation and location as the screen changes orientation._

Reflow also applies to breakpoints. When there’s not enough horizontal space for panes, they can stack vertically instead.

_footer: Panes can change size, location, and orientation when switching screen sizes_
_altText: A supporting pane on the right side of a large horizontal screen moves to the bottom of a vertical small screen._

## Spatial panels

On XR devices, pane layouts can be presented in disconnected spatial panels. These panels must have clear containment to make them easy to see on any background.

The content in a spatial panel can use implicit grouping when the pane has an explicit container to distinguish it from the environment.

_footer: When a pane uses explicit containment, content can use implicit grouping_
_altText: 2-pane layout in XR with implicit content grouping and a virtual reality background._

## Accessibility considerations

**Coplanar panes**

-
The focus order should match the visual arrangement of the panes on screen

**Floating panes**

Modal floating pane:

-
When active, the elements behind it can’t be interacted with

-
Focus moves automatically to the first element in the pane, and when the pane is closed, focus moves back to the element that triggered it, like a dialog

-
If triggered automatically, focus should still move to it, but when it’s closed, focus should go to the next most logical element on screen

-
It disappears when a person interacts with something behind it.

Non-modal floating pane:

-
When open, other parts of a product can be interacted with

-
Focus should be able to move to and from the pane

-
The pane should be available in a logical reading order of the screen

**Docked panes**

-
Have the same focus requirements as modal and non-modal panes

-
The focus order should match the visual arrangement of the panes on screen
