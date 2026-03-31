# EasyEA

A lightweight, human-centered, AI-guided Enterprise Architecture framework.

EasyEA exists for one purpose: help organizations make better decisions, faster, with less overhead. It does this by putting AI in the driver's seat of EA work — guided by a structured framework, grounded in real human needs.

---

## How It Works

EasyEA is not a document you read and then apply. It is a framework that guides AI to do architecture work alongside you.

When you open a project in this repo, Claude reads the framework artifacts and drives the work — building personas, deriving capabilities from pain points, running ARB reviews, and producing structured markdown outputs. Your job is to provide context and direction. Claude's job is to follow the framework.

This approach is explained in `CLAUDE.md`. Start there.

---

## What's in This Repo

```
CLAUDE.md                        How Claude operates in this framework
README.md                        This file

framework/
  principles.md                  Nine principles that govern all work
  workflow.md                    The 7-step EasyEA workflow
  capability-criteria.md         How to validate a capability before using it

arb/
  personas.md                    Ten ARB reviewer personas with modes
  how-arb-works.md               When and how to run an ARB review

projects/
  _template/                     Starter templates for a new engagement
    personas.md
    capabilities.md
    business-rules.md

FRAMEWORK-IMPROVEMENTS.md        Gaps discovered through real work
```

---

## Core Approach

**Start with people.** Every engagement begins with personas — real people with real pain points. No capability, process, or decision gets made without first understanding who it serves and what problem it solves for them.

**Derive capabilities from personas.** A capability is only valid if it traces directly to a persona's pain point or goal. This is what separates EasyEA from traditional top-down EA frameworks.

**Follow the 7-step workflow.** The workflow moves from direction-setting through understanding people, mapping current state, finding opportunities, choosing a way forward, coordinating work, and tracking outcomes.

**Run ARB critique before committing.** At the decision step, ARB personas challenge the options from ten distinct lenses — enterprise architecture, security, business value, cost, UX, privacy, data, operations, integration, and executive strategy.

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

## Starting a New Engagement

1. Create a new folder under `projects/[project-name]/`
2. Copy the templates from `projects/_template/`
3. Open Claude Code in this repo — CLAUDE.md loads automatically
4. Tell Claude what the engagement is and what you know so far
5. Claude drives from there — starting with personas

---

## License

MIT — free to use, adapt, and evolve.
