import React from "react";

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

export default function TaskChart(props) {
  const { dataForChart } = props;

  return (
    <ResponsiveContainer id="container" width="80%" height={300}>
      <BarChart data={dataForChart} margin={{ top: 20 }}>
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
  );
}
