/**
 * remark-tier-sections
 *
 * Wraps each H2 section ending in `[Beginner]`, `[Intermediate+]`,
 * `[Master]`, or `[All tiers]` in a <section data-tier="..."> block
 * with `data-tier-active="true"` set so default SSR shows all tiers.
 * The tier marker is stripped from the heading text.
 *
 * The TierToggle island removes data-tier-active to hide sections.
 * No JS = all tiers visible (progressive enhancement).
 */

const TIER_PATTERN = /\s*\[(Beginner|Intermediate\+?|Master|All tiers)\]\s*$/i;

function tierFromMarker(marker) {
  const lower = marker.toLowerCase();
  if (lower.startsWith("beginner")) return "beginner";
  if (lower.startsWith("intermediate")) return "intermediate";
  if (lower.startsWith("master")) return "master";
  if (lower.startsWith("all")) return "all";
  return null;
}

export default function remarkTierSections() {
  return (tree) => {
    const newChildren = [];
    let inSection = false;

    function closeSection() {
      if (inSection) {
        newChildren.push({ type: "html", value: "</section>" });
        inSection = false;
      }
    }

    for (const node of tree.children) {
      const isH1 = node.type === "heading" && node.depth === 1;
      const isH2 = node.type === "heading" && node.depth === 2;

      if (isH1) {
        closeSection();
        newChildren.push(node);
        continue;
      }

      if (isH2) {
        // Look at last text child for tier marker
        const last = node.children[node.children.length - 1];
        if (last && last.type === "text") {
          const m = last.value.match(TIER_PATTERN);
          if (m) {
            const tier = tierFromMarker(m[1]);
            // Strip marker from heading text
            last.value = last.value.replace(TIER_PATTERN, "").trim();
            if (last.value === "") {
              node.children.pop();
            }
            closeSection();
            newChildren.push({
              type: "html",
              value: `<section data-tier="${tier}" data-tier-active="true">`,
            });
            inSection = true;
            newChildren.push(node);
            continue;
          }
        }
        // H2 without tier marker — close any open tier section
        closeSection();
        newChildren.push(node);
        continue;
      }

      newChildren.push(node);
    }

    closeSection();
    tree.children = newChildren;
  };
}
