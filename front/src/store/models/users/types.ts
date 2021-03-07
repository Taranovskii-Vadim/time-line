import { Action } from "redux";
import { IStatus } from "../../types";

// Data
export interface IUser {
  readonly id: string;
  name: string;
  surname: string;
  position: string;
  employmentType: string;
  avatarUrl?: string;
}

interface IData {
  items: IUser[];
}

// actions

export enum ETypes {
  SEARCH_USERS = "users/SEARCH_USERS",
}

export interface ISearchUsers extends Action<ETypes.SEARCH_USERS> {
  payload: string;
}

export type TState = IStatus<IData>;

export type TAction = ISearchUsers;
