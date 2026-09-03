/**
 * seo-config.mjs — Single source of truth for all site-wide SEO content.
 *
 * Edit this file to update meta tags, descriptions, JSON-LD, and keywords
 * across the entire site. Then run: node scripts/update-seo.mjs
 */

export const SITE = 'https://vezham.com';
export const TWITTER_HANDLE = '@vezham';

// OG image URL helper: path → https://vezham.com/og/{file}
function og(filename) {
  return `${SITE}/og/${filename}`;
}

// ── Site-wide defaults (used as fallbacks in index.html) ─────────────────────
export const SITE_DEFAULTS = {
  title: 'Vezham — Free Open-Source SVG Icons, Illustrations & Brand Logos',
  description: 'Vezham — Free open-source SVG icons, illustrations & brand logos. 3,900+ icons, 71,000+ illustrations, 4,900+ logos for React, Vue, Svelte, Flutter, Figma & more.',
  keywords: 'free icon library, open source icons, SVG illustrations, vector logos, brand logos, React icons, Vue icons, Flutter icons, Figma icons, vezham, MIT license',
  ogTitle: 'Vezham — Free Open-Source SVG Icons, Illustrations & Brand Logos',
  ogDescription: 'Vezham is a free, open-source vector graphics library with 3,900+ SVG icons, 71,000+ illustrations, and 4,900+ brand logos — built for designers and developers. Official packages for React, Vue, Svelte, React Native, Flutter, JavaScript, Figma, VS Code, and AI MCP agents. MIT licensed.',
  ogImage: og('og.jpg'),
};

