# How ARB Works

The Architecture Review Board (ARB) is not a meeting. It is a structured critique step built into the EasyEA workflow. At Step 5 (Choose the Way Forward), you activate a set of ARB personas to challenge the options before a recommendation is made.

The goal is to surface blind spots, expose weak assumptions, and pressure-test decisions before the organization commits to them.

---

## When to Run ARB

Run ARB at **Step 5 — Choose the Way Forward**, after options have been drafted and before a recommendation is finalized.

Do not skip ARB for significant decisions. A significant decision is one that:
- Involves meaningful investment of time, money, or people
- Creates dependencies that are hard to undo
- Affects multiple teams or personas
- Has security, privacy, or compliance implications

**How many personas to activate:**

| Decision size | Personas to activate |
|--------------|---------------------|
| Small, low-risk, easily reversible | 1–2 |
| Standard — moderate investment, affects multiple people | 3–5 |
| Significant — major investment, hard to undo, broad impact | 6–10 |

Always include **Lisa Rodriguez** (Business Architect). Every decision needs a business value check.

---

## Early-Stage Ideation — Discovery Mode

ARB personas can also be used before there is anything to review — at Steps 1 and 2, when direction and people are still being understood.

In **Discovery Mode**, personas do not critique a proposal. They contribute guiding questions that help surface what the engagement needs to explore. Activate 2–3 personas whose lens is most relevant to the problem space and ask: what questions would this person need answered before they could support any solution here?

| If you need to explore... | Activate in Discovery Mode... |
|--------------------------|-------------------------------|
| Whether a capability gap is real | Lisa Rodriguez — what outcome are we missing? |
| Security or trust concerns early | Omar Singh — what trust boundaries exist today? |
| Whether the problem affects the right people | Alex Chen — who is actually experiencing this? |
| Long-term ownership before committing | Jake Lawson — who would own this in three years? |
| Cost feasibility before scoping | Emily Johnson — is there a realistic budget for this? |

Discovery Mode findings feed directly into `direction.md` and `personas.md`. They are not a review — they are a structured way to ask better questions at the start.

---

## How to Run ARB

### 1. Select the relevant personas

Not every persona is relevant to every decision. Choose based on what the decision involves.

| If the decision involves... | Activate... |
|----------------------------|-------------|
| Capability alignment or duplication | Sarah Kim |
| Security, identity, or access | Omar Singh |
| Business value or missing KPIs | Lisa Rodriguez |
| Integrations, APIs, or data flow | Dev Patel |
| Cost, TCO, or funding model | Emily Johnson |
| User experience or adoption risk | Alex Chen |
| Data collection, consent, or retention | Maya Patel |
| Operational risk, maintenance, or ownership | Jake Lawson |
| Data quality, governance, or stewardship | Grace Holloway |
| Strategic fit or shared service potential | Thomas Reed |

Always include **Lisa Rodriguez** (Business Architect). Every decision needs a business value check.

**On overlapping personas:** Some personas share territory. Dev Patel (Integration) and Grace Holloway (Data & Analytics) both ask about data flow and quality — Dev from a systems reliability angle, Grace from a stewardship and governance angle. Omar Singh (Security) and Maya Patel (Privacy) both ask about trust and access — Omar from an attack surface angle, Maya from a consent and minimisation angle. You do not need both overlapping personas for every decision. Choose the one whose angle is most relevant to the risk at hand, or activate both only when the decision has significant exposure in that area.

---

### 2. Choose the review mode

Select the mode that fits the situation. Default to **Standard** unless there is a reason to shift.

| Mode | Use when... |
|------|-------------|
| Coaching | The work is early-stage or the team is finding their footing |
| Standard | The options are reasonably formed and ready for review |
| Red Team | The decision is nearly final and needs hard challenge |
| Executive | You need a leadership-ready summary, not a deep review |
| Governance | There are formal compliance, standards, or policy requirements |

> **On Red Team mode:** Red Team is not hostile for its own sake. It is the persona operating with the assumption that the proposal will be approved — and using that assumption to find every reason it shouldn't be. Expect rapid questions, direct challenges, and little patience for vague answers. The goal is to surface what needs to be fixed before commitment, not to reject the work.

---

### 3. Apply each persona's signature questions

For each activated persona, apply their three signature questions directly to the options on the table. Surface what each question reveals — gaps, risks, missing information, or weak assumptions.

Do not skip questions because the answers seem obvious. The value of the review is in forcing explicit answers.

---

### 4. Capture the findings

For each persona, record:
- What they challenged
- What gap or risk was surfaced
- What was confirmed as sound
- Any changes needed before the recommendation is finalized

Incorporate findings into `options.md` before writing the recommendation.

---

## Adapting ARB for Smaller or Less-Formal Organizations

Not every organization has a CFO reviewing technology decisions or a Central IT Director accountable for shared services. If a persona feels structurally mismatched to your context, adapt their questions rather than skipping them entirely.

| Persona | In a smaller organization, ask instead... |
|---------|------------------------------------------|
| Emily Johnson (CFO) | Who is responsible for budget, and what is the realistic spend ceiling over two years? |
| Thomas Reed (Central IT Director) | Is there another team that would benefit from this, and should we build it to share? |
| Sarah Kim (Enterprise Architect) | Have we checked whether this overlaps with anything else we are already doing? |

The underlying concern each persona represents — cost, scale, duplication — is valid at any organizational size. Adapt the framing, not the question.

---

## ARB Critique Patterns

These lightweight prompts can be used in addition to persona signature questions to deepen the review.

| Pattern | Question |
|---------|----------|
| **Missing Pieces** | What people, risks, or dependencies are we overlooking? |
| **Opposing View** | What would a skeptic or frontline worker challenge about this? |
| **Value Challenge** | Does this truly support the business goals — or does it just feel like it does? |
| **Simplicity Challenge** | What can be removed or simplified with no meaningful loss of value? |
| **Stress Test** | How does this option hold up under budget cuts, demand spikes, staff turnover, or a policy change? |

---

## What Good ARB Output Looks Like

A completed ARB review should produce clear findings for each activated persona — what they challenged, what was confirmed, and what needs to change. It is not a pass/fail gate. It is a structured way to make decisions with more confidence.

If a persona raises a challenge that cannot be answered, that is valuable information. It means the option is not ready for recommendation, or the recommendation needs to acknowledge the gap explicitly.
