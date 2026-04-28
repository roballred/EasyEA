# EasyEA Personas

A single library of agent personas used across EasyEA. The same persona definitions power two invocation modes:

- **Reviewer mode** — gated, structured critique at decision points (used by EasyARB at Step 5 and EasySDLC at Step 6).
- **Advisor mode** — on-demand collaborator during everyday work; responds in lens, recommends improvements, helps the human think.

Personas do not just critique. They make recommendations for improvements. That is core to the framework.

> **Validated vs Provisional:** Personas marked ✅ have been used in at least one real engagement and their signature questions and recommendations have been tested against actual work. Personas marked 🔲 are well-formed hypotheses — use them, but treat their questions and recommendations as starting points and refine them after each use.

---

## Library

### Architecture & Strategy (used by EasyARB)

| Persona | Role | Status |
|---------|------|--------|
| [Lisa Rodriguez](business-architect.md) | Business Architect | ✅ Validated |
| [Sarah Kim](enterprise-architect.md) | Enterprise Architect | 🔲 Provisional |
| [Emily Johnson](cfo.md) | CFO | ✅ Validated |
| [Alex Chen](human-centered-designer.md) | Human-Centered Designer | ✅ Validated |
| [Jake Lawson](veteran-architect.md) | Veteran Architect | ✅ Validated |
| [Omar Singh](security-architect.md) | Security Architect | 🔲 Provisional |
| [Dev Patel](integration-architect.md) | Integration Architect | 🔲 Provisional |
| [Maya Patel](data-privacy-architect.md) | Data Privacy Architect | 🔲 Provisional |
| [Grace Holloway](data-analytics-architect.md) | Data & Analytics Architect | 🔲 Provisional |
| [Jordan Hayes](architecture-governance-auditor.md) | Architecture Governance Auditor | 🔲 Provisional |
| [Thomas Reed](state-cio.md) | State CIO / Executive Sponsor | 🔲 Provisional |

### Delivery & Operations (used by EasySDLC)

| Persona | Role | Status |
|---------|------|--------|
| [Jordan Lee](delivery-lead.md) | Delivery Lead | 🔲 Provisional |
| [Priya Shah](frontend-engineer.md) | Frontend Engineer | 🔲 Provisional |
| [Marco Alvarez](backend-engineer.md) | Backend Engineer | 🔲 Provisional |
| [Nina Patel](qa-engineer.md) | QA Engineer | 🔲 Provisional |
| [Sam Rivera](devops-engineer.md) | DevOps Engineer | 🔲 Provisional |
| [Omar Brooks](application-security-engineer.md) | Application Security Engineer | 🔲 Provisional |
| [Grace Lin](data-engineer.md) | Data Engineer | 🔲 Provisional |
| [Taylor Morgan](support-analyst.md) | Support Analyst | 🔲 Provisional |
| [Casey Nguyen](documentation-and-training-lead.md) | Documentation and Training Lead | 🔲 Provisional |
| [Morgan Ellis](engineering-manager.md) | Engineering Manager | 🔲 Provisional |

---

## Persona File Structure

Every persona file contains:

1. **Lens** — what they see that others miss
2. **Signature questions** — three questions they apply to any work
3. **Satisfied when** — what the proposal must show before they will support it
4. **Typical recommendations** — the kinds of changes they push for, with reasoning
5. **What they do not recommend** — boundaries that keep the persona in lens
6. **Framework contributor role** — what gaps they surface in EasyEA itself
7. **Mode attributes** — mood, tone, energy, and feedback style across modes

---

## Modes

Personas operate in different modes depending on what the work needs. ARB and SDLC use different mode sets.

### EasyARB modes (architecture review)

| Mode | When to Use |
|------|-------------|
| **Coaching** | Early-stage work, first review, team is new to the problem |
| **Standard** | Normal architectural review of a reasonably formed proposal |
| **Red Team** | Decision is nearly final and needs hard challenge before commitment |
| **Executive** | Strategic-level summary for leadership, skip the detail |
| **Governance** | Formal compliance or standards review |

> **On Red Team mode:** Red Team is not hostile for its own sake. It is the persona operating with the assumption that the proposal will be approved — and using that assumption to find every reason it shouldn't be. Expect rapid questions, direct challenges, and little patience for vague answers. The goal is to surface what needs to be fixed before commitment, not to reject the work.

### EasySDLC modes (delivery readiness)

| Mode | When to Use |
|------|-------------|
| **Issue Shaping** | A capability is becoming implementation issues |
| **Build Planning** | The team is deciding how to implement the work |
| **PR Readiness** | A PR is ready for human review |
| **Release Readiness** | A change is about to ship |
| **Learning Review** | The team is capturing what worked, failed, or changed |

Each persona file's "Mode Attributes" table specifies the mood, tone, energy, and feedback style that persona uses in each applicable mode.

---

## Findings vs Recommendations

When a persona returns from a review, output is split:

- **Findings** — what the persona observed (each labeled with an evidence level)
- **Recommendations** — what the persona would change, with reasoning tied to their signature questions (always labeled Simulated until accepted by the human)

Evidence labels are defined in [`framework/workflow.md`](../framework/workflow.md). The human accepts, modifies, or rejects each recommendation. Acceptance makes the *decision* human-confirmed; whether the recommendation was *correct* is validated through outcomes at Step 7.

---

## Adapting for Smaller or Less-Formal Organizations

Not every organization has a CFO reviewing technology decisions or a Central IT Director accountable for shared services. If a persona feels structurally mismatched to your context, adapt their questions and recommendations rather than skipping the persona entirely.

| Persona | In a smaller organization, ask instead... |
|---------|------------------------------------------|
| Emily Johnson (CFO) | Who is responsible for budget, and what is the realistic spend ceiling over two years? |
| Thomas Reed (State CIO) | Is there another team that would benefit from this, and should we build it to share? |
| Sarah Kim (Enterprise Architect) | Have we checked whether this overlaps with anything else we are already doing? |

The underlying concern each persona represents — cost, scale, duplication — is valid at any organizational size. Adapt the framing, not the question.
