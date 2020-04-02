import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const useStyles = makeStyles({
  table: {
    width: '100%'
  },
});


export default function FoodsTable(props) {
  const classes = useStyles();
  const pantry = props.pantry;

  function addDeleteButton(){
    return ( 
      <Button variant="contained" color="secondary">
        Delete
      </Button>
    )
  }

  function addMoveToShoppingListButton(){
    return (
      <Button
      variant="contained"
      color="primary"
      className={classes.button}
      startIcon={<ShoppingCartIcon />}
    >
      Add
    </Button>
    )
  }


  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="center">exp_date</TableCell>
            <TableCell align="center">Location</TableCell>
            <TableCell align="center">Date of shopping</TableCell>
            <TableCell align="center">Shopping list</TableCell>
            <TableCell align="center">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {pantry.map((key,i) => (
            <TableRow key={i}>
              <TableCell component="th" scope="row">
              {key.name}
              </TableCell>
              <TableCell align="right">{key.exp_date["$date"]}</TableCell>
              <TableCell align="right">{key.location}</TableCell>
              <TableCell align="right">{key.date_of_shopping["$date"]}</TableCell>
              <TableCell align="right">{addMoveToShoppingListButton()}</TableCell>
              <TableCell align="right">{addDeleteButton()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}