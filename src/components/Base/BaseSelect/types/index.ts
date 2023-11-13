export interface IBaseSelectProps {
  label: string;
  inputProps?: Record<string, any>;
  name?: string;
  className?: string;
  options: IOption[];
  value: string;
  onChange: (e: any) => void;
}

export interface IOption {
  id: number | string;
  name: string;
  value?: string;
}
