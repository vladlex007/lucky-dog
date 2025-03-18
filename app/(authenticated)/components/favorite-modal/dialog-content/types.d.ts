export type ViewProps = {
  favoriteCount: number;
  match?: string;
  isPending: boolean;
  onFindMatch: () => void;
  onClearMatch: () => void;
};
