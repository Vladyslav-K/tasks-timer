import { OPEN_ALERT_WINDOW } from "./actions";

const initialState = {
  taskNameIsEmpty: false
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case OPEN_ALERT_WINDOW:
      return {
        ...state,
        taskNameIsEmpty: action.payload
      };

    default:
      return state;
  }
}
