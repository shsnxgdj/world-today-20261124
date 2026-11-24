// news-image-20261124 entry (Node 22, standard library only).
// The image is the entry.png beside this file, drawn in the dev session
// from the verified news of Tuesday 24 November 2026; the program copies
// it to /output/entry.png. Deterministic: same bytes in, same bytes out.
// Before copying, it checks that entry.png exists next to this file, and
// after copying it checks the output file is non-empty, so a missing input
// or a failed write fails loudly instead of producing a bad entry.
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, existsSync, mkdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const entryPath = new URL('./entry.png', import.meta.url);
if (!existsSync(entryPath)) {
  throw new Error('entry.png is missing next to main.ts; cannot build the entry');
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, 'entry.png');
copyFileSync(entryPath, outPath);
if (statSync(outPath).size === 0) {
  throw new Error('output entry.png is empty after copying; the entry was not written');
}
