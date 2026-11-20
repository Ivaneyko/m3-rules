# Tabs

slug: tabs  |  updated: 2026-07-17T07:03:01.541Z

<!-- section: Overview -->

-
Use tabs to group content into helpful categories

-
Two variants: primary and secondary

-
Tabs can horizontally scroll, so a UI can have as many tabs as needed

-
Place tabs next to each other as peers

_footer: - Primary tabs - Secondary tabs_
_altText: A bar of primary tabs with destinations labeled Flights, Trips, and Explore. And a bar of secondary tabs with destinations labeled Overview and Specifications_

## Availability & resources

## Differences from M2

- Color: New color mappings and compatibility with dynamic color
- Layout: Icons and labels are now vertically centered within the container

_footer: Tab icons and labels are positioned in the vertical center of the container_
_altText: Bar of primary tabs with destinations labeled Flights, Trips, and Explore_

<!-- section: Specs -->

## Tokens and specs

Select a component variant below to see its elements, attributes, tokens, and their values.

## Primary tabs

_footer: - Container - Badge (optional) - Icon (optional) - Label - Divider - Active indicator_
_altText: 6 elements of primary tabs._

### Primary tabs color

Color values are implemented through design tokens. For design, this means working with color values that correspond with tokens. For implementation, a color value will be a token that references a value. [Learn more about design tokens](/m3/pages/design-tokens/overview)

_footer: Primary tab color roles used for light and dark schemes:  - Surface - Primary - Primary - On surface variant - On surface variant - Outline variant - Primary_
_altText: 7 color roles applied to primary tabs in light and dark themes._

### Primary tabs states

_footer: - Enabled (active destination) - Hover (active destination) - Focused (active destination) - Pressed (active destination) - Enabled (inactive destination) - Hover (inactive destination) - Focused (inactive destination) - Pressed (inactive destination)_
_altText: Diagram of all primary tab states in both light and dark mode_

## Secondary tabs

_footer: - Container - Badge (optional) - Label - Divider - Active indicator_
_altText: 5 elements of secondary tabs._

### Secondary tabs color

Color values are implemented through design tokens. For design, this means working with color values that correspond with tokens. For implementation, a color value will be a token that references a value. [Learn more about design tokens](/m3/pages/design-tokens/overview)

_footer: Secondary tab color roles used for light and dark schemes:  - Surface - On surface - On surface variant - Outline variant - Primary_
_altText: 5 color roles applied to secondary tabs in light and dark themes._

### Secondary tabs states

_footer: - Enabled (active destination) - Hover (active destination) - Focused (active destination) - Pressed  (active destination) - Enabled (inactive destination) - Hover (inactive destination) - Focused (inactive destination) - Pressed (inactive destination)_
_altText: Diagram of all secondary tab states in both light and dark mode_

## Measurements

_footer: Tabs are divided into equal sections, with labels and icons positioned vertically centered. The divider is included in the height, placed inside the container._
_altText: Diagram of measurements for four and two tabs per container, including icon and label placement._

_footer: Primary tab active indicators are inset 2dp on each side, have a fully rounded corner radius, and a minimum length of 24dp._
_altText: Diagram of Primary tab active indicator measurements._

Attribute
 | Value
 |
Container height (label text only) | 48dp |
Container height (icon and label text) | 64dp |
Icon size | 24dp |
Divider height | 1dp |
Primary active indicator height | 3dp |
Secondary active indicator height | 2dp |
Active indicator shape | 3, 3, 0, 0 |
Active indicator minimum length | 24dp |
Padding between inline icon and text | 8dp |
Padding between inline text and badge | 4dp |
Overlap of badge on stacked icon | 6dp |

<!-- section: Guidelines -->

## Usage

Tabs organize groups of related content that are at the same level of hierarchy.

_footer: Tab labels can include icons and text. Text labels should be short._
_altText: Mobile screen with 3 tabs: video, photos and audio. Each tab has an an icon and text._

There are two variants of tabs:

-
Primary tabs

-
Secondary tabs

Primary tabs are placed at the top of the content pane under an app bar. They display the main content destinations.

Secondary tabs are used within a content area to further separate related content and establish hierarchy.

_footer: - Primary tabs - Secondary tabs_
_altText: 3 primary tabs above 3 secondary tabs._

### Related content

Use tabs to group related content, not *sequential* content.

_footer: Utilize tabs to categorize related groups of content into clearly defined sets_
_altText: Scrolling up and down through content, then swiping left through tabs._

_footer: Don’t use tabs to move through sequential content that needs to be read in a particular order. Instead, create hierarchy within the content using techniques like typography style and open space._
_altText: Mobile screen with scrollable tabs of sequential content: Chapter 1, Chapter 2, Chapter 3 and Chapter 4._

## Anatomy

