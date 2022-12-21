import { all } from "redux-saga/effects";
import user from "./user";

export default function* rootSaga() {
  return yield all([user])
}