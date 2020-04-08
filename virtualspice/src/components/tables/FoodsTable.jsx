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

  function addDeleteButton(itemId){
    return ( 
      <Button 
        variant="contained" 
        color="secondary"
        onClick={() => {props.deleteItemWithId(`${itemId}`)}}
        >
        Delete
      </Button>
    )
  }

  function addMoveToShoppingListButton(itemId){
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
            <TableCell align="center"><strong>Name</strong></TableCell>
            <TableCell align="center"><strong>Type</strong></TableCell>
            <TableCell align="center"><strong>Expiration date</strong></TableCell>
            <TableCell align="center"><strong>Location</strong></TableCell>
            <TableCell align="center"><strong>Date of shopping</strong></TableCell>
            <TableCell align="center"><strong>Shopping list</strong></TableCell>
            <TableCell align="center"><strong>Delete</strong></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {pantry.map((key,i) => (
            <TableRow key={i}>
              <TableCell component="th" scope="row">
              {key.name}
              </TableCell>
              <TableCell align="right">{key.type}</TableCell>
              <TableCell align="right">{key.exp_date["$date"]}</TableCell>
              <TableCell align="right">{key.location}</TableCell>
              <TableCell align="right">{key.date_of_shopping["$date"]}</TableCell>
              <TableCell align="right">{addMoveToShoppingListButton(key._id['$oid'])}</TableCell>
              <TableCell align="right">{addDeleteButton(key._id['$oid'])}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}