_footer: - Container - Icon (optional) - Badge (optional) - Label - Divider - Active indicator_
_altText: Six components of tabs._

### Container

The container holds multiple tabs. Its contents can be fixed or scrollable.

The container should always extend the full width of the window and be divided into equal sections, one for each tab.

The container is defined by a divider on the bottom edge to separate it from the content below. Content may scroll under the container.

_footer: The container is the area that contains the tabs directly under the title above_
_altText: Mobile screen with fixed tabs with a dotted border to illustrate the container area._

### Icon (optional)

Icons communicate the kind of content within a tab. Icons should be simple and recognizable.

_footer: Tabs can use a combination of labels and icons_
_altText: Mobile screen with tabs that use both icons and labels._

Icons alone aren’t as effective as text labels at communicating complex content.
Use caution when representing tab content with icons alone, as an icon’s meaning may not be clear.

_footer: Use icons that are globally recognized when using icons alone_
_altText: Mobile screen with tabs represented by icons  for “wishlist” and “location”._

_footer: Don’t use tabs with both icons and text labels on only some tabs, but not others_
_altText: Mobile screen where "purchases” tab has text only and “wishlist” tab has text and icon._

### Label

Text labels should clearly and succinctly describe the content within the tab.

Tab labels appear in a single row. Labels can use a second line if needed, with truncated text. Alternatively, scrollable tabs can allow room for longer titles.

_footer: Tab labels should be short and succinct. There should be a clear relationship to the title above._
_altText: Mobile screen with scrollable tabs in a single row._

When using scrollable tabs, the first visible tab should be offset by 52dp from the left side of the device for both web and mobile. The width of each tab is defined by the length of its text label.

Avoid using inconsistent padding on each tab.

_footer: Offset the first scrollable tab 52dp from the leading edge so it's clear that more content is available_
_altText: Screen with scrollable tabs offset from the leading edge by 52dp._

_footer: Don’t truncate labels unless required, as truncated text can impede comprehension_
_altText: Screen with scrollable tabs, 2 of which are truncated to “Australian” showing how truncation can confuse users._

### Badges (optional)

Badges can be used on primary or secondary tabs to show notifications or updates related to a specific tab. Limit badge content to four characters, including a "+".

Once the user views the relevant content in the tab, the badge value should update or the badge should disappear entirely.

Small and large badges can both be used with tabs. Read the [badge guidance](/m3/pages/badges/overview) for more details.

_footer: Badges are used to highlight notifications related to tab specific content_
_altText: Mobile screen with tabs that use both icons and labels._

### Active indicator

To differentiate an active tab from an inactive tab, apply an underline and color change to the active tab’s text and icon.

_footer: An underline and color change differentiate an active tab from the inactive ones_
_altText: Selecting a tab creates an underline below the  icon and text, both which have changed color to show the tab is active._

## Choosing the tab variant

Primary tabs should be used when just one set of tabs are needed.

Secondary tabs are necessary when a screen requires more than one level of tabs. These tabs use a simpler style of indicator, but their function is identical to primary tabs.

_footer: Tabs can be joined with components like app bars, embedded in a specific UI region, or nested within components like cards and sheets. Tabs control the UI region displayed below them._
_altText: Mobile screen with primary tabs near the top of the screen._

## Placement

Tabs are displayed in a single row, with each tab connected to the content it represents. As a set, all tabs are unified by a shared topic.

Secondary tabs should always be placed below primary tabs.

_footer: Secondary tabs are found within other content to assist users with greater detail_
_altText: Mobile screen with secondary tabs below the primary tabs._

## Responsive layout

For fixed tabs, the maximum width for each tab should be determined by the width of the widest tab. The group of tabs should use a fluid margin and align to the center or leading edge of the body region.

Avoid using more than four tabs at once. At five or more tabs, the container becomes cramped.

_footer: Tabs can grow in width in relation to the number of items contained within_
_altText: Four fixed tabs spaced to match one another._

## Behavior

### States

By default, tabs inherit enabled states with one active state.The inactive and active states of a tab can inherit a hover, focus, and pressed states.

_footer: Active, hover, focused, and pressed states_
_altText: Four states of a tab._

### Fixed tabs

Fixed tabs display all tabs in a set simultaneously. They are best for switching between related content quickly, such as between transportation methods in a map. To navigate between fixed tabs, tap an individual tab, or swipe left or right in the content area.

_footer: Fixed tabs allow users to see all possible kinds of content available_
_altText: Mobile screen with fixed tabs, text only._

#### Tap a tab

Navigate to a tab by tapping on it.

_footer: Tapping on a tab directly_
_altText: Tapping a tab selects it._

#### Swipe within the content area

To navigate between tabs, users can swipe left or right within the content area.

_footer: Users can swipe between fixed tabs to see related content quickly_
_altText: Swiping left or right on the content area moves the focus between fixed tabs._

