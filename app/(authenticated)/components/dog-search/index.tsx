'use client';

import type { ChangeEventHandler, FC } from 'react';
import { View } from './view';
import { useSearch } from '@/context/search';

export const DogSearch: FC = () => {
  const { breeds, ageMin, ageMax, setAgeMin, setAgeMax, setBreeds } =
    useSearch();

  const onAgeMin: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (e.target.value) {
      const value = Math.max(+e.target.value || 0);

      setAgeMin(value);
    } else {
      setAgeMin();
    }
  };
  const onAgeMax: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (e.target.value) {
      const value = Math.max(+e.target.value || 0);

      setAgeMax(value);
    } else {
      setAgeMax();
    }
  };

  const removeBreed = (breed: string) => {
    const newBreeds = breeds.filter((value) => value !== breed);
    setBreeds(newBreeds);
  };

  return (
    <View
      breeds={breeds}
      ageMin={ageMin}
      ageMax={ageMax}
      onAgeMin={onAgeMin}
      onAgeMax={onAgeMax}
      removeBreed={removeBreed}
    />
  );
};
