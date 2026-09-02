import { FlutterIcon } from '../../components/docs/framework/icons';

export const FlutterLogo = () => <FlutterIcon size={14} />;

export type IconSnippetWeight = 'outline' | 'filled' | 'duotone';

interface SnippetOptions {
  activeWeight: IconSnippetWeight;
  size: number;
  color?: string;
}

function toSvgUrlFilename(name: string, weight: IconSnippetWeight) {
  if (weight === 'filled') return `${name}-filled.svg`;
  if (weight === 'duotone') return `${name}-duotone.svg`;
  return `${name}.svg`;
}

export function FlutterSnippet({ flutterName, activeWeight, size }: { flutterName: string } & SnippetOptions) {
  return (
    <>
      <span className="text-[#c678dd]">import</span><span className="text-text-base/70"> 'package:flutter_svg/flutter_svg.dart'</span><span className="text-text-base/30">;</span>
      {'\n'}
      <span className="text-[#c678dd]">import</span><span className="text-text-base/70"> 'package:reicon_flutter/reicon_flutter.dart'</span><span className="text-text-base/30">;</span>
      {'\n\n'}
      <span className="text-[#61afef]">SvgPicture</span><span className="text-text-base/70">.string(</span>
      {'\n'}
      <span className="text-text-base/70">  </span><span className="text-[#61afef]">reiconSvg</span><span className="text-text-base/70">(</span><span className="text-[#e5c07b]">Reicon</span><span className="text-text-base/70">.</span><span className="text-[#e5c07b]">{activeWeight}</span><span className="text-text-base/70">.</span><span className="text-[#e5c07b]">{flutterName}</span><span className="text-text-base/70">),</span>
      {'\n'}
      <span className="text-text-base/70">  width: </span><span className="text-[#d19a66]">{size}</span><span className="text-text-base/30">,</span>
      {'\n'}
      <span className="text-text-base/70">  height: </span><span className="text-[#d19a66]">{size}</span><span className="text-text-base/30">,</span>
      {'\n'}
      <span className="text-text-base/70">)</span>
    </>
  );
}

export function VueLogo() {
  return (
    <svg className="w-3.5 h-3.5" viewBox="0 0 122.88 106.42" fill="none">
      <polygon fill="#4DBA87" points="75.63,0 61.44,24.58 47.25,0 0,0 61.44,106.42 122.88,0 75.63,0" />
      <polygon fill="#425466" points="75.63,0 61.44,24.58 47.25,0 24.58,0 61.44,63.85 98.3,0 75.63,0" />
    </svg>
  );
}

export function VanillaSnippet({ pascalName, activeWeight, size, color }: { pascalName: string } & SnippetOptions) {
  return (
    <>
      <span className="text-[#c678dd]">import</span><span className="text-text-base/70">{' { '}</span>
      <span className="text-[#e5c07b]">{pascalName}</span><span className="text-text-base/70">{' } '}</span>
      <span className="text-[#c678dd]">from</span><span className="text-[#98c379]"> '@vezham/icons'</span><span className="text-text-base/30">;</span>
      {'\n\n'}
      <span className="text-[#c678dd]">const</span><span className="text-text-base/70"> icon = </span><span className="text-[#61afef]">{pascalName}</span><span className="text-text-base/70">({'{'} size: </span><span className="text-[#d19a66]">{size}</span>
      <span className="text-text-base/70">, weight: </span><span className="text-[#98c379]">'{activeWeight}'</span>
      {color && (<><span className="text-text-base/70">, color: </span><span className="text-[#98c379]">'{color}'</span></>)}
      <span className="text-text-base/70"> {'}'});</span>
      {'\n'}
      <span className="text-text-base/70">document.body.</span><span className="text-[#61afef]">appendChild</span><span className="text-text-base/70">(icon);</span>
    </>
  );
}

