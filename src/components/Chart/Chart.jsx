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

import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";

const data = [
  {
    name: 1,
    minutes: 11
  },
  {
    name: 2,
    minutes: 22
  },
  {
    name: 3,
    minutes: 33
  },
  {
    name: 4,
    minutes: 44
  },
  {
    name: 5,
    minutes: 55
  },
  {
    name: 6,
    minutes: 42
  },
  {
    name: 7,
    minutes: 25
  }
];

function Chart(props) {
  const { generateButtonContainer, generateButton } = props.classes;
  return (
    <div>
      <ResponsiveContainer id="container" width="95%" height={300}>
        <BarChart data={data} margin={{ top: 20 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="hour" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="minInHours"
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

export default withStyles(styles)(Chart);
