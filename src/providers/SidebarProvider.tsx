import { useSidebar } from 'hooks/useSidebar';
import { sidebarContext } from '../contexts';
import { ReactNode } from 'react';

export default function SidebarProvider({ children }: { children: ReactNode }) {
  const sidebarValues = useSidebar();

  return <sidebarContext.Provider value={sidebarValues}>{children}</sidebarContext.Provider>;
}
