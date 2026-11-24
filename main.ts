import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Weirdest job title: absurd seniority, apologizing to an inanimate cloud.
const LINE = "Vice President of Apologizing to the Cloud";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
