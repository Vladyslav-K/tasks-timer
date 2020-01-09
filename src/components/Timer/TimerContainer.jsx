import React, { Component } from "react";
import { connect } from "react-redux";
import { DateTime, Interval } from "luxon";

import Timer from "./Timer";

import {
  setTaskNameAction,
  startTimerAction,
  stopTimerAction,
  setTimeAction
} from "../../store/Timer/actions";
import { pushTaskInTasksList } from "../../store/Log/actions";
import { taskNameIsEmpty } from "../../store/Alert/actions";

import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";

class TimerContainer extends Component {
  componentDidMount() {
    this.props.taskProps.timerStartTime
      ? this.startTimerWhenPageReset()
      : this.timer();
  }

  startTimerWhenPageReset = () => {
    this.setTime();
    this.timer();
  };

  timer = () => {
    setInterval(() => {
      return this.props.taskProps.timerStartTime
        ? this.setTime()
        : this.props.setTimeAction("00:00:00");
    }, 1000);
  };

  setTime = () => {
    this.props.setTimeAction(
      Interval.fromDateTimes(
        DateTime.fromISO(this.props.taskProps.timerStartTime),
        DateTime.local()
      )
        .toDuration()
        .toFormat("hh:mm:ss")
    );
  };

  startTimer = () => {
    this.props.startTimerAction(DateTime.local().toISO());
  };

  verifyTaskName = () => {
    const { taskProps, taskNameIsEmpty } = this.props;

    taskProps.taskName ? this.stopTimer() : taskNameIsEmpty(true);
  };

  stopTimer = () => {
    const { taskProps, stopTimerAction, pushTaskInTasksList } = this.props;

    stopTimerAction();

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
      timerContainer,
      taskInput,
      timerFab,
      timerButton
    } = this.props.classes;

    const {
      time,
      taskProps: { timerStartTime, taskName },
      setTaskNameAction
    } = this.props;

    return (
      <Timer
        setTaskNameAction={setTaskNameAction}
        verifyTaskName={this.verifyTaskName}
        timerStartTime={timerStartTime}
        timerContainer={timerContainer}
        startTimer={this.startTimer}
        timerButton={timerButton}
        taskInput={taskInput}
        timerFab={timerFab}
        taskName={taskName}
        time={time}
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
  setTaskNameAction,
  startTimerAction,
  stopTimerAction,
  setTimeAction,

  taskNameIsEmpty
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(TimerContainer));
