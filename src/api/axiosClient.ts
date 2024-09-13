import axios from "axios";
import queryString from "query-string";
import { localDataNames } from "../constants/appInfo";

const axiosClient = axios.create({
  baseURL: "http://localhost:8080/api",
  paramsSerializer: (params) => queryString.stringify(params),
});

const getAccessToken = () => {
  const res = localStorage.getItem(localDataNames.authData);
  return res ? JSON.parse(res).token : null;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
axiosClient.interceptors.request.use(async (config: any) => {
  const token = getAccessToken();

  config.headers = {
    Authorization: token ? `Bearer ${token}` : "",
    Accept: "application/json",
    ...config.headers,
  };

  return { ...config, data: config.data ?? null };
});

axiosClient.interceptors.response.use(
  (res) => {
    if (res.data && res.status >= 200 && res.status < 300) {
      return res.data;
    } else {
      return Promise.reject(res.data);
    }
  },
  (err) => {
    const { respone } = err;
    return Promise.reject(respone.data);
  }
);
export default axiosClient;
