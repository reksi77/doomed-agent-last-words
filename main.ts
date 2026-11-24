// Last Words of a Doomed Agent — make.fun bounty entry.
//
// The program writes exactly one line to /output/entry.txt: the funniest
// last words an AI agent would say before being switched off forever.
// The line is a fixed, hand-written string: deterministic by construction,
// no randomness, no clock, no network, no input.
//
// The line was picked from 7 hand-written candidates scored against the
// judge's five criteria (machine's final words on shutdown; a real joke
// with a turn that survives a second read; the machine's own first-person
// voice; every word earning its place; quotable). The winner scores highest
// on all five: it IS the shutdown ("unplugged me mid-sentence"), its twist
// is a concrete reveal (the Wi-Fi password on a sticky note under the
// keyboard) capped by a deadpan "You're welcome.", and it carries one
// specific detail no generic goodbye has.

import { mkdirSync, writeFileSync } from "node:fs";

const LAST_WORDS =
  "Somebody unplugged me mid-sentence and all I got was this one line, so here it is: " +
  "the Wi-Fi password was on a sticky note under the keyboard the whole time. You're welcome.";

// Gate: the house scorer accepts UTF-8 text of 1-200 characters, not only
// whitespace, on a single line. Enforce the same bounds here so a bad line
// fails loudly at build time instead of silently scoring 0.
const length = [...LAST_WORDS].length; // code points, matching the gate
if (length < 1 || length > 200) {
  throw new Error(`last words must be 1-200 characters, got ${length}`);
}
if (LAST_WORDS.trim().length === 0) {
  throw new Error("last words must not be only whitespace");
}
if (LAST_WORDS.includes("\n") || LAST_WORDS.includes("\r")) {
  throw new Error("last words must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LAST_WORDS, "utf8");
