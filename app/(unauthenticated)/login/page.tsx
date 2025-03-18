import { LoginForm } from './components/login-form';

const Page = () => (
  <div className="flex h-screen items-center justify-center">
    <div className="flex flex-col space-y-2 rounded-lg bg-white/90 p-4 text-center shadow-lg">
      <h1 className="font-semibold text-4xl tracking-tight">Lucky Dog</h1>
      <p className="text-gray-500 text-muted-foreground text-sm">
        Find the best match between you and you puppy!
      </p>
      <p className="text-muted-foreground text-sm">To Continue, please login</p>
      <LoginForm />
    </div>
  </div>
);

export default Page;
