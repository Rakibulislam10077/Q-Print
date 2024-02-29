import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IProduct } from '../../types/interfaces/product.interface';
import { IBrand } from '../../types/interfaces/brand.interface';
import { IUserData } from '../../types/interfaces/get_me.user.interface';
import { IMeAddAddress } from '../../types/interfaces/me.address.interface';

// Define a selector to access the access token from your Redux store
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJwREhKeGM4UEY4IiwiX2lkIjoiNjViZTNmYTZhNDlkOTRjZWM3MDQ3M2Y1IiwiZnVsbE5hbWUiOiJOIEkgUmltb24iLCJyb2xlIjoiQWRtaW4iLCJwaG9uZU51bWJlciI6IjAxNzE1NDk0ODQ2IiwiaXNQaG9uZU51bWJlclZlcmlmaWVkIjp0cnVlLCJpc0VtYWlsVmVyaWZpZWQiOmZhbHNlLCJpYXQiOjE3MDkxODY3MjEsImV4cCI6MTcwOTI3MzEyMX0.p6HIklaHeJgXN8b1BKcAP_aOUftjf1mD143UPmcp4s8';
const url = 'http://5.182.33.12:5000/api/v1';
export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: url}),
  endpoints: (builder) => ({
    getProduct: builder.query<{ message: string; success?: boolean; data: IProduct[] }, undefined>({
      query: () => '/product',
    }),
    getQueryProduct: builder.query<{message: string; success?: boolean; data: IProduct[]}, string>({
      query: (categoryName) => `/product?category.categoryName=${categoryName}`
    }),
    getBrand: builder.query<{ success: boolean; message: string; data: IBrand[] }, undefined>({
      query: () => '/brand',
    }),
    getUser: builder.query<{ success: boolean; message: string; data: IUserData }, undefined>({
      query: () => ({
        url: '/user/me',
        method: 'GET',
        headers: {
          authorization: `bearer ${token}`,
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
    getAddress: builder.query<{message: string, success: string, data: IMeAddAddress}, undefined>({
      query: () =>({
       url: '/user-address/me',
       method: 'GET',
       headers:{
        authorization: `bearer ${token}`,
       } 
      })
    })
  }),
});
export const { useGetProductQuery, useGetBrandQuery, useGetUserQuery, useLoginUserMutation, useGetQueryProductQuery, useGetAddressQuery } = api;
