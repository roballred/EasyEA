#!/usr/bin/env node
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { artifacts, findArtifactByUri, readArtifact } from "./artifacts.js";
import { registerPrompts } from "./prompts.js";
import { registerTools } from "./tools.js";

const server = new McpServer({
  name: "easyea",
  version: "0.1.0"
});

for (const artifact of artifacts) {
  server.registerResource(
    artifact.id,
    artifact.uri,
    {
      title: artifact.title,
      description: artifact.description,
      mimeType: "text/markdown"
    },
    async (uri) => {
      const match = findArtifactByUri(uri.href);
      if (!match) {
        throw new Error(`Unknown EasyEA artifact: ${uri.href}`);
      }

      return {
        contents: [
          {
            uri: match.uri,
            mimeType: "text/markdown",
            text: await readArtifact(match)
          }
        ]
      };
    }
  );
}

registerPrompts(server);
registerTools(server);

const transport = new StdioServerTransport();
await server.connect(transport);
