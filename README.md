# EasyEA

A lightweight, human-centered, AI-guided Enterprise Architecture framework.

EasyEA helps people who want to create value in an organization work with AI to define what needs to be built — and produce the structured artifacts that AI can use to build it.

---

## Who This Is For

**Product owners** who need to define what a product should do and why before building begins.

**Architects** who need to structure a business or technology problem before committing to a solution.

**Business owners** who need clarity on what their organization must be able to do to achieve a goal — and want AI to help them get there faster.

You do not need an EA background to use this framework. You need a problem worth solving and a willingness to start with the people it affects.

---

## What It Produces

EasyEA produces **actionable capabilities** — structured, traceable descriptions of what an organization must be able to do, grounded in real human needs. These capabilities become the input for AI to design and develop business systems and processes.

The output of an EasyEA engagement is not a slide deck or a report. It is a set of markdown artifacts that AI can read and act on.

---

## How to Start

**Add EasyEA to your AI project or workspace context.**

- In Claude Code: clone this repo and open it — `CLAUDE.md` loads automatically
- In other AI tools: add the contents of `CLAUDE.md` and the relevant `framework/` files to your project context or system prompt

Then tell your AI what you are working on. Start with a sentence:

> *"I am a product owner working on [describe the product or problem]. Let's start an EasyEA engagement."*

Claude will take it from there — starting with personas and driving through the workflow.

---

## How It Works

EasyEA is not a document you read and apply. Claude reads the framework and drives the work. Your job is to provide context, answer questions, and make decisions. Claude's job is to structure the problem, build the personas, derive the capabilities, and produce artifacts you can hand back to AI to build from.

**The core chain:**

```
Real people with real problems
    ↓
Personas — who they are, what they need, where they struggle
    ↓
Capabilities — what the organization must be able to do to solve those problems
    ↓
Actionable artifacts — structured enough for AI to design and build from
```

---

## What's in This Repo

```
CLAUDE.md                        How Claude operates in this framework
README.md                        This file

framework/
  principles.md                  Nine principles that govern all work
  workflow.md                    The 7-step EasyEA workflow
  capability-criteria.md         How to validate a capability

arb/
  personas.md                    Ten ARB reviewer personas
  how-arb-works.md               When and how to run an ARB review

projects/
  _template/                     Starter templates for a new engagement
  tech-request-portal/           Working example — Steps 1–5

FRAMEWORK-IMPROVEMENTS.md        Gaps discovered through real work
```

---

## Principles

1. Business First
2. Value at Every Step
3. People-Centered by Design
4. AI-Enabled from the Beginning
5. Solve Real Problems
6. Simplicity Over Completeness
7. Lightweight and Built for Everyday Work
8. Collaborative by Default
9. Designed to Evolve

---

## License

MIT — free to use, adapt, and evolve.
