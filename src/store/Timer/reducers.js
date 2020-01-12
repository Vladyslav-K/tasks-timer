import {
  START_TASK,
  STOP_TASK,
  SET_TIME,
  SET_TASK_NAME,
  SYNC_TASK_PROPS
} from "./actions";

const initialState = {
  time: "00:00:00",

  taskProps: {
    id: null,
    taskName: null,
    timerStartTime: null,
    timerStopTime: null
  }
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case START_TASK:
      return {
        ...state,
        taskProps: {
          ...state.taskProps,
          timerStopTime: null,
          timerStartTime: action.payload
        }
      };

    case STOP_TASK:
      return {
        ...state,
        time: initialState.time,
        taskProps: initialState.taskProps
      };

    case SET_TIME:
      return {
        ...state,
        time: action.payload
      };

    case SET_TASK_NAME:
      return {
        ...state,
        taskProps: {
          ...state.taskProps,
          taskName: action.payload
        }
      };

    case SYNC_TASK_PROPS:
      return {
        ...state,
        taskProps: {
          ...state.taskProps,
          ...action.payload
        }
      };

    default:
      return state;
  }
}
