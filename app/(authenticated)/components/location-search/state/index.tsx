import { type FC, useState } from 'react';
import type { ContainerProps } from './types';
import { View } from './view';
import { STATES } from '@/constants';

export const State: FC<ContainerProps> = ({
  disabled,
  cityState,
  state,
  setState,
}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');

  const onSelect = (state?: string) => {
    setState(state);
    setOpen(false);
    setValue(STATES.find(({ key }) => key === state)?.label || '');
  };

  return (
    <View
      disabled={disabled}
      open={open}
      setOpen={setOpen}
      value={value}
      setValue={setValue}
      list={STATES.filter(
        ({ label }) =>
          !value || label.toLowerCase().startsWith(value.toLowerCase())
      )}
      onSelect={onSelect}
      state={state}
      cityState={cityState}
    />
  );
};
