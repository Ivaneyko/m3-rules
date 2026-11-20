# Cards

slug: cards  |  updated: 2026-07-24T06:14:10.548Z

<!-- section: Overview -->

-
Use cards to contain related elements

-
Three variants: elevated, filled, outlined

-
Contents can include anything from images to headlines, supporting text, buttons, and lists

-
Can also contain other components

-
Cards have flexible layouts and dimensions based on their contents

_footer: - Elevated card - Filled card - Outlined card_
_altText: 3 variants of cards_

## Availability & resources

## Differences from M2

-
Color: New color mappings and compatibility with dynamic color

-
Elevation: Lower elevation and no shadow by default

-
Variants: Three official card variants – elevated, filled, and outlined

_footer: Cards have updated colors, elevation, and variants_
_altText: M3-style card_

<!-- section: Specs -->

## Tokens & specs

Select a component variant below to see its elements, attributes, tokens, and their values.

## Elevated card

_footer: - Container_
_altText: Diagram indicating elevated card container._

### Elevated card color

Color values are implemented through design tokens. For design, this means working with color values that correspond with tokens. For implementation, a color value will be a token that references a value. [Learn more about design tokens](/m3/pages/design-tokens/overview/)

_footer: Elevated card color roles used for light and dark themes:  - Surface container low_
_altText: Color diagram indicating elevated card surface color._

### Elevated card states

States are visual representations used to communicate the status of a component or interactive element. [Learn more about interaction states](/m3/pages/interaction-states)

_footer: Elevated card states:   - Hovered - Focused - Pressed - Dragged - Disabled_
_altText: Diagram of 5 elevated card states._

## Filled card

_footer: - Container_
_altText: Diagram indicating filled card container._

### Filled card color

Color values are implemented through design tokens. For design, this means working with color values that correspond with tokens. For implementation, a color value will be a token that references a value. [Learn more about design tokens](/m3/pages/design-tokens/overview/)

_footer: Filled card color roles used for light and dark themes:  - Surface container highest_
_altText: Color diagram indicating filled card surface color._

### Filled card states

States are visual representations used to communicate the status of a component or interactive element. [Learn more about interaction states](/m3/pages/interaction-states)

_footer: Filled card states:   - Hovered - Focused - Pressed - Dragged - Disabled_
_altText: Diagram of 5 filled card states._

## Outlined card

_footer: - Container - Outline_
_altText: Diagram indicating outlined card container and outline._

### Outlined card color

Color values are implemented through design tokens. For design, this means working with color values that correspond with tokens. For implementation, a color value will be a token that references a value. [Learn more about design tokens](/m3/pages/design-tokens/overview/)

_footer: Outlined card color roles used for light and dark themes:  - Surface - Outline variant_
_altText: Outlined card color roles in light and dark themes._

### Outlined card states

States are visual representations used to communicate the status of a component or interactive element. [Learn more about interaction states](/m3/pages/interaction-states)

_footer: Outlined card states:   - Hovered - Focused - Pressed - Dragged - Disabled_
_altText: Diagram of 5 outlined card states._

## Measurements

_footer: Card padding and size measurements_
_altText: Diagram with card layout measurements._

Attribute
 | Value
 |
Shape
 | 12dp corner radius |
Left/right padding
 | 16dp |
Padding between cards
 | 8dp max |
Label text alignment
 | Start-aligned |

<!-- section: Guidelines -->

_altText: 3 variants of cards: elevated, filled, and outlined._

## Usage

Use a card to display content and actions on a single topic.

Cards should be easy to scan for relevant and actionable information. 

Elements like text and images should be placed on cards in a way that clearly indicates hierarchy.

_footer: Cards can display content and actions on a single topic_
_altText: Example card containing an image, title, text, and button._

Cards can serve as entry points into deeper levels of detail or navigation, such as a music album or details on an upcoming vacation.

_footer: Card text and image show a clear hierarchy_
_altText: Example world tour card._

_footer: Use cards to display related information on a single subject_
_altText: Card displaying connected details about a world tour._

Cards can be displayed together in a grid, vertical list, or carousel.

_footer: Cards can be shown together_
_altText: 4 cards together in a grid layout._

_footer: Don't force content into cards when spacing, headlines, or dividers would create a simpler visual hierarchy_
_altText: 5 albums in a vertical list of cards._

There are three card variants:

-
Elevated

-
Filled

-
Outlined

Each provides the same legibility and functionality, so the variant you use depends on style alone.

_footer: - Elevated card - Filled card - Outlined card_
_altText: 3 variants of cards._

_footer: Elevated cards have a drop shadow, providing more separation from the background than filled cards, but less than outlined cards_
_altText: Example elevated card._

