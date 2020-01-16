import {
  all,
  call,
  debounce,
  select,
  put,
  takeLatest
} from "redux-saga/effects";

import {
  syncTimerStartTime,
  syncTasksList,
  syncTaskName,
  SET_TASKS_LIST_VALUE,
  SET_TASK_NAME,
  DELETE_TASK,
  START_TIMER,
  STOP_TIMER
} from "../domain/actions";

function* putStartTimeInStorage() {
  const timerStartTime = yield select(state => state.taskProps.timerStartTime);

  localStorage.setItem("StartTime", timerStartTime);
}

function* putTaskNameInStorage() {
  const taskName = yield select(state => state.taskProps.taskName);

  localStorage.setItem("TaskName", taskName);
}

function* debounceTaskName() {
  yield debounce(250, SET_TASK_NAME, putTaskNameInStorage);
}

function* clearTaskPropsAndPutTasksListInStorage() {
  yield call(() => putTasksListInStorage());
  localStorage.removeItem("StartTime");
  localStorage.removeItem("TaskName");
}
function* putTasksListInStorage() {
  const tasksList = yield select(state => state.tasksList);

  localStorage.setItem("TasksList", JSON.stringify(tasksList));
}

function* setStateFromStorage() {
  const tasksList = JSON.parse(localStorage.getItem("TasksList")) || [];
  const timerStartTime = localStorage.getItem("StartTime") || null;
  const taskName = localStorage.getItem("TaskName") || null;

  yield put(syncTimerStartTime(timerStartTime));
  yield put(syncTasksList(tasksList));
  yield put(syncTaskName(taskName));
}

export default function* rootSaga() {
  yield all([
    call(() => setStateFromStorage()),
    call(() => debounceTaskName()),
    takeLatest(START_TIMER, putStartTimeInStorage),
    takeLatest(STOP_TIMER, clearTaskPropsAndPutTasksListInStorage),
    takeLatest(SET_TASKS_LIST_VALUE, putTasksListInStorage),
    takeLatest(DELETE_TASK, putTasksListInStorage)
  ]);
}
