import { TabType } from 'types';

export const BaseTag = ({ children, color }: { children: TabType; color: string }) => {
  return (
    <p style={{ backgroundColor: color }} className="p-1 rounded-md">
      {children}
    </p>
  );
};
