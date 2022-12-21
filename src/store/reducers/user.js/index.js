import * as types from "../../types";

const initialState = {
  user: {
    avatar_url: "",
    name: "",
    message: ""
  },
  loading: false,
  error: "",
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_USER_REQUEST:
      return {
        ...state,
        loading: true,
        user: action.payload,
        error: "",
      };
    case types.GET_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
        error: "", 
      };
    case types.GET_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
