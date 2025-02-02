import axios, { AxiosRequestConfig, AxiosResponse, RawAxiosRequestHeaders } from "axios";

const baseUrl = import.meta.env.VITE_REACT_API_URL 

const api = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

export const makeApiRequest = async <T>(
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH",
  url: string,
  data?: any,
  additionalHeaders: RawAxiosRequestHeaders = {}
): Promise<T> => {
  const token = localStorage.getItem("token");

  if (typeof additionalHeaders !== "object" || additionalHeaders === null) {
    throw new Error("additionalHeaders should be an object");
  }


  const headers: RawAxiosRequestHeaders = {
    "Content-Type": "application/json",
    ...(token ? { token: token } : {}),
    ...additionalHeaders,
  };

  try {
    const response: AxiosResponse<T> = await api.request({
      method,
      url,
      data,
      headers,
    });
    return response.data;
  } catch (error: any) {
    throw error.response ? error.response.data : error;
  }
};
