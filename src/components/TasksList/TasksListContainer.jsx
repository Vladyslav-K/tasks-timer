import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";

import { deleteTask } from "../../domain/actions";

import TasksList from "./TasksList";

import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";

class TasksListContainer extends Component {
  render() {
    const { deleteTask, tasksList, classes } = this.props;
    return (
      <TasksList
        deleteTask={deleteTask}
        tasksList={tasksList}
        classes={classes}
      />
    );
  }
}

const mapStateToProps = ({ tasksList }) => {
  return {
    tasksList
  };
};

const mapDispatchToProps = { deleteTask };

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStyles(styles)
)(TasksListContainer);