export function ReactSnippet({ pascalName, activeWeight, size, color }: { pascalName: string } & SnippetOptions) {
  return (
    <>
      <span className="text-[#c678dd]">import</span><span className="text-text-base/70">{' { '}</span>
      <span className="text-[#e5c07b]">{pascalName}</span><span className="text-text-base/70">{' } '}</span>
      <span className="text-[#c678dd]">from</span><span className="text-[#98c379]"> '@vezham/icons-react'</span><span className="text-text-base/30">;</span>
      {'\n\n'}
      <span className="text-text-base/70">{'<'}</span><span className="text-[#e06c75]">{pascalName}</span>
      <span className="text-[#d19a66]"> size</span><span className="text-text-base/50">=</span><span className="text-text-base/70">{'{'}{size}{'}'}</span>
      <span className="text-[#d19a66]"> weight</span><span className="text-text-base/50">=</span><span className="text-[#98c379]">"{activeWeight}"</span>
      {color && (<><span className="text-[#d19a66]"> color</span><span className="text-text-base/50">=</span><span className="text-[#98c379]">"{color}"</span></>)}
      <span className="text-text-base/70"> /{'>'}</span>
    </>
  );
}

export function ReactNativeSnippet({ pascalName, activeWeight, size, color }: { pascalName: string } & SnippetOptions) {
  return (
    <>
      <span className="text-[#c678dd]">import</span><span className="text-text-base/70">{' { '}</span>
      <span className="text-[#e5c07b]">{pascalName}</span><span className="text-text-base/70">{' } '}</span>
      <span className="text-[#c678dd]">from</span><span className="text-[#98c379]"> '@vezham/icons-react-native'</span><span className="text-text-base/30">;</span>
      {'\n\n'}
      <span className="text-text-base/70">{'<'}</span><span className="text-[#e06c75]">{pascalName}</span>
      <span className="text-[#d19a66]"> size</span><span className="text-text-base/50">=</span><span className="text-text-base/70">{'{'}{size}{'}'}</span>
      <span className="text-[#d19a66]"> weight</span><span className="text-text-base/50">=</span><span className="text-[#98c379]">"{activeWeight}"</span>
      {color && (<><span className="text-[#d19a66]"> color</span><span className="text-text-base/50">=</span><span className="text-[#98c379]">"{color}"</span></>)}
      <span className="text-text-base/70"> /{'>'}</span>
    </>
  );
}

export function VueSnippet({ pascalName, activeWeight, size, color }: { pascalName: string } & SnippetOptions) {
  return (
    <>
      <span className="text-[#c678dd]">import</span><span className="text-text-base/70">{' { '}</span>
      <span className="text-[#e5c07b]">{pascalName}</span><span className="text-text-base/70">{' } '}</span>
      <span className="text-[#c678dd]">from</span><span className="text-[#98c379]"> '@vezham/icons-vue'</span><span className="text-text-base/30">;</span>
      {'\n\n'}
      <span className="text-text-base/70">{'<'}</span><span className="text-[#e06c75]">{pascalName}</span>
      <span className="text-[#d19a66]"> :size</span><span className="text-text-base/50">=</span><span className="text-[#98c379]">"{String(size)}"</span>
      <span className="text-[#d19a66]"> weight</span><span className="text-text-base/50">=</span><span className="text-[#98c379]">"{activeWeight}"</span>
      {color && (<><span className="text-[#d19a66]"> color</span><span className="text-text-base/50">=</span><span className="text-[#98c379]">"{color}"</span></>)}
      <span className="text-text-base/70"> /{'>'}</span>
    </>
  );
}

