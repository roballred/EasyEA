# ARB Review — EasyEA Framework Restructure

**Decision reviewed:** Shift EasyEA from a human instruction manual to an AI-guided framework — where Claude reads structured artifacts and drives EA work, grounded in a personas → capabilities chain with ARB review built into Step 5.

**Review date:** 2026-03-30
**Mode:** Standard
**Personas activated:** Lisa Rodriguez, Alex Chen, Sarah Kim, Jake Lawson, Thomas Reed

---

## Lisa Rodriguez — Business Architect

**Signature questions applied:**

*What capability are we enabling?*
We are enabling AI-guided architecture engagement delivery. But that capability is not defined anywhere in the framework itself. CLAUDE.md tells Claude how to operate. Nothing tells us what good output looks like, how fast it should come, or what "a successful engagement" means. The capability exists in practice but not on paper.

*How will we measure success?*
This is the most significant gap in the entire restructure. We have no metrics for the framework itself. How do we know if Claude is following the personas → capabilities chain correctly? How do we know if engagements run on EasyEA produce better decisions than engagements run without it? There is no baseline, no target, and no measurement mechanism. The FRAMEWORK-IMPROVEMENTS.md log captures structural gaps but not outcome quality.

*Who benefits — and how?*
Unclear. The framework was redesigned without defining who uses it. Is the user an enterprise architect? A product manager? A Central IT leader with no EA background? The answer shapes everything — what Claude says in CLAUDE.md, how the templates are structured, what "good" looks like. Right now the framework implicitly assumes the user knows enough EA to recognize when Claude is off track.

**Finding:** The framework has no success metrics and no defined user. Without these, there is no way to know if the restructure improved anything.

---

## Alex Chen — Human-Centered Designer

**Signature questions applied:**

*Where will users struggle most?*
At the start. CLAUDE.md is written for Claude, not for the human. A person opening this repo for the first time has no instructions on how to begin. There is no "say this to Claude to start an engagement" guide, no explanation of what they should bring to the first session, and no indication of what they will need to do versus what Claude will handle. The README explains what the framework is — it does not tell a first-time user how to actually use it.

*Was this tested with real users?*
No. The test engagement used a fictional project with no real human attempting to use the framework for the first time. We validated that Claude can follow the workflow. We did not validate that a real architect, product manager, or IT leader can successfully start and run an engagement using this framework without prior training.

*Is this experience inclusive for everyone?*
The framework assumes familiarity with EA concepts — personas, capabilities, ARB. Someone without that background will not know what to do when Claude asks clarifying questions using those terms. There is no glossary, no onboarding path, and no "plain language" entry point for non-EA practitioners.

**Finding:** The human experience of using EasyEA has not been designed or tested. The framework is well-structured for Claude. It is not yet usable for a person who has never done EA work before.

---

## Sarah Kim — Enterprise Architect

**Signature questions applied:**

*Where does this fit in the enterprise capability model?*
EasyEA positions itself as unlike traditional EA frameworks — but it does not say where it fits relative to them. An organization using TOGAF, SAFe, or an internal EA method has no guidance on how EasyEA relates to what they already do. Is it a replacement? A complement? A lightweight alternative for teams that cannot support a full EA practice? That positioning decision has been left to the user, which means it will be made inconsistently.

*Is this capability already delivered elsewhere?*
We did not check. Before the restructure was finalized, no scan was done for other AI-guided EA frameworks, Claude-native architecture approaches, or existing tools that do what CLAUDE.md now does. If a comparable approach exists and is better supported, EasyEA should learn from it or acknowledge it rather than ignore it.

*What is the plan for reuse and scaling?*
The `projects/_template/` folder handles per-engagement reuse. The `FRAMEWORK-IMPROVEMENTS.md` log captures learning. But there is no mechanism for cross-project pattern recognition — if five engagements all surface the same capability gap, who notices? Who decides whether that gap becomes a framework change? The improvement log is append-only and has no triage, prioritization, or governance process.

**Finding:** EasyEA has no positioning relative to existing frameworks and no governance process for evolving the framework itself. FRAMEWORK-IMPROVEMENTS.md is a log, not a process.

---

