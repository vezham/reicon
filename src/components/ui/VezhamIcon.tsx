import { createElement } from 'react';

export interface VezhamIconProps {
    icon?: string;
    weight?: string;
    size?: number | string;
    color?: string;
    className?: string;
    'aria-label'?: string;
}

export default function VezhamIcon(props: VezhamIconProps) {
    return createElement('vx-icon', props as Record<string, unknown>);
}
