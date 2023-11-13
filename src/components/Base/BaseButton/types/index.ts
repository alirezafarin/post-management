import { ReactNode } from 'react';
import { Variants } from 'types';

export interface IBaseBtnProps {
  icon?: ReactNode;
  children?: ReactNode;
  variant?: Variants;
  className?: string;
}
