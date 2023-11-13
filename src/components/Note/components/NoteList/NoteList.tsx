import { useNotesContext } from 'hooks';
import { NoteItem } from '../NoteItem';
import { NoNoteBody } from 'components/NoNoteBody';
import { TabList } from 'components/TabList';

export const NoteList = () => {
  const { notes } = useNotesContext();

  if (!notes.length) return <NoNoteBody />;

  return (
    <>
      <TabList />
      <div className="flex flex-col gap-4">
        {notes.map((note, index) => (
          <NoteItem key={note.id} {...note} index={index} />
        ))}
      </div>
    </>
  );
};
