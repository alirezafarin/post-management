import clsx from 'clsx';
import { BaseDropDown } from 'components/Base';
import { en } from 'dictionary/en';

export const NoteDropDown = () => {
  const items = [
    { id: 0, title: en.notes.dropDown.editNote, onClick: () => {} },
    { id: 1, title: en.notes.dropDown.changeStatus, onClick: () => {} },
    { id: 2, title: en.notes.dropDown.delete, onClick: () => {} },
  ];

  return (
    <div className="right-0 bg-white p-2">
      <BaseDropDown>
        <>
          {items.map(({ id, onClick, title }) => (
            <div
              key={id}
              tabIndex={id}
              className={clsx('p-2 hover:bg-option-hover focus:bg-option-click', {
                'text-error': title === en.notes.dropDown.delete,
              })}
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
