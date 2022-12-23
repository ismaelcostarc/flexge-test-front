import * as types from "../../types/contracts";
import { call, put, all, takeLatest, select } from "redux-saga/effects";
import { setContractsFailure, setContractsSuccess } from "../../actions";
import { api } from "../../../services/api";

let apiResponse;

const contractsRequest = async (page, token) => {
  try {
    const contractsResponse = await api.get(`contract?page=${page}&pageSize=10`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });

    const pagesResponse = await api.get(`pages?pageSize=10`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });

    apiResponse = {
      pages: pagesResponse.data,
      list: contractsResponse.data
    };

    return true;
  } catch (error) {
    throw error;
  }
};

const deleteContractRequest = async (id, token) => {
  try {
    await api.delete(`contract/${id}`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });

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

export function* deleteContractSaga(action) {
  const getPage = (state) => state.contracts.page;
  
  try {
    yield call(deleteContractRequest, action.payload, action.token);
    const page = yield select(getPage);
    yield call(contractsRequest, page, action.token);
    yield put(setContractsSuccess(apiResponse));
  } catch (error) {
    yield put(setContractsFailure(error));
  }
}

export default all([
  takeLatest(types.GET_CONTRACTS_REQUEST, contractsSaga),
  takeLatest(types.DELETE_CONTRACT_REQUEST, deleteContractSaga),
]);
