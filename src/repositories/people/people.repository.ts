import { CastCreditModel } from "../../common/models/cast.credits.model";
import client from "../api";
import { FetchCastCreditsByPersonParams } from "./types";

export const fetchCastCreditsByPerson = async ({
  personId,
}: FetchCastCreditsByPersonParams) => {
  const { data } = await client.get<Array<CastCreditModel>>(
    `/people/${personId}/castcredits?embed=show`
  );
  return data;
};
