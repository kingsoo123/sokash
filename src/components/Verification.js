import React, {useState, useEffect} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import {Typography, TextField, makeStyles, Grid, Button, InputAdornment, withStyles} from '@material-ui/core';
import Container from '@material-ui/core/Container';
import {Link} from 'react-router-dom';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEye } from "@fortawesome/free-solid-svg-icons";
// import { useForm } from "react-hook-form";
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
    fontSize: 10,
    backgroundColor: "#007945",
    "&:hover":{
       color:"#007945",
       backgroundColor: "#ffffff",
    },
  },
  
  textField:{
    color:"#007945",
  },
  error: {
    color: 'red',
    fontSize: '20px',
    fontWeight: '500'
},
eye: {
    position: 'absolute',
    top: '38%',
    right: '-1%',
}
}));
const CssTextField = withStyles({
    root: {
        width: 20,
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

export default function Verification() {
  const classes = useStyles();

  const [passwordShown, setPasswordShown] = useState(false);
const [counter, setCounter] = useState(15);
const [disable, setDisable] = useState(false);
// const { register } = useForm();
// const eye = <FontAwesomeIcon icon={faEye} />;



    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
    };
    const [token, setToken] = useState('');
    const [error, setError] = useState(false);
    useEffect(() => {
        if (token.length > 4) {
            setError(true);
        } else {
            setError(false);
        }
        disableButton();


        //Countdown Timer 
        const timer =
            counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
        return () => clearInterval(timer);

    }, [token, counter]);
    function handleChange(e) {
        setToken(e.target.value)
    }

    function inputRegex() {
        token.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1')
    };

    function disableButton() {
        if (2 == true) {
            setDisable(true)
        } else {
            setDisable(false)
        }
    };
    function validate() {
        if (token.length === 4) {
            // props.verifyLogin(token)
        }
    }
  return (
    <React.Fragment>
      <CssBaseline />
      <Container className={classes.cont} maxWidth="sm">
       <img className="App" src={ logo } style={{margin: 40}} height="30%" width="30%"></img>
       <Typography variant="h4" gutterBottom>
       Verification Code
      </Typography>
      <Typography variant="body2" gutterBottom>
      An SMS with the 4-digit code has been sent to <p></p>+2348012345678
      </Typography>
      <form className={classes.root} noValidate autoComplete="off">
      <Grid container spacing={3} style={{padding:50}}>
        <Grid item xs={3}>
       
        {/* <div id="divOuter">
          <div id="divInner">
            <input id="partitioned" type="text" maxlength="4" />
          </div>
        </div> */}
        
        </Grid>
        <Grid item xs={9}>
       
        <div id="divOuter">
          <div id="divInner">
            <input id="partitioned" type="text" maxlength="4" />
          </div>
        </div>
        
        </Grid>
        
      </Grid>
      
      <Typography variant="body2" gutterBottom>
            Didn’t receive an SMS?
            We will resend the code in 1:45
      </Typography>
       
      <Button className={classes.button} variant="contained">
          Verify Phone Number
      </Button>
    </form>
   
    </Container>
    </React.Fragment>
  );
}
