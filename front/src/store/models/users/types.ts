import { IStatus } from "../../types";

export interface IUser {
  readonly id: string;
  name: string;
  surname: string;
  position: string;
}

interface IData {
  items: IUser[];
}

export type TState = IStatus<IData>;
