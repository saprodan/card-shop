'use client';

import { useGetOneProductQuery } from '@/entities/product/api/product.api';
import { ArrowLeftIcon } from '@/shared/ui/icons/arrow-left-icon';
import { UiSpinner } from '@/shared/ui/icons/ui-spinner';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

interface ProductCardWidgetProps {
  id: string;
}

export const ProductInfo: FC<ProductCardWidgetProps> = ({ id }) => {
  const {
    data: product,
    isLoading,
    isError,
  } = useGetOneProductQuery(id);

  if (isLoading)
    return (
      <div className="flex items-center justify-center h-[200px]">
        <UiSpinner className="w-16 h-16 text-gray-800" />
      </div>
    );
  if (isError)
    return (
      <div className="w-full text-center h-10">
        Ошибка загрузки данных с сервера
      </div>
    );

  if (product) {
    return (
      <div className="flex flex-col gap-4 ">
        <div className="flex justify-start mb-2">
          <Link href="/" className="flex gap-2 items-center">
            <ArrowLeftIcon className="w-5 text-gray-700" />
            <p className="leading-none text-gray-700">Назад</p>
          </Link>
        </div>
        <div className="mb-4">
          <p className="lowercase text-sm inline bg-gray-200 rounded px-2 py-1">
            {product.category}
          </p>
        </div>
        <div className="flex gap-4 flex-col sm:flex-row">
          <div className="border-gray-800 relative overflow-hidden flex-grow  sm:min-w-[400px] sm:h-[400px]">
            <Image
              src={product.image}
              alt="product-photo"
              width="500"
              height="850"
              priority
            />
          </div>
          <div className="flex flex-col gap-3">
            <p className="font-bold text-xl">{product?.title}</p>
            <p className="text sm text-gray-500">
              {product?.description}
            </p>
            <p className="inline-block font-medium text-emerald-600 text-3xl">
              {product?.price + '$'}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return null;
};
