import {
  PUSH_TASK_IN_TASKS_LIST,
  SET_TASKS_LIST_VALUE,
  SYNC_TASKS_LIST,
  SAVE_CURRENT_TASK
} from "./actions";

const initialState = {
  tasksList: [],
  task: []
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
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

    case SAVE_CURRENT_TASK:
      return {
        ...state,
        task: action.payload
      };

    default:
      return state;
  }
}
