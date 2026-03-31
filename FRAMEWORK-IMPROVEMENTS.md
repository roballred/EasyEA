# EasyEA Framework Improvements Log

Improvements identified through real-world use of the EasyEA framework.
Each entry includes the context in which it was discovered, a recommended change, and a link to the GitHub issue tracking it.

---

## Improvements

### FI-01 — Inherit Existing Data Standards
**Issue:** [#26](https://github.com/roballred/EasyEA/issues/26)
**Status:** Open
**Discovered during:** Central IT application inventory product development
**Context:** An existing policy already defined the data model and controlled vocabularies. The EasyEA workflow had no step for recognizing and inheriting existing standards.
**Recommended change:** Add "Inherit Existing Data Standards" as an explicit input to the capability design step — especially for products where policy often pre-defines the data model.

---

### FI-02 — Business Rules Canvas
**Issue:** [#27](https://github.com/roballred/EasyEA/issues/27)
**Status:** Partially resolved — `projects/_template/business-rules.md` created. Remaining: tie it as a named output in `framework/workflow.md` Step 2.
**Discovered during:** Central IT application inventory product development
**Context:** Configurable business rules (notification thresholds, policy triggers, certification deadlines) emerged as a critical artifact that EasyEA has no template for.
**Recommended change:** Add a **Business Rules Canvas** as a standard output of the capability design step. Should capture: rule name, trigger condition, threshold, recipients, and admin-configurability flag.

---

### FI-03 — Central Services Candidate Register
**Issue:** [#28](https://github.com/roballred/EasyEA/issues/28)
**Status:** Open
**Discovered during:** Central IT application inventory — Portfolio Intelligence capability
**Context:** A core EA use case is identifying where multiple teams or divisions use the same technology and could consolidate into a shared service. EasyEA has no artifact for this.
**Recommended change:** Add a **Central Services Candidate Register** as a standard output of the data insights step for portfolio EA engagements.

---

### FI-04 — ARB Personas Gap in Early-Stage Ideation
**Issue:** [#29](https://github.com/roballred/EasyEA/issues/29)
**Status:** Open
**Discovered during:** Central IT application inventory ARB review
**Context:** ARB personas are designed for reviewing proposals, but EasyEA's outside-in value approach starts before there is anything to review. Personas have no defined role in Steps 1 and 2 (Set Direction, Understand People).
**Recommended change:** Define lightweight persona participation modes for early-stage ideation — e.g. a "Discovery" mode where personas contribute questions rather than critiques.

---

### FI-05 — Capability Overview Table Cannot Express Primary vs Secondary Beneficiaries
**Issue:** [#30](https://github.com/roballred/EasyEA/issues/30)
**Status:** Open
**Discovered during:** Technology Request Portal test engagement
**Context:** The capabilities overview table has a single "Serves" column. In practice, many capabilities serve one persona directly (solving their pain point) and another indirectly (as a downstream benefit). The table flattens this, and the distinction is only recoverable by reading the traceability section.
**Recommended change:** Add a "Primary" and "Secondary" split to the Serves column in the capabilities overview table, or add a note convention to distinguish direct from indirect benefit.

---

### FI-06 — Value Chain in Personas Template Is Positioned Too Early
**Issue:** [#31](https://github.com/roballred/EasyEA/issues/31)
**Status:** Open
**Discovered during:** Technology Request Portal test engagement
**Context:** The value chain section in `personas.md` sits at the bottom of the template but cannot be written until all personas are defined and capabilities are at least drafted. In practice it is the last thing completed, not a natural continuation of the persona work.
**Recommended change:** Add an explicit note in the template that the value chain is completed after capabilities are drafted — and consider moving it to a shared section between `personas.md` and `capabilities.md`, or adding a brief reference to it in `capabilities.md`.

---

### FI-07 — No Heuristic for How Many ARB Personas to Activate
**Issue:** [#32](https://github.com/roballred/EasyEA/issues/32)
**Status:** Resolved — commit `6123573`
**Discovered during:** Technology Request Portal ARB review (Step 5)
**Context:** The ARB framework lists ten personas and gives guidance on which to select based on decision type, but provides no guidance on how many to activate for a given decision size or risk level.
**Resolution:** Added decision sizing guide to `CLAUDE.md` and `arb/how-arb-works.md` — small/low-risk (1–2 personas), standard (3–5), significant/high-risk (6–10).
