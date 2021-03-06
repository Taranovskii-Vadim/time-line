import produce, { Draft } from "immer";
import { STATUS } from "../../constants";
import { StupidType } from "../../types";

import { TState } from "./types";

const initialState: TState = {
  data: {
    items: [
      {
        id: "1",
        surname: "тарановский",
        name: "вадим",
        position: "специалист",
      },
      {
        id: "2",
        surname: "потапов",
        name: "михаил",
        position: "младший специалист",
      },
      {
        id: "3",
        surname: "миронов",
        name: "андрей",
        position: "старший специалист",
      },
    ],
  },
  status: STATUS.initial,
};

export const usersReducer = produce(
  (draft: Draft<TState>, action: StupidType) => {},
  initialState
);
