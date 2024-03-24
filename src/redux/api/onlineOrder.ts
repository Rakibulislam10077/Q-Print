import axios from "axios";
import { baseApi } from "./baseApi";
import { IProduct } from "../../types/interfaces/product.interface";

export const productApiSlice = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getHistory: build.query({
      query: (query) => ({
        url: `/online-order?${query}`, 
      }),
    }),

   

  }),
});

export const { useGetHistoryQuery} = productApiSlice;