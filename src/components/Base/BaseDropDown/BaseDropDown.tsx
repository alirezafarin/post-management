import { CloseIcon, MenuIcon } from 'assets/ts';
import clsx from 'clsx';
import { ClickAwayListener } from 'components/ClickAwayListener';
import { FC } from 'react';
import { IBaseDropDownProps } from './types';

export const BaseDropDown: FC<IBaseDropDownProps> = ({
  children,
  title,
  setOpen = () => {},
  open = false,
}) => {
  const onClose = () => setOpen(false);

  return (
    <ClickAwayListener onClickAway={onClose}>
      <div onClick={() => setOpen((prevState) => !prevState)}>
        <MenuIcon />
      </div>

      <div
        className={clsx(
          'z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 absolute right-10 md:min-w-[324px]',
          { hidden: !open },
        )}
      >
        <div className="p-3">
          {title && (
            <div className="flex font-bold text-base justify-between items-center border-b py-1">
              <p className="px-2">{title}</p>
              <div onClick={onClose}>
                <CloseIcon />
              </div>
            </div>
          )}
          {children}
        </div>
      </div>
    </ClickAwayListener>
  );
};
