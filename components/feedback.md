# Feedback: snackbar, tooltips, badges, progress and loading indicators

Sources read: 2026-11-20 ([snapshot](../sources/SNAPSHOT.md)). Sizes in dp (`1dp` = `1px` on the web). *Tokens* marks values from the Compose tokens ([component-tokens](../sources/tokens/component-tokens.md)).

## Snackbar

| Part | Value |
| --- | --- |
| Container | `inverse-surface`, corners 4, elevation 3, opaque |
| Height | one line 48, two lines 68 |
| Text | `inverse-on-surface`, body medium |
| Action | text button, `inverse-primary`, label large |
| Close icon | 24, `inverse-on-surface` |

(*tokens* `SnackbarTokens`)

- **A short, low-priority update about a process** the app performed or will perform. It doesn't block the page and needs no action; high-priority messages are dialogs ([snackbar → usage](../sources/m3/components_snackbar.md#usage), [similar components](../sources/m3/components_snackbar.md#similar-components)).
- **One at a time**; consecutive ones appear one after another, never stacked or side by side; an updated one may replace an outdated one at once ([usage](../sources/m3/components_snackbar.md#usage), [consecutive snackbars](../sources/m3/components_snackbar.md#consecutive-snackbars)).
- **Text** about the process, **one line where possible, two at most on compact**. **No icons, no styled text, no inline links** (use a button or another component) ([text label](../sources/m3/components_snackbar.md#text-label)).
- **At most one action**, a **text button** (Undo, Retry), in a colour distinct from the text; **never a filled or elevated button**; a Dismiss action is unnecessary. **Never the only way to reach a core task** ([container](../sources/m3/components_snackbar.md#container), [action](../sources/m3/components_snackbar.md#action)).
- **Placement**: at the bottom, in front of the content, **above a FAB** (never in front of or behind it) and never in front of navigation or frequently used targets; never fully covering a focused element. Full width only when there's no persistent navigation. On medium and larger windows it widens for longer text (single line preferred), is left- or centre-aligned consistently, and **never flush to an edge** ([placement](../sources/m3/components_snackbar.md#placement), [responsive layout](../sources/m3/components_snackbar.md#medium--expanded-breakpoints)).
- **Duration**: without an action it may close after **4–10 s**; **with an action it stays** until used or dismissed ([appearing and disappearing](../sources/m3/components_snackbar.md#appearing-and-disappearing)).
- **On the web an auto-dismissing snackbar is inaccessible on its own**: also show the news **inline**, near what triggered it (Save becomes Saved), **or** give it an action so it doesn't close by itself ([accessibility requirements for web](../sources/m3/components_snackbar.md#accessibility-requirements-for-web)).
- **Focus**: announce it through a **polite live region**, **don't move focus** to it or trap focus in it; on the web offer a documented shortcut to reach an actionable snackbar; when it closes, focus returns to the element that triggered it or the next logical one. Esc dismisses a focused snackbar ([focus](../sources/m3/components_snackbar.md#focus), [keyboard navigation](../sources/m3/components_snackbar.md#keyboard-navigation), [labeling elements](../sources/m3/components_snackbar.md#labeling-elements)).
- Don't animate other components (a FAB) with the snackbar's animation ([consecutive snackbars](../sources/m3/components_snackbar.md#consecutive-snackbars)).

## Tooltips

| Variant | Container | Text | Size |
| --- | --- | --- | --- |
| Plain | `inverse-surface`, corners 4 | `inverse-on-surface`, body small | 24 high, 8 padding |
| Rich | `surface-container`, corners 12, elevation 2 | subhead `on-surface-variant` title small; text `on-surface-variant` body medium; actions `primary` label large | — |

([tooltips → plain tooltip measurements](../sources/m3/components_tooltips.md#plain-tooltip-measurements); *tokens* `PlainTooltipTokens`, `RichTooltipTokens`)

- **Plain** tooltips label an element **without text** (icon-only buttons, fields); **not needed when the element already has a label**. **Rich** tooltips explain (definitions, a new feature) with an optional one-line subhead and **up to two text buttons**, side by side ([usage](../sources/m3/components_tooltips.md#usage), [anatomy](../sources/m3/components_tooltips.md#rich-tooltip)).
- **Never hide critical information in a tooltip**; use a dialog ([usage](../sources/m3/components_tooltips.md#usage)).
- Plain text stays on one line ([supporting text](../sources/m3/components_tooltips.md#supporting-text)).
- **Placement**: a plain tooltip sits **above** its element, **4** away when the element has a visible boundary (a button), **8** when not (text); **below** it in an app bar. A rich tooltip sits at the bottom right, never covering its element, moving in 8 steps to stay on screen; on desktop it may be centred below ([placement](../sources/m3/components_tooltips.md#placement)).
- **Behaviour**: shown on **hover** (desktop) or **long press** (mobile), also on focus; gone **1.5 s** after leaving; **one at a time**. A **persistent** rich tooltip opens on click or on page load (introducing a feature) and stays until another element is used; **not on icon buttons** ([behavior](../sources/m3/components_tooltips.md#behavior), [interaction & style](../sources/m3/components_tooltips.md#interaction--style)).
- **Focus** moves top to bottom through a rich tooltip's links and buttons and is never trapped there ([focus order](../sources/m3/components_tooltips.md#focus-order)).

## Badges

| Variant | Size | Colour |
| --- | --- | --- |
| Small (a dot) | 6 | `error` |
| Large (a count) | 16 high, grows with the count | `error`, label `on-error`, label small |

Both fully rounded (*tokens* `BadgeTokens`).

- On a **navigation destination's icon** (navigation bar, rail, app bars, tabs): a small badge for an unread notification, a large one for a count or status ([badges → usage](../sources/m3/components_badges.md#usage)).
- **Anchored inside the icon's bounding box at its ending edge, never over the icon**, in a fixed position (mirrored in RTL); a growing count keeps the placement ([container](../sources/m3/components_badges.md#container)).
- **At most four characters**, a + included (`999+`); never cut off or colliding ([label text](../sources/m3/components_badges.md#label-text)).
- A small badge where space is tight (app bars); a large badge where nothing collides (a rail), or at the trailing edge when text follows ([placement](../sources/m3/components_badges.md#placement)).
- **Keep the default colours**; custom ones need 3:1. An unread badge **disappears once its destination is selected** ([container](../sources/m3/components_badges.md#container), [interaction & style](../sources/m3/components_badges.md#interaction--style)).

## Progress and loading indicators

| Wait | Use |
| --- | --- |
| Under 200 ms | Nothing; show the content |
| 200 ms – 5 s | **Loading indicator** |
| Over 5 s | **Progress indicator** (and consider letting people leave the page) |

([progress indicators → usage](../sources/m3/components_progress-indicators.md#usage), [loading indicator → usage](../sources/m3/components_loading-indicator.md#usage))

### Progress indicators

| Part | Linear | Circular |
| --- | --- | --- |
| Size | 4 high (10 with the wave) | 40 (48 with the wave) |
| Track and indicator | 4 thick, 4 apart | 4 thick, 4 apart |
| Colours | indicator `primary`, track `secondary-container` | same |

(*tokens* `LinearProgressIndicatorTokens`, `CircularProgressIndicatorTokens`, `ProgressIndicatorTokens`)

- **One indicator for a group** of loading items, not one each ([usage](../sources/m3/components_progress-indicators.md#usage)).
- **Linear** along the edge of what loads (the top of the page for the whole page, the expanding edge of a card); **circular** centred on what loads, or in the empty space where new items will appear, **never over existing content** ([placement](../sources/m3/components_progress-indicators.md#placement)).
- **Determinate** must show real progress; **indeterminate** when the time is unknown; switch from indeterminate to determinate when the progress becomes known ([usage](../sources/m3/components_progress-indicators.md#usage)).
- **The same process uses the same variant everywhere** in the product ([same](../sources/m3/components_progress-indicators.md#usage)).
- The active indicator appears as a **dot** at the very start; shape **flat** or **wavy** (expressive, for long processes) ([active indicator](../sources/m3/components_progress-indicators.md#active-indicator)).
- A **stop indicator** (a 4 dot at the end of a linear determinate track) is required when the track has under 3:1 contrast with its surroundings ([stop indicator](../sources/m3/components_progress-indicators.md#stop-indicator)).
- **In a button**: a circular indicator, flat in very small buttons, **in the button's label or icon colour with no track** for 3:1; not on every button in a list ([progress indicators in buttons](../sources/m3/components_progress-indicators.md#progress-indicators-in-buttons)).
- Linear indicators mirror in RTL; circular ones don't ([right-to-left languages](../sources/m3/components_progress-indicators.md#right-to-left-languages)).

### Loading indicator

| Part | Value |
| --- | --- |
| Size | 48 (the shape 38 inside), any size from **24 to 240** |
| Default | indicator `primary` |
| Contained | a circle of `primary-container`, indicator `on-primary-container` |

([loading indicator → measurements](../sources/m3/components_loading-indicator.md#measurements), [responsive layout](../sources/m3/components_loading-indicator.md#responsive-layout); *tokens* `LoadingIndicatorTokens`)

- For **short, indeterminate waits**; it **replaces the indeterminate circular progress indicator** for those ([usage](../sources/m3/components_loading-indicator.md#usage); [SKILL → M3 Expressive at a glance](../SKILL.md#m3-expressive-at-a-glance)).
- **Never turns into a progress indicator**; to go from unknown to known progress, use an indeterminate then determinate progress indicator ([usage](../sources/m3/components_loading-indicator.md#usage)).
- **Centred** on the page or container that loads, or in the space where new content will appear, not over existing content; may sit in a button ([placement](../sources/m3/components_loading-indicator.md#placement)).
- Use the **contained** form over other content and for pull-to-refresh ([container](../sources/m3/components_loading-indicator.md#container-optional)).
- In another component (a button) the indicator keeps **3:1** contrast against it. Pull-to-refresh needs a single-pointer alternative, such as a refresh button ([loading indicator → interaction & style](../sources/m3/components_loading-indicator.md#interaction--style)).
- Its active indicator is a looping morph of seven Material shapes ([active indicator](../sources/m3/components_loading-indicator.md#active-indicator)); the morph API isn't on the web ([foundations → shape](../foundations/shape.md#expressive-shapes-and-morphing)).
