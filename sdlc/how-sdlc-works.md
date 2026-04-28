# How SDLC Personas Work

SDLC personas are simulated delivery reviewers used after EasyEA has selected a direction and is preparing to turn capabilities into implementation issues, PRs, releases, and operational support.

ARB personas help decide whether a direction is sound. SDLC personas help decide whether the work is ready to build, test, ship, operate, and learn from.

SDLC persona output is simulated critique. It may expose useful gaps and questions, but it is not validation and must not be presented as if real delivery team members reviewed or approved the work.

---

## When to Use SDLC Personas

Use SDLC personas after **Step 6 — Coordinate the Work**, when the human has selected the implementation direction and the team is preparing implementation issues or PR-ready requirements.

Use them again when a PR, release, or production change needs a lightweight delivery-readiness check.

Do not use SDLC personas to override human decisions. Use them to make delivery risks visible before implementation moves forward.

---

## SDLC Review Points

| Review Point | Use When... | Output |
|--------------|-------------|--------|
| Issue Shaping | A capability is becoming one or more implementation issues | Issue slices, acceptance criteria gaps, dependencies |
| Build Planning | The team is deciding how to implement the work | technical risks, sequencing, ownership gaps |
| PR Readiness | A pull request is ready for human review | review focus, missing tests, documentation gaps |
| Release Readiness | A change is about to ship | rollout, rollback, monitoring, support readiness |
| Learning Review | The work shipped or failed to ship cleanly | lessons learned and framework improvements |

---

## How Many Personas to Activate

| Work Size | Personas to Activate |
|-----------|---------------------|
| Small, low-risk issue | 1–2 |
| Standard feature or workflow change | 3–5 |
| Significant release, data migration, security-sensitive change, or cross-team dependency | 6–10 |

Always include **Jordan Lee** (Delivery Lead) when shaping issues. Every implementation effort needs a clear slice, owner, and acceptance criteria.

---

## Select the Relevant Personas

| If the work involves... | Activate... |
|-------------------------|-------------|
| issue slicing, scope control, acceptance criteria | Jordan Lee |
| user interface, accessibility, frontend behavior | Priya Shah |
| APIs, services, data model, domain logic | Marco Alvarez |
| tests, regression risk, acceptance coverage | Nina Patel |
| deployment, environments, rollback, observability | Sam Rivera |
| implementation security, secrets, authorization | Omar Brooks |
| data migration, reporting, data quality | Grace Lin |
| support model, help desk, runbooks, incident handoff | Taylor Morgan |
| documentation, training, release notes | Casey Nguyen |
| delivery sequencing, dependencies, team capacity | Morgan Ellis |

Some lenses overlap with ARB personas. Use ARB personas for architecture direction and governance. Use SDLC personas for implementation readiness and delivery execution.

---

## How to Run an SDLC Persona Review

### 1. Name the review point

State whether this is Issue Shaping, Build Planning, PR Readiness, Release Readiness, or Learning Review.

### 2. Select personas

Choose the smallest set of personas needed for the risk at hand. More personas are not better if they create noise.

### 3. Apply signature questions

For each activated persona, apply their signature questions to the capability, issue, PR, or release plan.

### 4. Capture concise findings

For each persona, record:

- What they challenged
- What delivery risk or gap was surfaced
- What is ready enough to proceed
- What action is needed before the next gate

Keep SDLC findings small and action-oriented. A useful finding should fit in one short paragraph or table row and answer:

- What implementation decision does this affect?
- What risk does it expose?
- What evidence level supports it?
- What action is needed next?

Use the same evidence labels as the core EasyEA workflow:

| Evidence Level | Meaning |
|----------------|---------|
| None | The finding is a simulated concern only |
| Assumption | Plausible, but not confirmed |
| Human-confirmed | Confirmed by the human during the engagement |
| Evidence-backed | Supported by a cited artifact, test result, policy, user research, production observation, or delivery data |

---

## What Good SDLC Output Looks Like

Good SDLC output helps a human decide whether the work is ready for the next delivery step.

It should produce concrete next actions, such as:

- split the issue smaller
- add missing acceptance criteria
- add or change tests
- clarify ownership
- define rollback
- add monitoring
- update documentation
- mark an assumption as accepted risk

It should not produce broad commentary, generic best practices, or simulated approval.
