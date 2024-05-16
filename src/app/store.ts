import { configureStore } from '@reduxjs/toolkit';
import { productApi } from '../entities/product/api/product.api';
import { favoritesReducer } from '@/features/favorites';
import { removedReducer } from '@/features/removed/';

export const makeStore = () => {
  return configureStore({
    reducer: {
      [productApi.reducerPath]: productApi.reducer,
      favorites: favoritesReducer,
      removed: removedReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(productApi.middleware),
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
