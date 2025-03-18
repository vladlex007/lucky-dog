import type { ChangeEventHandler } from 'react';

export type ViewProps = {
  isLoading: boolean;
  data?: string[];
  onSelect?: ChangeEventHandler<HTMLSelectElement>;
  breeds: string[];
};
