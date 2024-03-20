import type { BaseQueryFn } from '@reduxjs/toolkit/query'
import axios from 'axios'
import type { AxiosRequestConfig, AxiosError } from 'axios'
import { IMeta } from '../../types'
import { instance as axiosInstane } from './axiosInstance'
 
export const axiosBaseQuery =
  (
    { baseUrl }: { baseUrl: string } = { baseUrl: '' }
  ): BaseQueryFn<
    {
      url: string
      method?: AxiosRequestConfig['method']
      data?: AxiosRequestConfig['data']
      params?: AxiosRequestConfig['params']
      // headers?: AxiosRequestConfig['headers']
      meta?: IMeta
      contentType?: string
    },
    unknown,
    unknown
  > =>
  async ({ url, method, data, params, contentType}) => {
    try {
      console.log(data);
      
      const result = await axiosInstane({
        url: baseUrl + url,
        method,
        data,
        params,
        headers:{contentType: contentType}
      })
      return { data: result }
    } catch (axiosError) {
      const err = axiosError as AxiosError
      return {
        error: {
          status: err.response?.status,
          message: err.message,
          data: err.response?.data || err.message,
        },
      }
    }
  }

