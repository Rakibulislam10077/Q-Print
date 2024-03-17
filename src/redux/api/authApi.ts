import { baseApi } from "./baseApi"


const AUTH_URL = '/user'
export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    userLogin: build.mutation({
      query: (data) => ({
        url: `/user/login`,
        method: 'POST',
        data: data,
      }),
      invalidatesTags:['user']
    }),
  }),
})

export const { useUserLoginMutation } = authApi