_footer: Filled cards provide subtle separation from the background. This has less emphasis than elevated or outlined cards._
_altText: Example filled card._

_footer: Outlined cards have a visual boundary around the container. This can provide greater emphasis than the other variants._
_altText: Example outlined card._

## Anatomy

The card container is the only required element in a card. Card layouts can vary to support the kinds of content they contain. Below is a common configuration of elements.

_footer: - Container  - Image  - Button  - Supporting text  - Subhead  - Headline_
_altText: Diagram labeling the 6 parts of card anatomy._

### Container

Card containers hold all card elements. Their size is determined by the space those elements occupy. Card elevation is expressed by the container.

The card container is the only required element of a card. All other elements are optional.

_footer: Card size is determined by the elements it contains_
_altText: 3 card containers with various elements: 1 with all elements except a button. 1 with a container, headline, supporting text, button. 1 with a container, headline, supporting text, 2 buttons._

### Content blocks

Card contents are grouped into blocks. Content can have different levels of visual emphasis depending on importance.

Card layouts vary to support the kinds of content they contain.

_footer: Cards can contain a headline, subhead, supporting text, media, and actions_
_altText: Diagram of card content blocks._

### Dividers

[Dividers](/m3/pages/divider/specs) can separate regions in cards or indicate areas of a card that can expand.

_footer: 1. Use full-width dividers for content that can be expanded_
_altText: A divider running the entire width of the card._

_footer: 1. Use inset dividers, which don’t run the full width of a card, to separate related content_
_altText: An inset divider indented from the edge of card._

### Media

**Thumbnail**
Cards can include thumbnails for an avatar or logo.

**Image**
Cards can include photos, illustrations, and other graphics, such as weather icons.

**Video**
Cards can include video.

_footer: Cards can contain thumbnails, images, and video_
_altText: A mobile chat app with: 5 cards with images, 1 card with a thumbnail avatar, and 1 card with a video._

### Text

**Headline**
Headline text often communicates the subject of the card, such as the name of a photo album or article.

**Subhead**
Subheads are smaller text elements, such as an article byline or a tagged location.

**Supporting text**
Supporting text includes body content, such as an article summary or a restaurant description.

_footer: Headline, subhead, and supporting text in a card_
_altText: card container with several elementsA tablet email app with an email summary card with multiple text elements._

#### Layering text, icons, and images

It isn’t recommended to place text or icons on images. If it’s necessary, ensure the background image provides sufficient contrast for the text to meet accessibility standards.

Add a translucent scrim or bounding shape beneath the text or icon to help ensure proper contrast.

_footer: Ensure that text on images meets accessible contrast standards_
_altText: Layered text contrasts with the background image._

_footer: When placing text or icons on images, consider using a bounding shape to ensure proper contrast_
_altText: Icon within a bounding shape, placed on an image._

### Actions

#### **Primary action area**

Cards can be one large touch target triggering an expanded detail screen.

_footer: Cards can include a primary action area that expands into a full-screen view_
_altText: The action area of a card contains rich media and supporting text._

**Buttons**
Cards can include buttons for actions such as **Learn more** or **Add to cart**.

**Icon buttons**
Cards can include icon buttons for actions such as **Save**, **Heart**, or **Leave a 4-star review**.

**Selection controls**
Cards can also include chips, sliders, checkboxes, and other selection controls.

**Linked text**
There can be a link in the supporting text on a card.

_footer: Cards can include multiple action areas containing buttons, links, and other controls_
_altText: Supplemental text and actions at the top and bottom of the card._

_footer: Cards can contain icon buttons like stars to rate content_
_altText: Album card with an option to give a star rating._

_footer: Cards can contain choice chips in the action area_
_altText: Card to purchase tickets with choice chips for 3 event times._

_footer: Cards can contain a slider control in the action area_
_altText: Card with slider to control a song’s volume._

Overflow menu
Overflow menus contain related actions. They are typically placed in the upper-right or lower-right corner of a card.

_footer: Overflow menus are usually located in the upper-right or lower-right corner of a card_
_altText: 2 cards: 1 with an overflow menu in the upper-right corner, the other with it in the lower right._

## Cards in a collection

Multiple cards can be grouped together into collections displayed in a grid, list, or carousel. 

By default, cards in a collection are coplanar. They share the same resting elevation unless they're picked up or dragged.

_footer: Multiple cards can be grouped into collections with a shared resting elevation_
_altText: 9 cards in a grid layout._

#### Filtering and sorting

Card collections can be filtered in a variety of ways, including by date or alphabetical order. If a collection can be filtered, the filter must apply to each card in the collection. 

Filter or sorting options should be placed outside of the card collection.

_footer: Card collections can be filtered in a variety of ways, including by date: 1. A sort-by-date option is placed outside of the card collection_
_altText: A sort-by-date option placed above a card collection._

