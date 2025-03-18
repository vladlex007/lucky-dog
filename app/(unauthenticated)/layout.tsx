import type { ReactNode } from 'react';

const AuthLayout = ({ children }: { children: ReactNode }) => (
  <div>
    <video
      autoPlay
      muted
      loop
      className="-z-10 fixed h-full w-full object-cover opacity-50"
    >
      <source src="/background_video.mp4" type="video/mp4" />
    </video>
    <div>{children}</div>
  </div>
);

export default AuthLayout;
