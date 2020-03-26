import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});


export default function FoodsTable(props) {
  const classes = useStyles();
  const pantry = props.pantry;

  return (
    // <TableContainer component={Paper}>
    //   <Table className={classes.table} size="small" aria-label="a dense table">
    //     <TableHead>
    //       <TableRow>
    //         <TableCell>Name</TableCell>
    //         <TableCell align="right">exp_date</TableCell>
    //         <TableCell align="right">Location</TableCell>
    //         <TableCell align="right">Date of shopping</TableCell>
    //       </TableRow>
    //     </TableHead>
    //     <TableBody>
    //       {Object.keys(pantry).map((key,i) => (
    //         <TableRow key={pantry[key].id}>
    //           <TableCell component="th" scope="row">
    //           </TableCell>
    //           <TableCell align="right">{pantry[key].exp_date}</TableCell>
    //           <TableCell align="right">{pantry[key].location}</TableCell>
    //           <TableCell align="right">{pantry[key].date_of_shopping}</TableCell>
    //         </TableRow>
    //       ))}
    //     </TableBody>
    //   </Table>
    // </TableContainer>

    <div>
      {Object.keys(pantry).map( (key, i) => {
            return(
              <div>
                <p>{JSON.stringify(pantry[key].name)}</p>
                <p>{JSON.stringify(pantry[key].exp_date["$date"])}</p>
                <p>{JSON.stringify(pantry[key].location)}</p>
                <p>{JSON.stringify(pantry[key].date_of_shopping["$date"])}</p>
              </div>
              );
        })}
    </div>

  );
}