// ── Per-route SEO definitions ─────────────────────────────────────────────────
export const ROUTES = [
  {
    path: '/',
    title: 'Vezham — Free Open-Source SVG Icons, Illustrations & Brand Logos',
    description: 'Vezham — Free open-source SVG icons, illustrations & brand logos. 3,900+ icons, 71,000+ illustrations, 4,900+ logos for React, Vue, Svelte, Flutter, Figma & more.',
    ogImage: og('og.jpg'),
    priority: '1.0',
    changefreq: 'weekly',
  },
  {
    path: '/icons',
    title: 'Free Open-Source SVG Icons — Vezham',
    description: 'Browse 3,900+ free, open-source SVG icons in Outline, Filled, and Duotone weights. MIT licensed.',
    ogImage: og('icons.jpeg'),
    priority: '0.9',
    changefreq: 'weekly',
  },
  {
    path: '/illustration',
    title: '71,000+ Free SVG Illustrations — Open-Source Vector Graphics | Vezham',
    description: 'Browse 71,000+ free open-source SVG vector illustrations for React, Vue, HTML, and Figma. Download high-resolution PNG & customizable SVGs. MIT licensed.',
    ogImage: og('illustration.jpg'),
    priority: '0.9',
    changefreq: 'weekly',
  },
  {
    path: '/logos',
    title: '4,900+ Free SVG Brand Logos — High Quality Vector Logos | Vezham',
    description: 'Browse and download 4,900+ clean vector brand logos for tech companies, frameworks, AI, and global brands. Free SVG & PNG formats. MIT licensed.',
    ogImage: og('logos.jpeg'),
    priority: '0.9',
    changefreq: 'weekly',
  },
  {
    path: '/docs',
    title: 'Vezham Docs — Get Started',
    description: 'Get started with Vezham. Install and use icons in React, Vue, Svelte, Flutter, Figma, VS Code, and MCP.',
    ogImage: og('docs.jpg'),
    priority: '0.8',
    changefreq: 'monthly',
  },
  {
    path: '/docs/react',
    title: 'Vezham for React — Vezham',
    description: 'Install and use Vezham in React. Import components, customize props, tree-shake unused icons.',
    ogImage: og('docs-react.jpg'),
    priority: '0.8',
    changefreq: 'monthly',
  },
  {
    path: '/docs/react-native',
    title: 'Vezham for React Native — Vezham',
    description: 'Install and use Vezham in React Native. SVG components for Expo and bare React Native.',
    ogImage: og('docs-react-native.jpg'),
    priority: '0.8',
    changefreq: 'monthly',
  },
  {
    path: '/docs/vue',
    title: 'Vezham for Vue — Vezham',
    description: 'Install and use Vezham in Vue 3 and Nuxt 3. Import components and customize props.',
    ogImage: og('docs-vue.jpg'),
    priority: '0.8',
    changefreq: 'monthly',
  },
  {
    path: '/docs/svelte',
    title: 'Vezham for Svelte — Vezham',
    description: 'Install and use Vezham in Svelte and SvelteKit. Import components and customize props.',
    ogImage: og('docs-svelte.jpg'),
    priority: '0.8',
    changefreq: 'monthly',
  },
  {
    path: '/docs/vanilla',
    title: 'Vezham for Vanilla JS — Vezham',
    description: 'Use Vezham icons via CDN in vanilla JavaScript and HTML. No build tools needed.',
    ogImage: og('docs-vanilla.jpg'),
    priority: '0.8',
    changefreq: 'monthly',
  },
  {
    path: '/docs/figma',
    title: 'Vezham for Figma — Vezham',
    description: 'Install the Vezham Figma plugin. Search, customize, and drag-and-drop icons onto your canvas.',
    ogImage: og('docs-figma.jpg'),
    priority: '0.8',
    changefreq: 'monthly',
  },
  {
    path: '/docs/vscode',
    title: 'Vezham for VS Code — Vezham',
    description: 'Install the Vezham VS Code extension. Search and insert icon code directly at your cursor.',
    ogImage: og('docs-vscode.jpg'),
    priority: '0.8',
    changefreq: 'monthly',
  },
  {
    path: '/docs/mcp',
    title: 'Vezham MCP Server & CLI — Vezham',
    description: 'Let AI agents search 2,700+ icons, preview SVGs, and generate code. Runs as MCP server or standalone CLI.',
    ogImage: og('docs-mcp.jpg'),
    priority: '0.8',
    changefreq: 'monthly',
  },
  {
    path: '/docs/svg',
    title: 'Vezham Raw SVGs — Vezham',
    description: 'Download and use raw Vezham SVG icons in HTML, static layouts, or CMS templates.',
    ogImage: og('docs.jpg'),
    priority: '0.8',
    changefreq: 'monthly',
  },
  {
    path: '/docs/flutter',
    title: 'Vezham for Flutter — Vezham',
    description: 'Install and use Vezham in Flutter and Dart projects. 2,700+ icons as raw SVG path strings.',
    ogImage: og('docs-flutter.jpg'),
    priority: '0.8',
    changefreq: 'monthly',
  },
  {
    path: '/packages',
    title: 'Vezham Packages — Vezham',
    description: 'Official Vezham packages for React, React Native, Vue, Svelte, Flutter, and JavaScript.',
    ogImage: og('packages.jpg'),
    priority: '0.7',
    changefreq: 'monthly',
  },
  {
    path: '/pack',
    title: 'Vezham Pack Builder — Vezham',
    description: 'Select and export custom icon packs. Download as SVG, PNG, or WebP ZIP files.',
    ogImage: og('pack.jpg'),
    priority: '0.7',
    changefreq: 'monthly',
  },
  {
    path: '/faq',
    title: 'Vezham FAQ — Vezham',
    description: 'Answers about Vezham: license, framework support, Figma integration, and contributions.',
    ogImage: og('faq.jpg'),
    priority: '0.7',
    changefreq: 'monthly',
  },
  {
    path: '/support',
    title: 'Support Vezham — Buy Me a Coffee',
    description: 'Support ongoing open-source development of Vezham. Buy us a coffee to keep 2,700+ handcrafted SVG icons free for everyone.',
    ogImage: og('support.jpg'),
    priority: '0.8',
    changefreq: 'monthly',
  },
  {
    path: '/terms',
    title: 'Vezham Terms of Service — Vezham',
    description: 'Terms of service for using the Vezham open-source icon library.',
    ogImage: og('terms.jpg'),
    priority: '0.3',
    changefreq: 'yearly',
  },
  {
    path: '/privacy',
    title: 'Vezham Privacy Policy — Vezham',
    description: 'Privacy policy for Vezham. Learn how we handle your data.',
    ogImage: og('privacy.jpg'),
    priority: '0.3',
    changefreq: 'yearly',
  },
  {
    path: '/license',
    title: 'Vezham MIT License — Vezham',
    description: 'Vezham is free and open-source under the MIT license. Use in personal and commercial projects.',
    ogImage: og('license.jpg'),
    priority: '0.3',
    changefreq: 'yearly',
  },
];

