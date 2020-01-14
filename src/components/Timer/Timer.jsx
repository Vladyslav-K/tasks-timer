import React, { PureComponent } from "react";

import TextField from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import Fab from "@material-ui/core/Fab";

export default class Timer extends PureComponent {
  render() {
    const {
      verifyTaskName,
      setTaskName,
      startTimer,

      timerStartTime,
      taskName,
      time,

      classes
    } = this.props;

    const { timerContainer, taskInput, timerFab, timerButton } = classes;

    return (
      <div className={timerContainer}>
        <TextField
          label="Name of your task"
          placeholder="Name of your task"
          className={taskInput}
          value={taskName || ""}
          onChange={event => setTaskName(event.target.value)}
        />

        <Fab className={timerFab}>{time}</Fab>
        {timerStartTime ? (
          <Button
            variant="contained"
            size="small"
            className={timerButton}
            onClick={verifyTaskName}
          >
            STOP
          </Button>
        ) : (
          <Button
            variant="contained"
            size="small"
            className={timerButton}
            onClick={startTimer}
          >
            START
          </Button>
        )}
      </div>
    );
  }
}
