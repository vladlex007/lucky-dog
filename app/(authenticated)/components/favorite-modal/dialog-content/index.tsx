import { type FC, useEffect, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import type { DialogContentProps } from '../types';
import { View } from './view';

export const DialogContent: FC<DialogContentProps> = ({ match, setMatch }) => {
  const [favoriteList, setFavoriteList] = useState<string[]>([]);

  const { mutate, isPending } = useMutation<{ match: string }, Error, string[]>(
    {
      mutationFn: (data) => {
        return axios.post('/api/dogs/match', data).then((r) => r.data);
      },
      onSuccess: (data) => {
        setMatch(data.match);
      },
    }
  );

  useEffect(() => {
    try {
      const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');

      setFavoriteList(favorites);
      // biome-ignore lint/suspicious/noEmptyBlockStatements: <explanation>
    } catch {}
  }, []);

  const onFindMatch = () => {
    mutate(favoriteList);
  };

  const onClearMatch = () => {
    setMatch(undefined);
  };

  return (
    <View
      favoriteCount={favoriteList.length}
      match={match}
      isPending={isPending}
      onFindMatch={onFindMatch}
      onClearMatch={onClearMatch}
    />
  );
};
