import { createSelector } from "reselect";
import _ from "lodash";

import { IRootState } from "../../types";
import { TState } from "./types";

const getBase = (state: IRootState): TState => state.users;

export const selectUsers = createSelector(getBase, state => state.data.items);