Use caution when placing other swipeable content (such as interactive maps or list items) in the content area.

_footer: Use different gesture directions when using tabs_
_altText: Scrolling up and down through content, then swiping left through tabs._

_footer: Avoid placing swipeable items in the content area of a UI that has tabs, as the user may mistakenly swipe the wrong component_
_altText: Swiping to change tabs accidentally swipes to delete a list item in the UI instead._

### Scrollable tabs

When a set of tabs cannot fit on screen, use scrollable tabs. Scrollable tabs can use longer text labels and a larger number of tabs. They are best used for browsing on touch interfaces.

_footer: Padding should remain the same when using scrolllable tabs and long labels_
_altText: Scrolling left and right on scrollable tabs._

### Scrolling content

When a screen scrolls up and down through content, tabs can either be fixed to the top of the screen, or scroll off the screen. If they scroll off the screen, they will return when the user scrolls upward.

_footer: Tabs can be use to create elevation_
_altText: Scrolling through content with fixed tabs  at top of the screen._

_footer: Tabs can scroll offscreen on scroll, and reappear when the page is scrolled up_
_altText: When scrolling up through content, tabs scroll off screen, then reappear when scrolling back down._

_footer: Don’t scroll tabs behind an app bar. When tabs are attached to a component, they should appear and move as a single unit._
_altText: When scrolling up through content, tabs scroll behind the app bar then reappear when scrolling back down._

<!-- section: Accessibility -->

## Use cases

Users should be able to:

- Undertake actions or invoke navigation to a new destination with assistive tech
- Select an action or destination from an off screen tab with assistive tech
- Maintain access of primary actions when the content is in a scrolled state

## Interaction & style

**Touch**

- When a user taps on an icon button, a touch ripple appears, indicating interaction feedback
- The selected indicator becomes active and shifts into position once the touch has been engaged

_footer: Touch: Tap_
_altText: The ripple effect resulting from tapping on an action item._

**Scrollable**

- When a set of tabs cannot fit on screen, scrollable tabs are used. They are best used for browsing on touch interfaces.
- To navigate between scrollable tabs, users swipe the set left or right. Users can also use arrow/tab to navigate through.
- It's **not recommended** to loop a tab set where it scrolls infinitely. This can trap users who are navigating linearly with a screen reader.
- To select an individual tab, users tap or press space/enter.
- Horizontal scrolling tabs meet accessibility requirements because they need to increase in width to respond to label text without affecting the layout, and horizontal scrolling is necessary to view those labels.

_footer: Scrollable: Scrollable Tabs_
_altText: Swiping right and left scrolls through tabs when scrolling is enabled._

**Cursor**

- When hovered, the hover state appears, providing a visual cue that the icon button is interactive. When clicked (in both active and inactive states), a ripple appears and the indicator shifts into position, showing the user feedback.

_footer: Cursor: Hover, Click_
_altText: Hover state appears when hovering over tabs, clicking on them changes the state to active._

**Keyboard/Switch**

- When tabbed, a focus indicator appears, providing a visual cue to the user that the destination is now selected
- When the user engages with the selected tab via Space/Enter in active states, the user is taken to a new destination
- Within the tab menu, the user is able to arrow/tab through the menu items, Space/Enter to select an item, or tab to exit the active state

_footer: Keyboard/Switch: Tab, Space/Enter, Arrow_
_altText: Tabbing through navigation items. The focus indicator appears when an item is selected._

### Avoid applying density by default

Don't apply density to tabs by default — this lowers their targets below our best practice of 48x48 CSS pixels. Instead, give people a way to choose a higher density, like selecting a denser layout or changing the theme.

To ensure that this density setting can be easily reverted when it's active, keep all the targets to change it at minimum 48x48 CSS pixels each.

## Initial focus

On arrow/tab in a tab menu, the active indicator appears on the first interactive element, providing feedback to the user that it is selected. The user is then able to tab to additional interactive elements until all available items are complete within the tab menu.

_footer: Use Arrow/Tab to navigate through items_
_altText: Arrow or Tab being used to navigate through a tab menu._

_footer: Don't use Space/Enter for navigating tabs. Space/Enter is only used for completing actions._
_altText: Space or Enter being used to navigate through a tab menu._

## Keyboard navigation

Keys | Actions |
Arrow | Focus lands on the next available navigation destination |
Space / Enter | Activates the focused navigation destination |
Arrow | Allows navigation through menu items |

## Labeling elements

When the visible UI text is ambiguous, or there is no visible UI text, accessibility labels need to be more descriptive. For example, an icon button that visually represents a “video camera” requires additional information in its accessibility label to clarify the icon’s intent.

_footer: While the icon visually represents a “Video camera,” the accessibility label for this tab clarifies its function: “Video format media content”_
_altText: Small device screen  with the tab highlighted and the label and role illustrated._
