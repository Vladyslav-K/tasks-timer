export const TASK_NAME_IS_EMPTY = "TASK_NAME_IS_EMPTY";

export const taskNameIsEmpty = payload => {
  return { type: TASK_NAME_IS_EMPTY, payload };
};
