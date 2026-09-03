<p align="center">
  <a href="https://vezham.com">
    <img src="../public/readme-banner.png" alt="Vezham - Free Open-Source Icon Library" width="100%" />
  </a>
</p>

# Vezham Dataset

This folder holds the source assets for every Vezham icon.

## Source Layout

Icons are stored by category, then icon name, then weight:

```txt
data/icons/
  arrows/
    arrow-down2/
      outline.svg
      filled.svg
      duotone.svg
      meta.json
```

Weight filenames are always lowercase:

```txt
outline.svg
filled.svg
duotone.svg
```

`outline.svg` should exist for normal icon package output. `filled.svg` and `duotone.svg` are optional when a variant does not exist.

## Metadata

Each icon can include a small `meta.json` file beside the SVGs:

```json
{
  "description": ["down arrow", "chevron"],
  "contributor": {
    "github": "username"
  }
}
```

| Field | Required | Description |
| :---- | :------- | :---------- |
| `description` | No | Search tags and aliases used by the website, MCP index, SEO, and generated package metadata. |
| `contributor.github` | No | GitHub username for community-contributed icons. |

Icon names are inferred from the folder path:

```txt
data/icons/arrows/arrow-down2/outline.svg
```

becomes category `arrows`, icon name `arrow-down2`, and component name `ArrowDown2`.

## SVG Rules

SVG files should be normal 24x24 SVG documents:

```svg
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="..." fill="currentColor"/>
</svg>
```

Build scripts strip the outer `<svg>` wrapper where needed and normalize `fill="white"` to `currentColor`.

## Generated Data

Some compact JSON files are generated for the website and tools:

| Output | Built by |
| :----- | :------- |
| `src/data/search-index.json` | `node scripts/generate-website-search-index.mjs` |
| `src/data/duotone-icons.json` | `node scripts/generate-website-search-index.mjs` |
| `scripts/icon-names.json` | `node scripts/sync-icon-names.mjs` |
| `packages/*/dist` | Package-specific build scripts |

> [!IMPORTANT]
> Contributors edit files inside `data/icons/`. Package outputs, CDN files, and generated JSON indexes are rebuilt from that folder.

> [!WARNING]
> Never manually edit files inside `packages/*/dist/` or `cdn/`. They are regenerated and hand-edits will be overwritten.
