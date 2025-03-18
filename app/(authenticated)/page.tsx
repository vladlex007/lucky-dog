import { SearchProvider } from '@/context/search';
import { DogSearch } from './components/dog-search';
import { Dogs } from './components/dogs';
import { LocationSearch } from './components/location-search';

export default function Home() {
  return (
    <SearchProvider>
      <div className="mb-8 flex flex-col gap-4">
        <LocationSearch />
        <DogSearch />
      </div>
      <Dogs />
    </SearchProvider>
  );
}
