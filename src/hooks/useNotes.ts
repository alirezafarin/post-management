import { INote } from 'components';
import { INotesContext } from 'contexts';
import { useState } from 'react';

export const useNotes = (): INotesContext => {
  const [notes, setNotes] = useState<INote[]>([]);
  console.log('🚀 ~ file: useNotes.ts:7 ~ useNotes ~ notes:', notes);

  const addNote = (newNote: INote) => setNotes((prevNotes) => [...prevNotes, newNote]);

  return { notes, addNote };
};
