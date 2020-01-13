import React, { Component } from "react";
import { connect } from "react-redux";
import { DateTime, Interval } from "luxon";

import {
  pushTaskInTasksList,
  setTaskName,
  startTask,
  stopTask,
  setTime
} from "../../store/Timer/actions";

import { openAlertWindow } from "../../store/Alert/actions";

import Timer from "./Timer";

import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";

class TimerContainer extends Component {
  intervalID = 0;

  componentDidMount() {
    if (this.props.taskProps.timerStartTime) {
      this.timer();
    }

    this.intervalID = setInterval(this.timer, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  timer = () => {
    const {
      taskProps: { timerStartTime },
      setTime
    } = this.props;

    timerStartTime
      ? setTime(
          Interval.fromDateTimes(
            DateTime.fromISO(this.props.taskProps.timerStartTime),
            DateTime.local()
          )
            .toDuration()
            .toFormat("hh:mm:ss")
        )
      : setTime("00:00:00");
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

const mapStateToProps = ({ timer: { taskProps, tasksList, time } }) => {
  return {
    time,
    taskProps,
    tasksList
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
