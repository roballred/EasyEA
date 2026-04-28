import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";

export function registerPrompts(server: McpServer): void {
  server.registerPrompt(
    "start-easyea-engagement",
    {
      title: "Start EasyEA Engagement",
      description: "Begin a human-led EasyEA engagement from a short problem statement.",
      argsSchema: {
        problem: z.string().describe("Plain-language problem or opportunity statement"),
        role: z.string().optional().describe("Human role, such as product owner, architect, or business owner")
      }
    },
    ({ problem, role }) => ({
      messages: [
        {
          role: "user",
          content: {
            type: "text",
            text: [
              "Start an EasyEA engagement.",
              "",
              `Human role: ${role ?? "Not specified"}`,
              `Problem or opportunity: ${problem}`,
              "",
              "Use EasyEA resources for the workflow, principles, and templates.",
              "Keep the human in the lead. Begin with Step 1 and identify the first decision gate."
            ].join("\n")
          }
        }
      ]
    })
  );

  server.registerPrompt(
    "draft-personas",
    {
      title: "Draft Personas",
      description: "Draft EasyEA personas with evidence labels and open assumptions.",
      argsSchema: {
        context: z.string().describe("Context about the organization, service, people affected, and known pain points")
      }
    },
    ({ context }) => ({
      messages: [
        {
          role: "user",
          content: {
            type: "text",
            text: [
              "Draft EasyEA personas from this context.",
              "",
              context,
              "",
              "Use the personas template. Mark each persona as Assumption, Human-confirmed, Evidence-backed, or Validated with users.",
              "List open assumptions separately. Do not use assumed personas as implementation authority."
            ].join("\n")
          }
        }
      ]
    })
  );

  server.registerPrompt(
    "derive-capabilities",
    {
      title: "Derive Capabilities",
      description: "Derive actionable capabilities from confirmed or evidence-backed persona needs.",
      argsSchema: {
        personas: z.string().describe("Persona content or summary"),
        direction: z.string().optional().describe("Direction artifact or summary")
      }
    },
    ({ personas, direction }) => ({
      messages: [
        {
          role: "user",
          content: {
            type: "text",
            text: [
              "Derive EasyEA capabilities.",
              "",
              direction ? `Direction:\n${direction}\n` : "",
              `Personas:\n${personas}`,
              "",
              "Use the capability criteria. Every capability must trace to a persona pain point or goal.",
              "Include evidence level, success measure, and implementation notes for each capability."
            ].join("\n")
          }
        }
      ]
    })
  );

  server.registerPrompt(
    "run-arb-simulation",
    {
      title: "Run ARB Simulation",
      description: "Run a concise, clearly labeled simulated ARB critique for a decision.",
      argsSchema: {
        decision: z.string().describe("Decision or option set to review"),
        riskLevel: z.enum(["small", "standard", "significant"]).describe("Decision size/risk level"),
        focus: z.string().optional().describe("Specific concern, such as privacy, cost, UX, security, or audit-readiness")
      }
    },
    ({ decision, riskLevel, focus }) => ({
      messages: [
        {
          role: "user",
          content: {
            type: "text",
            text: [
              "Run an EasyEA ARB simulation.",
              "",
              `Decision size: ${riskLevel}`,
              `Focus: ${focus ?? "Select the most relevant personas"}`,
              `Decision/options:\n${decision}`,
              "",
              "Label all ARB findings as Simulated unless tied to real evidence.",
              "Keep findings small, decision-oriented, and tied to evidence level and next action.",
              "Do not treat the ARB result as validation or approval."
            ].join("\n")
          }
        }
      ]
    })
  );

  server.registerPrompt(
    "check-implementation-readiness",
    {
      title: "Check Implementation Readiness",
      description: "Assess whether EasyEA artifacts are ready to become implementation issues.",
      argsSchema: {
        summary: z.string().describe("Summary of direction, personas, capabilities, open assumptions, and ARB findings")
      }
    },
    ({ summary }) => ({
      messages: [
        {
          role: "user",
          content: {
            type: "text",
            text: [
              "Check EasyEA implementation readiness.",
              "",
              summary,
              "",
              "Use the implementation readiness gate.",
              "Return Ready, Revise, or Needs more evidence with concise rationale and next actions."
            ].join("\n")
          }
        }
      ]
    })
  );

  server.registerPrompt(
    "run-sdlc-review",
    {
      title: "Run SDLC Persona Review",
      description: "Run a concise, clearly labeled simulated SDLC review for issue, PR, release, or support readiness.",
      argsSchema: {
        reviewPoint: z
          .enum(["Issue Shaping", "Build Planning", "PR Readiness", "Release Readiness", "Learning Review"])
          .describe("The SDLC review point to run"),
        work: z.string().describe("Capability, issue, PR, release plan, or delivery summary to review"),
        focus: z.string().optional().describe("Specific concern, such as testing, deployment, support, security, or documentation")
      }
    },
    ({ reviewPoint, work, focus }) => ({
      messages: [
        {
          role: "user",
          content: {
            type: "text",
            text: [
              "Run an EasyEA SDLC persona review.",
              "",
              `Review point: ${reviewPoint}`,
              `Focus: ${focus ?? "Select the most relevant SDLC personas"}`,
              `Work to review:\n${work}`,
              "",
              "Use the SDLC persona guidance. Label all findings as Simulated unless tied to real evidence.",
              "Keep findings small, delivery-oriented, and tied to evidence level and next action.",
              "Do not treat the SDLC result as validation, approval, or permission to build."
            ].join("\n")
          }
        }
      ]
    })
  );
}
