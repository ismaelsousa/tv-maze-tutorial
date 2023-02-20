import client from "../api";
import { FetchSeasonParams } from "./types";

export const fetchSeasons = async ({ showId }: FetchSeasonParams) => {
  const { data } = await client.get(`/shows/${showId}/seasons`);
  return data;
};
