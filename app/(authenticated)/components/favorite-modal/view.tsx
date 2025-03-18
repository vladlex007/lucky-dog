import type { FC } from 'react';
import { Dialog } from 'radix-ui';
import { DialogContent } from '@/app/(authenticated)/components/favorite-modal/dialog-content';
import type { ViewProps } from './types';

export const View: FC<ViewProps> = ({ match, setMatch }) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <div className="flex h-[50px] cursor-pointer items-center justify-center rounded-full bg-fetch-violet px-4 font-bold text-white transition hover:bg-fetch-dark-purple">
          Find your match
        </div>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50" />
        <Dialog.Content className="-translate-1/2 fixed top-1/2 left-1/2 max-h-[85vh] w-[90vw] max-w-[500px] rounded bg-white p-4 shadow-md">
          <DialogContent match={match} setMatch={setMatch} />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
