import React, { FC } from "react";

import { useActions } from "@/shared/lib/hooks/use-actions";
import { DeleteIcon } from "@/shared/ui/icons/delete-icon";

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
      <DeleteIcon className=" text-gray-300 transition-all hover:text-gray-500" />
    </button>
  );
};
