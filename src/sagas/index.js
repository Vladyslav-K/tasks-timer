import { all, select, put, takeLatest } from "redux-saga/effects";
import {
  syncTimerStartTime,
  syncTasksList,
  syncTaskName,
  SET_TASKS_LIST_VALUE,
  SET_TASK_NAME,
  DELETE_TASK,
  START_TASK,
  STOP_TASK
} from "../domain/actions";

export function* putStartTimeInStorage() {
  const timerStartTime = yield select(state => state.taskProps.timerStartTime);

  yield localStorage.setItem("StartTime", timerStartTime);
}

export function* putTaskNameInStorage() {
  const taskName = yield select(state => state.taskProps.taskName);

  yield localStorage.setItem("TaskName", taskName);
}

export function* clearTaskPropsAndPutTasksListInStorage() {
  yield putTasksListInStorage();
  yield localStorage.removeItem("StartTime");
  yield localStorage.removeItem("TaskName");
}

export function* putTasksListInStorage() {
  const tasksList = yield select(state => state.tasksList);

  yield localStorage.setItem("TasksList", JSON.stringify(tasksList));
}

export function* setStateFromStorage() {
  const tasksList = JSON.parse(localStorage.getItem("TasksList")) || [];
  const timerStartTime = localStorage.getItem("StartTime") || null;
  const taskName = localStorage.getItem("TaskName") || null;

  yield put(syncTimerStartTime(timerStartTime));
  yield put(syncTasksList(tasksList));
  yield put(syncTaskName(taskName));
}

export default function* rootSaga() {
  yield all([
    setStateFromStorage(),
    takeLatest(STOP_TASK, clearTaskPropsAndPutTasksListInStorage),
    takeLatest(SET_TASKS_LIST_VALUE, putTasksListInStorage),
    takeLatest(SET_TASK_NAME, putTaskNameInStorage),
    takeLatest(DELETE_TASK, putTasksListInStorage),
    takeLatest(START_TASK, putStartTimeInStorage)
  ]);
}
