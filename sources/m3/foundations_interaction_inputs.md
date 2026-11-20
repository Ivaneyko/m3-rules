# Inputs

> Inputs are devices that provide interactive control of an app. Common inputs include a mouse, keyboard, or touchpad.

slug: inputs  |  updated: 2026-07-17T05:07:20.540Z

<!-- section: Tab 1 -->

- Design for touch, keyboard, and mouse interactions
- Embrace multiple input methods and gestures within your app

_footer: Designing for inputs allows people to use the inputs they prefer, like a mouse to highlight text on a tablet_
_altText: Editing interface on a large screen device. The selected text is highlighted and the text cursor is visible._

## External inputs for devices

People can use external inputs like a mouse, keyboard, or stylus with their phone, tablet, foldable, TV, laptop, or desktop computer. When someone connects an external input to their device, they expect it to behave in familiar and useful ways. Designing for different input methods can make a product more usable and accessible on all screen sizes.

### Common features of external inputs

#### **Mouse**

- Left and right click
- Mouse wheel
- Extra buttons

#### **Trackpad**

- Left and right click
- Gestures
- Haptics

#### **Physical keyboard**

- Replaces virtual keyboard
- Media keys
- Modifier keys

_altText: Image of a mouse._

_altText: Image of a laptop keyboard and trackpad._

_altText: Image of a keyboard._

### Input device behaviors

Depending on the input device, designers and developers can implement behaviors that meet standard conventions and user expectations.
Input device action | Anticipated behavior |
Mouse and trackpad movement
 | Show a mouse cursor on the screen |
Primary click
 | Treat mouse clicks differently than touch events |
Secondary click
 | Activate context menus |
Hover
 | Change component states |
Highlight | Allow text to be selected by the mouse cursor |
Mouse wheel and trackpad two finger drag | Scroll list vertically and horizontally |
Trackpad pinch
 | Zoom an element or page |
Physical keyboard
 | Hide and show on screen keyboard |

## Mouse and cursor interactions

When an external mouse input device is used, a mouse cursor should be shown, regardless of the device type. 

A mouse may be connected to tablets, laptops, phones, foldables, and more. On some devices, it's possible to use an external input device simultaneously with touch input. 

On devices that don't specifically recognize mouse or stylus input, the mouse is treated as touch input.

### Primary click

A mouse click or stylus tap should demonstrate the same feedback as touch input. One example of this is showing the ripple for a pressed state.

_footer: A visible mouse cursor is seen when the external input is connected_
_altText: A view of a display with a visible mouse cursor._

### Secondary click

#### Context menus

A secondary click (whether using a single button or two fingers on a trackpad) should activate a context menu. The context menu shows additional options for the object that's clicked. See [menus](/m3/pages/menus/overview) for more usage and guidelines.

_footer: The context menu should appear when right clicking with a mouse or trackpad_
_altText: A context menu pop up from a link with the options: Open link in new window, Save link as, Copy link location, and Inspect._

### Hover

