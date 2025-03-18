import { HeartIcon } from 'lucide-react';
import Image from 'next/image';
import type { FC } from 'react';
import type { ViewProps } from './types';

export const View: FC<ViewProps> = ({
  isLoading,
  dog,
  onSelect,
  isFavorite,
}) => {
  if (isLoading || !dog) {
    return (
      <div className="animate-pulse rounded-md bg-gray-300">
        <div className="aspect-square" />
        <div className="h-[90]" />
      </div>
    );
  }

  return (
    <button
      type="button"
      className="cursor-pointer overflow-hidden rounded-md bg-white shadow transition hover:scale-105 hover:shadow-2xl"
      onClick={() => onSelect(dog.id)}
    >
      <div className="relative aspect-square w-full">
        <Image
          fill
          className="h-full w-full object-cover"
          src={dog.img}
          alt={dog.name}
        />
        <HeartIcon
          className={`absolute top-5 right-5 ${isFavorite ? 'fill-fetch-light-purple stroke-0' : ''}`}
          size={36}
        />
      </div>
      <div className="p-2">
        <div className="flex justify-between gap-2">
          <div className="font-bold text-2xl">{dog.name}</div>
          <div className="flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-full bg-fetch-light-purple font-bold text-white">
            {dog.age}Y
          </div>
        </div>
        <div className="flex items-end justify-between gap-2">
          <div>{dog.breed}</div>
          <div className="text-sm">ZIP: {dog.zip_code}</div>
        </div>
      </div>
    </button>
  );
};
