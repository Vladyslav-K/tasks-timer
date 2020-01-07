export const SYNC_TASKS_LIST = "SYNC_STATE_FROM_STORAGE";
export const PUSH_TASK_IN_TASKS_LIST = "PUSH_TASK_IN_TASKS_LIST";

export const syncTasksList = payload => {
  return { type: SYNC_TASKS_LIST, payload };
};

export const pushTaskInTasksList = payload => {
  return { type: PUSH_TASK_IN_TASKS_LIST, payload };
};