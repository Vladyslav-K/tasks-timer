import {
  PUSH_TASK_IN_TASKS_LIST,
  SET_TASKS_LIST_VALUE,
  SYNC_TASKS_LIST
} from "./actions";

const initialState = {
  tasksList: []
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

    default:
      return state;
  }
}
