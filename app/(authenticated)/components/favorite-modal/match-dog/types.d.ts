import type { QueryResponse } from '@/app/(authenticated)/components/dogs/dog-card/types';

export type ViewProps = {
  isLoading: boolean;
  dog?: QueryResponse;
};
