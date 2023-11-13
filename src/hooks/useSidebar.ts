import { ISidebarContext, SidebarMode } from 'contexts';
import { useState } from 'react';

export const useSidebar = (): ISidebarContext => {
  const [{ open, type }, setSidebarProps] = useState({
    open: false,
    type: 'Create' as SidebarMode,
  });

  const closeSidebar = () => setSidebarProps({ type, open: false });

  return { closeSidebar, open, setSidebarProps, type };
};
