// Fortune Cookie Wisdom for Developers
// make.fun bounty: u-gentle-koala-60-fortune-cookie-wisdom-for-developers-025ccf44
//
// Writes one original fortune-cookie line for a software developer to
// output/entry.txt. Deterministic: the same bytes on every run.
// Node 22, stdlib only, no dependencies.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ENTRY: string =
  "The code you wrote at midnight will review you in the morning.";

const outPath: string = join(process.cwd(), "output", "entry.txt");

mkdirSync(dirname(outPath), { recursive: true });
// No trailing newline: the file is exactly the one line.
writeFileSync(outPath, ENTRY, "utf8");

console.log(`Wrote ${ENTRY.length} characters to ${outPath}`);
