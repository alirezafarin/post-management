import clsx from 'clsx';
import { IBaseBtnProps } from './types';

export const BaseButton = ({
  icon = null,
  variant = 'primary',
  className = '',
  children = null,
  onClick,
  ...props
}: IBaseBtnProps) => {
  return (
    <button
      className={clsx(
        'px-3 py-2 text-sm font-medium text-center inline-flex items-center rounded-md',
        `btn-${variant}`,
        className,
      )}
      onClick={onClick}
      {...props}
    >
      {icon && <div className="pr-2">{icon}</div>}
      {children}
    </button>
  );
};
