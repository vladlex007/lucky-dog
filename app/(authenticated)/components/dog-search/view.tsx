import type { FC } from 'react';
import { Breeds } from './breeds';
import type { ViewProps } from './types';
import { XIcon } from 'lucide-react';

export const View: FC<ViewProps> = ({
  breeds,
  ageMin,
  ageMax,
  onAgeMin,
  onAgeMax,
  removeBreed,
}) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-center gap-4">
        <Breeds />
        <div className="flex">
          <label className="flex w-[250px] cursor-pointer appearance-none gap-1 rounded-full bg-fetch-violet px-8 py-6 text-center font-bold text-white">
            <div className="shrink-0">Minimum Age:</div>
            <div>
              <input
                className="w-full border-b"
                name="ageMin"
                type="number"
                min={0}
                value={ageMin ?? ''}
                onChange={onAgeMin}
              />
            </div>
          </label>
        </div>
        <div className="flex">
          <label className="flex w-[250px] cursor-pointer appearance-none gap-1 rounded-full bg-fetch-violet px-8 py-6 text-center font-bold text-white">
            <div className="shrink-0">Maximum Age:</div>
            <div>
              <input
                className="w-full border-b"
                name="ageMax"
                type="number"
                min={0}
                value={ageMax ?? ''}
                onChange={onAgeMax}
              />
            </div>
          </label>
        </div>
      </div>
      <div className="flex flex-wrap gap-4">
        {breeds.sort().map((breed) => (
          <div
            className="flex gap-2 rounded-full bg-fetch-light-purple px-4 py-2 font-bold text-white transition hover:bg-fetch-dark-purple"
            key={breed}
          >
            <div>{breed}</div>
            <XIcon
              className="cursor-pointer"
              onClick={() => removeBreed(breed)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
