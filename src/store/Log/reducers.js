import { SYNC_TASKS_LIST, PUSH_TASK_IN_TASKS_LIST } from "./actions";

const initialState = {
  tasksList: []
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SYNC_TASKS_LIST:
      return {
        ...state,
        tasksList: [...state.tasksList, ...action.payload]
      };

    case PUSH_TASK_IN_TASKS_LIST:
      return {
        ...state,
        tasksList: [...state.tasksList, action.payload]
      };

    default:
      return state;
  }
}
