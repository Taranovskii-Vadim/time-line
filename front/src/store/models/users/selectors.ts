import { createSelector } from "reselect";
import _ from "lodash";

import { STATUS } from "../../constants";
import { IRootState } from "../../types";
import { TState } from "./types";

const getBase = (state: IRootState): TState => state.users;

export const selectUsers = createSelector(getBase, state => state.data.items);

export const selectLoading = createSelector(
  getBase,
  state => state.status === STATUS.pending
);

export const selectSkills = createSelector(selectUsers, users => {
  return _(users)
    .map(user => user.skills)
    .flatten()
    .uniqBy("value")
    .map(skill => ({ ...skill, label: _.capitalize(skill.label) }))
    .value();
});
