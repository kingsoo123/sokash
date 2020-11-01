import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import {Grid, TextField, withStyles,Typography} from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Pie } from '@reactchartjs/react-chart.js'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  formControl: {
    // margin: theme.spacing(1),
    minWidth: 120,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));
const CssTextField = withStyles({
    root: {
      '& label.Mui-focused': {
        color: 'green',
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: 'green',
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: 'red',
        },
        '&:hover fieldset': {
          borderColor: 'yellow',
        },
        '&.Mui-focused fieldset': {
          borderColor: 'green',
        },
      },
    },
  })(TextField);
export default function BusinessLoanCalculator() {
  const classes = useStyles();
  const [age, setAge] = React.useState('');
  const [principal, setPrincipal] = useState(150000);
  const [time, setTime] = useState(2);
  const [rate, setRate] = useState(28.5);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalPayBack, setTotalPayBack] = useState(0);
  const [repaymentPlan, setRepaymentPlan] = useState(0);

  function CalculateInterest() {
     let I = (principal * rate * time) /100;
     setTotalInterest((I));  
     setTotalPayBack((I) + parseInt(principal));
  }

  function CalculateRepaymentPlan() {
    setRepaymentPlan((totalPayBack) / time);      
  }
  
  function UpdateRate() {
    
    if(principal == (150000)) {
        setRate(28.5)  
    }
   if(principal > (1000000)) {
       setRate(28.5)
   }
   

  }
 useEffect(() => {
    UpdateRate()
    CalculateInterest() 
 }, [time, principal, rate])

 useEffect(() => {
    UpdateRate()
    CalculateRepaymentPlan() 
 }, [totalPayBack, time])
   
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const data = {
    labels: ['Total Payback', 'Total Interest'],
    datasets: [
      {
        label: '# of Votes',
        data: [totalPayBack, totalInterest],
        backgroundColor: [
          '#007945',
          '#23D123',
          
        ],
        borderColor: [
          '#007945',
          '#23D123',
          
        ],
        borderWidth: 1,
      },
    ],
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={3} >
        <Grid item xs={12} sm={6} style={{padding: 60}}>
        <CssTextField 
            className={classes.textField}
            id="standard-basic" 
            label="Loan Amount"
            placeholder="Loan Amount"
            type="number"
            onChange={(e) => setPrincipal(e.target.value)}
            defaultValue={principal}
            fullWidth/>  
         <CssTextField 
            className={classes.textField}
            id="standard-basic" 
            label="Interest Rate"
            placeholder="Interest Rate"
            type="number"
            onChange={(e) => setRate(e.target.value)}
            value={rate}
            fullWidth
            disabled/>   
        <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>

        <CssTextField 
            className={classes.textField}
            id="standard-basic" 
            label="Loan Duration"
            placeholder="Loan Duration"
            type="number"
            onChange={(e) => setTime(e.target.value)}
            defaultValue={time}
            />   
        </Grid>
        <Grid item xs={12} sm={4}>
        <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-helper-label">Tenure</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={age}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Month</MenuItem>
            <MenuItem value={20}>Years</MenuItem>
            </Select>
        </FormControl>
        </Grid>

        <Grid item xs={12} sm={5}>
        <CssTextField 
            className={classes.textField}
            id="standard-basic" 
            label="Re-payment Plan"
            placeholder="Re-payment Plan"
            type="number"
            value={repaymentPlan.toFixed(2)}
            disabled
            />    
        </Grid>

        <Grid item xs={12} sm={5}>
        <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-helper-label">Tenure</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={age}
          onChange={handleChange}
          disabled
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Month</MenuItem>
          <MenuItem value={20}>Years</MenuItem>
        </Select>
      </FormControl>
        </Grid>
        
        </Grid>
        </Grid>
        <Grid item xs={12} sm={6} style={{padding: 60, textAlign: 'left'}}>
        <Grid container spacing={1}>
        <Grid item xs={12} sm={6}>
        <Typography variant="caption" display="block" gutterBottom>
           TOTAL INTEREST
        </Typography>
        <Typography variant="h6" gutterBottom>
        <span style={{fontWeight: 'bolder', color: 'black'}}>NGN  { totalInterest.toLocaleString('en-US') } </span>
        </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
        <Typography variant="caption" display="block" gutterBottom>
           TOTAL PAYBACK
        </Typography>
        <Typography variant="h6" gutterBottom>
        <span style={{fontWeight: 'bolder', color: 'black'}}>NGN {totalPayBack.toLocaleString('en-US')} </span>
        </Typography>
        </Grid>
        <Grid item xs={12} sm={12} >
           <Pie data={data} />
        </Grid>
        </Grid>
        </Grid>
        {/* <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid> */}
      </Grid>
    </div>
  );
}
