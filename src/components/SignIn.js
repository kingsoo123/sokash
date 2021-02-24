import React, {useState, createContext } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import {Typography, TextField, makeStyles, Grid, Button, InputAdornment, withStyles} from '@material-ui/core';
import Container from '@material-ui/core/Container';
import {Link} from 'react-router-dom';
import  logo from './logo-main.png';
import  google from './google.png';



export const LoginContext = createContext();

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
export default function SignIn() {
  const [phoneNumber, setPhoneNumber] = useState(null)
  const [password, setPassword] = useState(null);
  const [PhoneErrorMessage, setPhoneErrorMessage] = useState("");
  const [matchColor, setMatchColor] = useState();

console.log(phoneNumber);
console.log(password);

  const handlePhonNumberChange = (e) => {
    e.preventDefault();
    if(Number.isInteger(+e.target.value)){
      console.log('yes');
      setPhoneNumber(e.target.value);
      setPhoneErrorMessage(null);
      
    }else{
      console.log('no');
      setPhoneErrorMessage("Enter a number");
      setMatchColor("red");
    }  
  };

  const handlePasswordChange = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };


  const classes = useStyles();
  return (
    <React.Fragment>
      <LoginContext.Provider
        value={{ phoneNumber, password }}
      >
      <CssBaseline />
      <Container className={classes.cont} maxWidth="sm">
       <img className="App" src={ logo } style={{margin: 40}} height="30%" width="30%"></img>
       <Typography variant="h6" gutterBottom>
         Welcome back!
      </Typography>
      <Typography variant="body2" gutterBottom>
        Sign in to your dashboard
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
       fullWidth
       onChange={handlePhonNumberChange}/>
        <small style={{ color: `${matchColor}`, marginRight: 369}}>
          {PhoneErrorMessage}
        </small>
        </Grid>
        <Grid item xs={12}>
        <CssTextField 
        className={classes.textField}
        id="standard-basic" 
        placeholder="Password"
        type="password"
        fullWidth
        onChange={handlePasswordChange}/>
        <Typography  component={Link} to="/send-reset-otp" variant="body2" gutterBottom style={{textAlign: 'left', marginLeft: '50%', textDecoration: 'none', color: 'black'}}>
            Reset Password
        </Typography >
        </Grid>
        
      </Grid>
      
      <Button component={Link} to="/account/dashboard" className={classes.button} variant="contained">
        Sign in
      </Button>
    </form>
    <Typography variant="body2" gutterBottom>
       Or
    </Typography>
    <Button className={classes.buttonGoogle} variant="contained">
        <img style={{ margin: 10}} src={google} height="15px" width="15px" ></img>  Sign in with Google 
      </Button>
      <br></br>
      <Typography  component={Link} to="/register" variant="body2" style={{color: 'black', textDecoration: 'none'}} gutterBottom>
       Don’t have an account?  <span style={{color: '#23D123', cursor: 'pointer', fontWeight: 'bolder'}}  component={Link} to="/register">Register</span>
      </Typography>
    </Container>
    </LoginContext.Provider>
    </React.Fragment>
  );
}
