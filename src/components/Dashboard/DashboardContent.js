import React, { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Typography, Button } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import LoanHistory from "./Include/LoanHistory";
import PlayStore from "./playstore.png";
import Appstore from "./appstore.png";
import Getloan from "./getloan.png";
import Payloan from "./payloan.png";
import Loan from "../Loan/index";
import LoanPersonal1 from "../Loan/PersonalLoan1";
import LoanPersonal2 from "../Loan/PersonalLoan2";
import LoanPersonal3 from "../Loan/PersonalLoan3";
import LoanPersonal4 from "../Loan/PersonalLoan4";
import LoanPersonal5 from "../Loan/PersonalLoan5";

import LoanBusiness1 from "../Loan/BusinessLoan1";
import LoanBusiness2 from "../Loan/BusinessLoan2";
import LoanBusiness3 from "../Loan/BusinessLoan3";
import LoanBusiness4 from "../Loan/BusinessLoan4";
import LoanBusiness5 from "../Loan/BusinessLoan5";
import LoanBusiness6 from "../Loan/BusinessLoan6";

import Payback from "../Payback/Payback";
import PaybackPayment from "../Payback/PaybackPayment";
import PaymentConfirmation from "../Payback/PaymentConfirmation";

import { Link } from "react-router-dom";
import { useGlobalState } from "../../Hooks/GlobalState";

const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 1,
    margin: 30,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    margin: 10,
    color: theme.palette.text.secondary,
    boxShadow: "0px 4px 12px rgba(35, 209, 35, 0.31)",
    borderRadius: "20px",
  },
  naira: {
    fontSize: 35,
    color: "#A6AAB4",
  },
  amount: {
    color: "#00683B",
    fontWeight: "bolder",
    fontSize: 80,
  },
  button: {
    height: "58px",
    width: "21px",
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
  history: {
    fontWeight: 600,
    fontSize: "22px",
    lineHeight: "33px",
    color: "#272727",
    textAlign: "left",
  },
  wallet: {
    fontSize: "25px",
    lineHeight: "20px",
    letterSpacing: "0.2px",
    textTransform: "uppercase",
    textAlign: "left",
    color: "#171D33",
    margin: 15,
  },
}));

