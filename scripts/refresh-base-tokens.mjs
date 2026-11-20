#!/usr/bin/env node
// Downloads the M3 system token files (type scale, shape, elevation, motion, state opacities) from
// the generated androidx Compose sources into sources/tokens/base/, as they are. m3.material.io
// loads these values from a service the page snapshot can't reach; Compose generates them from the
// same md.sys.* token set, as plain Kotlin.
//
//   node scripts/refresh-base-tokens.mjs
import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = 'https://raw.githubusercontent.com/androidx/androidx/androidx-main/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3';
const FILES = [
  'tokens/TypeScaleTokens.kt',
  'tokens/TypographyKeyTokens.kt',
  'tokens/TypefaceTokens.kt',
  'tokens/ShapeTokens.kt',
  'tokens/ElevationTokens.kt',
  'tokens/MotionTokens.kt',
  'tokens/StandardMotionTokens.kt',
  'tokens/ExpressiveMotionTokens.kt',
  'tokens/StateTokens.kt',
  'tokens/ColorSchemeKeyTokens.kt'
];

const out = join(dirname(fileURLToPath(import.meta.url)), '..', 'sources', 'tokens', 'base');
mkdirSync(out, { recursive: true });

let failed = 0;
for (const file of FILES) {
  const res = await fetch(`${ROOT}/${file}`);
  if (!res.ok) {
    console.error(`${file}: HTTP ${res.status}`);
    failed++;
    continue;
  }
  writeFileSync(join(out, file.split('/').pop()), await res.text());
  console.log(`wrote ${file}`);
}
if (failed) process.exit(1);
