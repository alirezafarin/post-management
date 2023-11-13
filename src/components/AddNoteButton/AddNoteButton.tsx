import { AddIcon } from 'assets/ts';
import { BaseButton } from 'components/Base';
import { ISidebarContext } from 'contexts';
import { en } from 'dictionary/en';
import { useSidebarContext } from 'hooks';

export function AddNoteButton() {
  const { setSidebarProps } = useSidebarContext() as ISidebarContext;

  return (
    <BaseButton onClick={() => setSidebarProps({ open: true, type: 'Create' })} icon={<AddIcon />}>
      {en.buttons.addNote}
    </BaseButton>
  );
}
