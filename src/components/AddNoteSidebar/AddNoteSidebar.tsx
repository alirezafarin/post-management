import { AddNoteIcon, DoubleArrowIcon, EditNoteIcon } from 'assets/ts';
import { BaseButton, BaseInput, BaseSelect, BaseSidebar, BaseTextarea } from 'components/Base';
import { tabs } from 'constants/tabs';
import { ISidebarContext, SidebarMode } from 'contexts';
import { en } from 'dictionary/en';
import { useSidebarContext } from 'hooks/useSidebarContext';

const utils: { [key in SidebarMode]: any } = {
  Create: {
    title: en.sidebar.addNewNote,
    formTitle: en.sidebar.create,
    icon: <AddNoteIcon />,
    submitText: en.sidebar.buttons.add,
  },
  Edit: {
    title: en.sidebar.edit,
    formTitle: en.sidebar.edit,
    icon: <EditNoteIcon />,
    submitText: en.sidebar.buttons.save,
  },
};

export const AddNoteSidebar = () => {
  const { open, type, closeSidebar } = useSidebarContext() as ISidebarContext;

  return (
    <BaseSidebar open={open}>
      <div>
        <div className="flex items-center justify-between">
          <h6>{utils[type].title}</h6>
          <div className="cursor-pointer" onClick={closeSidebar}>
            <DoubleArrowIcon />
          </div>
        </div>
        <div className="flex align-center justify-center my-6">
          <div className="flex align-center justify-center">
            {utils[type].icon}
            <h4 className="text-lg font-bold ml-2">{utils[type].formTitle}</h4>
          </div>
        </div>
        <form
          onSubmit={() => console.log('submit')}
          className="flex flex-col gap-2 max-w-[420px] m-auto"
        >
          <BaseInput label={en.note.title} name="title" />
          <BaseSelect label={en.note.priority} name="priority" options={tabs} />
          <BaseTextarea label={en.note.description} name="description" rows={10} />
          <div className="flex gap-3">
            <BaseButton
              onClick={closeSidebar}
              className="w-screen p-3 d-flex justify-center"
              variant="secondary"
              type="button"
            >
              {en.sidebar.buttons.cancel}
            </BaseButton>
            <BaseButton type="submit" className="w-screen p-3 d-flex justify-center">
              {utils[type].submitText}
            </BaseButton>
          </div>
        </form>
      </div>
    </BaseSidebar>
  );
};
