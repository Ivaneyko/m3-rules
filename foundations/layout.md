# Layout

Sources read: 2026-11-20 ([snapshot](../sources/SNAPSHOT.md)). On the web `1dp` is `1px`.

## Breakpoints

Design for breakpoints, not devices: window space changes with multi-window, folding and orientation. They apply to Android and the web ([breakpoints → overview](../sources/m3/foundations_layout_breakpoints.md#breakpoints-overview)).

| Breakpoint | Width | Margins | Spacer between panes | Panes | Navigation | Communication | Supplemental choice |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Compact | < 600dp | 16dp | — | 1 | Navigation bar, or a modal expanded navigation rail | Simple or full-screen dialog | Bottom sheet |
| Medium | 600–839dp | 24dp | 24dp | 1 (recommended) or 2 | See [Navigation by breakpoint](#navigation-by-breakpoint) | Simple dialog | Menu |
| Expanded | 840–1199dp | 24dp | 24dp | 1 or 2 (recommended) | Navigation rail, collapsed or expanded; the expanded rail modal or standard | Simple dialog | Menu |
| Large | 1200–1599dp | 24dp | 24dp | 1 or 2 (recommended) | Same as expanded | Simple dialog | Menu |
| Extra-large | ≥ 1600dp | 24dp | 24dp | 1–3 (the scaffold page recommends 2, with 1 or 3 possible) | Same as expanded | Simple dialog | Menu |

([breakpoints → designing across breakpoints](../sources/m3/foundations_layout_breakpoints.md#designing-across-breakpoints), [common swappable components](../sources/m3/foundations_layout_breakpoints.md#common-swappable-components), and the compact, medium, expanded and large sections for margins and spacers)

- Large and extra-large matter mostly for web on laptops and desktops; some products don't need them ([large & extra-large](../sources/m3/foundations_layout_breakpoints.md#navigation-3), section intro; [scaffold → panes](../sources/m3/foundations_layout_scaffold.md#panes)).
- Android also has height breakpoints; layouts rarely need them because content scrolls vertically ([height breakpoints](../sources/m3/foundations_layout_breakpoints.md#height-breakpoints)).
- A layout must adapt **live** when the window changes: folding or unfolding, rotation, split screen, multi-window, a resized window ([special considerations](../sources/m3/foundations_layout_breakpoints.md#special-considerations)).

### Navigation by breakpoint

The sources give medium three readings, which together mean **a navigation bar or a navigation rail, chosen by the layout**:

- The overview table: navigation bar, or a modal expanded navigation rail ([designing across breakpoints](../sources/m3/foundations_layout_breakpoints.md#designing-across-breakpoints)).
- The medium section: a **navigation rail for a single-pane layout**, a **navigation bar for a two-pane layout**, so the panes get the full width ([medium → navigation](../sources/m3/foundations_layout_breakpoints.md#navigation-1)).
- The navigation rail page: on medium use a rail, especially when persistent vertical navigation matters more than vertical space for content ([navigation rail → adaptive design → resizing](../sources/m3/components_navigation-rail.md#resizing)).

Elsewhere: compact uses a navigation bar or a modal expanded rail, placed near the bottom where it's easy to reach ([compact → navigation](../sources/m3/foundations_layout_breakpoints.md#navigation)); from expanded up, a rail, collapsed or expanded; an expanded rail suits extra-large best, and may collapse when space is needed or deeper in the hierarchy ([large & extra-large → navigation](../sources/m3/foundations_layout_breakpoints.md#navigation-3)). On medium and expanded the rail may hide on secondary destinations if Back still reaches the primary one ([medium → navigation](../sources/m3/foundations_layout_breakpoints.md#navigation-1)). Sorting, filtering and secondary navigation go in the pane (tabs or other components) ([expanded → navigation](../sources/m3/foundations_layout_breakpoints.md#navigation-2)).

## Adapting across breakpoints

Start from one breakpoint and ask, for the next one ([designing across breakpoints](../sources/m3/foundations_layout_breakpoints.md#designing-across-breakpoints)):

1. **Reveal**: show what smaller layouts hide (an open rail, a second pane). More space isn't only the same thing bigger.
2. **Divide**: one pane on compact and medium, two on expanded and large, consider three on extra-large. On medium, two panes only for low-density content with clear actions (settings), never for dense content.
3. **Resize**: cards, feeds, lists and panes may grow. **At every breakpoint keep text at 40–60 characters per line** by adjusting margins and type.
4. **Reposition**: reflow content, add a column, move actions from the bottom on compact to the leading edge on larger windows, keep navigation and actions reachable.
5. **Swap** components that do the same job: navigation bar ↔ collapsed rail; modal expanded rail ↔ standard expanded rail; full-screen or basic dialog ↔ basic dialog; bottom sheet ↔ menu ([common swappable components](../sources/m3/foundations_layout_breakpoints.md#common-swappable-components)). Only swap functionally equivalent components for a real reason: **never a button for a chip** or a button for a menu, and take care between list items and cards ([5. what should be swapped](../sources/m3/foundations_layout_breakpoints.md#5-what-should-be-swapped)).

**Reachability** on horizontal tablets and unfolded foldables: keep interactions out of the top 25% of the screen, and essential ones away from the very bottom edge ([medium → reachability](../sources/m3/foundations_layout_breakpoints.md#reachability)).

## Panes

- Every layout has **1–3 visible panes and at least one flexible pane** ([scaffold → panes](../sources/m3/foundations_layout_scaffold.md#panes)). A pane is **fixed** (its width doesn't follow the window) or **flexible**, and **permanent** or **temporary** (dismissable) ([same](../sources/m3/foundations_layout_scaffold.md#panes)).
- **Single pane**: one flexible pane filling the width; recommended on compact and medium, possible anywhere, and the right choice for immersive tasks (games, video, calls) and dense media on larger windows ([single-pane layouts](../sources/m3/foundations_layout_scaffold.md#single-pane-layouts), [breakpoints → 2](../sources/m3/foundations_layout_breakpoints.md#2-how-should-a-screen-be-divided)).
- **Split pane**: two flexible panes, **50% each with the spacer visually centred**; a navigation rail shrinks only the first pane so the spacer stays centred. Don't set custom widths by default ([two-pane layouts](../sources/m3/foundations_layout_scaffold.md#two-pane-layouts), [medium → two-pane layout](../sources/m3/foundations_layout_breakpoints.md#two-pane-layout)).
- **Fixed and flexible**: common from expanded up. The fixed pane is **360dp on expanded and 412dp on large and extra-large** by default, often temporary (a side sheet, a light list), on either side ([two-pane layouts](../sources/m3/foundations_layout_scaffold.md#two-pane-layouts), [expanded → panes](../sources/m3/foundations_layout_breakpoints.md#panes-2)).
- **Three panes**: only on extra-large, with a standard side sheet (max **400dp**) as the third; the rail may stay, collapse or hide. **Never more than three** ([three-pane layouts](../sources/m3/foundations_layout_scaffold.md#three-pane-layouts)).
- **Resizing** with a drag handle: split panes freely or snapping to 360dp, 412dp or the centred split; a fixed pane collapses fully. Tapping the handle also toggles sizes. Remember the user's width (**persistent**) for most layouts, even across breakpoints; reset it (**temporary**) for supporting panes ([pane expansion & resizing](../sources/m3/foundations_layout_scaffold.md#pane-expansion--resizing)).
- **How a pane sits**: **co-planar** (side by side; persistent tools belong here), **floating** (above the others; temporary tasks such as a dialog, at every breakpoint) or **docked** (pinned to an edge, such as a bottom sheet) ([displaying multiple panes](../sources/m3/foundations_layout_scaffold.md#displaying-multiple-panes)).
- **How panes adapt**: **show and hide**; **levitate** (a co-planar pane floats, a docked pane becomes floating or co-planar on medium and expanded; on large screens floating is the default, its scrim optional, and docked panes should become co-planar); **reflow** (stack vertically when there's no room side by side) ([how panes adapt](../sources/m3/foundations_layout_scaffold.md#how-panes-adapt)).

## Canonical layouts

| Layout | For | Across breakpoints |
| --- | --- | --- |
| **Feed** | Browsing a lot of content as cards in a grid (news, photos, social) | Compact: one column of full-width items. Medium and up: several columns of mixed widths, more columns from expanded. Items reflow when space changes |
| **List-detail** | A list and the selected item's details (inbox and email, files and folder, settings and category) | 1 pane on compact; 1 (recommended) or 2 on medium; 2 from expanded. A Back button only in a single-pane detail view; with two panes and nothing picked, the detail pane shows placeholder content |
| **Supporting pane** | Main content (about two thirds) and content that only makes sense beside it | Below the main pane on compact (a bottom sheet helps) and medium; beside it, 360dp fixed, from expanded |

([canonical layout examples](../sources/m3/foundations_layout_canonical-examples.md#examples), [feed](../sources/m3/foundations_layout_canonical-examples.md#across-breakpoints), list-detail and supporting pane sections)

Custom layouts build on these, or layer panes (levitate) for focused tasks such as reviewing a basket ([advanced custom layouts](../sources/m3/foundations_layout_canonical-examples.md#advanced-custom-layouts)).

## Grids and rulers

- Layouts sit on a grid whose column count, width and spacing change with the breakpoint ([grids & spacing → how to use grids](../sources/m3/foundations_layout_grids-spacing.md#how-to-use-grids)).
- Place what's nearest the screen edges first (navigation bar and rail, toolbars, app bars), then the panes ([same](../sources/m3/foundations_layout_grids-spacing.md#place-bars--rails)).
- **Rulers** are shared alignment lines: bar and safety rulers (system UI), a **title ruler** (the app bar's title and icons), **content rulers** (the first for hero content and headlines, others where supporting text or actions begin) and margin rulers, which may be narrower or wider for expression, or full width for an immersive photo grid ([rulers & alignment](../sources/m3/foundations_layout_grids-spacing.md#rulers--alignment)).

## Spacing

- Spacing is on an **8dp scale; `space100` = 8dp**, and new tokens follow the multiplier (`space225` = 18dp) ([spacing → overview](../sources/m3/styles_spacing.md#spacing), [customizing the system](../sources/m3/styles_spacing.md#add-custom-system-spacing--patterns)). The web has no implementation of the spacing tokens yet ([availability](../sources/m3/styles_spacing.md#availability--resources)).
- **Padding** is inside an element, a **gap** between elements in a container, a **margin** outside an element. **Use padding and gaps before margins**: Material rarely uses margins inside components; margins are for spacing beyond the parent's padding, or for layouts ([parts of spacing](../sources/m3/styles_spacing.md#parts-of-spacing)).
- Leading and trailing swap in right-to-left languages ([same](../sources/m3/styles_spacing.md#parts-of-spacing); [right-to-left](rtl.md)).
- The layout overview measures padding **in 4dp steps**; window **margins** grow with the window class; a **spacer** between panes is **24** wide and may hold a drag handle whose target overlaps the panes slightly ([layout overview → padding](../sources/m3/foundations_layout_layout-overview.md#padding), [margins](../sources/m3/foundations_layout_layout-overview.md#margins), [spacers](../sources/m3/foundations_layout_layout-overview.md#spacers)).
- Keep the same spacing when text is scaled to 200% ([spacing complements text scaling](../sources/m3/styles_spacing.md#spacing-complements-text-scaling)).
- Use tokens in custom components instead of hard-coded values ([system tokens](../sources/m3/styles_spacing.md#system-tokens)).

### Spacing to group and direct attention

- **Explicit grouping**: outlines, dividers or shadows around related items (it can also say the area is interactive). **Implicit grouping**: closeness and open space ([spacing to group content](../sources/m3/foundations_layout_grids-spacing.md#spacing-to-group-content)).
- **Rhythm**: consistent spacing between related elements. **Similarity**: similar elements get the same size and spacing; leading thumbnails, avatars and icons always align. **Proximity**: put a button near what it affects. **Continuity**: related items in one container, row or column ([spacing to direct attention](../sources/m3/foundations_layout_grids-spacing.md#spacing-to-direct-attention)).
- Give the most important content generous space and the brightest surfaces; keep key actions in the same place across a product ([spacing as expression](../sources/m3/foundations_layout_grids-spacing.md#spacing-as-expression)).

## Density

- Default targets are at least **48×48 CSS px** ([grids & spacing → density](../sources/m3/foundations_layout_grids-spacing.md#information-density), section intro).
- **Information density** comes from the layout's margins, spacers and padding; higher density suits scanning and comparing (tables, long forms). It shouldn't change by itself across breakpoints or orientation ([information density](../sources/m3/foundations_layout_grids-spacing.md#information-density)).
- **Component scaling** is a scale from 0 (default) to −1, −2, −3, each usually 4dp less height or vertical padding; the text size doesn't change and content stays centred ([component scaling](../sources/m3/foundations_layout_grids-spacing.md#component-scaling)).
- **Dense is opt-in**, never the default; the settings that change it keep 48×48 targets. Don't make focused tasks (picking from a menu) or alerts (snackbars, dialogs) denser ([avoid applying component scaling by default](../sources/m3/foundations_layout_grids-spacing.md#avoid-applying-component-scaling-by-default), [component scaling](../sources/m3/foundations_layout_grids-spacing.md#component-scaling)).
