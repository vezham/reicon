import { Helmet } from 'react-helmet-async';
import { PAGE_META } from '../../data/page-meta';

export default function IconsHelmet() {
  const meta = PAGE_META['/icons'];

  return (
    <Helmet>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <link rel="canonical" href={meta.url} />
      <meta name="keywords" content="free icons, SVG icons, icon library, browse icons, outline icons, filled icons, vezham" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={meta.url} />
      <meta property="og:site_name" content="Vezham" />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:image" content={meta.ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@vezham" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={meta.ogImage} />
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Vezham", "item": "https://vezham.com" },
          { "@type": "ListItem", "position": 2, "name": "Icons", "item": "https://vezham.com/icons" }
        ]
      })}</script>
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Vezham Icon Library",
        "description": "Browse and search 2700+ free, open-source SVG icons.",
        "url": "https://vezham.com/icons",
        "isPartOf": { "@type": "WebSite", "name": "Vezham", "url": "https://vezham.com" }
      })}</script>
    </Helmet>
  );
}
