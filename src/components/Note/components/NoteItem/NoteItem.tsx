import { MenuIcon } from 'assets/ts';
import { BaseTag } from 'components';
import { INote } from 'components/Note/types';
import { FC, ReactNode, memo } from 'react';
import { tagColors } from '../constants';
import { getNoteDate, getNoteTime } from '../utils';

const GraySpan = ({ children }: { children: ReactNode }) => (
  <span className="text-lighter-gray px-1">{children}</span>
);

const NoteItem: FC<INote> = ({ creator, date, description, priority, title, index = 0 }) => {
  return (
    <div
      tabIndex={index}
      className="border border-note-item rounded-lg p-3 flex flex-col gap-3 hover:border-note-hover cursor-pointer focus:border-2 focus:border-note-focus truncate bg-white"
    >
      <div className="flex items-center justify-between relative">
        <div className="text-xs">
          {getNoteDate(date as Date)} <GraySpan>@</GraySpan>
          {getNoteTime(date as Date)} <GraySpan>by</GraySpan>
          {creator}
        </div>
        <div className="absolute right-0 bg-white p-2">
          <MenuIcon />
        </div>
      </div>
      <div className="flex items-center gap-2">
        <h3 className="text-lg font-bold truncate">{title}</h3>
        <BaseTag color={tagColors[priority]}>{priority}</BaseTag>
      </div>
      <div>
        <p className="text-sm truncate">{description}</p>
      </div>
    </div>
  );
};

export default memo(NoteItem);
