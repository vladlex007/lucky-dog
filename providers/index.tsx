import ReactQueryProvider from '@/providers/reactQueryProvider';
import type { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const Providers: FC<Props> = ({ children }) => {
  return <ReactQueryProvider>{children}</ReactQueryProvider>;
};
