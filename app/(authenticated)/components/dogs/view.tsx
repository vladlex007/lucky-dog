import type { FC } from 'react';
import type { ViewProps } from './types';
import { DogCard } from './dog-card';
import { Sort } from './sort';

export const View: FC<ViewProps> = ({
  isLoading,
  ids,
  hasNext,
  hasPrev,
  onGoPrev,
  onGoNext,
  sort,
  setSort,
}) => {
  const content = ids?.length ? (
    <div className="grid grid-cols-3 gap-4">
      {ids?.map((id) => (
        <DogCard key={id} id={id} />
      ))}
    </div>
  ) : (
    <div className="flex h-[250px] items-center justify-center">No Results</div>
  );

  return (
    <div className="flex flex-col gap-4">
      <Sort
        hasNext={hasNext}
        hasPrev={hasPrev}
        onGoPrev={onGoPrev}
        onGoNext={onGoNext}
        sort={sort}
        setSort={setSort}
      />
      {isLoading ? (
        <div className="grid grid-cols-3 gap-4">
          {Array.from({ length: 9 }, (_, i) => i).map((i) => (
            <div key={i} className="animate-pulse rounded-md bg-gray-300">
              <div className="aspect-square" />
              <div className="h-[90]" />
            </div>
          ))}
        </div>
      ) : (
        content
      )}
    </div>
  );
};
