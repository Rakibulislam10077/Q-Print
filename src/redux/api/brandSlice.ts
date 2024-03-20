import { baseApi } from "./baseApi";


export const brandSlice = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getBrand: build.query({
      query: () => ({
        url: '/brand', 
      }),
    }),
  }),
});

export const { useGetBrandQuery } = brandSlice;

