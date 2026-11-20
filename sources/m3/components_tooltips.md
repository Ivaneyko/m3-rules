# Tooltips

slug: tooltips  |  updated: 2026-07-17T07:03:02.412Z

<!-- section: Overview -->

-
Use tooltips to add additional context to a button or other UI element

-
Two variants: plain and rich

-
Use plain tooltips to describe elements or actions of icon buttons

-
Use rich tooltips to provide more details, like describing the value of a feature

-
Rich tooltips can include an optional title, link, and buttons

_footer: - Plain tooltip - Rich tooltip_
_altText: 2 variants of tooltips._

## Availability & resources

## Differences from M2

-
**Color**: New color mappings and compatibility with dynamic color

-
**Shape**: Rich tooltips have more rounded corners

_footer: M2: Rich tooltips have slightly rounded corners_
_altText: GM2 rich tooltip._

_footer: M3: Rich tooltips have more rounded corners and support dynamic color_
_altText: GM3 rich tooltip._

<!-- section: Specs -->

## Tokens & specs

Select a component variant below to see its attributes, tokens, and values.

## Plain tooltip

_footer: - Supporting text - Container_
_altText: 2 elements of a plain tooltip._

### Plain tooltip colors

Color values are implemented through design tokens. For design, this means working with color values that correspond with tokens. For implementation, a color value will be a token that references a value. [Learn more about design tokens](/m3/pages/design-tokens/overview)

_footer: Plain tooltip color roles used for light and dark themes:  - Inverse on surface - Inverse surface_
_altText: 2 color roles of a plain tooltip._

### Plain tooltip measurements

_footer: Plain tooltip padding and size measurements_
_altText: Measurements of a plain tooltip._

Attribute
 |
Value
 |

Container height
 |
24dp
 |

Padding
 |
8dp
 |

## Rich tooltip

_footer: - Subhead - Container - Supporting text - Text button_
_altText: 4 elements of a rich tooltip._

### Rich tooltip colors

Color values are implemented through design tokens. For design, this means working with color values that correspond with tokens. For implementation, a color value will be a token that references a value. [Learn more about design tokens](/m3/pages/design-tokens/overview)

_footer: Rich tooltip color roles used for light and dark themes:  - On surface variant - Surface container - On surface variant - Primary_
_altText: 4 color roles of a rich tooltip._

### Rich tooltip measurements

_footer: Rich tooltip padding and size measurements_
_altText: Measurements of a rich tooltip._

Attribute | Value |
Top padding | 12dp |
Bottom padding | 8dp |
Left and right padding | 16dp |

### Rich tooltip configurations

Rich tooltips can have a headline, body, and up to two buttons. The headline and number of buttons can be configured.

_footer: - Subhead, supporting text, and two buttons - Subhead, supporting text, and one button - Subhead and supporting text - Supporting text and one button - Supporting text and two buttons_
_altText: 5 common configurations of a rich tooltip._

<!-- section: Guidelines -->

_footer: Plain and rich tooltips serve different purposes_
_altText: A plain tooltip labeling a button, and a rich tooltip announcing new settings available._

## Usage

A tooltip provides additional context for a UI element. 

**Plain tooltips**
Plain tooltips briefly describe a UI element. They're best used for labelling UI elements with no text, like icon-only buttons and fields.

**Rich tooltips**
Rich tooltips provide additional context about a UI element. They can optionally contain a subhead, buttons, and hyperlinks.

Rich tooltips are best used for longer text like definitions or explanations.

_footer: - Plain tooltip - Rich tooltip_
_altText: 2 variants of tooltips._

_footer: Use plain tooltips to label icon-only buttons_
_altText: Plain tooltip labeling an icon-only button in Google Meet as "Present now"._

_footer: Plain tooltips aren't needed when the UI element already has label text_
_altText: Button with an icon and label text saying "Edit". It has a plain tooltip on hover that also says "Edit"._

_footer: Use rich tooltips to provide extra information and actions about a UI element or new feature_
_altText: Rich tooltip describing a new button for adding people. It has a subhead, description, and a button to learn more._

_footer: Don't hide critical information within tooltips as it’s easy to miss. Use an interruptive dialog instead._
_altText: Rich tooltip explaining that an action is destructive and permanently deletes files._

## Anatomy

### Plain tooltip

_footer: - Container - Supporting text_
_altText: 2 elements of a plain tooltip._

### Supporting text

_footer: Briefly describe a UI element_
_altText: Plain tooltip for an icon-only button shaped like a gear. The tooltip text is "Settings"._

_footer: Avoid wrapping text to multiple lines or including many pieces of information_
_altText: Plain tooltip for the account switcher. The supporting text includes the user's name and email address on new lines._

### Rich tooltip

