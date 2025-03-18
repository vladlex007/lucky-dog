import type { ReactNode } from 'react';
import { Logout } from '@/app/(authenticated)/components/logout';

export default function Layout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-[url(/background.png)]">
      <div className="container relative mx-auto p-2">
        <div className="flex items-center gap-4">
          <div className="ml-auto flex items-center gap-4">
            <Logout />
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}
