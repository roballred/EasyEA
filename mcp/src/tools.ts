import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import { artifacts } from "./artifacts.js";

const evidenceLevels = ["Human-confirmed", "Evidence-backed", "Simulated", "Assumption"] as const;

type Check = {
  criterion: string;
  passed: boolean;
  note: string;
};

function asText(value: unknown): { content: Array<{ type: "text"; text: string }> } {
  return {
    content: [
      {
        type: "text",
        text: typeof value === "string" ? value : JSON.stringify(value, null, 2)
      }
    ]
  };
}

export function registerTools(server: McpServer): void {
  server.registerTool(
    "list_framework_artifacts",
    {
      title: "List EasyEA Artifacts",
      description: "List EasyEA framework resources exposed by this MCP server.",
      annotations: {
        readOnlyHint: true,
        idempotentHint: true
      }
    },
    async () =>
      asText({
        artifacts: artifacts.map(({ id, uri, title, description }) => ({
          id,
          uri,
          title,
          description
        }))
      })
  );

  server.registerTool(
    "validate_capability",
    {
      title: "Validate EasyEA Capability",
      description: "Check whether a capability is specific, persona-traceable, measurable, and evidence-labeled.",
      inputSchema: {
        name: z.string().describe("Capability name"),
        description: z.string().describe("Capability description"),
        primaryPersona: z.string().optional().describe("Primary persona served"),
        painPoint: z.string().optional().describe("Persona pain point or goal addressed"),
        successMeasure: z.string().optional().describe("How success will be measured"),
        evidenceLevel: z.enum(evidenceLevels).describe("Evidence level for this capability"),
        adoptionCritical: z.boolean().optional().describe("Whether user adoption is critical to value delivery"),
        adoptionRisk: z.string().optional().describe("Adoption risk if adoptionCritical is true"),
        fallback: z.string().optional().describe("Fallback if adoption fails")
      },
      annotations: {
        readOnlyHint: true,
        idempotentHint: true
      }
    },
    async (input) => {
      const checks: Check[] = [
        {
          criterion: "Defines what, not how",
          passed: !/\b(button|screen|database|api|endpoint|email|table|field|react|sql)\b/i.test(input.name),
          note: "Capability names should describe stable organizational ability, not implementation detail."
        },
        {
          criterion: "Traceable to a persona",
          passed: Boolean(input.primaryPersona?.trim() && input.painPoint?.trim()),
          note: "A capability needs a primary persona and the pain point or goal it addresses."
        },
        {
          criterion: "Measurable",
          passed: Boolean(input.successMeasure?.trim()),
          note: "A capability needs at least one success measure."
        },
        {
          criterion: "Actionable for AI",
          passed: input.description.trim().length >= 80,
          note: "Description should be concrete enough to guide design or requirements."
        },
        {
          criterion: "Evidence labeled",
          passed: input.evidenceLevel !== "Simulated",
          note: "Simulated critique can inform a capability, but it should not be the capability's only evidence level."
        },
        {
          criterion: "Adoption-critical details",
          passed: !input.adoptionCritical || Boolean(input.adoptionRisk?.trim() && input.fallback?.trim()),
          note: "Adoption-critical capabilities need adoption risk and fallback."
        }
      ];

      const failed = checks.filter((check) => !check.passed);

      return asText({
        capability: input.name,
        status: failed.length === 0 ? "passes" : "revise",
        checks,
        nextActions: failed.map((check) => check.note)
      });
    }
  );

  server.registerTool(
    "run_readiness_gate",
    {
      title: "Run EasyEA Implementation Readiness Gate",
      description: "Check whether work is ready to become implementation issues or PR-ready requirements.",
      inputSchema: {
        humanApprovedDirection: z.boolean(),
        assumptionsResolvedOrAccepted: z.boolean(),
        simulatedFindingsLabeled: z.boolean(),
        capabilitiesTraceToConfirmedNeeds: z.boolean(),
        ownershipAndTestingClear: z.boolean(),
        nextIssueSmallAndTestable: z.boolean()
      },
      annotations: {
        readOnlyHint: true,
        idempotentHint: true
      }
    },
    async (input) => {
      const checks: Check[] = [
        {
          criterion: "Human approved direction",
          passed: input.humanApprovedDirection,
          note: "The human must approve the option or implementation direction."
        },
        {
          criterion: "Assumptions resolved or accepted",
          passed: input.assumptionsResolvedOrAccepted,
          note: "Open assumptions must be resolved or explicitly accepted as named risks."
        },
        {
          criterion: "Simulated findings labeled",
          passed: input.simulatedFindingsLabeled,
          note: "ARB and synthetic outputs must be labeled as simulated."
        },
        {
          criterion: "Capability traceability",
          passed: input.capabilitiesTraceToConfirmedNeeds,
          note: "Capabilities must trace to human-confirmed or evidence-backed persona needs."
        },
        {
          criterion: "Ownership and testing clarity",
          passed: input.ownershipAndTestingClear,
          note: "Ownership and testing expectations must be clear enough to build against."
        },
        {
          criterion: "Next issue is small and testable",
          passed: input.nextIssueSmallAndTestable,
          note: "Implementation should begin with a bounded, testable issue."
        }
      ];

      const failed = checks.filter((check) => !check.passed);

      return asText({
        decision: failed.length === 0 ? "Ready" : "Needs more evidence",
        checks,
        blockers: failed.map((check) => check.note)
      });
    }
  );

  server.registerTool(
    "recommend_arb_personas",
    {
      title: "Recommend ARB Personas",
      description: "Recommend simulated ARB personas based on decision size and risk focus.",
      inputSchema: {
        decisionSize: z.enum(["small", "standard", "significant"]),
        focusAreas: z.array(z.string()).optional().describe("Focus areas such as security, privacy, cost, UX, integration, data, audit, strategy")
      },
      annotations: {
        readOnlyHint: true,
        idempotentHint: true
      }
    },
    async ({ decisionSize, focusAreas = [] }) => {
      const normalized = focusAreas.map((area) => area.toLowerCase());
      const recommendations = new Set<string>(["Lisa Rodriguez — Business Architect"]);

      const addIf = (terms: string[], persona: string) => {
        if (normalized.some((area) => terms.some((term) => area.includes(term)))) {
          recommendations.add(persona);
        }
      };

      addIf(["security", "identity", "access"], "Omar Singh — Security Architect");
      addIf(["privacy", "consent", "retention"], "Maya Patel — Data Privacy Architect");
      addIf(["cost", "budget", "funding", "tco"], "Emily Johnson — CFO");
      addIf(["ux", "user", "adoption", "inclusive"], "Alex Chen — Human-Centered Designer");
      addIf(["integration", "api", "data flow"], "Dev Patel — Integration Architect");
      addIf(["data", "quality", "governance", "analytics"], "Grace Holloway — Data & Analytics Architect");
      addIf(["audit", "evidence", "maturity", "governance"], "Jordan Hayes — Architecture Governance Auditor");
      addIf(["reuse", "duplication", "capability"], "Sarah Kim — Enterprise Architect");
      addIf(["strategy", "shared", "platform", "enterprise"], "Thomas Reed — Central IT Director");
      addIf(["operations", "support", "rollback", "production"], "Jake Lawson — Veteran Architect");

      const limits = {
        small: 2,
        standard: 5,
        significant: 10
      } as const;

      return asText({
        decisionSize,
        recommendedCount: limits[decisionSize],
        personas: Array.from(recommendations).slice(0, limits[decisionSize]),
        note: "ARB persona output is simulated critique, not validation."
      });
    }
  );

  server.registerTool(
    "recommend_sdlc_personas",
    {
      title: "Recommend SDLC Personas",
      description: "Recommend simulated SDLC personas based on review point and delivery focus.",
      inputSchema: {
        reviewPoint: z.enum(["Issue Shaping", "Build Planning", "PR Readiness", "Release Readiness", "Learning Review"]),
        workSize: z.enum(["small", "standard", "significant"]),
        focusAreas: z
          .array(z.string())
          .optional()
          .describe("Focus areas such as frontend, backend, testing, deployment, support, documentation, security, data, or capacity")
      },
      annotations: {
        readOnlyHint: true,
        idempotentHint: true
      }
    },
    async ({ reviewPoint, workSize, focusAreas = [] }) => {
      const normalized = focusAreas.map((area) => area.toLowerCase());
      const recommendations = new Set<string>();

      if (reviewPoint === "Issue Shaping") {
        recommendations.add("Jordan Lee — Delivery Lead");
      }

      const addIf = (terms: string[], persona: string) => {
        if (normalized.some((area) => terms.some((term) => area.includes(term)))) {
          recommendations.add(persona);
        }
      };

      addIf(["scope", "issue", "acceptance", "slice"], "Jordan Lee — Delivery Lead");
      addIf(["frontend", "ui", "accessibility", "responsive", "state"], "Priya Shah — Frontend Engineer");
      addIf(["backend", "api", "service", "domain", "logic"], "Marco Alvarez — Backend Engineer");
      addIf(["test", "qa", "regression", "acceptance"], "Nina Patel — QA Engineer");
      addIf(["deploy", "release", "rollback", "monitor", "observability", "config"], "Sam Rivera — DevOps Engineer");
      addIf(["security", "authorization", "secret", "input"], "Omar Brooks — Application Security Engineer");
      addIf(["data", "migration", "report", "quality"], "Grace Lin — Data Engineer");
      addIf(["support", "runbook", "incident", "help"], "Taylor Morgan — Support Analyst");
      addIf(["docs", "documentation", "training", "release notes"], "Casey Nguyen — Documentation and Training Lead");
      addIf(["capacity", "dependency", "sequence", "team"], "Morgan Ellis — Engineering Manager");

      if (recommendations.size === 0) {
        recommendations.add("Jordan Lee — Delivery Lead");
        recommendations.add("Nina Patel — QA Engineer");
      }

      const limits = {
        small: 2,
        standard: 5,
        significant: 10
      } as const;

      return asText({
        reviewPoint,
        workSize,
        recommendedCount: limits[workSize],
        personas: Array.from(recommendations).slice(0, limits[workSize]),
        note: "SDLC persona output is simulated critique, not validation or delivery approval."
      });
    }
  );
}
