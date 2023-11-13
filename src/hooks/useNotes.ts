import { INote } from 'components';
import { INotesContext } from 'contexts';
import { useState } from 'react';
import { TabType } from 'types';

export const useNotes = (): INotesContext => {
  const [notes, setNotes] = useState<INote[]>([]);
  const [activeTab, setActiveTab] = useState<TabType>('all');

  const addNote = (newNote: INote) => setNotes((prevNotes) => [...prevNotes, newNote]);

  return { notes, addNote, activeTab, setActiveTab };
};
