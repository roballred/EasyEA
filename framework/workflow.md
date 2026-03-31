# EasyEA Workflow — 7 Steps

This is the backbone of every EasyEA engagement. Work moves through these steps in order. Not every engagement completes all seven — but you always know where you are and what comes next.

---

## Step 1 — Set the Direction

Align on what the organization is trying to achieve, what problems need solving, and what constraints shape the work. This step ensures everyone starts with the same purpose and understanding.

**What gets produced:**
- Business goals — what outcomes matter and why
- Problems to solve — the specific challenges driving this work
- Guiding principles — how decisions will be made
- Constraints — regulations, budget, time, technology limits, or political realities

**Questions to answer:**
- What are we trying to achieve?
- What is broken, missing, or not working today?
- What decisions have already been made that we must work within?
- What would success look like in 6–12 months?

**Output:** `direction.md` and `compliance-register.md`

> **Compliance Register:** For government and regulated-sector engagements, start a Compliance Register at this step. Capture each mandatory requirement before design begins — source policy or law, what it mandates, how the product will address it, testing required, deadline, and status. This prevents compliance gaps from being discovered late in development. Update it whenever new requirements surface. See the Compliance Register template below.
>
> | Req ID | Source | Mandate | How Addressed | Testing Required | Deadline | Status |
> |--------|--------|---------|---------------|-----------------|----------|--------|
> | CR-01 | | | | | | |

---

## Step 2 — Understand the People

Learn what the people who use or are affected by this work actually need — where they struggle, what they care about, and what success looks like from their point of view. This step keeps everything grounded in real human needs instead of assumptions.

**What gets produced:**
- Personas — one per distinct type of person the work must serve
- Pain points — specific, concrete frustrations with how things work today
- Goals — what each person is trying to accomplish
- Critical insight — the one thing about this persona that most affects the work

**Questions to answer:**
- Who is most affected by this problem or change?
- What does their day look like today? Where does it break down?
- What would make their work or experience meaningfully better?
- Whose behavior must change for this to succeed?

**Output:** `personas.md`

> Every capability, design decision, and business rule must trace back to at least one persona's pain point or goal. Personas built here drive everything that follows.

---

## Step 3 — See How Work Really Happens

Create a clear picture of how the organization gets things done today. Understand where steps break down, where delays occur, and where tools or information get in the way. Include how data moves, where trust or privacy matter, and where data quality problems create friction.

**What gets produced:**
- Current state process map — how work actually flows today
- Friction points — where things slow down, break, or require workarounds
- Data flow — what information is needed, where it comes from, where it gets stuck
- Handoff gaps — where ownership is unclear or coordination fails
- Inherited standards — existing policies, data models, or controlled vocabularies that must be respected

**Questions to answer:**
- How does this work get done today, step by step?
- Where do people waste the most time or effort?
- What workarounds have people invented because the official process doesn't work?
- Where does data quality, privacy, or access create problems?
- Are there existing policies, standards, or data models that pre-define how this work must be structured?

> **Inherit Existing Standards:** Before designing anything new, check whether existing policy, regulation, or organizational standards already define the data model, controlled vocabularies, or process rules. If they do, inherit them — do not reinvent them. Document what was inherited and where it came from.

**Output:** `current-state.md`

---

## Step 4 — Find the Best Opportunities

Identify the improvements that would create the most value for the organization and the people it serves. Consider realistic capacity for change and the risks that affect what can actually be done now.

**What gets produced:**
- Opportunity list — specific improvements ranked by value and feasibility
- Value case — why each opportunity matters, in plain language
- Feasibility notes — what makes each opportunity easy or hard to pursue

**Questions to answer:**
- If we could only fix three things, what would have the biggest impact?
- Which improvements would most directly address the top persona pain points?
- What is within reach now versus what requires more time or investment?
- Where would small changes produce disproportionate value?

**Output:** `opportunities.md`

> **Central Services Candidate Register (Portfolio EA):** For portfolio-level engagements — such as application or technology inventories across multiple agencies or divisions — identify technologies and capabilities that multiple teams use independently but could consolidate into a shared service. Capture each candidate with the teams involved, current duplication cost or risk, and the consolidation opportunity. This register is a standard output when EasyEA is applied to a portfolio intelligence use case.
>
> | Candidate | Teams/Divisions Using It | Current Duplication | Consolidation Opportunity | Priority |
> |-----------|--------------------------|---------------------|--------------------------|----------|
> | | | | | |

---

## Step 5 — Choose the Way Forward

Compare a small set of options, weigh trade-offs and risks, and select the approach that best fits goals and constraints. This is where architecture thinking becomes visible — choosing solutions that work for the whole organization, not just one team.

**What gets produced:**
- 2–3 options with clear descriptions
- Value, risks, and trade-offs for each option
- ARB review findings — critique from relevant ARB personas
- Recommended way forward with rationale

**Questions to answer:**
- What are the realistic ways forward?
- What does each option cost in time, money, and organizational effort?
- What are the risks if each option fails or goes wrong?
- Which option best serves the personas and the business goals?

**Run ARB critique here.** See `arb/how-arb-works.md` for which personas to activate and how.

**Output:** `options.md`

---

## Step 6 — Coordinate the Work

Turn the decision into clear steps, responsibilities, funding alignment, and check-ins that keep everyone moving together. Confirm who owns which decisions, how escalations will be handled, and how teams stay aligned without unnecessary complexity.

**What gets produced:**
- Action plan — what needs to happen, in what order, by whom
- Ownership map — who is responsible for each stream of work
- Funding alignment — what resources are needed and where they come from
- Governance touchpoints — when and how the work will be reviewed

**Questions to answer:**
- What are the first three things that need to happen?
- Who owns each workstream?
- What decisions need escalation and who makes them?
- How will teams stay aligned as the work progresses?

**Output:** `coordination.md`

---

## Step 7 — Track and Adjust

Monitor progress, look at what is working or not working, and adjust direction based on real outcomes. Capture what the organization learns and update practices so the organization gets stronger over time.

**What gets produced:**
- Success metrics — how progress will be measured
- Review cadence — how often outcomes will be assessed
- Lessons learned — what the work revealed about the organization or the problem
- Framework improvements — gaps or additions for EasyEA itself

**Questions to answer:**
- How will we know if this is working?
- What would tell us we need to change course?
- What did we learn that we did not expect?
- What should EasyEA do differently next time?

**Output:** `success-metrics.md` and updates to `FRAMEWORK-IMPROVEMENTS.md`
