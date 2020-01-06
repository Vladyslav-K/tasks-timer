export const START_TIMER = "START_TIMER";
export const STOP_TIMER = "STOP_TIMER";
export const SET_TIME = "SET_TIME";
export const SET_TASK_NAME = "SET_TASK_NAME";

export const startTimerAction = payload => {
  return { type: START_TIMER, payload };
};

export const stopTimerAction = payload => {
  return { type: STOP_TIMER, payload };
};

export const setTimeAction = payload => {
  return { type: SET_TIME, payload };
};

export const setTaskNameAction = payload => {
  return { type: SET_TASK_NAME, payload };
};
