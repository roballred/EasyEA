# Options — Technology Request Portal

**Version:** v1
**Last Updated:** 2026-03-30
**EasyEA Step:** 5 — Choose the Way Forward

---

## Options Overview

| | Option A | Option B | Option C |
|--|---------|---------|---------|
| **Approach** | Build on existing IT service management platform | Lightweight custom portal | Adopt a commercial request management product |
| **Phase 1 cost** | Low — platform already licensed | Medium — development effort | High — new licensing + setup |
| **Time to value** | 4–6 weeks | 8–12 weeks | 6–10 weeks |
| **Flexibility** | Low — constrained by platform | High — built to spec | Medium — configurable within product limits |
| **Maintenance burden** | Low — platform team owns it | High — Central IT owns the code | Low — vendor owns it |

---

## Option Details

### Option A — Build on Existing IT Service Management Platform

Use the organization's existing ITSM tool (e.g. ServiceNow, Jira Service Management) to implement the request workflow, status tracking, and decision recording.

**Value:** Fastest path to Phase 1. No new licensing. Users may already know the platform.
**Risks:**
- ITSM platforms are designed for incidents and service requests — technology approval workflows require customization that may be awkward to maintain
- Form flexibility is limited; structured review criteria may not fit neatly into the platform's model
- If the ITSM platform is already overloaded with tickets, a new request type may get lost in the noise

---

### Option B — Lightweight Custom Portal

Build a focused web application purpose-built for technology requests — submission, routing, review, decision recording, and status visibility.

**Value:** Built exactly to the personas' needs. No platform constraints. Can implement the technology catalog and structured review criteria cleanly.
**Risks:**
- 8–12 week build timeline means slower time to value
- Central IT owns the code — ongoing maintenance requires developer capacity
- Scope creep risk is high if requirements are not locked before build begins

---

### Option C — Adopt a Commercial Request Management Product

License a product purpose-built for IT request or approval management (e.g. Freshservice, Kissflow, or similar).

**Value:** Purpose-built functionality, vendor support, faster setup than custom build.
**Risks:**
- New licensing cost requires budget approval
- Configuration to match EasyEA's structured review and decision recording model may require significant setup
- Vendor dependency — roadmap changes or pricing changes are outside Central IT's control

---

## ARB Review

### Lisa Rodriguez — Business Architect (Standard)

**Signature questions applied:**

*What capability are we enabling?*
All three options deliver CAP-01, CAP-03, CAP-04, and CAP-05 in Phase 1. The capability set is the same — the options differ in how those capabilities are delivered and at what cost.

*How will we measure success?*
No option currently specifies metrics. Before committing, define: time from submission to decision (target: 2 business days for standard requests), percentage of requests submitted through the portal vs. email (target: >80% within 90 days), and Dana's review time per request.

*Who benefits from this design — and how?*
All three personas benefit in Phase 1. The ordering of benefit matters: Marcus gets the most immediate value from Option A's speed to delivery. Dana gets the most tailored experience from Option B. Priya's portfolio intelligence (Phase 3) is not meaningfully affected by the option choice.

**Finding:** Success metrics are missing. All options should be held to the same measurement framework before a recommendation is finalized.

---

### Emily Johnson — CFO (Standard)

**Signature questions applied:**

*What is the total cost of ownership over 5 years?*
Option A: low upfront, but ITSM customization accumulates technical debt — maintenance cost rises over time. Option B: moderate upfront build cost, steady maintenance load on Central IT. Option C: licensing cost is recurring and grows with users; vendor price changes are a risk.

*Why isn't this a shared service?*
If multiple departments or divisions run their own technology request processes, this is a consolidation opportunity. A shared portal serving all of them changes the TCO math significantly for all three options.

*Who supports this and what does it cost?*
Option A: ITSM platform team. Option B: Central IT developers. Option C: vendor + Central IT admin. None of the options have documented the ongoing support model or estimated the FTE cost.

**Finding:** No option has a documented support model or 5-year cost estimate. Option C's recurring license cost needs to be compared against Option B's developer time before a cost-based recommendation is possible.

---

### Alex Chen — Human-Centered Designer (Standard)

**Signature questions applied:**

*Where will users struggle most?*
Marcus's biggest risk is a form that asks too many questions — he will abandon it. All three options need a form length constraint (recommendation: no more than 8 fields for a standard request). Option A carries the highest risk here — ITSM forms tend to be built for IT staff, not business requesters.

*Was this tested with real users?*
No. Before Phase 1 goes live, Marcus and Dana should test the submission and review experience with a prototype. Option B offers the most flexibility to iterate based on that feedback.

*Is this experience inclusive for everyone?*
Not assessed. Option C (commercial product) is most likely to have accessibility compliance built in. Options A and B require explicit accessibility testing.

**Finding:** Option A carries the highest UX risk for Marcus. A form usability test should be required before any option goes live. Accessibility has not been assessed for Options A or B.

---

### Jake Lawson — Veteran Architect (Standard)

**Signature questions applied:**

*What breaks first — and how do you know?*
Option A: ITSM customizations break during platform upgrades — and nobody notices until someone tries to submit a request. Option B: custom code breaks when the developer who built it leaves. Option C: vendor changes break integrations and configuration without warning.

*Who owns this in production in year 5?*
Option A: ITSM platform team — but they may not own the custom workflow logic. Option B: whoever is in Central IT's developer role in year 5 — documentation must be exceptional. Option C: vendor owns the product, Central IT owns the configuration — configuration documentation is critical.

*Show me the rollback plan.*
None of the options have a rollback plan. What happens if the portal goes down? Requests revert to email? That needs to be explicitly defined and communicated so Marcus knows what to do.

**Finding:** All options are missing a fallback plan. Option B carries the highest long-term maintenance risk if staffing changes. Option A's upgrade fragility is underestimated.

---

## ARB Findings Summary

| Finding | Affects | Action Required Before Recommendation |
|---------|---------|--------------------------------------|
| Success metrics not defined | All options | Define time-to-decision, portal adoption rate, and review time targets |
| Support model and 5-year cost not documented | All options | Document ongoing ownership and estimate FTE + licensing cost per option |
| Form usability not tested | All options, especially A | Prototype submission form and test with Marcus before going live |
| Accessibility not assessed | Options A and B | Require accessibility review as part of Phase 1 acceptance criteria |
| No fallback plan if portal is unavailable | All options | Define and communicate the fallback process before launch |
| Option B maintenance risk if staffing changes | Option B | Require documentation standard and knowledge transfer plan as delivery condition |

---

## Recommendation

**Option A — with conditions** for a Phase 1 proof of concept, moving to Option B if the ITSM platform proves too constrained.

**Rationale:**
- Phase 1 (submission, status, decision recording) can be validated quickly using the existing platform — no new licensing, no build time
- The four ARB findings that apply to all options (metrics, support model, usability testing, fallback plan) must be resolved before go-live regardless of which option is chosen
- If the ITSM platform's form flexibility is insufficient to keep Marcus's submission experience under 8 fields, switch to Option B before Phase 2

**Conditions for go-live:**
- [ ] Success metrics defined and baselined
- [ ] Support ownership documented
- [ ] Submission form tested with at least two requesters
- [ ] Fallback process defined and communicated
- [ ] Accessibility review completed
