'use client';

import { type FC, useState } from 'react';
import type { CityProps, MutationResponse, MutationVariables } from './types';
import { useSearch } from '@/context/search';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { View } from './view';

export const LocationSearch: FC = () => {
  const { setZipCodes } = useSearch();
  const [city, setCity] = useState<CityProps>();
  const [state, setState] = useState<string>();

  const [location, setLocation] = useState<GeolocationCoordinates>();
  const [range, setRange] = useState<string>('');
  const { mutate, isPending } = useMutation<
    MutationResponse,
    Error,
    MutationVariables
  >({
    mutationFn: (data) => {
      return axios.post('/api/locations/search', data).then((r) => r.data);
    },
    onSuccess: (data) => {
      const zipCodes = data.results
        .filter((data) => !!range || !city?.city || data.city === city.city)
        .map(({ zip_code }) => zip_code);
      setZipCodes(zipCodes);
    },
  });

  const onSearch = () => {
    if (!city && !state && (!range || !location)) {
      setZipCodes([]);
      return;
    }

    const data: MutationVariables = {
      size: 10,
    };

    if (range && location) {
      const milesToDegreesLat = +range / 69;
      const milesToDegreesLon =
        +range / (69 * Math.cos(location.latitude * (Math.PI / 180)));

      const bottomLeft = {
        lat: location.latitude - milesToDegreesLat,
        lon: location.longitude - milesToDegreesLon,
      };
      const topRight = {
        lat: location.latitude + milesToDegreesLat,
        lon: location.longitude + milesToDegreesLon,
      };

      data.geoBoundingBox = {
        top_right: topRight,
        bottom_left: bottomLeft,
      };
    } else {
      if (city) {
        data.city = city.city;
      }

      if (state) {
        data.states = [state];
      }
    }

    mutate(data);
  };

  return (
    <View
      range={range}
      state={state}
      setCity={setCity}
      city={city}
      setState={setState}
      isPending={isPending}
      onSearch={onSearch}
      setLocation={setLocation}
      setRange={setRange}
      location={location}
    />
  );
};
