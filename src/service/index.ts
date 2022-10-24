import MYRequest from "./request";
import { BASE_URL, TIME_OUT } from "./request/config";
import cache from "@/utils/cache";

const myRequest = new MYRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      const token = cache.getCache("token");
      if (token) {
        config.headers!.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    responseInterceptor: (res) => {
      return res;
    },
  },
});

export default myRequest;
