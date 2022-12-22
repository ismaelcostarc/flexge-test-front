import * as types from "../../types/contracts";

export function getContractsRequest(page, token) {
  return {
    type: types.GET_CONTRACTS_REQUEST,
    payload: page,
    token
  };
}

export function deleteContractRequest(id, token) {
  return {
    type: types.DELETE_CONTRACT_REQUEST,
    payload: id,
    token
  };
}

export function setContractsSuccess(contracts) {
  return {
    type: types.SET_CONTRACTS_SUCCESS,
    payload: contracts
  };
}

export function setContractsFailure(error) {
  return {
    type: types.SET_CONTRACTS_FAILURE,
    payload: error
  };
}
