import { START_TIMER, STOP_TIMER, SET_TIME, SET_TASK_NAME } from "./actions";

const initialState = {
  time: "00:00:00",
  timerIsStarted: false,
  timerStartTime: null,
  timerStopTime: null,
  taskName: ""
};

export default function reducers(state = initialState, action) {
  switch (action.type) {
    case START_TIMER:
      return {
        ...state,
        timerIsStarted: true,
        timerStopTime: null,
        timerStartTime: action.payload
      };

    case STOP_TIMER:
      return {
        ...state,
        timerIsStarted: false,
        timerStartTime: null,
        timerStopTime: action.payload
      };

    case SET_TIME:
      return {
        ...state,
        time: action.payload
      };

    case SET_TASK_NAME:
      return {
        ...state,
        taskName: action.payload
      };

    default:
      return state;
  }
}
