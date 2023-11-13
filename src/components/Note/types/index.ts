export interface INote {
  id: string | number;
  date: Date | string;
  creator: string;
  title: string;
  description: string;
  priority: string;
  index?: number;
}
