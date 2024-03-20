import axios from "axios";
import { getFromAsyncStorage } from "../../utils/local-storage";
import { STORAGE_KEY } from "../../constants/storageKey";
import { ResponseSuccessType } from "../../types";

const instance = axios.create();
    instance.defaults.headers.post["Content-Type"] = "";
    instance.defaults.headers["Accept"] = "";
    instance.defaults.timeout = 60000;
    

    // Add a request interceptor
instance.interceptors.request.use(function (config) {
    // Do something before request is sent
    const accessToken = getFromAsyncStorage(STORAGE_KEY)
    if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`
    }
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
//@ts-ignore
instance.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
const responseObject:ResponseSuccessType = {
    data: response?.data?.data,
    meta: response?.data?.meta,
}


    return responseObject;
  }, function (error) {

const responseObject = {
    statusCode: error?.response?.statusCode,
    message: error?.response?.data?.message || 'Something went wrong',
    errorMessages: error?.response?.data?.message,
}

return responseObject;
    // return Promise.reject(error);
  });


export {instance}