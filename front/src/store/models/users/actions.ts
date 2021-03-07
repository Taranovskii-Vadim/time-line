import { ETypes, IFilterBySkills, ISearchUsers } from "./types";

export const searchUsers = (payload: string): ISearchUsers => ({
  type: ETypes.SEARCH_USERS,
  payload,
});

export const filterBySkills = (payload: string[]): IFilterBySkills => ({
  type: ETypes.FILTER_BY_SKILLS,
  payload,
});
