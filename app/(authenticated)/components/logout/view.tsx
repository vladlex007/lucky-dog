import type { FC } from 'react';
import type { ViewProps } from './types';
import { LoaderCircleIcon } from 'lucide-react';

export const View: FC<ViewProps> = ({ isPending, onClick }) => {
  return (
    <div>
      <button
        className="flex cursor-pointer gap-2 rounded-full bg-fetch-dark-purple px-5 py-3 font-bold text-white transition hover:bg-fetch-light-purple"
        type="button"
        disabled={isPending}
        onClick={onClick}
      >
        Logout
        {isPending && <LoaderCircleIcon className="animate-spin" />}
      </button>
    </div>
  );
};
