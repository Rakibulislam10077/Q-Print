import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { IProduct } from '../../types/interfaces/product.interface';


export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://5.182.33.12:5000/api/v1'}),
    endpoints: (builder) => ({
        getProduct: builder.query<IProduct, undefined>({
            query: () => '/product'
        })
    })
})
export const {useGetProductQuery} = api;