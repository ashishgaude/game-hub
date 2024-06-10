import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  count: number;
  results: T[];
}


const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: { key: "a55266f876de4100aa06a3f06e2abd71" },
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }


  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance.get<FetchResponse<T>>(this.endpoint, config).then(res => res.data);
  }
}

export default APIClient;