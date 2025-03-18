import type { FC } from 'react';
import type { ViewProps } from './types';

export const View: FC<ViewProps> = ({ isLoading, location }) => {
  if (isLoading || !location) {
    return <div className="h-[40px] animate-pulse rounded bg-gray-300" />;
  }

  return (
    <div className="flex justify-between gap-4 rounded bg-fetch-dark-purple p-2 font-bold text-white">
      <div>
        Location: {location.city}, {location.state}
      </div>
      <div>County: {location.county}</div>
    </div>
  );
};
