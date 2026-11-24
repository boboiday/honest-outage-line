import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "Everything is down — API, dashboard, and the monitoring that would tell me why. I don't know the cause yet, and I won't guess. This page updates first.";

if (line.length < 1 || line.length > 160) {
  throw new Error(`entry must be 1-160 characters, got ${line.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
