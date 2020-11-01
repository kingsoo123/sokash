import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import {Typography, TextField, makeStyles, Grid, Button, InputAdornment, withStyles} from '@material-ui/core';
import Container from '@material-ui/core/Container';
import {Link} from 'react-router-dom';
import  logo from './logo-main.png';
import  google from './google.png';



const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      textAlign: 'center',
    },
  },
  cont:{
    textAlign: 'center',
    marginTop: 90,
  },
  button:{
    height: '28px',
    width: '71px',
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
  buttonGoogle:{
    height: '28px',
    width: '21px',
    borderRadius: '50px',
    border: '1px solid #FFC107',
    minWidth: '60%',
    margin: 10,
    color: "#171D33",
    backgroundColor: "#E5E5E5",
    fontSize: '1vh',
    "&:hover":{
       color:"#171D33",
       backgroundColor: "#ffffff",
    },
  },
  textField:{
    color:"#007945",
  }
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
export default function SendResetOtp() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <Container className={classes.cont} maxWidth="sm">
       <img className="App" src={ logo } style={{margin: 40}} height="30%" width="30%"></img>
       <Typography variant="h6" gutterBottom>
         Send Otp!
      </Typography>
      <Typography variant="body2" gutterBottom>
      Reset Your Password
      </Typography>
      <form className={classes.root} noValidate autoComplete="off">
      <Grid container spacing={3} style={{padding:50}}>
        <Grid item xs={12}>
        <CssTextField 
        className={classes.textField}
        id="standard-basic" 
        InputProps={{
          startAdornment: <InputAdornment position="start">+234</InputAdornment>,
        }}
        placeholder="Phone Number"
       fullWidth/>
        </Grid>        
      </Grid>
      
      <Button component={Link} to="/verify-reset" className={classes.button} variant="contained">
        Send Otp
      </Button>
    </form>
    </Container>
    </React.Fragment>
  );
}
