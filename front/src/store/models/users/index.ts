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
    skills: [
      { value: "react", color: "blue" },
      { value: "nodejs", color: "green" },
    ],
    avatarUrl:
      "https://gorets-media.ru/uploads/images/Hronogor/September/.thumbs/d1850c953d306532caaf5b0dee5a0c19_900_682_1.jpg",
  },
  {
    id: "2",
    surname: "потапов",
    name: "михаил",
    position: "младший специалист",
    employmentType: "дизайнер",
    skills: [{ value: "react", color: "blue" }],
  },
  {
    id: "3",
    surname: "миронов",
    name: "михаил",
    position: "старший специалист",
    employmentType: "разработчик",
    skills: [{ value: "angular", color: "red" }],
  },
];

// TODO: убрать localUsers из reducer

const initialState: TState = {
  data: {
    items: [...localUsers],
  },
  status: STATUS.initial,
};

// TODO: сделать нормальный поиск

export const usersReducer = produce((draft: Draft<TState>, action: TAction) => {
  if (action.type === ETypes.SEARCH_USERS) {
    draft.data.items = localUsers.filter(item => {
      const fullName = `${item.surname} ${item.name}`;
      return fullName.includes(action.payload);
    });
  } else if (action.type === ETypes.FILTER_BY_SKILLS) {
    if (action.payload.length) {
      draft.data.items = localUsers.filter(item => {
        const skills = item.skills.map(skill => skill.value);
        return action.payload.every(skill => skills.includes(skill));
      });
    } else {
      draft.data.items = localUsers;
    }
  }
}, initialState);
