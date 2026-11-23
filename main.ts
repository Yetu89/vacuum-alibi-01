// SPDX-License-Identifier: MIT
// The Vacuum's Alibi: One Line, 200 Characters
// Writes the robot vacuum's one-line excuse to /output/entry.txt
// (or $OUTPUT_DIR/entry.txt for local testing).

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT =
  "My map says that spot belongs to the cat now. I don't argue with the cat. The cat has claws and I have a 45-minute battery.";

// Length is counted in code points, matching the gate (1-200 characters).
// Use Array.from so astral-plane characters (emoji, etc.) count as one.
const codePoints = Array.from(TEXT);
const length = codePoints.length;
if (length < 1) {
  throw new Error("entry must not be empty (0 characters)");
}
if (length > 200) {
  throw new Error(
    `entry must be at most 200 characters, got ${length} — trim ${length - 200} character(s)`
  );
}
if (TEXT.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}
if (TEXT.includes("\n") || TEXT.includes("\r")) {
  throw new Error("entry must be a single line (no newline characters)");
}
if (/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/.test(TEXT)) {
  throw new Error("entry must not contain control characters");
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
console.log(`Wrote ${length}-character entry to ${join(outDir, "entry.txt")}`);
