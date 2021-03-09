import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import {Grid,Typography, Button} from '@material-ui/core';
import LoanHistory from './Include/LoanHistory';
import {Link} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 1,
    margin: 10,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    margin: 10,
    color: theme.palette.text.secondary,
    boxShadow: '0px 4px 12px rgba(35, 209, 35, 0.31)',
    borderRadius: '20px',
  },
  button:{
    height: '58px',
    width: '21px',
    border: '1px solid #007945',
    borderRadius: '50px',
    minWidth: '40%',
    marginLeft: 10,
    margin: 12,
    color: "#ffffff",
    backgroundColor: "#007945",
    "&:hover":{
       color:"#007945",
       backgroundColor: "#ffffff",
    },
  },
}));

export default function LoanHistoryPage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
        <Typography variant="h4" gutterBottom>
          Loan History
          <Button className={classes.button} variant="contained" component={Link}
            to="/account/loan-calculator">
         loan calculator
        </Button>
        </Typography>
        
          <Paper className={classes.paper}>
           <LoanHistory />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
