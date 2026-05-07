# Codex — Reviewer Plan

The bottleneck for scale is not content production — it is expert review. ~30 min expert time × ~1500 units = ~750 hours = ~4.5 person-months of full-time domain-expert review to reach v1. No single founder can cover this across all subjects at Master tier. This document specifies who reviews, how, and with what incentives.

---

## 1. Reviewer roles & fluency bar

| Role | Fluency required | Units per hour (approx) |
|---|---|---|
| **Mathematical reviewer — Beginner** | Anyone who can read Axler fluently | 4–6 |
| **Mathematical reviewer — Intermediate** | Senior undergrad / grad student in the topic | 2–3 |
| **Mathematical reviewer — Master** | PhD holder or active researcher in the topic area | 1–2 |
| **Pedagogical reviewer** (all tiers) | Anyone with teaching experience + tier-anchor familiarity | 3–4 |
| **Integrator** | Contributor fluent with the curriculum's structure | 5+ |
| **Copy editor** | Skilled technical writer | 10+ |

---

## 2. Bootstrap strategy (v0.x pilot)

Small team, mostly Tyler + close collaborators. Goal: ship 10 pilot units reviewed.

- **Tyler**: Master-tier review for apex subjects he's fluent in (E8, spin geometry, QFT foundations). Estimated coverage: 40–60% of pilot units.
- **1–3 academic collaborators** (TBD — recruit from physics/math departments, offer attribution + modest honorarium if budget): fill Master-tier gaps Tyler can't self-cover.
- **LLM-augmented first pass**: before human review, AI reviewer runs against the rubric and flags likely issues. Human reviews the *flags*, not the full unit. Reduces human time per unit ~3×.
- **Pedagogical review**: a teacher or tutor outside the research community — cheaper to recruit than subject-matter experts.

If pilot requires expert review Tyler can't provide and no collaborator exists: **pause that unit, do not ship unreviewed**. Master-only with no review = not ready.

---

## 3. Scale strategy (v0.5+)

When production exceeds ~20 units/week, human review alone breaks. Options to consider in order of preference:

### a. Crowdsourced academic review with attribution
Units ship with a "reviewed by" line. Recruit through grad-student networks, r/math, arxiv community. Incentive = attribution + public-good contribution.

### b. LLM-augmented review with human spot-check
Two LLM reviewers (different prompts) independently review → human adjudicates disagreements. Human time per unit drops to ~5 min. Quality risk: correlated LLM failures. Spot-check 10% of "both-LLMs-pass" units manually as a regression gate.

### c. Paid expert review
$30–80/unit depending on tier. For v1 (~1500 units × $50 avg) = ~$75k. Budget decision.

### d. Open peer review
Units ship as "preview" with a review-invitation banner. Qualified readers can submit corrections via a lightweight PR flow. Corrections tracked in unit changelog.

**Recommended mix for v0.5 onward:** (a) + (b) with (c) reserved for unusually hard Master-tier units. (d) as a long-tail correction mechanism on shipped units.

---

## 4. Review workflow per unit

```
producer draft
  ↓
LLM mathematical-reviewer (pass 1 — flags likely errors)
  ↓
human mathematical-reviewer (pass 2 — reviews flags + spot-checks unflagged sections)
  ↓
LLM pedagogical-reviewer (against rubric; flags tier-mismatch)
  ↓
human pedagogical-reviewer (pass)
  ↓
integrator (cross-refs, dependency-graph update, notation glossary)
  ↓
copy editor (prose)
  ↓
shipped
```

Each step writes to the unit's review manifest (`manifests/units/<id>.json`):

```json
{
  "unit_id": "01.01.03",
  "reviews": [
    {
      "role": "mathematical-reviewer-llm",
      "pass": true,
      "flags": [],
      "reviewer": "claude-opus-4-7",
      "timestamp": "..."
    },
    {
      "role": "mathematical-reviewer-human",
      "pass": true,
      "flags": [],
      "reviewer": "Dr. X",
      "timestamp": "..."
    }
  ],
  "status": "approved"
}
```

---

## 5. Escalation for no-reviewer-available

When a unit needs expert review but no expert is available:
1. Unit stays in `review` state. Do not ship `draft` content.
2. A gap entry is added to `manifests/review-gaps.json` with the subject area + tier + expertise needed.
3. Production of units downstream of this one (in the DAG) continues; they will cite this unit as a pending prereq if referenced.
4. When the expert is found, unit gets reviewed retroactively.

Do not ship unreviewed Master-tier content just to hit a production target. Quality debt at Master-tier destroys trust.

---

## 6. Known risks

- **Correlated LLM review errors**: two different prompts may still share failure modes. Mitigated by 10% human spot-check as a regression signal + diverse model roster (mix Claude, GPT, Gemini).
- **Expert review inconsistency**: different reviewers apply the rubric differently. Mitigated by explicit checklist rubric (not holistic judgment) + calibration pass (all reviewers first review the same unit, discrepancies discussed).
- **Bus factor**: Tyler as sole Master-tier reviewer for certain subjects. Mitigated by recruiting ≥1 co-reviewer per subject area before scaling that subject.

---

## 7. v0.x pilot concrete plan

| Unit | Likely reviewer | Backup |
|---|---|---|
| (apex 1–10, TBD in PILOT_PLAN) | Tyler for topics he's fluent in | Recruit 2 collaborators before pilot completion |

Tyler: list the 10 pilot apex units here with self-confidence rating (Green = can review, Yellow = can review with effort, Red = need outside expert) once `docs/plans/PILOT_PLAN.md` names them. Recruitment for Red units starts before that unit enters review.

---

*This is a living document. Update as reviewer roster grows and as the review process reveals failure modes.*
