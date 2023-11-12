import { AddNoteButton } from 'components/AddNoteButton';
import { en } from 'dictionary/en';

export const NoNoteBody = () => {
  return (
    <div className="h-[calc(100vh-132px)] bg-light-gray flex items-center justify-center flex-col mt-7 rounded">
      <p className="pb-3 text-2xl text-light-gray">{en.body.noPosts}</p>
      <AddNoteButton />
    </div>
  );
};
