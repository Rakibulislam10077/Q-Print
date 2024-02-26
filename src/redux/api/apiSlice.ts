import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {  IProduct } from '../../types/interfaces/product.interface';
import { IBrand } from '../../types/interfaces/brand.interface';
import { IUserData } from '../../types/interfaces/get_me.user.interface';
import { IAddAddress } from '../../types/interfaces/add.address.interface';


// Define a selector to access the access token from your Redux store
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJwREhKeGM4UEY4IiwiX2lkIjoiNjViZTNmYTZhNDlkOTRjZWM3MDQ3M2Y1IiwiZnVsbE5hbWUiOiJOIEkgUmltb24iLCJyb2xlIjoiQWRtaW4iLCJwaG9uZU51bWJlciI6IjAxNzE1NDk0ODQ2IiwiaXNQaG9uZU51bWJlclZlcmlmaWVkIjp0cnVlLCJpc0VtYWlsVmVyaWZpZWQiOmZhbHNlLCJpYXQiOjE3MDg5NTA1ODUsImV4cCI6MTcwOTAzNjk4NX0.m1w6UdZ3_C2tSPIpiB7yAzSwBjpPHJHgnHVpxDN2CDs'
const url = 'http://5.182.33.12:5000/api/v1'
export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: url}),
    endpoints: (builder) => ({
        getProduct: builder.query<{message:string,success?:boolean,data:IProduct[]}, undefined>({
            query: () => '/product'
        }),
        getBrand: builder.query<{success: boolean, message: string, data: IBrand[]}, undefined>({
            query: () => "/brand"
        }),
        getUser: builder.query<{success: boolean, message: string, data: IUserData}, undefined>({
            query: () => ({
                url:"/user/me",
                method:"GET",
                headers:{
                "authorization":`bearer ${token}`
            }}),
            
        }),
        postAddress: builder.mutation<{success: boolean, message: string, data: IAddAddress}, undefined>({
            query: () =>({
                url: '/user-address/add',
                method: 'PATCH',
                // body: patch
            })
        })
    })
})
export const {useGetProductQuery, useGetBrandQuery, useGetUserQuery} = api;


