import React from "react";

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

export default function Chart(props) {
  const { getRandomTasks, chartData, classes } = props;
  const { generateButtonContainer, generateButton } = classes;

  return (
    <div>
      <ResponsiveContainer id="container" width="95%" height={300}>
        <BarChart data={chartData} margin={{ top: 20 }}>
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
          <Button
            className={generateButton}
            variant="contained"
            size="small"
            onClick={() => getRandomTasks()}
          >
            Generate
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