// ── Site-wide JSON-LD (injected into index.html) ──────────────────────────────
export const GLOBAL_JSON_LD = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    'name': 'Vezham',
    'alternateName': ['Vezham Icons', 'Vezham Icon Library', 'vezham-icons-mcp'],
    'url': SITE,
    'description': 'Vezham is a free, open-source SVG icon library for designers and developers. Pixel-perfect, handcrafted icons for React, React Native, Vue, Svelte, Flutter, Figma, and the web. Includes an MCP server and CLI for AI agent icon search and codegen.',
    'disambiguatingDescription': 'Vezham (vezham.com) is an open-source SVG icon library for web designers and developers. It is not the Windows desktop icon restore utility ReIcon by Sordum.org.',
    'applicationCategory': 'DesignApplication',
    'applicationSubCategory': 'Icon Library',
    'operatingSystem': 'Web, Node.js',
    'offers': { '@type': 'Offer', 'price': '0', 'priceCurrency': 'USD' },
    'license': 'https://opensource.org/licenses/MIT',
    'creator': { '@type': 'Person', 'name': 'Dev Chauhan', 'url': 'https://devchauhan.in' },
    'sameAs': ['https://github.com/vezham/reicon'],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    'name': 'Vezham',
    'url': SITE,
    'logo': `${SITE}/favicon/apple-touch-icon.png`,
    'description': 'Free, open-source SVG icon library built with obsessive precision.',
    'contactPoint': { '@type': 'ContactPoint', 'email': 'hello@vezham.com', 'contactType': 'customer support' },
    'sameAs': ['https://github.com/vezham/reicon'],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    'name': 'Vezham',
    'alternateName': ['Vezham Icons', 'Vezham Icon Library'],
    'url': SITE,
    'description': 'Free, open-source SVG icon library for designers and developers.',
    'inLanguage': 'en-US',
    'publisher': { '@type': 'Organization', 'name': 'Vezham', 'url': SITE },
    'potentialAction': {
      '@type': 'SearchAction',
      'target': { '@type': 'EntryPoint', 'urlTemplate': `${SITE}/icons?q={search_term_string}` },
      'query-input': 'required name=search_term_string',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'What is Vezham?',
        'acceptedAnswer': { '@type': 'Answer', 'text': 'Vezham is a free, open-source SVG icon library with 2,700+ handcrafted, pixel-perfect icons in Outline and Filled weights.' },
      },
      {
        '@type': 'Question',
        'name': 'Is Vezham free to use?',
        'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes, fully free and open-source under the MIT license. Use in personal and commercial projects.' },
      },
      {
        '@type': 'Question',
        'name': 'Does Vezham work with React, React Native, Vue, and Svelte?',
        'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes. Install @vezham/icons-react for React, @vezham/icons-react-native for React Native, @vezham/icons-vue for Vue 3, or @vezham/icons-svelte for Svelte.' },
      },
      {
        '@type': 'Question',
        'name': 'How do I install Vezham?',
        'acceptedAnswer': { '@type': 'Answer', 'text': "Run 'npm install @vezham/icons-react' for React, 'npm install @vezham/icons-react-native' for React Native, or use the CDN. See vezham.com/docs for full instructions." },
      },
      {
        '@type': 'Question',
        'name': 'Does Vezham have an MCP server or CLI?',
        'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes. vezham-icons-mcp is a Model Context Protocol server and CLI that lets AI agents search 2,700+ icons, preview SVGs, and generate React, React Native, Vue, Svelte, or HTML code. Run it with: npx @vezham/icons-mcp. See vezham.com/docs/mcp.' },
      },
      {
        '@type': 'Question',
        'name': 'Is Vezham the same as ReIcon by Sordum?',
        'acceptedAnswer': { '@type': 'Answer', 'text': 'No. Vezham (vezham.com) is an open-source SVG icon library. ReIcon by Sordum.org is a Windows desktop utility. They are completely unrelated.' },
      },
    ],
  },
];

// ── Sitemap volatile routes (get today's date on every build) ─────────────────
export const VOLATILE_ROUTES = new Set([
  '/', '/icons', '/logos', '/illustration', '/docs', '/docs/react', '/docs/react-native',
  '/docs/vue', '/docs/svelte', '/docs/vanilla', '/docs/figma',
  '/docs/vscode', '/docs/mcp', '/docs/svg', '/docs/flutter',
  '/packages', '/pack',
]);
