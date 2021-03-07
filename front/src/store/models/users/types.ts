import { Action } from "redux";
import { IStatus } from "../../types";

// Data

export interface ISkill {
  value: string;
  color: string;
}

export interface IUser {
  readonly id: string;
  name: string;
  surname: string;
  position: string;
  employmentType: string;
  skills: ISkill[];
  avatarUrl?: string;
}

interface IData {
  items: IUser[];
}

// actions

export enum ETypes {
  SEARCH_USERS = "users/SEARCH_USERS",
  FILTER_BY_SKILLS = "users/FILTER_BY_SKILLS",
}

export interface ISearchUsers extends Action<ETypes.SEARCH_USERS> {
  payload: string;
}

export interface IFilterBySkills extends Action<ETypes.FILTER_BY_SKILLS> {
  payload: string[];
}

export type TState = IStatus<IData>;

export type TAction = ISearchUsers | IFilterBySkills;
