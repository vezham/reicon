import { useState, useEffect } from 'react';

export interface DuotoneIconInfo {
  weights?: Partial<Record<'duotone-outline' | 'duotone-filled', { code: string }>>;
  category?: string;
  description?: string[];
}

let duotoneCache: Record<string, DuotoneIconInfo> | null = null;
let duotonePromise: Promise<Record<string, DuotoneIconInfo>> | null = null;

export function useDuotoneData(activeStyle: string) {
  const [duotoneMap, setDuotoneMap] = useState<Record<string, DuotoneIconInfo> | null>(duotoneCache);
  const [loading, setLoading] = useState(activeStyle.toLowerCase().includes('duotone') && !duotoneCache);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!activeStyle.toLowerCase().includes('duotone')) return;
    if (duotoneCache) {
      setDuotoneMap(duotoneCache);
      setLoading(false);
      return;
    }

    let cancelled = false;
    setLoading(true);

    if (!duotonePromise) {
      duotonePromise = import('../data/duotone-icons.json').then((module) => {
        const rawIcons = (module.default as any)?.icons || {};
        const parsed: Record<string, DuotoneIconInfo> = {};
        for (const [key, val] of Object.entries(rawIcons)) {
          parsed[key] = {
            weights: (val as any).weights || {},
            category: (val as any).category,
            description: (val as any).description,
          };
        }
        duotoneCache = parsed;
        return parsed;
      });
    }

    duotonePromise
      .then((map) => {
        if (!cancelled) {
          setDuotoneMap(map);
          setLoading(false);
        }
      })
      .catch((err) => {
        if (!cancelled) {
          setError(err?.message || 'Failed to load duotone icons');
          setLoading(false);
        }
      });

    return () => {
      cancelled = true;
    };
  }, [activeStyle]);

  return { duotoneMap, loading, error };
}
