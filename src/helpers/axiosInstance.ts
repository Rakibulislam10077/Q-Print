// axiosInstance.js
// import { authkey } from "@/constants/storageKey";
// import { getFromLocalStorage } from "@/utils/local-storage";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const instance = axios.create();
instance.defaults.headers.post["Content-Type"] = "";
instance.defaults.headers["Accept"] = "";
instance.defaults.timeout = 60000;

// Add a request interceptor
instance.interceptors.request.use(
 async function (config) {
    // Do something before request is sent
    const accessToken = await AsyncStorage.getItem(token);
    if (accessToken) {
      config.headers.Authorization = bearer ${accessToken};
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
instance.interceptors.response.use(
  //@ts-ignore
  function (response) {
    const responseObject = {
      data: response?.data,
      meta: response?.data?.meta,
    };
    return responseObject;
  },
  function (error) {
    const responseObject = {
      statusCode: error?.response?.data?.statusCode  500,
      message: error?.response?.data?.message  "Something went wrong",
      errorMessages: error?.response?.data?.message,
    };
    return responseObject;
  }
);

export { instance };