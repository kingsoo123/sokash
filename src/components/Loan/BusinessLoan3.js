import React from 'react';
import clsx from 'clsx';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { Button, InputAdornment, Input, FormControl } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import { useGlobalState } from '../../Hooks/GlobalState';
import { Grid, TextField } from '@material-ui/core';
import Slide from '@material-ui/core/Slide';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';

const styles = (theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
    closeButton: {
        position: 'absolute',
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
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
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
        // flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        margin: 10,
        color: theme.palette.text.secondary,
        boxShadow: '0px 4px 12px rgba(35, 209, 35, 0.31)',
        borderRadius: '20px',
    },
    formControl: {
        margin: theme.spacing(0),
        minWidth: 120,
        padding: 2,
        // margin: 10,
    },
    margin: {
        margin: theme.spacing(1),
      },
      withoutLabel: {
        marginTop: theme.spacing(3),
      },
      textField: {
        width: '70ch',
      },
    button: {
        textAlign: 'center',
        height: '48px',
        width: '21px',
        border: '1px solid #007945',
        borderRadius: '50px',
        minWidth: '92%',
        margin: 20,
        color: "#ffffff",
        backgroundColor: "#007945",
        "&:hover": {
            color: "#007945",
            backgroundColor: "#ffffff",
        },
    },
    radio:{
        color: '#007945',
      //   backgroundColor: ''
    },
    icon: {
      borderRadius: '50%',
      width: 16,
      height: 16,
      boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
      backgroundColor: '#f5f8fa',
      backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
      '$root.Mui-focusVisible &': {
        outline: '2px auto rgba(19,124,189,.6)',
        outlineOffset: 2,
      },
      'input:hover ~ &': {
        backgroundColor: '#00683B',
      },
      'input:disabled ~ &': {
        boxShadow: 'none',
        background: 'rgba(206,217,224,.5)',
      },
    },
    checkedIcon: {
      backgroundColor: '#00683B',
      backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
      '&:before': {
        display: 'block',
        width: 16,
        height: 16,
        backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
        content: '""',
      },
      'input:hover ~ &': {
        backgroundColor: '#00683B',
      },
    },
}));

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
    return ['', '', '', '', '', ''];
}

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
export default function BusinessLoan3() {
    const [openBusiness3, setOpenBusiness3] = useGlobalState('Business3Open');
    const [, setOpenBusines2] = useGlobalState('Business1Open');
    const [, setOpenBusiness4] = useGlobalState('Business4Open');
    const classes = useStyles();
    const [, setAge] = React.useState('');


    const handleClose = () => {
        setOpenBusiness3(false);
    };


    const [activeStep, setActiveStep] = React.useState(2);
    const steps = getSteps();

    return (
        <div >
            <Dialog onClose={handleClose} TransitionComponent={Transition}
                aria-labelledby="customized-dialog-title" open={openBusiness3}>
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    <ArrowBackIcon onClick={() => { setOpenBusines2(true); setOpenBusiness3(false); }} style={{ cursor: 'pointer' }} />
                    <Stepper activeStep={activeStep} alternativeLabel>
                        {steps.map((label) => (
                            <Step key={label} style={{ color: '#00683B' }}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                </DialogTitle>
                <DialogContent>
                <Grid container spacing={3}>
                        <Grid item xs={12} sm={12}>
                        <Typography style={{textAlign: 'center'}} variant="h5" gutterBottom>
                          Loan Amount
                        </Typography>
                        <Typography style={{textAlign: 'center'}} variant="overline" gutterBottom>
                        You are qualified for up to NGN 10,000.00
                        </Typography>
                        </Grid>
                        <Grid item xs={12} sm={12}>
                        <CssTextField 
                            className={classes.textField}
                            id="standard-basic" 
                            placeholder="Amount"
                            type="number"
                            fullWidth/>  
                        <Typography style={{textAlign: 'center'}} variant="h5" gutterBottom>
                           
                        </Typography> 
                        <div  style={{textAlign: 'center'}}>
                        <FormControl component="fieldset">
                        <FormLabel style={{color: 'black'}} component="legend">Duration of loan</FormLabel>
                        <RadioGroup defaultValue="female" aria-label="gender"  name="customized-radios">
                            <FormControlLabel value="female" control={<StyledRadio />} label="15 days" /> Payback amount is NGN 10,842.00
                            <FormControlLabel value="male" control={<StyledRadio />} label="30 Days" /> Payback amount is NGN 11,542.00
                            <FormControlLabel value="other" control={<StyledRadio />} label="60 Days" /> Payback amount is NGN 12,242.00
                        </RadioGroup>
                        </FormControl>
                        </div>     
                        </Grid>
                        <Grid item xs={12} sm={12}>
                        <Button onClick={() => {setOpenBusiness3(false); setOpenBusiness4(true)}} className={classes.button} variant="contained">
                           Next
                        </Button>                        
                      </Grid>
                    </Grid>
                </DialogContent>
                    <DialogActions>
                    </DialogActions>
            </Dialog>
        </div>
    );
}
