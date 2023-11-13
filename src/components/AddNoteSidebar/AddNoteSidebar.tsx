import { AddNoteIcon, DoubleArrowIcon, EditNoteIcon } from 'assets/ts';
import { BaseInput, BaseSelect, BaseSidebar, BaseTextarea } from 'components/Base';
import { tabs } from 'constants/tabs';
import { en } from 'dictionary/en';

const utils = {
  create: {
    title: en.sidebar.addNewNote,
    formTitle: en.sidebar.create,
    icon: <AddNoteIcon />,
  },
  edit: {
    title: en.sidebar.edit,
    formTitle: en.sidebar.edit,
    icon: <EditNoteIcon />,
  },
};

export const AddNoteSidebar = () => {
  return (
    <BaseSidebar open={true}>
      <div>
        <div className="flex items-center justify-between">
          <h6>{utils['create'].title}</h6>
          <DoubleArrowIcon />
        </div>
        <div className="flex align-center justify-center my-6">
          <div className="flex align-center justify-center">
            {utils['create'].icon}
            <h4 className="text-lg font-bold ml-2">{utils['create'].formTitle}</h4>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <BaseInput label={en.note.title} name="title" />
          <BaseSelect label={en.note.priority} name="priority" options={tabs} />
          <BaseTextarea label={en.note.description} name="description" rows={10} />
        </div>
      </div>
    </BaseSidebar>
  );
};
