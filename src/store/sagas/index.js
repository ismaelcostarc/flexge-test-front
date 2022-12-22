import { all } from "redux-saga/effects";
import contracts from "./contracts";

export default function* rootSaga() {
  return yield all([contracts])
}