# Capability Criteria

Use these criteria to validate every capability before it is finalized. A capability that fails any criterion should be removed or reframed.

A capability describes **what** an organization must be able to do — not how it does it. It is stable over time even when processes, tools, or technology change.

The test of a well-formed capability: can AI read it and use it to design or build a business system or process? If not, it is not specific or grounded enough.

---

## Criteria

### 1. Defines What, Not How

**Guiding question:** Does this describe an outcome or business need rather than a process or implementation?

A capability should define what must happen, not the workflow or technology behind it. If it reads like a process step or a system feature, reframe it at a higher level.

> **Example of a process (wrong level):** "Send email notifications when records are 90 days old"
> **Example of a capability (right level):** "Configurable Alerting and Notifications"

---

### 2. Stable Over Time

**Guiding question:** Would this capability still exist if the implementation changed completely?

A capability should survive technology changes, process redesigns, and organizational restructuring. If it is tightly coupled to a specific tool or workflow, it is probably a process, not a capability.

---

### 3. Delivers Business Value

**Guiding question:** Does this directly impact the experience of the people it serves, compliance, or operational efficiency?

Every capability must provide measurable value. If the value is unclear or indirect, the capability may not be worth defining at this level.

---

### 4. Traceable to a Persona

**Guiding question:** Which persona's pain point or goal does this capability address?

No capability is valid without a clear line back to a real person's need. If you cannot name the persona and the specific pain point, the capability is not grounded.

---

### 5. Measurable

**Guiding question:** Can its success be measured using metrics, KPIs, or outcomes?

A capability must have at least one clear measure of success. If you cannot describe how you would know whether the capability is working well or poorly, it is not defined clearly enough.

---

### 6. Actionable for AI

**Guiding question:** Is this specific enough that AI can use it to design or build a system or process?

This is the EasyEA output test. A capability that is too vague or too broad cannot be handed to AI for implementation. It should be concrete enough to generate design decisions, specific enough to produce testable requirements, and bounded enough that AI knows when the capability has been delivered.

> **Too vague:** "Better data management"
> **Actionable:** "Data Quality Enforcement — validates records at the point of entry, enforces required fields and controlled values, prevents incomplete records from being saved"

---

### 7. Adoption Risk (when applicable)

**Guiding question:** Is successful delivery of this capability dependent on a change in how target users behave?

Some capabilities only deliver value if the people they serve actually use them. If a capability depends on adoption to succeed, that risk must be made explicit — not buried in an implementation assumption.

A capability is **adoption-critical** if:
- The entire value chain fails if target users do not engage with it
- It requires users to change established habits or workflows
- Resistance or friction patterns are already visible or predictable

When a capability is adoption-critical, the capability definition must include:

- **Adoption risk:** Why adoption is at risk — the friction or resistance pattern
- **Friction reduction:** What the product does to reduce that friction
- **Adoption success criterion:** A measurable indicator that adoption has succeeded
- **Fallback:** What happens if adoption fails — and whether the product still delivers value

> **Example:** A capability that allows agency staff to self-update their application records is adoption-critical if staff have historically relied on a central team to make changes for them. The capability definition must address why staff would change this habit, what removes the friction, how success is measured, and what the fallback is if adoption stalls.

---

## Capability Validation Checklist

Before adding a capability to `capabilities.md`, confirm:

- [ ] It describes what the organization must do, not how
- [ ] It would survive a change in technology or process
- [ ] It delivers clear value to the people it serves
- [ ] It traces to at least one persona's pain point or goal
- [ ] It has at least one measurable success indicator
- [ ] It is specific enough for AI to design or build from
- [ ] If adoption-critical: adoption risk, friction reduction, success criterion, and fallback are defined

---

## Artifact Consistency Checklist

Complete this checklist whenever a capability is added or changed. Inconsistency across artifacts — where a capability exists in one place but not others — creates gaps that are only caught during review, not during design.

- [ ] **Personas updated** — capability listed under the affected personas in `personas.md`
- [ ] **UX flow updated** — screens added or modified for the new or changed capability in the UX flow artifact
- [ ] **Data model updated** — schema supports the new or changed capability
- [ ] **Business rules updated** — if the capability has configurable behavior, business rules reflect it
- [ ] **Compliance register updated** — if the capability has compliance implications, `compliance-register.md` is updated

> This checklist must be completed in the same working session as the capability change. Do not defer artifact updates to a later session — inconsistency across artifacts is harder to catch and fix after the session ends.
