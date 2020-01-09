import { combineReducers } from "redux";
import timerReducer from "./Timer/reducers";
import alertReducer from "./Alert/reducers";
import tasksLogReducer from "./Log/reducers";

export default combineReducers({
  timer: timerReducer,
  alert: alertReducer,
  tasksLog: tasksLogReducer
});
