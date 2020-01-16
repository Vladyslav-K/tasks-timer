import React, { memo } from "react";
import { Link } from "react-router-dom";
import { DateTime, Interval } from "luxon";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";

function TasksList({
  deleteTask,
  tasksList,
  classes: { tableRow, noTasks, tasksButton }
}) {
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
            <TableRow key={task.id} className={tableRow}>
              <TableCell component="th" scope="row">
                {task.id}
              </TableCell>
              <TableCell>{task.taskName}</TableCell>
              <TableCell>
                {DateTime.fromISO(task.timerStartTime).toFormat("HH:mm:ss")}
              </TableCell>
              <TableCell>
                {DateTime.fromISO(task.timerStopTime).toFormat("HH:mm:ss")}
              </TableCell>
              <TableCell>
                {Interval.fromDateTimes(
                  DateTime.fromISO(task.timerStartTime),
                  DateTime.fromISO(task.timerStopTime)
                )
                  .toDuration()
                  .toFormat("hh:mm:ss")}
              </TableCell>
              <TableCell>
                <Button
                  className={tasksButton}
                  variant="contained"
                  size="small"
                  component={Link}
                  to={`/tasks/${task.id}`}
                >
                  Info
                </Button>
              </TableCell>
              <TableCell>
                <Button
                  className={tasksButton}
                  variant="contained"
                  size="small"
                  onClick={() => deleteTask(task.id)}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))
        ) : (
          <TableRow className={tableRow}>
            <TableCell className={noTasks} colSpan={7}>
              No tasks to show
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}

export default memo(TasksList);