## Jake Lawson — Veteran Architect

**Signature questions applied:**

*What breaks first — and how do you know?*
CLAUDE.md assumes Claude reads it on load and follows it faithfully. There is no validation step. If Claude ignores a constraint, skips the ARB review, or produces capabilities without persona traceability, nothing in the framework catches it. The human has to know enough to notice — which circles back to Alex's finding that the human experience has not been designed.

The other fragility: the framework is entirely dependent on Claude behaving consistently. A model update that changes how Claude interprets CLAUDE.md could silently degrade every engagement without anyone realizing until the outputs stop making sense.

*Who owns this in production in year 5?*
No one is named. The GitHub repo exists. The MIT license means anyone can fork it. But there is no maintainer role, no contribution governance, no decision-making process for what gets merged, and no roadmap owner. The Contributing section of README.md says contributions are welcome but gives no process for how they are evaluated or approved.

*Show me the rollback plan.*
There is none. If a CLAUDE.md change causes Claude to behave badly across all engagements, there is no documented rollback process. Git history exists, but there is no protocol for when to use it, who decides, or how to communicate a rollback to people currently running engagements.

**Finding:** The framework has no validation mechanism for Claude's outputs, no ownership model, and no rollback protocol. It is fragile to model updates and has no one responsible for its long-term health.

---

## Thomas Reed — Central IT Director / Executive Sponsor

**Signature questions applied:**

*How does this improve the experience for the people we serve?*
The people being served are the humans doing architecture work. The framework improves their experience by reducing the overhead of EA — Claude handles the structure, they provide the context and judgment. That value proposition is real but unproven. We have not demonstrated that engagements run on EasyEA produce better decisions than engagements run without it. The case for adoption rests on a reasonable assumption, not evidence.

*Should we build this for everyone, not just one team?*
EasyEA is open source and positioned for broad use. But it has been designed and tested against one type of organization — Central IT in a public sector context. The personas, the ARB reviewers, and the example project all reflect that context. An organization in a different sector — healthcare, financial services, manufacturing — would need to adapt significantly. The framework does not acknowledge this or provide guidance for adaptation.

*Who owns this long-term, and how much does that cost?*
No answer exists. The framework is free and open, but maintenance is not free. Someone has to review improvements, update CLAUDE.md as Claude's behavior evolves, add templates, and keep the example project current. That work has no owner and no estimated cost.

**Finding:** EasyEA's value proposition is assumption-based, its applicability outside Central IT is untested, and its long-term maintenance has no owner or cost model.

---

## ARB Findings Summary

| # | Finding | Severity | Action Required |
|---|---------|----------|----------------|
| 1 | No success metrics for the framework | High | Define what good engagement output looks like and how to measure it |
| 2 | No defined user — who is this for? | High | Name the primary user and design CLAUDE.md and README for them |
| 3 | No human onboarding path | High | Add a "how to start" guide in plain language for first-time users |
| 4 | Not tested with real users | High | Run at least one real engagement with a real user before treating the framework as ready |
| 5 | No positioning relative to existing EA frameworks | Medium | Define how EasyEA relates to TOGAF, SAFe, and similar approaches |
| 6 | No governance process for framework improvements | Medium | Add triage and prioritization to FRAMEWORK-IMPROVEMENTS.md — it is a log, not a process |
| 7 | No validation mechanism for Claude's outputs | Medium | Define how the human verifies Claude is following the framework correctly |
| 8 | No ownership or maintenance model | Medium | Name a maintainer, define a contribution process, estimate ongoing effort |
| 9 | No rollback protocol for CLAUDE.md changes | Low | Document what triggers a rollback and who decides |
| 10 | Applicability outside Central IT untested | Low | Acknowledge the current context and provide adaptation guidance |

---

## Overall Assessment

The restructure was directionally correct. The AI-guided approach is the right model and the structure is sound. But the framework was designed and shipped without defining its user, measuring its effectiveness, or governing its evolution.

The four High severity findings — no metrics, no defined user, no onboarding path, no real user testing — should be addressed before EasyEA is used on consequential work. The medium findings should be addressed in the next iteration.

The most important next step is the simplest: name who this is for and write two pages for that person explaining how to start.
