import axios from "axios";
import { baseApi } from "./baseApi";
import { IProduct } from "../../types/interfaces/product.interface";

export const carouselSlice = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getCarousel: build.query({
      query: () => ({
        url: '/promotions/slider', 
      }),
    }),

  }),
});

export const { useGetCarouselQuery} = carouselSlice;


