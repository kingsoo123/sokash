import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import clsx from "clsx";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import { IconButton, TextField } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import { useGlobalState } from "../../Hooks/GlobalState";
import Grid from "@material-ui/core/Grid";
import Slide from "@material-ui/core/Slide";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

const useStyles = makeStyles((theme) => ({
  root: {
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    margin: 10,
    color: theme.palette.text.secondary,
    boxShadow: "0px 4px 12px rgba(35, 209, 35, 0.31)",
    borderRadius: "20px",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    padding: 2,
    // margin: 10,
  },
  button: {
    textAlign: "center",
    height: "48px",
    width: "21px",
    border: "1px solid #007945",
    borderRadius: "50px",
    minWidth: "92%",
    margin: 20,
    color: "#ffffff",
    backgroundColor: "#007945",
    "&:hover": {
      color: "#007945",
      backgroundColor: "#ffffff",
    },
  },
  radio: {
    color: "#007945",
    //   backgroundColor: ''
  },
  icon: {
    borderRadius: "50%",
    width: 16,
    height: 16,
    boxShadow:
      "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
    backgroundColor: "#f5f8fa",
    backgroundImage:
      "linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",
    "$root.Mui-focusVisible &": {
      outline: "2px auto rgba(19,124,189,.6)",
      outlineOffset: 2,
    },
    "input:hover ~ &": {
      backgroundColor: "#00683B",
    },
    "input:disabled ~ &": {
      boxShadow: "none",
      background: "rgba(206,217,224,.5)",
    },
  },
  checkedIcon: {
    backgroundColor: "#00683B",
    backgroundImage:
      "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
    "&:before": {
      display: "block",
      width: 16,
      height: 16,
      backgroundImage: "radial-gradient(#fff,#fff 28%,transparent 32%)",
      content: '""',
    },
    "input:hover ~ &": {
      backgroundColor: "#00683B",
    },
  },
}));

// Inspired by blueprintjs
function StyledRadio(props) {
  const classes = useStyles();

  return (
    <Radio
      className={classes.root}
      disableRipple
      color="default"
      checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
      icon={<span className={classes.icon} />}
      {...props}
    />
  );
}
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="right" ref={ref} {...props} />;
});
function getSteps() {
  return ["", "", "", "", ""];
}

export default function PersonalLoan2() {
  const [, setOpenPersonal1] = useGlobalState("Personal1Open");
  const [openPersonal2, setOpenPersonal2] = useGlobalState("Personal2Open");
  const [, setOpenPersonal3] = useGlobalState("Personal3Open");
  const classes = useStyles();
  const [age, setAge] = React.useState("");

  const { loanAmount, setLoanAmount, loanTenure, setLoanTenure } = useContext(
    UserContext
  );
  console.log(loanAmount);

  // const handleAmount = (e)=>{
  //   setLoanAmount(e.target.value)
  //   console.log(e.target.value);
  // }

  const handleClose = () => {
    setOpenPersonal2(false);
  };

  const [activeStep, setActiveStep] = React.useState(1);
  const steps = getSteps();

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
  const [value, setValue] = React.useState("female");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div>
      <Dialog
        onClose={handleClose}
        TransitionComponent={Transition}
        aria-labelledby="customized-dialog-title"
        open={openPersonal2}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          <ArrowBackIcon
            onClick={() => {
              setOpenPersonal1(true);
              setOpenPersonal2(false);
            }}
            style={{ cursor: "pointer" }}
          />
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label) => (
              <Step key={label} style={{ color: "#00683B" }}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </DialogTitle>
        <DialogContent>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12}>
              <Typography
                style={{ textAlign: "center" }}
                variant="h5"
                gutterBottom
              >
                Loan Amount
              </Typography>
              <Typography
                style={{ textAlign: "center" }}
                variant="overline"
                gutterBottom
              >
                You are qualified for up to NGN 10,000.00
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12}>
              {/* <CssTextField 
                            className={classes.textField}
                            id="standard-basic" 
                            placeholder="Amount"
                            type="number"
                            fullWidth
                            required
                            
                            />   */}

              <input
                type="number"
                placeholder="Enter Amount"
                onChange={(e) => {
                  setLoanAmount(e.target.value);
                }}
              />
              <Typography
                style={{ textAlign: "center" }}
                variant="h5"
                gutterBottom
              ></Typography>
              {/* <div style={{ textAlign: "center" }}>
                <FormControl component="fieldset">
                  <FormLabel style={{ color: "black" }} component="legend">
                    Duration of loan
                  </FormLabel>
                  <RadioGroup aria-label="gender" name="customized-radios">
                    <FormControlLabel
                      value="female"
                      control={<StyledRadio />}
                      label="15 days"
                    
                    />{" "}
                    Payback amount is NGN 10,842.00
                    <FormControlLabel
                      value="male"
                      control={<StyledRadio />}
                      label="30 Days"
                      
                    />{" "}
                    Payback amount is NGN 11,542.00
                    <FormControlLabel
                      value="other"
                      control={<StyledRadio />}
                      label="60 Days"
                    />{" "}
                    Payback amount is NGN 12,242.00
                  </RadioGroup>
                </FormControl>
              </div> */}

              <div style={{ textAlign: "center" }} onChange={(e)=>{setLoanTenure(e.target.value);}}>
                  <input type="radio" id="male" name="gender" value="15"/>
                  <label for="male">15 days</label><br/>
                  <label for="male">Payback amount is NGN 10,842.00</label><br/>
                  <input type="radio" id="female" name="gender" value="30"/>
                  <label for="male">30 days</label><br/>
                  <label for="female">Payback amount is NGN 11,542.00</label><br/>
                  <input type="radio" id="other" name="gender" value="60"/>
                  <label for="male">60 days</label><br/>
                  <label for="other">Payback amount is NGN 12,242.00</label>
              </div>
            </Grid>
            <Grid item xs={12} sm={12}>
              <Button
                onClick={() => {
                  setOpenPersonal2(false);
                  setOpenPersonal3(true);
                }}
                className={classes.button}
                variant="contained"
              >
                Next
              </Button>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions></DialogActions>
      </Dialog>
    </div>
  );
}
