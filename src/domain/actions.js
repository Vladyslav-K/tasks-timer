export const START_TIMER = "START_TIMER";
export const STOP_TIMER = "STOP_TIMER";
export const SET_TASK_NAME = "SET_TASK_NAME";

export const SET_TASKS_LIST_VALUE = "SET_TASKS_LIST_VALUE";
export const DELETE_TASK = "DELETE_TASK";

export const SYNC_TIMER_START_TIME = "SYNC_TIMER_START_TIME";
export const SYNC_TASKS_LIST = "SYNC_STATE_FROM_STORAGE";
export const SYNC_TASK_NAME = "SYNC_TASK_NAME";

export const startTimer = () => {
  return { type: START_TIMER };
};

export const stopTimer = () => {
  return { type: STOP_TIMER };
};

export const setTaskName = payload => {
  return { type: SET_TASK_NAME, payload };
};

export const setTasksListValue = payload => {
  return { type: SET_TASKS_LIST_VALUE, payload };
};

export const deleteTask = payload => {
  return { type: DELETE_TASK, payload };
};

export const syncTimerStartTime = payload => {
  return { type: SYNC_TIMER_START_TIME, payload };
};

export const syncTasksList = payload => {
  return { type: SYNC_TASKS_LIST, payload };
};

export const syncTaskName = payload => {
  return { type: SYNC_TASK_NAME, payload };
};
