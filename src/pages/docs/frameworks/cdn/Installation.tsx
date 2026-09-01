import SyntaxBlock from '../../../../components/docs/SyntaxBlock';
import InstallTabs from '../../../../components/docs/InstallTabs';

interface Props {
  markdownContent: string;
  copiedField: string | null;
  onCopy: (text: string, field: string) => void;
}

export default function Installation({ markdownContent, copiedField, onCopy }: Props) {
  return (
    <>
      {/* Vanilla JS Package Section */}
      <h3 id="cdn-npm" data-section className="text-lg font-serif text-text-base mb-4 mt-10 scroll-mt-24">
        Vanilla JS / Bundler (NPM)
      </h3>
      <p className="text-text-base/60 text-[15px] leading-[1.8] mb-4">
        Install the package using your preferred package manager and import tree-shakeable icons directly in your application code.
      </p>

      {/* Installation */}
      <h4 className="text-md font-medium text-text-base mb-4">Installation</h4>
      <InstallTabs
        packageName="reicon"
        copiedField={copiedField}
        onCopy={onCopy}
      />

      {/* CDN / HTML Section */}
      <h3 id="cdn-html" data-section className="text-lg font-serif text-text-base mb-4 mt-16 scroll-mt-24">
        CDN & HTML (No Build Tools)
      </h3>
      <p className="text-text-base/60 text-[15px] leading-[1.8] mb-4">
        Perfect for static HTML websites, legacy applications, and prototyping. Include a script tag and render icons instantly.
      </p>

      {/* Getting Started CDN */}
      <h4 className="text-md font-medium text-text-base mb-4">Register Custom Element (<code className="text-text-base/70 bg-text-base/6 px-1.5 py-0.5 rounded text-[12px]">{'<vx-icon>'}</code>)</h4>
      <p className="text-text-base/60 text-[15px] leading-[1.8] mb-4">
        Include the script tag inside your HTML page. This registers a reactive <code className="text-text-base/70 bg-text-base/6 px-1.5 py-0.5 rounded text-[12px]">{'<vx-icon>'}</code> component that supports dynamic styling, sizes, weights, and gradients.
      </p>

      <SyntaxBlock
        title="HTML (jsDelivr CDN)"
        onCopy={() => onCopy('<script src="https://cdn.jsdelivr.net/npm/@vezham/icons@latest/dist/cdn/vezham-icons.js"></script>', 'cdn-script')}
        copied={copiedField === 'cdn-script'}
      >
        <span className="text-text-base/70">{'<'}</span>
        <span className="text-[#e06c75]">script</span>
        <span className="text-[#d19a66]"> src</span>
        <span className="text-text-base/50">=</span>
        <span className="text-[#98c379]">"https://cdn.jsdelivr.net/npm/@vezham/icons@latest/dist/cdn/vezham-icons.js"</span>
        <span className="text-text-base/70">{'></'}</span>
        <span className="text-[#e06c75]">script</span>
        <span className="text-text-base/70">{'>'}</span>
      </SyntaxBlock>

      <div className="mt-4 mb-8">
        <p className="text-text-base/40 text-[13px] leading-relaxed">
          Use jsDelivr for production pages and pinned npm versions. Use unpkg for quick testing or npm file browsing. Browsers automatically request gzip or Brotli from both CDNs, so keep the script URL pointed at <code className="text-text-base/60 bg-text-base/4 px-1 py-0.5 rounded font-mono">.js</code>, not <code className="text-text-base/60 bg-text-base/4 px-1 py-0.5 rounded font-mono">.js.gz</code>.
        </p>
      </div>

      <h4 className="text-md font-medium text-text-base mb-4">Direct SVG CDN</h4>
      <p className="text-text-base/60 text-[15px] leading-[1.8] mb-4">
        Use a direct SVG URL when you need one static icon file without loading the runtime.
      </p>

      <SyntaxBlock
        title="HTML"
        onCopy={() => onCopy('<img src="https://cdn.jsdelivr.net/npm/@vezham/icons@latest/dist/cdn/icons/home.svg" alt="Home" />\n<img src="https://cdn.jsdelivr.net/npm/@vezham/icons@latest/dist/cdn/icons/home-filled.svg" alt="Home" />', 'cdn-direct-svg')}
        copied={copiedField === 'cdn-direct-svg'}
      >
        <span className="text-text-base/70">{'<'}</span>
        <span className="text-[#e06c75]">img</span>
        <span className="text-[#d19a66]"> src</span>
        <span className="text-text-base/50">=</span>
        <span className="text-[#98c379]">"https://cdn.jsdelivr.net/npm/@vezham/icons@latest/dist/cdn/icons/home.svg"</span>
        <span className="text-[#d19a66]"> alt</span>
        <span className="text-text-base/50">=</span>
        <span className="text-[#98c379]">"Home"</span>
        <span className="text-text-base/70">{' />'}</span>
        {'\n'}
        <span className="text-text-base/70">{'<'}</span>
        <span className="text-[#e06c75]">img</span>
        <span className="text-[#d19a66]"> src</span>
        <span className="text-text-base/50">=</span>
        <span className="text-[#98c379]">"https://cdn.jsdelivr.net/npm/@vezham/icons@latest/dist/cdn/icons/home-filled.svg"</span>
        <span className="text-[#d19a66]"> alt</span>
        <span className="text-text-base/50">=</span>
        <span className="text-[#98c379]">"Home"</span>
        <span className="text-text-base/70">{' />'}</span>
      </SyntaxBlock>

      <div className="mt-4 mb-8">
        <p className="text-text-base/40 text-[13px]">
          Default files use Outline. Use <code className="text-text-base/60 bg-text-base/4 px-1 py-0.5 rounded font-mono">-filled.svg</code> for Filled. Every direct SVG uses a flat kebab-case filename under <code className="text-text-base/60 bg-text-base/4 px-1 py-0.5 rounded font-mono break-all">/dist/cdn/icons</code>.
        </p>
      </div>
    </>
  );
}
