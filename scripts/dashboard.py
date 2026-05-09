#!/usr/bin/env python3
"""Print a one-screen dashboard of Codex production state.

Reads `manifests/production/plan.json` and surfaces:
  - Burn-down: shipped / queued / unaudited
  - Last 5 commits
  - Continuity-metric headline
  - Validator pass/fail headline
  - Estimated sessions remaining (assuming 4 units/session)

Quick to run; no side effects.
"""
import json
import re
import subprocess
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
PLAN = ROOT / "manifests" / "production" / "plan.json"


def run(cmd, **kw):
    return subprocess.run(cmd, cwd=ROOT, capture_output=True, text=True, **kw)


def main() -> int:
    if not PLAN.exists():
        print("plan not built — run scripts/build_production_plan.py")
        return 2
    plan = json.load(open(PLAN))
    counts = plan["counts"]

    print("=" * 60)
    print(" Codex — production dashboard")
    print("=" * 60)
    print(f" Shipped:    {counts['shipped']:5}")
    print(f" Queued:     {counts['queued']:5}  (deepenings: {counts['deepenings_queued']})")
    print(f" Audits:     {counts['audits_done']:5} / {counts['books_total']}"
          f"   ({counts['books_unaudited']} books unaudited)")
    print()

    # Estimated sessions: 4 units/session, plus the ~80 audits remaining at
    # 1 audit/session would be linear; actual rate depends on hand-tuning.
    if counts["queued"] + counts["books_unaudited"] > 0:
        remaining_units = counts["queued"]
        remaining_audits = counts["books_unaudited"]
        unit_sessions = (remaining_units + 3) // 4   # 4/session
        audit_sessions = (remaining_audits + 3) // 4  # 4/session
        # New units from future audits — estimate ~12 net-new per book
        future_audit_units = remaining_audits * 12
        future_unit_sessions = (future_audit_units + 3) // 4
        total_sessions = unit_sessions + audit_sessions + future_unit_sessions
        print(f" Estimated sessions remaining: ~{total_sessions}")
        print(f"   (current queue {unit_sessions} + audits {audit_sessions}"
              f" + future-audit-units {future_unit_sessions})")
        print()

    # Top of queue
    print(" Next 5 queued units:")
    units = plan["units"]
    queue = plan["queue_topo_order"]
    n = 0
    for uid in queue:
        u = units[uid]
        if u["status"] == "queued":
            sources = ", ".join(u.get("source_audits", []))
            print(f"   {uid:10}  {u['title'][:48]:48}  [{sources}]")
            n += 1
            if n >= 5:
                break
    print()

    # Last 5 commits
    print(" Last 5 commits:")
    proc = run(["git", "log", "--oneline", "-5"])
    for line in proc.stdout.strip().splitlines():
        print(f"   {line}")
    print()

    # Validator + continuity headlines (cheap)
    proc = run(["python3", "scripts/validate_all.py"])
    for line in proc.stdout.strip().splitlines()[-2:]:
        print(f" {line}")
    proc = run(["python3", "scripts/measure_continuity.py"])
    for line in proc.stdout.strip().splitlines()[-1:]:
        print(f" {line}")

    print("=" * 60)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
