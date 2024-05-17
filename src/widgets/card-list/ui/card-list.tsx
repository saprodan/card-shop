'use client';
import { UiSpinner } from '@/shared/ui/icons/ui-spinner';
import { ProductCardWidget } from '@/widgets/product-card-widget';
import { FC } from 'react';
import { useCardList } from '../model/use-card-list';
import { Product } from '@/entities/product';

// const products: Product[] = [
//   {
//     title: 'Name',
//     category: 'electronic',
//     id: 1,
//     description: 'rntuign wv;rev;esrhn 8ypn werugnv',
//     price: 53,
//     rating: { count: 5, rate: 5 },
//     image: "rtrthr"
//   },
// ];

export const CardList: FC = () => {
  const {
    products,
    removed,
    restoreAll,
    setShowFavorites,
    showFavorites,
    isError,
    isLoading,
  } = useCardList();

  if (isLoading)
    return (
      <div className="flex items-center justify-center h-[200px]">
        <UiSpinner className="w-16 h-16 text-gray-800 " />
      </div>
    );
  if (isError)
    return (
      <div className="w-full text-center h-10">
        Ошибка загрузки данных с сервера
      </div>
    );

  if (products) {
    return (
      <div>
        <div className="flex gap-2 justify-end items-center mb-2">
          <button
            className="flex border border-gray-300 rounded py-2 px-4  hover:bg-gray-300 transition-all "
            onClick={() => {
              setShowFavorites((state) => {
                return !state;
              });
            }}
          >
            {showFavorites ? 'Показать все' : 'Показать избранное'}
          </button>
          {removed.length > 0 && (
            <button
              className="flex border border-gray-300 rounded py-2 px-4  hover:bg-gray-300 transition-all"
              onClick={() => {
                restoreAll();
              }}
            >
              Восстановить товары
            </button>
          )}
        </div>

        <div className="flex flex-col gap-9 sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((item) => (
            <ProductCardWidget key={item.id} product={item} />
          ))}
        </div>
      </div>
    );
  }

  return null;
};
