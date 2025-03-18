import type { CityProps } from '../types';

export type ContainerProps = {
  disabled: boolean;
  state?: string;
  setCity: (city?: CityProps) => void;
  city?: CityProps;
};

export type ViewProps = {
  disabled: boolean;
  open: boolean;
  setOpen: (open: boolean) => void;
  city?: CityProps;
  value: string;
  setValue: (value: string) => void;
  isPending: boolean;
  list: CityProps[];
  onSelect: (city?: CityProps) => void;
};
