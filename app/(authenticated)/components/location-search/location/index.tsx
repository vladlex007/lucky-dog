import { type FC, useState } from 'react';
import type { ContainerProps } from './types';
import { View } from './view';

export const Location: FC<ContainerProps> = ({
  range,
  setRange,
  location,
  setLocation,
}) => {
  const [open, setOpen] = useState(false);

  const onSelect = (range: string) => {
    if (!navigator.geolocation) {
      return;
    }

    if (location) {
      setRange(range);
    } else {
      navigator.geolocation.getCurrentPosition((position) => {
        setLocation(position.coords);
        setRange(range);
      });
    }

    setOpen(false);
  };

  return (
    <View open={open} setOpen={setOpen} onSelect={onSelect} range={range} />
  );
};
