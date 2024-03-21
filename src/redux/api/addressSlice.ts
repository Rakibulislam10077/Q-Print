import { tagType } from "../tag-types";
import { baseApi } from "./baseApi";


export const addressSlice = baseApi.injectEndpoints({
  endpoints: (build) => ({
    addAddress: build.mutation({
      query: () => ({
        url: '/user-address/add',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      }),
      invalidatesTags: [tagType.address],
    }),
  }),
});

export const { useAddAddressMutation } = addressSlice;