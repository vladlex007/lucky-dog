export type MutationVariables = {
  city?: string;
  states?: string[];
  size?: number;
  from?: number;
  geoBoundingBox?: {
    bottom_left?: {
      lat: number;
      lon: number;
    };
    top_right?: {
      lat: number;
      lon: number;
    };
  };
};

export type MutationResponse = {
  results: {
    zip_code: string;
    latitude: number;
    longitude: number;
    city: string;
    state: string;
    county: string;
  }[];
  total: number;
};

export type CityProps = { city: string; state: string; zip_code: string };

export type ViewProps = {
  range?: string;
  state?: string;
  setCity: (city?: CityProps) => void;
  city?: CityProps;
  setState: (state?: string) => void;
  isPending: boolean;
  onSearch: () => void;
  setRange: (range: string) => void;
  setLocation: (location: GeolocationCoordinates) => void;
  location?: GeolocationCoordinates;
};
