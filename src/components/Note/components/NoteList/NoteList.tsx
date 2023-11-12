import { INote } from 'components/Note/types';
import { NoteItem } from '../NoteItem';

const notes: INote[] = [
  {
    id: 0,
    date: new Date(),
    creator: 'Alireza Afarin',
    description: 'djf lsdkajflds sdkjflkds jflsdjf dsjflds jfldsjf ;lsdjfd sjfl',
    priority: 'all',
    title: 'fjdslkf jsdljfldsjf ldsjfl ds',
  },
  {
    id: 1,
    date: new Date(),
    creator: 'Alireza Afarin',
    description: 'djf lsdkajflds sdkjflkds jflsdjf dsjflds jfldsjf ;lsdjfd sjfl',
    priority: 'all',
    title: 'fjdslkf jsdljfldsjf ldsjfl ds',
  },
  {
    id: 2,
    date: new Date(),
    creator: 'Alireza Afarin',
    description: 'djf lsdkajflds sdkjflkds jflsdjf dsjflds jfldsjf ;lsdjfd sjfl',
    priority: 'all',
    title: 'fjdslkf jsdljfldsjf ldsjfl ds',
  },
  {
    id: 3,
    date: new Date(),
    creator: 'Alireza Afarin',
    description: 'djf lsdkajflds sdkjflkds jflsdjf dsjflds jfldsjf ;lsdjfd sjfl',
    priority: 'all',
    title: 'fjdslkf jsdljfldsjf ldsjfl ds',
  },
  {
    id: 4,
    date: new Date(),
    creator: 'Alireza Afarin',
    description: 'djf lsdkajflds sdkjflkds jflsdjf dsjflds jfldsjf ;lsdjfd sjfl',
    priority: 'all',
    title: 'fjdslkf jsdljfldsjf ldsjfl ds',
  },
  {
    id: 5,
    date: new Date(),
    creator: 'Alireza Afarin',
    description: 'djf lsdkajflds sdkjflkds jflsdjf dsjflds jfldsjf ;lsdjfd sjfl',
    priority: 'all',
    title: 'fjdslkf jsdljfldsjf ldsjfl ds',
  },
];

export const NoteList = () => {
  return (
    <div className="flex flex-col gap-4">
      {notes.map((note, index) => (
        <NoteItem key={note.id} {...note} index={index} />
      ))}
    </div>
  );
};
