import { AddIcon } from 'assets/ts';
import { BaseIconBtn } from 'components/Base';
import { en } from 'dictionary/en';

export function AddNoteButton() {
  return <BaseIconBtn icon={<AddIcon />}>{en.buttons.addNote}</BaseIconBtn>;
}