Organize card collections so that they'e easy to use. Their layout affects how they are perceived.

_footer: Place cards in a collection in a straightforward, easy-to-use manner_
_altText: A template for an 8-card collection layout._

### Grid

Cards can be displayed together in a grid.

_footer: Cards displayed in a grid_
_altText: A set of 4 cards in a grid._

The default grid can be customized in code to show cards in staggered or mosaic grids.

_footer: Custom mosaic grid_
_altText: 5 menu item cards in a mosaic grid._

_footer: Custom staggered grid_
_altText: 4 menu item cards in a staggered grid._

### Vertical list

Cards can be displayed together in a vertical list.

_footer: Cards can be shown in a vertical list_
_altText: 3 cards in vertical list._

### Carousel

Cards can be displayed together in a horizontal row or carousel.

_footer: Cards displayed together in a horizontal row or carousel_
_altText: 3 event reservation cards in a horizontal row._

## Adaptive design

As cards scale to adapt to different [breakpoints](/m3/pages/breakpoints), their position and alignment can also change.

Cards and their elements can align left, right, or center as the layout scales.

_footer: Card position and alignment changes as the screen size changes_
_altText: 2 cards on a mobile screen row expand to 4 cards on a tablet screen row._

### Ergonomics

Adjust the layout of cards to meet the ergonomic needs of large screens. 

For example, a horizontally-oriented card in a compact breakpoint may become a larger, vertically-oriented card in an expanded breakpoint, with more space for images and text on the larger screen.

_footer: Adjust the card layout so content remains the main focus on large screens_
_altText: Card sizes change from mobile to tablet, with larger images in the tablet layout._

### Visual presentation

To adjust the presentation of content-focused components, begin with spacing. 

Allow components like lists, cards, and images to optimize space while filling the region of a screen that suits a device breakpoint’s ergonomic needs.

_footer: Spacing adjusts for components such as cards, lists, and images_
_altText: 2 cards with optimized space: 1 narrow rectangle, 1 wide square._

_footer: Example of the same card with two different orientations and element positioning_
_altText: 2 examples of the same card: 1 vertical with an image at the top, 1 horizontal with an image on the left._

### Column-based layouts

In mobile layouts, components such as lists or cards are stretched to fit the full width of the screen without compromising visual quality or user experience. When designing for large screens with an expanded breakpoint, use multiple columns to display content.

Avoid extending UI elements across the screen when possible. On larger screens, rearrange groups of related cards into horizontal rows or carousels, to allow for better content organization.

_footer: When designing for large screens, use multiple columns to display content_
_altText: 3 related cards in a carousel._

### Small screens

On smaller screens with the compact breakpoint, consider swapping cards for lists, which can display images and text in a more compact form. 

Make sure that controls, actions, and other component-specific elements are maintained.

_footer: Certain devices or user contexts require different components to meet platform expectations_
_altText: Cards on a large screen adapt to a list on a small mobile screen._

## Behavior

### Expanding

