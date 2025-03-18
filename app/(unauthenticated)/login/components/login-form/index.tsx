'use client';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { type FC, type FormEventHandler, useState } from 'react';
import { LoaderCircleIcon } from 'lucide-react';

export const LoginForm: FC = () => {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const { mutate, isPending } = useMutation<
    string,
    Error,
    {
      name: string;
      email: string;
    }
  >({
    mutationFn: (data) => {
      return axios.post('/api/auth/login', data).then((r) => r.data);
    },
    onSuccess: (data) => {
      if (data === 'OK') {
        router.push('/');
      }
    },
  });

  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    mutate({
      name,
      email,
    });
  };

  return (
    <div>
      <form onSubmit={onSubmit} className="flex flex-col gap-2">
        <label className="flex flex-col text-start">
          <div className="font-bold">Name:</div>
          <input
            className="border-b p-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label className="flex flex-col text-start">
          <div className="font-bold">Email:</div>
          <input
            type="email"
            className="border-b p-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <button
          type="submit"
          disabled={isPending}
          className="mt-4 flex cursor-pointer justify-center gap-2 rounded-full bg-fetch-violet px-6 py-4 font-bold text-white"
        >
          <div>Log-In</div>
          {isPending && <LoaderCircleIcon className="animate-spin" />}
        </button>
      </form>
    </div>
  );
};
