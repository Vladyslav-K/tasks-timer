import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { DateTime } from "luxon";

import createChartData from "./createChartData";
import { setTasksListValue } from "../../domain/actions";

import TasksChart from "./TasksChart";

import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";

const getRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min + 1);
};

class ChartContainer extends Component {
  getRandomTasks = () => {
    const data = [];

    let timerStartTime = DateTime.fromObject({ hour: 0, minute: 0, second: 0 });
    let timerStopTime = null;

    const randomNumberOfTask = getRandom(10, 16);

    for (let task = 1; task < randomNumberOfTask; task++) {
      timerStartTime = timerStartTime.plus({
        seconds: getRandom(0, 60 * 60 * 1.5)
      });

      timerStopTime = timerStartTime.plus({
        seconds: getRandom(60 * 10, 60 * 60 * 1.5)
      });

      data.push({
        id: task,
        taskName: `Random task #${task}`,
        timerStartTime: timerStartTime,
        timerStopTime: timerStopTime
      });

      timerStartTime = timerStopTime;
    }

    this.props.setTasksListValue(data);
  };

  render() {
    const { tasksList, classes } = this.props;

    const chartData = createChartData(tasksList);

    return (
      <TasksChart
        getRandomTasks={this.getRandomTasks}
        chartData={chartData}
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

const mapDispatchToProps = { setTasksListValue };

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStyles(styles)
)(ChartContainer);