Cards can use a [container transform](/m3/pages/motion-transitions/transition-patterns#b67cba74-6240-4663-a423-d537b6d21187) transition pattern to reveal additional content. Reserve this pattern for hero moments that are meant to be expressive.

_footer: A card expands to fill the full screen using a parent-child transition_
_altText: An album card expands to fill the screen and shows additional related content._

_footer: Expand a card to reveal information_
_altText: A card expands, showing all content at once._

_footer: Don’t scroll within a card to reveal information_
_altText: A card expands, internally scrolling to only show some information._

### Navigation

Cards can use a [forward and backward](/m3/pages/motion-transitions/transition-patterns#df9c7d76-1454-47f3-ad1c-268a31f58bad) transition pattern to navigate between screens at consecutive levels of hierarchy. This pattern has a simpler motion style compared to container transform, which makes it suitable for common navigation transitions.

_footer: Cards can use a forward and backward transition pattern to navigate between screens_
_altText: Card interaction transitioning to full screen._

### Gestures

#### Swipe

A swipe gesture can be performed on a single card at a time, anywhere on that card.

It can be used to:

- Dismiss a card
- Change the state of a card, such as flagging or archiving it

_footer: A card should only have one swipe action assigned to it_
_altText: A card with 1 assigned swipe: to heart the entire card._

_footer: Cards shouldn’t contain content that can be swiped, such as an image carousel or pagination. Also, swipe gestures shouldn’t cause portions of cards to detach upon swiping._
_altText: A card with an image carousel and a swipe motion to heart only the bottom text on the card._

#### Pick up & move

The pick-up-and-move gesture allows users to move and reorder cards in a collection.

_footer: When moving a card, increase its elevation_
_altText: A card is elevated above all other cards when moved._

_footer: Don’t let cards bump other elements out of the way. When a card is picked up, it appears in front of all elements, except app bars and navigation._
_altText: A moved card bumps other cards around, and isn’t elevated above them._

#### Scrolling

Card content that’s taller than the maximum card height is truncated and doesn’t scroll, but can be displayed by expanding the height of a card.  

A card can expand beyond the maximum height of the screen, in which case the card scrolls within the screen.

_footer: On a mobile device, cards can expand to reveal more content, scrolling within the screen. Content within cards doesn’t scroll._
_altText: Scrolling a page with an expanded card._

_footer: On a mobile device, cards can't internally scroll, as it could cause two scroll bars to be displayed_
_altText: Expanded card on mobile with internal scrolling._

#### Scrolling on desktop

On a desktop device, card content can expand and scroll within a card.

_footer: On a desktop, content can expand and scroll within a card_
_altText: Expanded card on desktop with internal scrolling._

<!-- section: Accessibility -->

## Use cases

People should be able to do the following using assistive technology:

- Navigate to a card and the elements within a card
- Get appropriate feedback based on input type documented under [Interaction & style](/m3/pages/cards/accessibility#ce764d54-6b59-42db-807f-b3cb370eecdb)

## Interaction & style

A card can be a non-actionable container that holds actions like buttons and links, or it can be directly actionable without any buttons or links. This is to avoid stacking actionable elements. An action shouldn’t be placed on an actionable surface.

_footer: - Non-actionable card with buttons - Directly actionable card with no buttons_
_altText: 2 possible card interaction behaviors._

### Touch

When a user taps on a directly actionable card, a touch ripple appears across the card, indicating feedback. 

Non-actionable cards don’t ripple.

_footer: Touch: Tap_
_altText: Ripple effect created when tapping on a card._

### Dragging and dismissing

To meet Material's accessibility standards, any dragging and swiping interactions need a single-pointer alternative, like selecting the same actions from a menu.

For example, tapping a card, or pressing and holding, should open a menu to change its position in a list. That menu could also contain an action to delete the card.

_footer: Use containers like bottom sheets or menus to show single-pointer options_
_altText: A list of cards has its order reshuffled using a single-pointer option._

It isn’t recommended to place menus on top of the card on the draggable state. If doing so is necessary, ensure that the interaction can be completed.

_footer: Ensure that the menu doesn't cover the card_
_altText: A menu over a card that doesn't totally obscure the card._

### Cursor

When a directly actionable card is hovered, the hover state provides a visual cue to the person that the element is interactive. Non-actionable cards don’t have a hover state.

When a directly actionable card is clicked, a ripple appears, providing feedback.

_footer: Cursor: Hover, Click_
_altText: Hover state and touch ripple effect of a card._

### Keyboard

A focus indicator appears around actionable elements when tabbing through cards. This provides a visual cue to a person that the destination is now focused and an action can be taken.

A person can **Tab** to navigate between actionable elements of the cards. If the cards are non-actionable, **Tab** navigates directly to the actionable buttons or links within the cards.

When engaging with a focused actionable card or element using the **Space** or **Enter** key, an action is performed or a secondary action is available, such as a menu.

Within the menu, a person is able to **Arrow** through the menu items, **Space** or **Enter** to select an item, or **Tab** to exit.

_footer: Keyboard: Tab, Arrows_
_altText: Navigating cards with a keyboard._

## Focus

All interactive elements of cards need a tab stop so they can be focused. Directly actionable cards are tab stops.

For non-actionable cards, the card itself is not a tab stop. However, every actionable element in the card is a tab stop so they’re all visited before focus navigates to the next card.

_footer: Use **T****ab** to navigate through all buttons in a card_
_altText: The focus areas of a card with interactive elements._

_footer: Card layouts can change on different devices_
_altText: Cards forming a list on mobile and cards forming a gallery on tablet._

## Keyboard navigation

Keys | Actions |
**Tab** |
Move to the next actionable element

**Directly actionable cards:** Move to next card container

**Non-actionable cards with actionable elements:** Move to next actionable element
 |
**Space** or **Enter** | Confirm action |

## Labeling elements

The informative contents of a card are verbalized when navigating to them using a screen reader. If an image in a card is purely decorative, hide it from screen readers. All actionable elements must receive both screen reader and keyboard focus.

Directly actionable cards can have the **button** or **link** role, depending on how they’re used. 

Non-actionable cards are purely containers, so they don’t need a role.

_footer: Non-actionable card elements are navigable, focused in order, and verbalized when in focus. In this example, the order is:  - Heading - Image - Body text - Primary button - Secondary button_
_altText: Card elements annotated in the order that a screen reader tabs through them._
