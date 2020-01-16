import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { DateTime, Interval } from "luxon";

import { setTaskName, startTimer, stopTimer } from "../../domain/actions";

import Timer from "./Timer";
import TaskNameWarning from "../TaskNameWarning";

import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";

function TimerContainer({
  setTaskName,
  taskProps,
  startTimer,
  stopTimer,
  classes
}) {
  const [taskNameIsEmpty, setTaskNameIsEmpty] = useState(false);
  const [time, setTime] = useState("00:00:00");

  useEffect(() => {
    let intervalID = 0;

    const setTimerTime = () => {
      setTime(
        Interval.fromDateTimes(
          DateTime.fromISO(taskProps.timerStartTime),
          DateTime.local()
        )
          .toDuration()
          .toFormat("hh:mm:ss")
      );
    };

    if (taskProps.timerStartTime) {
      setTimerTime();
      intervalID = setInterval(setTimerTime, 1000);
    } else {
      setTime("00:00:00");
    }

    return () => {
      clearInterval(intervalID);
    };
  }, [taskProps.timerStartTime]);

  const verifyTaskName = () => {
    taskProps.taskName
      ? stopTimer()
      : setTaskNameIsEmpty(prevState => !prevState);
  };

  return (
    <>
      <Timer
        timerStartTime={taskProps.timerStartTime}
        taskNameIsEmpty={taskNameIsEmpty}
        verifyTaskName={verifyTaskName}
        setTaskName={setTaskName}
        taskName={taskProps.taskName}
        startTask={startTimer}
        time={time}
        classes={classes}
      />

      <TaskNameWarning
        setTaskNameIsEmpty={setTaskNameIsEmpty}
        taskNameIsEmpty={taskNameIsEmpty}
      />
    </>
  );
}

const mapStateToProps = ({ taskProps, tasksList, time }) => {
  return {
    time,
    taskProps,
    tasksList
  };
};

export default compose(
  connect(mapStateToProps, { setTaskName, startTimer, stopTimer }),
  withStyles(styles)
)(TimerContainer);
