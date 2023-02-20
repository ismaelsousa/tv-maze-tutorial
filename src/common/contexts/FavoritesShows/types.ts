import { ShowModel } from "../../models/show.model";

export type FavoritesShowsState = {
  [key: string | number]: ShowModel;
};

export interface FavoritesShowsContextProps {
  addFavoriteShow: (show: ShowModel) => void;
  removeFavoriteShow: (showId: string | number) => void;
  favoritesShows: FavoritesShowsState;
}

export interface FavoritesShowsProps {
  children: React.ReactNode;
}
