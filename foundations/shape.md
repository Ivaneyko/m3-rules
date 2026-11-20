# Shape

Sources read: 2026-11-20 ([snapshot](../sources/SNAPSHOT.md)). On the web `1dp` is `1px`.

## The corner radius scale

Every rectangular shape in a component (buttons, carousels, dialogs…) takes a step of this ten-step scale. A component's step is in its component file ([shape → corner radius scale](../sources/m3/styles_shape.md#corner-radius-scale)).

| Step | Radius | Token |
| --- | --- | --- |
| None | 0 | `CornerNone` |
| Extra small | 4dp | `CornerExtraSmall` |
| Small | 8dp | `CornerSmall` |
| Medium | 12dp | `CornerMedium` |
| Large | 16dp | `CornerLarge` |
| Large increased | 20dp | `CornerLargeIncreased` |
| Extra large | 28dp | `CornerExtraLarge` |
| Extra large increased | 32dp | `CornerExtraLargeIncreased` |
| Extra extra large | 48dp | `CornerExtraExtraLarge` |
| Full | fully rounded | `CornerFull` |

([corner radius scale](../sources/m3/styles_shape.md#corner-radius-scale); the values in [ShapeTokens.kt](../sources/tokens/base/ShapeTokens.kt), which also has single-edge forms such as `CornerExtraSmallTop` and `CornerLargeStart`, and a corner-value token per step for one corner)

- **Full** is fully rounded. It used to be 50% of the component's size; M3 Expressive defines it as `full` ([M3 Expressive update](../sources/m3/styles_shape.md#m3-expressive-update)).
- Large increased, extra large increased and extra extra large were added in M3 Expressive ([same](../sources/m3/styles_shape.md#m3-expressive-update)).

## Symmetry and inner corners

- A shape is symmetric (one value for all corners) or asymmetric (different corners); both use the same scale ([symmetry](../sources/m3/styles_shape.md#symmetry)).
- Components made of closely grouped items, such as **menus and split buttons**, use asymmetric shapes: the corners between items are **inner corners**, mapped to the single-corner tokens ([same](../sources/m3/styles_shape.md#symmetry)). Each component's inner and outer values are in its component file.

## Nested shapes: optical roundness

**A shape inside another never uses the same radius.** Inner radius = outer radius − the padding between them: 48dp − 14dp = 34dp ([adjust for optical roundness](../sources/m3/styles_shape.md#adjust-for-optical-roundness)).

## Customising

- Products should generally use the M3 shape styles consistently. Customising is allowed, and encouraged, for hero moments and custom components ([customizing shapes](../sources/m3/styles_shape.md#customizing-shapes)):
  - **Style level**: change a step's size (medium to another value), which changes every component mapped to it ([style changes](../sources/m3/styles_shape.md#style-changes)).
  - **Component level**: map one component to another step, for example buttons from full to small or medium ([component changes](../sources/m3/styles_shape.md#component-changes)).
  - **Cut corners** instead of rounded are allowed; add padding so content isn't clipped ([same](../sources/m3/styles_shape.md#component-changes)).
- **Don't give large or full corners to information-dense components such as cards** ([same](../sources/m3/styles_shape.md#component-changes)).

## Expressive shapes and morphing

- M3 Expressive adds a library of **35 shapes** and **shape morphing** between them ([M3 Expressive update](../sources/m3/styles_shape.md#m3-expressive-update)).
- **On the web the shape library and morph API aren't available**; they exist for Jetpack Compose ([using shape morph](../sources/m3/styles_shape.md#using-shape-morph)). Material itself uses morphing in the standard button group and the loading indicator ([same](../sources/m3/styles_shape.md#using-shape-morph)).
- Use morphing to communicate states (a selected button), actions in progress (loading, someone typing) and changes in the environment ([morph shapes to connect function and feeling](../sources/m3/styles_shape.md#morph-shapes-to-connect-function-and-feeling)).
- Shapes aren't symbols: don't give one shape a fixed meaning ([shape is versatile, not semantic](../sources/m3/styles_shape.md#shape-is-versatile-not-semantic)).
- **Use abstract shapes sparingly**, mostly for imagery, avatars and decoration; never at the cost of clarity, and never for text-heavy containers ([use abstract shapes sparingly](../sources/m3/styles_shape.md#use-abstract-shapes-sparingly), [using the shape library](../sources/m3/styles_shape.md#using-the-shape-library)).
- Mixing round and square shapes ("tension") is allowed to convey state, draw attention or add interest ([be bold and dare to embrace tension](../sources/m3/styles_shape.md#be-bold-and-dare-to-embrace-tension)).
