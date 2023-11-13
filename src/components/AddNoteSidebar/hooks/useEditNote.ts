import { useNotesContext, useSidebarContext } from 'hooks';
import { useEffect, useMemo } from 'react';

export const useEditNote = ({ values, setValues }: { values: any; setValues: any }) => {
  const { editNote, notes } = useNotesContext();
  const { closeSidebar, noteId } = useSidebarContext();
  const currentNote = useMemo(() => notes.find((note) => note.id === noteId), [notes, noteId]);

  useEffect(() => {
    if (currentNote)
      setValues({
        title: currentNote.title,
        description: currentNote.description,
        priority: currentNote.priority,
      });
  }, [currentNote?.title, currentNote?.description, currentNote?.priority]);

  const onEdit = () => {
    editNote({ id: noteId, newNote: values });
    setValues({ description: '', priority: '', title: '' });
    closeSidebar();
  };

  return { onEdit };
};
