import { LucideIcon } from 'lucide-react';

export interface FeatureItem {
  Icon: LucideIcon;
  title: string;
  description: string;
}

export interface LayoutProps {
  children: React.ReactNode;
}