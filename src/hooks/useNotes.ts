import { INote } from 'components';
import { INotesContext } from 'contexts';
import { useState } from 'react';
import { TabType } from 'types';

export const useNotes = (): INotesContext => {
  const [notes, setNotes] = useState<INote[]>([]);
  const [activeTab, setActiveTab] = useState<TabType>('all');

  const addNote = (newNote: INote) => setNotes((prevNotes) => [...prevNotes, newNote]);

  const editNote = ({ id, newNote }: { newNote: INote; id: string | number }) =>
    setNotes((prevNotes) => {
      return prevNotes.map((note) => {
        if (note.id === id) return { ...note, ...newNote };
        return note;
      });
    });

  return { notes, addNote, activeTab, setActiveTab, editNote };
};
