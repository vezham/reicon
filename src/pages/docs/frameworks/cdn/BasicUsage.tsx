import SyntaxBlock from '../../../../components/docs/SyntaxBlock';

interface Props {
  copiedField: string | null;
  onCopy: (text: string, field: string) => void;
}

export default function BasicUsage({ copiedField, onCopy }: Props) {
  return (
    <>
      {/* Basic Usage ESM */}
      <h4 className="text-md font-medium text-text-base mb-4 mt-8">Creating DOM Elements</h4>
      <p className="text-text-base/60 text-[15px] leading-[1.8] mb-4">
        Import named icons directly from <code className="text-text-base/70 bg-text-base/6 px-1.5 py-0.5 rounded text-[12px]">reicon</code>. Each icon is a factory function that returns a native <code className="text-text-base/70 bg-text-base/6 px-1.5 py-0.5 rounded text-[12px]">SVGSVGElement</code>.
      </p>

      <SyntaxBlock
        title="JavaScript"
        onCopy={() => onCopy("import { Home, ShieldCheck } from '@vezham/icons';\n\n// Create SVG elements\nconst home = Home({ size: 24 });\nconst shield = ShieldCheck({ size: 32, color: '#6C5CE7', weight: 'Filled' });\n\n// Append directly to document\ndocument.body.appendChild(home);\ndocument.body.appendChild(shield);", 'vanilla-esm')}
        copied={copiedField === 'vanilla-esm'}
      >
        <span className="text-[#c678dd]">import</span>
        <span className="text-text-base/70">{' { '}</span>
        <span className="text-[#e5c07b]">Home</span>
        <span className="text-text-base/70">, </span>
        <span className="text-[#e5c07b]">ShieldCheck</span>
        <span className="text-text-base/70">{' } '}</span>
        <span className="text-[#c678dd]">from</span>
        <span className="text-[#98c379]"> '@vezham/icons'</span>
        <span className="text-text-base/30">;</span>
        {'\n\n'}
        <span className="text-text-base/30">{'// Create SVG elements'}</span>
        {'\n'}
        <span className="text-[#c678dd]">const</span>
        <span className="text-text-base/70"> home = </span>
        <span className="text-[#61afef]">Home</span>
        <span className="text-text-base/70">({'{'} size: </span>
        <span className="text-[#d19a66]">24</span>
        <span className="text-text-base/70"> {'}'});</span>
        {'\n'}
        <span className="text-[#c678dd]">const</span>
        <span className="text-text-base/70"> shield = </span>
        <span className="text-[#61afef]">ShieldCheck</span>
        <span className="text-text-base/70">({'{'} size: </span>
        <span className="text-[#d19a66]">32</span>
        <span className="text-text-base/70">, color: </span>
        <span className="text-[#98c379]">'#6C5CE7'</span>
        <span className="text-text-base/70">, weight: </span>
        <span className="text-[#98c379]">'Filled'</span>
        <span className="text-text-base/70"> {'}'});</span>
        {'\n\n'}
        <span className="text-text-base/30">{'// Append directly to document'}</span>
        {'\n'}
        <span className="text-text-base/70">document.body.</span>
        <span className="text-[#61afef]">appendChild</span>
        <span className="text-text-base/70">(home);</span>
        {'\n'}
        <span className="text-text-base/70">document.body.</span>
        <span className="text-[#61afef]">appendChild</span>
        <span className="text-text-base/70">(shield);</span>
      </SyntaxBlock>

      {/* Basic CDN Usage */}
      <h4 className="text-md font-medium text-text-base mb-4 mt-8">Basic CDN Usage</h4>
      <p className="text-text-base/60 text-[15px] leading-[1.8] mb-4">
        Simply add the <code className="text-text-base/70 bg-text-base/6 px-1.5 py-0.5 rounded text-[12px]">{'<vx-icon>'}</code> tags directly in your HTML:
      </p>

      <SyntaxBlock
        title="HTML"
        onCopy={() => onCopy('<vx-icon icon="home"></vx-icon>\n<vx-icon icon="shield-check" weight="filled" size="32" color="#6C5CE7"></vx-icon>', 'cdn-basic')}
        copied={copiedField === 'cdn-basic'}
      >
        <span className="text-text-base/70">{'<'}</span>
        <span className="text-[#e06c75]">vx-icon</span>
        <span className="text-[#d19a66]"> icon</span>
        <span className="text-text-base/50">=</span>
        <span className="text-[#98c379]">"home"</span>
        <span className="text-text-base/70">{'></'}</span>
        <span className="text-[#e06c75]">vx-icon</span>
        <span className="text-text-base/70">{'>'}</span>
        {'\n'}
        <span className="text-text-base/70">{'<'}</span>
        <span className="text-[#e06c75]">vx-icon</span>
        <span className="text-[#d19a66]"> icon</span>
        <span className="text-text-base/50">=</span>
        <span className="text-[#98c379]">"shield-check"</span>
        <span className="text-[#d19a66]"> weight</span>
        <span className="text-text-base/50">=</span>
        <span className="text-[#98c379]">"filled"</span>
        <span className="text-[#d19a66]"> size</span>
        <span className="text-text-base/50">=</span>
        <span className="text-[#98c379]">"32"</span>
        <span className="text-[#d19a66]"> color</span>
        <span className="text-text-base/50">=</span>
        <span className="text-[#98c379]">"#6C5CE7"</span>
        <span className="text-text-base/70">{'></'}</span>
        <span className="text-[#e06c75]">vx-icon</span>
        <span className="text-text-base/70">{'>'}</span>
      </SyntaxBlock>

      {/* Customizing Icons */}
      <h3 className="text-lg font-serif text-text-base mb-4 mt-10">Customizing Elements (Attributes)</h3>
      <p className="text-text-base/60 text-[15px] leading-[1.8] mb-4">
        You can customize <code className="text-text-base/70 bg-text-base/6 px-1.5 py-0.5 rounded text-[12px]">{'<vx-icon>'}</code> elements using reactive HTML attributes. Updates will be rendered instantly.
      </p>

      <SyntaxBlock
        title="Attributes"
        onCopy={() => onCopy('<!-- Size -->\n<vx-icon icon="home" size="16"></vx-icon>\n<vx-icon icon="home" size="32"></vx-icon>\n\n<!-- Color -->\n<vx-icon icon="heart" color="#ef4444"></vx-icon>\n<vx-icon icon="heart" color="rgb(99, 102, 241)"></vx-icon>\n\n<!-- Weight -->\n<vx-icon icon="star" weight="outline"></vx-icon>\n<vx-icon icon="star" weight="filled"></vx-icon>', 'cdn-attrs')}
        copied={copiedField === 'cdn-attrs'}
      >
        <span className="text-text-base/30">{'<!-- Size -->'}</span>
        {'\n'}
        <span className="text-text-base/70">{'<'}</span><span className="text-[#e06c75]">vx-icon</span><span className="text-[#d19a66]"> icon</span><span className="text-text-base/50">=</span><span className="text-[#98c379]">"home"</span><span className="text-[#d19a66]"> size</span><span className="text-text-base/50">=</span><span className="text-[#98c379]">"16"</span><span className="text-text-base/70">{'></'}</span><span className="text-[#e06c75]">vx-icon</span><span className="text-text-base/70">{'>'}</span>
        {'\n'}
        <span className="text-text-base/70">{'<'}</span><span className="text-[#e06c75]">vx-icon</span><span className="text-[#d19a66]"> icon</span><span className="text-text-base/50">=</span><span className="text-[#98c379]">"home"</span><span className="text-[#d19a66]"> size</span><span className="text-text-base/50">=</span><span className="text-[#98c379]">"32"</span><span className="text-text-base/70">{'></'}</span><span className="text-[#e06c75]">vx-icon</span><span className="text-text-base/70">{'>'}</span>
        {'\n\n'}
        <span className="text-text-base/30">{'<!-- Color -->'}</span>
        {'\n'}
        <span className="text-text-base/70">{'<'}</span><span className="text-[#e06c75]">vx-icon</span><span className="text-[#d19a66]"> icon</span><span className="text-text-base/50">=</span><span className="text-[#98c379]">"heart"</span><span className="text-[#d19a66]"> color</span><span className="text-text-base/50">=</span><span className="text-[#98c379]">"#ef4444"</span><span className="text-text-base/70">{'></'}</span><span className="text-[#e06c75]">vx-icon</span><span className="text-text-base/70">{'>'}</span>
        {'\n\n'}
        <span className="text-text-base/30">{'<!-- Weight -->'}</span>
        {'\n'}
        <span className="text-text-base/70">{'<'}</span><span className="text-[#e06c75]">vx-icon</span><span className="text-[#d19a66]"> icon</span><span className="text-text-base/50">=</span><span className="text-[#98c379]">"star"</span><span className="text-[#d19a66]"> weight</span><span className="text-text-base/50">=</span><span className="text-[#98c379]">"outline"</span><span className="text-text-base/70">{'></'}</span><span className="text-[#e06c75]">vx-icon</span><span className="text-text-base/70">{'>'}</span>
        {'\n'}
        <span className="text-text-base/70">{'<'}</span><span className="text-[#e06c75]">vx-icon</span><span className="text-[#d19a66]"> icon</span><span className="text-text-base/50">=</span><span className="text-[#98c379]">"star"</span><span className="text-[#d19a66]"> weight</span><span className="text-text-base/50">=</span><span className="text-[#98c379]">"filled"</span><span className="text-text-base/70">{'></'}</span><span className="text-[#e06c75]">vx-icon</span><span className="text-text-base/70">{'>'}</span>
      </SyntaxBlock>
    </>
  );
}
