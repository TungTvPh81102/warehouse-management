import axiosClient from "./axiosClient";

const handleAPI = async (
  url: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data?: any,
  method?: "post" | "put" | "get" | "delete"
) => {
  return await axiosClient(url, {
    method: method || "get",
    data,
  });
};

export default handleAPI;
