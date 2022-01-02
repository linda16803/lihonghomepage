import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
// @material-ui/icons

// core components
import styles from "assets/jss/material-dashboard-react/components/tasksStyle.js";

const useStyles = makeStyles(styles);

export default function ListOnlys(props) {
  const classes = useStyles();
  const { tasksIndexes, tasks, rtlActive } = props;
  const tableCellClasses = classnames(classes.tableCell, {
    [classes.tableCellRTL]: rtlActive
  });
 
  return (
    <Table className={classes.table}>
      <TableBody>
        {tasksIndexes.map(value => (
          <TableRow key={value} className={classes.tableRow}>
            <TableCell className={tableCellClasses}>
              
            </TableCell>
            <TableCell className={tableCellClasses}><h4>{tasks[value]}</h4></TableCell>
           
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

ListOnlys.propTypes = {
  
  tasks: PropTypes.arrayOf(PropTypes.node),
  
};
