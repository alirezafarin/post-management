import { ReactNode } from 'react';
import SidebarProvider from './SidebarProvider';
import NotesProvider from './NotesProvider';

export const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <SidebarProvider>
      <NotesProvider>{children}</NotesProvider>
    </SidebarProvider>
  );
};
