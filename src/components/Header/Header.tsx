import MaxImage from 'assets/images/mac.png';
import styles from './assets/styles/Header.module.css';
import clsx from 'clsx';
import { en } from 'dictionary/en';

export const Header = () => {
  return (
    <div className={clsx('w-100 rounded-b-xl h-20 flex items-center', styles.headerBackground)}>
      <div className="flex">
        <img src={MaxImage} alt="header-Max-image" />
        <div>
          <h1 className="font-bold text-2xl">{en.header.title}</h1>
          <p className="text-sm">{en.header.description}</p>
        </div>
      </div>
    </div>
  );
};
