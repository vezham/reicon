import { Helmet } from 'react-helmet-async';

const DEFAULT_OG = 'https://vezham.com/og/og.jpg';

interface SeoHelmetProps {
  pageTitle: string;
  pageDesc: string;
  pageUrl: string;
  pascalName: string;
  iconCategory: string;
  name?: string;
}

export default function SeoHelmet({ pageTitle, pageDesc, pageUrl, pascalName, iconCategory, name }: SeoHelmetProps) {
  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDesc} />
      <link rel="canonical" href={pageUrl} />
      <meta name="keywords" content={`${name} icon, ${pascalName} svg, download ${name} svg, ${name} react, ${name} vue, ${name} svelte, free ${iconCategory?.toLowerCase() || 'svg'} icon, ${name} png, vezham`} />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta property="og:type" content="article" />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:site_name" content="Vezham" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDesc} />
      <meta property="og:image" content={DEFAULT_OG} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@vezham" />
      <meta name="twitter:creator" content="@vezham" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDesc} />
      <meta name="twitter:image" content={DEFAULT_OG} />
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": pageUrl,
        "url": pageUrl,
        "name": pageTitle,
        "description": pageDesc,
        "inLanguage": "en-US",
        "isPartOf": { "@type": "WebSite", "url": "https://vezham.com", "name": "Vezham" },
        "breadcrumb": { "@id": `${pageUrl}#breadcrumb` },
        "primaryImageOfPage": { "@type": "ImageObject", "url": DEFAULT_OG },
      })}</script>
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org",
        "@type": "SoftwareSourceCode",
        "name": `${pascalName} Icon`,
        "description": pageDesc,
        "url": pageUrl,
        "codeRepository": "https://github.com/vezham/reicon",
        "programmingLanguage": ["SVG", "React", "Vue", "Svelte"],
        "runtimePlatform": ["Browser", "Node.js"],
        "license": "https://opensource.org/licenses/MIT",
        "isPartOf": { "@type": "SoftwareApplication", "name": "Vezham", "url": "https://vezham.com" },
      })}</script>
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Vezham", "item": "https://vezham.com" },
          { "@type": "ListItem", "position": 2, "name": "Icons", "item": "https://vezham.com/icons" },
          ...(iconCategory ? [{ "@type": "ListItem", "position": 3, "name": iconCategory, "item": "https://vezham.com/icons" }] : []),
          { "@type": "ListItem", "position": iconCategory ? 4 : 3, "name": `${pascalName} Icon`, "item": pageUrl },
        ],
      })}</script>
    </Helmet>
  );
}
