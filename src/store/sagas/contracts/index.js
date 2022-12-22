import * as types from "../../types/contracts";
import { call, put, all, takeLatest } from "@redux-saga/core/effects";
import { setContractsFailure, setContractsSuccess } from "../../actions";
import { api } from "../../../services/api";

let apiResponse;

const contractsRequest = async (page, token) => {
  try {
    const { data } = await api.get(`contract?page=${page}&pageSize=10`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });

    apiResponse = data;

    return true;
  } catch (error) {
    throw error;
  }
};

export function* contractsSaga(action) {
  try {
    yield call(contractsRequest, action.payload, action.token);
    yield put(setContractsSuccess(apiResponse));
  } catch (error) {
    yield put(setContractsFailure(error));
  }
}

export default all([takeLatest(types.GET_CONTRACTS_REQUEST, contractsSaga)]);
