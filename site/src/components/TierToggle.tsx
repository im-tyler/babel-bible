/** @jsxImportSource preact */
import { useEffect, useState } from "preact/hooks";

type Tier = "beginner" | "intermediate" | "master";

const TIER_LABELS: Record<Tier, string> = {
  beginner: "Beginner",
  intermediate: "Intermediate",
  master: "Master",
};

export default function TierToggle({
  tiersPresent,
}: {
  tiersPresent?: Tier[];
}) {
  const allTiers: Tier[] = ["beginner", "intermediate", "master"];
  const present = (tiersPresent && tiersPresent.length > 0) ? tiersPresent : allTiers;
  const defaultTier: Tier = present[0] || "beginner";

  const [tier, setTier] = useState<Tier>(defaultTier);

  // Hydrate from localStorage and apply on mount.
  useEffect(() => {
    const saved = (typeof window !== "undefined" ? window.localStorage.getItem("codex_tier") : null) as Tier | null;
    const initial: Tier = saved && present.includes(saved) ? saved : defaultTier;
    setTier(initial);
    applyTier(initial, present);
  }, []);

  const handleSet = (t: Tier) => {
    if (!present.includes(t)) return;
    setTier(t);
    if (typeof window !== "undefined") window.localStorage.setItem("codex_tier", t);
    applyTier(t, present);
  };

  return (
    <div class="tier-toggle" role="tablist" aria-label="Tier selector">
      {allTiers.map((t) => (
        <button
          key={t}
          role="tab"
          aria-selected={tier === t}
          class={tier === t ? "active" : ""}
          onClick={() => handleSet(t)}
          disabled={!present.includes(t)}
          title={present.includes(t) ? `Show ${TIER_LABELS[t]} content` : `${TIER_LABELS[t]} not available for this unit`}
        >
          {TIER_LABELS[t]}
        </button>
      ))}
    </div>
  );
}

function applyTier(tier: Tier, present: Tier[]) {
  if (typeof document === "undefined") return;
  // Tiers visible up to and including the selected level. We ascend.
  const order: Tier[] = ["beginner", "intermediate", "master"];
  const cutoff = order.indexOf(tier);
  const visible = new Set(order.slice(0, cutoff + 1));

  const sections = document.querySelectorAll<HTMLElement>("[data-tier]");
  sections.forEach((el) => {
    const t = (el.getAttribute("data-tier") || "").toLowerCase() as Tier;
    if (visible.has(t) && present.includes(t)) {
      el.setAttribute("data-tier-active", "true");
    } else {
      el.removeAttribute("data-tier-active");
    }
  });
}
