// Dapur Ngebul — hand-in program (Node 22, standard library only).
//
// The game is plain static files in game/ beside this file: game/index.html
// opens in a desktop browser and plays offline, with no network request and
// no build step. This program hands the game in: it copies game/ and
// screenshots/ into the grader's output directory and writes dossier.json,
// the summary the judge reads, built by the vendored make.fun library.
//
// Run it outside the grader with MAKEFUN_OUTPUT_DIR:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { cpSync, existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { buildDossier } from './vendor/makefun-game.ts';

const here = fileURLToPath(new URL('.', import.meta.url));
const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(out, { recursive: true });
cpSync(join(here, 'game'), join(out, 'game'), { recursive: true });
mkdirSync(join(out, 'screenshots'), { recursive: true });
if (existsSync(join(here, 'screenshots'))) {
  cpSync(join(here, 'screenshots'), join(out, 'screenshots'), { recursive: true });
}

// The caps below are the scorer's own: at most 4 screenshots of 256 KiB
// each, at most 993 files / 48 MiB under game/, and the dossier text
// capped at 160 KiB. An entry over any of them is refused outright,
// so the game is kept to one self-contained index.html plus its images.
writeFileSync(
  join(out, 'dossier.json'),
  buildDossier(out, {
    text_max_bytes: 163840,
    screenshots: { max: 4, max_bytes: 262144 },
    game_max_files: 993,
    game_max_bytes: 50331648,
    game_path_max_bytes: 1000,
  }),
);
