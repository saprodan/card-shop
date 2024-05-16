import { Product } from '@/entities/product';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

// Define a type for the slice state

// Define the initial state using that type
const initialState: number[] = [];

export const removedSlice = createSlice({
  name: 'favorites',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addRemovedId: (state, action: PayloadAction<number>) => {
      state.push(action.payload);
    },
    restoreAll: (state) => {
      return [];
    },
  },
});

// export const { addToFavorite, deleteFromFavorite } =
//   favoriteSlice.actions;

export const removedReducer = removedSlice.reducer;
export const removedActions = removedSlice.actions;
