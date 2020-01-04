import React, { Component } from "react";

import TextField from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import Fab from "@material-ui/core/Fab";

import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";

class Timer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { timerContainer, taskInput, timerFab, button } = this.props.classes;
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
          <Fab className={timerFab}>00:00:00</Fab>
        </div>
        <div>
          <Button variant="contained" size="small" className={button}>
            Start
          </Button>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Timer);
