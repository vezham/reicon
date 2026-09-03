import { SvelteComponent } from 'svelte';

export interface IconComponentProps {
  /** Primary icon color. Default: inherits from CSS */
  color?: string;
  /** Icon size (px when number, or any CSS unit). Default: `24` */
  size?: number | string;
  /** Icon weight / style. Default: `outline` */
  weight?:
    | 'outline'
    | 'filled'
    | 'duotone-outline'
    | 'duotone-filled';
  /** Override stroke-width on stroked weights */
  strokeWidth?: number | string;
  /** Icon svg path data for different weights */
  iconData?: Record<string, string>;
  // allow other standard SVG/HTML attributes
  [key: string]: any;
}

export default class Icon extends SvelteComponent<IconComponentProps, any, any> {}
