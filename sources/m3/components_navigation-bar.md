# Navigation bar

slug: navigation-bar  |  updated: 2026-07-28T07:36:27.700Z

<!-- section: Overview -->

-
Use navigation bars in compact or medium window sizes

-
Can contain 3-5 destinations of equal importance

-
Destinations don't change. They should be consistent across app screens.

_footer: Navigation bar for compact and medium window sizes_
_altText: Two navigation bars of different widths with 4 destinations._

## Availability & resources

## M3 Expressive update

**May 2025**

A new flexible navigation bar was introduced to replace the baseline navigation bar. It’s shorter and supports horizontal navigation items in medium windows. [More on M3 Expressive](https://m3.material.io/blog/building-with-m3-expressive)

Variants and naming:

-
Baseline navigation bar is no longer recommended

-
Added **flexible**navigation bar

Shorter height

-
Can be used in medium window sizes with horizontal navigation items

Color:

-
Active label changed from **on-surface-variant** to **secondary**

_footer: The flexible navigation bar is shorter and can be used in medium windows with horizontal nav items_
_altText: Navigation bar in M3 Expressive. It’s shorter than the baseline nav bar._

## Differences from M2

- Color: New color mappings and compatibility with dynamic color
- Elevation: No shadow
- Layout: Container height is taller
- States: The active destination can be indicated with a pill shape in a contrasting color
- Name: Bottom navigation has been renamed **navigation bar**

_footer: M2: A drop shadow indicates placement on top of content. Filled and regular weight icons indicate active states._
_altText: M2 nav bar with a drop shadow and no active indicator._

_footer: M3: Taller and no drop shadow. Filled icons and an active indicator indicate active state._
_altText: M3 nav bar with a surface color and active indicator._

<!-- section: Specs -->

## Variants

_footer: - Flexible navigation bar_
_altText: The recommended flexible navigation bar._

### Baseline variants

The baseline nav bar is no longer recommended, and should be replaced by the flexible nav bar, which is shorter and supports horizontal navigation items in medium windows. [View baseline nav bar specs](/m3/pages/navigation-bar/specs#46dc2521-acf0-44e3-bbc0-78dc225b9749)

_footer: - Navigation bar (not recommended)_
_altText: 1 baseline navigation bar._

Variant
 |
M3
 |
M3 Expressive
 |

Flexible navigation bar
 |
--
 |
Available
 |

Navigation bar
 |
Available
 |
Not recommended.

Use **flexible navigation bar**.
 |

## Configurations

In compact windows, navigation bars use vertical items. In medium windows, navigation bars should use horizontal items.

_footer: - Vertical navigation items - Horizontal navigation items_
_altText: Two size configurations for navigation bar and items._

Category

 |
Configuration

 |
M3

 |
M3 Expressive

 |

Navigation item layout

 |
Vertical (default)

 |
Available

 |
Available

 |

Horizontal

 |
--

 |
Available

 |

## Tokens & specs

Use the table's menu to switch between token sets for the navigation bar and the nav items. [](/m3/pages/navigation-bar/specs#3425f33a-0b11-492a-ae5a-40d63f939384)[Learn about design tokens](/m3/pages/design-tokens/overview/)

## Anatomy

_footer: - Container - Icon - Label text - Active indicator - Small badge (optional) - Large badge (optional) - Large badge label_
_altText: Seven elements of the navigation bar._

## Color

Color values are implemented through design tokens. For designers, this means working with color values that correspond with tokens; in implementation, a color value will be a token that references a value. [Learn more about design tokens](/m3/pages/design-tokens/overview)

_footer: Navigation bar color roles used for light and dark schemes:  - Surface container - On-secondary container - Secondary - Secondary container - On-surface variant - On-surface variant_
_altText: Six color roles of the navigation bar._

For badge color roles, go to [badge specs](/m3/pages/badges/specs).

## States

States are visual representations used to communicate the status of a component or an interactive element.

_footer: - Enabled - Hovered (8% state layer) - Focused (10% state layer) - Pressed (10% state layer)_
_altText: Four states of the navigation bar items._

## Measurements

The navigation bar stretches the full window width.

_footer: Navigation bar padding and size measurements_
_altText: Navigation bar padding and size measurements._

Vertical navigation items dynamically change width to equally fit the container. Horizontal navigation items have a fixed width, so extra space is added to the ends of the navigation bar instead.

_footer: Navigation bar width and margins for compact and medium windows.  - Vertical navigation item - Margin from window edge - Horizontal navigation item_
_altText: Navigation bar and item widths._

## Baseline navigation bar

_footer: - Container - Icon - Label text - Active indicator - Small badge - Large badge - Large badge label_
_altText: 7 elements of baseline navigation bar._

### Tokens & specs

These tokens are for the baseline navigation bar.

### Color

Color values are implemented through design tokens. For designers, this means working with color values that correspond with tokens; in implementation, a color value will be a token that references a value. [Learn more about design tokens](/m3/pages/design-tokens/overview)

_footer: Navigation bar color roles used for light and dark schemes:  - Surface - On secondary container - On surface - Secondary container - On surface variant - On surface variant_
_altText: 6 color roles of baseline navigation bar._

For badge color roles, go to [badge specs](/m3/pages/badges/specs).

### States

States are visual representations used to communicate the status of a component or an interactive element.

_footer: Navigation bar states:   - Enabled  - Hovered  - Focused  - Pressed_
_altText: 4 states of baseline navigation bar._

## Measurements

_footer: Navigation bar padding and size measurements_
_altText: Baseline navigation bar padding and size measurements._

_footer: Navigation bar target size and margins_
_altText: Baseline navigation bar target size and margins._

## Configurations

_footer: - 3 destinations - 4 destinations - 5 destinations_
_altText: 3 configurations of the baseline navigation bar._

<!-- section: Guidelines -->

_footer: Navigation bars adapt to different breakpoints_
_altText: A nav bar with vertical items in a compact window, and horizontal items in a medium window._

## Usage

Navigation bars provide access to three to five destinations. The nav bar is positioned at the bottom of windows for convenient access.

Each destination is represented by an icon and label text. One navigation destination is always active.

When a navigation bar icon is tapped or focused, people are taken to the navigation destination associated with that icon.

_footer: Navigation bars can have three to five destinations_
_altText: A nav bar for a music app with 4 destinations: Home, Browse, Radio, Library, It’s in a compact window._

Navigation bars should be used for:

- Three to five main pages in the product
- Mobile or tablet only

Navigation bars shouldn’t be used for accessing single tasks, such as viewing one email.

_footer: On mobile or tablet, navigation bars should be used for top-level destinations_
_altText: A nav bar for a music app with 4 destinations: Home, Browse, Radio, Library. It’s in a medium window._

The navigation items can be **vertical** or **horizontal**.

-
Use vertical items in compact windows, like mobile

-
Use horizontal items in medium windows, like tablets

_footer: Vertical navigation items work best in compact windows. Horizontal items work best in medium windows._
_altText: A nav bar with vertical items in a compact window, and horizontal items in a medium window._

For products with more than five navigation items, don’t use a navigation bar; the elements may collide and there likely won’t be enough space for translated text.

Instead, consider using tabs to organize similar content within a page, or hide the navigation behind a menu icon using a modal expanded navigation rail.

_footer: Avoid putting more than five navigation items in a navigation bar_
_altText: A nav bar with 7 items in a compact window._

_footer: Don’t remove the labels from navigation items_
_altText: A nav bar with no labels for each page item._

_footer: Don’t use a navigation bar for fewer than three destinations. Instead, use tabs._
_altText: A nav bar with 2 page items._

_footer: Use navigation for distinct pages and tabs for related content within a page_
_altText: A nav bar is on the Library page of a music app. Tabs at the top of the page have secondary navigation for playlists, artists, albums, and songs._

_footer: Navigation bar destinations have fixed positions. Don’t scroll them or modify their positions._
_altText: Nav bar using horizontal items in a compact window. The items are too wide and flow off screen._

## Anatomy

_footer: - Container - Icon - Label text - Active indicator - Large badge (optional) - Small badge (optional)_
_altText: 6 elements of the nav bar._

### Container

The container should always be placed at the bottom of the product and span the full length of the window. Navigation items are centered within the container.

The container has a color fill to provide separation from other content.

_footer: The navigation bar container holds all elements_
_altText: The nav bar at the bottom of a medium window has a color fill to differentiate from the background._

### Navigation items

Navigation items hold all elements for each destination: the icon, label text, and active indicator. They can be **vertical**, with the text below the icon and indicator, or **horizontal**, with the icon and text beside each other inside the indicator. 

Vertical items are best in compact windows, and horizontal items are best in medium windows.

Horizontal items are centered in the nav bar with outer margins.

_footer: The navigation bar is divided into equal-width segments with padding from the window edge_
_altText: The nav bar in a medium window with padding on each side._

### Icons

Navigation rail items must use icons that symbolize the content of their page. Browse [popular icon](https://fonts.google.com/icons).

Use a filled icon for the active destination and outlined icons for inactive destinations. If an icon doesn’t have a filled version, apply **semibold** weight to the icon instead.

_footer: Use filled icons when the navigation item is active_
_altText: An active nav item with a filled icon compared to inactive items with outlined icons._

_footer: If a filled version of an icon is unavailable, the icon’s weight must increase_
_altText: An active nav item with a semibold icon compared to inactive items with outlined icons._

Active and inactive icons must have a minimum 3:1 contrast ratio with the container.

_footer: Don’t use multiple or low-contrast colors in a navigation bar, as they make it harder for people to distinguish the active item and navigate to other destinations_
_altText: 4 nav items that are each different colors with low contrast with the background._

### Active indicator

The active indicator shows which page from the nav bar is currently being displayed.

_footer: Use the active indicator only for the active destination_
_altText: The current page in a nav bar has an active indicator._

_footer: Don’t use the active indicator for more than one destination at a time_
_altText: All items in a nav bar have active indicators._

### Label text

The label text should be a short, meaningful description of each navigation destination and another way for people to understand an icon’s meaning.

All navigation items require a label text. It should be 1-2 words.

_footer: Label text must be brief and clear_
_altText: A nav bar on a music app with clearly labelled destinations: home, browse, radio, library._

_footer: Use brief text labels to identify the purpose of a destination_
_altText: A nav bar with 1-word labels for each page._

_footer: Don’t wrap or truncate text as it can make the label hard to understand_
_altText: A nav bar with “Music catalog” for a label. The label is truncated._

_footer: Don’t shrink longer text to fit on a single line_
_altText: A nav bar with “Music catalog” for a label. The label is a smaller size to make the text fit._

### Badges (optional)

Navigation bars can display badges in the upper right corners of the destination icon.

Badges can contain dynamic information, such as the number of new messages.

_footer: Use a small badge to indicate an update, and a large badge to show the amount of updates_
_altText: A nav bar with a destination called “Go” with a small badge and one called “Saved” with a large badge saying “3.”_

_footer: Badges overlap the icon in both vertical and horizontal navigation items_
_altText: Horizontal nav items with the badges in the same place of the icon as vertical nav items._

## Placement

The floating action button (FAB) is placed above the navigation bar. Nav bars are always placed at the bottom of the window.

_footer: The FAB should be right-aligned above the navigation bar_

_footer: Don’t cover the navigation bar with a FAB_
_altText: A mobile page with a FAB overlapping a nav bar._

Navigation bars can be temporarily covered by dialogs, bottom sheets, navigation drawers, the on-screen keyboard, or other elements needed to complete a flow. They should not be permanently obstructed on any screen.

_footer: The search feature of the screen triggers the on-screen keyboard, temporarily covering the bottom navigation bar until the search flow is completed_
_altText: The navigation bar being covered by a bottom sheet when users take an action on screen._

## Adaptive design

Adaptive design allows an interface to respond or change based on context, such as the user, device, and usage. More on [adaptive design](/m3/pages/layout-overview/adaptive-design)

### Resizing

Only use navigation bars for compact and medium breakpoints. 

**Compact**: For narrow windows, use a navigation bar or modal navigation rail.

**Medium**: Use a navigation bar or navigation rail. Decide based on whether horizontal or vertical space is more important.

**Expanded and extra-large**: Use a navigation rail instead. Decide based on available window space and the number of navigation destinations.

_footer: Navigation bars are best suited for compact and medium breakpoints_
_altText: A music app with a nav bar adapting to larger screens, where it changes to horizontal items, and then into a nav rail._

The navigation bar container spans 100% of the window width.

_footer: Navigation bars use 100% of the screen width_
_altText: Navigation bar spanning the full width of a compact window._

The navigation bar is used on smaller devices. It’s not intended for desktop.

_footer: Don’t use navigation bars for desktop layouts. Instead, use a navigation rail or tabs._
_altText: Navigation bar spanning the full width of an expanded window size._

### Presentation

In medium breakpoints, use horizontal nav items to better use available space.

Horizontal nav items should remain centered with the same padding at each breakpoint.

_footer: A navigation bar in horizontal orientation keeps the same spacing between destinations_
_altText: Horizontal nav items have the same width in medium and expanded windows. Only the padding changes._

## Behavior

### Navigation

When selecting a navigation bar item not currently selected, the product navigates to that destination’s screen using a [top level](/m3/pages/motion-transitions/transition-patterns#f852afd2-396f-49fd-a265-5f6d96680e16) transition pattern. It can either remember where you left off, or reset to the default view.

- **Preserve state**: If someone has interacted with this destination, it returns to their scroll position, current tab, and in-line search status.
- **Reset state**: Any prior user interactions are reset, including scroll position, tab selection, and in-line search.

Choose the behavior that best suits the product and user needs. For example, an app that requires frequent switching between sections should preserve each section’s state.

_footer: After selecting an item on the bottom navigation bar, the app navigates to that destination’s screen_

Re-selecting the currently active destination should reset the scroll position to the top of the page.

**Don't swipe between destinations**
Swiping across the screen does not navigate between destinations, and is not supported by the navigation bar. Swipe behavior should be reserved for related items, such as cards in a carousel, or actions such as archiving a list item.

_footer: Selecting the already selected navigation item scrolls to the top of the screen_
_altText: Selecting the currently active nav item scrolls the page content back to the top._

### Scrolling

Upon scroll, the navigation bar can appear or disappear. 

Don’t hide the navigation bar on scroll when a [screen reader](https://m3.material.io/foundations/overview/assistive-technology#ec6f3e84-a51c-4dc0-a353-6844f5bde698) is active.

_footer: Scrolling downward can hide the navigation bar; scrolling upward reveals it_
_altText: When scrolling on the page, the nav bar scrolls the opposite direction off screen._

### Selection

The icon becomes filled and the active indicator expands from the center of the icon when switching between destinations.

The active indicator animation should only apply on one axis to better represent a flat, shared plane.

_footer: An active indicator appears when the item is selected._
_altText: The active indicator expands from the target when a destination is selected_

When a destination is tapped, the destination screens use a [top level](/m3/pages/motion-transitions/transition-patterns#f852afd2-396f-49fd-a265-5f6d96680e16) transition pattern. In addition, the icon becomes filled and the active indicator expands from the center of the icon.

_footer: Tapping a destination uses a top level transition pattern_
_altText: Selecting the home item changes the entire page contents._

starNote:This is a rapidly changing space. Guidelines are primarily intended for designers at this time. Find what’s implemented in code in the [design kit](https://www.figma.com/community/file/1035203688168086460).

Extended reality (XR) interfaces have special design requirements, like showing apps in 3D space. Material has an XR-specific navigation bar with custom specs and guidance. See [XR developer documentation](http://developer.android.com/design/ui/xr/guides/foundations) for more details.

## Anatomy

_footer: - Container - Icon - Active indicator - Small badge (optional) - Large badge (optional) - Large badge label (optional) - Label text_
_altText: Diagram of navigation bar orbiter identifying 7 internal elements of the component._

## Color & elevation

On XR, color is used to highlight elevated UI elements and orbiters. With [spatial elevation](https://developer.android.com/design/ui/xr/guides/spatial-ui#spatial-elevation), the navigation bar displays above the spatial panel, on the Z-axis. Color communicates elevation on UI elements and orbiters. Elevated nav bars can use any of these color options:

_footer: - Surface container - Surface container high - Surface container highest - Tertiary container_
_altText: 4 versions of elevation color strategy._

## Measurements

_footer: Navigation bar orbiter padding and measurements_
_altText: Measurements and padding for navigation bar orbiter._

## Usage

In full space, a navigation bar can appear in an orbiter for a more immersive experience. Currently, spatial capabilities, such as orbiters, are only available in full space. In home space, use a regular navigation bar on the same plane as the body content to mimic a 2D experience.

_footer: Navigation bar behavior and placement changing when going from a 2D to a 3D experience_
_altText: Interface showcasing navigation bar behavior and placement when transitioning from a 2D to 3D experience._

## Behavior

### Global context

When placed in global context, the navigation bar orbiter is centered at the bottom of the app it controls. It stays anchored to the app during layout or content changes. This ensures navigation elements are easy to find and use.

_footer: A navigation bar orbiter centered and anchored to the bottom of the app_
_altText: A navigation bar orbiter placed in global context._

### Local context

When placed in local context, the navigation bar orbiter is centered at the bottom of the spatial panel it controls. It repositions in response to layout or content changes.

_footer: Use caution before placing a navigation bar in local context. If it contains navigation elements that affect the overall app, a navigation bar orbiter should be placed in global context._
_altText: A navigation bar orbiter placed in local context._

## Placement

### Navigation context

The position of the navigation bar orbiter should communicate its navigational context:

- Use **offset positioning** for global actions that affect the overall app experience
- Use **inset positioning** for local actions that are specific to a spatial panel

A navigation bar orbiter can either overlap or be positioned adjacent to spatial panels with a 20dp margin for visual separation.

_footer: Position the navigation bar orbiter to reflect context: offset for global actions, inset for spatial panel-specific actions_
_altText: Navigation bar orbiter offset and inset positioning._

### Inset positioning

Don’t obstruct content. To ensure a balanced and uncluttered layout, a navigation bar orbiter should overlap spatial panels by 12dp and no more than half their height.

_footer: Avoid overlapping an inset a navigation bar orbiter by more than half its height_
_altText: Navigation bar orbiter inset positioning beyond the 12dp recommendation._

### Horizontal alignment

The navigation bar orbiter placement shouldn't exceed the width of adjacent spatial panels.

_footer: The navigation bar orbiter shouldn’t exceed the width of the spatial panel_
_altText: Nav bar orbiter placement that exceeds the width of its spatial panel._

### Spatial panel alignment

A navigation bar orbiter should always be placed at the bottom of a spatial panel and within the immediate field of view (FOV). Follow common usability practices to make the experience easy to use and consistent across platforms.

Avoid placing the navigation bar orbiter at the top of a spatial panel, as this area is typically reserved for app bar orbiters or other critical UI elements.

_footer: Don't position a navigation bar orbiter at the top of a spatial panel. Position it at the bottom in the field of view to maintain usability and minimize interaction effort._
_altText: Nav bar orbiter incorrectly placed above a spatial panel._

## Accessibility considerations

[XR accessibility](https://developer.android.com/design/ui/xr/guides/get-started#make-app) guidelines are still evolving. XR navigation bars should follow applicable Material [nav bar accessibility standards](/m3/pages/navigation-bar/accessibility).

<!-- section: Accessibility -->

## Use cases

People should be able to do the following using the assistive technology:

- Move between navigation destinations
- Select a particular navigation destination from a set
- Get appropriate feedback based on input type

## Interaction & style

**Touch**

- When a navigation item is tapped, the active indicator appears in place, providing feedback that it’s selected
- A touch ripple passes through the indicator
- The icon switches from outlined to filled
- The icon changes color

_footer: Touch: Tap_
_altText: On a navigation bar, when the Home and Explore icons are tapped, an active indicator is displayed as interaction feedback._

**Cursor**

- When hovered, the active indicator appears in a reduced state providing a visual cue that the destination is interactive
- When clicked (in both active and inactive states), a ripple passes through the indicator
- The icon switches from outlined to filled
- The icon changes color, becoming darker

_footer: Cursor: Hover, Click_
_altText: On a navigation bar, the hover and click interactions on the Home and Explore icons have different interaction feedback._

### Text scaling and truncation

When someone sets their device to show a larger text size, the navigation bar should grow vertically to accommodate larger labels while retaining the default padding. It’s okay for scaled text to wrap in navigation items.

To remain accessible, ensure the full label is always visible on-screen at up to 2x text sizing. Beyond this size, text can truncate.

_footer: Text scaled to 1.5 size_
_altText: Nav bar with text scaled to 1.5x size. Some labels are on two lines, others are on one line._

_footer: Text scaled to 2x size_
_altText: Nav bar with text scaled to 2x size. Some labels wrap to two lines._

## Initial focus

Initial focus lands directly on the first navigation item, since that is the first interactive element of the component.

_footer: Focus lands on first navigation item_
_altText: Focus order and keyboard navigation of a nav bar._

_footer: The navigation item is selected with Space/Enter_
_altText: Activating a nav item with space on a keyboard._

## Visual indicators

Use a filled icon with a bold label for selected destinations. For unselected destinations use an outlined icon with a medium label.

If an icon doesn’t have a filled style, use a thicker or heavier version of the icon instead.

_footer: Use a filled icon for the selected navigation destination to differentiate from the other destinations_
_altText: A nav bar with a filled icon for the selected nav item._

_footer: Don’t use outlined icons on selected nav items_
_altText: A nav bar with an outlined icon for the selected nav item._

_footer: When selected, the icon fills, darkens, and is backed by an active indicator shape_
_altText: 2 nav items, one selected, one unselected._

## Keyboard navigation
Keys | Actions |
Tab | Move between navigation items |
Space / Enter | Selects the focused navigation item |

## Labeling elements

The accessibility label for a navigation item is typically the same as the destination name.

_footer: A navigation bar’s accessibility label can incorporate its adjacent UI text_
_altText: Accessibility label and role defined for a Home icon on a navigation bar._

When the visible UI text is ambiguous, accessibility labels need to be more descriptive. For example, a navigation destination visibly labeled **Library**would benefit from additional information in its accessibility label to clarify the destination’s intent.

Note: On Android Views (MDC-Android), a more descriptive accessibility label is not available and the role is not announced.

_footer: While the visible label text reads **Library**, the accessibility label for this destination clarifies its function: **Music library**_
_altText: Accessibility labels of a navigation bar._
