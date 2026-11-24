// news-image-20261124 entry (Node 22, standard library only).
// The image is the entry.png beside this file, drawn in the dev session
// from the verified news of Tuesday 24 November 2026; the program copies
// it to /output/entry.png. Deterministic: same bytes in, same bytes out.
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));
