export type ContainerProps = {
  disabled: boolean;
  cityState?: string;
  state?: string;
  setState: (state?: string) => void;
};

export type ViewProps = {
  disabled: boolean;
  open: boolean;
  setOpen: (open: boolean) => void;
  value: string;
  setValue: (value: string) => void;
  list: { key: string; label: string }[];
  onSelect: (state?: string) => void;
  state?: string;
  cityState?: string;
};
