'use client';

import type { ChangeEventHandler, FC } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { View } from './view';
import { useSearch } from '@/context/search';

export const Breeds: FC = () => {
  const { breeds, setBreeds } = useSearch();
  const { data, isLoading } = useQuery<string[]>({
    queryKey: ['breeds'],
    queryFn: async () => {
      return axios.get('/api/dogs/breeds').then((r) => r.data);
    },
  });

  const onSelect: ChangeEventHandler<HTMLSelectElement> = (e) => {
    setBreeds(Array.from(new Set([...breeds, e.target.value])));
  };

  return (
    <View
      isLoading={isLoading}
      data={data}
      onSelect={onSelect}
      breeds={breeds}
    />
  );
};
