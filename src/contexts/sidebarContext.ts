import { createContext } from 'react';
import { ISidebarContext } from './types';

export const sidebarContext = createContext<ISidebarContext>({
  open: false,
  type: 'Create',
  setSidebarProps: () => {},
  closeSidebar: () => {},
  noteId: '',
});
