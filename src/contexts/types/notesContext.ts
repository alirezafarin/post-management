import { INote } from 'components';
import { TabType } from 'types';

export interface INotesContext {
  notes: INote[];
  addNote: (newNote: INote) => void;
  activeTab: TabType;
  setActiveTab: (newTab: TabType) => void;
}
