import { ETypes, ISearchUsers } from "./types";

export const searchUsers = (payload: string): ISearchUsers => ({
  type: ETypes.SEARCH_USERS,
  payload,
});