_footer: - Subhead (optional) - Container - Supporting text - Text button (optional)_
_altText: 4 elements of a rich tooltip._

### Subhead (optional)

Keep subheads brief, ideally to one line. They should summarize or describe the message of the rich tooltip.

Subheads are important to include when the rich tooltip appears automatically, like when the page loads.

_footer: Summarize the message in a few words_
_altText: Rich tooltip with a brief subhead, supporting text, and a text button._

_footer: Avoid wrapping to more than one line_
_altText: Rich tooltip with a subhead wrapping to multiple lines._

### Text buttons (optional)

Rich tooltips can have up to two text buttons. These should be brief and relevant to the message in the supporting text.

Keep buttons short so they can be side by side. Avoid stacking them when possible.

_footer: Avoid stacking buttons_
_altText: Rich tooltip with 2 buttons stacked on each other._

## Placement

### Plain tooltips

By default, plain tooltips are positioned directly above the parent element. 

- If there's a visual boundary, like a button, the distance is 4dp
- If there's no visual boundary, like with text baselines, the distance is 8dp

If the element is in an app bar, the plain tooltip appears below the element at the same distance.

_footer: Plain tooltip with a 4dp distance between the target and tooltip_
_altText: Plain tooltip appearing 4dp below a button with a clear visual boundary._

### Rich tooltips

By default, rich tooltips are positioned to the bottom right of the parent element. They adjust position to avoid going off screen.  Tooltips shouldn't cover the parent element. 

**Dynamic positioning**
The position of the tooltip adjusts in increments of 8dp to avoid going off-screen.

**Desktop placement**
On desktop, tooltips may appear centered below the parent element and remain visible while moving within the target region.

_footer: Four different rich tooltip locations based on dynamic positioning_
_altText: A rich tooltip in 4 different corners. It   changes position to remain fully on screen._

## Behavior

To show a tooltip, hover on the parent element on desktop, or tap and hold the element on mobile. Persistent rich tooltips only appear when clicked or tapped.

### Transient by default

Both plain and rich tooltips disappear 1.5 seconds after navigating away from the target region.

Triggering a new tooltip immediately closes any other open tooltip.

_footer: Tooltips disappear after a 1.5 second delay when no other element is hovered_
_altText: Hovering and moving from a button with a plain tooltip._

_footer: Only display one tooltip at a time_
_altText: 2 buttons both showing plain tooltips at once._

### Persistent rich tooltips

Persistent rich tooltips appear when either:

- The parent element is clicked
- The page loads and a new feature is being explained

Persistent rich tooltips remain active even when leaving the target region. They only disappear once a person interacts with another UI element. Hovering doesn't trigger the tooltip.

When appearing on page load, the tooltip can introduce and explain new features on various parent elements.

Avoid using persistent rich tooltips on icon buttons.

_footer: Don’t use a persistent rich tooltip on icon buttons_
_altText: Persistent rich tooltip about a new sharing feature in the Photos app. The button says  "Learn more.”_

<!-- section: Accessibility -->

## Use cases

People should be able to do the following using assistive technology:

- Receive a tooltip message
- Activate a tooltip with a keyboard or switch input

## Interaction & style

Plain and rich tooltips without required actions should remain on screen long enough for people to receive the information without disrupting their existing flow or task.

_footer: Plain tooltips should remain on the screen temporarily after the cursor moves away_
_altText: A cursor hovers over an icon that identifies it as a star, which remains after moving away._

Tooltips can appear when an actionable element, like a button or navigation rail, is hovered or focused. However, this tooltip shouldn’t hide crucial information.

Rich tooltips can also appear by selecting an element instead of hovering or focusing on it.

_footer: Tooltips can appear on hover or focus to explain actions_
_altText: A cursor hovers over a favorite button producing text about finding this item later in favorites._

_footer: Rich tooltips can appear when an element is selected_
_altText: An information button in a selected state produces text about finding this item later in favorites._

## Focus order

Tooltip containers should not block important information or prevent a person from completing an action. 

Focus order within the rich tooltip moves top to bottom between interactive elements. 

Avoid trapping screen reader and keyboard focus on rich tooltips.

People should be able to move linearly through the rest of the page.

_footer: - Parent element - Inline link - Text button_
_altText: Different elements of a rich tooltip are given a focus order, moving from parent element to inline link to text button._

## Keyboard navigation

**Keys**
 |
**Actions**
 |

**Tab**
 |
Focus lands on button, if available
 |

**Space** or **Enter**
 |
Activates the focused element
 |

## Labeling elements

Tooltips should have the **Tooltip** role, or similar. 

Label all elements in the tooltip according to their own accessibility guidance.

_footer: The tooltip container should have the **Tooltip** role_
_altText: A rich and plain tooltip with all elements matched to accessibility labels._
