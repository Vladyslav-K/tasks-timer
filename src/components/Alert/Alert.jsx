import React from "react";

import Modal from "@material-ui/core/Modal";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

export default function Alert(props) {
  const { emptyTaskName, taskNameIsEmpty, classes } = props;
  return (
    <Modal
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      open={emptyTaskName}
      onClose={() => {
        taskNameIsEmpty(false);
      }}
      className={classes.modalContainer}
    >
      <div className={classes.modal}>
        <Grid container className={classes.modalContent}>
          <Typography
            variant="h6"
            id="modal-title"
            className={classes.alertName}
          >
            Empty task name
          </Typography>
          <Typography
            variant="subtitle1"
            id="simple-modal-description"
            className={classes.alertContant}
          >
            You are trying close your task without name, enter the title and try
            again!
          </Typography>
        </Grid>

        <div className={classes.buttonContainer}>
          <Button
            onClick={() => {
              taskNameIsEmpty(false);
            }}
          >
            Close
          </Button>
        </div>
      </div>
    </Modal>
  );
}
