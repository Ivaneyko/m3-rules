# Transitions

> Transitions help guide people as they navigate an app

slug: motion-transitions  |  updated: 2026-07-17T05:34:42.925Z

<!-- section: Transition patterns -->

starNote:M3 transitions use the legacy easing and duration system. They'll eventually be updated to use the motion physics system.

Transitions are short animations that connect individual elements or full-screen views of an app. They are fundamental to a great user experience because they help users understand how an app works. Well-designed transitions makes an experience feel high quality and expressive. They should be the top priority for a strong motion implementation. 

These are six common transition patterns:

- [Container transform](/m3/pages/motion-transitions/transition-patterns#b67cba74-6240-4663-a423-d537b6d21187)
- [Forward and backward](/m3/pages/motion-transitions/transition-patterns#df9c7d76-1454-47f3-ad1c-268a31f58bad)
- [Lateral](/m3/pages/motion-transitions/transition-patterns#8d4ec98f-60dc-47a9-901e-88fa2c43f18a)
- [Top level](/m3/pages/motion-transitions/transition-patterns#f852afd2-396f-49fd-a265-5f6d96680e16)
- [Enter and exit](/m3/pages/motion-transitions/transition-patterns#e1c2a650-d7a4-4a6d-9025-e6b7845291ed)
- [Skeleton loaders](/m3/pages/motion-transitions/transition-patterns#b39a0641-1b44-4864-83f5-fac38e0bd94a)

_altText: Small, colorful blobs are animated with different motion styles corresponding to the six transition patterns._

## Container transform

This pattern is used to seamlessly transform an element to show more detail, like a Card expanding into a details page.

-
**Commonly used with:** Cards, lists, image galleries, search boxes, sheets, FABs, and chips

-
**Read more:** [UX Research](https://material.io/blog/motion-research-container-transform), [Guidelines](/m3/pages/motion-transitions/applying-transitions#50f9fc3f-c7e2-4099-b614-7c36b1c5285d), [Android implementation](https://github.com/material-components/material-components-android/blob/master/docs/theming/Motion.md#container-transform)

Persistent elements are used to seamlessly connect the start and end state of the transition. The most common persistent element is a container, which is a shape used to represent an enclosed area. It can also be an important element, like a hero image. Of all transition patterns, this one creates the strongest relationship between elements. It's also perceived to be the most expressive.

_footer: A container transform is used when opening an app and a card. This makes the relationship between screens clear and gives an expressive quality to the transition._
_altText: Podcast app is selected from home screen, then individual card is selected, both taking over the screen._

#### Between full-screen views

_footer: A container transform is used to expand this image to a fullscreen view_
_altText: 1-year memory of flowers is selected within a carousel and takes over screen._

_footer: A container transform is used to expand this List item to a fullscreen view_
_altText: Individual message is selected in messaging app and expands to view complete message._

_footer: A container transform is used to expand this Card and Search box to a fullscreen view_
_altText: Grocery list is selected within notes and expands to take over screen._

#### Within a screen

_footer: A container transform is used to expand this search box_
_altText: Search box for replies within messaging app expands to reveal recent searches and contacts._

_footer: This container transform FAB transition has a persistent container and icon_
_altText: FAB is selected and expands to reveal  Compose Now action and shortlist of contacts._

_footer: A container transform is used on an expanding Sheet_
_altText: Song is selected from banner on bottom of screen and expands to take over._

## Forward and backward

This pattern is used for navigating between screens at consecutive levels of hierarchy, like navigating from an inbox to a message thread.

- **Commonly used with**: Lists, cards, buttons, links
- **Read more:** [Guidelines](/m3/pages/motion-transitions/applying-transitions#41b11a78-b88f-4972-904c-880bc348acc8), [Android implementation](https://github.com/material-components/material-components-android/blob/master/docs/theming/Motion.md#shared-axis)

A horizontal sliding motion indicates moving forward or backward between screens. Android and iOS have different default styles:

**1. Android** uses a fade as screens slide. This reduces the amount of motion, since the screens don't have to slide the full width of the device.

**2.****iOS** uses a parallax effect, meaning the background slides slower than the foreground. This also reduces the amount of motion.

_footer: - Android’s default forward and backward transition - iOS’ default forward and backward transition_
_altText: Two motions contrasted in messaging app, with top showing Android’s fading movement and bottom showing iOS’s swiftly moving foreground transition._

_footer: A filled button on Android uses a forward and backward transition_
_altText: WiFi set-up screen demonstrates Android fade effect when next button is selected._

_footer: A card on iOS uses a forward and backward transition_
_altText: Music card uses iOS transition to move back to music app._

_footer: A search icon button in Android uses a forward and backward transition_
_altText: Fading transitions between photos app search bar and selection of Family & friends option._

_footer: Tapping a list item on a tablet uses a forward and backward transition_
_altText: Email is selected from inbox demonstrating Android transition._

## Lateral

This pattern is used for navigating between peer content at the same level of hierarchy, like swiping between tabs of a content library.

- **Commonly used with:**Tabs, carousels, and image galleries
- **Read more:** [Guidelines](/m3/pages/motion-transitions/applying-transitions#3d5c16ce-7350-4a33-9d2b-598a7591d4e6)

Lateral transitions use a sliding motion similar to a forward and backward pattern, but it does not use a fade or parallax effect. Instead elements are grouped and slide in unison, creating a strong peer relationship. This also hints at being able to gesturally swipe elements to navigate.

_footer: A lateral transition is used when tapping or swiping a Tab component_
_altText: Toggling between tabs for artists and albums in music app reveals lateral movement._

_footer: A lateral transition is used when swiping through a photo album_
_altText: Photos are swiped through horizontally, each filling the screen._

_footer: A lateral transition used with a Carousel component_
_altText: Carousel is scrolled through horizontally without use of fades._

## Top level

This pattern is used to navigate between top-level destinations of an app, like tapping a destination in a Navigation bar.

- **Commonly used with:** Navigation bar, navigation rail, and navigation drawer
- **Read more:** [Guidelines](/m3/pages/motion-transitions/applying-transitions#ab8885f6-5517-419d-80de-bea50cd10467), [Android implementation](https://github.com/material-components/material-components-android/blob/master/docs/theming/Motion.md#fade-through)

The exiting screen quickly fades out and then the entering screen fades in. Since the content of top level destinations isn't necessarily related, the motion intentionally does not use grouping or persistent elements to create a strong relationship between screens.

_footer: A navigation bar uses a top level transition_
_altText: Home and Music options in the navigation are toggled between with fading indicating distinctness of items._

_footer: Tapping an item in a navigation drawer uses a top level transition to move between destinations_
_altText: Inbox menu item selected fades to reveal inbox contents._

_footer: A navigation rail uses a top level transition_
_altText: Chat and Mail options in navigation both produce swift transitions._

## Enter and exit

This pattern is used to introduce or remove a component on the screen. Components can enter and exit within the screen bounds, like a dialog appearing over an app. They can also enter and exit by crossing the screen bounds, like a navigation drawer or bottom sheet that slides on and off screen.

### Within screen bounds

- **Commonly used with:** FABs, dialogs, menus, snackbars, time pickers and tooltips
- Read more: [Guidelines](/m3/pages/motion-transitions/applying-transitions#56675bd6-5e69-4fa8-b075-d694e8cb3ad4)

**Android** components expand and collapse along the x or y axis as they enter and exit. Scale and z-axis motion is avoided since they imply elevation change, which doesn't match M3's reduced elevation model.

**iOS** components uniformly scale as they enter and fade out to exit.

_footer: - Android enter and exit transitions - iOS enter and exit transitions_
_altText: Message to permanently delete an email pops up without elevation for both Android and iOS._

The direction a component enters is informed by their location on screen, expanding away from the device edge. A menu at the top of the screen expands downwards, and a snackbar at the bottom of the screen expands upwards.

_footer: A menu at the top of the screen expands downwards as it enters_
_altText: Image menu in upper right corner expands downward._

_footer: A snackbar and FAB use an enter and exit transition_
_altText: A snackbar alert pops up from bottom of inbox screen and FAB emerges from lower right._

### Beyond screen bounds

- **Commonly used with:**App bars, banners, navigation bar, navigation rail, navigation drawer, and sheets
- **Read more:** [Guidelines](/m3/pages/motion-transitions/applying-transitions#1b704202-167d-48d5-bca1-614cf050de1b)

**Android** components expand and collapse along the x or y axis as they slide on and off screen. This emphasizes their shape, making an otherwise simple transition more expressive.

**iOS** components slide on and off screen without changing shape.

_footer: - Android enter and exit transitions - iOS enter and exit transitions_
_altText: Android and iOS demonstrations of navigation emerging from left edge and new message alert emerging from top edge._

Components like a side sheet can also enter and exit at the same elevation as the main content. Coplanar sheets shrink the available area for content.

_footer: A coplanar side sheet uses an enter and exit transition_
_altText: Selection of comments icon shrinks the main draft field._

Components can enter and exit from beyond the screen bounds based on a scroll gesture. This allows for more screen space to browse.

_footer: A top app bar slides off and on screen during a scroll_
_altText: Top Stories header disappears as user scrolls deeper into news._

_footer: A navigation bar slides off and on screen during a scroll_
_altText: Scrolling lower through photos hides navigation, saving room for browsing._

The location components enter and exit help establish a coherent spatial model of an app:

- A **notification** enters from the top indicating the notification drawer can also be pulled down from the top
- A **nav drawer** enters from the left helping users understand where it's located when it's off screen
- A **bottom sheet** and the keyboard enters from the bottom of the screen. This is a sensible default location for sheets to enter since the bottom of the screen is easiest to reach.

_footer: The direction of enter and exit transitions help establish a coherent spatial model_
_altText: Email notification emerges from top of screen, navigation emerges from left, and keyboard enter from below, all in sequence._

## Skeleton loaders

This pattern is used to transition from a temporary loading state to a fully loaded UI.

-
**Read more**: [Guidelines](/m3/pages/motion-transitions/applying-transitions#b82b5150-609b-4540-903b-2b900ef830aa)

Skeleton loaders are UI abstractions that hint at where content will appear once it's loaded. They're used in combination with other transitions to reduce perceived latency and stabilize layouts as content loads.

_footer: A skeleton loader is used after an app launches to indicate content is loading_
_altText: Music app is selected, producing a skeleton soon populated by individual music items in each corresponding outline._

Skeleton loaders have a subtle pulsing animation to indicate indeterminate progress. It starts at the top left of the screen and moves down to the bottom right.

Once content is loaded, it quickly fades in on top of the skeleton loader.

_footer: A pulsing animation indicates indeterminant loading_

_footer: Content quickly fades in once it's loaded_

<!-- section: Applying transitions -->

starNote:M3 transitions use the legacy easing and duration system. They'll eventually be updated to use the motion physics system.

## What makes a good transition?

Well-designed transitions should have these characteristics:

### Follows accessibility settings

Most platforms have a reduced animation setting to help users with a sensitivity to motion. If that setting is on, transitions should:

- Use subtle fades instead of intense sliding or scaling animations
- Disable decorative effects like parallax or shape morphing

_footer: - Transitions with a default motion setting - Transitions with a reduced motion setting turned on_
_altText: Podcast is selected and exited quickly on the left, while a podcast is selected and exited more slowly on the right._

### Consistent

Consistently applying the right type of transition helps make apps feel cohesive and predictable to use.

_footer: These four Android apps use the same forward and backward transition, making them feel like a cohesive family of apps_
_altText: Multiple apps move in tandem with the same motion effect, appearing in sync._

### Stable layouts

Use skeleton loaders so that UI elements are coherent and stable during a transition. Avoid content shifting positions or instantly popping in as it loads. It can be distracting and frustrating to use.

_footer: Transitions should use skeleton loaders with a subtle pulsing animation to stabilize a layout as it loads_
_altText: Podcast window opens with pulsing outline that frames content added slowly._

_footer: Content should not pop in and shift locations during a transition_
_altText: Podcast window opens with no outline, and content added into haphazard clusters._

### No jarring jump cuts

Jump cuts should generally be avoided as a default setting since they can be disorienting. Instantly transitioning from one screen to the next offers no clues to help a user orient themselves.

If pure efficiency is a top priority, like opening a menu in a productivity app, a jump cut may be preferred.

_footer: Animated transitions help users orient themselves as they navigate_
_altText: Items in a music library are smoothly transitioned between._

_footer: For most common transitions, jump cuts are jarring and disorienting_
_altText: Items in a library are selected with stark, quick transitions._

### Coherent spatial model

Transitions are used to establish a coherent spatial model. This helps users understand the physical layout of an app.

_footer: These carousel transitions have a coherent spatial layout while navigating between a collapsed and expanded view_
_altText: An image within a horizontal carousel is also scrolled horizontally._

_footer: Switching between horizontal and vertical carousel layouts creates a confusing spatial model_
_altText: An image within a horizontal carousel is scrolled vertically._

### Unified direction

A transition should have a unified direction of movement. Elements are grouped and move along a primary axis instead of moving in independent directions. Only important elements like hero images remain persistent throughout the transition. This helps guide a users focus.

_footer: This transition has a simple vertical motion that’s easy to follow_
_altText: Selected song expands in a cohesive upward direction, marked by two blue lines showing unified movement._

_footer: Don’t animate many persistent elements independently. The various moving parts are distracting_
_altText: Selected song expands in a jarring manner with multiple elements moving in different directions, marked by multiple red lines._

### Clean fades

Fully fade out content before fading new content in. This avoids the overlap of partially transparent elements resulting in distracting and messy frames.

If a cross fade needs to occur, keep it quick and hide it during the fastest part of the transition.

_footer: Fade content out before fading new content in to maintain a clean design_
_altText: Selected restaurant information fades out as it shrinks to reveal Google Map beneath.._

_footer: Avoid showing cross faded content, the overlap of partially transparent elements can result in messy and distracting frames_
_altText: Restaurant information remains visible as it shrinks and reveals the map beneath._

Don't slowly fade components on top of other content as they enter or exit. This creates distracting cross faded frames. If a fade is needed, like with a Dialog entering in the middle of the screen, the fade should use a short duration to hide that part of the transition.

_footer: Don't fade a bottom sheet as it enters and exits, it creates distracting cross faded frames_
_altText: Message window remains transparent with details visible as it shrinks causing text beneath to become obscured._

### Simple style

Transitions are not receptive to highly stylized motion. They're frequent, often occupy large portions of the screen, and are primarily meant to help users accomplish a task.

_footer: Transitions should have a simple style_
_altText: Calendar event expands evenly and quickly comes to a rest._

_footer: Common transitions should not use overt style effects like bouncy springs_
_altText: Calendar event expands with window bouncing momentarily and bouncing again on collapse._

## Choosing a transition pattern

Consider the following to choose the right transition for a given use case:

### Container transform

This pattern is highly effective at creating a relationship between elements. It's also the most dramatic pattern in terms of style and should be reserved for the right context. Consider using it for:

- Hero moments that should be expressive
- Shallow hierarchies where you expand an element for more detail then collapse it
- Creating a seamless connection between elements

**Read the research for the benefits of container transform****[here](https://material.io/blog/motion-research-container-transform).**

_footer: A container transform creates a clear connection between the thumbnail and expanded image. It also makes this hero transition more expressive._
_altText: Image within a carousel is selected and expands to fill the screen._

_footer: Don't use container transform in apps with deep hierarchies, the motion becomes excessive. The expressive style also doesn't fit this utility focused navigation._
_altText: Battery life menu item among many setting options is selected and expanded to fill the screen._

Use a container transform transition for hero moments rather than a forward and backward transition.

_footer: Don't use forward and backward transitions on hero moments like opening a photo memory_
_altText: A One-Year-Ago photo memory is selected and expanded to take over the screen._

### Forward and backward

Both Android and iOS should use platform defaults for forward and backward navigation. It's easy to implement and stays current as platforms update. They have a simple motion style suitable for such a common transition.

_footer: Platform default forward and backward transitions are a sensible choice for common navigation_
_altText: Individual message is selected with simple motion, and moves back with simple motion._

_footer: Container transform transitions require custom implementations and the motion may feel excessive when used frequently_
_altText: Individual message is selected, causing a more radical take-over of the screen._

### Lateral

Lateral transitions are used to browse peer content that's part of the same set, like navigating between tabs in a media library. By sliding content horizontally, it hints at being able to swipe the content area to navigate between peers.

_footer: A tab component uses a lateral transition type_
_altText: Tabs in a music app shift horizontally without interruption when selected._

_footer: Fading content as it slides makes the peer relationship and swipe gesture less obvious. The style also may be confused with a forward and backward transition._
_altText: Tabs in a music app fade as they rotate horizontally._

Don't use a Lateral transition for navigating hierarchical screens. Sliding content the full width of the screen is excessive for a high frequency transition. It also implies an equal peer relationship which isn't accurate to the hierarchy of the screens.

_footer: A lateral transition should not be used for common forward and backward navigation as it results in an excessive amount of motion_
_altText: Message selected within messaging app moves laterally._

### Top level

When tapping a navigation bar, rail or drawer, a quick fade is used to transition to a new destination. Top level destinations aren't necessarily related, so the motion intentionally does not create a connection between screens.

A lateral transition pattern is not recommended for this type of navigation. It implies you can swipe between top level destinations which conflicts with other components like carousels or swipe-able list items.

_footer: A top level transition type is used with a navigation bar, rail and drawer_
_altText: Navigation between home and music app occurs with a quick fade, suggesting that items in each are distinct._

_footer: Don't use a lateral transition to move between top level destinations. The gesture conflicts with carousel and list item gestures._
_altText: Navigation between home a music app occurs in a seamless lateral scroll, falsely suggesting that items in each are connected._

### Enter and Exit

This transition pattern is used to introduce a component in context of the screen’s main UI. It can be modal, like a dialog requiring a user to take action. Or it can allow for simultaneously using both regions of the UI, like a standard bottom sheet over a map.

Don't use this pattern for navigating hierarchical screens. Sliding content the full height of the screen is excessive and it creates an unclear relationship between screens.

_footer: This bottom sheet uses an enter and exit transition pattern_
_altText: Animation showing a standard bottom sheet using the enter and exit transition over a map._

_footer: Don't use an enter and exit pattern for navigating hierarchical screens_
_altText: Animation showing a card expanding to a full screen on click and using the enter and exit transition._
