import React, { memo } from "react";

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

function TasksChart({
  getRandomTasks,
  chartData,
  classes: { generateButtonContainer, generateButton }
}) {
  return (
    <div>
      <ResponsiveContainer id="container" width="100%" height={300}>
        <BarChart data={chartData} margin={{ top: 20, left: -25 }}>
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

export default memo(TasksChart);
