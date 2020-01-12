export const START_TASK = "START_TASK";
export const STOP_TASK = "STOP_TASK";
export const SET_TIME = "SET_TIME";
export const SET_TASK_NAME = "SET_TASK_NAME";
export const SYNC_TASK_PROPS = "SYNC_TASK_PROPS";

export const startTask = payload => {
  return { type: START_TASK, payload };
};

export const stopTask = () => {
  return { type: STOP_TASK };
};

export const setTime = payload => {
  return { type: SET_TIME, payload };
};

export const setTaskName = payload => {
  return { type: SET_TASK_NAME, payload };
};

export const syncTaskProps = payload => {
  return { type: SYNC_TASK_PROPS, payload };
};
