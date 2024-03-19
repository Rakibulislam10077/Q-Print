import { tagType } from "../tag-types"
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
      invalidatesTags:[tagType.user]
    }),


    userSignUp: build.mutation({
      query: (data) => ({
        url: `/user/signup`,
        method: 'POST',
        data: data,
      }),
      invalidatesTags:[tagType.user]
    }),

  }),
})

export const { useUserLoginMutation, useUserSignUpMutation } = authApi


