import React from "react";
import { connect } from "react-redux";
import createChartData from "./createChartData";

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
            name="Minutes in this hours"
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
