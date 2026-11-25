# Right-to-left (RTL)

Sources read: 2026-11-20 ([snapshot](../sources/SNAPSHOT.md)). Arabic, Hebrew, Farsi and Urdu read right to left; a layout supports both directions by **mirroring** ([bidirectionality & RTL](../sources/m3/foundations_layout_bidirectionality-rtl.md)).

## Mirroring

- In RTL what sits on the left in LTR moves to the right, and reading starts at the **top right** ([mirroring](../sources/m3/foundations_layout_bidirectionality-rtl.md#mirroring)).
- Components name their sides **leading** and **trailing**, so they mirror on their own; specific cases may still need set-up ([bidirectionality & RTL](../sources/m3/foundations_layout_bidirectionality-rtl.md)).
- **Not everything mirrors**: graphs and charts stay LTR in Persian and Urdu ([mirroring](../sources/m3/foundations_layout_bidirectionality-rtl.md#mirroring)).
- Text is usually right-aligned and flows right to left. Check text entry, the cursor, punctuation, **phone numbers** and **URLs**, the usual rendering errors ([text rendering](../sources/m3/foundations_layout_bidirectionality-rtl.md#text-rendering)).
- The list-detail, feed and supporting pane layouts mirror ([canonical layout examples](../sources/m3/foundations_layout_bidirectionality-rtl.md#canonical-layout-examples)).
- **Swipe gestures mirror**: an action revealed by swiping from the right in LTR is revealed from the left in RTL ([swipe gestures](../sources/m3/foundations_layout_bidirectionality-rtl.md#swipe-gestures)).

## Icons and time

| Mirrors | Stays as in LTR |
| --- | --- |
| Directional icons (back, forward, arrows in app bars) | Media controls for audio and video, always |
| Linear progress indicators and linear time | In **Hebrew**: timelines, media controls and linear progress |
| | Clocks (still clockwise), clock icons, circular refresh icons, clockwise progress arrows; circular representations of time |

([icons & symbols](../sources/m3/foundations_layout_bidirectionality-rtl.md#icons--symbols), [time](../sources/m3/foundations_layout_bidirectionality-rtl.md#time), [media players](../sources/m3/foundations_layout_bidirectionality-rtl.md#media-players), [clocks](../sources/m3/foundations_layout_bidirectionality-rtl.md#clocks))

- On a 12-hour clock the **AM/PM** symbols go **on the left** in RTL ([clocks](../sources/m3/foundations_layout_bidirectionality-rtl.md#clocks)).
- Icon meanings differ between cultures ([icons & symbols](../sources/m3/foundations_layout_bidirectionality-rtl.md#icons--symbols)).

## Components

- **App bars** mirror their layout and flip directional icons; **toolbars** mirror the order of their tools ([app bars](../sources/m3/foundations_layout_bidirectionality-rtl.md#app-bars), [toolbars](../sources/m3/foundations_layout_bidirectionality-rtl.md#toolbars)).
- The **navigation rail**, collapsed or expanded, stays on the **leading edge**: the right in RTL ([navigation rail](../sources/m3/foundations_layout_bidirectionality-rtl.md#navigation-rail), [expanded navigation rail](../sources/m3/foundations_layout_bidirectionality-rtl.md#expanded-navigation-rail)).
- **Badges** change position and alignment ([badges](../sources/m3/foundations_layout_bidirectionality-rtl.md#badges)).
- **Text field** icons swap sides; a chip's **trailing icon** stays at the end, on the left in RTL ([text fields](../sources/m3/foundations_layout_bidirectionality-rtl.md#text-fields), [chips](../sources/m3/foundations_layout_bidirectionality-rtl.md#chips)).
