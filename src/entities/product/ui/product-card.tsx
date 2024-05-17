import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { FC, ReactNode } from 'react';

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}

export interface Rating {
  rate: number;
  count: number;
}

interface ProductCardProps {
  product: Product;
  like?: ReactNode;
  remove?: ReactNode;
}

export const ProductCard: FC<ProductCardProps> = ({
  product,
  like,
  remove,
}) => {
  const likeRef = React.createRef<HTMLDivElement>();
  const removeRef = React.createRef<HTMLDivElement>();

  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Переход на страницу товара, если клик не по иконке
    if (
      e.target == likeRef.current ||
      e.target == removeRef.current ||
      likeRef.current?.contains(e.target as Element) ||
      removeRef.current?.contains(e.target as Element)
    ) {
      return;
    }
    router.push(`/product/${product.id}`);
  };

  return (
    <div
      className="flex flex-col gap-2 min-w-[250px] relative cursor-pointer border rounded-xl p-3"
      onClick={(e) => handleClick(e)}
    >
      <div className="flex items-center justify-center w-full h-[340px] verflow-hidden overflow-hidden rounded-xl">
        <Image
          src={product.image}
          alt="product-photo"
          width="150"
          height="225"
          priority
        />
      </div>
      <div className="font-medium text-cyan-500 text-lg">
        <span>{product.price + ' $'}</span>
      </div>
      <p className="font-medium overflow-hidden text-ellipsis whitespace-nowrap">
        {product.title}{' '}
      </p>
      <p className="text-sm text-gray-400 overflow-hidden text-ellipsis whitespace-nowrap">
        {product.description}
      </p>

      <div className="absolute z-10 right-2 top-2" ref={likeRef}>
        {like}
      </div>
      <div className="absolute z-10 left-2 top-2" ref={removeRef}>
        {remove}
      </div>
    </div>
  );
};

function truncate(str: string, n: number) {
  return str.length > n ? str.slice(0, n - 1) + '...' : str;
}
