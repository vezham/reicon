let ready: Promise<void> | null = null;

export type VezhamIconsRuntime = {
  icons: string[];
  categories: string[];
  ready: Promise<void>;
  preload: (names: string[]) => void;
  categoryOf: (name: string) => string | null;
  categoryMap: Record<string, string>;
  contributorOf: (name: string) => string | null;
};

export function getVezhamIconsRuntime(): VezhamIconsRuntime | undefined {
  return (window as any).VezhamIcons || (window as any).Reicon;
}

export function waitForVezhamIcons(timeoutMs = 5000): Promise<void> {
  if (!ready) {
    ready = new Promise((resolve, reject) => {
      const timer = setTimeout(() => reject(new Error('Vezham Icons failed to load')), timeoutMs);

      function check() {
        if (getVezhamIconsRuntime()) {
          clearTimeout(timer);
          resolve();
        } else {
          setTimeout(check, 50);
        }
      }
      check();
    });
  }
  return ready;
}
