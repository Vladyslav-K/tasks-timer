import React, { Component } from "react";
import { connect } from "react-redux";
import { DateTime, Interval } from "luxon";

import Timer from "./Timer";

import {
  setTaskName,
  startTask,
  stopTask,
  setTime
} from "../../store/Timer/actions";
import { pushTaskInTasksList } from "../../store/Log/actions";
import { openAlertWindow } from "../../store/Alert/actions";

import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";

class TimerContainer extends Component {
  componentDidMount() {
    this.props.taskProps.timerStartTime
      ? this.startTimerWhenPageReset()
      : this.timer();
  }

  startTimerWhenPageReset = () => {
    this.setCurrentTime();
    this.timer();
  };

  timer = () => {
    setInterval(() => {
      return this.props.taskProps.timerStartTime
        ? this.setCurrentTime()
        : this.props.setTime("00:00:00");
    }, 1000);
  };

  setCurrentTime = () => {
    this.props.setTime(
      Interval.fromDateTimes(
        DateTime.fromISO(this.props.taskProps.timerStartTime),
        DateTime.local()
      )
        .toDuration()
        .toFormat("hh:mm:ss")
    );
  };

  startTimer = () => {
    this.props.startTask(DateTime.local().toISO());
  };

  verifyTaskName = () => {
    const { taskProps, openAlertWindow } = this.props;

    taskProps.taskName ? this.stopTimer() : openAlertWindow(true);
  };

  stopTimer = () => {
    const { taskProps, stopTask, pushTaskInTasksList } = this.props;

    stopTask();

    pushTaskInTasksList({
      ...taskProps,
      id: this.createTaskId(),
      timerStopTime: DateTime.local().toISO()
    });

    clearInterval(this.timer);
  };

  createTaskId = () => {
    const { tasksList } = this.props;

    const lastTaskId = Math.max(...tasksList.map(task => task.id));

    return lastTaskId > 0 ? lastTaskId + 1 : 1;
  };

  render() {
    const {
      time,
      classes,
      setTaskName,

      taskProps: { timerStartTime, taskName }
    } = this.props;

    return (
      <Timer
        verifyTaskName={this.verifyTaskName}
        startTimer={this.startTimer}
        setTaskName={setTaskName}
        timerStartTime={timerStartTime}
        taskName={taskName}
        time={time}
        classes={classes}
      />
    );
  }
}

const mapStateToProps = ({ timer, tasksLog }) => {
  return {
    time: timer.time,
    taskProps: timer.taskProps,

    tasksList: tasksLog.tasksList
  };
};

const mapDispatchToProps = {
  pushTaskInTasksList,
  setTaskName,
  startTask,
  stopTask,
  setTime,

  openAlertWindow
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(TimerContainer));
