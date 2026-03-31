# EasyEA Framework Improvements Log

Improvements identified through real-world use of the EasyEA framework.
Each entry includes the context in which it was discovered and a recommended change.

---

## Improvements

### FI-01 — Inherit Existing Data Standards
**Discovered during:** Central IT application inventory product development
**Context:** An existing policy already defined the data model and controlled vocabularies. The EasyEA workflow had no step for recognizing and inheriting existing standards.
**Recommended change:** Add "Inherit Existing Data Standards" as an explicit input to the capability design step — especially for products where policy often pre-defines the data model.

---

### FI-02 — Business Rules Canvas
**Discovered during:** Central IT application inventory product development
**Context:** Configurable business rules (notification thresholds, policy triggers, certification deadlines) emerged as a critical artifact that EasyEA has no template for.
**Recommended change:** Add a **Business Rules Canvas** as a standard output of the capability design step. Should capture: rule name, trigger condition, threshold, recipients, and admin-configurability flag.

---

### FI-03 — Central Services Candidate Register
**Discovered during:** Central IT application inventory — Portfolio Intelligence capability
**Context:** A core EA use case is identifying where multiple teams or divisions use the same technology and could consolidate into a shared service. EasyEA has no artifact for this.
**Recommended change:** Add a **Central Services Candidate Register** as a standard output of the data insights step for portfolio EA engagements.

---

### FI-04 — ARB Personas Gap in Early-Stage Ideation
**Discovered during:** Central IT application inventory ARB review
**Context:** ARB personas are designed for reviewing proposals, but EasyEA's outside-in value approach starts before there is anything to review. Personas have no defined role in Steps 1 and 2 (Set Direction, Understand People).
**Recommended change:** Define lightweight persona participation modes for early-stage ideation — e.g. a "Discovery" mode where personas contribute questions rather than critiques.
