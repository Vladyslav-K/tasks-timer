import { all, call, select, delay, put, takeLatest } from "redux-saga/effects";
import { syncTaskProps, stopTask } from "../Timer/actions";
import { syncTasksList } from "../Log/actions";

export function* syncStateAndStorage() {
  yield delay(300);

  const {
    timer: {
      taskProps: { timerStartTime, taskName }
    },

    tasksLog: { tasksList }
  } = yield select();

  yield call(() => {
    localStorage.setItem("tasksList", JSON.stringify(tasksList));

    localStorage.setItem(
      "startTimeAndTaskName",
      JSON.stringify({ timerStartTime, taskName })
    );
  });
}

export function* setStateFromStorage() {
  const tasksList = yield call(() => {
    return JSON.parse(localStorage.getItem("tasksList")) || [];
  });

  const taskProps = yield call(() => {
    return (
      JSON.parse(localStorage.getItem("startTimeAndTaskName")) || stopTask()
    );
  });

  yield put(syncTasksList(tasksList));
  yield put(syncTaskProps(taskProps));
}

export function* watcher() {
  yield call(setStateFromStorage);
  yield takeLatest("*", syncStateAndStorage);
}

export default function* rootSaga() {
  yield all([watcher()]);
}
