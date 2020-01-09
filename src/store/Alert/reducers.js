import { TASK_NAME_IS_EMPTY } from "./actions";

const initialState = {
  emptyTaskName: false
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case TASK_NAME_IS_EMPTY:
      return {
        ...state,
        emptyTaskName: action.payload
      };

    default:
      return state;
  }
}
