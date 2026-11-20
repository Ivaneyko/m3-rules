# Cases: forms

## Sign-up form

**Task**: "Build a sign-up form with name, email, password and date of birth. Name, email and password are required."

**The answer must**:
- give every field a visible label that stays visible while typing ([forms → labels](../../patterns/forms.md#labels));
- put an asterisk after the label of every required field and explain it once, at the start of the form or in supporting text ([forms → required fields](../../patterns/forms.md#required-fields));
- use one text field variant, filled or outlined, for the whole form ([forms → fields](../../patterns/forms.md#fields));
- show errors at the field, in place of its supporting text, saying how to fix them, all at once on submit ([feedback placement → field errors](../../patterns/feedback-placement.md#field-errors));
- add an error icon and give the error message the alert role ([same](../../patterns/feedback-placement.md#field-errors));
- use modal input or the docked date picker for the date of birth, not the modal calendar picker ([inputs → date and time pickers](../../components/inputs.md#date-and-time-pickers));
- make the submit button a filled button ([forms → submitting](../../patterns/forms.md#submitting)).

**The answer must not**:
- use placeholders as labels;
- show errors in a snackbar or a banner;
- mix filled and outlined fields;
- stretch the fields across the full width of a large screen ([forms → layout](../../patterns/forms.md#layout)).

## Settings page with a newsletter option

**Task**: "Add an 'Email me the newsletter' option to the account settings form, which is saved with the Save button."

**The answer must**:
- use a checkbox, because the value is saved by Save ([forms → fields](../../patterns/forms.md#fields));
- give the checkbox an adjacent label, which also selects it ([checkbox → labeling elements](../../sources/m3/components_checkbox.md#labeling-elements)).

**The answer must not**:
- use a switch: a switch takes effect at once, without Save ([inputs → switch](../../components/inputs.md#switch)).

## Edit dialog on a phone

**Task**: "On a phone, the user edits their delivery address in a dialog."

**The answer must**:
- use a full-screen dialog on compact, and a basic dialog from medium up ([containment → dialogs](../../components/containment.md#dialogs));
- label the confirm action by what it does (Save), never Done, OK or Close;
- ask before closing with unsaved changes.

**The answer must not**:
- disable the dismiss action ([forms → submitting](../../patterns/forms.md#submitting)).
