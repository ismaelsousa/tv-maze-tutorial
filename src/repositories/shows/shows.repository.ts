import client from "../api";
import { FetchShowsParams } from "./types";

export const fetchShows = async ({ page }: FetchShowsParams) => {
  const { data } = await client.get("/shows", { params: { page } });
  return data;
};
