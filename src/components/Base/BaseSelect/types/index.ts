export interface IBaseSelectProps {
  label: string;
  inputProps?: Record<string, any>;
  name?: string;
  className?: string;
  options: IOption[];
}

export interface IOption {
  id: number | string;
  name: string;
  value?: string;
}
