import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Paper, Typography, Button} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 1,
    margin: 45,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    margin: 10,
    color: theme.palette.text.secondary,
    boxShadow: '0px 4px 12px rgba(35, 209, 35, 0.31)',
    borderRadius: '20px',
  },
  naira:{
    fontSize: 35,
    color: "#A6AAB4"
  }, 
  amount:{
    color: "#00683B",
    fontWeight: 'bolder',
    fontSize: 80,
  },
  button:{
    height: '58px',
    width: '21px',
    border: '1px solid #007945',
    borderRadius: '50px',
    minWidth: '60%',
    margin: 30,
    color: "#ffffff",
    backgroundColor: "#007945",
    "&:hover":{
       color:"#007945",
       backgroundColor: "#ffffff",
    },
  },
}));

export default function MyAccount() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        
        <Grid item xs={6}>
        <Grid container spacing={1}>
            <Grid item xs={12}>
            <Typography variant="h5" gutterBottom>
                Hi, Tobiloba
            </Typography>
            <Paper className={classes.paper}>
            <Typography variant="h4" gutterBottom>
               Wallet Balance
            </Typography>
            <Typography className={classes.amount} variant="h2" gutterBottom>
               150,000.00 <span className={classes.naira} >NGN</span>
            </Typography>
            </Paper>

            </Grid>
            <Grid item xs={6}>
            <Paper className={classes.paper}>
            <Typography variant="h4" gutterBottom>
            TAKE A LOAN
            </Typography>
            </Paper>

            </Grid>
            <Grid item xs={6}>
            <Paper className={classes.paper}>
            <Typography variant="h4" gutterBottom>
               PAYBACK
            </Typography>
            </Paper>

            </Grid>
        </Grid>
        </Grid>
        <Grid item xs={6}>
        <Button className={classes.button} variant="contained">
         loan calculator
        </Button>
        <Paper className={classes.paper}>
        
        </Paper>

        </Grid>
      </Grid>
    </div>
  );
}
