import { AddNoteIcon, DoubleArrowIcon, EditNoteIcon } from 'assets/ts';
import { BaseSidebar } from 'components/Base';
import { ISidebarContext, SidebarMode } from 'contexts';
import { en } from 'dictionary/en';
import { useSidebarContext } from 'hooks/useSidebarContext';
import { CreateNoteForm } from './components';

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
        <CreateNoteForm closeSidebar={closeSidebar} type={type} />
      </div>
    </BaseSidebar>
  );
};
