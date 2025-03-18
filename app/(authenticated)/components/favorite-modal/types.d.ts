export type MatchDogProps = {
  id: string;
};

export type LocationProps = {
  zipCode: string;
};

export type QueryResponse = {
  zip_code: string;
  latitude: number;
  longitude: number;
  city: string;
  state: string;
  county: string;
};

export type DialogContentProps = {
  match?: string;
  setMatch: (id?: string) => void;
};

export type ViewProps = {
  match?: string;
  setMatch: (id?: string) => void;
};
