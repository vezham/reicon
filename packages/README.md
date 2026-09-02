<p align="center">
  <a href="https://reicon.dev">
    <img src="../public/readme-banner.png" alt="Reicon — Free Open-Source Icon Library" width="100%" />
  </a>
</p>

# 📦 Framework Packages

This directory contains individual npm libraries and integration extension packages maintained inside the Reicon monorepo.

## 🗂️ Packages List

| Package | Framework / Runtime | Output | Build Script Command |
| :--- | :--- | :--- | :--- |
| [`@vezham/icons`](file:///Users/devchauhan/Documents/Website/reicon/packages/icons) | Vanilla JS & CDN Web Component | `dist/` | `npm run build:js` |
| [`@vezham/icons-react`](file:///Users/devchauhan/Documents/Website/reicon/packages/icons-react) | React / JSX Component Wrapper | `dist/` | `npm run build:react` |
| [`@vezham/icons-react-native`](file:///Users/devchauhan/Documents/Website/reicon/packages/icons-react-native) | React Native Component Wrapper | `dist/` | `npm run build:react-native` |
| [`@vezham/icons-vue`](file:///Users/devchauhan/Documents/Website/reicon/packages/icons-vue) | Vue 3 Component Wrapper | `dist/` | `npm run build:vue` |
| [`@vezham/icons-svelte`](file:///Users/devchauhan/Documents/Website/reicon/packages/icons-svelte) | Svelte Component Wrapper | `dist/` | `npm run build:svelte` |
| [`@vezham/icons-figma`](file:///Users/devchauhan/Documents/Website/reicon/packages/icons-figma) | Figma Plugin Web UI | `Reicon/ui.html` | `npm run build:figma` |
| [`@vezham/icons-vscode`](file:///Users/devchauhan/Documents/Website/reicon/packages/icons-vscode) | VS Code Intellisense Extension | `dist/ui.html` | `npm run build:vscode` |
| [`@vezham/icons-mcp`](file:///Users/devchauhan/Documents/Website/reicon/packages/icons-mcp) | MCP Server & CLI for Agents | `dist/` | `npm run build:mcp` |

## ⚙️ How Packaging Works

Downstream packages are generated programmatically using Node.js scripts. 

* The build scripts take `data/icons` as input.
* They parse raw SVGs, strip header boilerplate, normalize colors (`fill="white"` → `fill="currentColor"`), and wrap them in template wrappers specific to each framework.
* They output direct ES module definitions, types declarations (`.d.ts`), and bundle index wrappers.

## 🔄 Building Everything

To build or refresh all packages at once, run this command from the root directory:
```bash
npm run build:packages
```
