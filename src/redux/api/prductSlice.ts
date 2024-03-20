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
        query: (q) => ({
            url: `/product?${q}`
        })
    })

  }),
});

export const { useGetProductsQuery, useGetQueryProductQuery } = productApiSlice;


