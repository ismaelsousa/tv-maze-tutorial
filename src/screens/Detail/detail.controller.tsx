import { useEffect, useState } from "react";
import { EpisodeModel } from "../../common/models/episode.model";
import { SeasonModel } from "../../common/models/season.model";
import { fetchEpisodesBySeason } from "../../repositories/episodes/episodes.repository";
import { fetchSeasons } from "../../repositories/seasons/seasons.repository";
import { UseDetailController } from "./types";

const useDetailController = ({ show }: UseDetailController) => {
  /**
   * States
   */
  const [moreSummary, setMoreSummary] = useState<boolean>(false);
  const [seasons, setSeasons] = useState<Array<SeasonModel>>([]);
  const [selectedSeason, setSelectedSeason] = useState<SeasonModel>();
  const [episodes, setEpisodes] = useState<EpisodeModel[]>([]);

  /**
   * Effects
   */
  useEffect(() => {
    fetchSeasons({ showId: show.id }).then(setSeasons);
  }, [show]);

  useEffect(() => {
    if (seasons.length > 0) {
      setSelectedSeason(seasons[0]);
    }
  }, [seasons]);

  useEffect(() => {
    if (selectedSeason) {
      fetchEpisodesBySeason({ seasonId: selectedSeason.id }).then(setEpisodes);
    }
  }, [selectedSeason]);

  return {
    moreSummary,
    episodes,
    seasons,
    selectedSeason,
  };
};

export default useDetailController;
