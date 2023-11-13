import { INote } from 'components';
import { TabType } from 'types';

export interface IEditMethodParams {
  newNote: INote;
  id: string | number;
}
export interface INotesContext {
  notes: INote[];
  addNote: (newNote: INote) => void;
  activeTab: TabType;
  setActiveTab: (newTab: TabType) => void;
  editNote: (props: IEditMethodParams) => void;
}
