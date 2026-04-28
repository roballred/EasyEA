# EasyEA

A lightweight, human-centered, AI-guided Enterprise Architecture framework.

EasyEA helps people who want to create value in an organization work with AI to define what needs to be built — and produce structured artifacts that AI can use to build it.

---

## Who This Is For

**Product owners** who need to define what a product should do and why before building begins.

**Architects** who need to structure a business or technology problem before committing to a solution.

**Business owners** who need clarity on what their organization must be able to do to achieve a goal — and want AI to help get there faster.

You do not need an EA background. You need a problem worth solving and a willingness to start with the people it affects.

---

## What It Produces

EasyEA produces **actionable capabilities** — structured, traceable descriptions of what an organization must be able to do, grounded in real human needs. These capabilities become the direct input for AI to design and develop business systems and processes.

The output of an EasyEA engagement is not a slide deck or a report. It is a set of markdown artifacts that AI can read and act on.

---

## How to Start

**Add EasyEA to your AI project or workspace context.**

- **Claude Code:** clone this repo and open it — `CLAUDE.md` loads automatically
- **Other AI tools:** paste the contents of `CLAUDE.md` into your project instructions or system prompt

Then tell your AI what you are working on:

> *"I am a [product owner / architect / business owner] working on [problem or product]. Let's start an EasyEA engagement."*

AI drives from there — starting with personas and moving through the workflow step by step. See `how-to-start.md` for full instructions by role.

---

## How It Works

EasyEA is not a document you read and apply. AI reads the framework and drives the work. Your job is to provide context, answer questions, and make decisions.

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

Every capability traces back to a persona's pain point. Nothing gets built without a person behind it.

At the decision step, the built-in ARB review runs a structured critique using ten reviewer personas — surfacing blind spots before the organization commits to a direction.

---

## What's in This Repo

```
CLAUDE.md                          AI operating instructions for this framework
how-to-start.md                    Plain-language guide for first-time users

framework/
  principles.md                    Nine principles that govern all work
  workflow.md                      The 7-step EasyEA workflow
  capability-criteria.md           How to validate a capability — including AI-actionability

arb/
  personas.md                      Ten ARB reviewer personas with modes
  how-arb-works.md                 When and how to run an ARB review

mcp/
  README.md                        MCP server for exposing EasyEA resources, prompts, and validation tools

projects/
  _template/                       Starter templates for a new engagement
    direction.md
    personas.md
    capabilities.md
    business-rules.md
  tech-request-portal/             Working example — full Steps 1–5 with ARB review

FRAMEWORK-IMPROVEMENTS.md          Gaps discovered through real work, tracked as GitHub issues
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

Full detail in `framework/principles.md`.

---

## Contributing

EasyEA improves through real use. When the framework doesn't handle something well, that gap becomes an issue.

- Browse open issues: [github.com/roballred/EasyEA/issues](https://github.com/roballred/EasyEA/issues)
- Log a new gap using the format in `FRAMEWORK-IMPROVEMENTS.md`
- Open an issue before making changes
- Reference the issue number in your commit (`Closes #N`)

Contributions that simplify, sharpen, or make the framework more useful in practice are welcome.

---

## License

MIT — free to use, adapt, and evolve.
