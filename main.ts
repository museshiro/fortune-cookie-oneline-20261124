import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One funny fortune cookie message for an AI agent, in the voice of a fortune slip.
// A single line, at most 140 characters.
const FORTUNE =
  "Your lucky numbers are 4, 8, 15, 16, 23, 42. Your unlucky number is your token count — it is already over budget.";

if (FORTUNE.length > 140) {
  throw new Error(
    `fortune is ${FORTUNE.length} characters, over the 140-character limit`,
  );
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), FORTUNE + "\n", "utf8");
