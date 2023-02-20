import { useMemo, useState } from "react";

import useFavoritesShows from "../../common/hooks/useFavoritesShows";
import { SortedBy } from "./types";

const useFavoritesController = () => {
  const { favoritesShows } = useFavoritesShows();
  const [sortedOrder, setSortedOrder] = useState<SortedBy>("asc");

  const favoritesList = useMemo(() => {
    if (Object.keys(favoritesShows).length) {
      return Object.values(favoritesShows).sort((a: any, b: any) => {
        if (sortedOrder === "asc") {
          return a.name.localeCompare(b.name);
        } else {
          return b.name.localeCompare(a.name);
        }
      });
    }
    return [];
  }, [favoritesShows, sortedOrder]);

  return { favoritesList, sortedOrder, setSortedOrder };
};

export default useFavoritesController;