When using a mouse cursor, help users discover interactive objects by enabling visual changes. When the mouse rests on an interactive element, the hover state is a valuable cue for interaction. See [states](/m3/pages/interaction-states/applying-states#71c347c2-dd75-485b-892e-04d2900bd844) for styles and guidelines.

Hovering with a cursor (or stylus) should also invoke tooltips when applicable. See [tooltips](/m3/pages/tooltips/overview) for guidance.

_footer: - Components without a hover state - Components with a hover state change applied_
_altText: Icon button, floating action button, and menu items in their hovered and not hovered states._

### Cursors

Cursors appear when using external input devices like a mouse or trackpad. The cursor can change to communicate more information about interactive elements.

#### Pointer

By default, external input control should be rendered as a pointer.

_footer: - A pointer provides a visible indicator for input controls_
_altText: A cursor rendered as a pointer._

#### Hand

The cursor should appear as a hand to indicate links or linked images.

_footer: - The hand cursor is used for links and clickable images_
_altText: A link cursor (hand) shown when hovering over a linked image._

#### Resize arrows

The cursor should change to resize arrows on the boundaries of resizable elements.

_footer: - Resize arrows indicate an element can be resized_
_altText: A cursor at the edge of the screen as resize arrows._

#### I-beam

The cursor should appear as an I-beam when hovering on text. When manipulating editable text, the following interactions apply:

- Single click places the cursor
- Double click selects a word
- Triple click selects a paragraph
- Single click deselects text and repositions the cursor

_footer: - An I-beam cursor indicates selectable text_
_altText: I-beam cursor hovering over selectable text._

### Text selection

When selecting text using a mouse, trackpad, or stylus:

- Highlight the selected area using a single color
- Don’t show touch controls next to the highlighted area

_footer: - Selected text shows a visible highlight_
_altText: Highlighted text in a single color._

### Text selection with touch control

When interacting using touch, always show touch controls, even if other inputs are connected.

When using a mouse, trackpad, or stylus, show the I-beam and context menu, even if it's a touch device.

_footer: When using a touchscreen to select text, show touch controls_
_altText: Touch controls are produced on selected text, with mouse and trackpad detected._

_footer: When using a mouse, trackpad, or stylus to select text, use the right-click context menu_
_altText: Selected text with a context menu, with mouse and trackpad detected._

### Stylus input

When using a stylus, cursors are usually not necessary, unless they communicate tool properties such as brush size or shape.

_footer: - The circle cursor indicates the selected stylus tool and size_
_altText: A cursor rendered as a circle._

## Mouse wheel and trackpad gestures

When an external mouse or touchpad is used, the mouse wheel and trackpad gesture allow more actions.

### Vertical scroll

When a cursor is positioned on a list, the mouse wheel and two-finger touchpad gesture should allow vertical scrolling of the list.

_footer: Scrolling a vertical list using the mouse wheel or trackpad gestures. Note that only the detail panel under the cursor scrolls._
_altText: Stationary cursor over a scrolling field controlled by a mouse wheel or trackpad._

### Touch scroll & mouse text selection

Upon touch and drag gesture, the text area will scroll. With a mouse interaction, dragging in a text area will select the text.

_footer: On a touch screen, dragging upward scrolls the field down_
_altText: Animation of a swipe gesture to scroll the screen._

_footer: When using a mouse, dragging upward selects text and images_
_altText: Animation showing a dragging gesture with a mouse to select text and image._

### Horizontal scroll

Mouse users should be able to scroll with a mouse wheel to navigate horizontally scrolling fields. Trackpad users should be able to scroll using a two-finger horizontal gesture.

_footer: Carousels can scroll horizontally using a scroll wheel or trackpad_
_altText: A news feed of horizontally scrolling cards._

## Physical keyboard

When a physical keyboard is connected to a device, either externally or as a built-in laptop keyboard, users should be able to perform any actions that the virtual keyboard provides, and more.

### Show and hide virtual keyboard

A virtual keyboard should appear or hide in response to the presence of a physical keyboard.

_footer: When a physical keyboard is attached, hide the virtual keyboard_
_altText: Text being entered into a field with no on-screen keyboard displayed._

_footer: When a physical keyboard is removed, show the virtual keyboard_
_altText: Text being entered into a field with an on-screen keyboard._

### Common keyboard interactions

#### Enter key

People typically expect the **E****nter** key on a physical keyboard to be enabled by developers to allow a common function like sending a message.

_footer: The**Enter**key typically triggers actions like sending a message_
_altText: A message being typed into a chat, and sent using the Enter key._

#### Spacebar control

People typically expect the **Spacebar** (or available media keys) to be enabled to play and pause music or video.

_footer: Pressing **Space** usually pauses and plays media_
_altText: A video being paused and resumed by pressing the Spacebar._

#### Tab focus

When keyboard users navigate a page using **Tab**, the focus on interactive items must follow a logical order. On most pages, that means left to right, top to bottom.

When focused from a keyboard or other input device, the focus state includes a ring-like keyboard focus indicator.

_footer: Tab focus includes a visible keyboard focus indicator_
_altText: Tab focus is on “small,” which is one of four size options for sweatshirts at an online store._

_footer: The focus state moves elements as the user presses **Tab** on their keyboard_
_altText: Tab focus is on “medium,” which is one of four size options for sweatshirts at an online store._

#### Escape key

People typically expect the **Escape** key on a physical keyboard to dismiss elements, remove focus, or clear selections.

_footer: The **Escape** key should dismiss any visible modal elements like menus, dialogs, or bottom sheets_
_altText: Escape key dismisses menu._

_footer: The **Escape** key should remove any visible focus indicators and set the focus order to 0_
_altText: Escape key removes focus indicator from icon._

_footer: The **Escape** key should remove the text cursor when typing, but should not remove already-typed text_
_altText: Escape key dismisses text cursor and leaves text itself unchanged._
