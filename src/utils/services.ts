import axios, { AxiosResponse } from "axios";
import { IFetchDesserts } from "./types";

const instance = axios.create({
  baseURL: "http://localhost:5002/desserts/",
});

export const getAll = async (
  args: IFetchDesserts
): Promise<AxiosResponse | undefined> => {
  const { page } = args;

  try {
    const response = await instance.get("/", {
      params: { page }, // 👈 send page as query param
    });
    return response;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error.response; // typed as AxiosResponse | undefined
    } else {
      console.error("Unexpected error:", error);
      throw error; // rethrow non-Axios errors
    }
  }
};
