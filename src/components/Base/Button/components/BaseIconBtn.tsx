import clsx from 'clsx';
import { IBaseIconBtnProps } from './types';

export const BaseIconBtn = ({
  icon,
  variant = 'primary',
  className = '',
  children = null,
}: IBaseIconBtnProps) => {
  return (
    <button
      className={clsx(
        'px-3 py-2 text-sm font-medium text-center inline-flex items-center rounded-md',
        `btn-${variant}`,
        className,
      )}
    >
      <div className="pr-2">{icon}</div>
      {children}
    </button>
  );
};
