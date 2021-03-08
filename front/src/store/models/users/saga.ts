import { call, put, takeEvery } from "redux-saga/effects";

import { usersApi } from "../../api/usersApi";
import { setUsers } from "./actions";

import { ETypes, IUser } from "./types";

function* getUsers() {
  try {
    // TODO action который меняет статус на pending в ui отображать loader
    const data: IUser[] = yield call(usersApi.fetchUsers);
    yield put(setUsers(data));
  } catch (e) {
    console.log(e);
  }
}

export default function* usersSaga() {
  yield takeEvery(ETypes.FETCH_USERS, getUsers);
}
