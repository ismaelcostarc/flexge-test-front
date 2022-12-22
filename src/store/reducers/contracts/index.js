import * as types from "../../types/contracts";

const initialState = {
  contracts: [],
  page: 1,
  loading: false,
  error: "",
};

export const contractsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_CONTRACTS_REQUEST:
      return {
        ...state,
        loading: true,
        page: action.payload,
        error: "",
      };
    case types.SET_CONTRACTS_SUCCESS:
      return {
        ...state,
        loading: false,
        contracts: action.payload,
        error: "",
      };
    case types.SET_CONTRACTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
