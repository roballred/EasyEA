# How EasyARB Works

The EasyARB review is not a meeting. It is a structured simulated critique step built into the EasyEA workflow. At Step 5 (Choose the Way Forward), you activate a set of ARB personas to challenge the options before a recommendation is made.

The goal is to surface blind spots, expose weak assumptions, pressure-test decisions, and produce concrete recommendations the human can accept, modify, or reject. ARB output is decision support, not validation.

Every ARB finding must be labeled **Simulated** unless it cites a real evidence source outside the persona critique. Every ARB recommendation is **Simulated** until a human accepts it.

> Persona definitions live in [`/personas/`](../personas/README.md). The same persona library is shared with EasySDLC.

---

## When to Run EasyARB

Run EasyARB at **Step 5 — Choose the Way Forward**, after options have been drafted and before a recommendation is finalized.

Do not skip EasyARB for significant decisions. A significant decision is one that:

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
| Strategic alignment before scoping | Thomas Reed — does this fit the strategic agenda? |

Discovery Mode findings feed directly into `direction.md` and `personas.md`. They are not a review and they are not evidence — they are a structured way to ask better questions at the start. Discovery Mode is the one place ARB personas generate content rather than critique; label everything **Simulated**.

---

## How to Run an EasyARB Review

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
| Audit-readiness, validation rigor, or maturity models | Jordan Hayes |

Always include **Lisa Rodriguez** (Business Architect).

**On overlapping personas:** Some personas share territory. Dev Patel (Integration) and Grace Holloway (Data & Analytics) both ask about data flow and quality — Dev from a systems reliability angle, Grace from a stewardship and governance angle. Omar Singh (Security) and Maya Patel (Privacy) both ask about trust and access — Omar from an attack surface angle, Maya from a consent and minimisation angle. You do not need both overlapping personas for every decision. Choose the one whose angle is most relevant to the risk at hand, or activate both only when the decision has significant exposure in that area.

---

### 2. Choose the review mode

Default to **Standard** unless there is a reason to shift. Mode definitions live in [`personas/README.md`](../personas/README.md#modes); each persona file specifies how it behaves in each mode.

---

### 3. Apply each persona's signature questions

For each activated persona, apply their three signature questions directly to the options on the table. Surface what each question reveals — gaps, risks, missing information, or weak assumptions.

Do not skip questions because the answers seem obvious. The value of the review is in forcing explicit answers.

---

### 4. Capture findings and recommendations separately

For each activated persona, return both:

**Findings** — what the persona observed.

**Recommendations** — what the persona would change about the proposal, with reasoning.

Both go into the synthesized review artifact. Findings without recommendations leave the human guessing; recommendations without findings have no foundation.

---

### 5. Synthesize across personas

When multiple personas have reviewed, synthesize their findings and recommendations into one artifact (typically `arb-findings.md`, separate from `options.md`):

- **Agreed concerns** — multiple personas converged
- **Conflicting concerns** — personas disagree (named: "Lisa says X, Emily says Y")
- **Confirmed sound** — what reviewers explicitly approved
- **Agreed recommendations** — multiple personas pushed for the same change
- **Conflicting recommendations** — personas pushed for incompatible changes (surfaced, not resolved)
- **Novel recommendations** — only one persona raised it (flag for human attention)
- **Decisions the human must make** — explicit list

The chair role (synthesizer) does not have an opinion. Its job is faithful representation, not adjudication.

---

### 6. Findings format

A useful ARB finding fits in one short paragraph or table row and answers:

- What decision does this affect?
- What is the risk or opportunity?
- What evidence level supports it? (See [`framework/workflow.md`](../framework/workflow.md) for evidence label definitions.)
- What action is needed next?

---

### 7. Recommendations format

A useful ARB recommendation fits in one short paragraph or table row and includes:

- The recommended change (specific and actionable)
- The reasoning — tied back to the persona's signature questions or lens
- Evidence level (always **Simulated** until accepted)
- The decision the recommendation affects

Recommendations must come with reasoning, not just conclusions. A bare "I recommend X" gives the human less to work with than "I recommend X because [chain of reasoning tied to signature questions]." Reasoning lets the human evaluate the move rather than absorb it.

---

## Output Template

```markdown
# ARB Review — [Decision]

## Personas activated
- Lisa Rodriguez (Business Architect) — Standard
- Sarah Kim (Enterprise Architect) — Standard
- Emily Johnson (CFO) — Standard

## Findings

### Lisa Rodriguez

| Finding | Evidence |
|---------|----------|
| Success metric is not defined | Simulated |
| Two divisions already track this manually | Evidence-backed |

### Sarah Kim
...

## Recommendations

### Lisa Rodriguez

| Recommendation | Reasoning |
|----------------|-----------|
| Define a measurable success indicator before scoping is finalized | Without a baseline metric, no one will be able to tell if the capability is working. Signature: How will we measure success? |

### Sarah Kim
...

## Synthesis

**Agreed concerns:** No shared service assessment has been done (Sarah Kim, Emily Johnson, Thomas Reed).

**Conflicting recommendations:** Sarah recommends extending the existing identity capability; Lisa recommends building standalone for time-to-value. Surface for human decision.

**Decisions the human must make:**
1. Standalone build vs. extend existing capability
2. Whether a 5-year TCO estimate is required before commit
3. Whether to defer until shared service assessment completes
```

---

## Adapting EasyARB for Smaller or Less-Formal Organizations

Not every organization has a CFO reviewing technology decisions or a Central IT Director accountable for shared services. If a persona feels structurally mismatched to your context, adapt their questions and recommendations rather than skipping them entirely. See [`/personas/README.md`](../personas/README.md) for adaptation guidance.

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

## What Good EasyARB Output Looks Like

A completed ARB review produces clear findings and concrete recommendations for each activated persona, plus a synthesized view that surfaces agreement and disagreement faithfully.

It is not a pass/fail gate, and it is not validation. It is a structured way for the human to make decisions with more confidence.

If a persona raises a recommendation that the human accepts, the *decision to act on it* is human-confirmed. Whether the recommendation was *correct* is validated through outcomes at Step 7 (Track and Adjust).
