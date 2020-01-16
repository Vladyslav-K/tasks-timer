import React, { memo } from "react";

import TextField from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import Fab from "@material-ui/core/Fab";

function Timer({
  verifyTaskName,
  setTaskName,
  startTask,

  timerStartTime,
  taskName,
  time,

  classes: { timerContainer, taskInput, timerFab, timerButton }
}) {
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
          onClick={startTask}
        >
          START
        </Button>
      )}
    </div>
  );
}

export default memo(Timer);
