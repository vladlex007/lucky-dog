'use client';

import { type FC, useEffect, useState } from 'react';
import { View } from './view';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useSearch } from '@/context/search';
import type { QueryResponse } from './types';

const PAGE_SIZE = 9;

export const Dogs: FC = () => {
  const [page, setPage] = useState(0);
  const { breeds, zipCodes, ageMin, ageMax } = useSearch();
  const [sort, setSort] = useState('breed:asc');
  const { data, isLoading } = useQuery<QueryResponse>({
    queryKey: [
      'dogs',
      JSON.stringify({ breeds, zipCodes, ageMin, ageMax, sort }),
      page,
    ],
    queryFn: async () => {
      const params = new URLSearchParams();
      for (const breed of breeds) {
        params.append('breeds', breed);
      }
      for (const zipCode of zipCodes) {
        params.append('zipCodes', zipCode);
      }
      if (ageMin !== undefined) {
        params.append('ageMin', String(ageMin));
      }
      if (ageMax !== undefined) {
        params.append('ageMax', String(ageMax));
      }

      params.append('size', String(PAGE_SIZE));
      params.append('sort', sort);

      if (page) {
        params.append('from', String(PAGE_SIZE * page));
      }

      return axios
        .get('/api/dogs/search', {
          params,
        })
        .then((r) => r.data);
    },
  });

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    setPage(0);
  }, [breeds, zipCodes, ageMin, ageMax, sort]);

  const onGoNext = () => {
    setPage((prevState) => prevState + 1);
  };

  const onGoPrev = () => {
    setPage((prevState) => prevState - 1);
  };

  const onSort = (newSort: string) => {
    if (newSort.slice(0, 3) !== sort.slice(0, 3)) {
      setSort(`${newSort}:asc`);
      return;
    }

    if (sort.startsWith(newSort)) {
      if (sort.endsWith('asc')) {
        setSort(`${newSort}:desc`);
      } else {
        setSort(`${newSort}:asc`);
      }
    }
  };

  return (
    <View
      isLoading={isLoading}
      ids={data?.resultIds}
      hasPrev={!!page}
      hasNext={!!data && data?.resultIds.length >= PAGE_SIZE}
      onGoNext={onGoNext}
      onGoPrev={onGoPrev}
      sort={sort}
      setSort={onSort}
    />
  );
};
