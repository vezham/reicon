import 'react';

interface VxIconElementProps extends React.HTMLAttributes<HTMLElement> {
  icon?: string;
  weight?: string;
  size?: number | string;
  color?: string;
  class?: string;
  style?: React.CSSProperties;
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'vx-icon': VxIconElementProps;
    }
  }
}

declare module 'react/jsx-runtime' {
  namespace JSX {
    interface IntrinsicElements {
      'vx-icon': VxIconElementProps;
    }
  }
}

declare global {
  namespace React {
    namespace JSX {
      interface IntrinsicElements {
        'vx-icon': VxIconElementProps;
      }
    }
  }
  namespace JSX {
    interface IntrinsicElements {
      'vx-icon': VxIconElementProps;
    }
  }

  interface Window {
    VezhamIcons?: {
      icons: string[];
      categories: string[];
      ready: Promise<void>;
      preload: (names: string[]) => void;
      categoryOf: (name: string) => string | null;
      categoryMap: Record<string, string>;
      /** Returns the GitHub username of the contributor who designed this icon, or null if it's a core icon. */
      contributorOf: (name: string) => string | null;
    };
    Reicon?: Window['VezhamIcons'];
  }
}

export {};
