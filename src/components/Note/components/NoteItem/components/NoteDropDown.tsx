import clsx from 'clsx';
import { BaseDropDown } from 'components/Base';
import { en } from 'dictionary/en';
import { useState } from 'react';

export const NoteDropDown = () => {
  const [open, setOpen] = useState(false);

  const items = [
    { id: 0, title: en.notes.dropDown.editNote, onClick: () => {} },
    { id: 1, title: en.notes.dropDown.changeStatus, onClick: () => {} },
    { id: 2, title: en.notes.dropDown.delete, onClick: () => {}, className: 'text-error' },
  ];

  return (
    <div className="right-0 bg-white p-2">
      <BaseDropDown open={open} setOpen={setOpen} title={en.notes.dropDown.title}>
        <>
          {items.map(({ id, onClick, title, className = '' }) => (
            <div
              key={id}
              tabIndex={id}
              className={clsx('p-2 hover:bg-option-hover focus:bg-option-click', className)}
              onClick={onClick}
            >
              {title}
            </div>
          ))}
        </>
      </BaseDropDown>
    </div>
  );
};
