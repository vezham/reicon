import { Helmet } from 'react-helmet-async';
import { PAGE_META } from '../../data/page-meta';

export default function FaqHelmet() {
  const meta = PAGE_META['/faq'];

  return (
    <Helmet>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <link rel="canonical" href={meta.url} />
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
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'Vezham', 'item': 'https://vezham.com' },
          { '@type': 'ListItem', 'position': 2, 'name': 'FAQ', 'item': 'https://vezham.com/faq' },
        ],
      })}</script>
      <script type="application/ld+json">{JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'What is Vezham?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Vezham is a free, open-source icon library built with obsessive precision. Every icon is pixel-perfect and handcrafted — no auto-generation.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Is Vezham free to use?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Yes, Vezham is completely free and open-source under the MIT license. You can use it in personal and commercial projects.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Does Vezham work with React, Vue, Svelte, and Figma?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Yes, Vezham icons are available as SVGs with first-class support for React, React Native, Vue, Svelte, Figma, and other popular design and development tools. Install via npm with @vezham/icons-react, @vezham/icons-react-native, @vezham/icons-vue, or @vezham/icons-svelte.'
            }
          },
          {
            '@type': 'Question',
            'name': 'How many icons does Vezham have?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Vezham has over 2,700 handcrafted SVG icons across outline, filled, duotone-outline, and duotone-filled weights. New icons are added regularly.'
            }
          },
          {
            '@type': 'Question',
            'name': 'How do I install Vezham?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Install via npm with \'npm install @vezham/icons\' for JavaScript projects, \'npm install @vezham/icons-react\' for React, \'npm install @vezham/icons-react-native\' for React Native, or use the CDN script tag. Visit vezham.com/docs for full installation instructions.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Is Vezham the same as ReIcon by Sordum?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'No. Vezham (vezham.com) is a free, open-source SVG icon library for designers and developers. ReIcon by Sordum.org is a completely different product — a Windows utility for restoring desktop icon layouts. They are unrelated.'
            }
          }
        ]
      })}</script>
    </Helmet>
  );
}
