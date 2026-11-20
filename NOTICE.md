# Notices and attributions

This repository mixes original work with material from other sources, under different licenses.

## Original work (MIT)

[LICENSE](LICENSE), © 2026 Ivan Eyko: the rules in `foundations/`, `components/` and `patterns/` (their selection, structure and wording), `SKILL.md`, `README.md`, `scripts/validate.mjs`, `scripts/refresh-base-tokens.mjs` and `tests/`.

## Material Design guidelines (© Google LLC, CC BY 4.0)

The guidance, values and do / don'ts the rules state are derived from the Material Design 3 documentation at [m3.material.io](https://m3.material.io), published by Google under the [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0/). `sources/m3/` is a snapshot of that documentation as text. It remains under its original license, with attribution to Google LLC; changes made to it here are limited to converting it to markdown.

## Jetpack Compose Material 3 tokens (© The Android Open Source Project, Apache 2.0)

`sources/tokens/` holds values from the generated token files of [androidx](https://github.com/androidx/androidx) (`compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/tokens/`), under the [Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0). `sources/tokens/base/` holds those files unchanged; `sources/tokens/component-tokens.md` is a summary generated from them.

## Refresh scripts (MIT, © 2026 abhixv)

`scripts/refresh-m3.cjs` and `scripts/refresh-tokens.cjs` are adapted from [abhixv/google-m3-expressive-design-skill](https://github.com/abhixv/google-m3-expressive-design-skill), under the MIT License:

> Copyright (c) 2026 abhixv
>
> Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
>
> The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
>
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Ideas from other projects

The structure takes ideas, not text, from [abhixv/google-m3-expressive-design-skill](https://github.com/abhixv/google-m3-expressive-design-skill) (the source contract, snapshots of the site), [hamen/material-3-skill](https://github.com/hamen/material-3-skill) (Agent Skills format, the platform matrix, an audit mode) and [skydashnet/material-design-3-ui-skill](https://github.com/skydashnet/material-design-3-ui-skill) (component selection, anti-patterns, test cases), all MIT.
