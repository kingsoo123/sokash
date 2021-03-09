import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

const columns = [
  { 
      id: 'date',
      label: 'Date', 
      minWidth: 120
 },
  {
       id: 'category', 
       label: 'Category', 
       minWidth: 180,
    //    align: 'right',
 },
  {
    id: 'purpose',
    label: 'Purpose',
    minWidth: 100,
    // align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'interest',
    label: 'Interest Rate',
    minWidth: 120,
    // align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'duration',
    label: 'Duration',
    minWidth: 100,
    // align: 'right',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'amount',
    label: 'Amount',
    minWidth: 150,
    // align: 'right',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'total',
    label: 'Total Payback',
    minWidth: 150,
    // align: 'right',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'status',
    label: 'Status',
    minWidth: 50,
    // align: 'right',
    format: (value) => value.toFixed(2),
  },
];

function createData(date, category, purpose, interest, duration, amount, total, status) {
//   const density = population / size;
  return { date, category, purpose, interest, duration, amount, total, status };
}



const useStyles = makeStyles({
  root: {
    width: '100%',
    boxShadow: '0px 4px 12px rgba(35, 209, 35, 0.31)',
    borderRadius: '20px', 
  },
  container: {
    maxHeight: 440,
  },
});

export default function StickyHeadTable() {
const [tableData, setTableData] = useState([])


console.log(tableData);



  const newRow =tableData.map(data=>{
    return createData(data.created_at, data.loan_type, data.reason, data.interest_rate, `${data.tenure}${data.tenure_type}`, data.amount, data.total_amount_and_interest, data.status);
  })


// const rows = [
//   createData('2020-10-22', 'Personal Loan', 'Rent', '5%', '6 months', 'NGN 50,000.00', 'ngn 50,000.00', 'Paid'),
//   createData('2020-10-22', 'Personal Loan', 'Rent', '5%', '6 months', 'NGN 50,000.00', 'ngn 50,000.00', 'Paid')
// ];



useEffect(async ()=>{
  await fetch(`https://backend.api.sokash.co/public/api/loans`)
  .then((response) => response.json())
  .then((result) => {
    setTableData(result.data.data)
  })
  .catch((error) => {
    console.error("Error:", error);
  });
},[])

  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {newRow.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 50, 100]}
        component="div"
        count={newRow.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
