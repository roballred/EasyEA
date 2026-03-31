# Business Rules — [Project Name]

**Version:** v1
**Last Updated:** [Date]

This document describes the rules that govern how the system or service behaves — when notifications are sent, what data is required, how processes are triggered, and what conditions block or allow actions.

Most rules should be configurable by administrators without code changes.

---

## [Rule Category — e.g. Thresholds]

[Brief description of what this category governs.]

| Rule | Value | Configurable? |
|------|-------|--------------|
| [Rule name] | [Default value] | Yes / No |
| [Rule name] | [Default value] | Yes / No |

---

## [Rule Category — e.g. Notifications]

[Brief description.]

| Trigger | When It Fires | Who Receives It | Message |
|---------|--------------|-----------------|---------|
| [Trigger name] | [Condition] | [Recipients] | [Plain language message] |
| [Trigger name] | [Condition] | [Recipients] | [Message] |

---

## Required Data

[List any data fields, inputs, or conditions that are mandatory. Incomplete records missing these cannot be processed or submitted.]

- [Required field or condition]
- [Required field or condition]

---

## Controlled Values

[List any fields that only accept values from a fixed list. Controlled values keep data consistent and comparable.]

### [Field Name]
- [Value]
- [Value]
- [Value]

---

## [Rule Category — e.g. Process Gates]

[Describe any conditions that must be met before a process can proceed. Gates prevent bad data or incomplete work from moving forward.]

| Condition | What It Blocks | Resolution |
|-----------|---------------|------------|
| [Condition] | [What is blocked] | [How to resolve] |
