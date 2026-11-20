# Choosing a component for a task

Sources read: 2026-11-20 ([snapshot](../sources/SNAPSHOT.md)). This file picks the component; the component file then gives its values and rules. Where a message goes (field error, snackbar, dialog) is in [feedback placement](feedback-placement.md).

## Actions, by emphasis

| The action is… | Use | Examples |
| --- | --- | --- |
| the screen's primary, most important or most common action | **FAB** or **extended FAB** (best on large screens); a **FAB menu** for several options | Create, Compose, New file |
| a final or unblocking step in a flow | **Filled button**; **tonal** when it should stand out less | Save, Confirm, Done |
| a key action with several options | **Split button** | Send, Add, Create |
| several key actions together | **Standard button group** | Back, Pause, Next |
| important but not the main one, or a way to back out of a flow | **Outlined button** | Reply, View all, Add to cart |
| one that needs separating from a patterned background | **Elevated button** (only then) | Reply, View all |
| changing the content visible on the page, between related options | **Connected button group** | Walk, Bike, Drive |
| optional, not essential to the task | **Text button** | Learn more, Change account |
| optional and supplementary, compact | **Icon button** | Bookmark, Star, Print |

([all buttons → choosing buttons](../sources/m3/components_all-buttons.md#choosing-buttons); values in [actions](../components/actions.md))

- **One high-emphasis button per screen**, for the primary action; the layout makes every other button visibly less important ([hierarchy](../sources/m3/components_all-buttons.md#hierarchy)).
- **Pairs step down one level**: filled next to text or outlined, outlined next to text. A single important action is a filled button on its own. **Side by side, not stacked**, when there's room ([placement](../sources/m3/components_all-buttons.md#placement)).
- **Chips aren't buttons**: a button is a persistent step forward (no more than three together); chips are dynamic options in a set ([chips → chips aren't buttons](../sources/m3/components_chips.md#chips-arent-buttons); [inputs → chips](../components/inputs.md#chips)).
- **A link inside body text is a link**, not a text button ([buttons → text style](../sources/m3/components_buttons.md#text-style)).
- **Page actions in the bar at the top**: an app bar holds one action, two at most; more actions go in a **toolbar** ([app bars → usage](../sources/m3/components_app-bars.md#usage); [navigation → app bars](../components/navigation.md#app-bars)).

## Choices and settings

The table is in [inputs → choosing a selection control](../components/inputs.md#choosing-a-selection-control): checkboxes for several options, radio buttons for one of five or fewer, a menu for one where space matters, a switch for a standalone setting that applies at once, a connected button group for two opposing options, filter chips to filter a collection.

- **Chip variants**: **assist** for a smart or automated action (Add to calendar), **filter** to filter a collection, **input** for a piece of information the user entered (a recipient), **suggestion** for a generated suggestion (a reply) ([chips → variants](../sources/m3/components_chips.md#variants)).
- **Dates**: a modal date picker swipes months, so **a distant date such as a date of birth uses modal input or the docked picker** ([inputs → date and time pickers](../components/inputs.md#date-and-time-pickers)).

## Navigation

| The user moves between… | Use |
| --- | --- |
| three to five top-level destinations on a compact or medium window | **Navigation bar** |
| top-level destinations on a medium or larger window | **Navigation rail**, collapsed (3–7 destinations) or expanded |
| more than five destinations on a compact window | **Modal expanded navigation rail** behind a menu icon |
| groups of related content within one page | **Tabs**; a second level is secondary tabs |
| related pages below a primary page, with page actions | **Floating toolbar** (never with a navigation bar) |

([navigation bar → usage](../sources/m3/components_navigation-bar.md#usage), [navigation rail → collapsed](../sources/m3/components_navigation-rail.md#collapsed), [tabs → usage](../sources/m3/components_tabs.md#usage), [toolbars → toolbars & navigation bars](../sources/m3/components_toolbars.md#toolbars--navigation-bars); details in [navigation](../components/navigation.md), window sizes in [layout → navigation by breakpoint](../foundations/layout.md#navigation-by-breakpoint))

- **Fewer than three destinations is tabs, not a navigation bar** ([navigation bar → usage](../sources/m3/components_navigation-bar.md#usage)).
- **One navigation component at a time**: never a rail with a navigation bar, never a navigation bar with a toolbar ([navigation rail → resizing](../sources/m3/components_navigation-rail.md#resizing), [toolbars & navigation bars](../sources/m3/components_toolbars.md#toolbars--navigation-bars)).
- **Tabs group related content, never sequential content** (chapters read in order) ([tabs → related content](../sources/m3/components_tabs.md#related-content)).

## Showing content

| The content is… | Use |
| --- | --- |
| content and actions about one subject, easy to scan, perhaps leading to more | **Card** (filled, elevated or outlined, chosen by style) |
| items to read or choose from, the same element in the same place each time | **List** |
| many visual items browsed side by side (photos) | **Carousel**, multi-browse |
| one large item spotlighted at a time, with a peek at the next | **Carousel**, hero |
| customised or text-heavy items flowing past the edge | **Carousel**, uncontained |
| a vertical, immersive feed (compact and medium, portrait) | **Carousel**, full-screen |

([cards → usage](../sources/m3/components_cards.md#usage), [lists → usage](../sources/m3/components_lists.md#usage), [carousel → usage](../sources/m3/components_carousel.md#usage); [containment](../components/containment.md))

- **Don't force content into cards** when spacing, headings or dividers give a simpler hierarchy ([cards → usage](../sources/m3/components_cards.md#usage)).
- **On compact, consider a list instead of cards**; on large windows lay cards out in columns, rows or a carousel instead of stretching them ([cards → adaptive design](../sources/m3/components_cards.md#adaptive-design)).

## Extra content and actions on a surface

| The user needs… | Use |
| --- | --- |
| to decide something that blocks the app, or to see critical information | **Basic dialog** |
| a series of tasks, a form with typing, or changes not saved instantly, on compact | **Full-screen dialog** (a basic dialog from medium up) |
| a temporary set of actions or choices (actions shown at all times go in a toolbar) | **Menu** |
| choices or details on a phone, especially long lists or items with icons and descriptions | **Modal bottom sheet** (mobile only) |
| supplementary content beside the main UI on a phone, both usable (a player, details over a map) | **Standard bottom sheet** |
| supplementary content or actions beside the content (filters, details) on medium and expanded | **Standard side sheet**; modal on compact |

([dialogs → usage](../sources/m3/components_dialogs.md#usage), [bottom sheets → usage](../sources/m3/components_bottom-sheets.md#usage), [modal bottom sheets](../sources/m3/components_bottom-sheets.md#modal-bottom-sheets), [side sheets → usage](../sources/m3/components_side-sheets.md#usage), [menus → usage](../sources/m3/components_menus.md#usage); [containment](../components/containment.md), [inputs → menus](../components/inputs.md#menus))

- **Dialogs are for high priority only, used sparingly**; low and medium priority is a snackbar, and a choice that shouldn't interrupt is a menu ([dialogs → usage](../sources/m3/components_dialogs.md#usage), [similar components](../sources/m3/components_dialogs.md#similar-components)).
- **Never hide critical information in a tooltip**; a tooltip labels or explains ([tooltips → usage](../sources/m3/components_tooltips.md#usage); [feedback → tooltips](../components/feedback.md#tooltips)).
