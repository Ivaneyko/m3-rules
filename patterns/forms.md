# Forms: fields, labels, required fields, errors and submitting

Sources read: 2026-11-20 ([snapshot](../sources/SNAPSHOT.md)). Component values are in [inputs](../components/inputs.md); where errors go is in [feedback placement](feedback-placement.md#field-errors).

## Fields

- **Text fields must look interactive**, with their state (blank, filled, error) visible at a glance; labels and error messages brief and easy to act on ([text fields](../sources/m3/components_text-fields.md)).
- **One variant per form**: filled and outlined work the same, so choose by the app's style and by what stands out from buttons and nearby content. Both may appear on one screen only in **separate regions** (a filled form with an outlined field in a dialog over it), **never side by side or in the same form** ([choosing text fields](../sources/m3/components_text-fields.md#choosing-text-fields-1), [using both text field variants on the same screen](../sources/m3/components_text-fields.md#using-both-text-field-variants-on-the-same-screen)).
- **The right control for each answer**: checkboxes for several options, radio buttons for one of five or fewer (listed vertically, one always selected), a select (a text field with a menu) for one where space matters, a date picker for a date ([inputs → choosing a selection control](../components/inputs.md#choosing-a-selection-control), [inputs → select](../components/inputs.md#select-text-field-with-a-menu), [inputs → date and time pickers](../components/inputs.md#date-and-time-pickers)).
- **No switches for values saved by a Submit button**: a switch takes effect at once, without Save ([switch → usage](../sources/m3/components_switch.md#usage)).
- **Help the user enter the right value**: a **prefix** (currency) or **suffix** (unit, email domain), and a **character counter** when there's a limit ([prefix text](../sources/m3/components_text-fields.md#prefix-text), [suffix text](../sources/m3/components_text-fields.md#suffix-text), [supporting text & character counter](../sources/m3/components_text-fields.md#supporting-text--character-counter)).
- **Supporting text** says how the value is used, ideally on one line, shown all the time or only on focus ([supporting text & character counter](../sources/m3/components_text-fields.md#supporting-text--character-counter)).
- **Read-only** fields look like the others and are clearly labelled read-only ([read-only fields](../sources/m3/components_text-fields.md#read-only-fields)).

## Labels

- **Every field has a label** saying what's asked, **always visible** (it moves to the top of the field once there's input), aligned with the input, short, **never truncated, never on two lines** ([label text](../sources/m3/components_text-fields.md#label-text)).
- **An adjacent label** may replace the field's own, aligned to the leading edge of the field ([adjacent label](../sources/m3/components_text-fields.md#adjacent-label)).
- **Every radio button and switch has its own label**; tapping a radio button's label selects it ([inputs → radio button](../components/inputs.md#radio-button), [inputs → switch](../components/inputs.md#switch)).

## Required fields

- **An asterisk after the label of every required field**, in the label's colour when required text has its own ([required text indicator](../sources/m3/components_text-fields.md#required-text-indicator)).
- **Explain the asterisk once**, in a single note at the start of the form, or in the field's supporting text ([same](../sources/m3/components_text-fields.md#required-text-indicator)).
- **The accessible name includes the asterisk** (Username*) ([labeling elements](../sources/m3/components_text-fields.md#labeling-elements)).

## Errors

- **Inline at the field, in place of its supporting text, saying how to fix it**; checkboxes and radio buttons get a message next to them ([feedback placement → field errors](feedback-placement.md#field-errors)).
- **All errors at once**, so everything can be fixed before trying again ([dialogs → error messages](../sources/m3/components_dialogs.md#error-messages)).
- **A failure unrelated to the fields** (no network) goes in a basic dialog when submitting fails ([same](../sources/m3/components_dialogs.md#error-messages)).
- **Space the fields** so a wrapped two-line error doesn't push content ([error text](../sources/m3/components_text-fields.md#error-text)).

## Submitting

- **The submit button is a filled button**, the final or unblocking step, and the screen's one high-emphasis button; Cancel or Back is an outlined or text button beside it, not stacked under it when there's room ([all buttons → choosing buttons](../sources/m3/components_all-buttons.md#choosing-buttons), [hierarchy](../sources/m3/components_all-buttons.md#hierarchy), [placement](../sources/m3/components_all-buttons.md#placement)).
- **In a dialog**: the confirming action may be disabled until a choice is made; **the dismissing action never is** ([dialogs → buttons](../sources/m3/components_dialogs.md#buttons)).
- **A form in a dialog**: on compact, a form with typing uses a full-screen dialog (a basic dialog from medium up). Its confirm label says what happens (Send, Create), **never Done, OK or Close**; closing with unsaved changes asks first ([dialogs → full-screen dialog](../sources/m3/components_dialogs.md#full-screen-dialog), [containment → dialogs](../components/containment.md#dialogs)).
- **While submitting**, a progress indicator can sit in the pressed button ([feedback placement → waits](feedback-placement.md#waits)).

## Layout

- **Full width on compact**; from medium up, fields sit within flexible margins or a container, with minimum and maximum widths, and **never across the full width of a large screen** ([text fields → adaptive design](../sources/m3/components_text-fields.md#adaptive-design)).
- **Density is opt-in**, never the default: dense fields drop below **48 × 48** targets, so offer a denser layout as a choice, with its own controls at least 48 × 48 ([avoid applying density by default](../sources/m3/components_text-fields.md#avoid-applying-density-by-default)).
- Aim for **3:1** contrast between an outlined field's outline and the background ([text fields → interaction & style](../sources/m3/components_text-fields.md#interaction--style)).

## Accessibility

- **Tab** reaches every enabled field ([text fields → keyboard navigation](../sources/m3/components_text-fields.md#keyboard-navigation)).
- **Supporting text is announced with the field**; the counter as "Character count, 5/20" ([labeling elements](../sources/m3/components_text-fields.md#labeling-elements)).
- **Interactive icons are named by what they do** and change name with state (Show password, Hide password); a decorative error icon is "Error" ([same](../sources/m3/components_text-fields.md#labeling-elements)).
