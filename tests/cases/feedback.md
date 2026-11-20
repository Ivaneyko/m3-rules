# Cases: feedback

## Saved

**Task**: "After the user saves a product on a web admin page, tell them it was saved."

**The answer must**:
- use a snackbar, because the news is low priority ([feedback placement → choosing the place](../../patterns/feedback-placement.md#choosing-the-place));
- also show it inline near the Save button (Save becomes Saved), or give the snackbar an action so it doesn't close by itself, because an auto-closing snackbar alone is inaccessible on the web ([feedback placement → snackbar or dialog](../../patterns/feedback-placement.md#snackbar-or-dialog));
- announce the snackbar through a polite live region without moving focus ([feedback → snackbar](../../components/feedback.md#snackbar)).

**The answer must not**:
- use a dialog;
- put an icon, a link or a filled button in the snackbar.

## Saving failed

**Task**: "The save request fails because the network is down."

**The answer must**:
- show the failure in a basic dialog when the confirming action fails, since it isn't about a field ([feedback placement → choosing the place](../../patterns/feedback-placement.md#choosing-the-place));
- say what happened and what the user can do, with "you" and without "Sorry" or "Please" ([feedback placement → writing the message](../../patterns/feedback-placement.md#writing-the-message)).

## Loading a list

**Task**: "A product list takes 1–3 seconds to load. Show that it's loading."

**The answer must**:
- use a loading indicator for a wait of 200 ms to 5 s ([feedback placement → waits](../../patterns/feedback-placement.md#waits));
- centre it where the list will appear, with one indicator for the whole list.

**The answer must not**:
- place it over existing content;
- show one indicator per item;
- turn the loading indicator into a progress indicator.

## Upload

**Task**: "Show the progress of a 2-minute video upload."

**The answer must**:
- use a determinate progress indicator showing real progress ([feedback → progress indicators](../../components/feedback.md#progress-indicators));
- consider letting the user leave the page while it uploads ([feedback → progress and loading indicators](../../components/feedback.md#progress-and-loading-indicators)).
