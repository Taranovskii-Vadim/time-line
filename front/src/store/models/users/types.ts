import { Action } from "redux";
import { IStatus } from "../../types";

// Data

export interface ISkill {
  value: string;
  label: string;
}

export type TTypeTask = "task" | "bug" | "feature" | "story";

export interface ITask {
  readonly id: string;
  from: Date;
  to: Date;
  taskType: TTypeTask;
}

export interface IProject {
  readonly id: string;
  title: string;
  tasks: ITask[];
}

export interface IUser {
  readonly id: string;
  name: string;
  surname: string;
  position: string;
  employmentType: string;
  skills: ISkill[];
  avatarUrl?: string;
  projects: IProject[];
}

interface IData {
  items: IUser[];
}

// actions

export enum ETypes {
  FETCH_USERS = "users/FETCH_USERS",
  SET_STATUS = "users/SET_STATUS",
  SET_USERS = "users/SET_USERS",
  SEARCH_USERS = "users/SEARCH_USERS",
  FILTER_BY_SKILLS = "users/FILTER_BY_SKILLS",
}

export interface IFetchUsers extends Action<ETypes.FETCH_USERS> {}

export interface ISetUsers extends Action<ETypes.SET_USERS> {
  payload: TState["data"]["items"];
}

export interface ISetStatus extends Action<ETypes.SET_STATUS> {
  payload: TState["status"];
}

export interface ISearchUsers extends Action<ETypes.SEARCH_USERS> {
  payload: string;
}

export interface IFilterBySkills extends Action<ETypes.FILTER_BY_SKILLS> {
  payload: string[];
}

export type TState = IStatus<IData>;

export type TAction = ISearchUsers | IFilterBySkills | ISetUsers | ISetStatus;