export function SvelteSnippet({ pascalName, activeWeight, size, color }: { pascalName: string } & SnippetOptions) {
  return (
    <>
      <span className="text-text-base/30">{'<'}</span><span className="text-[#e06c75]">script</span><span className="text-text-base/30">{'>'}</span>
      {'\n'}
      <span className="text-[#c678dd]">  import</span><span className="text-text-base/70">{' { '}</span>
      <span className="text-[#e5c07b]">{pascalName}</span><span className="text-text-base/70">{' } '}</span>
      <span className="text-[#c678dd]">from</span><span className="text-[#98c379]"> '@vezham/icons-svelte'</span><span className="text-text-base/30">;</span>
      {'\n'}
      <span className="text-text-base/30">{'</'}</span><span className="text-[#e06c75]">script</span><span className="text-text-base/30">{'>'}</span>
      {'\n\n'}
      <span className="text-text-base/70">{'<'}</span><span className="text-[#e06c75]">{pascalName}</span>
      <span className="text-[#d19a66]"> size</span><span className="text-text-base/50">=</span><span className="text-text-base/70">{'{'}{size}{'}'}</span>
      <span className="text-[#d19a66]"> weight</span><span className="text-text-base/50">=</span><span className="text-[#98c379]">"{activeWeight}"</span>
      {color && (<><span className="text-[#d19a66]"> color</span><span className="text-text-base/50">=</span><span className="text-[#98c379]">"{color}"</span></>)}
      <span className="text-text-base/70"> /{'>'}</span>
    </>
  );
}

export function DirectSnippet({ pascalName }: { pascalName: string }) {
  return (
    <>
      <span className="text-[#c678dd]">import</span><span className="text-[#e5c07b]"> {pascalName}</span>
      <span className="text-[#c678dd]"> from</span><span className="text-[#98c379]"> '@vezham/icons-react/icons/{pascalName}'</span><span className="text-text-base/30">;</span>
    </>
  );
}

export function SvgUrlSnippet({ name, activeWeight, size }: { name: string } & SnippetOptions) {
  const filename = toSvgUrlFilename(name, activeWeight);

  return (
    <>
      <span className="text-text-base/70">{'<'}</span><span className="text-[#e06c75]">img</span>
      <span className="text-[#d19a66]"> src</span><span className="text-text-base/50">=</span>
      <span className="text-[#98c379]">"https://cdn.jsdelivr.net/npm/@vezham/icons@latest/dist/cdn/icons/{filename}"</span>
      <span className="text-[#d19a66]"> width</span><span className="text-text-base/50">=</span><span className="text-[#98c379]">"{String(size)}"</span>
      <span className="text-[#d19a66]"> height</span><span className="text-text-base/50">=</span><span className="text-[#98c379]">"{String(size)}"</span>
      <span className="text-[#d19a66]"> alt</span><span className="text-text-base/50">=</span><span className="text-[#98c379]">"{name} icon"</span>
      <span className="text-text-base/70"> /{'>'}</span>
    </>
  );
}

export function CdnSnippet({ name, activeWeight, size, color }: { name: string } & SnippetOptions) {
  return (
    <>
      <span className="text-text-base/70">{'<'}</span><span className="text-[#e06c75]">script</span>
      <span className="text-[#d19a66]"> src</span><span className="text-text-base/50">=</span>
      <span className="text-[#98c379]">"https://cdn.jsdelivr.net/npm/@vezham/icons@latest/dist/cdn/vezham-icons.js"</span>
      <span className="text-text-base/70">{'></'}</span><span className="text-[#e06c75]">script</span><span className="text-text-base/70">{'>'}</span>
      {'\n'}
      <span className="text-text-base/70">{'<'}</span><span className="text-[#e06c75]">vx-icon</span>
      <span className="text-[#d19a66]"> icon</span><span className="text-text-base/50">=</span><span className="text-[#98c379]">"{name}"</span>
      <span className="text-[#d19a66]"> weight</span><span className="text-text-base/50">=</span><span className="text-[#98c379]">"{activeWeight}"</span>
      <span className="text-[#d19a66]"> size</span><span className="text-text-base/50">=</span><span className="text-[#98c379]">"{String(size)}"</span>
      {color && (<><span className="text-[#d19a66]"> color</span><span className="text-text-base/50">=</span><span className="text-[#98c379]">"{color}"</span></>)}
      <span className="text-text-base/70">{'></'}</span><span className="text-[#e06c75]">vx-icon</span><span className="text-text-base/70">{'>'}</span>
    </>
  );
}
