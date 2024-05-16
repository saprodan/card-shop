import { useGetProductsQuery } from '@/entities/product/api/product.api';
import { useActions } from '@/shared/lib/hooks/use-actions';
import { useTypedSelector } from '@/shared/lib/hooks/use-selector';
import { useState } from 'react';

export const useCardList = () => {
  const { data: data, isLoading, isError } = useGetProductsQuery(25);

  // у 45 и 22 товара не прогружается картинка с сервера
  let products = data?.filter((p) => p.id !== 22 && p.id !== 45);

  const [showFavorites, setShowFavorites] = useState(false);
  const favorites = useTypedSelector((state) => state.favorites);
  const removed = useTypedSelector((state) => state.removed);

  const { restoreAll } = useActions();

  if (showFavorites) {
    products = products?.filter((pr) => favorites.includes(pr.id));
  }

  products = products?.filter((pr) => !removed.includes(pr.id));

  return {
    products,
    removed,
    favorites,
    showFavorites,
    setShowFavorites,
    restoreAll,
    isError,
    isLoading,
  };
};
