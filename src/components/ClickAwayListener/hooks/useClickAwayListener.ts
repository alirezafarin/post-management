import { Ref, useEffect } from 'react';

export function useClickAwayListener({
  onClickAway,
  ref,
}: {
  ref: Ref<any>;
  onClickAway: () => void;
}) {
  useEffect(() => {
    function handleClickOutside(e: any) {
      if ((ref as any).current && !(ref as any).current.contains(e.target)) onClickAway();
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);
}
