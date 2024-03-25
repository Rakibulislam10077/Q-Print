import axios from "axios";
import { baseApi } from "./baseApi";
import { IProduct } from "../../types/interfaces/product.interface";

export const reviewSlice = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getReview: build.query({
      query: () => ({
        url: '/review', 
      }),
    }),
  }),
});

export const {useGetReviewQuery} = reviewSlice