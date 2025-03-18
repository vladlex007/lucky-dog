import type { FC } from 'react';
import { Popover, ScrollArea } from 'radix-ui';
import type { ViewProps } from './types';
import { ChevronDownIcon, XIcon } from 'lucide-react';

export const View: FC<ViewProps> = ({ open, setOpen, onSelect, range }) => {
  return (
    <Popover.Root open={open} onOpenChange={setOpen}>
      <Popover.Trigger>
        <div className="flex cursor-pointer gap-2 border-fetch-dark-purple border-l bg-fetch-color-tertiary px-8 py-6 font-bold transition hover:bg-fetch-violet hover:text-white">
          {range ? `${range} mi` : 'Any Range'}
          <ChevronDownIcon />
          {range && (
            <XIcon
              onClick={(e) => {
                e.stopPropagation();
                onSelect('');
              }}
            />
          )}
        </div>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content>
          <div className="rounded border bg-white p-2 shadow-lg">
            <div>
              <ScrollArea.Root className="h-[225px]">
                <ScrollArea.Viewport className="h-full">
                  <div>
                    <button
                      className="w-full cursor-pointer rounded px-2 py-1 transition hover:bg-fetch-light-purple hover:text-white"
                      type="button"
                      onClick={() => onSelect('')}
                    >
                      Any Range
                    </button>
                  </div>
                  {['25', '50', '100'].map((range) => (
                    <div key={range}>
                      <button
                        className="w-full cursor-pointer rounded px-2 py-1 transition hover:bg-fetch-light-purple hover:text-white"
                        type="button"
                        onClick={() => onSelect(range)}
                      >
                        {range} mi
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
