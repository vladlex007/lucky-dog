'use client';

import {
  createContext,
  type FC,
  type ReactNode,
  useContext,
  useState,
} from 'react';

type SearchContextProps = {
  breeds: string[];
  zipCodes: string[];
  ageMin?: number;
  ageMax?: number;
  setBreeds: (breeds: string[]) => void;
  setZipCodes: (zipCodes: string[]) => void;
  setAgeMin: (age?: number) => void;
  setAgeMax: (age?: number) => void;
};

const SearchContext = createContext<SearchContextProps>(
  {} as SearchContextProps
);

export const useSearch = () => {
  const context = useContext(SearchContext);

  if (!context) {
    throw new Error('useSearch must be used within a <SearchProvider />');
  }

  return context;
};

export const SearchProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [breeds, setBreeds] = useState<string[]>([]);
  const [zipCodes, setZipCodes] = useState<string[]>([]);
  const [ageMin, setAgeMin] = useState<number>();
  const [ageMax, setAgeMax] = useState<number>();

  const state = {
    breeds,
    zipCodes,
    ageMin,
    ageMax,
    setBreeds,
    setZipCodes,
    setAgeMin,
    setAgeMax,
  };

  return (
    <SearchContext.Provider value={state}>{children}</SearchContext.Provider>
  );
};
