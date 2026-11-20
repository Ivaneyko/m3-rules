---
name: m3-rules
description: Material 3 Expressive rules for building and reviewing web UI, taken from m3.material.io and the Material 3 tokens. Use when choosing, building, styling or reviewing a Material component, a layout or a screen, or when checking a value (size, colour role, shape, elevation, motion, state) against M3.
---

# Material 3 rules

What Material 3, in its current **M3 Expressive** version, says about foundations, components and patterns, written for the web (`1dp` is `1px`). These rules are project-neutral: they say nothing about a component library, a theme's colours, a typeface or a product's screens. A project keeps those in its own rule files, next to a copy of this one.

## Which file

Read this file, then **only the files your task touches**.

| You are… | Read |
| --- | --- |
| using a state (hover, focus, pressed, dragged, disabled) or showing selection | [foundations/states.md](foundations/states.md) |
| choosing colour roles, outlines or surfaces, or adding a brand or extra colour | [foundations/color.md](foundations/color.md) |
| setting type: the type scale, emphasized styles, typefaces, web units | [foundations/typography.md](foundations/typography.md) |
| choosing corner radii, nesting shapes, or using expressive shapes | [foundations/shape.md](foundations/shape.md) |
| choosing elevation, shadows or a scrim | [foundations/elevation.md](foundations/elevation.md) |
| animating: springs, their CSS curves, easing, durations, transitions, reduced motion | [foundations/motion.md](foundations/motion.md) |
| laying out a screen: breakpoints, panes, canonical layouts, spacing, density | [foundations/layout.md](foundations/layout.md) |
| using icons, sizing targets, contrast, landmarks, headings, focus order, accessibility labels | [foundations/icons-and-accessibility.md](foundations/icons-and-accessibility.md) |
| working with a button, icon button, button group, split button or FAB | [components/actions.md](components/actions.md) |
| working with a card, list, divider, carousel, dialog, bottom or side sheet | [components/containment.md](components/containment.md) |
| working with a snackbar, tooltip, badge, progress or loading indicator | [components/feedback.md](components/feedback.md) |
| working with a text field, checkbox, radio button, switch, chip, menu, slider, search, date or time picker | [components/inputs.md](components/inputs.md) |
| working with an app bar, navigation bar, navigation rail, tabs or a toolbar | [components/navigation.md](components/navigation.md) |
| choosing a component for a task | [patterns/component-selection.md](patterns/component-selection.md) |
| placing a field error, snackbar, dialog or wait indicator | [patterns/feedback-placement.md](patterns/feedback-placement.md) |
| building a form: fields, labels, required fields, errors, submitting | [patterns/forms.md](patterns/forms.md) |
| making a screen work across window sizes | [patterns/adaptive-layouts.md](patterns/adaptive-layouts.md) |
| reviewing UI against M3 (a checklist of mistakes) | [patterns/anti-patterns.md](patterns/anti-patterns.md) |

## Source contract

M3 publishes exact values, and a plausible number that isn't M3's looks exactly like one that is.

1. **Every value and every rule comes from a source in [sources/](sources/SNAPSHOT.md), never from memory.** A rule file links the source file it took each part from.
2. **The order of sources**: the m3.material.io page (`sources/m3/`), then the Compose tokens (`sources/tokens/`) for values the page shows only in a picture. When they disagree, the rule says so and names both.
3. **What the sources don't settle is written as open**, never filled in with a guess.
4. **When a source changes**, `npm run refresh` takes a new snapshot; every rule file whose sources changed is checked again and gets a new `Sources read` date.
5. If these rules don't answer a question, read the page in `sources/m3/` (or on m3.material.io, in a browser: the site draws its text with JavaScript) before answering.

## M3 Expressive at a glance

Expressive is an update of Material 3, not a new version. It replaces some components (details in the component files):

| No longer recommended | Use instead |
| --- | --- |
| Segmented button | Connected button group |
| Navigation drawer | Expanded navigation rail (modal on compact and medium) |
| Bottom app bar | Docked toolbar |
| Medium and large app bars | Medium flexible and large flexible app bars |
| Indeterminate circular progress | Loading indicator |

([Building with M3 Expressive](sources/m3/building-with-m3-expressive.md): "M3 Expressive isn't a new version of the system"; [segmented buttons](sources/m3/components_segmented-buttons.md), [navigation drawer](sources/m3/components_navigation-drawer.md), [breakpoints](sources/m3/foundations_layout_breakpoints.md) for the modal rail on compact and medium, [app bars](sources/m3/components_app-bars.md), [toolbars](sources/m3/components_toolbars.md), [loading indicator](sources/m3/components_loading-indicator.md))
