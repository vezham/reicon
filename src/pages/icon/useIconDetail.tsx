import { useParams, useSearchParams } from 'react-router-dom';
import { useState, useMemo, useEffect, useCallback } from 'react';
import { FaReact } from 'react-icons/fa';
import { FiLink } from 'react-icons/fi';
import { IoLogoJavascript } from 'react-icons/io5';
import { SiSvelte } from 'react-icons/si';
import { VueLogo, FlutterLogo } from './Snippets';
import { loadIconData } from '../../lib/icon-data';
import { getVezhamIconsRuntime, waitForVezhamIcons } from '../../lib/vezham-loader';
import {
  copyToClipboard as copyUtils,
  copySvg as copySvgUtils,
  downloadSvg as downloadSvgUtils,
  downloadAsPng as downloadPngUtils,
  downloadAsWebp as downloadWebpUtils,
} from './utils';

export default function useIconDetail() {
  const { name } = useParams<{ name: string }>();
  const [searchParams, setSearchParams] = useSearchParams();
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [activeWeight, setActiveWeightState] = useState<'outline' | 'filled' | 'duotone'>(() => {
    const w = searchParams.get('weight')?.toLowerCase();
    if (w === 'filled') return 'filled';
    if (w === 'duotone') return 'duotone';
    return 'outline';
  });

  const setActiveWeight = useCallback((w: 'outline' | 'filled' | 'duotone') => {
    setActiveWeightState(w);
    const newParams = new URLSearchParams(searchParams);
    newParams.set('weight', w);
    setSearchParams(newParams, { replace: true });
  }, [searchParams, setSearchParams]);

  const [previewSize, setPreviewSize] = useState(128);
  const [toast, setToast] = useState<string | null>(null);
  const [exportSize, setExportSize] = useState(64);
  const [codeTab, setCodeTab] = useState<'vanilla' | 'cdn' | 'svg-url' | 'react' | 'react-native' | 'vue' | 'svelte' | 'flutter' | 'direct'>('vanilla');
  const [iconCategory, setIconCategory] = useState('');
  const [contributorGithub, setContributorGithub] = useState<string | null>(null);
  const [useCustomColor, setUseCustomColor] = useState(false);
  const [customColor, setCustomColor] = useState('#6C5CE7');
  const [isColorPickerOpen, setIsColorPickerOpen] = useState(false);
  const [iconNames, setIconNames] = useState<Record<string, string> | null>(null);

  const pascalName = useMemo(() => name
    ? name.split('-').map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join('')
    : '', [name]);

  const flutterName = useMemo(() => pascalName
    ? pascalName.charAt(0).toLowerCase() + pascalName.slice(1)
    : '', [pascalName]);

  const flashToast = useCallback((msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 2500);
  }, []);

  const handleCopy = useCallback((text: string, field: string) => {
    return copyUtils(text, field, setCopiedField, flashToast);
  }, [flashToast]);

  const handleCopySvg = useCallback(() => {
    return copySvgUtils(name || '', activeWeight, useCustomColor, customColor, setCopiedField, flashToast);
  }, [name, activeWeight, useCustomColor, customColor, flashToast]);

  const handleDownloadSvg = useCallback(() => {
    return downloadSvgUtils(name || '', activeWeight, exportSize, useCustomColor, customColor, flashToast);
  }, [name, activeWeight, exportSize, useCustomColor, customColor, flashToast]);

  const handleDownloadPng = useCallback(() => {
    return downloadPngUtils(name || '', activeWeight, exportSize, useCustomColor, customColor, flashToast);
  }, [name, activeWeight, exportSize, useCustomColor, customColor, flashToast]);

  const handleDownloadWebp = useCallback(() => {
    return downloadWebpUtils(name || '', activeWeight, exportSize, useCustomColor, customColor, flashToast);
  }, [name, activeWeight, exportSize, useCustomColor, customColor, flashToast]);

  const reset = useCallback(() => {
    setActiveWeight('outline');
    setPreviewSize(128);
    setUseCustomColor(false);
    setCustomColor('#6C5CE7');
    setIsColorPickerOpen(false);
  }, [setActiveWeight]);

  const svgUrlFilename = `${name}${activeWeight === 'filled' ? '-filled' : activeWeight === 'duotone' ? '-duotone' : ''}.svg`;
  const snippetColor = useCustomColor ? customColor : undefined;
  const jsColorProp = snippetColor ? `, color: '${snippetColor}'` : '';
  const htmlColorAttr = snippetColor ? ` color="${snippetColor}"` : '';

  const vanillaRaw = `import { ${pascalName} } from '@vezham/icons';\n\nconst icon = ${pascalName}({ size: ${previewSize}, weight: '${activeWeight}'${jsColorProp} });\ndocument.body.appendChild(icon);`;
  const cdnRaw = `<script src="https://cdn.jsdelivr.net/npm/@vezham/icons@latest/dist/cdn/vezham-icons.js"><\/script>\n<vx-icon icon="${name}" weight="${activeWeight}" size="${previewSize}"${htmlColorAttr}></vx-icon>`;
  const svgUrlRaw = `<img src="https://cdn.jsdelivr.net/npm/@vezham/icons@latest/dist/cdn/icons/${svgUrlFilename}" width="${previewSize}" height="${previewSize}" alt="${name} icon" />`;
  const reactRaw = `import { ${pascalName} } from '@vezham/icons-react';\n\n<${pascalName} size={${previewSize}} weight="${activeWeight}"${htmlColorAttr} />`;
  const reactNativeRaw = `import { ${pascalName} } from '@vezham/icons-react-native';\n\n<${pascalName} size={${previewSize}} weight="${activeWeight}"${htmlColorAttr} />`;
  const vueRaw = `import { ${pascalName} } from '@vezham/icons-vue';\n\n<${pascalName} :size="${previewSize}" weight="${activeWeight}"${htmlColorAttr} />`;
  const svelteRaw = `<script>\n  import { ${pascalName} } from '@vezham/icons-svelte';\n</script>\n\n<${pascalName} size={${previewSize}} weight="${activeWeight}"${htmlColorAttr} />`;
  const flutterRaw = `import 'package:flutter_svg/flutter_svg.dart';\nimport 'package:vezham_icons/icons.dart';\n\nSvgPicture.string(\n  vezhamIconSvg(Vezham.${activeWeight}.${flutterName}),\n  width: ${previewSize},\n  height: ${previewSize},\n)`;
  const directRaw = `import ${pascalName} from '@vezham/icons-react/icons/${pascalName}';`;

  const CODE_TABS = useMemo(() => [
    { id: 'vanilla' as const, label: 'JS', icon: <IoLogoJavascript className="text-yellow-400" size={14} />, raw: vanillaRaw },
    { id: 'cdn' as const, label: 'CDN', icon: <IoLogoJavascript className="text-[#F7DF1E]" size={14} />, raw: cdnRaw },
    { id: 'svg-url' as const, label: 'SVG URL', icon: <FiLink className="text-[#6C5CE7]" size={14} />, raw: svgUrlRaw },
    { id: 'react' as const, label: 'React', icon: <FaReact className="text-[#61DAFB]" size={14} />, raw: reactRaw },
    { id: 'react-native' as const, label: 'React Native', icon: <FaReact className="text-[#61DAFB]" size={14} />, raw: reactNativeRaw },
    { id: 'vue' as const, label: 'Vue', icon: <VueLogo />, raw: vueRaw },
    { id: 'svelte' as const, label: 'Svelte', icon: <SiSvelte className="text-[#FF3E00]" size={14} />, raw: svelteRaw },
    { id: 'flutter' as const, label: 'Flutter', icon: <FlutterLogo />, raw: flutterRaw },
    { id: 'direct' as const, label: 'Direct', icon: <FaReact className="text-[#61DAFB]" size={14} />, raw: directRaw },
  ], [vanillaRaw, cdnRaw, svgUrlRaw, reactRaw, reactNativeRaw, vueRaw, svelteRaw, flutterRaw, directRaw]);

  const activeTab = CODE_TABS.find((t) => t.id === codeTab)!;

  useEffect(() => {
    const w = searchParams.get('weight')?.toLowerCase();
    if (w === 'filled') setActiveWeightState('filled');
    else if (w === 'duotone') setActiveWeightState('duotone');
    else setActiveWeightState('outline');
  }, [name, searchParams]);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const data = await loadIconData();
        if (!cancelled) setIconNames(data.iconNames);
      } catch {}
    })();
    return () => { cancelled = true; };
  }, []);

  useEffect(() => {
    if (!name) return;
    let cancelled = false;
    (async () => {
      try {
        await waitForVezhamIcons();
        if (cancelled) return;
        const cat = getVezhamIconsRuntime()?.categoryOf?.(name);
        if (cat) setIconCategory(cat.split('-').map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(' '));
      } catch {}
    })();
    return () => { cancelled = true; };
  }, [name]);

  useEffect(() => {
    if (!name) return;
    let cancelled = false;
    (async () => {
      try {
        await waitForVezhamIcons();
        if (cancelled) return;
        const gh = getVezhamIconsRuntime()?.contributorOf?.(name);
        setContributorGithub(gh ?? null);
      } catch {}
    })();
    return () => { cancelled = true; };
  }, [name]);

  const pageTitle = `${pascalName} Icon \u2014 Vezham`;
  const pageDesc = `Free ${pascalName} SVG icon from Vezham. Outline & filled weights. MIT licensed.`;
  const pageUrl = `https://vezham.com/icon/${name}`;

  const relatedIcons = useMemo(() => {
    if (!name || !iconNames) return [];
    const allNames = Object.keys(iconNames) as string[];
    const prefix = name.replace(/-?\d+$/, '').replace(/-[^-]+$/, '');
    const related = allNames.filter(
      (n) => n !== name && (n.startsWith(prefix + '-') || n.startsWith(prefix) || name.startsWith(n.replace(/-?\d+$/, '')))
    );
    return related.sort(() => 0.5 - Math.random()).slice(0, 14);
  }, [name, iconNames]);

  return {
    name,
    copiedField, activeWeight, previewSize, toast, exportSize,
    codeTab, iconCategory, contributorGithub, useCustomColor, customColor,
    isColorPickerOpen, pascalName, relatedIcons,
    setCopiedField, setActiveWeight, setPreviewSize, setExportSize,
    setCodeTab, setUseCustomColor, setCustomColor, setIsColorPickerOpen,
    setToast,
    flashToast, handleCopy, handleCopySvg,
    handleDownloadSvg, handleDownloadPng, handleDownloadWebp,
    reset, CODE_TABS, activeTab,
    pageTitle, pageDesc, pageUrl,
    iconNames,
  };
}
