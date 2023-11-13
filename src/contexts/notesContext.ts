import { createContext } from 'react';
import { INotesContext } from './types';

export const notesContext = createContext<INotesContext>({
  notes: [],
  addNote: () => {},
  activeTab: 'all',
  setActiveTab: () => {},
});
