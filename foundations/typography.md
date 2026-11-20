# Typography

Sources read: 2026-11-20 ([snapshot](../sources/SNAPSHOT.md)). On the web `1sp` is `1px`.

## The type scale

- One type scale with **15 baseline** and **15 emphasized** styles, in five roles (display, headline, title, body, label), each in large, medium and small ([typography → type scale](../sources/m3/styles_typography.md#m3-type-scale)).
- A product uses only the styles it needs, not all 15 ([same](../sources/m3/styles_typography.md#m3-type-scale)).
- Each style has one token holding all its properties, plus a token per property (font, size, line height, tracking, weight) ([type scale tokens](../sources/m3/styles_typography.md#type-scale-tokens)): `md.sys.typescale.display-large`, emphasized `md.sys.typescale.emphasized.display-large` ([where emphasized styles can be used](../sources/m3/styles_typography.md#components)).

| Style | Size / line height (px) | Weight | Tracking (px) | Emphasized weight | Typeface |
| --- | --- | --- | --- | --- | --- |
| Display large | 57 / 64 | 400 | −0.25 | 500 | Brand |
| Display medium | 45 / 52 | 400 | 0 | 500 | Brand |
| Display small | 36 / 44 | 400 | 0 | 500 | Brand |
| Headline large | 32 / 40 | 400 | 0 | 500 | Brand |
| Headline medium | 28 / 36 | 400 | 0 | 500 | Brand |
| Headline small | 24 / 32 | 400 | 0 | 500 | Brand |
| Title large | 22 / 28 | 400 | 0 | 500 | Brand |
| Title medium | 16 / 24 | 500 | 0.15 | 700 | Plain |
| Title small | 14 / 20 | 500 | 0.1 | 700 | Plain |
| Body large | 16 / 24 | 400 | 0.5 | 500 | Plain |
| Body medium | 14 / 20 | 400 | 0.25 | 500 | Plain |
| Body small | 12 / 16 | 400 | 0.4 | 500 | Plain |
| Label large | 14 / 20 | 500 | 0.1 | 700 | Plain |
| Label medium | 12 / 16 | 500 | 0.5 | 700 | Plain |
| Label small | 11 / 16 | 500 | 0.5 | 700 | Plain |

All values from [TypeScaleTokens.kt](../sources/tokens/base/TypeScaleTokens.kt), with the weight names resolved by [TypefaceTokens.kt](../sources/tokens/base/TypefaceTokens.kt) (`WeightRegular` = Normal = 400, `WeightMedium` = 500, `WeightBold` = 700). An emphasized style has the **same size, line height and tracking** as its baseline style and only a heavier weight ([TypeScaleTokens.kt](../sources/tokens/base/TypeScaleTokens.kt)).

## Web units

- Font size: `rem` = size in sp ÷ 16 (16px root): 12sp = 0.75rem, 24sp = 1.5rem ([font size units](../sources/m3/styles_typography.md#font-size-units)).
- Letter spacing: tracking in px ÷ font size in px, in `rem` on the web: 0.2 tracking at 16px = 0.0125 ([letter spacing units](../sources/m3/styles_typography.md#letter-spacing-units)).
- On the web the line height **is** the text's bounding box, with the text centred in it (CSS half-leading). Position text with line height, padding and container measurements, not with distances to the baseline ([typesetting → using padding and bounding boxes](../sources/m3/styles_typography.md#using-padding-and-bounding-boxes)).

## The roles

| Role | Use | Typeface |
| --- | --- | --- |
| Display | The largest text: short, important text or numerals; best on large screens | An expressive font may suit it |
| Headline | Short, high-emphasis text on smaller screens; marks primary passages or important regions (a dialog's headline) | Expressive fonts only with matching line height and letter spacing |
| Title | Medium-emphasis, relatively short text: secondary passages or regions (an app bar's title, a category header) | Caution with expressive, script or display fonts |
| Body | Longer passages | A font readable at small sizes; **no expressive or decorative fonts** |
| Label | Small, utilitarian text: text inside components and captions. Buttons use label large | — |

([applying type → roles](../sources/m3/styles_typography.md#roles))

## Emphasized styles

- Emphasized styles are for **selection, actions, headlines and other editorial moments**, used together with the baseline styles ([emphasized type styles](../sources/m3/styles_typography.md#emphasized-type-styles)).
- In components they suit badges, buttons for primary actions, the extended FAB, and selected list and menu items ([where emphasized styles can be used → components](../sources/m3/styles_typography.md#components)).
- **Material components don't use emphasized styles by default.** To use one, swap the baseline token for the emphasized token of the same style ([same](../sources/m3/styles_typography.md#components)).
- Use them on text that already uses weight for hierarchy, or to draw attention to selected states, unread messages or key interactions; both may apply at once ([weight](../sources/m3/styles_typography.md#weight), [context](../sources/m3/styles_typography.md#context)).

## Typefaces

- Two typeface tokens: **brand** for the larger styles (display, headline; the tokens also give title large the brand face) to focus on expression, and **plain** for the smaller ones (body, label) to focus on readability. Roboto is the default for both ([customize the typeface](../sources/m3/styles_typography.md#customize-the-typeface), [TypeScaleTokens.kt](../sources/tokens/base/TypeScaleTokens.kt)).
- Replacing Roboto is allowed, to express a brand ([customize the typeface](../sources/m3/styles_typography.md#customize-the-typeface)).
- When customising styles: change the brand and plain tokens for a new typeface, adjust line height and letter spacing, and **avoid changing the type size**, which affects how components render and reflow. Do the same for the emphasized styles. A customised scale may stop receiving Material's typography token updates ([customizing type styles](../sources/m3/styles_typography.md#customizing-type-styles)).
- When a product needs other sizes, it may add, remove or change styles. Material's scale is Major Second (1.125) from a 14 base; keep clear differences between sizes ([customizing your type scale](../sources/m3/styles_typography.md#customizing-your-type-scale)).

## Readability

- Line height about **1.2×** the size for title, headline and display; about **1.5×** for body and label ([ensuring readability](../sources/m3/styles_typography.md#ensuring-readability)).
- **Tabular figures** in tables and in values that change in place, such as clocks, so they stay aligned and the layout doesn't shift ([same](../sources/m3/styles_typography.md#ensuring-readability)).
- Line length: ideally **40–60 characters**; large screens can take up to 120 ([lists → line length](../sources/m3/components_lists.md#line-length)).
- **Language height**: line height can follow the script's height category (small: Latin, Cyrillic, Greek, Hebrew; medium ~7% taller: Arabic, Chinese, Japanese, Korean, Thai, Vietnamese and most others; large ~30%: Burmese, Telugu; extra large ~100%: Nastaliq). Default to **medium**; components with vertical padding adapt, fixed-height ones are built for small ([language height support](../sources/m3/styles_typography.md#language-height-support)).
- **Sentence case** for labels: capitalise only the first word and proper nouns ([buttons → label text](../sources/m3/components_buttons.md#label-text)).

## Colour and contrast

- Text contrast: **3:1 for large text, 4.5:1 for small text** ([accessibility → color & contrast](../sources/m3/styles_typography.md#color--contrast)).
- Text is **`on-surface`** by default; `on-surface-variant` is the alternative ([same](../sources/m3/styles_typography.md#color--contrast)).
- **Links** on a surface are `primary`; `tertiary` makes them less prominent ([same](../sources/m3/styles_typography.md#color--contrast)).

- **Large text** is 14pt bold or 18pt regular and up; it and graphics need 3:1 against their background ([designing → contrast ratios](../sources/m3/foundations_designing.md#contrast-ratios)).
