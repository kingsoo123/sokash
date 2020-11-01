import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import {Grid,Typography, Button} from '@material-ui/core';
import PersonalLoanCalculator from './Include/PersonalLoanCalculator';
import BusinessLoanCalculator from './Include/BusinessLoanCalculator';

const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 1,
    margin: 30,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    margin: 10,
    color: theme.palette.text.secondary,
    boxShadow: '0px 4px 12px rgba(35, 209, 35, 0.31)',
    borderRadius: '20px',
  },
  
}));

export default function LoanCalculatorPage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
        <Typography variant="h4" gutterBottom>
          Loan Calculator
          
        </Typography>
        
          <Paper className={classes.paper}>
          <Typography  variant="h5" gutterBottom>
           Personal
        </Typography>
           <PersonalLoanCalculator />
           <Typography  variant="h5" gutterBottom>
           Business
        </Typography>
           <BusinessLoanCalculator />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
