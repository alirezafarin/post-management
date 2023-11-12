import MaxImage from 'assets/images/mac.png';
import clsx from 'clsx';
import { AddNoteButton } from 'components/AddNoteButton';
import { en } from 'dictionary/en';
import styles from './assets/styles/Header.module.css';

export const Header = () => {
  return (
    <div
      className={clsx(
        'w-100 rounded-b-xl h-20 flex items-center justify-between pr-6',
        styles.headerBackground,
      )}
    >
      <div className="flex">
        <img src={MaxImage} alt="header-Max-image" />
        <div>
          <h1 className="font-bold text-2xl">{en.header.title}</h1>
          <p className="text-sm">{en.header.description}</p>
        </div>
      </div>
      <AddNoteButton />
    </div>
  );
};
