import { Header } from '@/features';
import { FC } from 'react';
// import { useRouter } from 'next/router';
import { ProductInfo } from '@/widgets/product-info';
import { Product } from '@/entities/product';

export async function generateParams() {
  const products = await fetch(
    'https://fakestoreapi.com/products'
  ).then((res) => res.json());
  const params = products.map((product: Product) => ({
    id: product.id.toString(),
  }));

  return params;
}

interface ProductPageProps {
  params: { id: string };
}
export const ProductPage: FC<ProductPageProps> = ({ params }) => {
  return (
    <div>
      <Header />
      <main className="max-w-[1450px] mx-auto px-6 py-10 ">
        {/* <ProductInfo id={params.id} /> */}
      </main>
    </div>
  );
};
