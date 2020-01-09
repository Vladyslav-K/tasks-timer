import React from "react";

import TextField from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import Fab from "@material-ui/core/Fab";

export default function Timer(props) {
  const {
    setTaskNameAction,
    verifyTaskName,
    timerStartTime,
    timerContainer,
    timerButton,
    startTimer,
    taskInput,
    timerFab,
    taskName,
    time
  } = props;

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
