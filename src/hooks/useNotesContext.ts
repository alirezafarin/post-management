import { useContext } from 'react';
import { notesContext } from '../contexts';

export const useNotesContext = () => useContext(notesContext);
