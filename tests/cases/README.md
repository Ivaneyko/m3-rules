# Test cases

Each case is a task to give an agent that has loaded this repo's `SKILL.md`, and what a correct answer must and must not contain. Run one by hand: paste the task, compare the answer with the checklist. Each checklist line links the rule it tests, so a failed line shows which rule the agent missed.

| File | Cases |
| --- | --- |
| [forms.md](forms.md) | Sign-up form, a settings option saved by Save, an edit dialog on a phone |
| [feedback.md](feedback.md) | Saved, saving failed, loading a list, an upload |
| [navigation.md](navigation.md) | Store navigation across window sizes, two sections, page actions, catalogue categories |
| [actions-and-content.md](actions-and-content.md) | Product page buttons, delete confirmation, filtering a grid, a product grid on phone and desktop |
| [review.md](review.md) | Reviewing a screen with planted mistakes, a value the sources disagree on |

When a rule changes, update the cases that link it; `node scripts/validate.mjs` checks the links.
