import type { FC } from 'react';
import Image from 'next/image';
import { Location } from '@/app/(authenticated)/components/favorite-modal/location';
import type { ViewProps } from './types';

export const View: FC<ViewProps> = ({ isLoading, dog }) => {
  if (isLoading || !dog) {
    return (
      <div className="animate-pulse rounded-md bg-gray-300">
        <div className="aspect-square" />
        <div className="h-[90]" />
      </div>
    );
  }

  return (
    <>
      <div className="relative aspect-square w-full">
        <Image
          fill
          className="h-full w-full object-cover"
          src={dog.img}
          alt={dog.name}
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
      <Location zipCode={dog.zip_code} />
    </>
  );
};
