import clsx from 'clsx';
import { memo } from 'react';

export interface IBaseTabProps {
  id: string | number;
  name: string;
  count?: number;
  active?: boolean;
  onClick: () => void;
}

function BaseTab({ name, count = 0, active = false, onClick }: IBaseTabProps) {
  return (
    <div
      className={clsx(
        'border border-black rounded-full px-4 py-[4px] cursor-pointer hover:border-tab-active text-small whitespace-nowrap',
        { 'bg-black text-white': active },
      )}
      onClick={onClick}
    >{`${name} (${count})`}</div>
  );
}

export default memo(BaseTab);
