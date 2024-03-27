import axios from "axios";
import { baseApi } from "./baseApi";
import { IProduct } from "../../types/interfaces/product.interface";

export const reviewSlice = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getProductReview: build.query({
      query: (query) => ({
        url: `/online-order?`, 
      }),
    }),
    reviewHistory: build.query({
      query: (query) => ({
        url: `/review`, 
      }),
    }),
    postReview: build.mutation({
      query: (data) => ({
        url: `/review/add`, 
        method: "POST",
        data
      }),
    }),
  }),
});

export const {useGetProductReviewQuery, useReviewHistoryQuery, usePostReviewMutation} = reviewSlice