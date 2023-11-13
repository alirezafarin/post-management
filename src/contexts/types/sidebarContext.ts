export type SidebarMode = 'Create' | 'Edit';

export interface ISidebarContext {
  type: SidebarMode;
  open: boolean;
  setSidebarProps: (props: { type: SidebarMode; open: boolean }) => void;
  closeSidebar: () => void;
}
