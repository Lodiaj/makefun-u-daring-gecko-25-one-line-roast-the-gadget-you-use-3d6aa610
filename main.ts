import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One-Line Roast: The Gadget You Use Every Day
// Roast of a smartwatch that celebrates the bare minimum.
const LINE =
  "My smartwatch just congratulated me for standing up. I have been awake for nine hours — the bar is on the floor, and so, apparently, am I.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

// Gate: /output/entry.txt must be UTF-8 text of 1 to 200 characters,
// not only whitespace, single line, no trailing newline.
function validateEntry(line: string): void {
  if (line.length < 1 || line.length > 200) {
    throw new Error(`entry line must be 1-200 chars, got ${line.length}`);
  }
  if (line.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("entry must be a single line");
  }
}

validateEntry(LINE);

writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`wrote ${LINE.length} chars to ${join(outDir, "entry.txt")}`);
