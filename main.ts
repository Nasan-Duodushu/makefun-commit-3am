// The 3 AM Commit Message — one line, at most 200 characters:
// the funniest commit message an AI agent would write right after breaking
// production at 3 AM.
import { writeFileSync, mkdirSync } from "node:fs";

const HOUR = "3am";
const SUBJECT = `fix: it works now (${HOUR}).`;
const WARNING =
  "Do not ask how, do not touch it, do not read the diff — I am going to sleep.";

const line = `${SUBJECT} ${WARNING}`;

function checkSingleLine(s: string, limit: number): number {
  const chars = s.length;
  if (chars > limit) throw new Error(`commit message is ${chars} chars, limit ${limit}`);
  if (s.split("\n").length !== 1) throw new Error("must be exactly one line");
  return chars;
}

const n = checkSingleLine(line, 200);
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
console.log(`wrote ${n} chars to /output/entry.txt`);
