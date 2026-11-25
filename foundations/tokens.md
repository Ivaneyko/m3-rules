# Design tokens

Sources read: 2026-11-20 ([snapshot](../sources/SNAPSHOT.md)). The values themselves are in [sources/tokens/](../sources/tokens/component-tokens.md) and in each component file.

- **Use tokens, not hard-coded values**: a token is a name for a colour, font or measurement, named for **where it's used** (`md.comp.fab.primary.container.color`); the name and use stay when the value changes ([design tokens](../sources/m3/foundations_design-tokens.md), [what's a design token?](../sources/m3/foundations_design-tokens.md#whats-a-design-token)).
- **Names** go from general to specific, separated by dots: `md`, then the class (`ref`, `sys`, `comp`), then the role (`md.ref.palette.secondary90`) ([parts of a token name](../sources/m3/foundations_design-tokens.md#parts-of-a-token-name)).

| Class | Holds | Points to |
| --- | --- | --- |
| Reference (`ref`) | Every available option (palette tones, font sizes); doesn't change by context | A static value or another reference token |
| System (`sys`) | The theme's decisions (colour roles, type, shape, elevation); **theming happens here**, and light and dark point it at different reference tokens | A reference token, whenever possible |
| Component (`comp`, in development) | A component part's size, shape, colour or elevation | A system or reference token, **never a hex value** |

([classes of tokens](../sources/m3/foundations_design-tokens.md#classes-of-tokens), [reference tokens](../sources/m3/foundations_design-tokens.md#reference-tokens), [system tokens](../sources/m3/foundations_design-tokens.md#system-tokens), [component tokens](../sources/m3/foundations_design-tokens.md#component-tokens-in-development))

- A choice shared by several components of the same intent gets a token ([component tokens](../sources/m3/foundations_design-tokens.md#component-tokens-in-development)).
- **Contexts** (dark theme, dense layouts, form factors, right-to-left) override a token's default value ([contexts](../sources/m3/foundations_design-tokens.md#contexts)).
