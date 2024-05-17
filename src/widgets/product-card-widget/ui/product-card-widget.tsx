'use client';

import { Product, ProductCard } from '@/entities/product';
import { Favorite } from '@/features/favorites/favorite';
import { Remove } from '@/features/removed/remove';
import { DeleteIcon } from '@/shared/ui/icons/delete-icon';
import { FC } from 'react';

interface ProductCardWidgetProps {
  product: Product;
}

export const ProductCardWidget: FC<ProductCardWidgetProps> = ({
  product,
}) => {
  return (
    <ProductCard
      product={product}
      like={<Favorite itemId={product.id} />}
      remove={<Remove itemId={product.id} />}
    />
  );
};
