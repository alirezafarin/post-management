import { useNotesContext } from 'hooks';
import { NoteItem } from '../NoteItem';
import { NoNoteBody } from 'components/NoNoteBody';
import { TabList } from 'components/TabList';
import { useMemo } from 'react';

export const NoteList = () => {
  const { notes, activeTab } = useNotesContext();

  const notesToShow = useMemo(() => {
    if (activeTab === 'all') return notes;
    return notes.filter((note) => note.priority.toLowerCase() === activeTab.toLowerCase());
  }, [notes, activeTab]);

  if (!notes.length) return <NoNoteBody />;

  return (
    <>
      <TabList />
      <div className="flex flex-col gap-4">
        {notesToShow.map((note, index) => (
          <NoteItem key={note.id} {...note} index={index} />
        ))}
      </div>
    </>
  );
};
