declare module '@/components/ui/lamp-section-header' {
  import { ReactNode } from 'react';
  
  export interface LampSectionHeaderProps {
    children: ReactNode;
    className?: string;
    id?: string;
  }

  export const LampSectionHeader: React.FC<LampSectionHeaderProps>;
} 