export default function DashboardContent() {
  const {
    phone_number,
    password,
    email,
    setEmail,
    setPhoneNumber,
    setPassword,
    firstName,
    id,
  } = useContext(UserContext);

  console.log('PHONE NUMBER::::::::::::::::::::::',phone_number);
  const classes = useStyles();
  const [showLoan, setShowLoan] = useGlobalState("indexOpen");
  const [showLoanPersonal1, setShowLoanPersonal1] = useGlobalState(
    "Personal1Open"
  );
  const [showLoanPersonal2, setShowLoanPersonal2] = useGlobalState(
    "Personal2Open"
  );
  const [showLoanPersonal3, setShowLoanPersonal3] = useGlobalState(
    "Personal3Open"
  );
  const [showLoanPersonal4, setShowLoanPersonal4] = useGlobalState(
    "Personal4Open"
  );
  const [showLoanPersonal5, setShowLoanPersonal5] = useGlobalState(
    "Personal5Open"
  );

  const [showLoanBusiness1, setShowLoanBusiness1] = useGlobalState(
    "Business1Open"
  );
  const [showLoanBusiness2, setShowLoanBusiness2] = useGlobalState(
    "Business2Open"
  );
  const [showLoanBusiness3, setShowLoanBusiness3] = useGlobalState(
    "Business3Open"
  );
  const [showLoanBusiness4, setShowLoanBusiness4] = useGlobalState(
    "Business4Open"
  );
  const [showLoanBusiness5, setShowLoanBusiness5] = useGlobalState(
    "Business5Open"
  );
  const [showLoanBusiness6, setShowLoanBusiness6] = useGlobalState(
    "Business6Open"
  );

  const [showPayback, setShowPayback] = useGlobalState("Payback");
  const [showPaybackPayment, setShowPaybackPayment] = useGlobalState(
    "PaybackPayment"
  );
  const [showPaymentConfirmation, setShowPaymentConfirmation] = useGlobalState(
    "PaymentConfirmation"
  );
  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        {showLoan ? <Loan /> : ""}
        {showLoanPersonal1 ? <LoanPersonal1 /> : ""}
        {showLoanPersonal2 ? <LoanPersonal2 /> : ""}
        {showLoanPersonal3 ? <LoanPersonal3 /> : ""}
        {showLoanPersonal4 ? <LoanPersonal4 /> : ""}
        {showLoanPersonal5 ? <LoanPersonal5 /> : ""}

        {showLoanBusiness1 ? <LoanBusiness1 /> : ""}
        {showLoanBusiness2 ? <LoanBusiness2 /> : ""}
        {showLoanBusiness3 ? <LoanBusiness3 /> : ""}
        {showLoanBusiness4 ? <LoanBusiness4 /> : ""}
        {showLoanBusiness5 ? <LoanBusiness5 /> : ""}
        {showLoanBusiness6 ? <LoanBusiness6 /> : ""}

        {showPayback ? <Payback /> : ""}
        {showPaybackPayment ? <PaybackPayment /> : ""}
        {showPaymentConfirmation ? <PaymentConfirmation /> : ""}

        <Grid item xs={12} sm={6}>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={12}>
              <Typography variant="h4" gutterBottom>
                Hi {firstName}
              </Typography>
              <Paper className={classes.paper}>
                <Typography
                  className={classes.wallet}
                  variant="h4"
                  gutterBottom
                >
                  Wallet Balance
                </Typography>
                <Typography
                  className={classes.amount}
                  variant="h2"
                  gutterBottom
                >
                  150,000.00 <span className={classes.naira}>NGN</span>
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper className={classes.paper}>
                <Typography
                  style={{ cursor: "pointer" }}
                  onClick={() => setShowLoan(true)}
                  variant="h4"
                  gutterBottom
                >
                  <img
                    style={{ marginTop: 0 }}
                    src={Getloan}
                    height="120px"
                    width="120px"
                  ></img>
                  <br></br>
                  TAKE A LOAN
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper className={classes.paper}>
                <Typography
                  style={{ cursor: "pointer" }}
                  onClick={() => setShowPayback(true)}
                  variant="h4"
                  gutterBottom
                >
                  <img
                    style={{ marginTop: 0 }}
                    src={Payloan}
                    height="120px"
                    width="120px"
                  ></img>
                  <br></br>
                  PAYBACK
                </Typography>
              </Paper>
            </Grid>
            <Button className={classes.button} variant="contained" component={Link}
            to="/account/loan-calculator">
              loan calculator
            </Button>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div style={{ margin: 0 }}>
            <a href="https://play.google.com/store/apps/details?id=com.app.softkash">
              <button
                type="submit"
                style={{
                  width: 250,
                  height: 90,
                  border: "none",
                  borderRadius: 20,
                  cursor: "pointer",
                }}
              >
                <img
                  style={{ marginTop: 0 }}
                  src={PlayStore}
                  height="50px"
                  width="200px"
                ></img>
              </button>
            </a>
            <a href="https://apps.apple.com/us/app/sokash/id1557036963">
              <button
                type="submit"
                style={{
                  width: 250,
                  height: 90,
                  border: "none",
                  borderRadius: 20,
                  marginLeft: 20,
                  cursor: "pointer",
                }}
              >
                <img
                  style={{ marginTop: 0 }}
                  src={Appstore}
                  height="50px"
                  width="200px"
                ></img>
              </button>
            </a>
          </div>
          <Paper className={classes.paper}>
            <Typography className={classes.history} variant="h5" gutterBottom>
              Loan History <span> </span>
            </Typography>
            <LoanHistory />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
