import React from "react";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";

import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";

function TasksLog(props) {
  const { cyanogenRow, violetCell, noTasks, tasksButton } = props.classes;
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
        <TableRow className={cyanogenRow}>
          <TableCell className={noTasks} colSpan={7}>No tasks to show</TableCell>
        </TableRow>
        <TableRow className={cyanogenRow}>
          <TableCell className={violetCell} component="th" scope="row">1</TableCell>
          <TableCell className={violetCell}>Create tasks log</TableCell>
          <TableCell className={violetCell}>02:50:00</TableCell>
          <TableCell className={violetCell}>03:10:00</TableCell>
          <TableCell className={violetCell}>00:20:00</TableCell>
          <TableCell className={violetCell}>
            <Button className={tasksButton} variant="contained" size="small">
              Info
            </Button>
          </TableCell>
          <TableCell>
            <Button className={tasksButton} variant="contained" size="small">
              Delete
            </Button>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}

export default withStyles(styles)(TasksLog);
