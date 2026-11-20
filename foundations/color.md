# Color

Sources read: 2026-11-20 ([snapshot](../sources/SNAPSHOT.md)).

## Roles, not colours

- UI uses **colour roles**, never a colour value. Roles are mapped to the components and are the same whether the scheme is the baseline, a brand scheme or dynamic colour; a custom component is mapped to the same roles ([color roles](../sources/m3/styles_color_roles.md#what-are-color-roles)).
- Roles are implemented as **tokens** ([same](../sources/m3/styles_color_roles.md#what-are-color-roles)).
- Each role comes in light and dark and in three contrast levels: **standard** (the default), **medium** (at least 3:1) and **high** (7:1). A component that uses the roles supports all of them; one with fixed colours supports none ([color system → contrast](../sources/m3/styles_color_system.md#color-roles-support-three-levels-of-contrast)).

## Naming

| Word in the name | Means |
| --- | --- |
| Surface | Backgrounds and large, low-emphasis areas |
| Primary, secondary, tertiary | Accent roles, to emphasise or de-emphasise foreground elements |
| Container | A **fill** for a foreground element (a button). **Never text or an icon** |
| On | Text and icons **on** its paired role: `on-primary` on `primary` |
| Variant | A lower-emphasis version of its pair: `outline-variant` beside `outline` |

([color roles → general concepts](../sources/m3/styles_color_roles.md#general-concepts))

## Pairing

- **Use roles only in their intended pairs and layering orders**: text and icons on a fill take that fill's `on-` role. Wrong pairs break contrast, especially when the contrast level changes ([pairing and layering](../sources/m3/styles_color_roles.md#pairing-and-layering-colors)).
- The pairs give at least **3:1** contrast ([what are color roles](../sources/m3/styles_color_roles.md#what-are-color-roles)). Any role starting with `on-` has enough contrast against its paired role ([advanced → map or remap](../sources/m3/styles_color_advanced.md#best-practices-1)).

## The standard roles

| Group | Roles | Use |
| --- | --- | --- |
| Primary | `primary`, `on-primary`, `primary-container`, `on-primary-container` | The most prominent components: the FAB, high-emphasis buttons, active states. `primary` for high-emphasis fills, text and icons on surface; `primary-container` a standout fill for key components such as the FAB |
| Secondary | `secondary`, `on-secondary`, `secondary-container`, `on-secondary-container` | Less prominent components: filter chips, the selected navigation icon, a dismissive button. `secondary-container` for recessive components such as tonal buttons |
| Tertiary | `tertiary`, `on-tertiary`, `tertiary-container`, `on-tertiary-container` | Contrasting accents that balance primary and secondary, or draw attention to an element such as an input field or a badge; used at the designer's discretion |
| Error | `error`, `on-error`, `error-container`, `on-error-container` | Error states, such as a wrong password in a text field. Static: it doesn't change with dynamic colour, but still adapts to light and dark |
| Surface | `surface`, `on-surface`, `on-surface-variant` | `surface` is the default background; `on-surface` is text and icons on any surface or surface container, `on-surface-variant` the lower-emphasis version |
| Surface containers | `surface-container-lowest`, `-low`, (default) `surface-container`, `-high`, `-highest` | Containers by emphasis, for components such as cards, sheets and dialogs, and for hierarchy and nested containers on larger windows |
| Inverse | `inverse-surface`, `inverse-on-surface`, `inverse-primary` | Elements that must contrast with the surrounding UI. The snackbar: `inverse-surface` background, `inverse-on-surface` text, `inverse-primary` for its text button |
| Outline | `outline`, `outline-variant` | See [Outlines](#outlines) |

([color roles](../sources/m3/styles_color_roles.md#primary): primary, secondary, tertiary, error, surface, inverse and outline sections)

## Surfaces

- The most common combination is **`surface` for the background and `surface-container` for a navigation area** ([color roles → surface](../sources/m3/styles_color_roles.md#surface)).
- Text and icons on any surface use `on-surface` and `on-surface-variant` ([same](../sources/m3/styles_color_roles.md#surface)).
- **A layout region keeps its roles at every breakpoint**: the body is `surface` and the navigation `surface-container` on a phone and on a tablet alike. Larger windows may add other surface container roles, applied consistently ([same](../sources/m3/styles_color_roles.md#surface)).
- Neutral components are mapped to surface containers by default; the roles can be remapped ([same](../sources/m3/styles_color_roles.md#surface)). The defaults shown:

  | Role | Components |
  | --- | --- |
  | `surface-container-low` | Elevated button, elevated card |
  | `surface-container` | Top and bottom bars |
  | `surface-container-high` | FAB, basic dialog |
  | `surface-container-highest` | A text field's container, a switch's track when off |

  ([color roles → surface, the default mappings figure](../sources/m3/styles_color_roles.md#surface)). Each component's own role is in its component file.

## Outlines

- **`outline`**: important boundaries, such as a text field's outline. Or another colour with 3:1 contrast against the surface ([color roles → outline](../sources/m3/styles_color_roles.md#outline)).
- **`outline-variant`**: decoration, such as dividers, and borders where the elements inside already give 4.5:1 contrast ([same](../sources/m3/styles_color_roles.md#outline)).
- Don't use `outline` for dividers or for the border of a component that holds several elements, such as a card: use `outline-variant` ([same](../sources/m3/styles_color_roles.md#outline)).
- Don't use `outline-variant` to build hierarchy or as the only boundary of a target. It may border a chip or a button only when the text and icons inside meet 4.5:1 ([same](../sources/m3/styles_color_roles.md#outline)).

## Add-on roles

Most products don't need these; if you're not sure, don't use them ([color roles → add-on roles](../sources/m3/styles_color_roles.md#add-on-color-roles)).

- **Fixed accents** (`primary-fixed`, `primary-fixed-dim`, `on-primary-fixed`, `on-primary-fixed-variant`, and the same for secondary and tertiary): fills that keep the **same tone in light and dark**. Because they don't change, **avoid them where contrast matters**; use the regular accent roles there ([fixed accent colors](../sources/m3/styles_color_roles.md#fixed-accent-colors), [on fixed accent colors](../sources/m3/styles_color_roles.md#on-fixed-accent-colors)).
- **`surface-dim`, `surface-bright`**: the dimmest and brightest surfaces, which keep their relative brightness in light and dark (where `surface` flips) ([bright and dim surface roles](../sources/m3/styles_color_roles.md#bright-and-dim-surface-roles)).

## Schemes and extra colours

- **Static (baseline or brand)** colours never change with the user's wallpaper or content; choose it for no personalisation, enterprise products, or iOS. **Dynamic** colour generates the scheme from a source colour and gives user-controlled contrast. The role mappings are the same in both ([choosing a scheme](../sources/m3/styles_color_choosing-a-scheme.md#static-color)).
- A **brand baseline scheme** is generated from input colours for primary, secondary, tertiary, neutral and neutral variant (Material Theme Builder). Primary and tertiary are the most prominent; secondary, neutral variant and neutral share primary's hue at less chroma ([advanced → define your own baseline scheme](../sources/m3/styles_color_advanced.md#define-your-own-baseline-scheme)).
- An **extra static colour** (formerly "custom colour", such as a green Success) is generated from a reference colour into four roles, main, on-main, container and on-container, used like the accent roles. Error already exists, so don't define your own red. In a dynamic scheme it may be harmonised towards primary, or stay exact when it represents something literal (brand, transit line colours) ([advanced → define static colors](../sources/m3/styles_color_advanced.md#define-static-colors)).
- A **custom colour role** is a last resort, defined like Material's: a palette and reference tone for light and dark, its pairings, and contrast that meets Material's minimums ([advanced → define custom color roles](../sources/m3/styles_color_advanced.md#define-custom-color-roles)).
