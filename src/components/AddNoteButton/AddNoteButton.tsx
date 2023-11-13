import { AddIcon } from 'assets/ts';
import { BaseButton } from 'components/Base';
import { en } from 'dictionary/en';

export function AddNoteButton() {
  return <BaseButton icon={<AddIcon />}>{en.buttons.addNote}</BaseButton>;
}
