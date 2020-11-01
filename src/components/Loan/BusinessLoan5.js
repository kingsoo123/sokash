import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import {Button, TextField} from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import { useGlobalState } from '../../Hooks/GlobalState';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Slide from '@material-ui/core/Slide';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';


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
        margin: theme.spacing(1),
        minWidth: 120,
        padding: 2,
        // margin: 10,
      },
      button:{
        textAlign: 'center',
        height: '48px',
        width: '21px',
        border: '1px solid #007945',
        borderRadius: '50px',
        minWidth: '92%',
        margin: 20,
        color: "#ffffff",
        backgroundColor: "#007945",
        "&:hover":{
           color:"#007945",
           backgroundColor: "#ffffff",
        },
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

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
});
function getSteps() {
    return ['', '', '', '', '', ''];
  }
  

export default function Business5() {
    const [, setOpenBusiness4] = useGlobalState('Business4Open');
    const [openBusiness5, setOpenBusiness5] = useGlobalState('Business5Open');
    const [openBusiness6, setOpenBusiness6] = useGlobalState('Business6Open');
    const classes = useStyles();
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const handleClickOpen = () => {
        setOpenBusiness5(true);
    };
    const handleClose = () => {
        setOpenBusiness5(false);
    };

    function getStepContent(stepIndex) {
        switch (stepIndex) {
            case 0:
                return '';
            case 1:
                return '';
            case 2:
                return '';
            case 3:
                return '';
            case 4: 
                return '';
            default:
                return '';
        }
    }

    const [activeStep, setActiveStep] = React.useState(4);
    const steps = getSteps();

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };
  
    
    return (
        <div >
            <Dialog onClose={handleClose} TransitionComponent={Transition}
                aria-labelledby="customized-dialog-title" open={openBusiness5}>
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    <ArrowBackIcon onClick={() => { setOpenBusiness4(true); setOpenBusiness5(false); }} style={{ cursor: 'pointer' }} />
                    <Stepper activeStep={activeStep}  alternativeLabel>
                        {steps.map((label) => (
                            <Step key={label} style={{color: '#00683B'}}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                </DialogTitle>
                <DialogContent>
                    <Grid container spacing={3}>
                    <Grid item xs={12} sm={12}>
                        <Typography style={{textAlign: 'center'}} variant="h5" gutterBottom>
                           Summary
                        </Typography>
                        </Grid>
                        <Grid item xs={12} sm={12}>
                         <div style={{margin: 25, }}>
                        <CssTextField 
                            className={classes.textField}
                            id="standard-basic" 
                            label="You receive"
                            defaultValue="NGN 10,000.00"
                            type="text"
                            fullWidth
                            disabled/>
                        </div>
                         <div style={{margin: 25, }}>
                        <CssTextField 
                            className={classes.textField}
                            id="standard-basic" 
                            label="Interest Fee"
                            defaultValue="NGN 842.00"
                            type="text"
                            fullWidth
                            disabled/>
                        </div>
                         <div style={{margin: 25, }}>
                        <CssTextField 
                            className={classes.textField}
                            id="standard-basic" 
                            label="Due Date"
                            defaultValue="15 November, 2020"
                            type="text"
                            fullWidth
                            disabled/>
                        </div>         
                        </Grid>
                        <Grid item xs={12} sm={12}>
                        <Button onClick={() => {setOpenBusiness5(false); setOpenBusiness6(true)}} className={classes.button} variant="contained">
                           Confirm
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
