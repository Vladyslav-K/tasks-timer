import React, { Component } from "react";
import { connect } from "react-redux";
import { DateTime, Interval } from "luxon";

import TextField from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import Fab from "@material-ui/core/Fab";

import {
  setTaskNameAction,
  startTimerAction,
  stopTimerAction,
  setTimeAction
} from "../../store/Timer/actions";
import { pushTaskInTasksList } from "../../store/Log/actions";

import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";

class Timer extends Component {
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
      <div className={timerContainer}>
        <TextField
          label="Name of your task"
          placeholder="Name of your task"
          className={taskInput}
          value={taskName || ""}
          onChange={event => setTaskNameAction(event.target.value)}
        />

        <Fab className={timerFab}>{time}</Fab>
        {timerStartTime ? (
          <Button
            variant="contained"
            size="small"
            className={timerButton}
            onClick={this.stopTimer}
          >
            STOP
          </Button>
        ) : (
          <Button
            variant="contained"
            size="small"
            className={timerButton}
            onClick={this.startTimer}
          >
            START
          </Button>
        )}
      </div>
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
  setTimeAction
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Timer));
