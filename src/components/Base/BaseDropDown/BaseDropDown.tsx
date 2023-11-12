import { CloseIcon, MenuIcon } from 'assets/ts';
import clsx from 'clsx';
import { ClickAwayListener } from 'components/ClickAwayListener';
import { en } from 'dictionary/en';
import { FC, ReactNode, useState } from 'react';

export const BaseDropDown: FC<{ children: ReactNode; title?: string }> = ({
  children,
  title = en.notes.dropDown.title,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <ClickAwayListener onClickAway={() => setOpen(false)}>
      <div onClick={() => setOpen((prevState) => !prevState)}>
        <MenuIcon />
      </div>

      <div
        id="dropdownDots"
        className={clsx(
          'z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 absolute right-10 md:min-w-[324px]',
          { hidden: !open },
        )}
      >
        <div className="p-3">
          <div className="flex font-bold text-base justify-between items-center border-b py-1">
            <p className="px-2">{title}</p>
            <div onClick={() => setOpen(false)}>
              <CloseIcon />
            </div>
          </div>
          {children}
        </div>
      </div>
    </ClickAwayListener>
  );
};
