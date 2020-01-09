import React from "react";
import { connect } from "react-redux";

import Log from "./Log";

import { deleteTask } from "../../store/Log/actions";

import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";

function LogContainer(props) {
  const { deleteTask, tasksList, classes } = props;

  const deleteCurrentTask = id => {
    const tasksListWithoutCurrentTask = tasksList.filter(
      task => task.id !== id
    );

    deleteTask(tasksListWithoutCurrentTask);
  };

  return (
    <Log
      deleteCurrentTask={deleteCurrentTask}
      tasksList={tasksList}
      classes={classes}
    />
  );
}

const mapStateToProps = ({ tasksLog }) => {
  return {
    tasksList: tasksLog.tasksList
  };
};

const mapDispatchToProps = { deleteTask };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(LogContainer));
