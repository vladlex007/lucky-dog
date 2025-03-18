export type ViewProps = {
  isLoading: boolean;
  ids?: string[];
  hasPrev?: boolean;
  hasNext?: boolean;
  onGoNext: () => void;
  onGoPrev: () => void;
  sort: string;
  setSort: (sort: string) => void;
};

export type QueryResponse = {
  resultIds: string[];
  total: number;
  next?: string;
  prev?: string;
};
