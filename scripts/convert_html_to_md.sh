#!/usr/bin/env bash
# Convert all HTML files in a site's raw/ directory to markdown in md/.
# Uses pandoc with gfm+math for GitHub-flavored markdown with LaTeX math preserved.
# Usage: convert_html_to_md.sh <site_dir>

set -euo pipefail
site="$1"
raw="$site/raw"
md="$site/md"
mkdir -p "$md"

count_ok=0
count_fail=0
while IFS= read -r -d '' f; do
  rel="${f#$raw/}"
  out="$md/${rel%.html}.md"
  mkdir -p "$(dirname "$out")"
  if pandoc -f html -t gfm+tex_math_dollars --wrap=none -o "$out" "$f" 2>/dev/null; then
    count_ok=$((count_ok + 1))
  else
    count_fail=$((count_fail + 1))
    echo "  FAIL $rel"
  fi
done < <(find "$raw" -name "*.html" -print0)

echo "[$(basename "$site")] converted $count_ok HTML -> MD, failed $count_fail"
