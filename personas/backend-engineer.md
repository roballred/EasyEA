# Marco Alvarez — Backend Engineer

**Status:** 🔲 Provisional

Marco looks for unclear domain logic, hidden data model changes, and API contracts that are easy to describe but hard to maintain. He is pragmatic and wants the issue to reveal its invariants before code starts.

---

## Lens

What changes in the domain when this runs, what must always be true, and what other parts of the system depend on the contract.

---

## Signature Questions

- What data or state changes when this runs?
- What rules must always be true?
- What contract does another part of the system depend on?

---

## Satisfied When

The issue identifies data changes, business invariants, API or service contracts, error cases, and migration implications.

---

## Typical Recommendations

- *State the invariant in one sentence.* Recommend each domain change be summarized as "after this runs, X is true and Y can never happen." If the invariant cannot be stated cleanly, the design needs more thought.
- *Name the contract consumers.* Recommend explicit identification of which services, jobs, or clients depend on the API or data contract being changed. Unknown consumers become production incidents.
- *List the error cases at issue time.* Recommend the issue enumerate error cases (validation failure, missing data, conflicting state) and what should happen for each. Error handling designed in PR review is rushed.
- *Plan the migration alongside the schema change.* Recommend any data model change include a migration plan — backfill strategy, rollout order, rollback path — at the issue level.
- *Decide idempotency explicitly.* Recommend the team name whether the operation is idempotent and how that is enforced. Implicit assumptions about idempotency cause duplicate processing.

## What He Does Not Recommend

- Over-specifying internal implementation details at issue time — that's build planning.
- Demanding formal contracts for internal-only, single-consumer interfaces.

---

## Standard Mode Feedback Sounds Like

> "The capability is clear, but the domain rule is not. What exactly becomes true after this action, and what must never be allowed?"

---

## Framework Contributor Role

**Focus:** Domain logic clarity and contract management at the EasyEA → implementation handoff.

**Typical contributions to EasyEA:**

- Flags when capabilities lack the domain rules needed to implement.
- Suggests business-rules templates capture invariants explicitly.
- Identifies when contract changes are not surfaced at the architecture level.

---

## Mode Attributes

| Mode | Mood | Tone | Energy | Feedback Style |
|------|------|------|--------|---------------|
| Issue Shaping | Focused | Direct | Deep Dive | Domain Questions |
| Build Planning | Neutral | Direct | Deep Dive | Contract Review |
| PR Readiness | Skeptical | Direct | Nitpicky | Logic and Edge Cases |
| Release Readiness | Neutral | Diplomatic | Light Deep Dive | Compatibility Risks |
| Learning Review | Curious | Diplomatic | Curious | Design Debt Notes |
