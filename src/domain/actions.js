export const START_TASK = "START_TASK";
export const STOP_TASK = "STOP_TASK";
export const SET_TASK_NAME = "SET_TASK_NAME";
export const SYNC_TASK_PROPS = "SYNC_TASK_PROPS";
export const PUSH_TASK_IN_TASKS_LIST = "PUSH_TASK_IN_TASKS_LIST";
export const SET_TASKS_LIST_VALUE = "SET_TASKS_LIST_VALUE";
export const SYNC_TASKS_LIST = "SYNC_STATE_FROM_STORAGE";

export const startTask = payload => {
  return { type: START_TASK, payload };
};

export const stopTask = () => {
  return { type: STOP_TASK };
};

export const setTaskName = payload => {
  return { type: SET_TASK_NAME, payload };
};

export const syncTaskProps = payload => {
  return { type: SYNC_TASK_PROPS, payload };
};

export const pushTaskInTasksList = payload => {
  return { type: PUSH_TASK_IN_TASKS_LIST, payload };
};

export const setTasksListValue = payload => {
  return { type: SET_TASKS_LIST_VALUE, payload };
};

export const syncTasksList = payload => {
  return { type: SYNC_TASKS_LIST, payload };
};
