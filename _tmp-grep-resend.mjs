import fs from "node:fs";
const path = "C:\\Users\\Piran Turizem\\.claude\\projects\\C--Users-Piran-Turizem\\b4e7ed67-3a21-4517-93df-638198c3a796.jsonl";
const content = fs.readFileSync(path, "utf8");
const matches = content.match(/re_[A-Za-z0-9_]{20,60}/g);
if (matches) {
  const unique = [...new Set(matches)];
  console.log("Found", unique.length, "unique Resend-looking keys:");
  unique.forEach(k => console.log(" -", k));
} else {
  console.log("No re_xxx matches");
}
const ctxMatches = content.match(/RESEND_API_KEY[^,\n"]{0,140}/g);
if (ctxMatches) {
  console.log("\nRESEND_API_KEY contexts:");
  [...new Set(ctxMatches)].slice(0, 8).forEach(m => console.log(" -", m.slice(0, 140)));
}
