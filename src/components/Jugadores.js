import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@material-ui/core';

const useStyles = makeStyles({
  table: {
    minWidth: 200,
  },
});

function createData(name, elo) {
  return { name, elo };
}

const rows = [
  createData('Julio', 1120),
  createData('Roberto', 1100),
  createData('Pablo', 1000),
  createData('Sebastian', 980),
  createData('Alan', 975),
];

export default function Jugadores() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table
        className={classes.table}
        aria-label="simple table"
        size="medium"
      >
        <TableHead>
          <TableRow>
            <TableCell align="center">JUGADOR</TableCell>
            <TableCell align="center">ELO</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell align="center" component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.elo}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
