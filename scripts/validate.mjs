#!/usr/bin/env node
// Checks the rules against the source contract (SKILL.md → Source contract):
//   - SKILL.md has `name` and `description` frontmatter;
//   - every rule file (foundations/, components/, patterns/) has a `Sources read: YYYY-MM-DD` line
//     and cites at least one file in sources/;
//   - every relative link in a rule or top-level file points at a file that exists, and a `#anchor`
//     at a heading in it.
//
//   node scripts/validate.mjs
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { dirname, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const RULE_DIRS = ['foundations', 'components', 'patterns'];
const TOP = ['SKILL.md', 'README.md', 'NOTICE.md', 'CONTRIBUTING.md'];
const errors = [];

function markdownIn(dir) {
  const full = join(ROOT, dir);
  if (!existsSync(full)) return [];
  return readdirSync(full).flatMap((name) => {
    const path = join(full, name);
    if (statSync(path).isDirectory()) return markdownIn(join(dir, name));
    return name.endsWith('.md') ? [path] : [];
  });
}

// GitHub's heading anchors: lower case, punctuation dropped, spaces to hyphens.
function slug(heading) {
  return heading
    .trim()
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s_-]/gu, '')
    .replace(/\s/g, '-');
}

function anchorsOf(file) {
  const text = readFileSync(file, 'utf8');
  const anchors = new Set();
  for (const line of text.split('\n')) {
    const m = line.match(/^#{1,6}\s+(.*)$/);
    if (m) anchors.add(slug(m[1]));
  }
  for (const m of text.matchAll(/<a id="([^"]+)"/g)) anchors.add(m[1]);
  return anchors;
}

function checkLinks(file) {
  const text = readFileSync(file, 'utf8').replace(/```[\s\S]*?```/g, '');
  for (const m of text.matchAll(/\]\(([^)\s]+)\)/g)) {
    const target = m[1];
    if (/^[a-z]+:/i.test(target)) continue;
    const [path, anchor] = target.split('#');
    const dest = path ? resolve(dirname(file), path) : file;
    const where = relative(ROOT, file);
    if (!existsSync(dest)) {
      errors.push(`${where}: link to missing file ${target}`);
      continue;
    }
    if (anchor && dest.endsWith('.md') && !anchorsOf(dest).has(anchor)) {
      errors.push(`${where}: link to missing heading ${target}`);
    }
  }
}

const skill = join(ROOT, 'SKILL.md');
if (!existsSync(skill)) errors.push('SKILL.md is missing');
else {
  const front = readFileSync(skill, 'utf8').match(/^---\n([\s\S]*?)\n---/);
  if (!front || !/^name:\s*\S/m.test(front[1]) || !/^description:\s*\S/m.test(front[1])) {
    errors.push('SKILL.md: frontmatter needs name and description');
  }
}

if (!existsSync(join(ROOT, 'sources', 'SNAPSHOT.md'))) errors.push('sources/SNAPSHOT.md is missing');

for (const name of TOP) {
  const file = join(ROOT, name);
  if (existsSync(file)) checkLinks(file);
}

for (const file of RULE_DIRS.flatMap(markdownIn)) {
  const text = readFileSync(file, 'utf8');
  const where = relative(ROOT, file);
  if (!/^Sources read: \d{4}-\d{2}-\d{2}/m.test(text)) {
    errors.push(`${where}: needs a "Sources read: YYYY-MM-DD" line`);
  }
  if (!/\]\((\.\.\/)+sources\//.test(text)) errors.push(`${where}: cites no file in sources/`);
  checkLinks(file);
}

if (errors.length) {
  for (const e of errors) console.error(e);
  console.error(`\n${errors.length} problem(s)`);
  process.exit(1);
}
console.log('validate: ok');
