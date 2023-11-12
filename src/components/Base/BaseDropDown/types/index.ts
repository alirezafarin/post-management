import { Dispatch, ReactNode, SetStateAction } from 'react';

export interface IBaseDropDownProps {
  open?: boolean;
  setOpen?: Dispatch<SetStateAction<boolean>>;
  children: ReactNode;
  title?: string;
}
