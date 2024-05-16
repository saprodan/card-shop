import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

// Define a type for the slice state

// Define the initial state using that type
const initialState: number[] = [];

export const favoriteSlice = createSlice({
  name: 'favorites',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addToFavorite: (state, action: PayloadAction<number>) => {
      state.push(action.payload);
    },
    deleteFromFavorite: (state, action: PayloadAction<number>) => {
      return state.filter((id) => id !== action.payload);
    },
  },
});

// export const { addToFavorite, deleteFromFavorite } =
//   favoriteSlice.actions;

export const favoritesReducer = favoriteSlice.reducer;
export const favoritesActions = favoriteSlice.actions;
