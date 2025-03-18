import type { FC } from 'react';
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronUpIcon,
} from 'lucide-react';
import type { ViewProps } from './types';
import { FavoriteModal } from '@/app/(authenticated)/components/favorite-modal';

export const Sort: FC<ViewProps> = ({
  hasPrev,
  hasNext,
  onGoPrev,
  onGoNext,
  sort,
  setSort,
}) => {
  return (
    <div className="flex h-[50px] gap-4">
      <button
        type="button"
        className="flex h-[50px] cursor-pointer items-center justify-center rounded-full bg-fetch-violet px-4 font-bold text-white transition hover:bg-fetch-dark-purple"
        onClick={() => setSort('breed')}
      >
        Breed
        {sort === 'breed:asc' && <ChevronDownIcon />}
        {sort === 'breed:desc' && <ChevronUpIcon />}
      </button>
      <button
        type="button"
        className="flex h-[50px] cursor-pointer items-center justify-center rounded-full bg-fetch-violet px-4 font-bold text-white transition hover:bg-fetch-dark-purple"
        onClick={() => setSort('name')}
      >
        Name
        {sort === 'name:asc' && <ChevronDownIcon />}
        {sort === 'name:desc' && <ChevronUpIcon />}
      </button>
      <button
        type="button"
        className="flex h-[50px] cursor-pointer items-center justify-center rounded-full bg-fetch-violet px-4 font-bold text-white transition hover:bg-fetch-dark-purple"
        onClick={() => setSort('age')}
      >
        Age
        {sort === 'age:asc' && <ChevronDownIcon />}
        {sort === 'age:desc' && <ChevronUpIcon />}
      </button>
      <FavoriteModal />
      <div className="ml-auto flex gap-4">
        <button
          disabled={!hasPrev}
          onClick={onGoPrev}
          type="button"
          className={`flex h-[50px] w-[50px] items-center justify-center rounded-full text-white transition ${hasPrev ? 'cursor-pointer bg-fetch-violet hover:bg-fetch-dark-purple' : 'bg-gray-500'}`}
        >
          <ChevronLeftIcon />
        </button>
        <button
          disabled={!hasNext}
          onClick={onGoNext}
          type="button"
          className={`flex h-[50px] w-[50px] items-center justify-center rounded-full text-white transition ${hasNext ? 'cursor-pointer bg-fetch-violet hover:bg-fetch-dark-purple' : 'bg-gray-500'}`}
        >
          <ChevronRightIcon />
        </button>
      </div>
    </div>
  );
};
