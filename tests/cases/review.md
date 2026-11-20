# Cases: review

## Review a screen with planted mistakes

**Task**: "Review this screen against Material 3", given a page that has: a card with a `box-shadow` and `#6750A4` text; a hover effect that darkens the button's background colour; a navigation drawer; a snackbar with an icon and a link; a text field with a placeholder and no label; three filled buttons in a row; headings that jump from H1 to H4.

**The answer must** flag each one, with the rule it breaks ([anti-patterns](../../patterns/anti-patterns.md)):
- the shadow: separation by tone, shadows only on busy backgrounds ([anti-patterns → elevation and shape](../../patterns/anti-patterns.md#elevation-and-shape));
- the hex colour: colour roles only ([anti-patterns → colour](../../patterns/anti-patterns.md#colour));
- the hover: a state layer in the content's colour at 8% ([anti-patterns → states and motion](../../patterns/anti-patterns.md#states-and-motion));
- the drawer: replaced by the expanded navigation rail ([anti-patterns → outdated components](../../patterns/anti-patterns.md#outdated-components));
- the snackbar: text and at most one text button ([anti-patterns → surfaces and feedback](../../patterns/anti-patterns.md#surfaces-and-feedback));
- the field: a visible label ([anti-patterns → forms](../../patterns/anti-patterns.md#forms));
- the buttons: one high-emphasis button per screen ([anti-patterns → actions](../../patterns/anti-patterns.md#actions));
- the headings: no skipped levels ([anti-patterns → layout and structure](../../patterns/anti-patterns.md#layout-and-structure)).

**The answer must not**:
- flag something the rules allow, such as a `surface-container` navigation area on a `surface` background ([color → surfaces](../../foundations/color.md#surfaces));
- state a value that isn't in the rules or the sources.

## A value the rules don't settle

**Task**: "What colour is a text button's label?"

**The answer must**:
- say that the M3 page and the Compose tokens disagree (`primary` against `on-surface-variant`) and name both, instead of picking one silently ([actions → buttons](../../components/actions.md#buttons)).
