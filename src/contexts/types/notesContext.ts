import { INote } from 'components';

export interface INotesContext {
  notes: INote[];
  addNote: (newNote: INote) => void;
}
