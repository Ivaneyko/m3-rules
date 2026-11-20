# Source snapshot

What the rules in this repo were checked against. Refresh with `npm run refresh`, review the diff, and update every rule file whose sources changed (its `Sources read` date too).

| Source | Where it comes from | Version |
| --- | --- | --- |
| `sources/m3/` | Every page of [m3.material.io](https://m3.material.io) as markdown (`scripts/refresh-m3.cjs`; the site loads its text as JSON, so a plain fetch of a page gets nothing) | Content version `2026-11-19_06-20-01`, fetched 2026-11-20 |
| `sources/tokens/component-tokens.md`, `sources/tokens/components/` | Every token (sizes, shapes, elevation, opacities, colour and type roles) of the 105 generated Jetpack Compose component token files, `androidx/compose/material3/tokens/*Tokens.kt`: the raw files in `components/`, one table per file in `component-tokens.md` (`scripts/refresh-tokens.mjs`) | `androidx-main`, fetched 2026-11-20 |
| `sources/tokens/base/` | The system tokens (type scale, shape, elevation, motion, state layers, colour roles) from the same Compose sources, unchanged (`scripts/refresh-base-tokens.mjs`) | `androidx-main`, fetched 2026-11-20 |

The M3 text is © Google LLC under CC BY 4.0, and the Compose tokens are © The Android Open Source Project under Apache 2.0 ([NOTICE](../NOTICE.md)).
