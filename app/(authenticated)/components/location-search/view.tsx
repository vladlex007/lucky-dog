import type { FC } from 'react';
import { City } from './city';
import { State } from './state';
import type { ViewProps } from './types';
import { Location } from '@/app/(authenticated)/components/location-search/location';

export const View: FC<ViewProps> = ({
  range,
  state,
  setCity,
  city,
  setState,
  isPending,
  onSearch,
  setRange,
  setLocation,
  location,
}) => {
  return (
    <div className="flex items-center justify-center pt-18">
      <City disabled={!!range} state={state} setCity={setCity} city={city} />
      <State
        disabled={!!range}
        cityState={city?.state}
        state={state}
        setState={setState}
      />
      <Location
        range={range}
        setRange={setRange}
        setLocation={setLocation}
        location={location}
      />
      <button
        className="flex cursor-pointer gap-2 rounded-r-full border-fetch-dark-purple border-l bg-fetch-color-tertiary px-8 py-6 font-bold transition hover:bg-fetch-violet hover:text-white"
        type="button"
        disabled={isPending}
        onClick={onSearch}
      >
        {isPending ? 'Sending...' : 'Search'}
      </button>
    </div>
  );
};
