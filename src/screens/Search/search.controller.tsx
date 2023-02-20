import { useCallback, useEffect, useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import { PeopleByTextModel } from "../../common/models/peopleByText.model";
import { ShowByTextModel } from "../../common/models/showByText.model";
import { fetchPeopleByText } from "../../repositories/peopleByText/peopleByText.repository";
import { fetchShowByText } from "../../repositories/showsByText/showsByText.repository";

const useSearchController = () => {
  /**
   * States
   */
  const [shows, setShows] = useState<ShowByTextModel[]>([]);
  const [people, setPeople] = useState<PeopleByTextModel[]>([]);
  const [searchText, setSearchText] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [searchType, setSearchType] = useState<"people" | "show">("show");

  /**
   * Callbacks
   */
  const handleSearchShows = useCallback(async (search?: string) => {
    if (!search) {
      setShows([]);
      return;
    }
    try {
      setLoading(true);
      const response = await fetchShowByText({ q: search });
      setShows(response);
    } catch (error) {
      console.log(
        "🚀 ~ file: search.controller.tsx:29 ~ handleSearchShows ~ error",
        error
      );
    } finally {
      setLoading(false);
    }
  }, []);
  const handleSearchPeople = useCallback(async (search?: string) => {
    if (!search) {
      setPeople([]);
      return;
    }
    try {
      setLoading(true);
      const response = await fetchPeopleByText({ q: search });
      setPeople(response);
    } catch (error) {
      console.log(
        "🚀 ~ file: search.controller.tsx:29 ~ handleSearchShows ~ error",
        error
      );
    } finally {
      setLoading(false);
    }
  }, []);

  /**
   * Debounce
   */
  const debouncedSearchShows = useDebouncedCallback(handleSearchShows, 700);
  const debouncedSearchPeople = useDebouncedCallback(handleSearchPeople, 700);

  /**
   * Effects
   */
  useEffect(() => {
    if (searchText.length === 0) {
      debouncedSearchShows();
      debouncedSearchPeople();
    }
  }, [searchText, debouncedSearchShows, debouncedSearchPeople]);

  useEffect(() => {
    if (searchText.length > 0) {
      debouncedSearchPeople(searchText);
      debouncedSearchShows(searchText);
    }
  }, [searchText, debouncedSearchShows, debouncedSearchPeople]);

  return {
    searchText,
    setSearchText,
    shows,
    people,
    loading,
    searchType,
    setSearchType,
  };
};

export default useSearchController;
