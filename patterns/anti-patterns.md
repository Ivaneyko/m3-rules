# Anti-patterns: UI that looks like Material but isn't

Sources read: 2026-11-20 ([snapshot](../sources/SNAPSHOT.md)). A review checklist: each line is a mistake, the rule it breaks, and where the rule is. A review walks the whole list against the screen.

## Outdated components

- **The navigation drawer, the bottom app bar, the medium and large app bars, the baseline navigation bar and rail** in a new design. Use the expanded rail, the docked toolbar, the flexible app bars, the flexible navigation bar and the collapsed rail ([navigation → replaced in M3 Expressive](../components/navigation.md#replaced-in-m3-expressive); [navigation drawer](../sources/m3/components_navigation-drawer.md)).
- **Other components M3 Expressive replaced**, such as segmented buttons and the indeterminate circular progress indicator for short waits ([SKILL → M3 Expressive at a glance](../SKILL.md#m3-expressive-at-a-glance); [building with M3 Expressive](../sources/m3/building-with-m3-expressive.md)).
- **M2 habits**: drop shadows on every raised surface, an app bar that gains a shadow on scroll. M3 separates by tone, and the app bar fills with `surface-container` ([elevation → showing elevation](../foundations/elevation.md#showing-elevation), [navigation → app bars](../components/navigation.md#app-bars); [app bars → differences from M2](../sources/m3/components_app-bars.md#differences-from-m2)).

## Colour

- **Hex values or palette colours in components** instead of colour roles; a component with fixed colours supports no contrast level or dark theme ([color → roles, not colours](../foundations/color.md#roles-not-colours); [color roles](../sources/m3/styles_color_roles.md#what-are-color-roles)).
- **Wrong pairs**: text on a fill that isn't the fill's `on-` role, or a `-container` role used for text or an icon ([color → pairing](../foundations/color.md#pairing), [naming](../foundations/color.md#naming); [pairing and layering](../sources/m3/styles_color_roles.md#pairing-and-layering-colors)).
- **`outline` for dividers or a card's border**, or `outline-variant` as the only boundary of a target ([color → outlines](../foundations/color.md#outlines); [color roles → outline](../sources/m3/styles_color_roles.md#outline)).
- **A home-made red for errors or green for success** outside the error role and an extra static colour ([color → schemes and extra colours](../foundations/color.md#schemes-and-extra-colours); [advanced](../sources/m3/styles_color_advanced.md#define-custom-color-roles)).
- **Fixed accent roles where contrast matters** ([color → add-on roles](../foundations/color.md#add-on-roles)).

## Elevation and shape

- **A changed default elevation**, a resting element at level 4 or 5, or many levels on one screen ([elevation → levels](../foundations/elevation.md#levels); [resting elevation](../sources/m3/styles_elevation.md#resting-elevation-default)).
- **Shadows for separation** where tone would do; a shadow is only for a busy background or to invite interaction ([elevation → shadows](../foundations/elevation.md#shadows); [differences from M2](../sources/m3/styles_elevation.md#differences-from-m2)).
- **Overlapping surfaces in the same colour role** ([elevation → showing elevation](../foundations/elevation.md#showing-elevation); [surface color roles & elevation](../sources/m3/styles_elevation.md#surface-color-roles--elevation)).
- **Arbitrary corner radii** off the shape scale; a nested shape with the same radius as its parent; large or full corners on dense components such as cards ([shape](../foundations/shape.md); [styles → shape](../sources/m3/styles_shape.md#component-changes)).
- **Rounded docked toolbars and app bars** (they keep square corners), **square icon buttons in a floating toolbar** ([navigation → app bars](../components/navigation.md#app-bars), [toolbars](../components/navigation.md#toolbars); [toolbars → flexibility & slots](../sources/m3/components_toolbars.md#flexibility--slots-1)).

## Typography

- **Font sizes off the type scale**, or a changed type size when customising (change the typeface, line height and tracking instead) ([typography → typefaces](../foundations/typography.md#typefaces); [customize the typeface](../sources/m3/styles_typography.md#customize-the-typeface)).
- **Emphasized styles everywhere**: components use baseline styles by default ([typography → emphasized styles](../foundations/typography.md#emphasized-styles); [components](../sources/m3/styles_typography.md#components)).
- **Proportional figures in changing values** (prices updating, timers), so the layout shifts ([typography → readability](../foundations/typography.md#readability)).
- **Labels in all caps or title case**: labels are sentence case ([typography → readability](../foundations/typography.md#readability); [buttons → label text](../sources/m3/components_buttons.md#label-text)).

## States and motion

- **Hover drawn with a different colour** instead of a state layer in the content's colour at 8% (focus and pressed 10%, dragged 16%); two state layers at once ([states → the states](../foundations/states.md#the-states), [state layers](../foundations/states.md#state-layers); [states](../sources/m3/foundations_interaction_states.md#state-layers)).
- **Hover or focus on things that don't take them**: a non-actionable card, an app bar, a dialog ([states → which components take which state](../foundations/states.md#which-components-take-which-state)).
- **No visible keyboard focus ring** on the web ([states → hover, focus, pressed and dragged](../foundations/states.md#hover-focus-pressed-and-dragged); [keyboard focus indicator](../sources/m3/foundations_interaction_states.md#keyboard-focus-indicator)).
- **A disabled FAB**: an unavailable FAB isn't shown ([states → disabled](../foundations/states.md#disabled)).
- **Selection shown by colour alone** ([states → selection](../foundations/states.md#selection), [icons and accessibility → contrast](../foundations/icons-and-accessibility.md#contrast)).
- **Lateral slides between top-level destinations**, container transforms in deep hierarchies, bouncy springs on common transitions, motion that ignores reduced motion ([motion → transition patterns](../foundations/motion.md#transition-patterns), [good transitions](../foundations/motion.md#good-transitions); [transitions](../sources/m3/styles_motion_transitions.md#follows-accessibility-settings)).

## Actions

- **Several high-emphasis buttons** on one screen; a filled button and a FAB emphasised together ([component selection → actions](component-selection.md#actions-by-emphasis); [all buttons → hierarchy](../sources/m3/components_all-buttons.md#hierarchy)).
- **An elevated button on a plain background** (only for patterned ones) ([all buttons → choosing buttons](../sources/m3/components_all-buttons.md#choosing-buttons)).
- **Chips used as buttons**, or buttons used as chips ([inputs → chips](../components/inputs.md#chips); [chips aren't buttons](../sources/m3/components_chips.md#chips-arent-buttons)).
- **Underlined text buttons**, or text buttons used as links in body text ([actions → buttons](../components/actions.md#buttons); [buttons → text style](../sources/m3/components_buttons.md#text-style)).
- **Icon-only buttons with no accessible name or tooltip**, or a name that repeats the role ("Edit button") ([icons and accessibility → accessibility labels](../foundations/icons-and-accessibility.md#accessibility-labels); [do not include the element name in labels](../sources/m3/foundations_designing.md#do-not-include-the-element-name-in-labels)).
- **Targets under 48 × 48** (44 for a pointer), or under 8 apart ([icons and accessibility → targets](../foundations/icons-and-accessibility.md#targets); [touch and pointer target sizes](../sources/m3/foundations_designing.md#touch-and-pointer-target-sizes)).

## Navigation

- **A navigation bar on desktop**, with two destinations or more than five, without labels, or alongside a rail or a toolbar ([navigation → navigation bar](../components/navigation.md#navigation-bar); [navigation bar → usage](../sources/m3/components_navigation-bar.md#usage)).
- **A hidden collapsed rail**, a horizontal rail, or a FAB below the rail's destinations ([navigation → navigation rail](../components/navigation.md#navigation-rail); [navigation rail → container](../sources/m3/components_navigation-rail.md#container)).
- **Truncated or shrunk navigation labels**; an outlined icon on the active destination ([navigation → navigation bar](../components/navigation.md#navigation-bar); [navigation bar → visual indicators](../sources/m3/components_navigation-bar.md#visual-indicators)).
- **Tabs for sequential content**, more than four tabs at once, tabs that scroll behind the app bar ([navigation → tabs](../components/navigation.md#tabs); [tabs → related content](../sources/m3/components_tabs.md#related-content)).
- **An app bar crowded with actions** or several filled icon buttons; a truncated headline ([navigation → app bars](../components/navigation.md#app-bars); [app bars → usage](../sources/m3/components_app-bars.md#usage)).

## Surfaces and feedback

- **Cards for everything**, cards stretched across a wide window, a card that is both actionable and full of actions, scrolling inside a card ([containment → cards](../components/containment.md#cards); [cards → usage](../sources/m3/components_cards.md#usage)).
- **A dialog for low-priority news**, a dialog with three actions, a disabled Cancel, a full-screen dialog on a wide window ([containment → dialogs](../components/containment.md#dialogs); [dialogs → usage](../sources/m3/components_dialogs.md#usage)).
- **A snackbar with an icon, a link or a filled button**, several snackbars stacked, one over the navigation or the FAB, or an auto-closing snackbar as the web's only notice ([feedback → snackbar](../components/feedback.md#snackbar); [feedback placement → snackbar or dialog](feedback-placement.md#snackbar-or-dialog); [snackbar → accessibility requirements for web](../sources/m3/components_snackbar.md#accessibility-requirements-for-web)).
- **Critical information in a tooltip** ([feedback → tooltips](../components/feedback.md#tooltips); [tooltips → usage](../sources/m3/components_tooltips.md#usage)).
- **A spinner over existing content**, one per item in a group, or an indicator for a wait under 200 ms ([feedback placement → waits](feedback-placement.md#waits); [progress indicators → placement](../sources/m3/components_progress-indicators.md#placement)).

## Forms

- **Placeholder text instead of a label**, a label that disappears, is truncated or wraps ([forms → labels](forms.md#labels); [text fields → label text](../sources/m3/components_text-fields.md#label-text)).
- **Filled and outlined fields mixed in one form** ([forms → fields](forms.md#fields); [using both text field variants on the same screen](../sources/m3/components_text-fields.md#using-both-text-field-variants-on-the-same-screen)).
- **Asterisks never explained**, or only some required fields marked ([forms → required fields](forms.md#required-fields); [required text indicator](../sources/m3/components_text-fields.md#required-text-indicator)).
- **Errors in a banner or snackbar** instead of at the field, shown one at a time, shown under the supporting text instead of replacing it, or shown by red alone ([feedback placement → field errors](feedback-placement.md#field-errors); [dialogs → error messages](../sources/m3/components_dialogs.md#error-messages)).
- **A switch inside a form saved by Submit** ([forms → fields](forms.md#fields); [switch → usage](../sources/m3/components_switch.md#usage)).
- **Fields across the full width of a large screen**, dense fields by default ([forms → layout](forms.md#layout); [text fields → adaptive design](../sources/m3/components_text-fields.md#adaptive-design)).

## Layout and structure

- **One layout for every window**: the phone layout stretched on a desktop, or one that only adapts on reload ([adaptive layouts → checks](adaptive-layouts.md#checks); [breakpoints → special considerations](../sources/m3/foundations_layout_breakpoints.md#special-considerations)).
- **Lines of text far over 60 characters** on wide windows ([layout → adapting across breakpoints](../foundations/layout.md#adapting-across-breakpoints)).
- **More than three panes**, or two panes of dense content on medium ([layout → panes](../foundations/layout.md#panes); [scaffold → three-pane layouts](../sources/m3/foundations_layout_scaffold.md#three-pane-layouts)).
- **Swapping components that do different jobs** across breakpoints (a button for a chip) ([layout → adapting across breakpoints](../foundations/layout.md#adapting-across-breakpoints); [5. what should be swapped](../sources/m3/foundations_layout_breakpoints.md#5-what-should-be-swapped)).
- **Headings chosen by size**: several H1s, skipped levels; landmarks missing or labelled with their role ([icons and accessibility → structure](../foundations/icons-and-accessibility.md#structure-web); [2. define headings](../sources/m3/foundations_designing.md#2-define-headings)).
- **A dialog that doesn't take focus**, or doesn't give it back when it closes ([icons and accessibility → focus and keyboard](../foundations/icons-and-accessibility.md#focus-and-keyboard)).
