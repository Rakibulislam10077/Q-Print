import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IProduct } from '../../types/interfaces/product.interface';
import { IBrand } from '../../types/interfaces/brand.interface';
import { IUserData } from '../../types/interfaces/get_me.user.interface';
import { IMeAddAddress } from '../../types/interfaces/me.address.interface';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';

// Define a selector to access the access token from your Redux store

export const getToken = async () => {
 const token = await AsyncStorage.getItem('token');
  if (token) {
    return token;
  } else {
    return '';
  }
};


// const accessToken =
//   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJwREhKeGM4UEY4IiwiX2lkIjoiNjViZTNmYTZhNDlkOTRjZWM3MDQ3M2Y1IiwiZnVsbE5hbWUiOiJOIEkgUmltb24iLCJyb2xlIjoiQWRtaW4iLCJwaG9uZU51bWJlciI6IjAxNzE1NDk0ODQ2IiwiaXNQaG9uZU51bWJlclZlcmlmaWVkIjp0cnVlLCJpc0VtYWlsVmVyaWZpZWQiOmZhbHNlLCJpYXQiOjE3MDk1MzU3MTQsImV4cCI6MTcwOTYyMjExNH0.ju-1en3CgOWQxhIaNcmchpt5eEL4PXtySuW2VvOGigM';
const url = 'http://5.182.33.12:5000/api/v1';
export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
     baseUrl: url,
     prepareHeaders: async (headers) => {
      // Retrieve the token from AsyncStorage
      const token = await getToken();
      if (token) {
        // Set the authorization header if the token exists
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },

     }),
  endpoints: (builder) => ({
    getProduct: builder.query<{ message: string; success?: boolean; data: IProduct[] }, undefined>({
      query: () => '/product',
    }),
    getQueryProduct: builder.query<{ message: string; success?: boolean; data: IProduct[] },string>({
      query: (categoryName) => `/product?category.categoryName=${categoryName}`,
    }),
    getBrand: builder.query<{ success: boolean; message: string; data: IBrand[] }, undefined>({
      query: () => '/brand',
    }),
 

    getUser: builder.query<{ success: boolean; message: string; data: IUserData }, void>({
      query: () => '/user/me', // Set the bearer token in the header
          
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
} = api;
