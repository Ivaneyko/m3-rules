# App bars

slug: app-bars  |  updated: 2026-07-24T06:22:06.561Z

<!-- section: Overview -->

-
Focus on describing the current page and provide 1–2 essential actions

-
Displays labels and page navigation controls at the top of the page. (Use a toolbar to display page actions)

-
Four variants: Search app bar, small, medium flexible, large flexible

-
On scroll, apply a fill color to separate from body content

-
Can animate on and off screen with another bar of controls, like a row of chips

_footer: - Search app bar - Small - Medium flexible - Large flexible_
_altText: 4 configurations of app bars stacked vertically to show differences._

## Availability & resources

## M3 Expressive update

**May 2025**
The new **search app bar** supports icons inside and outside the search bar, and centered text. It opens the [search view](/m3/pages/search/overview) component when selected.

The new **medium flexible** and **large flexible** app bars come with significant improvements, and should replace **medium** and **large** app bars, which are no longer recommended. The **small** app bar is updated with the same flexible improvements. 

[More on M3 Expressive](https://m3.material.io/blog/building-with-m3-expressive)

Variants and naming:

-
Renamed component from **top app bar** to **app bar**

-
Added **search app bar**

-
**Medium** and **large** app bars are no longer recommended

-
Added **medium flexible** and **large flexible**app bars with:

Reduced overall height

-
Larger title text

-
Subtitle

-
Left- and center-aligned text options

-
Text wrapping

-
More flexible elements for imagery and filled buttons

-
Added features to **small**app bar:

Subtitle

-
Center-aligned text option

-
More flexible elements for imagery and filled buttons

_footer: - Search app bar - Small - Medium flexible - Large flexible_
_altText: 4 total app bar configurations._

## Differences from M2

- Color: New color mappings and compatibility with dynamic color
- On scroll: No drop shadow, instead a color fill creates separation from content
- Typography: Larger default text
- Layout: Smaller default height

_footer: M2: Elevation and a drop shadow raise the top app bar when content is present underneath_
_altText: M2 top app bar with elevation to separate it from main content._

_footer: M3: On scroll, a color fill overlay separates the app bar from the content beneath_
_altText: M3 app bar with subtle color difference from main content._

<!-- section: Specs -->

## Variants

_footer: - Search app bar - Small - Medium flexible - Large flexible_
_altText: 4 variants of app bars._

### Baseline variants

The baseline M3 **medium** and **large** app bars are no longer recommended in M3 Expressive, and should be replaced with **medium flexible** and **large flexible** app bars, which are similar visually, but have multi-line support, a shorter height, and can contain a wide variety of elements, like images. [Jump to baseline app bar specs](/m3/pages/app-bars/specs#faec9baf-140f-41dc-8b88-2792e90d9d5d)

_footer: Baseline variants  - Medium  - Large_
_altText: 2 baseline app bar variants, medium and large._

Variant
 |
M3
 |
M3 Expressive
 |

Search app bar
 |
--
 |
Available
 |

Small
 |
Available
 |
Available
 |

Center-aligned
 |
Available
 |
Merged into **small**. 
Use centered-text configuration.

 |

Medium (baseline)
 |
Available
 |
Not recommended.

Use **medium flexible**
 |

Medium flexible
 |
--
 |
Available
 |

Large (baseline)
 |
Available
 |
Not recommended.

Use **large flexible**
 |

Large flexible
 |
--
 |
Available
 |

## Configurations

### Text alignment

_footer: Text labels, including supporting text, can be aligned to the leading edge or centered_
_altText: 4 variants of app bars with different left and center aligned text headlines._

Category
 |
Configuration
 |
M3
 |
M3 Expressive
 |

Text alignment
 |
Leading edge (default)
 |
Available
 |
Available
 |

Centered
 |
--
 |
Available
 |

## Tokens & specs

Select a token set to view in the table's menu. App bar token sets are organized into a common token set, and size-specific tokens. [Learn about design tokens](/m3/pages/design-tokens/overview)

### Search component tokens & specs

The default search component tokens are used in the search app bar.

## Anatomy

_footer: - Container - Leading button - Trailing elements - Headline - Subtitle_
_altText: 5 elements of the component._

App bars can be customized to include:

- An image or logo
- A subtitle
- A filled icon button

Avoid customizing the size of the heading and subtitle, or adding too many actions.

_footer: The app bar can have different layouts depending on which elements are shown_
_altText: 3 app bars: 1 with a newspaper logo, 1 with a subtitle, and 1 with a filled icon button._

### Search

The search app bar can include trailing actions inside and outside the search bar. When the search bar is selected, it should open the search view component.

_footer: - Container - Leading icon button - Hinted search text - Trailing icon or avatar - Search container_
_altText: 5 elements of the search app bar._

_footer: - A leading element and a trailing element outside search - A leading element, a trailing element inside search, and a trailing element outside search - A leading element and two trailing elements outside search_
_altText: 3 layouts of icons in the search app bar._

### Image

An image can be placed in the app bar. In small app bars, this can replace the label text.

_footer: Images can be added to app bars and can replace label text on small app bars_
_altText: Graphic replacing text headline content._

### Filled trailing icon button

The app bar's trailing icon buttons can be replaced with a single, primary, or tonal filled icon button in default or wide sizes.

_footer: The trailing icons can be configured to be a single filled icon button_
_altText: App bars configured with filled trailing icons._

### Subtitle

_footer: The medium flexible and large flexible app bars hug the text contents, so they are taller when a subtitle is visible  - Small - Small with subtitle - Medium flexible - Medium flexible with subtitle - Large flexible - Large flexible with subtitle_
_altText: App bars configured with subtitles below their headlines._

## Color

Color values are implemented through design tokens. For design, this means working with color values that correspond with tokens. For implementation, a color value will be a token that references a value. [Learn more about design tokens](/m3/pages/design-tokens/overview)

All app bars share the same color roles. On scroll, the container changes color to **surface container**.

_footer: App bar color roles used for light and dark themes:  - Surface - On surface - On surface variant - On surface - On surface variant - Surface container (on scroll)_
_altText: 4 color roles of the leading edge app bar in light and dark scheme._

_footer: Search app bar color roles used for light and dark themes:  - Surface   - On surface variant  - On surface variant  - On surface variant  - Surface container  - Surface container  - Surface container highest_
_altText: 4 color roles of the center-aligned app bar in light and dark scheme._

### Scroll states

_footer: The app bar changes color when flat or on scroll. The search bar can also change color on scroll.  - Flat - On scroll_
_altText: Color roles for app bars when flat and on scroll._

## Measurements

### Search app bar

_footer: Search app bar padding and size measurements_
_altText: Search app bar size and padding measurements._

### Small app bar

_footer: Small app bar padding and size measurements_
_altText: Small app bar size and padding measurements._

### Medium flexible app bar

_footer: Medium flexible app bar padding and size measurements_
_altText: Medium flexible app bar padding and size measurements._

### Large flexible app bar

_footer: Large flexible app bar padding and size measurements_

## Baseline app bars

The **medium** and **large** app bars are no longer recommended in M3 Expressive. Use the **medium flexible** and **large flexible** app bars in their place.

_footer: Medium and large app bars have the same elements:  - Container - Leading button - Trailing icons - Headline_
_altText: 4 elements of medium and large app bars._

### Tokens & specs

Select a token set to view in the table's menu. Baseline app bar token sets are organized into medium, large, and older baseline token sets. [Learn about design tokens](/m3/pages/design-tokens/overview)

### Color

Color values are implemented through design tokens. For designers, this means working with color values that correspond with tokens. In implementation, a color value will be a token that references a value. [Learn more about design tokens](/m3/pages/design-tokens/overview)

_footer: Medium top app bar color roles used for light and dark schemes:  - Surface - On surface - On surface - On surface variant_
_altText: 4 color roles of the medium top app bar in light and dark scheme._

### Measurements

#### Medium app bar

_footer: Medium app bar padding and size measurements_
_altText: Diagram of medium app bar padding and size measurements._

#### Large app bar

_footer: Large app bar padding and size measurements_
_altText: Diagram of large app bar padding and size measurements._

<!-- section: Guidelines -->

_footer: App bars show information about the page, key actions, and navigation actions like **Back** or **Menu**_
_altText: 4 app bars with headlines and action icons._

## Usage

Use an app bar to provide content and actions related to the current page, such as page navigation actions, headlines, images, and 1–2 essential actions.

The information and actions in the app bar should be contextual and specific to a page, but can also include global product controls, such as search or notifications.

_footer: App bars provide content and actions related to the current page_
_altText: App bar with navigation icon buttons and a 2-line title._

App bars should only have one action, two if necessary. 

The primary action should alter or exit the entire page, like **Send**, **Save**, or **Edit**.

If the product has many actions, place those in a toolbar. Avoid placing an overflow menu in the app bar when possible.

_footer: App bars can display one high visibility action to boost its prominence_
_altText: App bar with content below._

To boost visibility of a primary action, change the style of the icon button to filled or tonal, and consider using a wide icon button.  

Avoid using multiple filled or tonal buttons.

_footer: Use a filled or tonal button for important actions_
_altText: App bar with 1 filled button._

_footer: Don’t put multiple filled or tonal buttons in the app bar_
_altText: App bar with 2 filled buttons, side by side._

The four variants of app bars are:

-
**Search app bar** Use on home pages when search is key to the product. 

-
**Small** Use in dense layouts or when a page is scrolled.

-
**Medium flexible** Use to display a larger headline. It can collapse into a small app bar on scroll.

-
**Large flexible** Use to emphasize the headline of the page.

_footer: - Search app bar - Small - Medium flexible - Large flexible_
_altText: The 4 app bar variants._

### Baseline app bars

There are two baseline app bars that are no longer recommended:

-
**Medium** Replace with medium flexible.

-
**Large** Replace with large flexible.

_footer: - Medium - Large_
_altText: 2 baseline app bars._

## Search app bar

Use a search app bar to provide an emphasized entry-point to open the search view.

_footer: Search app bars have a search field instead of heading text_
_altText: A search bar within an app bar._

Search bars should always include the word **Search**. They can use various capitalization styles depending on the product.

-
**Search**

-
Searching a specific area Example: **Search inbox**

-
Search [Product]  Example: **Search Photos**

_footer: Use proper capitalization depending on what’s being searched_
_altText: 3 examples of search text in an app bar._

### Buttons in search app bar

In addition to a trailing avatar, search app bars can have up to two trailing icons on mobile. 

Trailing icons can be placed inside or outside the search bar.

_footer: Put the most used actions on the left and least used on the right_
_altText: 2 icons placed in the search bar._

The leading element of a search app bar can be used for a product’s logo to brand the app’s overall experience. 

This logo can be purely cosmetic, or can trigger an action like returning to the home screen or refreshing it. 

Avoid using a logo to open an expanded navigation rail.

_footer: The leading element can be a product logo_
_altText: A search app bar with a logo, search bar, and avatar._

Don’t use more than two trailing icon buttons with an avatar. 

If more actions are needed, place them in a toolbar instead.

_footer: Don’t use three icons and an avatar in a search app bar_
_altText: 3 icons placed in a search app bar._

### Large screens

The search app bar dynamically adapts to available width. There should be up to four trailing icons on larger screens.

_footer: Increased horizontal space on larger screens allows for up to four trailing icons._
_altText: 4 actions placed in a search app bar on a large screen._

### Alternate color options

By default, search containers in app bars use the **surface container** color to distinguish it from the app background. If the background is darker, use a lighter container color on the search bar, like **surface bright**.

When choosing alternate colors, make sure the search text and container have at least 3:1 contrast for readability.

_footer: Search app bars can use different colors, like **surface bright**, for improved contrast with surrounding elements_
_altText: App bar with a light search container color._

## Anatomy

_footer: - Container - Headline - Trailing icons - Subtitle - Leading button_
_altText: Diagram of app bar layout._

### Container

The app bar container holds all information and actions at the top of a screen, including navigation icons, headlines, and buttons. 

Avoid changing the position or shape of the container.

_footer: Use straight corners for app bars_
_altText: App bar with square corners._

_footer: Don’t use curved shapes. This implies that the container can expand upon interaction._
_altText: App bar with curved corners._

Always use the default height of the app bar, and make it span the full width of the window.

_footer: Default heights were chosen to ensure readability of on-screen elements_
_altText: App bar at default height._

_footer: Don't make an app bar shorter than its default height_
_altText: App bar with reduced height._

### Adding logos

Image logos can be used in app bars to bolster brand identity or visual appeal. 

The image should be high quality and pertinent, and shouldn’t disrupt the app bar's functionality.

_footer: Image logos can replace all text in small app bars, and appear above the text in other app bars_
_altText: A logo added to an app bar._

### Leading button

The leading button should be used for navigating the product. 

It typically is one of the following:

-
A menu icon, which opens a modal expanded navigation rail

-
A back arrow, which returns to the previous screen

_footer: - Leading **Back** button_
_altText: Leading navigation icon aligned on left of app bar_

### Headline

The headline can describe:

- The current page
- The current section
- The product

Headline text should be brief enough to easily fit in the app bar. 

In medium flexible and large flexible app bars, the headline can wrap to a second line. 

Don’t truncate the headline text.

_footer: If headline text is long, use a medium flexible or large flexible app bar and wrap the headline to two lines maximum_
_altText: App bar headline text set in 2 lines._

_footer: Don’t wrap text in a small app bar_
_altText: Small app bar headline text wrapped on 2 lines._

Headlines can be aligned to the leading edge or centered.

The headline’s typography size and style change depending on the app bar variant.

_footer: Headline typography style for each app bar  - Search: Body large - Small: Title large - Medium flexible: Headline medium - Large flexible: Display small_
_altText: Search, small, medium and large flexible app bars with headline styles._

### Subtitle

Subtitles can add additional context to a page. 

These can be leading-aligned or center-aligned with the headline text.

_footer: Subtitle typography style for each app bar:  - Small: Label medium - Medium flexible: Label large - Large flexible: Title medium_
_altText: Small to large flexible app bars with headline and subtitle styles._

### Trailing icon buttons

Up to two icon buttons can be placed after the headline, aligned to the trailing edge of the app bar. Place most-used actions closest to the leading edge.

Avoid using these buttons to open a menu with more actions. If more actions are needed, place them in a toolbar instead.

If changing the icon button color style to filled or tonal, only use one icon button.

_footer: Put the most used actions on the left and least used on the right_
_altText: 2 icons placed to right of headline, from most to least used._

Use filled icons when possible for the best visibility. Outlined icons can also be used, particularly for unselected toggle buttons.

_footer: Use filled icons for clear, visible actions_
_altText: App bar with 2 filled icons, “save” and “download.”_

_footer: Outlined icons can be used as needed, or when using toggle buttons_
_altText: App bar with 2 outlined icons, “save” and “download.”_

## Adaptive design

Adaptive design allows an interface to respond or change based on context, such as the user, device, and usage. [More on adaptive design](/m3/pages/layout-overview/adaptive-design)

### Resizing

The width of the app bar container responds to the view or device width. 

It should always span 100% of the window width.

_footer: The app bar’s container responds to always fill the window width_
_altText: App bar resizing to wider view._

Resizing may cause actions at the trailing edge of the app bar to collapse into an overflow menu at smaller breakpoints. 

These actions become visible again at larger sizes.

_footer: Actions at the trailing edge collapse into an overflow menu_
_altText: Trailing icons in app bar collapse into overflow when screen size shrinks._

The search container of the search app bar should fill 100% of the space between leading and trailing app bar elements until it reaches 312dp. Then, it should only grow further to fill 50% of that space.

_footer: The search field adapts to the amount of space between other elements in the app bar_
_altText: Search app bar resizing to wider view._

### Presentation

The app bar automatically supports right-to-left (RTL) languages by aligning the layout of elements to the leading and trailing edges of the container. 

This means that in RTL languages, the layout of the app bar is mirrored.

_footer: The app bar’s layout is mirrored for right-to-left (RTL) languages_
_altText: App bar in RTL with Hebrew text._

## Behavior

### Scrolling

App bars should initially be the same color as the background, then fill with a contrasting color on scroll to provide visual separation from the background.

The app bar can remain on a page at all times, or can hide and reappear when scrolling.

_footer: Upon scrolling, an app bar container fills with contrasting color to create a visual separation_
_altText: Scrolling app bar container fills with contrasting color._

To focus more on body content, consider setting the app bar container to be transparent on scroll. This allows the buttons to float above the content. 

Make sure icon buttons have a container fill. 

Consider using narrow-width icon buttons for actions, like **Back**, to reduce the amount of space they take up.

_footer: Upon scrolling, an app bar container remains transparent and actions inside become filled icon buttons_
_altText: Medium flexible app bar compresses to transform into transparent small app bar._

Selecting the search bar should open the search view component.

_footer: When selected, a search app bar opens a search view_
_altText: A search app bar opening the search view component when selected._

When scrolled, **medium flexible** and **large flexible** app bars can transform into **small** app bars. They should remain small until the page is scrolled back to the top. Don’t transform app bars into a **search app bar**.

_footer: The app bar can hide when scrolling up and reveal when scrolling down_
_altText: Scrolling top app bar compressing to scroll upwards or downward._

_footer: Medium and large flexible app bars can use the compress effect to transform into small app bars when scrolled_
_altText: Medium app bar compresses to transform into Compact top app bar._

starNote:This is a rapidly changing space. Guidelines are primarily intended for designers at this time. Find what’s implemented in code in the [design kit](https://www.figma.com/community/file/1035203688168086460).

Extended reality (XR) interfaces have special design requirements, like showing apps in 3D space. Material has an XR-specific app bar with custom specs and guidance. See [XR developer documentation](https://developer.android.com/design/ui/xr/guides/foundations) for more details.

## Types & configurations

There is one app bar orbiter. It closely aligns with the small app bar. It can be configured to be center-aligned or left-aligned.

_footer: - Center-aligned app bar - Left-aligned app bar_
_altText: Center and left-aligned app bar orbiters._

## Anatomy

_footer: - Container - Headline - Trailing icons - Leading icon_
_altText: Diagrams of app bar orbiters identifying 4 internal elements._

## Color & elevation

XR uses color to communicate the elevation of UI elements and orbiters. With [spatial elevation](https://developer.android.com/design/ui/xr/guides/spatial-ui#spatial-elevation), the app bar displays above the spatial panel on the Z-axis. Elevated app bars can use any of these color options:

_footer: - Surface container - Surface container high - Surface container highest_
_altText: 3 versions of app bar elevation color strategy._

## Measurements

_footer: Measurements and padding for app bar orbiters_
_altText: Diagrams with measurements and padding for app bar orbiters._

## Usage

An app bar can appear in an orbiter for a more immersive experience. Currently, this spatial capability is only available in full space. In home space, use a regular app bar on the same plane as the body content to mimic a 2D experience.

_footer: An app bar’s behavior and placement changes from a 2D to a 3D experience_
_altText: Animation showing an app bar changing from 2D to 3D._

## Behavior

### Global context

When placed in global context, the orbiter is centered at the top of the app it controls. 

It stays anchored to the app during layout or content changes. 

This ensures navigation elements are always easy to find and use.

_footer: Global app bar orbiters should be centered and anchored to the top of the app_
_altText: An app bar orbiter placed in global context._

### Local context

When placed in local context, the orbiter is centered at the top of the spatial panel it controls. 

It repositions in response to layout or content changes.

_footer: Local app bar orbiters should be centered and anchored to the top of the panel. However, this is less common, so make sure that it contains actions that only affect its anchored panel._
_altText: An app bar orbiter placed in local context._

### Additional app bars

In most cases, apps should only have one app bar orbiter, placed in global context.

_footer: Limit the use of multiple app bars to rare cases when additional spatialization improves usability_
_altText: An app switches between 1 and 2 app bar orbiters._

## Placement

### Offset and inset positioning

_footer: Include a 20dp margin. This visually separates the app bar orbiter from the spatial panel, and prevents content obstruction._
_altText: App bar orbiter with offset positioning._

_footer: Don’t overlap the app bar orbiter and spatial panel_
_altText: App bar orbiter with inset positioning._

### Horizontal alignment

_footer: Always align the app bar orbiter within the bounds of nearby spatial panels_
_altText: An app bar orbiter placed within the bounds of its spatial panel._

_footer: The app bar orbiter shouldn’t exceed the width of adjacent spatial panels_
_altText: An app bar orbiter that extends beyond the width of its spatial panel._

### Spatial panel alignment

By default, app bar orbiters are center-aligned to the spatial panel. Their width and placement can be adjusted to accommodate specific user needs, such as improved ergonomics or right-to-left (RTL) languages.

_footer: App bar orbiters can align to the center, left, or right of the spatial panel_
_altText: App bar orbiter alignment options in relation to spatial panels: left, center, and right-aligned._

### Width boundaries

An app bar orbiter’s width should adjust to stay in a person’s [field of view](https://developer.android.com/design/ui/xr/guides/spatial-ui#where-place). 

This makes crucial navigation elements easy to find.

_footer: Adjust the width of the app bar orbiter to fit in a person’s field of view_
_altText: An app bar orbiter with a width that fits in a person’s field of view._

It’s not recommended to increase the width of an app bar orbiter beyond a person’s natural [field of view](https://developer.android.com/design/ui/xr/guides/spatial-ui#where-place). 

This creates a visual imbalance and makes it difficult to find navigation elements.

_footer: Avoid expanding the app bar orbiter beyond the adjacent panel’s width and a person’s field of view_
_altText: An app bar orbiter that exceeds the panel’s width and a person’s field of view._

### Adaptable width

When placed in a local context, an app bar orbiter can expand to the width of its adjacent spatial panel.   

Be sure the orbiter stays in a person’s field of view, and test for usability.

_footer: Use caution before expanding the app bar’s width to match its spatial panel. The orbiter may not fit in a person’s primary field of view._
_altText: 2 app bar orbiters with the same width as their adjacent spatial panels._

## Accessibility considerations

[XR accessibility](https://developer.android.com/design/ui/xr/guides/get-started#make-app) guidelines are still evolving. XR app bars should follow applicable Material [app bar accessibility standards](/m3/pages/app-bars/accessibility).

<!-- section: Accessibility -->

## Use cases

People should be able to do the following using assistive technology:

- Understand what page they’re currently visiting
- Take actions or navigate to a new page destination
- Maintain access to app bar actions when the content is scrolled

## Interaction & style

### Touch

When tapping on an icon button, a touch ripple appears, indicating interaction feedback.

_footer: Touch: Tap_
_altText: An animation of the user tapping on an action item and the ripple effect being shown._

### Cursor

When hovered, the hover state provides a visual cue to the user that the element is interactive.

When clicked (in both active and inactive states), a ripple appears to indicate feedback.

_footer: Cursor: Hover, Click_
_altText: A mouse hovering over a button in the app bar, then clicking._

### Keyboard or switch

When navigating to an interactive element, a focus indicator appears to show that action can be taken.

When the element is selected, an action is then performed.

_footer: Interactive elements should have focus rings_
_altText: An example of how to navigate the app bar using a keyboard._

### Initial focus

Focus should initially land on the leading button, since it’s the first interactive element of the app bar.

_footer: Use **Tabs** to navigate through interactive items_
_altText: The tab button is used to navigate from the first button to the second button in the app bar._

_footer: Use **Space** or **Enter** to activate actions_
_altText: The space or enter button activates the second action._

## Color

On search app bars, use the default color roles when possible.

- Search container: **surface container**
- Search label: **on surface variant**

On darker backgrounds, search bar containers can use the **surface bright** role to maintain strong visual contrast. 

If mapping to other color roles, make sure the text and container have 3:1 contrast to ensure readability.

_footer: Make sure search bars and their labels have at least 3:1 contrast. Use the default colors when possible._
_altText: A search app bar with default dark text on a light container background._

_footer: Avoid using custom color roles for the search bar container and search label text. If custom roles are necessary, make sure they have contrast of at least 3:1._
_altText: A search app bar with custom light text on a light container background._

## Keyboard navigation
Keys | Actions |
Tab | Move focus to the next interactive element |
Space or Enter | Activate the focused element |

## Labeling elements

The accessibility label for a title should be the same as the content within the title. If needed, add additional context to the accessibility label to ensure users understand what page they’re on or what content is being shown.

Screen readers will read the UI text followed by the component’s role.

_footer: An app bar’s accessibility label can incorporate its UI text as well as additional context_
_altText: The headline has accessibility role “Title”._

Label icon buttons according to their [accessibility guidelines](/m3/pages/icon-buttons/accessibility).

_footer: An icon button should be clearly labeled on the action it takes, like **View on map**_
_altText: The app bar icon button has the accessibility role “Button”._
