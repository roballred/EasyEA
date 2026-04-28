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
    uri: "easyea://arb/how-it-works",
    title: "How ARB Works",
    description: "Guidance for simulated ARB critique in EasyEA.",
    path: "arb/how-arb-works.md"
  },
  {
    id: "arb-personas",
    uri: "easyea://arb/personas",
    title: "ARB Personas",
    description: "Reviewer personas used for simulated ARB critique.",
    path: "arb/personas.md"
  },
  {
    id: "sdlc-how-it-works",
    uri: "easyea://sdlc/how-it-works",
    title: "How SDLC Personas Work",
    description: "Guidance for simulated SDLC persona review in EasyEA.",
    path: "sdlc/how-sdlc-works.md"
  },
  {
    id: "sdlc-personas",
    uri: "easyea://sdlc/personas",
    title: "SDLC Personas",
    description: "Delivery personas used for simulated implementation-readiness critique.",
    path: "sdlc/personas.md"
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
