import { combineReducers } from "redux";
import timerReducer from "./Timer/reducers";
import tasksLogReducer from "./Log/reducers";

export default combineReducers({
  timer: timerReducer,
  tasksLog: tasksLogReducer
});
