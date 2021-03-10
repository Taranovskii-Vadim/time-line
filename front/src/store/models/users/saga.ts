import { call, delay, put, takeEvery } from "redux-saga/effects";

import { usersApi } from "../../api/usersApi";
import { STATUS } from "../../constants";
import { setStatus, setUsers } from "./actions";

import { ETypes, IUser } from "./types";

function* getUsers() {
  try {
    yield put(setStatus(STATUS.pending));
    yield delay(2000);
    const data: IUser[] = yield call(usersApi.fetchUsers);
    yield put(setUsers(data));
  } catch (e) {
    console.log(e);
  }
}

export default function* usersSaga() {
  yield takeEvery(ETypes.FETCH_USERS, getUsers);
}
