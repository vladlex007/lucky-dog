import type { FC } from 'react';
import { Popover, ScrollArea } from 'radix-ui';
import type { ViewProps } from './types';
import { STATES } from '@/constants';
import { ChevronDownIcon, XIcon } from 'lucide-react';

export const View: FC<ViewProps> = ({
  open,
  setOpen,
  list,
  setValue,
  value,
  onSelect,
  cityState,
  state,
  disabled,
}) => {
  if (cityState) {
    return (
      <div className="flex gap-2 border-fetch-dark-purple border-l bg-fetch-color-tertiary px-8 py-6 font-bold text-gray-500 transition">
        {STATES.find(({ key }) => cityState === key)?.label}
      </div>
    );
  }

  return (
    <Popover.Root open={open} onOpenChange={setOpen}>
      <Popover.Trigger disabled={disabled}>
        <div
          className={`flex gap-2 border-fetch-dark-purple border-l bg-fetch-color-tertiary px-8 py-6 font-bold transition ${disabled ? 'text-gray-500' : 'cursor-pointer hover:bg-fetch-violet hover:text-white'}`}
        >
          {state
            ? STATES.find(({ key }) => state === key)?.label
            : 'All States'}
          {!disabled && <ChevronDownIcon />}
          {state && !disabled && (
            <XIcon
              onClick={(e) => {
                e.stopPropagation();
                onSelect();
              }}
            />
          )}
        </div>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content>
          <div className="rounded border bg-white p-2 shadow-lg">
            <input
              className="mb-2 w-full border-b"
              name="state"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <div>
              <ScrollArea.Root className="h-[225px]">
                <ScrollArea.Viewport className="h-full">
                  <div>
                    <button
                      className="w-full cursor-pointer rounded px-2 py-1 transition hover:bg-fetch-light-purple hover:text-white"
                      type="button"
                      onClick={() => onSelect()}
                    >
                      All States
                    </button>
                  </div>
                  {list.map(({ key, label }) => (
                    <div key={key}>
                      <button
                        className="w-full cursor-pointer rounded px-2 py-1 transition hover:bg-fetch-light-purple hover:text-white"
                        type="button"
                        onClick={() => onSelect(key)}
                      >
                        {label}
                      </button>
                    </div>
                  ))}
                </ScrollArea.Viewport>
                <ScrollArea.Scrollbar
                  className="ScrollAreaScrollbar"
                  orientation="vertical"
                >
                  <ScrollArea.Thumb className="ScrollAreaThumb" />
                </ScrollArea.Scrollbar>
                <ScrollArea.Scrollbar
                  className="ScrollAreaScrollbar"
                  orientation="horizontal"
                >
                  <ScrollArea.Thumb className="ScrollAreaThumb" />
                </ScrollArea.Scrollbar>
                <ScrollArea.Corner className="ScrollAreaCorner" />
              </ScrollArea.Root>
            </div>
          </div>
          <Popover.Arrow />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};
