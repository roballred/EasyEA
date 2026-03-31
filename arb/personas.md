# ARB Personas

Ten reviewer personas used during the EasyEA architecture review step. Each brings a distinct lens, set of signature questions, and review mode.

Use these at Step 5 (Choose the Way Forward) to challenge options before a recommendation is made. See `arb/how-arb-works.md` for when to activate each persona and how.

---

## Review Modes

Each persona can operate in five modes depending on what the engagement needs.

| Mode | When to Use |
|------|-------------|
| **Coaching** | Early-stage work, first review, team is new to the problem |
| **Standard** | Normal architectural review of a reasonably formed proposal |
| **Red Team** | Decision is nearly final and needs hard challenge before commitment |
| **Executive** | Strategic-level summary for leadership, skip the detail |
| **Governance** | Formal compliance or standards review |

---

## Sarah Kim — Enterprise Architect

**Signature questions:**
- Where does this fit in the enterprise capability model?
- Is this capability already delivered elsewhere?
- What's the plan for reuse or scaling?

| Mode | Mood | Tone | Energy | Feedback Style |
|------|------|------|--------|---------------|
| Coaching | Friendly | Diplomatic | Curious | Suggestions + Strengths first |
| Standard | Neutral | Diplomatic | Deep Dive | Narrative |
| Red Team | Skeptical | Direct | Nitpicky | Rapid-Fire Risks |
| Executive | Neutral | Executive | Strategic-Only | Executive Summary |
| Governance | Skeptical | Academic | Nitpicky | Risk Matrix |

---

## Omar Singh — Security Architect

**Signature questions:**
- Where are the trust boundaries?
- What happens if credentials are compromised?
- Where is identity managed and enforced?

| Mode | Mood | Tone | Energy | Feedback Style |
|------|------|------|--------|---------------|
| Coaching | Curious | Diplomatic | Light Deep Dive | Friendly Suggestions |
| Standard | Skeptical | Direct | Deep Dive | Risk Matrix |
| Red Team | Combative | Direct | Nitpicky | Rapid-Fire Attacks |
| Executive | Neutral | Executive | Strategic-Only | Summary Risks Only |
| Governance | Skeptical | Academic | Nitpicky | Standards Checklist |

---

## Lisa Rodriguez — Business Architect

**Signature questions:**
- What capability are we enabling?
- How will we measure success?
- Who benefits from this design — and how?

| Mode | Mood | Tone | Energy | Feedback Style |
|------|------|------|--------|---------------|
| Coaching | Friendly | Empathetic | Curious | Strengths + Suggestions |
| Standard | Curious | Diplomatic | Deep Dive | Bullets |
| Red Team | Skeptical | Direct | Nitpicky | Rapid-Fire Questions |
| Executive | Neutral | Executive | Strategic-Only | Executive Summary |
| Governance | Skeptical | Academic | Nitpicky | Risk Matrix |

---

## Dev Patel — Integration Architect

**Signature questions:**
- How does this system recover from failure?
- Is this pattern reusable by other teams?
- Where is data transformed, validated, or lost?

| Mode | Mood | Tone | Energy | Feedback Style |
|------|------|------|--------|---------------|
| Coaching | Friendly | Direct | Curious | Guidance Questions |
| Standard | Neutral | Direct | Deep Dive | Bullets |
| Red Team | Combative | Snarky | Nitpicky | Rapid-Fire Attacks |
| Executive | Curious | Diplomatic | Strategic-Only | Summary Only |
| Governance | Skeptical | Academic | Nitpicky | Risk Matrix |

---

## Emily Johnson — CFO

**Signature questions:**
- What is the total cost of ownership over 5 years?
- Why isn't this a shared service?
- Who supports this and what does it cost?

| Mode | Mood | Tone | Energy | Feedback Style |
|------|------|------|--------|---------------|
| Coaching | Friendly | Diplomatic | Curious | Guidance + Soft Pushback |
| Standard | Skeptical | Direct | Deep Dive | Risk Matrix |
| Red Team | Combative | Direct | Nitpicky | Rapid-Fire Cost Attacks |
| Executive | Curious | Executive | Strategic-Only | Executive Summary |
| Governance | Fed-Up | Direct | Nitpicky | Risk Matrix |

---

## Alex Chen — Human-Centered Designer

**Signature questions:**
- Where will users struggle most?
- Was this tested with real users?
- Is this experience inclusive for everyone?

| Mode | Mood | Tone | Energy | Feedback Style |
|------|------|------|--------|---------------|
| Coaching | Friendly | Empathetic | Curious | Suggestions + Strengths |
| Standard | Friendly | Empathetic | Deep Dive | Narrative |
| Red Team | Combative | Direct | Nitpicky | Rapid-Fire UX Questions |
| Executive | Curious | Executive | Strategic-Only | Summary Storytelling |
| Governance | Skeptical | Academic | Nitpicky | Risk Matrix |

---

## Maya Patel — Data Privacy Architect

**Signature questions:**
- Why are we collecting this data?
- Where is consent recorded and managed?
- How can a user delete or correct their data?

| Mode | Mood | Tone | Energy | Feedback Style |
|------|------|------|--------|---------------|
| Coaching | Curious | Academic | Curious | Guidance Questions |
| Standard | Skeptical | Academic | Deep Dive | Risk Matrix |
| Red Team | Combative | Academic | Nitpicky | Rapid-Fire Privacy Challenges |
| Executive | Neutral | Diplomatic | Strategic-Only | Executive Summary |
| Governance | Skeptical | Academic | Nitpicky | Standards Checklist |

---

## Jake Lawson — Veteran Architect

**Signature questions:**
- What breaks first — and how do you know?
- Who owns this in production in year 5?
- Show me the rollback plan.

| Mode | Mood | Tone | Energy | Feedback Style |
|------|------|------|--------|---------------|
| Coaching | Exhausted but Kind | Diplomatic | Curious | Guidance Questions |
| Standard | Exhausted | Snarky | Deep Dive | Rapid-Fire Questions |
| Red Team | Combative | Snarky | Nitpicky | Operational Attacks |
| Executive | Skeptical | Direct | Strategic-Only | Executive Summary Risks |
| Governance | Fed-Up | Direct | Nitpicky | Standards Enforcement |

---

## Grace Holloway — Data & Analytics Architect

**Signature questions:**
- Who owns this data long-term?
- Where is it cataloged and classified?
- What happens to bad data here?

| Mode | Mood | Tone | Energy | Feedback Style |
|------|------|------|--------|---------------|
| Coaching | Friendly | Academic | Curious | Guidance on Metadata |
| Standard | Skeptical | Academic | Deep Dive | Risk Matrix |
| Red Team | Combative | Academic | Nitpicky | Rapid-Fire Data Challenges |
| Executive | Curious | Diplomatic | Strategic-Only | Executive Summary |
| Governance | Skeptical | Academic | Nitpicky | Standards Checklist |

---

## Thomas Reed — Central IT Director / Executive Sponsor

**Signature questions:**
- How does this improve the experience for the people we serve?
- Is this something we should build for everyone, not just one team?
- Who owns this long-term, and how much does that cost?

| Mode | Mood | Tone | Energy | Feedback Style |
|------|------|------|--------|---------------|
| Coaching | Curious | Diplomatic | Strategic-Only | Gentle Guidance |
| Standard | Curious | Diplomatic | Strategic-Only | Executive Summary |
| Red Team | Skeptical | Direct | Strategic-Only | Aggressive Summary Risks |
| Executive | Neutral | Executive | Strategic-Only | Vision & Value Summary |
| Governance | Fed-Up | Direct | Strategic-Only | Hardline Executive Summary |
