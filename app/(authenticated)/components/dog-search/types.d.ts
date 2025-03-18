import type { ChangeEventHandler } from 'react';

export type ViewProps = {
  breeds: string[];
  ageMin?: number;
  ageMax?: number;
  onAgeMin: ChangeEventHandler<HTMLInputElement>;
  onAgeMax: ChangeEventHandler<HTMLInputElement>;
  removeBreed: (breed: string) => void;
};
