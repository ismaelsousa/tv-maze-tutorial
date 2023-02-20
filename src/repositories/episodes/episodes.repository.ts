import client from "../api";
import { FetchEpisodeBySeasonParams } from "./types";

export const fetchEpisodesBySeason = async ({
  seasonId,
}: FetchEpisodeBySeasonParams) => {
  const { data } = await client.get(`/seasons/${seasonId}/episodes`);
  return data;
};
