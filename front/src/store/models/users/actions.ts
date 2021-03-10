import {
  ETypes,
  IFetchUsers,
  IFilterBySkills,
  ISearchUsers,
  ISetStatus,
  ISetUsers,
  TState,
} from "./types";

export const fetchUsers = (): IFetchUsers => ({ type: ETypes.FETCH_USERS });

export const setUsers = (payload: TState["data"]["items"]): ISetUsers => ({
  type: ETypes.SET_USERS,
  payload,
});

export const setStatus = (payload: TState["status"]): ISetStatus => ({
  type: ETypes.SET_STATUS,
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
