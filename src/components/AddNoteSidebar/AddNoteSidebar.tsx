import { AddNoteIcon, DoubleArrowIcon, EditNoteIcon } from 'assets/ts';
import { BaseButton, BaseInput, BaseSelect, BaseSidebar, BaseTextarea } from 'components/Base';
import { tabs } from 'constants/tabs';
import { en } from 'dictionary/en';

const utils = {
  create: {
    title: en.sidebar.addNewNote,
    formTitle: en.sidebar.create,
    icon: <AddNoteIcon />,
    submitText: en.sidebar.buttons.add,
  },
  edit: {
    title: en.sidebar.edit,
    formTitle: en.sidebar.edit,
    icon: <EditNoteIcon />,
    submitText: en.sidebar.buttons.save,
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
        <form className="flex flex-col gap-2 max-w-[420px] m-auto">
          <BaseInput label={en.note.title} name="title" />
          <BaseSelect label={en.note.priority} name="priority" options={tabs} />
          <BaseTextarea label={en.note.description} name="description" rows={10} />
          <div className="flex gap-3">
            <BaseButton className="w-screen p-3 d-flex justify-center" variant="secondary">
              {en.sidebar.buttons.cancel}
            </BaseButton>
            <BaseButton className="w-screen p-3 d-flex justify-center">
              {utils['create'].submitText}
            </BaseButton>
          </div>
        </form>
      </div>
    </BaseSidebar>
  );
};
