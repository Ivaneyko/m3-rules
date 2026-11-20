# Layout overview

> Layout is the visual and strategic arrangement of elements on a screen

slug: layout-overview  |  updated: 2026-08-18T21:59:38.343Z

<!-- section: Overview -->

-
Use layout to organize all elements in a screen, signal hierarchy, and draw attention to key actions

-
Adapt layouts to compact, medium, expanded, large, and extra-large breakpoints (previously window size classes)

-
Build from an established [canonical layout example](/m3/pages/canonical-examples)

-
Design for [bidirectionality](/m3/pages/bidirectionality-rtl) to support both left-to-right (LTR) and right-to-left (RTL) languages

-
Apply consistent arrangement, sizing, and spacing to create a functional layout structure

-
Material layout guidance is implemented on Android and applies to web

_footer: - Column  - Fold  - Margin  - Bar  - Drag handle  - Pane  - Rail_
_altText: 7 elements of layout._

## Availability & resources

**Type**
 |
**Resource**
 |
**Status**
 |

Design
 |
[M3 Design Kit](https://www.figma.com/community/file/1035203688168086460) (Figma)
 |
Available
 |

[Spacing system & tokens](/m3/pages/spacing/overview)
 |
Available
 |

Implementation
 |
[Jetpack Compose: Canonical layouts](https://developer.android.com/develop/ui/compose/layouts/adaptive/canonical-layouts)
 |
Available
 |

[Jetpack Compose: Rulers](https://developer.android.com/reference/kotlin/androidx/compose/ui/layout/Ruler)
 |
Available
 |

[Android Views (MDC-Android): Canonical layouts](https://github.com/android/user-interface-samples/tree/main/CanonicalLayouts)
 |
Available
 |

[Jetpack Compose: Navigation3](https://developer.android.com/guide/navigation/navigation-3/migration-guide)
 |
Available
 |

## What's new

When creating new layouts, use the layout scaffold, start from a canonical layout example, and ensure layouts scale across breakpoints.

##### **May 2026**

Layout structure and design:

-
Introduced layout scaffold, to create adaptive layouts efficiently

-
New adaptive guidelines for mobile, desktop, and spatial devices

-
Updated canonical layout examples

-
[Spacing system](/m3/pages/spacing/overview)

Naming:

-
Window size classes renamed to breakpoints

-
Responsive layout renamed to [adaptive design](/m3/pages/layout-overview/adaptive-design)

_footer: The Material layout scaffold enables layouts to adapt across different screen sizes_
_altText: Compact and expanded layouts for differently sized screens._

## Layout terms

-
**Adaptive design**: Techniques that allow an interface to dynamically respond to contexts like user preferences, device type, state, and breakpoints

-
**Bars**: Can frame the page to help people navigate through a product, and typically house the app bar and bottom navigation bar

-
**Bidirectionality**: A writing system that displays text and content from right-to-left (RTL) 

-
**Breakpoints**: Opinionated window sizes where a layout changes to match available space, device conventions, and ergonomics (previously window size classes)

-
**Column**: One or more vertical blocks of content within a pane

-
**Drag handle**: The component that resizes panes

-
**Fold**: A flexible area of the screen or a hinge that separates two displays on foldable devices

-
**Gap**: The space between components or elements within a container

-
**Margin**: The space between the edge of the screen and any elements inside of it

-
**Multi-window mode**: Enables multiple apps to share the same screen simultaneously

-
**Pane**: A layout container that houses other components and elements within a single app. A pane can be fixed, flexible, floating, or semi-permanent.

-
**Rails**: The perimeter space surrounding panes that holds key elements such as navigation rails, toolbars, and pane control

-
**Right-to-left (RTL) language**: Languages written and read right-to-left, such as Arabic, Hebrew, and Farsi, used by [over 2 billion people](https://www.w3.org/International/questions/qa-scripts.en.html)

-
**Rulers**: An opinionated set of global alignment lines that help organize building blocks in a layout

-
**Safety region**: Zones reserved for system UI elements outside the application space, such as status bar or gesture bar

-
**Scaffold**: A fundamental UI design structure that provides a standard platform for assembling key screen components

-
**Spacer**: The space between two panes on a foldable device

<!-- section: Parts of layout -->

## Parts of layout

### Windows

A window frames and contains an app or product.

Many systems support multi-window views, which display multiple apps at once.

[Multi-window support guide for Android](https://developer.android.com/develop/ui/compose/layouts/adaptive/support-multi-window-mode)

_footer: Two windows can be shown at once with a taskbar underneath_
_altText: Stacked windows with a single taskbar underneath._

On desktop, windows can be resized and moved around freely. They should adapt to various screen sizes.

[More on adaptive design](/m3/pages/layout-overview/adaptive-design)

_footer: Windows can be moved around, resized, and adapt to different screen sizes_
_altText: 2 overlapping desktop windows._

### Grids

The layout grid is the foundation for every layout. It provides a structural framework for organizing components, content, and actions.

Use the grid to:

-
Group related information in columns

-
Apply spacing consistently

-
Create focal points for primary actions

-
Align building blocks like bars, rails, and panes

[More on grids](/m3/pages/grids-spacing/grids)

_footer: Column count, width, and spacing dynamically adjust to different breakpoints_
_altText: Side-by-side compact and expanded windows with different grid spacing._

## Layout scaffold

### Bars

Bars help people navigate through a product. Use bars to:

-
Frame the main content

-
Contain an app bar or navigation bar

-
Span one or multiple panes  

[More on bars](/m3/pages/scaffold/bars)

_footer: 1. App bars are placed at the top of the screen to help people navigate by providing a description of the screen and 1–2 essential actions, like search or back navigation_
_altText: A photo app with an app bar below the safety region._

### Rails

Rails are the next level in layout after bars, filling the perimeter space surrounding panes, or floating above them. They contain key elements such as navigation rails, toolbars, chat inputs, FABs, and other primary controls.

[More on rails](/m3/pages/scaffold/rails)

_footer: - On mobile, the rail region can contain a toolbar  - On desktop, the rail region can contain the navigation rail_
_altText: Mobile layout with a toolbar, and a desktop layout with a start-aligned navigation rail._

### Panes

Just like panes of glass that make up a window in the real world, panes in Material make up most of the layout in a window.

All content must be in a pane. A layout can contain 1–3 panes of various widths, which adapt dynamically to the breakpoint (formerly window size class) and the person’s language setting. For right-to-left (RTL) languages, navigation components will be on the right.

People can navigate to or between panes. Presenting multiple panes at once can make a product more efficient and easier to use.

[More on panes](/m3/pages/scaffold/panes/)

_footer: - First pane  - Second pane_
_altText: 2-pane layout on a tablet._

#### Containment

On most devices, panes can blend in with the background. This is called implicit grouping, and helps show relationships between panes.

Explicit grouping uses distinct colors or outlines to visually delineate content.

[More on spacing to group content](/m3/pages/grids-spacing/spacing#e7e6d1ac-031a-4757-afcf-b223f23654ea)

_footer: In multiple-pane layouts, use color to show emphasis and close spacing to group related content_
_altText: 2 panes in an email app, with the same color as the background._

In spatial environments, panes use a container color to separate them from the passthrough or virtual environment.

_footer: Use contrast between panes and the background to create a spatial effect in XR_
_altText: 2-pane layout in a spatialized environment, with a virtual reality background._

### Drag handles

Drag handles can be used to resize panes in a layout. They can:

-
Adjust the width of flexible panes

-
Fully collapse and expand fixed panes to quickly switch between a single and two-pane layout

_footer: Drag handles can adjust pane size in a list-detail layout_
_altText: A drag handle is used to collapse a two-pane layout into a single-pane layout._

### Rulers

Rulers are a set of global alignment lines. They help to align elements across all layers of the layout.

[How to implement rulers in Compose](https://developer.android.com/reference/kotlin/androidx/compose/ui/layout/Ruler)

_footer: Rulers ensure global alignment across a product, keeping margins and placement consistent_
_altText: A 2-pane email in box, with rulers._

<!-- section: Adaptive design -->

## What’s adaptive design?

Adaptive design is a set of techniques to change an interface to fit different contexts. While responsive design scales a single layout to fit any screen, adaptive design customizes a product to optimize the experience on each device.

Designing adaptive experiences goes beyond customizable properties like color, typography, and shape. The structure, individual components, and entire layouts can adapt based on:

-
People: Individual preferences and settings

-
Devices: Watch, phone, foldable, tablet, desktop, or XR device

-
Usage: Screens dynamically change as a person resizes windows, changes orientation, or switches device

## Designing adaptive experiences

Layouts must be versatile, designed to adapt fluidly across three primary experience types: **mobile**, **desktop**, and **spatial**. Start with mobile and make sure your product's layout and components can scale and adapt seamlessly all the way up to spatial environments.

While each experience has different primary input methods, designs should be built with all inputs in mind—touch, pointer, and physical keyboard—since users may use your product in a desktop environment regardless of their device type.

### Mobile

Mobile experiences include phones, foldables, and tablets.

On mobile, an app can be shown in several window modes:

-
Full-screen: The app takes up the entire screen, the default for mobile

-
Split-screen: Two or more apps share the screen simultaneously, common on tablets and foldables

-
Bubbles: Floating windows that let people multitask without leaving their current context

_footer: Mobile layouts default to a full-screen window_
_altText: A mobile app in full screen mode._

### Desktop

Desktop experiences use free-form windows that adapt across breakpoints.

People can use split screens, floating windows, and free-form windows for multi-tasking.

A tablet can convert to a desktop experience when a physical keyboard and mouse are connected. Similarly, Android mobile devices can transition into a desktop-like environment when connected to an external monitor.

_footer: A desktop layout can adjust from three to two columns to fit a medium breakpoint_
_altText: 2 desktop layouts adapted to large and medium breakpoints._

### Spatial

Extended reality (XR) experiences use multiple free-form windows within virtually limitless screens. Immersive modes, such as Android XR’s [full space](https://developer.android.com/design/ui/xr/guides/foundations), allow components to be positioned freely in 3D space.

[More on XR design](/m3/pages/xr-design)

_footer: In an XR full space layout, a navigation rail can become an orbiter, and float to the side of the main pane_
_altText: An XR layout inimmersive full space mode._

## Adaptive layouts

The Material 3 adaptive system uses panes and breakpoints to organize content into adaptive layouts.

Panes are the building blocks of layout; a pane is a single destination in the product. For example, in a messaging app, the list of messages is one pane, and and a specific conversation thread is another.

_footer: Panes are the primary segments of a layout, and can change based on context_
_altText: Mobile and tablet in portrait layout with 1 pane. Tablet in landscape layout with 2 panes._

As the pane or window resizes—or as someone navigates a product—panes may change size, enter and exit the screen, and reorganize themselves to make the experience more usable or easier to navigate. These patterns are called adaptive strategies. Material has three adaptive strategies that create a cohesive experience across breakpoints: [show and hide](/m3/pages/scaffold/panes#bbe68948-bc05-4f7c-b870-6254439e4fd8), [levitate](/m3/pages/scaffold/panes#96bf71b8-04b8-4fff-97c7-9bc782fbf401), and [reflow](/m3/pages/scaffold/panes#e0a573e9-8c62-4772-8d81-47955ff83196).

_footer: Co-planar: Panes are displayed side by side_
_altText: A foldable open screen with 2 co-planar panes displayed side by side._

_footer: Floating: A pane is displayed above other panes or content, like a dialog_
_altText: A  foldable open screen with a floating pane displayed above other elements._

_footer: Docked: A pane is displayed above other panes and one of its edges extends beyond one side of the screen, like a bottom sheet_
_altText: A  foldable open screen with a docked pane to the bottom of the screen displayed above other elements._

In Compose, the [Navigation 3](https://developer.android.com/guide/navigation/navigation-3) library allows multiple destinations to be shown on screen at the same time, and enables layouts to adapt seamlessly across window sizes and screens.

_footer: Navigation destinations remain consistent regardless of screen sizes with Navigation 3_
_altText: A video demonstrating how navigation destinations remain consistent across screen sizes using the Navigation 3 library._

### Adapting components

Components can adapt in appearance, placement, and behavior based on factors like:

-
Where components are placed in relation to their containers, content, and pane boundaries

-
How components use space

-
How components enable usage across different device and input types

Most Material components respond using three main strategies: resizing, showing and hiding, and presentation changes.

#### Resizing

Components should resize in response to their content and their placement in a layout.

For example, buttons may scale along with their parent container, or hug their contents and maintain a left or right alignment.

_footer: Buttons can hug their contents or span their containers based on context_
_altText: A card with a button that spans the full width, and a card with a button that’s start-aligned and hugs its contents._

#### Showing & hiding

Components should show and hide information, or collapse and expand to selectively reveal content that best suits the space.

For example, list items may reveal descriptions or other additional information as their parent container scales.

_footer: List items can reveal more text on a tablet_
_altText: A list on mobile and on tablet. List items show additional text on tablet._

#### Presentation changes

Presentation changes include the orientation of elements and changes to specific properties, like color, type, and shape.

Components can also change configurations. For example, when a window size increases, a FAB can change to an extended FAB, and navigation rails can be automatically expanded.

_footer: The extended FAB can change to a standard FAB when the window is smaller_
_altText: A large desktop window with an extended FAB. A smaller window shows a standard FAB._

## Grouping

Grouping is a method for connecting related elements that share a context, such as an image grouped with a caption. It visually relates elements and establishes boundaries to differentiate unrelated elements.

_footer: By placing a caption under an image this composition shows an explicit group_
_altText: Photo of dumplings with a caption reading “restaurants in the area”_

**Explicit grouping** uses visual boundaries such as outlines, dividers, and shadows to group related elements in an enclosed area. Explicit grouping can also indicate that an item is interactive, such as list items contained between dividers, or a card displaying an image and its caption.

_footer: The elements in this card are explicitly grouped_
_altText: Container of a contact grouped with photo and caption_

**Implicit grouping** uses close proximity and open space (rather than lines and shadows) to group related items. For example, a headline closely followed by a subhead and thumbnail image are implicitly grouped together by proximity and separated from other headline-subhead-thumbnail groups by open space.

_footer: Images in a carousel are grouped by their proximity_
_altText: Carousel of images_

## Margins

Margins are the spaces between the edge of a window area and the elements within that window area.

Margin widths are defined using fixed or scaling values for each window size class. To better adapt to the window, the margin width can change at different breakpoints. Wider margins are more appropriate for larger screens, as they create more open space around the perimeter of content.

See margin measurements for each window class: compact, medium, expanded, large, and extra-large.

_footer: A margin separates the edge of the screen from the elements on the screen_
_altText: Screen highlighting vertical blue margin on left side of screen_

## Spacers

A spacer refers to the space between two panes in a layout. Spacers measure 24dp wide.

_footer: - A spacer splits two panes from each other_
_altText: Screen highlighting vertical blue margin on left side of screen_

A spacer can contain a drag handle that adjusts the size and layout of the panes. The handle's touch target slightly overlaps the panes.

_footer: - Drag handle touch target_
_altText: Pane drag handle touch target overlapping two panes._

## Padding

Padding refers to the space between UI elements. Padding can be measured vertically and horizontally and does not need to span the entire height or width of a layout. Padding is measured in increments of 4dp.

_footer: - Padding separates a headline from a image above_
_altText: Full screen-width photo with padding below it and text below the padding_

## Overview

- Information density is the consideration of the amount of information visible on the screen
- The default target size should be at least 48x48 CSS pixels
- Users can change density as long as the density controls are accessible
- Apply density thoughtfully; not every layout needs it
- Layout and component scaling (component adaptation or component density) can allow users to scan, view, or compare more information at once

_footer: Information density_
_altText: A website design with a denser arrangement of text and graphics._

_footer: Component scaling_
_altText: Visual representation of component scaling with multiple size examples._

**Information density**

- Information density can be achieved through layout and design decisions without using component scaling
- Users may not benefit from increased density

**Component scaling**

- Components can adapt and change dimensions to allow users to scan, view, or compare different amounts of information
- Don't apply component scaling by default if it would result in a target below 48x48 CSS pixels

_footer: Information density and component scaling can be used together to provide more information and additional user control_
_altText: An email app on desktop with a menu open to change information density between cozy, comfortable, and compact._

## Information density

Information density refers to the amount of content (such as text, images, or videos) in a given screen space.

A layout’s spacing dimensions, including margins, spacers, and padding, can change to increase or decrease its information density. High density layouts can be useful when users need to scan, view, or compare a lot of information, such as in a data table. Increasing the layout density of lists, tables, and long forms makes more content available on-screen.

Consider density settings in the context of a device. Although a user may prefer a denser layout for desktop, they may not for mobile. Density shouldn’t automatically change across window-size classes or device orientation without users changing it.

_footer: Consider using higher density information design when users need to scan lots of information_
_altText: High density layout_

_footer: Consider the amount and priority of information on-screen. Higher density can be useful for data-rich sites (news, financial portals, dashboards) where users expect lots of information quickly._
_altText: News website on desktop displaying a high information density._

_footer: Lower density can be better for sites prioritizing aesthetics, a focused message, less information, or easier navigation_
_altText: News website on desktop displaying a low information density._

## Component scaling

The component density scale controls the internal spacing of individual components.

The density scale is numbered, starting at 0 for a component’s default density. The scale moves to negative numbers (-1, -2, -3) as space decreases, creating higher density.

Higher density is typically applied by decreasing the top and bottom padding or overall height by 4dp.

_footer: Buttons in 3 different densities. Apply button density based on the needs and layout of a design._
_altText: Three buttons, with densities  of +1, 0, and -1._

Center the grouped element within the component container.

Text size shouldn’t change as the container size scales.

_footer: The measurement between the label and input is 20dp_
_altText: Stacked element showing 20 dp between label and input_

_footer: The label and input are centered within their parent container_
_altText: Parent container showing label above input._

_footer: Don’t increase density in UIs that involve focused tasks, such as selecting from a menu. It reduces usability by limiting selectable space._
_altText: Dropdown menu selectable space  height of 36 dp_

_footer: Don't increase the density in components that alert the user of changes, such as snackbars or dialogs_
_altText: Single-line snackbar_

### Avoid applying component scaling by default

- Don't apply component scaling to layouts by default that lower the target size below a default size of 48x48 CSS pixels
- Allow users to opt for a higher density layout or theme, and provide a simple, accessible way to revert to default best practices

People should be able to **opt****in** to dense layouts and components.

To ensure that density settings can be easily reverted, targets in settings interactions must follow defaults (48x48 CSS pixels).

_altText: A density menu with large, medium, and small options to customize the screen layout of a table on desktop._

## Targets

Dense components can be less accessible because interactive elements are smaller, so use caution when increasing information density.

_footer: Use caution when applying component scaling where selectable targets will be reduced to less than the 48x48dp best practice and only apply density where it provides a better user experience._
_altText: Selectable target of only 40 dp_

Use caution when applying density to interaction targets. Following best practices, accessible targets should retain a minimum of 48x48dp, even if their visual element (such as an icon) is smaller.

_footer: The target should remain 48x48, even if the icon is smaller._
_altText: Settings button is 24 by 24 dp, but has interaction target of 48 x 48 dp._

_footer: The interaction target of a common button can be larger, as long as it meets the 48x48dp minimum size._
_altText: Button with height of 36 dp and interaction target of 48 dp_

## Pixel density

The number of pixels that fit into an inch is referred to as pixel density. High-density screens have more pixels per inch than low-density ones. As a result, UI elements of the same pixel dimensions appear larger on low-density screens, and smaller on high-density screens.

To calculate pixel density:

Screen density = Screen width (or height) in pixels / Screen width (or height) in inches

_footer: A high-density ui element_
_altText: Magnified UI element  showing a high number pixels in the focus area_

_footer: A low-density UI element_
_altText: Magnified UI element  showing the low number of pixels in the focus area_

### Density-independent pixels

Density-independent pixels, written as dp, are flexible units that scale to have uniform dimensions on any screen. They provide a flexible way to accommodate a design across devices. Material design system uses density-independent pixels to display elements consistently on screens with different densities.

A dp is equal to one physical pixel on a screen with a density of 160.

To calculate dp: dp = (width in pixels * 160) / screen density

_footer: Low-density screen displayed with density independence_
_altText: Screen with grid representing  low number of pixels_

_footer: High-density screen displayed with density independence_
_altText: Screen with grid representing  high number of pixels_

Screen physical width | Screen density
 | Screen width in pixels
 | Screen width in dps
 |
1.5 in | 120 | 180 px | 240 dp |
1.5 in | 160 | 240 px |
1.5 in | 240 | 360 px |

**Window size classes** provide the foundation for top level layout decisions, but display-specific considerations are also needed.

## Display cutout

A display cutout is an area on some devices that extends into the display surface. It allows for an edge-to-edge experience while providing space for important sensors on the screen of the device. 

Applications can extend around display cutouts or other features, but some parts of the UI might be obscured.

_footer: A mobile device’s content-safe area around a display cutout for the front-facing camera_
_altText: Content safe area shown in portrait and in landscape mode._

## Foldable devices

Foldable devices use a folding mechanism to fold and unfold. They have unique characteristics to consider when designing layouts.

### Fold

The fold of a foldable device divides the screen into two portions, either horizontally or vertically. The fold can be a flexible area of the screen or, on dual-screen devices, a hinge that separates two displays.

A flexible fold is barely visible, although some users may feel a tactile difference on the screen surface. Content can flow over the fold fairly easily.

_footer: - Folds are typically found in the center of the device screen and can present a seamless experience_
_altText: Center fold of a foldable device layout._

On devices with a physical hinge, designing the screen as two distinct sections (separate window areas or panes) allows a composition to work well across the hinge and screens.

_footer: A physical hinge separates two parts. There is no display hardware in this region._
_altText: Center fold on a foldable device with a physical hinge._

### Device state

Foldable devices can have several physical states: folded, open flat, and tabletop.

#### Folded

The folded state can include a front screen, which often fits in the compact window size class, just like a mobile phone in portrait orientation.

_footer: The front screen of a foldable device_
_altText: Compact window of a folded device._

#### Open flat

An open flat state refers to the fully opened screen, which usually increases the window size class to medium or expanded. An open device can be used in landscape or portrait orientations.

_footer: In an open portrait state, the longer device edge is vertical while the shorter edge is horizontal_
_altText: Open portrait state of a mobile device._

_footer: In an open landscape state, the longer device edge is horizontal while the vertical edge is shorter_
_altText: Open landscape state of a mobile device._

#### Tabletop

Tabletop refers to a half-opened state forming a rough 90 degree angle, with one half of the device resting on a surface. This posture resembles a laptop.

UI controls near the fold can be difficult for users to access, and text overlaying the fold can be hard to read.

_footer: If camera hardware is present, a tabletop device is best positioned on a side without any protruding hardware elements_
_altText: Tabletop state of a mobile device showing camera ;ems  on the vertical plane._

### Interaction

#### App continuity

When running on a foldable device, an app can transition from one screen to another automatically. After the transition, the app should resume in the same state and location, and the current task should continue seamlessly.

_footer: A news app shows a feed in a compact and expanded window class when a foldable device switches device state_
_altText: A news app in compact mode compared to the open landscape state where the news app expands with a new column next to the compact news feed._

#### Scrolling and multiple panes

Depending on how your app uses panes, the scroll behavior of a folded design may change in the unfolded design. 

If you expand a pane, you can decide whether the whole window will scroll together or if each side (each pane) scrolls independently.

_footer: A single pane can scroll its inside content vertically and horizontally_
_altText: A foldable device screen in open landscape mode with a single pane showing vertical scroll arrows._

If your design has multiple panes, each pane can operate as an independently scrollable area.

_footer: Multiple panes can scroll inside content independently of one another_
_altText: A foldable device screen in open portrait mode with double panes each with a vertical scroll arrow._

## Multi-window mode

Multi-window mode is an Android system feature for **displaying multiple apps on the same screen.**This can be especially useful for multi-tasking, or workflows that depend on comparing information.

Note: This concept should not be confused with using multiple panes to display content from a single app. For more on that, see: Panes.

_footer: Screen displaying an email app and a contacts app in multi-window mode_
_altText: 2 apps appear side-by-side with a task bar below spanning the width of the screen._

### User needs

The ways that windows are created, arranged, and adjusted should feel straightforward for all users and across any window size class. Methods for seamless window management include:

- Apply smooth transitions as described in motion guidance
- Ensure that users can create multiple windows easily and move between them as needed
- Keep mental models and interaction patterns simple so that users aren’t required to think about which mode is appropriate for each task
- Design and implement window dynamics consistently across variations in foldable hardware, including those with a hinge that separates two displays

### Window creation and behavior

Android provides several ways for users to create a multi-window view.

### Taskbar

The taskbar provides a launching point for pinned and suggested apps to easily become a separate window. 

To create a new window, a user selects and drags an app from the taskbar and moves the app icon to indicate where the new window should be displayed.

_footer: Android taskbar_
_altText: The taskbar is positioned at the bottom of a screen._

### Context menu

Users can also create multiple windows through the overview by the app context menu.

_footer: Multi-window mode can have vertical positioning_
_altText: 2 apps appear side-by-side with a task bar below spanning the width of the screen._

_footer: Multi-window mode can have horizontal positioning_
_altText: 2 apps are stacked in landscape mode with a task bar below spanning the width of the screen._

### Adjusting window sizes

By default multiple windows are created as a 50/50 side-by-side split.

The windows can be adjusted further to 1:3 or 2:3 proportions. These ratios provide a primary and secondary window dynamic, offering greater flexibility and allowing focus on one application as needed.

When in a multi-window mode, the available screen area often changes from medium or expanded window class to compact. Layouts should adapt accordingly.

_footer: The screen handle can be dragged and released to create the desired window ratio. The handle automatically adjusts to the closest snap point._
_altText: 2 apps appear side-by-side with the left-side app using two-thirds of the screen, and the right app one-third._

[Over 2 billion people](https://www.w3.org/International/questions/qa-scripts.en.html) read and write in right-to-left (RTL) languages like Arabic, Hebrew, Farsi and Urdu. Layouts should support both left-to-right (LTR) and RTL languages through mirroring and other best practices to ensure content is easy for global audiences to understand and navigate. Consider the holistic experience including [global writing](/m3/pages/global-writing/overview#0d0f8403-e5ff-4579-be74-0c4dbcef7fcb), localizing voice and [design principles for culturally appropriate icons](/m3/pages/icons/designing-icons#1056d971-81ca-4abe-b931-42185dd76638). Material's components are built to support RTL, such as naming elements and tokens as "leading" and "trailing." However, extra configuration may be needed to achieve specific RTL situations.

## Mirroring

When a layout is changed from LTR to RTL (or vice-versa), and flipped horizontally, it’s often called mirroring. UI elements and text that typically appear on the left in LTR aligns to the right. Reading flow starts from the top right corner, instead of the top left.

Not all elements mirror with RTL languages. For example, graphs and charts maintain a LTR directionality for Persian and Urdu.

_footer: A mirrored layout in an RTL language reverses the alignment and ordering of elements._
_altText: Layout in LTR and mirrored for RTL language._

## Text rendering

Correct text rendering is foundational for a great user experience and it’s critical for readability and usability. Text rendering has two parts:

- Alignment: How the edges of the text box are placed alongside other elements.
- Directionality: How text and other elements flow within a text box, like left-to-right, or right-to-left.

In RTL languages, text is usually right-aligned, and elements flow from right-to-left.   Common issues with RTL language rendering are text entry, cursor position, punctuation, phone numbers, and URLs.   Improperly rendering text in RTL languages can create cognitive overload and negatively impact user sentiment and trust.

_footer: Don't reverse the order of the email username and domain (@google.com). The domain should always be to the right of the username.  Usernames can still be written RTL, with the cursor moving to the left.  Note this example is not translated to illustrate a common issue with text rendering_
_altText: Text field incorrectly displaying the word order of an email address and cursor placement._

_footer: Don’t apply LTR directionality to RTL content because it may scramble word order. To ensure readability across all languages. The content should have both RTL alignment and directionality.  Note this example is not translated to illustrate a common issue with text rendering_
_altText: Dialog window incorrectly displaying word order decreasing readability._

## Icons and symbols

In RTL languages, directional UI icons, like back and forward, should be mirrored. However, in Hebrew timelines and media controls on a page should retain left-to-right directionality.

The meaning of icons and symbols can vary significantly across cultures.

_footer: Back and foward icons are mirrored in RTL_
_altText: Back and forward icons in LTR and RTL._

_footer: Send buttons are mirrored in RTL. Help icons are mirrored in some RTL languages, like Urdu and Persian._
_altText: Send and question mark in LTR and RTL._

## Time

Linear representations of time are often mirrored in RTL language experiences. 

Linear progress indicators should move from right to left for most RTL languages, except Hebrew where it should remain LTR.

Circular representations of time remain the same.

_footer: - RTL linear progress indicator starts to fill progress from the right - Circular progress indicators move clockwise_
_altText: RTL linear progress indicators filling from right to left  and circular progress indicators filling clockwise ._

### Media players

Media controls for video or audio players are always LTR.

_footer: In Urdu, controls and progress for media and a podcast title are shown in LTR, while all other content is RTL._
_altText: Media player with control and progress in LTR and all other content is RTL._

### Clock

For RTL languages, the directionality of time remains LTR, and clocks still turn clockwise. However, the AM/PM symbols for 12h clocks should be placed to the left. The 24-hour clock is often used in countries where the primary language is not English.

Clock icons, circular refresh icons, and progress indicators with arrows pointing clockwise should not be mirrored.

_footer: 24-hour clocks in RTL move clockwise, but mirror elements such as buttons_
_altText: 24 hour clock in RTL._

_footer: 12-hour clocks in RTL move clockwise, but mirror UI elements such as AM/PM and buttons_
_altText: 12 hour clock in RTL._

## Canonical layout examples

### List-detail

The [list-detail](/m3/pages/canonical-layouts/list-detail) layout divides the app window into two side-by-side panes, and is mirrored in RTL.

_footer: List-detail mirrored for RTL, where text and other elements are aligned to the right and flow from right to left_
_altText: RTL list layout._

### Feed

Use a [feed layout](/m3/pages/canonical-layouts/feed) to arrange content elements like cards in a configurable grid for quick, convenient viewing of a large amount of content. The feed layout is mirrored in RTL.

_footer: Feed layout mirrored for RTL, where the order of text, grid, and other elements align to the right and flow from right to left_
_altText: RTL feed layout._

### Supporting pane

Use the [supporting pane](/m3/pages/canonical-layouts/supporting-pane) layout to organize app content into primary and secondary display areas. The supporting pane layout is mirrored in RTL.

_footer: Supporting pane to the left of the primary content. Text and other elements within the pane are aligned to the right and flow from right to left._
_altText: RTL supporting pane in a RTL language._

## Component examples

### Badges

Change the position and alignment of [badges](/m3/pages/badges/specs) for RTL languages.

_footer: Small badge appears on the top left of the icon_
_altText: Small badge on the top left of the icon._

_footer: Large badge appears on the top left of the icon_
_altText: Large badge on the top left of the icon._

### Toolbar

[Toolbars](/m3/pages/toolbars/guidelines) provide actions related to the current page. For RTL languages, mirror the order of the tools.

_footer: Mirrored floating toolbar, where the FAB appears on the left of the screen_
_altText: RTL floating toolbar_

### App bar

[App bars](/m3/pages/app-bars/overview) are placed at the top of the screen to help people navigate through a product.

Mirror app bar layout in RTL, and flip appropriate icons, such as arrows.

_footer: - RTL center-aligned/small - RTL medium flexible - RTL large flexible_
_altText: 3 app bars in RTL._

### Navigation drawer

[Navigation drawers](/m3/pages/navigation-drawer) that open from the side are always placed on the leading edge of the screen, on the left for LTR languages, and on the right for RTL.

_footer: RTL navigation drawer, including a mirrored icon for outbox_
_altText: RTL navigation drawer, including a mirrored icons._

### Navigation rail

The [navigation rail](/m3/pages/navigation-rail/guidelines) is placed on the leading edge of the screen, on the left side for LTR, and on the right for RTL.

_footer: Based on the language being used, a navigation rail is set on a screen’s leading edge. This is the right side for RTL languages, and left side for LTR languages._
_altText: Nav rail in the right side for RTL languages, and left side for LTR languages._

### Text fields

Icons in [text fields](/m3/pages/text-fields/guidelines#5c8a5f07-b1a5-455f-bf76-7ff0d724f6b0) are optional. Leading and trailing icons change their position based on LTR or RTL contexts.

_footer: Icons, symbols and label text for RTL:   - Icon signifier - Valid or error icon - Clear icon - Voice input icon - Dropdown icon - Image_
_altText: Text fields in RTL with leading and trailing icons._

### Chips

The leading icon of input chips can be an icon, logo, or circular image.

The trailing icon is always aligned to the end side of the container. It’s placed on the right for LTR and on the left for RTL.

_footer: Filter chips shown in an RTL layout. Note this example is not translated to help illustrate mirroring._
_altText: Filter chips in RTL layout._

## Swipe gestures

Gestures are the ways people interact with UI elements using touch or body motion.

People can navigate horizontally between peer views like tabs, and to complete actions. 

RTL swiping and gestures should mirror their counterparts in LTR. If an app includes a "delete" icon revealed when swiped from the right for LTR languages, the same should be possible on the left for RTL languages.

_footer: Swiping reveals additional action in RTL list layout_
_altText: RTL list layout with swipe gesture revealing additional actions._

On Android, [predictive back](https://github.com/material-components/material-components-android/blob/master/docs/foundations/PredictiveBack.md) allows people to swipe left or right on the screen to go back or dismiss modal components.

RTL predictive back features should mirror those found in a LTR context.

_footer: Preview of the result of the gesture for RTL languages_
_altText: Back swipe for RTL languages. The back swipe on a bottom sheet takes user back to previous screen of a photo feed._
