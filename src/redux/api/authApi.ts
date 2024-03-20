import axios from "axios";
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
      invalidatesTags:[tagType.userLogin]
    }),


    userRegistration: build.mutation({
      query: (data) => ({
        url: `/user/signup`,
        method: 'POST',
        data: data,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }),
      invalidatesTags:[tagType.userRegistration]
    }),

    
    // userRegistration: build.mutation({
    //   //@ts-ignore
    //   query: async (formData) => {
    //     try {
    //       const response = await axios.post(`${AUTH_URL}/signup`, formData, {
    //         headers: {
    //           'Content-Type': 'multipart/form-data',
    //         },
    //       });
    //       return { data: response.data };
    //     } catch (error) {
    //       //@ts-ignore
    //       throw new Error(`Signup failed: ${error.message}`);
    //     }
    //   },
    //   invalidatesTags: [tagType.user],
    // }),
    
      
    }),
  

  })


export const { useUserLoginMutation, useUserRegistrationMutation } = authApi


