import {
  ETypes,
  IFetchUsers,
  IFilterBySkills,
  ISearchUsers,
  ISetUsers,
  TState,
} from "./types";

export const fetchUsers = (): IFetchUsers => ({ type: ETypes.FETCH_USERS });

export const setUsers = (payload: TState["data"]["items"]): ISetUsers => ({
  type: ETypes.SET_USERS,
  payload,
});

export const searchUsers = (payload: string): ISearchUsers => ({
  type: ETypes.SEARCH_USERS,
  payload,
});

export const filterBySkills = (payload: string[]): IFilterBySkills => ({
  type: ETypes.FILTER_BY_SKILLS,
  payload,
});
