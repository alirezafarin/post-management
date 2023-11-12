import { TabType } from 'types';

export interface INote {
  id: string | number;
  date: Date | string;
  creator: string;
  title: string;
  description: string;
  priority: TabType;
  index?: number;
}
