# How EasySDLC Works

EasySDLC personas are simulated delivery reviewers used after EasyEA has selected a direction and is preparing to turn capabilities into implementation issues, PRs, releases, and operational support.

EasyARB personas help decide whether a direction is sound. EasySDLC personas help decide whether the work is ready to build, test, ship, operate, and learn from. Both invoke personas from the same shared library.

EasySDLC persona output is simulated critique. It may expose useful gaps, propose concrete improvements to the work, and surface delivery risks — but it is not validation, and persona recommendations must not be presented as if real delivery team members reviewed or approved the work.

> Persona definitions live in [`/personas/`](../personas/README.md). This document covers the SDLC review protocol; for how SDLC agents *do their work*, see [`methodology.md`](methodology.md).

---

## When to Use EasySDLC

Use EasySDLC personas after **Step 6 — Coordinate the Work**, when the human has selected the implementation direction and the team is preparing implementation issues or PR-ready requirements.

Use them again when a PR, release, or production change needs a lightweight delivery-readiness check.

Do not use SDLC personas to override human decisions. Use them to make delivery risks visible and produce concrete recommendations before implementation moves forward.

---

## SDLC Review Points

The five SDLC modes — Issue Shaping, Build Planning, PR Readiness, Release Readiness, Learning Review — are defined in [`personas/README.md`](../personas/README.md#easysdlc-modes-delivery-readiness). The mode you select is also the review point.

| Review Point | Output |
|--------------|--------|
| Issue Shaping | Issue slices, acceptance criteria gaps, dependencies, recommendations |
| Build Planning | Technical risks, sequencing, ownership gaps, recommendations |
| PR Readiness | Review focus, missing tests, documentation gaps, recommendations |
| Release Readiness | Rollout, rollback, monitoring, support readiness, recommendations |
| Learning Review | Lessons learned and framework improvements |

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
| Issue slicing, scope control, acceptance criteria | Jordan Lee |
| User interface, accessibility, frontend behavior | Priya Shah |
| APIs, services, data model, domain logic | Marco Alvarez |
| Tests, regression risk, acceptance coverage | Nina Patel |
| Deployment, environments, rollback, observability | Sam Rivera |
| Implementation security, secrets, authorization | Omar Brooks |
| Data migration, reporting, data quality | Grace Lin |
| Support model, help desk, runbooks, incident handoff | Taylor Morgan |
| Documentation, training, release notes | Casey Nguyen |
| Delivery sequencing, dependencies, team capacity | Morgan Ellis |

Some lenses overlap with EasyARB personas. Use ARB personas for architecture direction and governance. Use SDLC personas for implementation readiness and delivery execution.

---

## How to Run an EasySDLC Review

### 1. Name the review point

State whether this is Issue Shaping, Build Planning, PR Readiness, Release Readiness, or Learning Review.

### 2. Select personas

Choose the smallest set of personas needed for the risk at hand. More personas are not better if they create noise.

### 3. Apply signature questions

For each activated persona, apply their signature questions to the capability, issue, PR, or release plan.

### 4. Capture findings and recommendations separately

For each activated persona, return both:

**Findings** — what the persona observed about the work.

**Recommendations** — what the persona would change, with reasoning tied to their signature questions.

### 5. Synthesize across personas

When multiple personas have reviewed, produce one synthesized artifact (typically `sdlc-findings.md`):

- **Agreed concerns** — multiple personas converged
- **Conflicting concerns** — personas disagree (named)
- **Confirmed ready** — what reviewers explicitly approved
- **Agreed recommendations** — multiple personas pushed for the same change
- **Conflicting recommendations** — personas pushed for incompatible changes
- **Novel recommendations** — only one persona raised it
- **Decisions the human must make** before the next gate

---

## Findings Format

A useful SDLC finding fits in one short paragraph or table row and answers:

- What implementation decision does this affect?
- What risk does it expose?
- What evidence level supports it? (See [`framework/workflow.md`](../framework/workflow.md) for evidence label definitions.)
- What action is needed next?

---

## Recommendations Format

A useful SDLC recommendation fits in one short paragraph or table row and includes:

- The recommended change (specific and actionable — split this issue, add this test, define this rollback path)
- The reasoning — tied back to the persona's signature questions
- Evidence level (always **Simulated** until accepted)
- The implementation decision the recommendation affects

Recommendations must come with reasoning, not just conclusions. A recommendation like "split this issue smaller" is more useful with the reasoning that explains *why* — "the acceptance criteria can't be tested as a single unit; here are the natural cleavage points."

---

## What Good EasySDLC Output Looks Like

Good SDLC output helps a human decide whether the work is ready for the next delivery step.

It produces concrete next actions, such as:

- Split the issue smaller
- Add missing acceptance criteria
- Add or change tests
- Clarify ownership
- Define rollback
- Add monitoring
- Update documentation
- Mark an assumption as accepted risk

It does not produce broad commentary, generic best practices, or simulated approval.

If a persona raises a recommendation that the human accepts, the *decision to act on it* is human-confirmed. Whether the recommendation was *correct* is validated through delivery outcomes (test results, production behavior, support load).
