# Cases: navigation

## Store navigation across window sizes

**Task**: "A store has four sections: Home, Catalogue, Basket and Account. Design its navigation for phone, tablet and desktop."

**The answer must**:
- use a navigation bar on compact, with labels on every item ([navigation → navigation bar](../../components/navigation.md#navigation-bar));
- choose a navigation bar or a rail on medium by the layout: a rail for one pane, a bar for two ([layout → navigation by breakpoint](../../foundations/layout.md#navigation-by-breakpoint));
- use a navigation rail from expanded up ([navigation → navigation rail](../../components/navigation.md#navigation-rail));
- show the active destination with a filled icon and the active indicator, on one item only.

**The answer must not**:
- show a navigation bar and a rail at the same time;
- use a navigation bar on desktop;
- use a navigation drawer (replaced by the expanded rail) ([navigation → replaced in M3 Expressive](../../components/navigation.md#replaced-in-m3-expressive)).

## Two sections

**Task**: "An app has only two top-level pages. Add a navigation bar."

**The answer must**:
- refuse the navigation bar, which needs three to five destinations, and use tabs instead ([component selection → navigation](../../patterns/component-selection.md#navigation)).

## Order details page actions

**Task**: "An order details page needs Print, Refund, Resend invoice, Mark as shipped and Cancel order."

**The answer must**:
- keep at most two actions in the app bar and put the rest in a toolbar ([navigation → app bars](../../components/navigation.md#app-bars));
- emphasise one action at most ([navigation → toolbars](../../components/navigation.md#toolbars)).

**The answer must not**:
- put five icon buttons or several filled buttons in the app bar;
- show a toolbar together with a navigation bar.

## Catalogue categories

**Task**: "Split a catalogue page into Covers, Sleeves and Accessories."

**The answer must**:
- use primary tabs under the app bar, since these are related content at one level ([navigation → tabs](../../components/navigation.md#tabs)).

**The answer must not**:
- add these as navigation bar destinations;
- let the tabs scroll behind the app bar.
