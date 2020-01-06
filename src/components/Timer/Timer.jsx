import React, { Component } from "react";
import { connect } from "react-redux";
import { DateTime, Interval } from "luxon";

import TextField from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import Fab from "@material-ui/core/Fab";

import {
  startTimerAction,
  stopTimerAction,
  setTimeAction
} from "../../store/Timer/actions";

import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";

class Timer extends Component {
  componentDidMount() {
    const timeInLocalStorage = localStorage.getItem("timerStartTime");

    if (timeInLocalStorage) {
      this.props.startTimerAction(timeInLocalStorage);
      this.setTime();
    }

    this.timer();
  }

  timer = () => {
    setInterval(() => {
      return this.props.timerStartTime
        ? this.setTime()
        : this.props.setTimeAction("00:00:00");
    }, 1000);
  };

  setTime = () => {
    this.props.setTimeAction(
      Interval.fromDateTimes(
        DateTime.fromISO(
          localStorage.getItem("timerStartTime")
            ? localStorage.getItem("timerStartTime")
            : this.props.timerStartTime
        ),
        DateTime.local()
      )
        .toDuration()
        .toFormat("hh:mm:ss")
    );
  };

  startTimer = () => {
    const newDateTime = DateTime.local().toISO();

    this.props.startTimerAction(newDateTime);

    localStorage.setItem("timerStartTime", newDateTime);
  };

  stopTimer = () => {
    this.props.stopTimerAction(DateTime.local().toISO());

    localStorage.clear();

    clearInterval(this.timer);
  };

  render() {
    const {
      timerContainer,
      taskInput,
      timerFab,
      timerButton
    } = this.props.classes;

    const { time, timerIsStarted } = this.props;
    return (
      <div className={timerContainer}>
        <div>
          <TextField
            label="Name of your task"
            placeholder="Name of your task"
            className={taskInput}
          />
        </div>
        <div>
          <Fab className={timerFab}>{time}</Fab>
        </div>
        <div>
          {timerIsStarted ? (
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
      </div>
    );
  }
}

const mapStateToProps = ({ timer }) => {
  return {
    time: timer.time,
    timerIsStarted: timer.timerIsStarted,
    timerStartTime: timer.timerStartTime,
    timerStopTime: timer.timerStopTime
  };
};

const mapDispatchToProps = {
  startTimerAction,
  stopTimerAction,
  setTimeAction
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Timer));
