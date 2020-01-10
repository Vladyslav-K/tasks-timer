import {
  PUSH_TASK_IN_TASKS_LIST,
  SYNC_TASKS_LIST,
  SAVE_CURRENT_TASK,
  DELETE_TASK,
  GENERATE_RANDOM_TASKS
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

    case DELETE_TASK:
      return {
        ...state,
        tasksList: action.payload
      };

    case GENERATE_RANDOM_TASKS:
      return {
        ...state,
        tasksList: action.payload
      };

    default:
      return state;
  }
}
