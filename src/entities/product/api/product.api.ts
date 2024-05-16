import { Product } from "@/entities/product";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fakestoreapi.com/",
  }),
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], number>({
      query: (limit = 10) => `products?limit=${limit}`,
    }),
    getOneProduct: builder.query<Product, string>({
      query: (id) => `products/${id}`,
    }),
  }),
});

export const { useGetOneProductQuery, useGetProductsQuery } = productApi;
