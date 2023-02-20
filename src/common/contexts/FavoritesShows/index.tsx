import React from "react";
import { ShowModel } from "../../models/show.model";
import {
  FavoritesShowsContextProps,
  FavoritesShowsProps,
  FavoritesShowsState,
} from "./types";

export const FavoritesShowsContext =
  React.createContext<FavoritesShowsContextProps>(
    {} as FavoritesShowsContextProps
  );

const FavoritesShows = ({ children }: FavoritesShowsProps) => {
  /**
   * States
   */
  const [favoritesShows, setFavoritesShows] =
    React.useState<FavoritesShowsState>({});

  /**
   * Callback
   */
  const addFavoriteShow = (show: ShowModel) => {
    setFavoritesShows((prevState) => ({
      ...prevState,
      [show.id]: show,
    }));
  };

  const removeFavoriteShow = (showId: number | string) => {
    setFavoritesShows((prevState) => {
      const { [showId]: _, ...rest } = prevState;
      return rest;
    });
  };

  return (
    <FavoritesShowsContext.Provider
      value={{ addFavoriteShow, favoritesShows, removeFavoriteShow }}
    >
      {children}
    </FavoritesShowsContext.Provider>
  );
};

export default FavoritesShows;
