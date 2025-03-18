import type { FC } from 'react';
import { Dialog } from 'radix-ui';
import { LoaderCircleIcon, XIcon } from 'lucide-react';
import { MatchDog } from '../match-dog';
import type { ViewProps } from './types';

export const View: FC<ViewProps> = ({
  favoriteCount,
  match,
  isPending,
  onFindMatch,
  onClearMatch,
}) => {
  if (!favoriteCount) {
    return (
      <>
        <Dialog.Title className="font-bold text-2xl">
          You didnt select yet any pets, select one and come back here!
        </Dialog.Title>
        <Dialog.Description />
        <Dialog.Close className="absolute top-2 right-2 cursor-pointer">
          <XIcon />
        </Dialog.Close>
      </>
    );
  }

  return (
    <>
      <Dialog.Title className="font-bold text-2xl">
        {match ? 'Meet your pet!' : 'Match your pet!'}
      </Dialog.Title>
      {!match && (
        <Dialog.Description className="text-gray-500 text-sm">
          You selected&nbsp;
          <b className="text-fetch-dark-purple text-lg">{favoriteCount}</b>
          &nbsp;adorable dogs now we will find you your best match
        </Dialog.Description>
      )}
      <Dialog.Close className="absolute top-2 right-2 cursor-pointer">
        <XIcon />
      </Dialog.Close>
      {match ? (
        <div className="mt-2">
          <MatchDog id={match} />
          <div className="mt-8 flex justify-evenly gap-4">
            <button
              disabled={isPending}
              type="button"
              className="flex cursor-pointer items-center gap-2 rounded-full bg-fetch-violet px-4 py-2 font-bold text-white transition hover:bg-fetch-dark-purple"
              onClick={onFindMatch}
            >
              TRY AGAIN
              {isPending && <LoaderCircleIcon className="animate-spin" />}
            </button>
            <button
              type="button"
              className="cursor-pointer rounded-full bg-fetch-violet px-4 py-2 font-bold text-white transition hover:bg-fetch-dark-purple"
              onClick={onClearMatch}
            >
              CLEAR MATCH
            </button>
          </div>
        </div>
      ) : (
        <div className="mt-8 flex justify-center">
          <button
            disabled={isPending}
            type="button"
            className="flex cursor-pointer items-center gap-2 rounded-full bg-fetch-violet px-6 py-4 font-bold text-white transition hover:bg-fetch-dark-purple"
            onClick={onFindMatch}
          >
            FIND MATCH!
            {isPending && <LoaderCircleIcon className="animate-spin" />}
          </button>
        </div>
      )}
    </>
  );
};
