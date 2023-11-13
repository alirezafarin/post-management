export type SidebarMode = 'Create' | 'Edit';

export interface ISidebarContext {
  type: SidebarMode;
  open: boolean;
  setSidebarProps: (props: { type: SidebarMode; open: boolean; noteId?: string | number }) => void;
  closeSidebar: () => void;
  noteId: string | number;
}
