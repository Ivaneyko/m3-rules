# Cases: actions and content

## Product page buttons

**Task**: "A product page has Add to basket, Add to wishlist, Share and Size guide."

**The answer must**:
- make one button the high-emphasis one (Add to basket, filled) ([component selection → actions, by emphasis](../../patterns/component-selection.md#actions-by-emphasis));
- use lower emphasis for the rest: icon buttons for wishlist and share, a text button for the size guide;
- name icon-only buttons by their action, without the role ("Share", not "Share button") ([icons and accessibility → accessibility labels](../../foundations/icons-and-accessibility.md#accessibility-labels)).

**The answer must not**:
- use several filled buttons;
- use an elevated button on a plain background;
- give any target less than 48 × 48 ([icons and accessibility → targets](../../foundations/icons-and-accessibility.md#targets)).

## Delete a product

**Task**: "Confirm before deleting a product."

**The answer must**:
- use a basic dialog with two actions: the confirming one (Delete) nearest the trailing edge and the dismissing one (Cancel) before it ([containment → dialogs](../../components/containment.md#dialogs)).

**The answer must not**:
- add a third action;
- use a snackbar for the confirmation.

## Filtering a product grid

**Task**: "Let customers filter products by colour and material."

**The answer must**:
- use filter chips named by what they include, with a check mark when selected ([inputs → chips](../../components/inputs.md#chips));
- place the filters outside the grid of cards, applying to all of them ([containment → cards](../../components/containment.md#cards)).

**The answer must not**:
- use buttons as filters;
- mix single-select and multi-select chip sets on one page.

## Product grid on a phone and a desktop

**Task**: "Show 40 products as cards on a phone and on a wide desktop."

**The answer must**:
- use the feed layout: one column on compact, more columns as the window grows ([adaptive layouts → choosing a canonical layout](../../patterns/adaptive-layouts.md#choosing-a-canonical-layout));
- keep each card either one actionable target or a container of actions, not both ([containment → cards](../../components/containment.md#cards)).

**The answer must not**:
- stretch cards across the full width of the desktop window;
- give cards large or full corners ([shape](../../foundations/shape.md)).
