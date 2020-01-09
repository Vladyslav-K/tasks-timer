import React from "react";
import { connect } from "react-redux";
import { DateTime, Interval } from "luxon";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import {
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar
} from "recharts";

import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";

function Chart(props) {
  const { tasksList, classes } = props;
  const { generateButtonContainer, generateButton } = classes;

  const createChartData = tasksList => {
    const chartData = [];

    for (let hour = 0; hour < 24; hour++) {
      const hourStart = DateTime.fromObject({ hour, minute: 0, second: 0 });
      const hourEnd = DateTime.fromObject({ hour, minute: 59, second: 59 });
      const hourInterval = Interval.fromDateTimes(hourStart, hourEnd);

      const tasksTimeInThisHour = tasksList.filter(task =>
        hourInterval.intersection(
          Interval.fromDateTimes(
            DateTime.fromISO(task.timerStartTime),
            DateTime.fromISO(task.timerStopTime)
          )
        )
      );

      let tasksTimeSum = 0;

      if (tasksTimeInThisHour.length > 0) {
        tasksTimeSum = tasksTimeInThisHour.reduce((accumulator, task) => {
          let tasksMinutesInThisHour = 0;
          const taskStartDateTime = DateTime.fromISO(task.timerStartTime);
          const taskStopDateTime = DateTime.fromISO(task.timerStopTime);

          taskStartDateTime.hour === hour && taskStopDateTime.hour === hour
            ? (tasksMinutesInThisHour = Interval.fromDateTimes(
                taskStartDateTime,
                taskStopDateTime
              )
                .toDuration("minutes")
                .toObject().minutes)
            : taskStopDateTime.hour === hour
            ? (tasksMinutesInThisHour = taskStopDateTime.minute)
            : taskStartDateTime.hour === hour
            ? (tasksMinutesInThisHour = 60 - taskStartDateTime.minute)
            : (tasksMinutesInThisHour = 0);

          return accumulator + Math.round(tasksMinutesInThisHour);
        }, 0);
      }

      chartData.push({
        hour,
        minutes: 60,
        tasksTimeInThisHour: tasksTimeSum || 0
      });
    }
    return chartData;
  };

  const data = createChartData(tasksList);

  return (
    <div>
      <ResponsiveContainer id="container" width="95%" height={300}>
        <BarChart data={data} margin={{ top: 20 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="hour" />
          <YAxis dataKey="minutes" />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="tasksTimeInThisHour"
            name="Minutes in this hour"
            barSize={20}
            fill="#4823C2"
          />
        </BarChart>
      </ResponsiveContainer>
      <Grid container className={generateButtonContainer}>
        <Grid item xs={12}>
          <Button variant="contained" className={generateButton} size="small">
            Generate
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

const mapStateToProps = ({ tasksLog }) => {
  return {
    tasksList: tasksLog.tasksList
  };
};

export default connect(mapStateToProps)(withStyles(styles)(Chart));
