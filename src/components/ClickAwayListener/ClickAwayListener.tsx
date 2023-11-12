import { ReactNode, useRef } from 'react';
import { useClickAwayListener } from './hooks/useClickAwayListener';

export interface IClickAwayListenerProps {
  children: ReactNode;
  onClickAway: () => void;
}

export function ClickAwayListener({ children, onClickAway }: IClickAwayListenerProps) {
  const wrapperRef = useRef(null);
  useClickAwayListener({ ref: wrapperRef, onClickAway });

  return <div ref={wrapperRef}>{children}</div>;
}
