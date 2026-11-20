# Icons and accessibility

Sources read: 2026-11-20 ([snapshot](../sources/SNAPSHOT.md)). On the web `1dp` is `1px`.

## Icons

- **Material Symbols** are the default, in three styles: **outlined** (light, for dense UIs), **rounded** (pairs with heavier type and curved brands) and **sharp** (straight corners, legible small). Legacy Material Icons still exist but have no variable axes ([icons → styles](../sources/m3/styles_icons.md#icon--material-symbol-styles)).
- **Sizes**: **24dp** standard; also **20dp** (desktop, dense layouts), **40dp and 48dp** (beside display or headline type, larger screens) ([icon sizes and layout](../sources/m3/styles_icons.md#icon-sizes-and-layout)). A component sets its own icon size; it's in the component file.
- **Four axes** ([customizing symbols](../sources/m3/styles_icons.md#customizing-symbols)):
  - **Weight** 100–700. **At 24dp, at least 200.** Apply one weight consistently; don't mix weights ([weight](../sources/m3/styles_icons.md#weight)).
  - **Fill** 0–1: shows a change of state, such as unselected (0) and selected (1) in a navigation bar ([fill](../sources/m3/styles_icons.md#fill)).
  - **Grade**: finer than weight. Default **0 for a dark icon on a light background, −25 for a light icon on a dark one**, to correct visual bleed; positive grade emphasises an active state; match a text font's grade when it has one ([grade](../sources/m3/styles_icons.md#grade)).
  - **Optical size** 20–48dp: keeps the stroke right as the icon scales, instead of scaling a 24dp vector ([optical sizes](../sources/m3/styles_icons.md#optical-sizes)).
- **With text**: the same size and the same optical weight as the text beside it; lower the icon's baseline about **11.5% of the text size** ([using Material Symbols with typography](../sources/m3/styles_icons.md#using-material-symbols-with-typography)).
- **Labels**: an icon without a label must be unambiguous; **navigation items always have labels**. Below **20dp**, complex icons and icons for key actions need a text label; simple ones (rating stars) don't ([icons → accessibility](../sources/m3/styles_icons.md#icons-with-a-label-text), [small icons](../sources/m3/styles_icons.md#small-icons), [localizing icons](../sources/m3/styles_icons.md#localizing-icons)).
- **Localise** icons when locales read them differently (a cart, a bag or a basket at checkout) ([localizing icons](../sources/m3/styles_icons.md#localizing-icons)).

## Targets

- **Touch targets at least 48×48dp** (about 9mm), larger than the element's visual bounds where needed: a 24dp icon sits in a 48dp target ([designing → touch and pointer target sizes](../sources/m3/foundations_designing.md#touch-and-pointer-target-sizes); [icons → target size](../sources/m3/styles_icons.md#target-size)).
- **Pointer targets at least 44×44dp** ([pointer targets](../sources/m3/foundations_designing.md#pointer-targets)). Where mouse and keyboard are the main input, a 20dp icon may use a **40dp** target ([icons → target size](../sources/m3/styles_icons.md#target-size)).
- **8dp or more between targets** ([target spacing](../sources/m3/foundations_designing.md#target-spacing)).

## Contrast

- Text: **3:1 for large text** (14pt bold or 18pt regular and up) **and graphics, 4.5:1 for small text**. **Disabled elements are exempt** ([designing → contrast ratios](../sources/m3/foundations_designing.md#contrast-ratios)).
- Non-text elements in a **cluster** (a group of buttons) need **3:1 between their container and the background**, so each can be told apart. A **standalone** prominent element such as a FAB doesn't ([clustering elements](../sources/m3/foundations_designing.md#clustering-elements)).
- Don't rely on one cue for meaning: hierarchy uses several cues together (colour, shape, text, motion) ([hierarchy](../sources/m3/foundations_designing.md#hierarchy)); a state has two visual indicators ([states](states.md#state-layers)).

## Structure (web)

- **Reading order is the HTML's order**: screen readers follow the DOM top-down, whatever CSS draws ([visual hierarchy](../sources/m3/foundations_designing.md#visual-hierarchy)).
- **Landmarks**: navigation (several allowed, each labelled differently), search, **one main**, **one banner** (header), complementary (a sidebar that stands alone), **one contentinfo** (footer), region (labelled, may sit in main), form ([1. define landmarks](../sources/m3/foundations_designing.md#1-define-landmarks)).
- **Label** every region and every landmark that appears more than once; **never repeat the role in the label** ([add accessibility labels](../sources/m3/foundations_designing.md#add-accessibility-labels)).
- **Headings** follow the content's hierarchy, not its styling: **one H1** for the page title, **no skipped levels**, H1–H6 in order. Visual size doesn't have to match the level ([2. define headings](../sources/m3/foundations_designing.md#2-define-headings), [consider hierarchy in addition to style](../sources/m3/foundations_designing.md#consider-hierarchy-in-addition-to-style)).

## Focus and keyboard

- Every task works with **Tab, the arrow keys and other common keys**. Keep the **default tab order** (the DOM: left to right, top to bottom) unless a journey needs special handling ([focus order & key traversal](../sources/m3/foundations_designing.md#focus-order--key-traversal), [use defaults](../sources/m3/foundations_designing.md#use-defaults)).
- Define the **initial focus** of a screen (on the element for the most common goal) and of components with several interactive parts. **A dialog takes focus when it opens, and focus returns to the element that opened it when it closes** ([2. define initial focus](../sources/m3/foundations_designing.md#2-define-initial-focus-and-component-level-focus)).
- **Tab** moves between interactive elements (Shift+Tab back); **arrow keys** move inside a component (menu items, cells); **Enter** activates a link or button or submits a form. A group of related controls may be one tab stop, traversed with the arrows ([3. define any atypical key traversal](../sources/m3/foundations_designing.md#3-define-any-atypical-key-traversal-through-the-page-and-components)).
- **Keyboard shortcuts** use two or more keys by default, and are listed somewhere in the product. A single-key shortcut must be remappable to include a non-printable key (preferred), or work only while its component has focus ([keyboard shortcuts → requirements](../sources/m3/foundations_designing.md#requirements)).

## Accessibility labels

- **Need a label**: interactive icons or buttons without enough visible text (a pencil edit button), interactive images, visual cues (progress, errors), meaningful icons and images ([visual elements that need labels](../sources/m3/foundations_designing.md#visual-elements-that-need-labels)); generic links ("Learn more") and generic buttons repeated on a page ("Save") ([text elements need labels](../sources/m3/foundations_designing.md#text-elements-need-labels-to-add-additional-context)).
- **Need no label**: non-interactive text (screen readers read it), buttons whose text is enough ("Download image") ([elements that do not need labels](../sources/m3/foundations_designing.md#elements-that-do-not-need-labels)).
- **Never put the role in the label** ("Edit", not "Edit button"): the role is added from the element ([do not include the element name in labels](../sources/m3/foundations_designing.md#do-not-include-the-element-name-in-labels)).
- A label describes the element's **purpose**, briefly, not its look ([how to add labels](../sources/m3/foundations_designing.md#1-label-elements)).
