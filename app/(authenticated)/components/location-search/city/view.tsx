import type { FC } from 'react';
import { Popover, ScrollArea } from 'radix-ui';
import type { ViewProps } from './types';
import { ChevronDownIcon, LoaderCircleIcon, XIcon } from 'lucide-react';

export const View: FC<ViewProps> = ({
  open,
  setOpen,
  city,
  value,
  setValue,
  isPending,
  list,
  onSelect,
  disabled,
}) => {
  return (
    <Popover.Root open={open} onOpenChange={setOpen}>
      <Popover.Trigger disabled={disabled}>
        <div
          className={`flex gap-2 rounded-l-full bg-fetch-color-tertiary px-8 py-6 font-bold transition ${disabled ? 'text-gray-500' : 'cursor-pointer hover:bg-fetch-violet hover:text-white'}`}
        >
          {city ? city.city : 'All Cities'}
          {!disabled && <ChevronDownIcon />}
          {city && !disabled && (
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
              name="city"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <ScrollArea.Root className="h-[225px]">
              <ScrollArea.Viewport className="h-full">
                {isPending ? (
                  <LoaderCircleIcon className="animate-spin justify-self-center" />
                ) : (
                  <div className="flex flex-col">
                    <div>
                      <button
                        className="w-full cursor-pointer rounded px-2 py-1 transition hover:bg-fetch-light-purple hover:text-white"
                        type="button"
                        onClick={() => onSelect()}
                      >
                        All Cities
                      </button>
                    </div>
                    {list.map((city) => (
                      <div key={city.city}>
                        <button
                          className="w-full cursor-pointer rounded px-2 py-1 transition hover:bg-fetch-light-purple hover:text-white"
                          type="button"
                          onClick={() => onSelect(city)}
                        >
                          {city.city}
                        </button>
                      </div>
                    ))}
                  </div>
                )}
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
          <Popover.Arrow />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};
