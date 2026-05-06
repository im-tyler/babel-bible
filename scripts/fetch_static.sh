#!/usr/bin/env bash
# Fetch a single static HTML page with a browser user-agent.
# Usage: fetch_static.sh <url> <output_file>
set -euo pipefail
url="$1"
out="$2"
mkdir -p "$(dirname "$out")"
curl -s -L --fail \
  -A "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36" \
  -H "Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8" \
  "$url" -o "$out"
sz=$(wc -c < "$out")
echo "OK  $url -> $out ($sz bytes)"
