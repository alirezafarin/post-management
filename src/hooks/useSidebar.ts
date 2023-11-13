import { ISidebarContext, SidebarMode } from 'contexts';
import { useState } from 'react';

export const useSidebar = (): ISidebarContext => {
  const [{ open, type, noteId }, setSidebarProps] = useState({
    open: false,
    type: 'Create' as SidebarMode,
    noteId: '',
  });

  const closeSidebar = () => setSidebarProps({ type, open: false, noteId: '' });

  return { closeSidebar, open, setSidebarProps: setSidebarProps as any, type, noteId };
};
