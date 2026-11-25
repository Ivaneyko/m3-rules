# Navigation: app bars, navigation bar, navigation rail, navigation drawer, tabs and toolbars

Sources read: 2026-11-20 ([snapshot](../sources/SNAPSHOT.md)). Sizes in dp (`1dp` = `1px` on the web). *Tokens* marks values from the Compose tokens ([component-tokens](../sources/tokens/component-tokens.md)). Which navigation component goes with which window size: [layout → navigation by breakpoint](../foundations/layout.md#navigation-by-breakpoint).

## Replaced in M3 Expressive

| Old | Use instead |
| --- | --- |
| Top app bar, center-aligned app bar | App bar (small, with the centred-text configuration) |
| Medium and large app bars | Medium flexible and large flexible app bars |
| Navigation bar (baseline) | Flexible navigation bar |
| Navigation rail (baseline) | Collapsed navigation rail |
| Navigation drawer | Expanded navigation rail |
| Bottom app bar | Docked toolbar |

([app bars → baseline variants](../sources/m3/components_app-bars.md#baseline-variants), [navigation bar → M3 Expressive update](../sources/m3/components_navigation-bar.md#m3-expressive-update), [navigation rail → M3 Expressive update](../sources/m3/components_navigation-rail.md#m3-expressive-update), [navigation drawer](../sources/m3/components_navigation-drawer.md), [toolbars → M3 Expressive update](../sources/m3/components_toolbars.md#m3-expressive-update))

## App bars

| Variant | Height | Headline | Subtitle |
| --- | --- | --- | --- |
| Search | — | body large (the hinted search text) | — |
| Small | 64 | title large | label medium |
| Medium flexible | 112 (*tokens* `LargeContainerHeight` 136) | headline medium | label large |
| Large flexible | 120 (*tokens* `LargeContainerHeight` 152) | display small | title medium |

| Part | Value |
| --- | --- |
| Container | `surface`, square corners, full window width; on scroll `surface-container` |
| Leading icon, headline | `on-surface` |
| Trailing icons, subtitle | `on-surface-variant` |
| Icons | 24; avatar 32 |
| Search container | `surface-container`; search text `on-surface-variant` |

([app bars → color](../sources/m3/components_app-bars.md#color), [headline](../sources/m3/components_app-bars.md#headline), [subtitle](../sources/m3/components_app-bars.md#subtitle-1); *tokens* `AppBarTokens`, `AppBarSmallTokens`, `AppBarMediumFlexibleTokens`, `AppBarLargeFlexibleTokens`)

- **Content and actions for the current page**: navigation (Back, Menu), a headline, images and **one action, two at most**. The main action changes or leaves the whole page (Send, Save, Edit). Many actions go in a **toolbar**; avoid an overflow menu in the app bar ([usage](../sources/m3/components_app-bars.md#usage)).
- **Choosing a variant**: **search** on a home page where search is central; **small** in dense layouts or once the page scrolls; **medium flexible** for a larger headline; **large flexible** to emphasise the headline ([usage](../sources/m3/components_app-bars.md#usage)).
- **Emphasis**: to stress the main action, make **one** trailing icon button filled or tonal (default or wide). **Never more than one filled or tonal button** ([usage](../sources/m3/components_app-bars.md#usage), [trailing icon buttons](../sources/m3/components_app-bars.md#trailing-icon-buttons)).
- **Container**: **square corners**, the **default height** (never shorter), **always 100% of the window width**; don't move it or change its shape ([container](../sources/m3/components_app-bars.md#container), [resizing](../sources/m3/components_app-bars.md#resizing)).
- **Leading button** navigates: a **menu icon** that opens a modal expanded navigation rail, or a **back arrow** ([leading button](../sources/m3/components_app-bars.md#leading-button)).
- **Headline**: the page, section or product, brief. **Never truncated**. A long headline goes in a medium or large flexible app bar and wraps to **two lines at most**; **a small app bar never wraps**. Aligned to the leading edge or centred ([headline](../sources/m3/components_app-bars.md#headline)).
- **Trailing icon buttons**: up to **two**, the most used nearest the leading edge; filled icons where possible. Don't use them to open a menu of more actions ([trailing icon buttons](../sources/m3/components_app-bars.md#trailing-icon-buttons)).
- **Logo**: an image can replace the text in a small app bar and sits above the text in the others ([adding logos](../sources/m3/components_app-bars.md#adding-logos)).
- **Search app bar**: the text always contains **Search** (Search, Search inbox, Search Photos). Selecting it opens the **search view**. Besides an avatar, up to **two** trailing icons on mobile, up to **four** on larger screens, inside or outside the search bar. The leading element may be a logo, but **never a logo that opens an expanded rail**. The search container fills the space between the elements up to **312**, then grows to fill only **50%** of it. On a darker background the container may use `surface-bright`; any other colours need **3:1** contrast between text and container ([search app bar](../sources/m3/components_app-bars.md#search-app-bar-1), [buttons in search app bar](../sources/m3/components_app-bars.md#buttons-in-search-app-bar), [large screens](../sources/m3/components_app-bars.md#large-screens), [alternate color options](../sources/m3/components_app-bars.md#alternate-color-options), [resizing](../sources/m3/components_app-bars.md#resizing)).
- **Scrolling**: the app bar starts in the background colour and **fills with `surface-container` on scroll**, with no drop shadow (*tokens* also give an on-scroll elevation of level 2, `OnScrollContainerElevation`). It can stay or hide and come back. A transparent app bar on scroll is allowed if its icon buttons have a container fill. Medium and large flexible app bars may compress into a small one and stay small until the page is back at the top; **never transform into a search app bar** ([scrolling](../sources/m3/components_app-bars.md#scrolling), [differences from M2](../sources/m3/components_app-bars.md#differences-from-m2)).
- **Narrow windows**: trailing actions may collapse into an overflow menu and come back at larger sizes ([resizing](../sources/m3/components_app-bars.md#resizing)).
- **Right-to-left**: the layout mirrors ([presentation](../sources/m3/components_app-bars.md#presentation)).
- **Accessibility**: the headline's label matches its text, with extra context if needed to say which page this is. Initial focus is on the leading button; **Tab** moves between elements, **Space** or **Enter** activates. Icon buttons are labelled by the action they take ([use cases](../sources/m3/components_app-bars.md#use-cases), [initial focus](../sources/m3/components_app-bars.md#initial-focus), [keyboard navigation](../sources/m3/components_app-bars.md#keyboard-navigation), [labeling elements](../sources/m3/components_app-bars.md#labeling-elements)).

## Navigation bar

| Part | Value |
| --- | --- |
| Container | `surface-container`, square corners, full window width, height 64 (*tokens* `TallContainerHeight` 80) |
| Active indicator | `secondary-container`, full corners; vertical item 56 × 32, horizontal item 40 high with 16 either side |
| Active icon | `on-secondary-container`, 24 |
| Active label | `secondary` (Expressive changed it from `on-surface-variant`) |
| Inactive icon and label | `on-surface-variant` |
| Label | label medium |
| States | hover 8%, focus 10%, pressed 10% |

([navigation bar → color](../sources/m3/components_navigation-bar.md#color), [states](../sources/m3/components_navigation-bar.md#states), [M3 Expressive update](../sources/m3/components_navigation-bar.md#m3-expressive-update); *tokens* `NavigationBarTokens`, `NavigationBarVerticalItemTokens`, `NavigationBarHorizontalItemTokens`)

Open conflict: the page lists "no shadow" as a change from M2, while *tokens* give the container elevation level 2 (`ContainerElevation`) ([differences from M2](../sources/m3/components_navigation-bar.md#differences-from-m2)).

- **Three to five top-level destinations**, on mobile and tablet only, **never on desktop**. **Fewer than three: use tabs**. **More than five**: tabs within a page, or a modal expanded navigation rail behind a menu icon. Not for a single task such as viewing one email ([usage](../sources/m3/components_navigation-bar.md#usage), [resizing](../sources/m3/components_navigation-bar.md#resizing)).
- **One destination is always active**, and only one has the active indicator ([usage](../sources/m3/components_navigation-bar.md#usage), [active indicator](../sources/m3/components_navigation-bar.md#active-indicator)).
- **Items**: **vertical** (label under the icon) in compact windows; **horizontal** (icon and label side by side inside the indicator) in medium windows. Vertical items share the width equally; horizontal items have a fixed width, centred, with the spare space at the ends ([configurations](../sources/m3/components_navigation-bar.md#configurations), [measurements](../sources/m3/components_navigation-bar.md#measurements), [navigation items](../sources/m3/components_navigation-bar.md#navigation-items), [presentation](../sources/m3/components_navigation-bar.md#presentation)).
- **Positions are fixed**: destinations never scroll or move ([usage](../sources/m3/components_navigation-bar.md#usage)).
- **Icons**: **filled when active, outlined when inactive**; an icon without a filled version gets **semibold** weight instead. Active and inactive icons need **3:1** contrast with the container; don't use several colours ([icons](../sources/m3/components_navigation-bar.md#icons)).
- **Label**: required on every item, **1–2 words**. **Never truncated, never shrunk** to fit. The active label is bold, inactive ones medium ([label text](../sources/m3/components_navigation-bar.md#label-text), [visual indicators](../sources/m3/components_navigation-bar.md#visual-indicators)).
- **Badges** sit on the upper right of the icon, in both item layouts ([badges](../sources/m3/components_navigation-bar.md#badges-optional)).
- **Placement**: always at the **bottom** of the window. A **FAB sits above it**, right-aligned, never covering it. Dialogs, sheets, the on-screen keyboard and the like may cover it for the length of a flow, **never permanently** ([container](../sources/m3/components_navigation-bar.md#container), [placement](../sources/m3/components_navigation-bar.md#placement)).
- **Navigating**: selecting a destination uses the **top-level** transition; the destination either keeps its state (scroll, tab, inline search) or resets, chosen per product. **Selecting the active destination scrolls to the top**. **No swiping between destinations** ([navigation](../sources/m3/components_navigation-bar.md#navigation)).
- **Scrolling** may hide the bar and bring it back, **but not while a screen reader is on** ([scrolling](../sources/m3/components_navigation-bar.md#scrolling)).
- **Selection motion**: the icon fills and the indicator expands from the icon's centre, on one axis only ([selection](../sources/m3/components_navigation-bar.md#selection)).
- **Text scaling**: the bar grows taller with larger text and labels may wrap; the full label stays visible up to **2×** ([text scaling and truncation](../sources/m3/components_navigation-bar.md#text-scaling-and-truncation)).
- **Keyboard**: initial focus on the first item; **Tab** moves between items, **Space** or **Enter** selects. The accessible name is the destination name, more descriptive when the visible label is ambiguous (Library → Music library) ([initial focus](../sources/m3/components_navigation-bar.md#initial-focus), [keyboard navigation](../sources/m3/components_navigation-bar.md#keyboard-navigation), [labeling elements](../sources/m3/components_navigation-bar.md#labeling-elements)).

## Navigation rail

| Part | Collapsed | Expanded |
| --- | --- | --- |
| Width | 96 (*tokens* `NarrowContainerWidth` 80) | 220–360 |
| Container | fill optional (page `surface-container`, *tokens* `surface`), square corners, elevation 0 | standard: the same; modal: `surface-container`, corners large (16), elevation 2 |
| Item | vertical: indicator 56 × 32, label medium | horizontal: indicator 56 high, label large |
| Top space | 44 | 44 |

| Part | Colour |
| --- | --- |
| Active indicator | `secondary-container` |
| Active icon | `on-secondary-container` |
| Active label | `secondary` on vertical items, `on-secondary-container` on horizontal ones |
| Inactive icon and label | `on-surface-variant` |
| State layers | `on-secondary-container` |

([navigation rail → color](../sources/m3/components_navigation-rail.md#color); *tokens* `NavigationRailCollapsedTokens`, `NavigationRailExpandedTokens`, `NavigationRailColorTokens`, `NavigationRailVerticalItemTokens`, `NavigationRailHorizontalItemTokens`)

- **Collapsed**: on the leading edge, **3–7 destinations**, **never hidden**. For medium to extra-large windows; **compact windows always use a navigation bar**, and a medium window with few destinations may too ([collapsed](../sources/m3/components_navigation-rail.md#collapsed)).
- **Expanded**: **always opened from a menu icon**, and may show secondary destinations. **Standard** sits beside the content, for large windows with space to spare. **Modal** covers the content, for dense layouts or many destinations; on Android predictive Back applies only to the modal one. In immersive screens the expanded rail may be hidden until the menu icon is selected ([expanded](../sources/m3/components_navigation-rail.md#expanded), [back](../sources/m3/components_navigation-rail.md#back)).
- **The only visible navigation**: **never a rail and a navigation bar together**; the rail turns into a bar on small screens ([collapsed](../sources/m3/components_navigation-rail.md#collapsed), [resizing](../sources/m3/components_navigation-rail.md#resizing)).
- **Container**: always **vertical**, on the **leading edge** (left in left-to-right, right in right-to-left), **outside every pane**, never inside the content. Without the container fill, every item still needs **3:1** contrast. An optional vertical divider goes on the edge next to the content ([container](../sources/m3/components_navigation-rail.md#container), [placement](../sources/m3/components_navigation-rail.md#placement), [divider](../sources/m3/components_navigation-rail.md#divider-optional)).
- **Alignment**: items as a group at the top or centre (centre on tablets, easier to reach); the **menu and FAB always at the top** ([container](../sources/m3/components_navigation-rail.md#container)).
- **Menu**: switches between collapsed and expanded; its icon changes when the rail is expanded to show it can collapse ([menu](../sources/m3/components_navigation-rail.md#menu-optional)).
- **FAB**: at the top, above the destinations, **never below them**, with resting elevation **0** inside the rail; it becomes an extended FAB when the rail expands. A logo at the top must not look like a button and **never acts as the menu** ([FAB](../sources/m3/components_navigation-rail.md#floating-action-button-fab-optional), [presentation](../sources/m3/components_navigation-rail.md#presentation)).
- **Active indicator** on the current page only. In the expanded rail it hugs the icon and label; it may be stretched to fill the width to look like the old drawer. **The target always spans the full rail width** ([active indicator](../sources/m3/components_navigation-rail.md#active-indicator), [interaction & style](../sources/m3/components_navigation-rail.md#interaction--style)).
- **Icons** are filled when active, outlined otherwise, semibold when no filled version exists; no more than two colours ([icons](../sources/m3/components_navigation-rail.md#icons), [interaction & style](../sources/m3/components_navigation-rail.md#interaction--style)).
- **Label**: required, **one word**. Avoid wrapping; if needed, break between words or hyphenate. **Never truncated, never shrunk** ([label text](../sources/m3/components_navigation-rail.md#label-text)).
- **Badges**: on the icon's upper right in the collapsed rail, **next to the label** in the expanded one ([badges](../sources/m3/components_navigation-rail.md#badges)).
- **Expanding** makes the page content adjust to fit ([presentation](../sources/m3/components_navigation-rail.md#presentation)).
- **Scrolling**: the destinations stay fixed while content scrolls vertically. With horizontal scrolling the rail may scroll away or stay; if it stays, separate it with a divider or elevation level 1 ([scrolling](../sources/m3/components_navigation-rail.md#scrolling)).
- **Selection** uses the top-level transition; the icon fills and the indicator expands from the icon's centre ([selection](../sources/m3/components_navigation-rail.md#selection)).
- **Text scaling**: items grow taller and labels may wrap; the full label stays visible up to **2×** ([text scaling and truncation](../sources/m3/components_navigation-rail.md#text-scaling-and-truncation)).
- **Keyboard**: initial focus on the first interactive item (the menu, the FAB or the first destination); **Tab** reaches the destinations, **Tab** or **arrows** move between them, **Space** or **Enter** selects. The accessible name matches the label, more descriptive when the label is ambiguous (Recent → Recent images) ([initial focus](../sources/m3/components_navigation-rail.md#initial-focus), [keyboard navigation](../sources/m3/components_navigation-rail.md#keyboard-navigation), [labeling elements](../sources/m3/components_navigation-rail.md#labeling-elements)).
- **Tabs** may sit alongside a rail for another visible level of navigation ([placement](../sources/m3/components_navigation-rail.md#placement)).

## Navigation drawer (no longer recommended)

M3 Expressive replaces it with the **expanded navigation rail**; use these values only to keep an existing drawer consistent ([navigation drawer → M3 Expressive update](../sources/m3/components_navigation-drawer.md#m3-expressive-update)).

| Part | Value |
| --- | --- |
| Container | full height, 360 wide; standard: corners 0, 16, 16, 0 |
| Active indicator | 336 × 56, corners 28, 12 padding |
| Items | icon 24, label start-aligned, 28 padding left and right, 0 between items |

([standard](../sources/m3/components_navigation-drawer.md#standard-navigation-drawer), [modal navigation drawer measurements](../sources/m3/components_navigation-drawer.md#modal-navigation-drawer))

- For **5 or more** top-level destinations, two or more levels of hierarchy, or quick moves between unrelated destinations; **never with another primary navigation** (a navigation bar); one destination is always active ([usage](../sources/m3/components_navigation-drawer.md#usage)).
- Short **section labels** may group destinations ([section label](../sources/m3/components_navigation-drawer.md#section-label-optional)).
- **Modal**: a scrim blocks the rest of the app and closes the drawer when clicked ([scrim](../sources/m3/components_navigation-drawer.md#scrim-modal-only), [closing](../sources/m3/components_navigation-drawer.md#closing)).
- **Selected** destinations use a **filled icon**, the others outlined ([visual indicators](../sources/m3/components_navigation-drawer.md#visual-indicators)).
- **Keyboard**: focus starts on the **first destination**; **arrows** move between destinations; **Space** or **Enter** selects one and moves focus to the section it opens. Each item is named by its destination, more descriptive when the text is ambiguous (Recents) ([initial focus](../sources/m3/components_navigation-drawer.md#initial-focus), [keyboard navigation](../sources/m3/components_navigation-drawer.md#keyboard-navigation), [labeling elements](../sources/m3/components_navigation-drawer.md#labeling-elements)).

## Tabs

| Part | Primary | Secondary |
| --- | --- | --- |
| Container | `surface`, height 48 (label only) or 64 (icon and label) | `surface`, height 48 |
| Active indicator | `primary`, 3 high, corners 3, 3, 0, 0, inset 2 each side, at least 24 long | `primary`, 2 high |
| Active label and icon | `primary` | `on-surface` |
| Inactive label and icon | `on-surface-variant` | `on-surface-variant` |
| Label | title small | title small |
| Divider | 1 high, inside the container | 1 high, inside the container |

Other sizes: icon 24; 8 between an inline icon and its text; 4 between text and a badge; a badge overlaps a stacked icon by 6 ([tabs → measurements](../sources/m3/components_tabs.md#measurements), [primary tabs color](../sources/m3/components_tabs.md#primary-tabs-color), [secondary tabs color](../sources/m3/components_tabs.md#secondary-tabs-color); *tokens* `PrimaryNavigationTabTokens`, `SecondaryNavigationTabTokens`).

Open conflict: the page gives the divider `outline-variant`; *tokens* give `surface-variant` (`SecondaryNavigationTabTokens.DividerColor`).

- **Related content at the same level**, never sequential content read in order (chapters) ([usage](../sources/m3/components_tabs.md#usage), [related content](../sources/m3/components_tabs.md#related-content)).
- **Primary** tabs sit at the top of the content pane, under the app bar, for the main content destinations; use them when there's one set. **Secondary** tabs separate content inside an area, **always below primary tabs**, when a screen needs a second level ([usage](../sources/m3/components_tabs.md#usage), [choosing the tab variant](../sources/m3/components_tabs.md#choosing-the-tab-variant), [placement](../sources/m3/components_tabs.md#placement)).
- **Navigation bar vs tabs**: the navigation bar for distinct pages, tabs for related content within a page ([navigation bar → usage](../sources/m3/components_navigation-bar.md#usage)).
- **Container**: full window width, one equal section per tab, a divider on the bottom edge; content may scroll under it ([container](../sources/m3/components_tabs.md#container)).
- **At most four tabs**; five or more is cramped. Fixed tabs take the width of the widest tab, with a fluid margin, aligned to the centre or the leading edge ([responsive layout](../sources/m3/components_tabs.md#responsive-layout)).
- **Labels**: short, in one row, related to the title above; a second line with truncation only if needed; **avoid truncating**. Consistent padding on every tab ([label](../sources/m3/components_tabs.md#label)).
- **Icons**: simple and recognisable. **Either every tab has an icon or none does**. Icon-only tabs need globally recognised icons ([icon](../sources/m3/components_tabs.md#icon-optional)).
- **Badges**: up to **four characters** including "+"; they update or disappear once the tab's content is seen ([badges](../sources/m3/components_tabs.md#badges-optional)).
- **Active tab**: an underline plus a colour change of its text and icon ([active indicator](../sources/m3/components_tabs.md#active-indicator)).
- **Fixed tabs** show the whole set; tap a tab or swipe the content area. **Avoid other swipeable content** (maps, swipe-to-delete lists) under fixed tabs ([fixed tabs](../sources/m3/components_tabs.md#fixed-tabs), [swipe within the content area](../sources/m3/components_tabs.md#swipe-within-the-content-area)).
- **Scrollable tabs** when the set doesn't fit: longer labels and more tabs, each as wide as its label; the first tab starts **52** from the leading edge to show there's more. **Never loop** the set ([scrollable tabs](../sources/m3/components_tabs.md#scrollable-tabs), [label](../sources/m3/components_tabs.md#label), [interaction & style](../sources/m3/components_tabs.md#interaction--style)).
- **Scrolling content**: tabs stay at the top or scroll away and come back on scroll up. **Never scroll tabs behind the app bar**; attached tabs move with it as one unit ([scrolling content](../sources/m3/components_tabs.md#scrolling-content)).
- **No density by default**: it shrinks targets below **48 × 48**; offer a denser option instead, with its own controls at least 48 × 48 ([avoid applying density by default](../sources/m3/components_tabs.md#avoid-applying-density-by-default)).
- **Keyboard**: **arrows** (or **Tab**) move between tabs, **Space** or **Enter** activates; **Space and Enter never move between tabs**. Icon-only or ambiguous tabs get a descriptive accessible name ([initial focus](../sources/m3/components_tabs.md#initial-focus), [keyboard navigation](../sources/m3/components_tabs.md#keyboard-navigation), [labeling elements](../sources/m3/components_tabs.md#labeling-elements)).

## Toolbars

| Part | Docked | Floating |
| --- | --- | --- |
| Container | `surface-container`, square corners, full window width, height 64 | full corners, height 64, elevated by default |
| Padding | 16 at each end; 32 between items by default (*tokens* 4–32) | 8 at each end, 4 between items; 16 from the window edge |
| Standard colours | `surface-container` | `surface-container` |
| Vibrant colours | — | container `primary-container`; unselected buttons `on-primary-container`; selected buttons `surface-container` with `on-surface` |

([toolbars → color](../sources/m3/components_toolbars.md#color), [measurements](../sources/m3/components_toolbars.md#measurements), [container](../sources/m3/components_toolbars.md#container), [elevation](../sources/m3/components_toolbars.md#elevation); *tokens* `DockedToolbarTokens`, `FloatingToolbarTokens`)

- **Actions for the current page**, more than an app bar holds; it can show more on larger windows. Actions that don't fit go in a menu ([usage](../sources/m3/components_toolbars.md#usage)).
- **Docked** for global actions that stay the same across pages; **floating** for actions tied to the content or the page ([usage](../sources/m3/components_toolbars.md#usage)).
- **Standard** colours keep attention on the content; **vibrant** draws it to the controls, or signals a temporary mode such as editing ([usage](../sources/m3/components_toolbars.md#usage)).
- **Not with a navigation bar**: both live at the bottom. Show the navigation bar on primary pages and a toolbar on the pages under them. **Never a docked toolbar together with other bottom elements**. A floating toolbar may act as tabs between related pages, but never alongside a navigation bar ([toolbars & navigation bars](../sources/m3/components_toolbars.md#toolbars--navigation-bars), [position & orientation](../sources/m3/components_toolbars.md#position--orientation)).
- **Slots** hold icon buttons, buttons, text fields, images or custom components. Keep the controls consistent and not too many. **Emphasise one action at a time** (a filled or tonal icon button, a wide button, another colour role, or a paired FAB), **never a filled button and a FAB together** ([flexibility & slots](../sources/m3/components_toolbars.md#flexibility--slots-1), [floating toolbar with FAB](../sources/m3/components_toolbars.md#floating-toolbar-with-fab)).
- **Targets** at least **48 × 48** ([container](../sources/m3/components_toolbars.md#container)).
- **Docked**: only at the **bottom**, full width, **square corners**. Items evenly spaced on compact; centred, or a key action centred with the rest at the edges, from medium up. On the web and large screens it may be rounded, placed elsewhere and split with dividers; shrink its height only when vertical space is short ([container](../sources/m3/components_toolbars.md#container), [position & orientation](../sources/m3/components_toolbars.md#position--orientation), [docked](../sources/m3/components_toolbars.md#docked)).
- **Floating**: **fully on screen**, never past the window or pane edge; only as wide as its items, overflow in the trailing slot. Horizontal at least **16** from the edge; vertical (larger windows) at least **24**, without wide icon buttons, on the edge **opposite the navigation rail** (use the centred rail then). **No square icon buttons** in it. Elevation may go when the content behind is visually distinct ([container](../sources/m3/components_toolbars.md#container), [elevation](../sources/m3/components_toolbars.md#elevation), [position & orientation](../sources/m3/components_toolbars.md#position--orientation), [floating](../sources/m3/components_toolbars.md#floating), [flexibility & slots](../sources/m3/components_toolbars.md#flexibility--slots-1)).
- **Compact windows**: one toolbar only; avoid vertical toolbars unless the screen is simple. Larger windows may use several floating toolbars on opposite edges, styled to show their hierarchy ([floating](../sources/m3/components_toolbars.md#floating), [presentation](../sources/m3/components_toolbars.md#presentation)).
- **Narrow windows**: trailing actions may collapse into an overflow menu ([presentation](../sources/m3/components_toolbars.md#presentation)).
- **Right-to-left**: mirror the items that need it; flip the order when it matters (Next stays on the trailing edge) ([right-to-left languages](../sources/m3/components_toolbars.md#right-to-left-languages)).
- **Scrolling**: docked stays or slides away; floating stays, slides away or collapses to one key action. **Never collapse and slide away at once** ([scrolling](../sources/m3/components_toolbars.md#scrolling)).
- **Accessibility**: on the web the container has the **`toolbar` role**. Focus starts on the first element; **Tab** or **arrows** move, **Space** or **Enter** activates. Each control follows its own rules ([initial focus](../sources/m3/components_toolbars.md#initial-focus), [keyboard navigation](../sources/m3/components_toolbars.md#keyboard-navigation), [labeling elements](../sources/m3/components_toolbars.md#labeling-elements)).
