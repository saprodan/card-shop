import { useRouter } from 'next/navigation';
import React, { FC, ReactNode } from 'react';

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
  creationAt: string;
  updatedAt: string;
  category: Category;
}

export interface Category {
  id: number;
  name: string;
  image: string;
  creationAt: string;
  updatedAt: string;
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
      // href={'/product/20'}
      className="flex flex-col gap-2 min-w-[250px] relative cursor-pointer"
      onClick={(e) => handleClick(e)}
    >
      <div className="text-center relative w-full h-[340px] verflow-hidden text-ellipsis whitespace-nowrap overflow-hidden rounded-xl">
        <img
          src={product.images[0]}
          alt="product-photo"
          className="object-cover w-full h-full"
        />
        {/* <Image
          src={product.images[0]}
          alt="product-photo"
          className="object-cover w-full h"
          width={100}
          height={100}
          // objectFit="cover"
        /> */}
      </div>
      <p className="font-medium overflow-hidden text-ellipsis whitespace-nowrap">
        {product.title}{' '}
      </p>
      {/* <p className="text-sm text-gray-400 h-20 overflow-hidden">
        {product.description && truncate(product.description, 150)}
      </p> */}
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
