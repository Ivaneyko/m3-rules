# Color system

> Create accessible, personal color schemes communicating your product's hierarchy, state, and brand

slug: color  |  updated: 2026-07-23T20:32:56.894Z

<!-- section: Overview -->

**The Material color system includes:**

- Built-in set of accessible color relationships
- 26+ color roles mapped to Material Components
- Built-in dark theme colors
- Static baseline color scheme with default colors assigned to each color role
- Dynamic color features including user-generated and content-based color

[Learn how the system works](/m3/pages/color/how-the-system-works)

_footer: Learn about the value and function of Material 3’s dynamic color system and how it differs from past color systems_
_altText: Introduction to color guidance_

View transcript

_footer: The baseline color scheme doesn't dynamically change_
_altText: Primary, on primary, primary container, and on primary container roles shown in baseline light theme color scheme._

_footer: A dynamic color scheme changes the UI's colors based on different inputs, like a wallpaper_
_altText: Diagram showing an input color resulting in a simplified illustration of four roles of a color scheme. Shown in green and yellow in light theme._

_footer: Specific colors, such as semantic colors, can be set to not dynamically change_
_altText: Diagram showing an orange input color generating a static orange color scheme for an auto heating UI element._

Products with dynamic color can automatically generate and assign colors to each element in the UI.

This provides:

- Personalized UI
- Accessible contrast
- User-controlled contrast
- Automatic dark theme

_footer: The UI colors change dynamically_
_altText: Screen of an email app changing color from red to green to yellow_

## Resources

Type
 |
Link
 |
Status
 |

Design
 |
