import { ReactNode } from 'react';
import { Variants } from 'types';

export interface IBaseIconBtnProps {
  icon: ReactNode;
  children?: ReactNode;
  variant?: Variants;
}
