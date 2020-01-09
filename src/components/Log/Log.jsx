import React from "react";
import { DateTime, Interval } from "luxon";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";

export default function Log(props) {
  const { deleteCurrentTask, tasksList, classes } = props;
  const { cyanogenRow, violetCell, noTasks, tasksButton } = classes;

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>№</TableCell>
          <TableCell>Task</TableCell>
          <TableCell>Time start</TableCell>
          <TableCell>Time end</TableCell>
          <TableCell>Time spend</TableCell>
          <TableCell>Info</TableCell>
          <TableCell>Delete</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {tasksList.length > 0 ? (
          tasksList.map(task => (
            <TableRow key={task.id} className={cyanogenRow}>
              <TableCell className={violetCell} component="th" scope="row">
                {task.id}
              </TableCell>
              <TableCell className={violetCell}>{task.taskName}</TableCell>
              <TableCell className={violetCell}>
                {DateTime.fromISO(task.timerStartTime).toFormat("HH:mm:ss")}
              </TableCell>
              <TableCell className={violetCell}>
                {DateTime.fromISO(task.timerStopTime).toFormat("HH:mm:ss")}
              </TableCell>
              <TableCell className={violetCell}>
                {Interval.fromDateTimes(
                  DateTime.fromISO(task.timerStartTime),
                  DateTime.fromISO(task.timerStopTime)
                )
                  .toDuration()
                  .toFormat("hh:mm:ss")}
              </TableCell>
              <TableCell className={violetCell}>
                <Button
                  className={tasksButton}
                  variant="contained"
                  size="small"
                >
                  Info
                </Button>
              </TableCell>
              <TableCell>
                <Button
                  className={tasksButton}
                  variant="contained"
                  size="small"
                  onClick={() => deleteCurrentTask(task.id)}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))
        ) : (
          <TableRow className={cyanogenRow}>
            <TableCell className={noTasks} colSpan={7}>
              No tasks to show
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
