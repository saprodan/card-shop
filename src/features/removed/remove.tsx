import React, { FC } from 'react';

import { useActions } from '@/shared/lib/hooks/use-actions';
import { DeleteIcon } from '@/shared/ui/icons/delete-icon';

interface RemoveProps {
  itemId: number;
}

export const Remove: FC<RemoveProps> = ({ itemId }) => {
  const { addRemovedId } = useActions();

  const onRemoveClick = () => {
    addRemovedId(itemId);
  };

  return (
    <button onClick={onRemoveClick}>
      <DeleteIcon className=" text-white transition-all hover:text-gray-800" />
    </button>
  );
};
