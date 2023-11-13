import clsx from 'clsx';
import { FC } from 'react';

export interface IBaseInputProps {
  label: string;
  inputProps?: Record<string, any>;
  name?: string;
  className?: string;
  value: string;
  onChange: (e: any) => void;
}

export const BaseInput: FC<IBaseInputProps> = ({
  label,
  name = '',
  className = '',
  inputProps,
  value,
  onChange,
}) => {
  return (
    <div className="relative">
      <input
        id={name}
        className={clsx(
          'peer m-0 block h-[58px] w-full rounded-lg border border-solid border-note-hover bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight  transition duration-200 ease-linear placeholder:text-transparent focus:border-2 focus:border-tab-active focus:pb-[0.625rem] focus:pt-[1.625rem] focus:outline-none peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]',
          className,
        )}
        placeholder=""
        value={value}
        onChange={onChange}
        {...inputProps}
      />
      <label
        htmlFor={name}
        className="pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-lighter-gray transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none"
      >
        {label}
      </label>
    </div>
  );
};
