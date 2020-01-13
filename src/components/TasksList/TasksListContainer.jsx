import React from "react";
import { connect } from "react-redux";

import { setTasksListValue } from "../../store/Log/actions";

import TasksList from "./TasksList";

import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";

function LogContainer(props) {
  const { setTasksListValue, tasksList, classes } = props;

  const deleteCurrentTask = id => {
    const tasksListWithoutCurrentTask = tasksList.filter(
      task => task.id !== id
    );

    setTasksListValue(tasksListWithoutCurrentTask);
  };

  return (
    <TasksList
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

const mapDispatchToProps = { setTasksListValue };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(LogContainer));
