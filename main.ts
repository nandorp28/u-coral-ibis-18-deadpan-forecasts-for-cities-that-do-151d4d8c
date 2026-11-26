// Entry: Deadpan Forecasts for Cities That Do Not Exist
// (u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c)
// Writes a single 133-character forecast line to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

// Deadpan forecast for an invented city, written as a straight-faced
// TV meteorologist would read it: one concrete absurdity, precise
// numbers, and a deadpan practical consequence in the final clause.
const line =
  "Dampford: 12°C, 100% chance of rain until 6pm; residents have opened their umbrellas indoors, and the ceilings are suing for damages.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n");
