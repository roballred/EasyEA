# EasyEA MCP Server

This directory contains a minimal Model Context Protocol server for EasyEA.

The server exposes EasyEA as:

- **Resources** — read-only framework documents and templates
- **Prompts** — reusable EasyEA workflow prompts
- **Tools** — lightweight validation and readiness checks

The server does not write files, create issues, open PRs, or start implementation work. It supports the EasyEA principle that humans lead the decisions and AI provides structure, simulation, and checks.

---

## Install

```sh
npm install
npm run build
```

---

## Run

```sh
npm start
```

The server uses stdio transport, which is the common local MCP integration mode.

---

## Example Client Configuration

Use the absolute path to this package when configuring an MCP client:

```json
{
  "mcpServers": {
    "easyea": {
      "command": "node",
      "args": ["/absolute/path/to/EasyEA/mcp/dist/index.js"]
    }
  }
}
```

For this checkout, the command is:

```json
{
  "mcpServers": {
    "easyea": {
      "command": "node",
      "args": ["/Users/roballred/govea-app/easy-ea/mcp/dist/index.js"]
    }
  }
}
```

---

## Exposed Resources

- `easyea://readme`
- `easyea://claude-operating-instructions`
- `easyea://framework/principles`
- `easyea://framework/workflow`
- `easyea://framework/capability-criteria`
- `easyea://arb/how-it-works`
- `easyea://arb/personas`
- `easyea://templates/direction`
- `easyea://templates/personas`
- `easyea://templates/capabilities`
- `easyea://templates/business-rules`

---

## Exposed Prompts

- `start-easyea-engagement`
- `draft-personas`
- `derive-capabilities`
- `run-arb-simulation`
- `check-implementation-readiness`

---

## Exposed Tools

- `list_framework_artifacts`
- `validate_capability`
- `run_readiness_gate`
- `recommend_arb_personas`
