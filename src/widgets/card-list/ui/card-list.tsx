'use client';
import { UiSpinner } from '@/shared/ui/icons/ui-spinner';
import { ProductCardWidget } from '@/widgets/card-widget';
import { FC } from 'react';
import { useCardList } from '../model/use-card-list';

// const products = [
//   {
//     id: 17,
//     title: 'Classic Black T-Shirt',
//     price: 35,
//     description:
//       "Elevate your everyday style with our Classic Black T-Shirt. This staple piece is crafted from soft, breathable cotton for all-day comfort. Its versatile design features a classic crew neck and short sleeves, making it perfect for layering or wearing on its own. Durable and easy to care for, it's sure to become a favorite in your wardrobe.",
//     images: [
//       'https://i.imgur.com/9DqEOV5.jpeg',
//       'https://i.imgur.com/ae0AEYn.jpeg',
//       'https://i.imgur.com/mZ4rUjj.jpeg',
//     ],
//     creationAt: '2024-05-16T02:16:41.000Z',
//     updatedAt: '2024-05-16T02:16:41.000Z',
//     category: {
//       id: 1,
//       name: 'Clothes',
//       image:
//         'https://static01.nyt.com/images/2022/10/07/fashion/07openthread03/07openthread03-jumbo.jpg?quality=75&auto=webp',
//       creationAt: '2024-05-16T02:16:41.000Z',
//       updatedAt: '2024-05-16T06:54:42.000Z',
//     },
//   },
//   {
//     id: 20,
//     title: 'Sleek Comfort-Fit Over-Ear Headphones',
//     price: 28,
//     description:
//       "Experience superior sound quality with our Sleek Comfort-Fit Over-Ear Headphones, designed for prolonged use with cushioned ear cups and an adjustable, padded headband. Ideal for immersive listening, whether you're at home, in the office, or on the move. Their durable construction and timeless design provide both aesthetically pleasing looks and long-lasting performance.",
//     images: [
//       'https://gas-kvas.com/grafic/uploads/posts/2023-10/1696565174_gas-kvas-com-p-kartinki-kunitsa-26.jpg',
//       'https://i.imgur.com/KIGW49u.jpeg',
//       'https://i.imgur.com/mWwek7p.jpeg',
//     ],
//     creationAt: '2024-05-16T02:16:41.000Z',
//     updatedAt: '2024-05-16T02:16:41.000Z',
//     category: {
//       id: 2,
//       name: 'Electronics',
//       image: 'https://i.imgur.com/ZANVnHE.jpeg',
//       creationAt: '2024-05-16T02:16:41.000Z',
//       updatedAt: '2024-05-16T02:16:41.000Z',
//     },
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
