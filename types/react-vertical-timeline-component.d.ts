declare module 'react-vertical-timeline-component' {
  import { ReactNode } from 'react';

  export interface VerticalTimelineProps {
    children?: ReactNode;
    className?: string;
    layout?: '1-column' | '2-columns';
    lineColor?: string;
    animate?: boolean;
  }

  export interface VerticalTimelineElementProps {
    className?: string;
    contentStyle?: React.CSSProperties;
    contentArrowStyle?: React.CSSProperties;
    date?: string;
    dateClassName?: string;
    iconStyle?: React.CSSProperties;
    icon?: ReactNode;
    children?: ReactNode;
    position?: string;
    visible?: boolean;
  }

  export class VerticalTimeline extends React.Component<VerticalTimelineProps> {}
  export class VerticalTimelineElement extends React.Component<VerticalTimelineElementProps> {}
} 