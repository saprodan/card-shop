import { Header } from '@/features';
import StoreProvider from '@/app/store-provider';
import { CardList } from '@/widgets/card-list';
import { FC } from 'react';
// import { useRouter } from 'next/router';
import { useGetOneProductQuery } from '@/entities/product/api/product.api';
import { ProductInfo } from '@/widgets/product-info';

interface ProductPageProps {
  params: { id: string };
}
export const ProductPage: FC<ProductPageProps> = ({ params }) => {
  // const router = useRouter();
  // console.log(router);

  // useGetOneProductQuery(params.id);

  return (
    <div>
      <Header />
      <main className="max-w-[1450px] mx-auto px-6 py-10 ">
        <ProductInfo id={params.id} />
      </main>
    </div>
  );
};
