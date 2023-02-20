import { PeopleByTextModel } from "../../common/models/peopleByText.model";
import client from "../api";
import { FetchPeopleByTextParams } from "./types";

export const fetchPeopleByText = async ({ q }: FetchPeopleByTextParams) => {
  const { data } = await client.get<Array<PeopleByTextModel>>(
    `/search/people`,
    {
      params: {
        q,
      },
    }
  );

  return data;
};
