# m3-rules

Material 3 Expressive rules for AI coding agents and the people working with them, taken from [m3.material.io](https://m3.material.io) and the Material 3 tokens, written for the web.

Start with [SKILL.md](SKILL.md): it routes a task to the one or two files it needs and states the source contract every rule follows.

## What's here

| Path | What |
| --- | --- |
| `SKILL.md` | The entry point, in [Agent Skills](https://agentskills.io) format: which file to read for a task, the source contract, the M3 Expressive status |
| `foundations/` | States, colour roles, typography, shape, elevation, motion, layout, icons and accessibility |
| `components/` | Each component: when to use it, its spec values, its guidelines, accessibility, and the sources |
| `patterns/` | Choosing a component, placing feedback, forms, adaptive layouts, anti-patterns |
| `sources/` | The snapshot every rule is checked against ([SNAPSHOT](sources/SNAPSHOT.md)) |
| `scripts/` | `refresh-*` take a new snapshot; `validate.mjs` checks the rules against the source contract |
| `tests/cases/` | Tasks for checking an agent against the rules |

These rules are **project-neutral**. They don't name a component library, a theme's colours, a typeface or a product's screens. A project keeps those choices, and any approved departures from the spec, in its own rule files.

## Using it in a project

Copy a tagged version into the project (for example `docs/rules/m3/`) and point the project's agent instructions at its `SKILL.md`. Update by copying a newer tag; don't edit the copy.

## Working on it

```sh
npm run validate   # the source contract: sources cited, links and headings resolve, read dates present
npm run refresh    # a new snapshot of m3.material.io and the Compose tokens, then review the diff
```

A change to a rule cites the source it comes from. A refresh that changes a source updates every rule file built on it in the same PR, with a new `Sources read` date.

## License

The rules and scripts are MIT ([LICENSE](LICENSE)). The Material Design text is © Google LLC under CC BY 4.0, and the token values are © The Android Open Source Project under Apache 2.0 ([NOTICE](NOTICE.md)).
