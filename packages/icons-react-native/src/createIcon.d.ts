import { ForwardRefExoticComponent, RefAttributes } from 'react';
import { SvgProps } from 'react-native-svg';

export type IconWeight =
  | 'outline'
  | 'filled'
  | 'duotone-outline'
  | 'duotone-filled'
  | 'Outline'
  | 'Filled'
  | 'DuotoneOutline'
  | 'DuotoneFilled';

export interface IconProps extends Omit<SvgProps, 'color'> {
  /** Primary color. Default: `currentColor` (black in RN) */
  color?: string;
  /** Secondary color. Default: same as color */
  secondaryColor?: string;
  /** Icon size (number for RN). Default: `24` */
  size?: number;
  /** Icon weight / style. Default: `outline` */
  weight?: IconWeight;
  /** Override stroke-width on stroked weights */
  strokeWidth?: number | string;
}

export type IconComponent = ForwardRefExoticComponent<IconProps & RefAttributes<any>>;

export declare function createIcon(
  displayName: string,
  iconData: Partial<Record<string, string>>,
): IconComponent;

export default createIcon;
