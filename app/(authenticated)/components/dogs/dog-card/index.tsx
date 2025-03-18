import { type FC, useEffect, useState } from 'react';
import { View } from './view';
import type { ContainerProps, QueryResponse } from './types';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const DogCard: FC<ContainerProps> = ({ id }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const { data, isLoading } = useQuery<QueryResponse[]>({
    queryKey: ['dog', id],
    queryFn: async () => {
      return axios.post('/api/dogs', [id]).then((r) => r.data);
    },
  });

  useEffect(() => {
    try {
      const favorites = new Set<string>(
        JSON.parse(localStorage.getItem('favorites') || '[]')
      );

      if (favorites.has(id)) {
        setIsFavorite(true);
      }
      // biome-ignore lint/suspicious/noEmptyBlockStatements: <explanation>
    } catch {}
  }, [id]);

  const onSelect = (id: string) => {
    try {
      const favorites: string[] = JSON.parse(
        localStorage.getItem('favorites') || '[]'
      );

      const newFavorites = new Set(favorites);

      if (newFavorites.has(id)) {
        newFavorites.delete(id);
        setIsFavorite(false);
      } else {
        newFavorites.add(id);
        setIsFavorite(true);
      }

      localStorage.setItem(
        'favorites',
        JSON.stringify(Array.from(newFavorites))
      );
    } catch {
      localStorage.setItem('favorites', '[]');
    }
  };

  return (
    <View
      isLoading={isLoading}
      dog={data?.[0]}
      onSelect={onSelect}
      isFavorite={isFavorite}
    />
  );
};
