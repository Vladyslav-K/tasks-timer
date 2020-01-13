import {
  START_TASK,
  STOP_TASK,
  SET_TIME,
  SET_TASK_NAME,
  SYNC_TASK_PROPS,
  PUSH_TASK_IN_TASKS_LIST,
  SET_TASKS_LIST_VALUE,
  SYNC_TASKS_LIST
} from "./actions";

const initialState = {
  time: "00:00:00",

  tasksList: [],

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

    case PUSH_TASK_IN_TASKS_LIST:
      return {
        ...state,
        tasksList: [...state.tasksList, action.payload]
      };

    case SET_TASKS_LIST_VALUE:
      return {
        ...state,
        tasksList: action.payload
      };

    case SYNC_TASKS_LIST:
      return {
        ...state,
        tasksList: [...state.tasksList, ...action.payload]
      };

    default:
      return state;
  }
}
