import { call, delay, put, takeEvery } from "redux-saga/effects";

import { getRandomHex } from "../../../utils";

import { usersApi } from "../../api/usersApi";
import { STATUS } from "../../constants";
import { setStatus, setUsers } from "./actions";

import { ETypes, IUser } from "./types";

function* getUsers() {
  try {
    yield put(setStatus(STATUS.pending));
    yield delay(2000);
    const data: IUser[] = yield call(usersApi.fetchUsers);
    const users = data.map(user => ({
      ...user,
      // TODO: не генерить рандомный hex а сделать подборку цветов
      projects: user.projects.map(prj => ({ ...prj, color: getRandomHex() })),
    }));
    yield put(setUsers(users));
  } catch (e) {
    console.log(e);
  }
}

export default function* usersSaga() {
  yield takeEvery(ETypes.FETCH_USERS, getUsers);
}
