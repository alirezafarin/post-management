import clsx from 'clsx';
import { memo } from 'react';

export interface IBaseTabProps {
  id: string | number;
  name: string;
  count?: number;
  active?: boolean;
}

function BaseTab({ name, count = 0, active = false }: IBaseTabProps) {
  return (
    <div
      className={clsx(
        'border border-black rounded-full px-4 py-[4px] cursor-pointer hover:border-tab-active text-small whitespace-nowrap',
        { 'bg-black text-white': active },
      )}
    >{`${name} (${count})`}</div>
  );
}

export default memo(BaseTab);
