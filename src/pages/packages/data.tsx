import { FaReact } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { VscVscodeInsiders } from 'react-icons/vsc';
import { FigmaIcon, FlutterIcon, McpIcon, SvelteIcon, VueIcon, SvgIcon } from '../../components/docs/framework/icons';

export interface PackageItem {
    id: string;
    name: string;
    npmPkg: string;
    description: string;
    icon: React.ReactNode;
    npmUrl: string;
    sourceUrl: string;
    guideUrl: string;
}

export const PACKAGES: PackageItem[] = [
    {
        id: 'vanilla',
        name: '@vezham/icons',
        npmPkg: '@vezham/icons',
        description: 'A Vezham Icons package for web and JavaScript applications.',
        icon: <IoLogoJavascript className="text-yellow-400" size={48} />,
        npmUrl: 'https://www.npmjs.com/package/@vezham/icons',
        sourceUrl: 'https://github.com/vezham/reicon',
        guideUrl: '/docs/vanilla',
    },
    {
        id: 'react',
        name: '@vezham/icons-react',
        npmPkg: '@vezham/icons-react',
        description: 'A Vezham Icons package for React applications.',
        icon: <FaReact className="text-[#61DAFB]" size={48} />,
        npmUrl: 'https://www.npmjs.com/package/@vezham/icons-react',
        sourceUrl: 'https://github.com/vezham/reicon',
        guideUrl: '/docs/react',
    },
    {
        id: 'react-native',
        name: '@vezham/icons-react-native',
        npmPkg: '@vezham/icons-react-native',
        description: 'React Native icon components for Vezham Icons. Tree-shakeable, TypeScript-ready. Works with Expo and bare React Native.',
        icon: <FaReact className="text-[#61DAFB]" size={48} />,
        npmUrl: 'https://www.npmjs.com/package/@vezham/icons-react-native',
        sourceUrl: 'https://github.com/vezham/reicon',
        guideUrl: '/docs/react-native',
    },
    {
        id: 'vue',
        name: '@vezham/icons-vue',
        npmPkg: '@vezham/icons-vue',
        description: 'Vue 3 icon components for Vezham Icons. Tree-shakeable, TypeScript-ready, zero config. Works with Nuxt 3.',
        icon: <VueIcon size={48} />,
        npmUrl: 'https://www.npmjs.com/package/@vezham/icons-vue',
        sourceUrl: 'https://github.com/vezham/reicon',
        guideUrl: '/docs/vue',
    },
    {
        id: 'svelte',
        name: '@vezham/icons-svelte',
        npmPkg: '@vezham/icons-svelte',
        description: 'Svelte icon components for Vezham Icons. Tree-shakeable, TypeScript-ready, zero config. Works with SvelteKit.',
        icon: <SvelteIcon size={48} />,
        npmUrl: 'https://www.npmjs.com/package/@vezham/icons-svelte',
        sourceUrl: 'https://github.com/vezham/reicon',
        guideUrl: '/docs/svelte',
    },
    {
        id: 'flutter',
        name: 'vezham_icons_flutter',
        npmPkg: 'vezham_icons_flutter',
        description: 'Official Flutter/Dart package for Vezham. 2700+ SVG icons as path strings. Works with flutter_svg.',
        icon: <FlutterIcon size={48} />,
        npmUrl: 'https://pub.dev/packages/vezham_icons_flutter',
        sourceUrl: 'https://github.com/vezham/reicon/tree/main/packages/icons-flutter',
        guideUrl: '/docs/flutter',
    },
];

export interface ToolItem {
    id: string;
    name: string;
    badge: { label: string; color: string };
    version: string;
    description: string;
    icon: React.ReactNode;
    guideUrl: string;
    primaryAction: { label: string; href: string };
    sourceUrl: string;
}

export const TOOLS: ToolItem[] = [
    {
        id: 'figma',
        name: '@vezham/icons-figma',
        badge: { label: 'Figma Plugin', color: '#F24E1E' },
        version: 'v1.0.0',
        description: 'Integrate Vezham Icons directly into your Figma workspace. Search, customize size/stroke weights, and insert vector shapes into your designs.',
        icon: <FigmaIcon size={48} />,
        guideUrl: '/docs/figma',
        primaryAction: { label: 'Open in Figma', href: 'https://www.figma.com/community/plugin/1652983191908763066' },
        sourceUrl: 'https://github.com/vezham/reicon/tree/main/packages/icons-figma',
    },
    {
        id: 'vscode',
        name: '@vezham/icons-vscode',
        badge: { label: 'VS Code Extension', color: '#007ACC' },
        version: 'v1.0.4',
        description: "Browse and insert Vezham icons directly into your HTML, React, Vue, Svelte, or vanilla JS code from your editor's sidebar panel.",
        icon: <VscVscodeInsiders className="text-[#007ACC]" size={48} />,
        guideUrl: '/docs/vscode',
        primaryAction: { label: 'Use', href: 'https://marketplace.visualstudio.com/items?itemName=Vezham.icons' },
        sourceUrl: 'https://github.com/vezham/reicon/tree/main/packages/icons-vscode',
    },
    {
        id: 'mcp',
        name: '@vezham/icons-mcp',
        badge: { label: 'MCP Server', color: '#6C5CE7' },
        version: 'v1.1.101',
        description: 'Search, preview, and apply Vezham icons from AI agents and automation tools via MCP or CLI.',
        icon: <McpIcon size={48} />,
        guideUrl: '/docs/mcp',
        primaryAction: { label: 'npm', href: 'https://www.npmjs.com/package/@vezham/icons-mcp' },
        sourceUrl: 'https://github.com/vezham/reicon/tree/main/packages/icons-mcp',
    },
];

export const SVG_PACKAGE = {
    name: 'vezham-svg',
    guideUrl: '/docs/svg',
    downloadUrl: '/vezham-icons.zip',
    description: 'Download the complete raw vector assets. Includes all Vezham icon weights in currentColor SVG format, fully compressed.',
    icon: <SvgIcon size={48} />,
};