[Design Kit](https://www.figma.com/community/file/1035203688168086460) (Figma)
 |
Available
 |

Implementation
 |
[Android Views (MDC-Android)](https://github.com/material-components/material-components-android/blob/master/docs/theming/Color.md)
 |
Available
 |

[Jetpack Compose](https://developer.android.com/develop/ui/compose/designsystems/material3#dynamic_color_schemes)
 |
Available
 |

[Flutter](https://pub.dev/packages/dynamic_color)
 |
Available
 |

Tools
 |
[Material Theme Builder](https://www.figma.com/community/plugin/1034969338659738588/material-theme-builder)
 |
Available
 |

## What's new

May 2025

### Three levels of contrast

Color roles support three levels of contrast so people can select the one that best suits their vision needs. Contrasts also are tokenized.

_footer: Standard contrast_
_altText: Email app in standard contrast._

_footer: Medium contrast_
_altText: Email app in medium contrast._

_footer: High contrast_
_altText: Email app in high contrast._

August 2024

### More colorful text and icons

The following color roles are updated in light theme to be more colorful while still having accessible color contrast:

- On primary container
- On secondary container
- On tertiary container
- On error container 

Affected components:

- Badges
- Buttons
Buttons
- Extended FAB
- FAB
- Icon buttons
- Segmented buttons

- Chips
- Lists
- Menus
- Navigation bar
- Navigation drawer 
- Navigation rail 
- Switches
- Toolbars

_footer: Colors used for text and icons now appear more colorful_
_altText: Comparison of the color before and after the update, with FAB and button examples._

Oct 2023

### Reorganized guidelines

Same color system, explained in a new way. Updated sections include:

- [How the system works](/m3/pages/color/how-the-system-works)
- [Advanced customizations](/m3/pages/advanced/overview)
- [Color resources](/m3/pages/color-resources)

_footer: The guidelines have been reorganized and updated_
_altText: Diagram illustrating guidelines being reorganized_

Feb 2023

### Tone-based surface colors

[Tone-based surface color roles](https://material.io/blog/tone-based-surface-color-m3) have replaced the previous approach of surfaces at +1 to +5 elevation.  The new color roles are not tied to elevation and offer more flexibility and support for color features, such as user-controlled contrast.

_footer: New tone-based surface colors offer more flexibility and support_
_altText: Simplified tablet UI showcasing the application of surface roles, shown in light theme_

Technical changes were made to align the color system with Android SysUI:

- Updated the default light theme surface from tone 99 to tone 98
- Updated the chroma for the neutral palette, increasing it from 4 to 6
- Slightly darkened surface roles in dark theme

_footer: Changes in tone and chroma in the default light theme surface_
_altText: Before and after swatch of the default light theme surface, showcasing the difference in chroma and tone_

Feb 2023

### Additional accent colors

Additional accent colors in the scheme provide more flexibility and choice for color application. In particular, a new set of fixed colors for the **primary**, **secondary**, and **tertiary** accent groups provide colors which stay the same across light and dark themes.

_footer: Additional accent colors provide more choice for color application_
_altText: Fab and star icon show in fixed and fixed dim roles, in both light and dark theme_

<!-- section: How the system works -->

## It's like paint-by-number

Imagine your product screen as a paint-by-number canvas:

- Each element on the screen has a number
- Each number is assigned a color

_footer: Each part of a UI is assigned a "number," and each "number" is assigned a color_
_altText: UI in "x-ray" view where each element has a number instead of a color_

You can hand-pick a color for every "number" to create a static color scheme.

_footer: Static colors are hand-picked, like this green icon button_
_altText: Green icon button in the UI, assigned a hand-picked color using a color picker_

But now, you can also use Material's dynamic color system to automatically generate an entire palette of accessible colors for each "number" from a single source.

This source can be a user's wallpaper, or in-app content like imagery. If the source changes, the product colors update to match.

_footer: Colors are generated dynamically from a user's wallpaper or in-app content_
_altText: Image showcasing how a source color is automatically applied to each "number"_

You can customize how dynamic color appears in your product by:

- Setting the color source
- Adding static or harmonized colors
- Changing which "numbers" are assigned to which elements

[Learn about advanced customizations](/m3/pages/advanced/define-new-colors)

_footer: The color source can be changed, automatically changing the color scheme. The UI elements can have other "numbers" assigned to them._
_altText: Image showing a color wheel where a light red color is picked, which then populates the UI. In this example, some UI elements have been mapped to different "numbers"_

## Essential terms

### Color role

Like the "numbers" on a paint-by-number canvas, color roles are assigned to specific UI elements. They have semantic names like **primary**, **on primary**, and **primary container,** and matching color tokens. [See all color roles](/m3/pages/color-roles)

### Dynamic color

Dynamic color takes a single color from a user's wallpaper or in-app content and creates an accessible color scheme assigned to elements in the UI. If the user's wallpaper or the in-app content changes, the colors in the UI will change to match.

### Static color

UI colors that don't change based on the user's wallpaper or in-app content. Static colors can be hand-picked or generated in design tools like the Material Theme Builder. Once assigned to their respective color roles and UX elements, the colors remain constant.

#### **Baseline static color**

The default static color scheme for Material products. [See the baseline color scheme](/m3/pages/static/)

_footer: The dynamic color process is automatic. A single source color is used to generate five key colors, which are used to make tonal palettes. Tones from the palettes are then assigned to color roles, which are in turn assigned to elements of the UI._
_altText: Diagram illustrating the steps from source color to key colors to tonal palettes to color roles to the UI_

_footer: The system generates dynamic color schemes using colors from images like wallpapers and in-app content_
_altText: How dynamic color schemes are created._

## How dynamic color generates color schemes

### 1. It starts with a source color

There are three ways to get a source color.

#### **A. Generate it from a wallpaper**

User-generated color is sourced from a user's personal wallpaper. The wallpaper is digitally analyzed through a process called quantization, and a single color is selected as the source color.

_footer: Source color from a user's wallpaper_
_altText: Red source color is extracted from a wallpaper_

#### **B. Generate it from in-app content**

Content-based color is sources from in-app content, like an album thumbnail image, logo, or video preview. 

Like user-generated color, the image is digitally analyzed through quantization, and a single color selected as the source color.

_footer: Source color from in-app-content_
_altText: Blue source color is extracted from an podcast cover_

#### **C. Pick it by hand**

A hand-picked source color is deliberately selected by a designer.

**Did you know?**The baseline static color scheme uses a hand-picked source color.

_footer: Source color hand-picked by a designer_
_altText: Green source color selected from a color picker_

### 2. Feed the source color into an algorithm

Dynamic color is powered by the [Material Color Utilities](https://github.com/material-foundation/material-color-utilities) (MCU), a set of color libraries containing algorithms and utilities that develop color themes and schemes in your app.

There are many color algorithms, but the most common ones are:

- **User-generated color algorithm**Uses personal wallpaper to identify source color. Maps colors of specific tones (lighter or darker) into the scheme according to a combination of system design choices and user preferences.
- **Content-based color algorithm** Uses image for source color. Tones are adjusted to match the appearance of the source image, while maintaining accessible contrast.
- **Custom colors** Colors closely match the chosen input colors, such as those representing brand or semantic meaning.

_footer: 1. When run through the **user-generated color** algorithm, the source color is turned into a full color scheme_
_altText: Color palette made by the user-generated algorithm_

_footer: 2. When run through **content-based color** algorithm, the same source color creates a slightly different color scheme. Some tones are adjusted to better match the appearance of the source image._
_altText: Color palette made by the content-based algorithm_

_footer: 3. Custom colors, such as brand colors, can individually run through the algorithm to create a custom scheme that matches the brand_
_altText: Color palette made by the custom color algorithm_

### 3. The algorithm generates key colors

Material's color algorithms manipulate the source color's hue and chroma to generate **five complimentary key colors**.

- Primary
- Secondary
- Tertiary
- Neutral
- Neutral variant

_footer: A source color generates five key colors_
_altText: Diagram of a source color generating five key colors: primary, secondary, tertiary, neutral and neutral variant_

### 4. The algorithm creates tonal palettes

The system then manipulates tone and chroma values to create a **tonal palette** for each key color. Colors in these palettes are given a number from 0 to 100 in increments of 10, as well as 95, 98, and 99. Some palettes include more values.

_footer: The smaller the tonal value, the darker the color_
_altText: Primary, secondary, tertiary, neutral and neutral variant tonal palettes, consisting of 13 tonal steps_

### 5. The algorithm assigns tones to color roles

The algorithm uses accessible color relationships to **assign specific tones to the 26****color roles** in both light and dark theme.

For example, the algorithm assigns the color tone primary40 to the **p****rimary** role and the tone primary100 to the **o****n primary** role.

[See all color roles](/m3/pages/color-roles)

_footer: Tones from the tonal palette are assigned to different roles_
_altText: Diagram mapping color tones to roles_

_footer: Colors from the five tonal palettes are assigned to color roles. For example, primary roles are picked from the primary tonal palette, while surface roles are picked from the neutral tonal palette._
_altText: Diagram of tonal palettes mapped to all color roles across light and dark themes_

Dark theme colors are also automatically assigned so that apps receive both light and dark themes through a single set of color roles.

_footer: The same color roles are used in light and dark themes_
_altText: Diagram of dark theme colors_

### 6. The new colors are applied to the UI

The 26 standard color roles are already assigned to elements of the UI. When a new source color is picked, the UI dynamically changes color.

_footer: Color roles assigned to the UI_
_altText: Diagram of all the color roles with an example of how it would look applied to a UI_

## Color roles support three levels of contrast

In addition to light and dark theme, color roles also support three levels of contrast. This helps people select the contrast setting that best suits their vision needs:

- Standard (default)
- Medium
- High

The standard contrast emphasizes visual hierarchy using high and low contrast elements. People with vision disabilities may choose medium or high contrast options for better support.

_footer: **Standard contrast**  The baseline color scheme already uses mixed levels of contrast to reduce cognitive load_
_altText: Email app in standard contrast._

_footer: **Medium contrast**  Provides a minimum contrast ratio of 3:1 for those who need more contrast, but may experience visual discomfort with higher contrasts from effects like halation._
_altText: Email app in medium contrast._

_footer: **High contrast**  Further emphasizes essential elements with a 7:1 contrast ratio to reduce visual distractions and enable users to focus. For example, high contrast is applied to the content in a card but not the card container._
_altText: Email app in high contrast._

The contrast settings are automatically applied to both light and dark themes.

_footer: Light theme_
_altText: The same mail app at three contrast levels, all in light theme._

_footer: Dark theme_
_altText: The same mail app at three contrast levels, all in dark theme._

Custom components can support contrast levels by using Material's appropriate color roles. For example, use **primary container** and **on primary container**.

Use design tokens to apply color roles to custom components.

_footer: A custom volume slider can use **p****rimary container** and **on primary container**color roles to support contrast levels_
_altText: Custom volume slider component using Primary Container and On Primary Container roles, whose colors change automatically at standard contrast._

_footer: At medium and other contrast levels, those color roles apply the necessary new color values_
_altText: Custom volume slider component using Primary Container and On Primary Container roles, whose colors change automatically at standard contrast._

## Pairing accessible tones

The system manipulates hue, chroma, and tone (HCT) values to **create a tonal palette for each color** with tones ranging from 0 to 100.

Color has physical limitations—whether it's actual physics, our own biological visual limitations, or the limitations of on-screen color rendering. For example, some hues cannot exist with certain chroma or tones. Color limitations are the reason colors such as bright light blue or bright light red are not quite possible. This is why the chroma value may increase or decrease for some tones in a tonal palette.

_footer: Tonal values range from 0 (black) to 100 (white). The smaller the tonal value, the darker the color._
_altText: 13 tones derived from a key color._

Material's color algorithms use these palettes to find and **pair contrasting tones,**creating accessible color combinations.

Because tone can describe the lightness or darkness of a color, it's used to define accessible color relationships. Those relationships are built into Material's color algorithms.

For example, the algorithms assign a dark tone to a button's container color and a light tone to its label color, ensuring that the colors have a 3:1 contrast.

_footer: Using tones 50 and 98 for a button and its label creates an accessible 3:1 contrast_
_altText: Colors of tones 50 and 98 used for button fill color and background fill color, which create a contrast greater than 3:1 between a button and its background._

For even more contrast, the algorithms assign tones even farther apart, achieving a 7:1 contrast.

This is the concept powering **user-controlled contrast** features.

_footer: Using colors of tones 30 and 98 for a button and its label create a 7:1 contrast_
_altText: Colors of tones 30 and 98 used for button fill color and background fill color, which create a contrast greater than 7:1 between a button and its background._

## Defining colors with hue, chroma, and tone (HCT)

**The system uses a color space called HCT**, which defines all colors using three dimensions: hue, chroma, and tone.

Changing HCT values lets you manipulate colors in flexible but predictable ways. Unlike other color spaces (like HSL or RGB), HCT allows the manipulation of a color's hue and chroma without affecting its tone. Watch to learn more:

_footer: Hue, chroma, and tone are the three color dimensions used to create accessible color schemes_
_altText: Animated video explaining the three color dimensions (hue, chroma, and tone) and how they relate to accessible color schemes._

### Hue

Hue is the perception of a color as red, orange, yellow, green, blue, violet, and so on. Hue is quantified by a number ranging from 0-360 and is a circular spectrum (values 0 and 360 are the same hue).

_footer: 360 degree **hue** spectrum_
_altText: The hue spectrum looks like a rainbow circle._

### Chroma

Chroma is how colorful or neutral (grey, black or white) a color appears. Chroma is quantified by a number ranging from 0 (completely grey, black or white) to infinity (most vibrant), though Chroma values in HCT top out at roughly 120.

Because of biological and screen rendering limitations, different hues and different tones will have different maximal chroma values.

_footer: - The higher the color purity, the higher the **chroma** - Note how lightening and darkening a hue also affects its **chroma** value_
_altText: Diagram showing chroma range from 120 (maximum intensity) to 0 (pure grey). A second diagram shows how pure black and pure white also correspond to 0 chroma_

### Tone

Tone is how light or dark a color appears. Tone is sometimes also referred to as luminance. Tone is quantified by a number ranging from 0 (pure black, no luminance) to 100 (pure white, complete luminance).

Tone is crucial for visual accessibility because it determines contrast. Colors with a greater difference in tone create higher contrast, while those with a smaller difference create lower contrast.

_footer: The 100 **tone** is always 100% white, the lightest **tone** in the range; the 0 **tone** is 100% black, the darkest**tone** in the range_
_altText: Gradient showing the range of tones from 1 (black) to 100 (white)_

### HCT isn't interchangeable with other color spaces

Values from models like hue, saturation, and lightness (HSL) won't perfectly map to Material's hue, chroma, and tone (HCT). Don’t conflate color spaces when inspecting or adjusting colors.

For example, colors with the same perceived brightness share the same tone value in HCT, but can have different HSL lightness values.

_footer: HCT tone values remain constant when they have the same perceived brightness, while HSL lightness values can vary_
_altText: 3 color dots with the same HCT tone of 78, and varying HSL lightness values of 83, 65, and 77._
