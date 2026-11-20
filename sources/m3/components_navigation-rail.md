# Navigation rail

slug: navigation-rail  |  updated: 2026-07-24T07:30:37.949Z

<!-- section: Overview -->

- Use navigation rails in medium, expanded, large, or extra-large window sizes
- Can contain 3-7 destinations plus an optional FAB
- Always put the rail in the same place, even on different screens of an app

_footer: Collapsed and expanded navigation rails can transition between each other on any device, including:   1. Large or medium window size classes like tablets 2. Compact window size classes like phones in portrait orientation_
_altText: Navigation rail with 4 destinations, 1 active, and FAB._

## Availability & resources

## M3 Expressive update

**May 2025**

A **collapsed** and **expanded** navigation rail have been introduced to replace the baseline nav rail. The expanded nav rail is meant to replace the navigation drawer. [More on M3 Expressive](https://m3.material.io/blog/building-with-m3-expressive)

Variants and naming:

-
The baseline **navigation rail** is no longer recommended

-
Added two wider navigation rails:

**Collapsed:** replaces baseline nav rail

-
**Expanded**: replaces navigation drawer

Configurations:

-
Expanded rail modality:

Non-modal

-
Modal

-
Expanded behavior:

Transition to collapsed navigation rail

-
Hide when collapsed

-
Color:

Active label on vertical items changed from **on surface variant** to **secondary**

_footer: The collapsed and expanded navigation rails match visually and can transition into each other_
_altText: A collapsed and expanded navigation rail._

## Differences from M2

- Behavior: Predictive back interaction
- Color: New color mappings and compatibility with dynamic color
- States: The active destination can be indicated with a pill shape in a contrasting color

_footer: M2: The navigation rail uses icon color, weight, and fill to communicate which destination is active_
_altText: M2 navigation rail with 1 colored and filled icon showing the active state and 3 inactive icons._

_footer: M3: The navigation rail uses a pill-shaped active indicator to communicate which destination is active_
_altText: M3 navigation rail with 1 icon surrounded by a pill shape in contrasting color to show the active state._

<!-- section: Specs -->

## Variants

_footer: - Collapsed navigation rail  - Expanded navigation rail_
_altText: 2 variants of navigation rails._

### Baseline variants

The baseline navigation rail is no longer recommended, and should be replaced by the collapsed navigation rail. [View baseline tokens](/m3/pages/navigation-rail/specs#d4d97764-20ec-496f-a6f3-0d423940ec5a)

_footer: - The baseline navigation rail is no longer recommended_
_altText: Baseline navigation rail._

Variant
 |
M3
 |
M3 Expressive
 |

Collapsed navigation rail

 |
--
 |
Available
 |

Expanded navigation rail 

 |
--
 |
Available
 |

Navigation rail (baseline)

 |
Available
 |
Not recommended.

Use **collapsed navigation rail**.

 |

## Configurations

_footer: - Expanded layout: standard - Expanded layout: modal_
_altText: Standard and modal layouts of navigation rail._

Category
 |
Configuration
 |
M3
 |
      M3 Expressive
 |

Expanded layout
 |
Standard (default)
 |
Available as navigation drawer

 |
Available
 |

Modal
 |
Available as navigation drawer

 |
Available
 |

Expanded behavior
 |
Hide when collapsed
 |
--
 |
Available
 |

## Tokens & specs

Browse the component elements, attributes, tokens, and their values. [Learn about design tokens](/m3/pages/design-tokens/overview/)

## Anatomy

_footer: Collapsed and expanded navigation rail elements:  - Container - Menu (optional) - FAB or Extended FAB (optional) - Icon - Active indicator - Label text - Large badge (optional) - Large badge label (optional) - Small badge (optional)_
_altText: 9 elements of collapsed and expanded navigation rails._

## Color

Color values are implemented through design tokens. For designers, this means working with color values that correspond with tokens; in implementation, a color value will be a token that references a value. [Learn more about design tokens](/m3/pages/design-tokens/overview)

_footer: Navigation rail color roles used for light and dark schemes:  - Surface container (optional)  - On secondary container  - Secondary container  - Secondary (vertical), On secondary container (horizontal)  - On surface variant  - On surface variant  - Error  - On error  - Error_
_altText: Color roles of 9 elements of collapsed and expanded navigation rails in light and dark color schemes._

## States

States are visual representations used to communicate the status of a component or an interactive element.

The navigation item’s target area always spans the full width of the nav rail, even if the item container hugs its contents.

_altText: 4 states of collapsed navigation rails._

_footer: - Enabled - Hovered - Focused - Pressed_
_altText: 4 states of expanded navigation rails._

## Measurements

_footer: Navigation rail padding and size measurements_
_altText: Padding and measurements for expanded and collapsed navigation rails._

## Common layouts

_altText: 4 common layouts of collapsed navigation rail._

_footer: - Three navigation items  - Three navigation items with a menu - Three navigation items with a FAB - Three navigation items with a menu and FAB_
_altText: 4 common layouts of expanded navigation rail._

## Baseline navigation rail

_footer: - Container - Menu icon (optional) - Icon - Active indicator - Label text - Large badge label (optional) - Large badge (optional) - Badge (optional)_
_altText: 8 elements of baseline navigation rail._

### Tokens & specs

### Color

Color values are implemented through design tokens. For design, this means working with color values that correspond with tokens. For implementation, a color value will be a token that references a value. [Learn more about design tokens](/m3/pages/design-tokens/overview)

_footer: Navigation rail color roles used for light and dark themes:  - On secondary container - Secondary container - On surface - On surface variant - On surface variant - Error - On error - Error_
_altText: 8 color roles of baseline navigation rail._

### States

States are visual representations used to communicate the status of a component or interactive element.

_footer: Navigation rail states:  - Enabled (on active destination) - Hovered (on active destination) - Focused (on active destination) - Pressed (on active destination) - Enabled (on inactive destination) - Hovered (on inactive destination) - Focused (on inactive destination) - Pressed (on inactive destination)_
_altText: 8 states of baseline navigation rail._

### Measurements

_footer: Navigation rail size measurements_
_altText: Baseline nav rail size measurements._

_footer: Navigation rail padding and margin measurements_
_altText: Baseline nav rail padding and margin measurements._

### Configurations

Common arrangements of elements within a navigation rail.

_footer: - With a menu - With a FAB - With menu and FAB, without labels - All destinations with text labels - With menu, FAB, and label text for all destinations_
_altText: 5 configurations of the baseline navigation rail._

<!-- section: Guidelines -->

_footer: Use the menu icon to transition between collapsed and expanded navigation rails_
_altText: Colorful, purple navigation rail shown collapsed and expanded._

## Usage

The navigation rail can display navigation items, a menu, and a floating action button (FAB) in a vertical orientation.

There are two variants of navigation rails, **collapsed** and **expanded**, which can easily transform into each other when the menu button is selected.

### Collapsed

The **collapsed** nav rail runs along the leading edge of the window, and should contain 3–7 navigation items. It should not be hidden.

It can be used in medium to extra large breakpoints, such as tablets and desktop. In  medium windows with few destinations, consider using a navigation bar instead. Compact windows should always use a navigation bar.

_footer: A navigation rail should be the only visible navigation element_
_altText: Collapsed navigation rail with “timer” icon on FAB._

### Expanded

The **expanded** navigation rail can be standard or modal, and should always open from a menu icon. An expanded rail can reveal secondary destinations not visible when collapsed.

The **standard** configuration is placed beside body content. It’s best for larger windows with lots of available space.

The **modal** configuration overlaps the body content, and should be opened from a menu icon. Use the modal configuration for:

- Information dense layouts where space is limited
- Products with many navigation items

_footer: A navigation rail can be expanded by default on larger screen sizes, or can be expanded over content on smaller screen sizes_
_altText: Expanded navigation rail shown expanded by default and expanded over screen content._

In immersive experiences, the expanded navigation rail can be hidden entirely, appearing only when the menu icon is selected.

The collapsed navigation rail should not be hidden.

_footer: The expanded navigation rail can also be hidden, appearing only when the menu icon is selected_
_altText: Navigation rail and hidden navigation rail with menu icon button for expansion._

## Anatomy

_footer: - Container - Menu (optional) - Floating action button (FAB) (optional) - Icon - active - Label text - active - Active indicator - Icon - inactive - Large badge (optional) - Large badge label - Small badge - Label text - inactive_
_altText: 10 elements of expanded and collapsed navigation rails._

### Container

The navigation rail should be placed on the leading edge of the window. This is the left side for left-to-right languages, and the right side for right-to-left languages.

The container fill can be turned off so the nav rail appears directly on the surface. When doing this, make sure all items have a minimum of 3:1 color contrast.

_footer: The navigation rail should be placed on the leading edge of the window_
_altText: Right-to-left navigation rail in Hebrew, and left-to-right navigation rail in English._

The navigation rail should always run vertically along the side of a layout. Don’t make it horizontal.

Use a navigation bar for horizontal navigation.

_footer: Don’t use the navigation rail horizontally. Use a navigation bar instead._
_altText: Horizontal navigation rail on timer screen._

Navigation rail items can be aligned as a group to the top or center of a layout. On tablets, use center alignment to make it easier to reach items.

The menu icon and FAB should always be top-aligned.

_footer: Top and center aligned rail destination placement_
_altText: Navigation rails with different alignments._

### Menu (optional)

The menu button can transition between the **collapsed**and **expanded** navigation rails.

Once expanded, the rail can reveal secondary destinations.

When the navigation rail is expanded, the menu icon should change to represent that it can be collapsed.

_footer: A navigation rail can expand to reveal more destinations_
_altText: Expanded and collapsed navigation rails controlled by a menu icon button._

### Floating action button (FAB) (optional)

The container of the navigation rail is ideal for anchoring the FAB to the top of a screen, placing the app’s key action above navigation destinations.

When nested within another component, such as the navigation rail, the FAB's resting elevation should be [level 0](/m3/pages/elevation/applying-elevation).

_footer: A top-aligned FAB in the navigation rail_
_altText: Navigation rail with a FAB button at the top of the screen._

_footer: Avoid placing the FAB below navigation items_
_altText: Navigation rail with a FAB button at the bottom of the screen._

The top of the rail can also be used for a logo, however avoid using logos that could be mistaken as buttons.

Don’t use a logo as a menu button to expand the navigation rail.

_footer: Use caution when placing logos in the rail where they might be confused with an action or destination_
_altText: Navigation rail with Material design logo at the top of the screen._

### Active indicator

The active indicator shows which page is being displayed.

_footer: Use the active indicator only for the current open page_
_altText: Navigation rail with active indicators present for the current screen._

_footer: Don’t use the active indicator for more than one navigation item at a time_
_altText: Navigation rail with active indicators present for all navigation items._

The active indicator hugs the label text in the expanded nav rail. To achieve a similar style to the baseline navigation drawer, consider modifying the active indicator to fill the container.

The target area should always span the full width.

_footer: The active indicator hugs contents in the expanded nav rail_
_altText: Navigation rail with active indicator that hugs the text and icon._

_footer: Override the indicator to fill the container to more closely resemble the baseline navigation drawer_
_altText: Navigation rail with active indicator that is larger than the content within it._

### Icons

Navigation rail items must use icons that symbolize the content of their page. Browse popular icons on [Google Fonts](http://fonts.google.com/icons).

_footer: Icons should symbolize the content of the page they open_
_altText: Navigation rail with icons that fit the destinations, like a timer icon and label leading to a timer feature._

When a destination is selected, the icon fills and changes color. An active indicator appears behind the icon.

_footer: Selected navigation items have an active indicator, a filled icon, and a more prominent color_
_altText: Icons with and without an active indicator._

### Label text

The label text should be a short, meaningful description of each navigation destination and another way for users to understand an icon’s meaning.

All navigation items require a one word label text.

_footer: Write clear and concise labels that describe the destination page_
_altText: Navigation rail with clear text labels._

Avoid wrapping long labels when possible. If necessary, create a line break between words, or hyphenate longer words.

_footer: Break up longer phrases into two text lines if necessary_
_altText: Navigation rail with lengthy text labels._

Labels should be short enough to not be truncated. Don’t shrink the type scale to fit longer text labels.

_footer: Don’t truncate or display an ellipsis in place of label text_
_altText: Navigation rail with truncated text label with ellipses._

_footer: Don’t reduce the type size to fit more characters into a destination label_
_altText: Navigation rail with small text label._

### Badges

Navigation rail icons can include badges to communicate dynamic information about the  destination, such as counts or status.

In compact nav rails, the badge is placed in the upper right corner of the icon. In expanded nav rails, the badge should be placed next to the label text.

_footer: 1. Small badge on a rail destination  2. Large badge with a number 3. Large badge with a maximum character count_
_altText: Navigation rail with badges on each icon._

### Divider (optional)

A vertical divider can help separate the rail from app content. The divider should be positioned on the edge of the rail container that’s adjacent to the app’s content area.

_footer: A divider can make the navigation rail container distinct from other on-screen content_
_altText: Navigation rail with divider separating it from screen content._

## Placement

In adaptive layouts, the navigation rail should be placed outside any panes, always along the leading edge of the window. Don’t place it within body content.

When the navigation rail is hidden, the body content can fill in the remaining space as long as the menu icon is still accessible.

Tabs can be used alongside a navigation rail to create an extra layer of visible navigation.

_footer: Expanded navigation rails can open from menu buttons on mobile_
_altText: Navigation rail collapsed next to screen content, and expanded overlaying screen content with secondary destinations._

## Adaptive design

For more, see [adaptive design](/m3/pages/layout-overview/adaptive-design/).

### Resizing

When moving from a large screen to a small screen, a navigation rail can transform into a navigation bar, providing the same quick access in a configuration that’s easier to use on smaller displays. Never use the navigation rail and navigation bar simultaneously. 

Only use navigation rails for medium breakpoints and larger. Don’t use a navigation bar. If there are more than five destinations, consider using a modal expanded nav rail instead.

**Compact:** Don’t use a standard navigation rail for compact layouts due to space constraints. Use a navigation bar instead.

**Medium:** Use a navigation rail, especially if prioritizing persistent vertical navigation over maximizing vertical content space.

**Expanded to extra-large:** Use a navigation rail, not a navigation bar. Consider available horizontal space and the number of destinations when choosing between standard and modal.

_footer: On smaller devices, use a navigation bar. On larger displays, use a navigation rail._
_altText: Navigation bar on a phone screen and navigation rail on a tablet screen._

### Presentation

When the navigation rail transitions from collapsed to expanded, the contents of the page should automatically adjust to fit.

The contents of the navigation rail also expand to fill the space. For example, the FAB should transition into an extended FAB. 

Extra destinations can be shown in an expanded nav rail.

_footer: Use a standard expanded rail when there are secondary destinations or actions that have lower priority than the main navigation items_
_altText: Extra destinations in an expanded navigation rail._

## Behavior

### Scrolling

Destinations in the navigation rail should remain visible and fixed when scrolling vertically.

_footer: Rail destinations remain fixed while on-screen content scrolls vertically_
_altText: Screen content scrolls while rails stay fixed._

If a layout scrolls horizontally, the rail can scroll off-screen or remain fixed. To distinguish that content is scrolling underneath the rail, use a divider or add elevation to the rail.

_footer: A divider and color fill change create visual distinction between the rail and horizontally scrolling content_
_altText: A nav rail with a divider between it and the page’s content._

_footer: Elevating the rail to level 1 creates visual distinction between the rail and horizontally scrolling content_
_altText: A nav rail with slight elevation._

### Selection

When a destination is tapped, the destination screen uses a [top level](/m3/pages/motion-transitions/transition-patterns#f852afd2-396f-49fd-a265-5f6d96680e16) transition pattern. In addition, the icon becomes filled and the active indicator expands from the center of the icon.

_footer: Tapping a destination uses a top level transition pattern_
_altText: Selection transition between one navigation item and another._

### Back

On Android, a gesture called predictive back allows people to swipe left or right on the screen to go back or dismiss modal components.

- Previous screen is revealed in a preview to signal the destination
- Predictive back only applies to the **modal expanded** navigation rail.

A list of compatible components is available on the [gestures page](/m3/pages/gestures/).

_footer: The nav rail pops off the edge of the window during the predictive back gesture_
_altText: Modal expanded navigation rail with Android predictive back feature._

starNote:This is a rapidly changing space. Guidelines are primarily intended for designers at this time. Find what’s implemented in code in the [design kit](https://www.figma.com/design/cVjQvQ0moD8wkPWH2rn2c6/XR?node-id=294149-10229&t=AFAz42CCMXa5470T-4).

Extended reality (XR) interfaces have special design requirements, like showing apps in 3D space. Material has XR-specific navigation rails with custom specs and guidance. See [XR developer documentation](http://developer.android.com/design/ui/xr/guides/foundations) for more details.

## Variants

There are two variants of navigation rail orbiters: the contained FAB and spatialized FAB navigation rails.

_footer: - Contained FAB rail - Spatialized FAB rail_
_altText: Navigation bar orbiters with a contained FAB and a spatialized FAB._

## Anatomy

_footer: - Container - Active indicator - Large badge (optional) - Badge (optional) - Large badge label (optional) - Label text - Icon - Embedded or spatialized FAB (optional) - Menu icon (optional)_
_altText: Diagram of navigation rail orbiter identifying 9 internal elements of the component._

## Color & elevation

On XR, color is used to highlight elevated UI elements and orbiters. With [spatial elevation](https://developer.android.com/design/ui/xr/guides/spatial-ui#spatial-elevation), the navigation bar displays above the spatial panel, on the Z-axis. Color communicates elevation on UI elements and orbiters. Elevated nav rails can use any of these color options:

_footer: - Surface container with tertiary FAB - Surface container high with tertiary fixed dim FAB - Surface container highest with tertiary fixed dim FAB - Tertiary container with primary FAB_
_altText: 4 versions of elevation color strategy._

## Measurements

_footer: Navigation rail orbiter padding and measurements with contained FAB_
_altText: Measurements and padding for navigation rail orbiter with contained FAB._

_footer: Navigation rail orbiter padding and measurements with spatialized FAB_
_altText: Measurements and padding for navigation rail orbiter with spatialized FAB._

## Usage

In full space, a navigation rail can appear in an orbiter for a more immersive experience. Currently, spatial capabilities, such as orbiters, are only available in full space. In home space, use a regular navigation rail on the same plane as the body content to mimic a 2D experience.

_footer: Navigation rail orbiter behavior and placement changing when going from a 2D to a 3D experience_
_altText: Interface showcasing navigation rail behavior and placement when transitioning from a 2D to 3D experience._

## Behavior

### Global context

Intended for global navigation, a nav rail orbiter should be centered along the left or right edge of the app it controls. It stays anchored to the app during layout or content changes to ensure controls are easy to find.

_footer: A navigation rail orbiter should be placed in global context, centered and anchored to the left or right of the app_
_altText: A navigation rail orbiter placed in global context._

### Local context

Don’t place a navigation rail orbiter in local context or [between spatial panels](/m3/pages/navigation-rail/xr#519a112b-51d6-4200-96a9-54af92fb787d). Local placement can make controls hard to find. Nav rails are designed for app-level navigation, so should only use the global context.

_footer: Avoid placing a navigation rail orbiter in local context. It can be hard to find if placed between two spatial panels._
_altText: A navigation rail orbiter placed in local context._

## Placement

### Navigation context

The position of the navigation rail orbiter should communicate its navigational context:

- Use **offset positioning** for global actions that affect the overall app experience
- Use **inset positioning** for local actions that are specific to a spatial panel

A navigation rail orbiter can either overlap or be positioned adjacent to spatial panels with a 20dp margin for visual separation.

_footer: Position the navigation rail orbiter to reflect context: offset for global actions, inset for spatial panel-specific actions_
_altText: Navigation rail orbiter offset and inset positioning._

### Inset positioning

Don’t obstruct content. To ensure a balanced and uncluttered layout, a navigation rail orbiter should overlap spatial panels by 12dp and no more than half their width.

_footer: Avoid overlapping an inset navigation rail orbiter by more than half its width_
_altText: Nav rail orbiter overlapping content by more than half its width._

### Vertical alignment

A navigation rail orbiter can be aligned to the top, middle, or center of spatialized panels, providing different levels of visual prominence and accessibility.

Align the navigation rail orbiter based on the specific design and user experience goals for the application.

_footer: Align the navigation rail orbiter at the top, middle, or center of spatialized panels_
_altText: Nav rail orbiter positioning moving from the top, to middle, to center of spatialized panels._

The navigation rail orbiter placement shouldn't exceed the height of adjacent spatial panels.

_footer: The navigation rail orbiter shouldn’t exceed the height of the spatial panel_
_altText: A nav rail orbiter positioning above its spatial panel._

### Spatial panel alignment

Avoid placing a navigation rail orbiter between spatial panels. This negatively affects the interface structure.

For layouts that span more than two spatial panels, consider using a navigation bar orbiter.

_footer: Don't place a navigation rail orbiter between spatial panels_
_altText: A nav rail orbiter incorrectly positioned between spatial panels._

## Spatialized FAB

There are two variants of navigation rail orbiters with different FAB treatments:

-
**Contained FAB rail:** A contained FAB within the rail. This offers a compact and familiar layout.

-
**Spatialized FAB rail:** The FAB becomes an orbiter of it’s own and is placed outside the navigation rail orbiter. Use this for higher emphasis and a distinct spatial effect.

Use the spatialized FAB rail to emphasize key actions and leverage XR hierarchy. Use the contained FAB rail to be more subtle, and align the experience with the baseline navigation bar.

_footer: Choose between a navigation rail orbiter with a contained FAB or a spatialized FAB_
_altText: Interface showing the difference between a navigation rail orbiter with a contained FAB and spatialized FAB._

To maintain visual association, place the spatialized FAB in close proximity to the navigation rail orbiter. Material recommends a 20dp margin.

The spatialized FAB can be placed above or below the navigation rail orbiter.

_footer: Position the spatialized FAB close to the navigation rail orbiter_
_altText: Spatialized FAB positioned close to the navigation rail orbiter._

While the spatialized FAB and navigation rail orbiter are typically positioned together, their placement is adaptable.

_footer: Use caution when positioning spatialized FABs. Keep them within the height of adjacent spatial panels_
_altText: Spatialized FAB positioned with excessive spacing between itself and the navigation rail orbiter._

## Accessibility considerations

[XR accessibility](https://developer.android.com/design/ui/xr/guides/get-started#make-app) guidelines are still evolving. XR navigation rails should follow applicable Material [nav rail accessibility standards](/m3/pages/navigation-rail/accessibility).

<!-- section: Accessibility -->

## Use cases

People should be able to do the following using the assistive technology:

- Navigate between navigation destinations
- Select a particular navigation destination from a set
- Get appropriate feedback based on input type

## Interaction & style

When a navigation item is tapped, the active indicator appears, providing the following feedback to the user that it is selected:

- A ripple passes through the indicator
- The icon switches from outlined to filled
- The icon and text change color

When hovered, the hover state appears, providing a visual cue that the destination is interactive.

_footer: Touch: Tap_
_altText: Colorful, purple navigation rail shown collapsed and expanded._

_footer: Cursor: Hover, Click_
_altText: Tap indicator on a collapsed nav rail._

The target area for expanded navigation rails spans the full width of the container, even though the active indicator visually hugs the content.

_footer: Touch: Tap_
_altText: Touch indicator on a nav rail._

Use a filled icon for the active destination and outlined icons for inactive destinations.

Active and inactive icon colors need sufficient contrast against the container.

_footer: Use the default color scheme to ensure proper contrast and emphasis on the active destination_
_altText: Navigation rail with filled element._

_footer: Don’t use more than two colors for destinations or low-contrast colors in the navigation rail. This will make distinguishing active items difficult._
_altText: Nav rail with multiple navigation destinations and multi-colored contrast._

If an icon doesn’t have a filled style, use the semibold icon weight instead.

_footer: An icon with no filled option should use the semibold weight when active_
_altText: Icon button with semibold weight, without filled options._

### Text scaling and truncation

When someone sets their device to show a larger text size, the navigation rail items should grow vertically to accommodate larger labels while retaining the default padding. It’s okay for scaled text to wrap in navigation items.

To remain accessible, ensure the full label is always visible on-screen at up to 2x text sizing. Beyond this size, text can truncate.

_footer: Text scaled to 1.5 size_
_altText: Nav rail with text scaled to 1.5x size. All labels are on one line._

_footer: Text scaled to 2x size_
_altText: Nav rail with text scaled to 2x size. Some labels wrap to two lines._

### Initial focus

Initial focus lands directly on the first interactive item, whether it’s the menu, the FAB, or the first navigation item.

From the FAB or menu, **Tab** brings the person to the navigation items. **Tab** or **Arrows** then navigate between items.

_footer: Use arrows to move between navigation items_
_altText: Arrows help people move between pages._

_footer: Use space/enter to activate the focused navigation item_
_altText: Space/enter help people choose a navigation destination._

### Visual indicators

Icons give the dominant cue of the navigation state. Use a filled icon for the selected destination to contrast with outlined icons for the non-selected destinations.

_footer: Use a filled icon variant on the selected navigation item to differentiate from inactive navigation items_
_altText: Nav bar with an active, filled icon button._

_footer: Avoid using the same unfilled icon style for both selected and unselected items because it lacks important visual feedback cue_
_altText: Selected navigation item without filled icon style._

## Keyboard navigation
Keys | Actions |
Tab / Arrows | Navigate between interactive elements |
Space / Enter
 | Selects an interactive element |

## Labeling elements

The accessibility label for a navigation item is typically the same as the adjacent text label.

When the visible UI text is ambiguous, accessibility labels need to be more descriptive. For example, a navigation item visibly labeled **Recent** would benefit from additional information in its accessibility label to clarify the destination's intent.

Note: On Android Views (MDC-Android), a more descriptive accessibility label is not available and the role is not announced.

_footer: While the visible label text reads **Recent**, the accessibility label for this switch clarifies its function: **Recent images**_
_altText: “Maps” is both the icon label text and the accessibility label._
