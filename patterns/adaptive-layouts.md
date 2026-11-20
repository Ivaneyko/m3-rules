# Adaptive layouts: making a screen work at every window size

Sources read: 2026-11-20 ([snapshot](../sources/SNAPSHOT.md)). The system (breakpoints, panes, canonical layouts, spacing, density) is in [foundations → layout](../foundations/layout.md); this file is the procedure for one screen and what each component does as the window grows.

## Procedure

1. **Pick the canonical layout** from the screen's job (table below), or build on one ([layout → canonical layouts](../foundations/layout.md#canonical-layouts)).
2. **Design one breakpoint, then walk to the next** asking what to reveal, divide, resize, reposition and swap ([layout → adapting across breakpoints](../foundations/layout.md#adapting-across-breakpoints), [breakpoints → designing across breakpoints](../sources/m3/foundations_layout_breakpoints.md#designing-across-breakpoints)).
3. **Place the edges first** (navigation bar or rail, app bar, toolbars), then the panes ([grids & spacing → place bars & rails](../sources/m3/foundations_layout_grids-spacing.md#place-bars--rails)).
4. **Choose the navigation** for each window size ([layout → navigation by breakpoint](../foundations/layout.md#navigation-by-breakpoint)).
5. **Check each component** against the table under [Components across window sizes](#components-across-window-sizes).
6. **Resize the window live** through every breakpoint, and fold, rotate and split it: the layout adapts without a reload ([breakpoints → special considerations](../sources/m3/foundations_layout_breakpoints.md#special-considerations)).

## Choosing a canonical layout

| The screen… | Layout |
| --- | --- |
| browses a lot of similar content (news, photos, products) | **Feed** |
| picks an item from a list and shows it (inbox and email, files, settings) | **List-detail** |
| has main content plus content that only makes sense beside it (a document and its comments) | **Supporting pane** |
| is immersive (video, a game, a call) or dense media | **Single pane** at every size |

([canonical layout examples](../sources/m3/foundations_layout_canonical-examples.md#examples), [scaffold → single-pane layouts](../sources/m3/foundations_layout_scaffold.md#single-pane-layouts))

- **List-detail on one pane** shows a Back button in the detail view; **on two panes** there's no Back, and with nothing selected the detail pane shows placeholder content ([layout → canonical layouts](../foundations/layout.md#canonical-layouts)).
- **Two panes on medium only for low-density content with clear actions** (settings), never dense content ([breakpoints → 2. how should a screen be divided](../sources/m3/foundations_layout_breakpoints.md#2-how-should-a-screen-be-divided)).

## Components across window sizes

| Component | Compact | Medium and up |
| --- | --- | --- |
| Navigation | Navigation bar, or a modal expanded rail | Rail (a navigation bar with horizontal items is possible on medium); never both |
| App bar | Trailing actions may collapse into an overflow menu | Collapsed actions come back; the search field fills the space up to 312, then only 50% of it |
| Navigation bar | Vertical items | Horizontal items on medium; not on desktop |
| Toolbar | One toolbar; items evenly spaced; avoid vertical toolbars | More actions shown; docked items centred or a key action centred; several floating toolbars on opposite edges, a vertical one opposite the rail |
| FAB | Lower right, medium size | Upper left on expanded, as in the rail; large on tablets; in an expanding rail it becomes an extended FAB |
| Cards | Consider a list instead | Columns, rows or a carousel, never cards stretched across the screen |
| List | Edge to edge, an item opens a details page | List and details side by side; may become multi-column or a carousel |
| Text fields | May span the full width | Flexible margins or a container, with minimum and maximum widths; never full width on a large screen |
| Dialog | Full-screen dialog for forms and multi-step tasks | Basic dialog, centred or placed elsewhere at least 56 from the edges |
| Bottom sheet | Modal or standard bottom sheet | A maximum width (640, with 56 margins wider); swap a modal one for a menu |
| Side sheet | Modal | Standard, beside the content, which shrinks to make room |
| Snackbar | Two lines of text at most | Wider for longer text, one line preferred, never flush to an edge |
| Date picker | In a dialog (full-screen modal recommended) | In a text field dropdown (docked) |
| Carousel | Multi-browse shows at most three items with text; full-screen only in portrait | Full-screen only in portrait on medium, never from expanded up |

([navigation → navigation bar](../components/navigation.md#navigation-bar), [navigation rail](../components/navigation.md#navigation-rail), [app bars](../components/navigation.md#app-bars), [toolbars](../components/navigation.md#toolbars); [actions → FAB](../components/actions.md#fab); [containment](../components/containment.md); [feedback → snackbar](../components/feedback.md#snackbar); [inputs → text fields](../components/inputs.md#text-fields), [date and time pickers](../components/inputs.md#date-and-time-pickers); sources: [app bars → resizing](../sources/m3/components_app-bars.md#resizing), [navigation bar → resizing](../sources/m3/components_navigation-bar.md#resizing), [toolbars → resizing](../sources/m3/components_toolbars.md#resizing), [FAB → adaptive design](../sources/m3/components_floating-action-button.md#adaptive-design), [cards → adaptive design](../sources/m3/components_cards.md#adaptive-design), [lists → compact breakpoints](../sources/m3/components_lists.md#compact-breakpoints), [text fields → adaptive design](../sources/m3/components_text-fields.md#adaptive-design), [dialogs → full-screen dialog](../sources/m3/components_dialogs.md#full-screen-dialog), [bottom sheets → measurements](../sources/m3/components_bottom-sheets.md#measurements), [side sheets → adaptive design](../sources/m3/components_side-sheets.md#adaptive-design), [snackbar → responsive layout](../sources/m3/components_snackbar.md#medium--expanded-breakpoints), [date pickers → usage](../sources/m3/components_date-pickers.md#usage), [carousel → usage](../sources/m3/components_carousel.md#usage), [common swappable components](../sources/m3/foundations_layout_breakpoints.md#common-swappable-components))

## Checks

- **Only swap components that do the same job**, for a real reason: never a button for a chip or a button for a menu ([breakpoints → 5. what should be swapped](../sources/m3/foundations_layout_breakpoints.md#5-what-should-be-swapped)).
- **Text stays at 40–60 characters per line** at every breakpoint, by adjusting margins and type; fixed margins on a large window give over-long lines ([layout → adapting across breakpoints](../foundations/layout.md#adapting-across-breakpoints), [text fields → adaptive design](../sources/m3/components_text-fields.md#adaptive-design)).
- **Reachable on large touch screens**: nothing interactive in the top 25% of a horizontal tablet or unfolded foldable, nothing essential at the very bottom edge; actions move from the bottom on compact to the leading edge on larger windows ([breakpoints → reachability](../sources/m3/foundations_layout_breakpoints.md#reachability)).
- **Density doesn't change by itself** with the breakpoint or orientation ([layout → density](../foundations/layout.md#density)).
- **Right-to-left mirrors the layout**: the rail on the right, leading and trailing swapped ([layout → spacing](../foundations/layout.md#spacing), [navigation rail → container](../sources/m3/components_navigation-rail.md#container)).
