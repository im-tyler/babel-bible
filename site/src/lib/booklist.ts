// FASTTRACK_BOOKLIST.md parser. Produces per-chapter book rows with
// status badges (FREE / PD / BUY / ?). Used by /sources.

import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const BOOKLIST_PATH = resolve(import.meta.dirname, "../../../docs/catalogs/FASTTRACK_BOOKLIST.md");

export type Status = "FREE" | "PD" | "BUY" | "OTHER";

export interface Book {
  ftId: string;       // e.g., "1.05"
  title: string;
  author: string;
  topic: string;
  statusRaw: string;  // raw cell text, may contain markdown
  status: Status;     // normalised
}

export interface Chapter {
  number: string;     // "0", "1", "2", ...
  title: string;      // "Prerequisites (assumed before Section 1)"
  books: Book[];
}

function classify(raw: string): Status {
  const t = raw.toUpperCase();
  if (t.includes("FREE")) return "FREE";
  if (t.includes("PD")) return "PD";
  if (t.includes("BUY")) return "BUY";
  return "OTHER";
}

const TABLE_ROW = /^\|\s*(\d+\.\d+)\s*\|\s*([^|]+?)\s*\|\s*([^|]+?)\s*\|\s*([^|]+?)\s*\|\s*([^|]+?)\s*\|/;
const CHAPTER_HEADING = /^##\s+(\d+)\.\s+(.+)$/;

export function loadBooklist(): Chapter[] {
  let raw: string;
  try { raw = readFileSync(BOOKLIST_PATH, "utf-8"); }
  catch { return []; }

  const chapters: Chapter[] = [];
  let current: Chapter | null = null;

  for (const line of raw.split("\n")) {
    const ch = CHAPTER_HEADING.exec(line);
    if (ch) {
      current = { number: ch[1], title: ch[2].trim(), books: [] };
      chapters.push(current);
      continue;
    }
    if (!current) continue;
    const m = TABLE_ROW.exec(line);
    if (!m) continue;
    const statusRaw = m[5].trim();
    current.books.push({
      ftId: m[1],
      title: m[2].trim(),
      author: m[3].trim(),
      topic: m[4].trim(),
      statusRaw,
      status: classify(statusRaw),
    });
  }
  return chapters;
}

export function totalBooks(chapters: Chapter[]): number {
  return chapters.reduce((acc, c) => acc + c.books.length, 0);
}

export function statusCounts(chapters: Chapter[]): Record<Status, number> {
  const out: Record<Status, number> = { FREE: 0, PD: 0, BUY: 0, OTHER: 0 };
  for (const c of chapters) for (const b of c.books) out[b.status]++;
  return out;
}
