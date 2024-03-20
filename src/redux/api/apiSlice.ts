import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IProduct } from '../../types/interfaces/product.interface';
import { IBrand } from '../../types/interfaces/brand.interface';
import { IUserData } from '../../types/interfaces/get_me.user.interface';
import { IMeAddAddress } from '../../types/interfaces/me.address.interface';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';
import { IPaperType } from '../../types/interfaces/paparType.interface';

// Define a selector to access the access token from your Redux store

// export const getToken = async () => {
//   const token = await AsyncStorage.getItem('token');
//   if (token) {
//     return token;
//   } else {
//     return '';
//   }
// };

  const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJwREhKeGM4UEY4IiwiX2lkIjoiNjViZTNmYTZhNDlkOTRjZWM3MDQ3M2Y1IiwiZnVsbE5hbWUiOiJOIEkgUmltb24iLCJyb2xlIjoiQWRtaW4iLCJwaG9uZU51bWJlciI6IjAxNzE1NDk0ODQ2IiwiaXNQaG9uZU51bWJlclZlcmlmaWVkIjp0cnVlLCJpc0VtYWlsVmVyaWZpZWQiOmZhbHNlLCJpYXQiOjE3MTAyMzgwMzMsImV4cCI6MTcxMDMyNDQzM30.HZGkUp0urTDxUbd4wxqNlyD-C1-8M0ISNeSOtIRt-7U';


  const url = 'http://192.168.0.182:5000/api/v1';


export const api = createApi({

  reducerPath: 'api',

  baseQuery: fetchBaseQuery({baseUrl: url}),

  endpoints: (builder) => ({
    getProduct: builder.query<{ message: string; success?: boolean; data: IProduct[] }, undefined>({
      query: () => '/product',
    }),

    getQueryProduct: builder.query<
      { message: string; success?: boolean; data: IProduct[] },
      string
    >({
      query: (q) => `/product?${q}`,
    }),

    getBrand: builder.query<{ success: boolean; message: string; data: IBrand[] }, undefined>({
      query: () => '/brand',
    }),

    getUser: builder.query<{ success: boolean; message: string; data: IUserData }, undefined>({
      query: () => ({
        url: '/user/me',
        method: 'GET',
        headers: {
          athorization: `bearer ${token}`,
        },
      }),
    }),

    loginUser: builder.mutation({
      query: (body) => ({
        url: '/user/login',
        method: 'POST',
        body,
      }),
    }),

    getAddress: builder.query<{ message: string; success: string; data: IMeAddAddress }, undefined>(
      {
        query: () =>
          // const token = await getToken(); // Retrieve the token
          // const token = await AsyncStorage.getItem('token')

          '/user-address/me',
      }
    ),

    postAddress: builder.mutation({
      query: (body) => ({
        url: '/user-address/add',
        method: 'POST',
        body,
      }),
    }),

    getPaperType: builder.query<
      { message: string; success: boolean; data: IPaperType[] },
      undefined
    >({
      query: (q) => `/printing-setup?${q}`,
    }),

    postPaperRequest: builder.mutation({
      query: (body) => ({
        url: '/printing-request/add',
        method: 'POST',
        body,
      }),
    }),
  }),
});
export const {
  useGetProductQuery,
  useGetBrandQuery,
  useGetUserQuery,
  useLoginUserMutation,
  useGetQueryProductQuery,
  useGetAddressQuery,
  usePostAddressMutation,
  useGetPaperTypeQuery,
  usePostPaperRequestMutation,
} = api;
