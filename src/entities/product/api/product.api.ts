import { Product } from '@/entities/product';
import {
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.escuelajs.co/api/v1/',
  }),
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], number>({
      query: (limit = 10) => `products/?offset=0&limit=${limit}`,
    }),
    getOneProduct: builder.query<Product, string>({
      query: (id) => `products/${id}`,
    }),
  }),
});

export const { useGetOneProductQuery, useGetProductsQuery } =
  productApi;
