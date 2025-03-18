import type { FC } from 'react';
import { View } from '@/app/(authenticated)/components/favorite-modal/location/view';
import { useQuery } from '@tanstack/react-query';
import type {
  LocationProps,
  QueryResponse,
} from '@/app/(authenticated)/components/favorite-modal/types';
import axios from 'axios';

export const Location: FC<LocationProps> = ({ zipCode }) => {
  const { data, isLoading } = useQuery<QueryResponse[]>({
    queryKey: ['dog-location', zipCode],
    queryFn: async () => {
      return axios.post('/api/locations', [zipCode]).then((r) => r.data);
    },
  });

  const location = data?.[0];

  return <View location={location} isLoading={isLoading} />;
};
