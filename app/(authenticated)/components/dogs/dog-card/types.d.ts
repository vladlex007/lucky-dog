export type ContainerProps = {
  id: string;
};

export type QueryResponse = {
  id: string;
  img: string;
  name: string;
  age: number;
  zip_code: string;
  breed: string;
};

export type ViewProps = {
  isLoading: boolean;
  dog?: QueryResponse;
  onSelect: (id: string) => void;
  isFavorite: boolean;
};
