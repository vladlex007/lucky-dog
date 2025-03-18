import type { FC } from 'react';
import type { ViewProps } from './types';
import { LoaderCircleIcon } from 'lucide-react';

export const View: FC<ViewProps> = ({ isLoading, data, onSelect, breeds }) => {
  if (isLoading) {
    return (
      <div className="flex max-w-[250px] cursor-pointer appearance-none justify-center rounded-full bg-fetch-violet px-8 py-6 text-center font-bold text-white">
        <LoaderCircleIcon className="animate-spin" />
      </div>
    );
  }

  return (
    <select
      className="max-w-[250px] cursor-pointer appearance-none rounded-full bg-fetch-violet px-8 py-6 text-center font-bold text-white"
      value=""
      onChange={onSelect}
    >
      <option value="">Select Breeds</option>
      {data
        ?.filter((value) => !breeds.includes(value))
        .map((value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
    </select>
  );
};
