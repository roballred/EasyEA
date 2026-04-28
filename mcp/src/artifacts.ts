import { readFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

export type EasyEaArtifact = {
  id: string;
  uri: string;
  title: string;
  description: string;
  path: string;
};

const packageRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
export const repoRoot = resolve(packageRoot, "..");

export const artifacts: EasyEaArtifact[] = [
  {
    id: "readme",
    uri: "easyea://readme",
    title: "EasyEA README",
    description: "Overview of EasyEA, its purpose, principles, and repository structure.",
    path: "README.md"
  },
  {
    id: "claude-operating-instructions",
    uri: "easyea://claude-operating-instructions",
    title: "EasyEA Claude Operating Instructions",
    description: "AI operating instructions for running EasyEA engagements.",
    path: "CLAUDE.md"
  },
  {
    id: "principles",
    uri: "easyea://framework/principles",
    title: "EasyEA Principles",
    description: "The governing principles used to evaluate EasyEA work.",
    path: "framework/principles.md"
  },
  {
    id: "workflow",
    uri: "easyea://framework/workflow",
    title: "EasyEA Workflow",
    description: "The seven-step EasyEA engagement workflow.",
    path: "framework/workflow.md"
  },
  {
    id: "capability-criteria",
    uri: "easyea://framework/capability-criteria",
    title: "Capability Criteria",
    description: "Criteria for validating actionable capabilities.",
    path: "framework/capability-criteria.md"
  },
  {
    id: "arb-how-it-works",
    uri: "easyea://easyarb/how-it-works",
    title: "How EasyARB Works",
    description: "Guidance for simulated ARB critique in EasyEA.",
    path: "EasyARB/how-arb-works.md"
  },
  {
    id: "personas-index",
    uri: "easyea://personas/index",
    title: "Persona Library Index",
    description: "Index of the shared persona library used by EasyARB and EasySDLC, including modes and validated/provisional status.",
    path: "personas/README.md"
  },
  {
    id: "sdlc-how-it-works",
    uri: "easyea://easysdlc/how-it-works",
    title: "How EasySDLC Works",
    description: "Guidance for simulated SDLC persona review in EasyEA.",
    path: "EasySDLC/how-sdlc-works.md"
  },
  {
    id: "sdlc-methodology",
    uri: "easyea://easysdlc/methodology",
    title: "EasySDLC Agent Methodology",
    description: "How SDLC agents do their work — operating pattern for an agent invoked as an SDLC persona.",
    path: "EasySDLC/methodology.md"
  },
  {
    id: "template-direction",
    uri: "easyea://templates/direction",
    title: "Direction Template",
    description: "Starter template for Step 1 direction artifacts.",
    path: "projects/_template/direction.md"
  },
  {
    id: "template-personas",
    uri: "easyea://templates/personas",
    title: "Personas Template",
    description: "Starter template for Step 2 persona artifacts.",
    path: "projects/_template/personas.md"
  },
  {
    id: "template-capabilities",
    uri: "easyea://templates/capabilities",
    title: "Capabilities Template",
    description: "Starter template for capability artifacts.",
    path: "projects/_template/capabilities.md"
  },
  {
    id: "template-business-rules",
    uri: "easyea://templates/business-rules",
    title: "Business Rules Template",
    description: "Starter template for configurable business rules.",
    path: "projects/_template/business-rules.md"
  }
];

export function findArtifactByUri(uri: string): EasyEaArtifact | undefined {
  return artifacts.find((artifact) => artifact.uri === uri);
}

export async function readArtifact(artifact: EasyEaArtifact): Promise<string> {
  return readFile(resolve(repoRoot, artifact.path), "utf8");
}
