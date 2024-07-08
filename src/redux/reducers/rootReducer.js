import { combineReducers } from "redux";
import employeeReducer from "./employeeReducer";

const rootReducer = combineReducers({
  employeeApp: employeeReducer,
});

export default rootReducer;
