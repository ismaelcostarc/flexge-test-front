import * as types from "../../types";
import { call, put, all, takeLatest } from "@redux-saga/core/effects";
import { getUserFailure, getUserSuccess } from "../../actions";

let userApi;

const userRequest = async (name) => {
  try {
    const request = await fetch(`https://api.github.com/users/${name}`, {
      headers: {
        Authorization: "token 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",
      },
    });
    const response = await request.json();
    userApi = response;
    return true;
  } catch (error) {
    throw error;
  }
};

export function* userData(action) {
  try {
    yield call(userRequest, action.payload);
    yield put(getUserSuccess(userApi));
  } catch (error) {
    yield put(getUserFailure(error));
  }
}

export default all([takeLatest(types.GET_USER_REQUEST, userData)]);
