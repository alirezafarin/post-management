import { BaseButton, BaseInput, BaseSelect, BaseTextarea } from 'components/Base';
import { tabs } from 'constants/tabs';
import { SidebarMode } from 'contexts';
import { en } from 'dictionary/en';
import useCreateNote from '../hooks/useCreateNote';

export const CreateNoteForm = ({
  closeSidebar,
  type,
}: {
  closeSidebar: () => void;
  type: SidebarMode;
}) => {
  const { onChange, onCreate, onEdit, values } = useCreateNote();

  const utils: { [key in SidebarMode]: { submitText: string; onSubmit: any } } = {
    Create: {
      submitText: en.sidebar.buttons.add,
      onSubmit: onCreate,
    },
    Edit: {
      submitText: en.sidebar.buttons.save,
      onSubmit: onEdit,
    },
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    utils[type].onSubmit();
  };

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-2 max-w-[420px] m-auto">
      <BaseInput
        label={en.note.title}
        name="title"
        value={values.title}
        onChange={(e) => onChange({ name: 'title', newValue: e.target.value })}
      />
      <BaseSelect
        label={en.note.priority}
        name="priority"
        options={tabs}
        value={values.priority}
        onChange={(newValue) => onChange({ name: 'priority', newValue })}
      />
      <BaseTextarea
        label={en.note.description}
        name="description"
        rows={10}
        value={values.description}
        onChange={(e) => onChange({ name: 'description', newValue: e.target.value })}
      />
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
  );
};
