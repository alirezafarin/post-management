import { ReactNode } from 'react';
import SidebarProvider from './SidebarProvider';

export const Providers = ({ children }: { children: ReactNode }) => {
  return <SidebarProvider>{children}</SidebarProvider>;
};
