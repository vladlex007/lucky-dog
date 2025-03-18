'use client';

import { type FC, useEffect, useState } from 'react';
import type { ContainerProps } from './types';
import { useDebounce } from 'use-debounce';
import { useMutation } from '@tanstack/react-query';
import type { CityProps, MutationResponse, MutationVariables } from '../types';
import axios from 'axios';
import { View } from './view';

export const City: FC<ContainerProps> = ({
  disabled,
  state,
  city,
  setCity,
}) => {
  const [value, setValue] = useState('');
  const [debounceValue] = useDebounce(value, 500);
  const [open, setOpen] = useState(false);
  const [list, setList] = useState<CityProps[]>([]);

  const { mutate, isPending } = useMutation<
    MutationResponse,
    Error,
    MutationVariables
  >({
    mutationFn: (data) => {
      return axios.post('/api/locations/search', data).then((r) => r.data);
    },
    onSuccess: (data) => {
      setList(
        data.results
          .reduce<CityProps[]>((a, b) => {
            if (!a.some(({ city }) => city === b.city)) {
              a.push(b);
            }
            return a;
          }, [])
          .map(({ city, state, zip_code }) => ({
            city,
            state,
            zip_code,
          }))
      );
    },
  });

  useEffect(() => {
    mutate({
      ...(state ? { states: [state] } : {}),
      city: debounceValue,
    });
  }, [debounceValue, mutate, state]);

  const onSelect = (city?: CityProps) => {
    setCity(city);
    setOpen(false);
    setValue(city?.city || '');
  };

  return (
    <View
      disabled={disabled}
      open={open}
      setOpen={setOpen}
      city={city}
      value={value}
      setValue={setValue}
      isPending={isPending}
      list={list}
      onSelect={onSelect}
    />
  );
};
