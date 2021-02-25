import React, { useContext, useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import {
  Typography,
  TextField,
  makeStyles,
  Grid,
  Button,
  InputAdornment,
  withStyles,
} from "@material-ui/core";
import Container from "@material-ui/core/Container";
import { Link } from "react-router-dom";
import logo from "./logo-main.png";
import google from "./google.png";
import { UserContext } from "./context/UserContext";



const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      textAlign: "center",
    },
  },
  cont: {
    textAlign: "center",
    marginTop: 90,
  },
  button: {
    height: "28px",
    width: "71px",
    border: "1px solid #007945",
    borderRadius: "50px",
    minWidth: "60%",
    margin: 30,
    color: "#ffffff",
    backgroundColor: "#007945",
    "&:hover": {
      color: "#007945",
      backgroundColor: "#ffffff",
    },
  },
  buttonGoogle: {
    height: "28px",
    width: "21px",
    borderRadius: "50px",
    border: "1px solid #FFC107",
    minWidth: "60%",
    margin: 10,
    color: "#171D33",
    backgroundColor: "#E5E5E5",
    fontSize: "1vh",
    "&:hover": {
      color: "#171D33",
      backgroundColor: "#ffffff",
    },
  },
  textField: {
    color: "#007945",
  },
}));
const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "green",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "green",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "red",
      },
      "&:hover fieldset": {
        borderColor: "yellow",
      },
      "&.Mui-focused fieldset": {
        borderColor: "green",
      },
    },
  },
})(TextField);
const Register = ({history}) => {
  const {phone_number, password, email, setEmail, confirm_password, country_code, setPassword, setPhoneNumber, setConfirmPassword, setToken} = useContext(UserContext)
  const [errorMessage, setErrorMessage] = useState("");
  const [PhoneErrorMessage, setPhoneErrorMessage] = useState("");
  const [matchColor, setMatchColor] = useState();

  const RegData = {phone_number:phone_number, password:password, confirm_password:confirm_password, country_code:country_code, email:email};


  const handlePhonNumberChange = (e) => {
    e.preventDefault();
    if (!isNaN(e.target.value)) {
      console.log("yes");
      setPhoneNumber(e.target.value);
      setPhoneErrorMessage(null);
    } else {
      console.log("no");
      setPhoneErrorMessage("Enter a number");
      setMatchColor("red");
    }
  };

  const handlePasswordChange = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    e.preventDefault();
    if (e.target.value === password) {
      setConfirmPassword(e.target.value);
      setErrorMessage("Password match");
      setMatchColor("blue");
    } else {
      setErrorMessage("Password must match");
      setMatchColor("red");
    }
  };

  const handleEmailChange = (e)=>{
    setEmail(e.target.value)
  }



  const handleClick = ()=>{
    if(RegData.phone_number !== '' && RegData.password !== '' && RegData.confirm_password !== ''){
      fetch('https://softkash-api.herokuapp.com/api/register', {
        method: "POST",
        mode: 'cors',
        body: JSON.stringify(RegData),
        headers: {"Content-type": "application/json; charset=UTF-8"}
      })
    .then(response => response.json()) 
    .then(json => setToken(json.data.verification_token))
    .catch(err => console.log(err))
    history.push('/verification')
    }else{
      console.log('no place to run to');
    } 
  }
  const classes = useStyles();
  return (
         <React.Fragment>
            <CssBaseline />
            <Container className={classes.cont} maxWidth="sm">
              <img
                className="App"
                src={logo}
                style={{ margin: 40 }}
                height="30%"
                width="30%"
              ></img>
              <Typography variant="h6" gutterBottom>
                Let’s get you started!
              </Typography>
              <Typography variant="body2" gutterBottom>
                Create your account
              </Typography>
              <form className={classes.root} noValidate autoComplete="off">
                <Grid container spacing={3} style={{ padding: 50 }}>
                  <Grid item xs={12}>
                    <CssTextField
                      className={classes.textField}
                      id="standard-basic"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            +{country_code}
                          </InputAdornment>
                        ),
                      }}
                      placeholder="Phone Number"
                      onChange={handlePhonNumberChange}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <CssTextField
                      className={classes.textField}
                      id="standard-basic"
                      placeholder="Email"
                      onChange={handleEmailChange}
                      fullWidth
                    />
                  </Grid>
                  <small style={{ color: `${matchColor}`, marginLeft: 10}}>
                      {PhoneErrorMessage}
                    </small>
                  <Grid item xs={12}>
                    <CssTextField
                      className={classes.textField}
                      id="standard-basic"
                      placeholder="Password"
                      type="password"
                      onChange={handlePasswordChange}
                      fullWidth
                    />
                  </Grid>
                  <small style={{ color: `${matchColor}`, marginLeft: 10 }}>
                    {errorMessage}
                  </small>
                  <Grid item xs={12}>
                    <CssTextField
                      className={classes.textField}
                      id="standard-basic"
                      placeholder="Confirm Password"
                      type="password"
                      onChange={handleConfirmPasswordChange}
                      fullWidth
                    />
                  </Grid>
                </Grid>
                <Button
                  // component={Link}
                  // to="/verification"
                  className={classes.button}
                  variant="contained"
                  onClick={handleClick}
                >
                  Continue
                </Button>
              </form>
              <Typography variant="body2" gutterBottom>
                Or
              </Typography>
              <Button className={classes.buttonGoogle} variant="contained">
                <img
                  style={{ margin: 10 }}
                  src={google}
                  height="15px"
                  width="15px"
                ></img>{" "}
                Sign in with Google
              </Button>
              <br></br>
              <Typography
                component={Link}
                to="/"
                variant="body2"
                style={{ color: "black", textDecoration: "none" }}
                gutterBottom
              >
                Already have an account?{" "}
                <span
                  style={{
                    color: "#23D123",
                    cursor: "pointer",
                    fontWeight: "bolder",
                  }}
                  component={Link}
                  to="/"
                >
                  Sign in{" "}
                </span>
              </Typography>
            </Container>
        </React.Fragment>
    
  );
};

export default Register;
