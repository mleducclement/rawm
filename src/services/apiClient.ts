import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  count: number;
  results: T[];
  next: string | null;
}

const instance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: import.meta.env.VITE_RAWG_API_KEY
  }
});

export class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  get = async (config?: AxiosRequestConfig) => {
    return (await instance.get<FetchResponse<T>>(this.endpoint, config)).data;
  };

  getById = async (id: number | string) => {
    return (await instance.get<T>(this.endpoint + "/" + id)).data;
  }
}

export default APIClient;