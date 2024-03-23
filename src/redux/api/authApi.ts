import axios from "axios";
import { tagType } from "../tag-types"
import { baseApi } from "./baseApi"


const AUTH_URL = '/user'
export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({

    userLogin: build.mutation({
      query: (data) => {
        
        return({
        url: `/user/login`,
        method: 'POST',
        data: data,
      })},
      invalidatesTags:[tagType.userLogin]
    }),


    userRegistration: build.mutation({
      query: (data) => ({
        url: `/user/signup`,
        method: 'POST',
        data: data,
        // headers: {
        //   'Content-Type': 'multipart/form-data',
        // },
      }),
      invalidatesTags:[tagType.userRegistration]
    }),

    
    
    
      
    }),
  

  })


export const { useUserLoginMutation, useUserRegistrationMutation } = authApi


