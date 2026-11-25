# Changelog

Each version is a git tag (`vX.Y.Z`) on `main`; `npm run sync` copies a tagged version into a project. A minor version adds rules, files or sections; a patch version fixes or completes existing rules.

## 0.2.0 (2026-11-25)

Rules the snapshot had and the rule files left out ([#15](https://github.com/Ivaneyko/m3-rules/issues/15), [#16](https://github.com/Ivaneyko/m3-rules/pull/16)).

### Added

- **Select** (text field with a menu) and **scroll fields** in `components/inputs.md`.
- **Navigation drawer** in `components/navigation.md`, marked no longer recommended, for existing drawers.
- **New foundation files**: `foundations/rtl.md` (right-to-left), `foundations/input-methods.md` (mouse, keyboard, touch, gestures), `foundations/writing.md` (UI text, translation, alt text, truncation, 200% text, notifications), `foundations/tokens.md` (design tokens).
- **Desktop** section in `patterns/adaptive-layouts.md`.
- **Component dimensions**: text field padding and spacing; menu widths and item heights; chip padding; card, carousel, divider, full-screen dialog, sheet, search, slider (XS–XL), tooltip, badge, switch, date and time picker and progress indicator sizes.
- **Keyboard, accessible names and initial focus** for checkbox, radio, switch, chips, menus, slider, search, date and time pickers, lists, cards, carousel, icon buttons, button groups, split button, FABs, dialogs, sheets, tooltips, badges, progress and loading indicators.
- **Behaviour**: menu placement, context menus, submenus and adaptive menus; FAB and extended FAB motion; date picker ranges and date input rules; search results.
- Static and dynamic colour sources in `foundations/color.md`; padding steps and spacers in `foundations/layout.md`; the web implementation status in `SKILL.md`.

### Changed

- The snackbar names the disagreement between the page (two lines 64 high on compact) and the tokens (68).
- Open notes for the checkbox keyboard table (a copy of the chips one) and the alt text length (140 or 125 characters).

### Removed

- The side sheet Open note claiming the padding values had no labels.

## 0.1.2 (2026-11-20)

### Changed

- FAB size by context, connected button group inner corners and minimum width, side sheet bottom actions ([#13](https://github.com/Ivaneyko/m3-rules/issues/13), [#14](https://github.com/Ivaneyko/m3-rules/pull/14)).

## 0.1.1 (2026-11-20)

### Changed

- `SKILL.md` asks before reading `sources/`, one section at a time ([#11](https://github.com/Ivaneyko/m3-rules/issues/11), [#12](https://github.com/Ivaneyko/m3-rules/pull/12)).

## 0.1.0 (2026-11-20)

First version ([#5](https://github.com/Ivaneyko/m3-rules/pull/5)).

- Repository skeleton, the source snapshot of m3.material.io and the Compose tokens, and `npm run validate`.
- Foundations, components, patterns, anti-patterns and test cases.
- `npm run sync` to copy a tagged version into a project.
