import type { FC } from 'react';
import { View } from './view';
import { useQuery } from '@tanstack/react-query';
import type { QueryResponse } from '@/app/(authenticated)/components/dogs/dog-card/types';
import axios from 'axios';
import type { MatchDogProps } from '@/app/(authenticated)/components/favorite-modal/types';

export const MatchDog: FC<MatchDogProps> = ({ id }) => {
  const { data, isLoading } = useQuery<QueryResponse[]>({
    queryKey: ['dog', id],
    queryFn: async () => {
      return axios.post('/api/dogs', [id]).then((r) => r.data);
    },
  });

  const dog = data?.[0];

  if (isLoading || !dog) {
    return (
      <div className="animate-pulse rounded-md bg-gray-300">
        <div className="aspect-square" />
        <div className="h-[90]" />
      </div>
    );
  }
  return <View dog={dog} isLoading={isLoading} />;
};
