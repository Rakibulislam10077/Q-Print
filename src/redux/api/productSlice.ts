import axios from "axios";
import { baseApi } from "./baseApi";
import { IProduct } from "../../types/interfaces/product.interface";

export const productApiSlice = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getProducts: build.query({
      query: () => ({
        url: '/product', 
      }),
    }),

    getQueryProduct: build.query({
        query: (query) => ({
            url: `/product?${query}`
        })
    }),
    getProductById: build.query({
      query: (id) => ({
        url: `/product/${id}`, 
      }),
    }),

  }),
});

export const { useGetProductsQuery, useGetQueryProductQuery, useGetProductByIdQuery} = productApiSlice;


