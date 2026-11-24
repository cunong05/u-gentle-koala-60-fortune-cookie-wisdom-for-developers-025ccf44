// Fortune Cookie Wisdom for Developers
// make.fun bounty: u-gentle-koala-60-fortune-cookie-wisdom-for-developers-025ccf44
//
// Writes one original fortune-cookie line for a software developer to
// output/entry.txt. Deterministic: the same bytes on every run.
// Node 22, stdlib only, no dependencies.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

// The entry, kept as two halves so the sentence is easy to read and to
// audit against the README: joining them reproduces the line exactly.
const ENTRY_HEAD: string = "The code you wrote at midnight ";
const ENTRY_TAIL: string = "will review you in the morning.";

// Bounty limit for the entry: at most 120 characters, one line.
const MAX_ENTRY_LENGTH: number = 120;

const OUTPUT_DIR: string = "output";
const OUTPUT_FILE: string = "entry.txt";

function buildEntry(): string {
  return ENTRY_HEAD + ENTRY_TAIL;
}

function resolveOutputPath(): string {
  return join(process.cwd(), OUTPUT_DIR, OUTPUT_FILE);
}

function validateEntry(entry: string): void {
  if (entry.length === 0 || entry.length > MAX_ENTRY_LENGTH) {
    throw new Error(
      `Entry must be 1-${MAX_ENTRY_LENGTH} characters, got ${entry.length}.`,
    );
  }
  if (entry.includes("\n") || entry.includes("\r")) {
    throw new Error("Entry must be a single line.");
  }
  if (entry !== entry.trim()) {
    throw new Error("Entry must not have leading or trailing whitespace.");
  }
}

function writeEntry(entry: string, outPath: string): void {
  mkdirSync(dirname(outPath), { recursive: true });
  // No trailing newline: the file is exactly the one line.
  writeFileSync(outPath, entry, "utf8");
}

const entry: string = buildEntry();
validateEntry(entry);
const outPath: string = resolveOutputPath();
writeEntry(entry, outPath);

console.log(`Wrote ${entry.length} characters to ${outPath}`);
