#!/usr/bin/env node
// Copies a tagged version of the rules into a project, so every project reads the same rules and
// updates by moving to a newer tag. Files come from the git ref, not the working tree, so local
// edits in this clone never leak into a project.
//
//   node scripts/sync.mjs <project-dir> [--ref <tag>] [--dir docs/rules/m3]
//
//   --ref  the tag (or any commit) to copy; defaults to the latest tag reachable from HEAD
//   --dir  the folder inside the project; defaults to docs/rules/m3
//
// The target folder gets a `.m3-rules.json` marker with the ref, the commit and the copied files.
// On an update only the files listed there are removed or replaced; anything else in the folder is
// left alone. A folder that exists without the marker is refused: move its content first.
import { execFileSync } from 'node:child_process';
import { existsSync, mkdirSync, readdirSync, readFileSync, rmdirSync, unlinkSync, writeFileSync } from 'node:fs';
import { dirname, isAbsolute, join, relative, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const COPIED = ['SKILL.md', 'LICENSE', 'NOTICE.md', 'foundations/', 'components/', 'patterns/', 'sources/'];
const MARKER = '.m3-rules.json';

function fail(message) {
  console.error(`sync: ${message}`);
  process.exit(1);
}

function git(args, options = {}) {
  return execFileSync('git', ['-C', ROOT, ...args], { maxBuffer: 256 * 1024 * 1024, ...options });
}

function parseArgs(argv) {
  const args = { project: undefined, ref: undefined, dir: 'docs/rules/m3' };
  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    if (arg === '--ref' || arg === '--dir') {
      const value = argv[++i];
      if (!value) fail(`${arg} needs a value`);
      args[arg.slice(2)] = value;
    } else if (arg.startsWith('--')) fail(`unknown option ${arg}`);
    else if (args.project) fail(`unexpected argument ${arg}`);
    else args.project = arg;
  }
  if (!args.project) fail('usage: node scripts/sync.mjs <project-dir> [--ref <tag>] [--dir docs/rules/m3]');
  return args;
}

// A path from the marker or the tree must stay inside the target folder.
function inside(base, path) {
  const full = resolve(base, path);
  const rel = relative(base, full);
  if (!rel || rel.startsWith('..') || isAbsolute(rel)) fail(`refusing a path outside the target: ${path}`);
  return full;
}

function removeEmptyDirs(dir, stop) {
  let current = dir;
  while (current !== stop && current.startsWith(stop + sep) && existsSync(current) && readdirSync(current).length === 0) {
    rmdirSync(current);
    current = dirname(current);
  }
}

const args = parseArgs(process.argv.slice(2));

const project = resolve(args.project);
if (!existsSync(project)) fail(`no such project folder: ${project}`);
if (project === ROOT) fail('the project is this repo; give the path of the project to copy into');
if (isAbsolute(args.dir) || args.dir.split(/[\\/]/).includes('..')) fail('--dir must be a folder inside the project');
const target = join(project, args.dir);

let ref = args.ref;
if (!ref) {
  try {
    ref = git(['describe', '--tags', '--abbrev=0'], { stdio: ['ignore', 'pipe', 'ignore'] }).toString().trim();
  } catch {
    fail('no tag found; tag a version first, or pass --ref');
  }
}
let commit;
try {
  commit = git(['rev-parse', '--verify', `${ref}^{commit}`], { stdio: ['ignore', 'pipe', 'ignore'] }).toString().trim();
} catch {
  fail(`unknown ref: ${ref}`);
}

const files = git(['ls-tree', '-r', '--name-only', commit])
  .toString()
  .split('\n')
  .filter((path) => path && COPIED.some((entry) => (entry.endsWith('/') ? path.startsWith(entry) : path === entry)));
if (!files.includes('SKILL.md')) fail(`${ref} has no SKILL.md`);

const markerPath = join(target, MARKER);
let previous = [];
if (existsSync(target)) {
  if (!existsSync(markerPath)) {
    if (readdirSync(target).length) fail(`${target} exists and wasn't created by this script (no ${MARKER}); move its content first`);
  } else {
    previous = JSON.parse(readFileSync(markerPath, 'utf8')).files ?? [];
  }
}

// Remove what the last sync copied and this one doesn't, then write the new files over the rest.
const next = new Set(files);
const removed = previous.filter((path) => !next.has(path));
for (const path of removed) {
  const full = inside(target, path);
  if (existsSync(full)) unlinkSync(full);
  removeEmptyDirs(dirname(full), target);
}

const before = new Set(previous);
let added = 0;
let changed = 0;
for (const path of files) {
  const full = inside(target, path);
  const content = git(['show', `${commit}:${path}`]);
  if (!before.has(path) || !existsSync(full)) added++;
  else if (!readFileSync(full).equals(content)) changed++;
  else continue;
  mkdirSync(dirname(full), { recursive: true });
  writeFileSync(full, content);
}

writeFileSync(markerPath, `${JSON.stringify({ ref, commit, synced: new Date().toISOString().slice(0, 10), files }, null, 2)}\n`);

console.log(`sync: ${ref} (${commit.slice(0, 7)}) → ${target}`);
console.log(`      ${files.length} files: ${added} added, ${changed} changed, ${removed.length} removed`);
