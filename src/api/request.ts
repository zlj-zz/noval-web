import axios from "axios";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

// custom env parameter must start with 'VITE_'
const baseUrl: string = import.meta.env.VITE_REQUEST_BASE_URL

const axiosInstance: AxiosInstance = axios.create(
  {
    baseURL: baseUrl,
    timeout: 15000,
  }
)

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    if (response.status == 200)
      return response.data
    else {
      console.log(response.status)
      return response
    }
  },
  (error: any) => {
    const { resp } = error
    if (resp) {
      console.log(resp.status)
      return Promise.reject(resp.status)
    } else {
      console.log('network has some error!')
    }
  }
)

axiosInstance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    return config;
  },
  (error: any) => {
    return Promise.reject(error);
  }
)

export default axiosInstance
export const request = axiosInstance.request
