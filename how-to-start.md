# How to Start an EasyEA Engagement

EasyEA works by giving Claude the framework as context, then letting Claude drive the work while you provide direction and judgment. This guide explains how to get started based on who you are and what you are working on.

---

## Step 1 — Add EasyEA to Your AI Context

**In Claude Code (recommended):**
Clone this repo and open it in Claude Code. `CLAUDE.md` loads automatically — Claude knows the framework and is ready to work.

**In other AI tools:**
Copy the contents of `CLAUDE.md` into your project instructions or system prompt. Optionally add `framework/workflow.md` and `framework/principles.md` for fuller context.

That's all the setup required.

---

## Step 2 — Tell Claude What You're Working On

Start with one sentence describing the problem or opportunity. You do not need a fully formed brief. Claude will ask what it needs.

**If you are a product owner:**
> "I am a product owner working on [product name or description]. We need to define what it should do and who it serves before we start building. Let's run an EasyEA engagement."

**If you are an architect:**
> "I am an architect working on [problem or initiative]. I need to structure the problem, understand who it affects, and define the capabilities before we commit to a solution."

**If you are a business owner:**
> "I want to improve [area of the business or service]. I'm not sure exactly what needs to change — I need help figuring out who is affected and what we need to be able to do differently."

Claude will start with Step 1 (Set the Direction) and move through the workflow from there.

---

## What Claude Will Do

Claude drives the engagement. You do not need to manage the process.

| What Claude does | What you do |
|-----------------|------------|
| Asks questions to understand the problem | Answer with what you know — partial answers are fine |
| Drafts personas based on your context | Review and correct — you know your people better than Claude does |
| Derives capabilities from persona pain points | Confirm the capabilities match what you actually need |
| Validates each capability against the criteria | Flag anything that feels wrong or missing |
| Runs ARB review at the decision step | Decide which findings need to be addressed before moving forward |
| Produces markdown artifacts at each step | Use them as input for the next phase of work |

---

## What You Get at the End

A set of structured markdown files — one per step — that describe:

- What you are trying to achieve and why (`direction.md`)
- Who is affected and what they need (`personas.md`)
- How work happens today and where it breaks down (`current-state.md`)
- Which improvements would create the most value (`opportunities.md`)
- What the options are, what the ARB review found, and what is recommended (`options.md`)
- The capabilities — what the organization must be able to do (`capabilities.md`)

These artifacts are structured so that AI can read them and use them to design and build business systems and processes. They are the bridge between understanding the problem and building the solution.

---

## How Long It Takes

A focused engagement covering Steps 1 through 5 typically takes one to three working sessions depending on the complexity of the problem and how much context you bring to the first session.

You do not need to complete all seven steps in one go. Each step produces a usable artifact. Stop when you have what you need.

---

## What to Bring to the First Session

The more context you can share upfront, the faster Claude can move. Useful things to have ready:

- A sentence or two describing the problem or opportunity
- The names or roles of the people most affected
- Any constraints that are already fixed (budget, timeline, technology, policy)
- Any previous decisions that are already made

You do not need a formal brief, a requirements document, or prior EA experience. Start with what you know.
