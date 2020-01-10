export const PUSH_TASK_IN_TASKS_LIST = "PUSH_TASK_IN_TASKS_LIST";
export const SYNC_TASKS_LIST = "SYNC_STATE_FROM_STORAGE";
export const SAVE_CURRENT_TASK = "SAVE_CURRENT_TASK";
export const SET_TASKS_LIST_VALUE = "SET_TASKS_LIST_VALUE";

export const pushTaskInTasksList = payload => {
  return { type: PUSH_TASK_IN_TASKS_LIST, payload };
};

export const syncTasksList = payload => {
  return { type: SYNC_TASKS_LIST, payload };
};

export const saveCurrentTask = payload => {
  return { type: SAVE_CURRENT_TASK, payload };
};

export const setTasksListValue = payload => {
  return { type: SET_TASKS_LIST_VALUE, payload };
};
