import { combineReducers } from "redux";
import timerReducers from "./Timer/reducers";

export default combineReducers({
  timer: timerReducers
});
