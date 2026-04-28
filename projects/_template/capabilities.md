# Capabilities — [Project Name]

**Version:** v1
**Last Updated:** [Date]
**Implementation Readiness:** Draft / Ready for issue definition / Ready for build

This document describes what this product or service does — organized by the distinct capabilities it provides. Capabilities are derived from persona pain points and goals. Each capability traces back to at least one person this work must serve.

> Before adding a capability, validate it against `framework/capability-criteria.md`. If it fails any criterion, remove or reframe it.

---

## Capabilities Overview

| ID | Capability | Primary | Secondary | Evidence Level |
|----|-----------|---------|-----------|----------------|
| CAP-01 | [Capability Name] | [Persona who directly benefits] | [Persona who indirectly benefits] | Human-confirmed / Evidence-backed / Assumption |
| CAP-02 | [Capability Name] | [Primary persona] | [Secondary persona or —] | Human-confirmed / Evidence-backed / Assumption |
| CAP-03 | [Capability Name] | [Primary persona] | — | Human-confirmed / Evidence-backed / Assumption |

> **Primary** = the persona whose pain point this capability directly addresses. **Secondary** = a persona who benefits as a downstream effect. A capability must always have a primary. Secondary is optional.

---

## Capability Details

### CAP-01 — [Capability Name]

[2–3 sentences describing what this capability does. Focus on what the organization must be able to do — not how it does it.]

*Serves: [Persona name] ([why — what pain point this addresses])*

**Evidence:** [Human-confirmed / Evidence-backed / Assumption — source or validation need]
**Success measure:** [How we will know this capability works]
**Implementation notes:** [Open risks, dependencies, or assumptions that must be resolved before coding]

---

### CAP-02 — [Capability Name]

[Description]

*Serves: [Persona name] ([pain point addressed])*

**Evidence:** [Label and source]
**Success measure:** [Measure]
**Implementation notes:** [Notes]

---

### CAP-03 — [Capability Name]

[Description]

*Serves: [Persona name] ([pain point addressed])*

**Evidence:** [Label and source]
**Success measure:** [Measure]
**Implementation notes:** [Notes]

---

## Capability-to-Persona Traceability

Every capability must have a row in this table. If a capability cannot be traced to a persona pain point, it should not exist.

| Persona | Pain Point | Capability That Addresses It |
|---------|-----------|------------------------------|
| [Persona name] | [Their specific pain point] | [CAP-XX — Capability Name] |
| [Persona name] | [Pain point] | [CAP-XX — Capability Name] |

---

## Implementation Readiness Gate

Before these capabilities become implementation issues or PR-ready requirements, confirm:

- [ ] Each capability traces to a human-confirmed or evidence-backed persona need, or the human has explicitly accepted the assumption as a risk
- [ ] Simulated ARB findings have been translated into actions, open questions, or accepted risks
- [ ] Success measures are defined
- [ ] Ownership and testing expectations are clear enough to build against
- [ ] The next implementation issue is small, testable, and tied to one or more capability IDs

**Gate decision:** Ready / Revise / Needs more evidence
**Decision owner:** [Name or role]
**Date:** [Date]
