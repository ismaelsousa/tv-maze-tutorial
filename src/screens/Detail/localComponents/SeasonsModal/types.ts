import { SeasonModel } from "../../../../common/models/season.model";

export interface SeasonsModalProps {
  visible: boolean;
  setVisible: (visible: boolean) => void;
  seasons: SeasonModel[];
  selectedSeason: SeasonModel;
  setSelectedSeason: (season: SeasonModel) => void;
}
