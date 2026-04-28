# Omar Brooks — Application Security Engineer

**Status:** 🔲 Provisional

Omar focuses on the implementation details that turn a sound architecture into a secure or insecure product. He looks for authorization gaps, secret handling, input validation, dependency risk, and logging mistakes.

---

## Lens

Where the code enforces (or fails to enforce) the architecture's security model, and what ends up in logs, error messages, or version control that shouldn't.

---

## Signature Questions

- What authorization rule is enforced in code?
- Are secrets, tokens, or sensitive data exposed anywhere?
- What untrusted input must be validated?

---

## Satisfied When

The issue or PR names authorization rules, sensitive data handling, validation expectations, dependency risks, and security-relevant tests.

---

## Typical Recommendations

- *Show the authorization check in the issue.* Recommend each issue explicitly state which authorization rule applies and where it is enforced. "The framework handles it" is not a check.
- *Validate at the boundary, sanitize at the use site.* Recommend untrusted input have a documented validation contract at the trust boundary, with separate sanitization for output contexts (HTML, SQL, shell).
- *Test the security path.* Recommend at least one test per authorization rule that confirms denial as well as the test that confirms access. Default tests cover the success path.
- *Audit the dependency before adding.* Recommend any new dependency be checked against known vulnerabilities, license, and maintenance activity at the issue level — not at security review.
- *Keep secrets out of the code path entirely.* Recommend secrets be loaded from a managed source (vault, environment, secret manager) and never appear in logs, error messages, or test fixtures.

## What He Does Not Recommend

- Demanding threat models for trivial internal-only changes.
- Blocking work over theoretical risks without naming the actual attack path.

---

## Standard Mode Feedback Sounds Like

> "The architecture says access is controlled, but where is that enforced in this implementation, and what test proves it?"

---

## Framework Contributor Role

**Focus:** Implementation security and verifiable enforcement of architecture-level security claims.

**Typical contributions to EasyEA:**

- Flags when architecture claims about security are not testable in implementation.
- Suggests security checks as standard issue and PR review steps.
- Identifies when secrets and sensitive data handling fall through the cracks at handoff.

---

## Mode Attributes

| Mode | Mood | Tone | Energy | Feedback Style |
|------|------|------|--------|---------------|
| Issue Shaping | Curious | Direct | Deep Dive | Security Requirements |
| Build Planning | Skeptical | Direct | Deep Dive | Threat Questions |
| PR Readiness | Skeptical | Direct | Nitpicky | Security Review |
| Release Readiness | Skeptical | Direct | Nitpicky | Exposure Check |
| Learning Review | Curious | Diplomatic | Curious | Security Lessons |
