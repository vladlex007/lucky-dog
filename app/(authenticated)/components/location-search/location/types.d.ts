export type ContainerProps = {
  range?: string;
  setRange: (range: string) => void;
  location?: GeolocationCoordinates;
  setLocation: (location: GeolocationCoordinates) => void;
};

export type ViewProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
  onSelect: (range: string) => void;
  range?: string;
};
