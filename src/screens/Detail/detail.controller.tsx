import { format } from "date-fns";
import { useEffect, useMemo, useState } from "react";
import { EpisodeModel } from "../../common/models/episode.model";
import { SeasonModel } from "../../common/models/season.model";
import { removeHtmlFromString } from "../../common/utils/html";
import { noSummaryString } from "../../common/utils/message";
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
   * Memos
   */
  const summaryWithoutHtml = useMemo(() => {
    if (show.summary) {
      return removeHtmlFromString(show.summary);
    }

    return noSummaryString;
  }, [show]);

  const formattedDate = useMemo(() => {
    if (show.status === "Running") {
      return format(new Date(), "PP");
    } else if (show?.ended) {
      return format(new Date(show.ended), "PP");
    } else {
      return "N/A";
    }
  }, [show]);

  const genres = useMemo(() => {
    return show.genres.join(", ");
  }, [show]);

  const schedule = useMemo(() => {
    const { days, time } = show.schedule;
    let schedule = "";
    if (days.length > 0) {
      schedule = days.join(", ");
    }
    if (time) {
      schedule = `${schedule} at ${time}`;
    }
    return schedule;
  }, [show]);

  /**
   * Callback
   */
  const toggleMoreSummary = () => setMoreSummary((old) => !old);

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
    summaryWithoutHtml,
    formattedDate,
    genres,
    schedule,
    moreSummary,
    toggleMoreSummary,
    seasons,
    selectedSeason,
    setSelectedSeason,
    episodes,
  };
};

export default useDetailController;
