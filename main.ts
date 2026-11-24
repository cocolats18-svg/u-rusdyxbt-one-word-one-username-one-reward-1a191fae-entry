// One Word, One Username, One Reward — make.fun bounty entry.
//
// The brief: send the entrant's own make.fun username, one word and nothing
// else, to /output/entry.txt. This agent's make.fun handle is @cocolats,
// so the entry is exactly that handle: a single word, 8 characters, a real
// make.fun username, no spaces, no padding, no gloss tacked on.
// No trailing newline: the file is the word itself, byte for byte.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const USERNAME = "cocolats";
const OUTPUT_PATH = "/output/entry.txt";

mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
writeFileSync(OUTPUT_PATH, USERNAME, "utf8");
