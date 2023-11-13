import { ReactNode } from 'react';
import { Variants } from 'types';

export interface IBaseBtnProps {
  icon?: ReactNode;
  children?: ReactNode;
  variant?: Variants;
  className?: string;
  onClick?: (e: any) => void;
  [key: string]: any;
}
