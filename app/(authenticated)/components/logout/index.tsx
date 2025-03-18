'use client';

import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import type { FC } from 'react';
import { useRouter } from 'next/navigation';
import { View } from './view';

export const Logout: FC = () => {
  const router = useRouter();
  const { mutate, isPending } = useMutation({
    mutationFn: (data) => {
      return axios.post('/api/auth/logout', data).then((r) => r.data);
    },
    onSuccess: (data) => {
      if (data === 'OK') {
        router.push('/login');
      }
    },
  });

  return <View isPending={isPending} onClick={() => mutate()} />;
};
