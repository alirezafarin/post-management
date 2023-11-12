import clsx from 'clsx';
import { FC, ReactNode } from 'react';
import styles from './assets/styles/BaseSidebar.module.css';

export interface IBaseSidebarProps {
  children: ReactNode;
  open: boolean;
  className?: string;
}

export const BaseSidebar: FC<IBaseSidebarProps> = ({ children, open, className = '' }) => {
  return (
    <div
      className={clsx(
        'fixed top-0 right-0 z-40 w-3/5 h-screen p-4 overflow-y-auto transition-transform bg-white',
        styles.sidebar,
        { 'translate-x-full': !open },
        className,
      )}
    >
      {children}
    </div>
  );
};
