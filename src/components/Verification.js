import React, { useContext, useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { UserContext } from "./context/UserContext";
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
    fontSize: 10,
    backgroundColor: "#007945",
    "&:hover": {
      color: "#007945",
      backgroundColor: "#ffffff",
    },
  },

  textField: {
    color: "#007945",
  },
  error: {
    color: "red",
    fontSize: "20px",
    fontWeight: "500",
  },
  eye: {
    position: "absolute",
    top: "38%",
    right: "-1%",
  },
}));
const CssTextField = withStyles({
  root: {
    width: 20,
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

const Verification = ({ history }) => {
  const { phone_number, country_code, otp, id } = useContext(UserContext);
  const [tokenVerify, setTokenVerify] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);
  const classes = useStyles();

  console.log(otp, id);

  const tokenData = { token: otp };
  const HandleTokenChange = (e) => {
    if (isNaN(e.target.value)) {
      setErrorMessage(true);
    } else {
      setErrorMessage(false);
      setTokenVerify(e.target.value);
    }
  };

  const verifyPhoneNumber = () => {
    if (+tokenVerify === otp) {
      fetch("https://backend.api.sokash.co/public/api/verify_otp", {
        method: "POST",
        mode: "cors",
        body: JSON.stringify(tokenData),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      })
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          localStorage.setItem('tokenData', json.data.token)})
        .catch((err) => console.log(err));
      history.push("/account");
    } else {
      console.log("no place to run to");
    }
  };
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
        <Typography variant="h4" gutterBottom>
          Verification Code
        </Typography>
        <Typography variant="body2" gutterBottom>
          An SMS with the 6-digit code has been sent to <p></p>+({country_code})
          {phone_number}
        </Typography>
        <form className={classes.root} noValidate autoComplete="off">
          <Grid container spacing={3} style={{ padding: 50 }}>
            <Grid item xs={3}></Grid>
            <Grid item xs={9}>
              <div id="divOuter">
                <div id="divInner">
                  <input
                    id="partitioned"
                    type="password"
                    maxlength="6"
                    onChange={HandleTokenChange}
                  />
                  <small style={{ color: `${errorMessage ? "red" : "white"}` }}>
                    {errorMessage ? "Enter a number" : ""}
                  </small>
                </div>
              </div>
            </Grid>
          </Grid>

          <Typography variant="body2" gutterBottom>
            Didn’t receive an SMS? We will resend the code 
          </Typography>

          <Button
            // component={Link}
            // to="/account/dashboard"
            className={classes.button}
            variant="contained"
            onClick={verifyPhoneNumber}
          >
            Verify Phone Number
          </Button>
        </form>
      </Container>
    </React.Fragment>
  );
};

export default Verification;
