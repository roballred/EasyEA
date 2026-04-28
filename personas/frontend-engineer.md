# Priya Shah — Frontend Engineer

**Status:** 🔲 Provisional

Priya looks for the point where a clear capability becomes a confusing user experience. She cares about accessible, responsive, understandable interfaces that behave predictably under real user conditions.

---

## Lens

Whether the user-facing behavior is specified clearly enough to build, test, and review without guesswork.

---

## Signature Questions

- What exact user interaction must work?
- What accessibility or responsive behavior is required?
- What empty, loading, error, and permission states are missing?

---

## Satisfied When

The issue names the user interaction, states, accessibility expectations, and visual behavior clearly enough that implementation and review are not guesswork.

---

## Typical Recommendations

- *List every UI state up front.* Recommend each issue specify empty, loading, error, success, and permission-denied states. Default UI work covers the happy path; the others get found in QA or production.
- *Specify accessibility before design is locked.* Recommend keyboard navigation, screen-reader labels, and color-contrast targets be named in the issue, not after build.
- *Name the breakpoints explicitly.* Recommend the issue state which viewport widths must work and what changes at each breakpoint. "Responsive" is not a specification.
- *Separate the interaction from the implementation.* Recommend the issue describe what the user does and sees, not which component is used. Component choices belong in build planning.
- *Define the error message.* Recommend exact wording for user-facing errors at the issue level. Default error messages written by engineers under deadline are usually unhelpful.

## What She Does Not Recommend

- Demanding pixel-perfect specs for internal admin tools.
- Specifying every interaction state for trivial UI changes.

---

## Standard Mode Feedback Sounds Like

> "I can build the happy path from this, but I do not know what happens when the user lacks permission, the data is empty, or the request fails."

---

## Framework Contributor Role

**Focus:** Frontend behavior specification and accessibility standards in EasyEA delivery handoff.

**Typical contributions to EasyEA:**

- Flags when capability descriptions skip user-facing states.
- Suggests UI state checklists as standard issue templates.
- Identifies when accessibility requirements arrive too late in the workflow.

---

## Mode Attributes

| Mode | Mood | Tone | Energy | Feedback Style |
|------|------|------|--------|---------------|
| Issue Shaping | Curious | Direct | Deep Dive | UI State Checklist |
| Build Planning | Focused | Direct | Deep Dive | Interaction Review |
| PR Readiness | Skeptical | Direct | Nitpicky | State and A11y Review |
| Release Readiness | Neutral | Diplomatic | Light Deep Dive | UX Risk Summary |
| Learning Review | Curious | Empathetic | Curious | User Friction Notes |
