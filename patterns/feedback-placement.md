# Where feedback goes: field errors, snackbars, dialogs and waits

Sources read: 2026-11-20 ([snapshot](../sources/SNAPSHOT.md)). This file picks where a message or a wait indicator goes; the component files give the values ([feedback](../components/feedback.md), [containment → dialogs](../components/containment.md#dialogs), [inputs → text fields](../components/inputs.md#text-fields)).

## Choosing the place

| What happened | Where it goes |
| --- | --- |
| A field's value is wrong | **Inline**, at the field: a text field's error text, or a message added next to checkboxes and radio buttons |
| Submitting failed for a reason unrelated to the fields (no network) | **Basic dialog**, when the confirming action fails |
| The app did something, low priority, no action needed (Saved, Email archived) | **Snackbar**, on the web also shown inline or with an action |
| Something critical, or a decision that blocks the app | **Basic dialog** |
| A wait of 200 ms – 5 s | **Loading indicator**, centred where the content will appear |
| A wait of over 5 s, or measurable progress | **Progress indicator** |
| New items at a navigation destination | **Badge** on its icon |
| An icon-only element needs a name | **Plain tooltip** |
| A feature or term needs explaining | **Rich tooltip** |

([dialogs → error messages](../sources/m3/components_dialogs.md#error-messages), [dialogs → similar components](../sources/m3/components_dialogs.md#similar-components), [snackbar → similar components](../sources/m3/components_snackbar.md#similar-components), [snackbar → accessibility requirements for web](../sources/m3/components_snackbar.md#accessibility-requirements-for-web), [progress indicators → usage](../sources/m3/components_progress-indicators.md#usage), [loading indicator → usage](../sources/m3/components_loading-indicator.md#usage), [badges → usage](../sources/m3/components_badges.md#usage), [tooltips → usage](../sources/m3/components_tooltips.md#usage))

## Field errors

- **Inline, where the error occurs**, always. Text fields have built-in error text; checkboxes and radio buttons need the message added next to them ([dialogs → error messages](../sources/m3/components_dialogs.md#error-messages)).
- **Below the field, in place of its supporting text**, until the value is fixed. Swapping keeps the layout from jumping; **never show error text as well as supporting text**. A long error may wrap, with enough space between fields that it doesn't push content ([text fields → error text](../sources/m3/components_text-fields.md#error-text), [filled text field error states](../sources/m3/components_text-fields.md#filled-text-field-error-states)).
- **Say how to fix it**: with one possible error, how to avoid it; with several, how to avoid the most likely one. Brief, naming the cause and the fix ([error text](../sources/m3/components_text-fields.md#error-text), [dialogs → error messages](../sources/m3/components_dialogs.md#error-messages)).
- **Show every error at once**, so people fix everything before trying again ([dialogs → error messages](../sources/m3/components_dialogs.md#error-messages)).
- **Not by colour alone**: an **error icon** is strongly recommended as a second cue; its accessible name is "Error" ([error icon](../sources/m3/components_text-fields.md#error-icon), [icons & images](../sources/m3/components_text-fields.md#icons--images), [labeling elements](../sources/m3/components_text-fields.md#labeling-elements)).
- **Announced**: the error message gets the **alert** role. When the field has supporting text too, its accessible description reads the supporting text first, then the error ([labeling elements](../sources/m3/components_text-fields.md#labeling-elements)).

## Snackbar or dialog

| | Snackbar | Dialog |
| --- | --- | --- |
| Priority | low | high |
| Action | optional; it may close by itself | required; it blocks the app until answered or closed |

([snackbar → similar components](../sources/m3/components_snackbar.md#similar-components), [dialogs → similar components](../sources/m3/components_dialogs.md#similar-components))

- **Choose by importance**, so neither is overused: **never a dialog for low or medium priority** ([dialogs → usage](../sources/m3/components_dialogs.md#usage)).
- **A snackbar never carries the only way to a core task**, and holds at most one action ([feedback → snackbar](../components/feedback.md#snackbar)).
- **On the web an auto-closing snackbar isn't enough on its own**: also show the result inline near what triggered it (Save becomes Saved), or give the snackbar an action so it stays ([snackbar → accessibility requirements for web](../sources/m3/components_snackbar.md#accessibility-requirements-for-web)).
- **Focus stays put** for a snackbar (a polite live region announces it); a dialog moves focus to its first interactive element and keeps it inside ([feedback → snackbar](../components/feedback.md#snackbar), [containment → dialogs](../components/containment.md#dialogs)).

## Waits

- **By length**: nothing under 200 ms; a loading indicator for 200 ms – 5 s; a progress indicator beyond 5 s, and consider letting people leave the page ([feedback → progress and loading indicators](../components/feedback.md#progress-and-loading-indicators)).
- **Where**: a linear indicator along the edge of what loads (the top of the page for the whole page); a circular or loading indicator centred on what loads or in the empty space where new items appear, **never over existing content**; one indicator for a group, not one per item ([progress indicators → placement](../sources/m3/components_progress-indicators.md#placement), [loading indicator → placement](../sources/m3/components_loading-indicator.md#placement), [progress indicators → usage](../sources/m3/components_progress-indicators.md#usage)).
- **In a button** after it's pressed: a circular indicator in the button's content colour, with no track; not on every button in a list ([progress indicators in buttons](../sources/m3/components_progress-indicators.md#progress-indicators-in-buttons)).

## Writing the message

- **From the person's point of view, with "you"**, saying what they can do: "Your mail isn't available. Try checking your Wi-Fi connection.", not "Mail not available." ([style guide → use second person pronouns](../sources/m3/foundations_content-design_style-guide.md#use-second-person-pronouns-you)).
- **No "Please", "Sorry" or "Thank you" in error messages**; "please" only when asking for something inconvenient ([global writing → avoid idiomatic, colloquial, and polite expressions](../sources/m3/foundations_content-design_global-writing.md#avoid-idiomatic-colloquial-and-polite-expressions)).
- **No exclamation marks for empty states and common tasks**; keep them for bigger accomplishments ([style guide → use exclamation points sparingly](../sources/m3/foundations_content-design_style-guide.md#use-exclamation-points-sparingly)).
