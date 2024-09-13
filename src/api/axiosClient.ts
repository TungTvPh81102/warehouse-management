import axios from "axios";
import queryString from "query-string";

const axiosClient = axios.create({
  baseURL: "http://localhost:8080/api",
  paramsSerializer: (params) => queryString.stringify(params),
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
axiosClient.interceptors.request.use(async (config: any) => {
  const token = localStorage.getItem("token");

  config.headers = {
    Authorization: token ? `Bearer ${token}` : "",
    Accept: "application/json",
    ...config.headers,
  };

  return config;
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
