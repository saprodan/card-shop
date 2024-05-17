import { Header } from '@/features';
import StoreProvider from '@/app/store-provider';
import { CardList } from '@/widgets/card-list';
import { FC } from 'react';

export const HomePage: FC = () => {
  return (
    <div>
      <Header />
      <main className="max-w-[1450px] mx-auto px-6 py-10">
{/*         <CardList /> */}
      </main>
    </div>
  );
};
