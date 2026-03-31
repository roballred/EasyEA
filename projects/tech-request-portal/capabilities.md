# Capabilities — Technology Request Portal

**Version:** v1
**Last Updated:** 2026-03-30

Capabilities are derived from persona pain points and goals. Each capability traces back to at least one person this product must serve. All capabilities validated against `framework/capability-criteria.md`.

---

## Capabilities Overview

| ID | Capability | Serves |
|----|-----------|--------|
| CAP-01 | Request Submission | Marcus |
| CAP-02 | Existing Technology Discovery | Marcus |
| CAP-03 | Structured Review | Dana |
| CAP-04 | Request Status Visibility | Marcus, Dana |
| CAP-05 | Decision Recording | Dana, Priya |
| CAP-06 | Review Queue Management | Dana, Priya |
| CAP-07 | Portfolio Intelligence | Priya |

---

## Capability Details

### CAP-01 — Request Submission

Anyone in the organization can submit a technology request through a single structured form. The form collects the minimum information Dana needs to begin a review — no back-and-forth required to get started.

*Serves: Marcus — removes the pain of not knowing where to submit or who to contact. A complete submission on the first try is the goal.*

---

### CAP-02 — Existing Technology Discovery

Before submitting, requesters can search the approved technology catalog to see if something already exists that meets their need. If a match is found, they are directed to it instead of submitting a new request.

*Serves: Marcus — prevents the scenario where he waits three weeks to be told the tool already exists. Saves Dana from reviewing requests for capabilities the organization already has.*

---

### CAP-03 — Structured Review

Reviewers evaluate each request against a consistent set of criteria — security, cost, duplication, and standards alignment. The review interface surfaces the relevant criteria, any previous decisions for similar requests, and flags for required escalation.

*Serves: Dana — gives her a structured way to assess every request without starting from scratch. Removes the cognitive overhead of improvised reviews.*

---

### CAP-04 — Request Status Visibility

Requesters and reviewers can see the current status of any request at any time — submitted, under review, awaiting information, approved, or rejected — without asking anyone.

*Serves: Marcus — ends the "submit and disappear" experience. Dana — reduces inbound status questions so she can focus on reviews.*

---

### CAP-05 — Decision Recording

Every approval and rejection is recorded with the rationale, the criteria applied, and the reviewer. Decisions are searchable and referenceable.

*Serves: Dana — she can find previous decisions instantly instead of reconstructing them. Priya — gives her the traceable record she needs for audits and accountability.*

---

### CAP-06 — Review Queue Management

Reviewers have a single prioritized queue showing all pending requests, their age, and any items that are blocked waiting on the requester. Priya has a management view showing queue health across the team.

*Serves: Dana — consolidates all incoming requests into one place with enough context to act. Priya — gives her visibility into throughput without needing to ask Dana for a status update.*

---

### CAP-07 — Portfolio Intelligence

Central IT can view the approved technology portfolio across the organization — by category, volume, recency, and duplication. Surfaces candidates for consolidation and patterns in what is being requested.

*Serves: Priya — answers "how many tools are doing the same job?" and "what is being approved that we should be watching?" without manual data assembly.*

---

## Capability-to-Persona Traceability

| Persona | Pain Point | Capability That Addresses It |
|---------|-----------|------------------------------|
| Marcus | Doesn't know where to submit or who to contact | CAP-01 — Request Submission |
| Marcus | Told tool already exists after weeks of waiting | CAP-02 — Existing Technology Discovery |
| Marcus | No visibility into where his request stands | CAP-04 — Request Status Visibility |
| Dana | Requests arrive through multiple channels, no single queue | CAP-06 — Review Queue Management |
| Dana | No standard format — every request requires back-and-forth | CAP-01 — structured submission reduces this |
| Dana | Can't find previous decisions for similar requests | CAP-05 — Decision Recording |
| Dana | Gets blamed for delays when requester hasn't provided context | CAP-03 — Structured Review surfaces what's missing |
| Priya | No summary view without asking someone | CAP-07 — Portfolio Intelligence |
| Priya | Cannot verify reviewers applying consistent criteria | CAP-03 — Structured Review |
| Priya | No traceable record of why a technology was approved | CAP-05 — Decision Recording |
