# Input methods: mouse, keyboard, touch and gestures

Sources read: 2026-11-20 ([snapshot](../sources/SNAPSHOT.md)). Design for **touch, keyboard and mouse together**; people mix them on every kind of device ([inputs](../sources/m3/foundations_interaction_inputs.md), [external inputs for devices](../sources/m3/foundations_interaction_inputs.md#external-inputs-for-devices)).

## Mouse, trackpad and stylus

| Input | Expected behaviour |
| --- | --- |
| Moving the mouse or trackpad | Show a cursor, on any device |
| Primary click (or stylus tap) | The same feedback as touch, such as the pressed ripple |
| Secondary click (right-click, two-finger tap) | Opens a **context menu** for the clicked object ([menus](../components/inputs.md#menus)) |
| Hover | The hover state, and a tooltip where one applies |
| Mouse wheel, two-finger drag | Scrolls lists vertically and horizontally; horizontal scrolling areas scroll with the wheel too |
| Trackpad pinch | Zooms an element or the page |

([input device behaviors](../sources/m3/foundations_interaction_inputs.md#input-device-behaviors), [primary click](../sources/m3/foundations_interaction_inputs.md#primary-click), [context menus](../sources/m3/foundations_interaction_inputs.md#context-menus), [hover](../sources/m3/foundations_interaction_inputs.md#hover), [vertical scroll](../sources/m3/foundations_interaction_inputs.md#vertical-scroll), [horizontal scroll](../sources/m3/foundations_interaction_inputs.md#horizontal-scroll))

- **Cursors**: the pointer by default; a **hand** on links and linked images; **resize arrows** on the edges of resizable elements; an **I-beam** over text ([cursors](../sources/m3/foundations_interaction_inputs.md#cursors)).
- **Editable text**: a click places the caret, a double click selects a word, a triple click a paragraph. Dragging with a mouse selects text; dragging with touch scrolls ([i-beam](../sources/m3/foundations_interaction_inputs.md#i-beam), [touch scroll & mouse text selection](../sources/m3/foundations_interaction_inputs.md#touch-scroll--mouse-text-selection)).
- **Selected text** is highlighted in one colour, with no touch handles when selected by mouse, trackpad or stylus; touch always shows the handles ([text selection](../sources/m3/foundations_interaction_inputs.md#text-selection), [text selection with touch control](../sources/m3/foundations_interaction_inputs.md#text-selection-with-touch-control)).
- A **stylus** needs no cursor unless it shows the tool (brush size or shape) ([stylus input](../sources/m3/foundations_interaction_inputs.md#stylus-input)).

## Physical keyboard

- **Everything the virtual keyboard does works from a physical one**, and the virtual keyboard hides while a physical one is present ([physical keyboard](../sources/m3/foundations_interaction_inputs.md#physical-keyboard), [show and hide virtual keyboard](../sources/m3/foundations_interaction_inputs.md#show-and-hide-virtual-keyboard)).
- **Enter** does the common action (sends a message); **Space** or the media keys play and pause; **Esc** dismisses, removes focus or clears a selection ([enter key](../sources/m3/foundations_interaction_inputs.md#enter-key), [spacebar control](../sources/m3/foundations_interaction_inputs.md#spacebar-control), [escape key](../sources/m3/foundations_interaction_inputs.md#escape-key)).
- **Tab** follows a logical order, usually left to right and top to bottom, with a visible focus ring ([tab focus](../sources/m3/foundations_interaction_inputs.md#tab-focus); [focus and keyboard](icons-and-accessibility.md#focus-and-keyboard)).

## Gestures

| Gesture | Does |
| --- | --- |
| Tap | Goes to a destination or uses an element |
| Double tap | Zooms in and out |
| Long press | Opens extra functions |
| Scroll and pan | Moves through content in any direction |
| Swipe | Switches peer views (tabs) or completes an action |
| Drag | Moves elements; slides surfaces in and out |
| Long press and drag | Reorders content |
| Pinch | Scales surfaces |

([types of gestures](../sources/m3/foundations_interaction_gestures.md#types-of-gestures))

- **Elements follow a gesture in real time**, and gestures can flow into each other (panning then pinching a map) ([gestures](../sources/m3/foundations_interaction_gestures.md), [compound gestures](../sources/m3/foundations_interaction_gestures.md#compound-gestures)).
- Dragging and swiping on cards and lists need another way to the same action, such as a menu or a more icon ([cards → dragging and dismissing](../sources/m3/components_cards.md#dragging-and-dismissing), [lists → swipe](../sources/m3/components_lists.md#swipe)); in RTL, swipes mirror ([right-to-left](rtl.md#mirroring)).
