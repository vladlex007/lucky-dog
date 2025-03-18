export type ViewProps = {
  hasPrev?: boolean;
  hasNext?: boolean;
  onGoNext: () => void;
  onGoPrev: () => void;
  sort: string;
  setSort: (sort: string) => void;
};
