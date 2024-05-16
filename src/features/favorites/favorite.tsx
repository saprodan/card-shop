import React, { FC, useState } from "react";
import { HeartIcon } from "@/shared/ui/icons/heart-icon";
import { HeartOutlineIcon } from "@/shared/ui/icons/heart-outline-icon";
import { useActions } from "@/shared/lib/hooks/use-actions";
import { favoriteSlice } from "./favorites-slice";
import { useTypedSelector } from "@/shared/lib/hooks/use-selector";

interface FavoriteProps {
  itemId: number;
}

export const Favorite: FC<FavoriteProps> = ({ itemId }) => {
  const { addToFavorite, deleteFromFavorite } = useActions();
  const favorites = useTypedSelector((state) => state.favorites);

  const onLikeClick = () => {
    console.log("fav click!");

    if (!favorites.includes(itemId)) {
      addToFavorite(itemId);
    } else {
      deleteFromFavorite(itemId);
    }
  };

  return (
    <button onClick={() => onLikeClick()} className="text-gray-600">
      {favorites.includes(itemId) ? (
        <HeartIcon className=" text-red-500" />
      ) : (
        <HeartOutlineIcon className="text-gray-300 transition-all hover:text-red-500" />
      )}
    </button>
  );
};
