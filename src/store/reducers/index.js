import { combineReducers } from "redux";
import { contractsReducer } from "./contracts";

const rootReducer = combineReducers({
  contracts: contractsReducer,
});

export default rootReducer;
