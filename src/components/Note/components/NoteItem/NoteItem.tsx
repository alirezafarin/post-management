import { BaseTag, NoteDropDown } from 'components';
import { INote } from 'components/Note/types';
import { FC, ReactNode, memo } from 'react';
import { tagColors } from '../constants';
import { getNoteDate, getNoteTime } from '../utils';

const GraySpan = ({ children }: { children: ReactNode }) => (
  <span className="text-lighter-gray px-1">{children}</span>
);

const NoteItem: FC<INote> = ({ creator, date, description, priority, title, index = 0, id }) => {
  return (
    <div
      tabIndex={index}
      className="border border-note-item rounded-lg p-3 flex flex-col gap-3 hover:border-note-hover cursor-pointer focus:border-2 focus:border-note-focus bg-white "
    >
      <div className="flex items-center justify-between">
        <div className="text-xs truncate">
          {getNoteDate(date as Date)} <GraySpan>@</GraySpan>
          {getNoteTime(date as Date)} <GraySpan>by</GraySpan>
          {creator}
        </div>
        <NoteDropDown noteId={id} />
      </div>
      <div className="flex items-center gap-2">
        <h3 className="text-lg font-bold truncate">{title}</h3>
        <BaseTag color={tagColors[priority.toLowerCase()]}>{priority as any}</BaseTag>
      </div>
      <div>
        <p className="text-sm truncate">{description}</p>
      </div>
    </div>
  );
};

export default memo(NoteItem);
