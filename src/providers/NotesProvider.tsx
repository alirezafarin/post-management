import { useNotes } from 'hooks/useNotes';
import { ReactNode } from 'react';
import { notesContext } from '../contexts';

export default function NotesProvider({ children }: { children: ReactNode }) {
  const notesValues = useNotes();

  return <notesContext.Provider value={notesValues}>{children}</notesContext.Provider>;
}
