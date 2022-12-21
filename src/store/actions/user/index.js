import * as types from "../../types";

export function getUserRequest(name) {
  return {
    type: types.GET_USER_REQUEST,
    payload: name
  };
}

export function getUserSuccess(user) {
  return {
    type: types.GET_USER_SUCCESS,
    payload: user
  };
}

export function getUserFailure(error) {
  return {
    type: types.GET_USER_FAILURE,
    payload: error
  };
}
