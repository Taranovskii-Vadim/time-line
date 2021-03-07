import produce, { Draft } from "immer";
import { STATUS } from "../../constants";

import { TAction, TState, ETypes } from "./types";

const localUsers: TState["data"]["items"] = [
  {
    id: "1",
    surname: "тарановский",
    name: "вадим",
    position: "специалист",
    employmentType: "разработчик",
    avatarUrl:
      "https://gorets-media.ru/uploads/images/Hronogor/September/.thumbs/d1850c953d306532caaf5b0dee5a0c19_900_682_1.jpg",
  },
  {
    id: "2",
    surname: "потапов",
    name: "михаил",
    position: "младший специалист",
    employmentType: "дизайнер",
  },
  {
    id: "3",
    surname: "миронов",
    name: "михаил",
    position: "старший специалист",
    employmentType: "разработчик",
  },
];

// TODO: убрать localUsers из reducer

const initialState: TState = {
  data: {
    items: [...localUsers],
  },
  status: STATUS.initial,
};

export const usersReducer = produce((draft: Draft<TState>, action: TAction) => {
  if (action.type === ETypes.SEARCH_USERS) {
    draft.data.items = localUsers.filter(item => {
      const fullName = `${item.surname} ${item.name}`;
      return fullName.includes(action.payload);
    });
  }
}, initialState);
