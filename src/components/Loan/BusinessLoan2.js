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
}));
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="left" ref={ref} {...props} />;
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
export default function BusinessLoan2() {
    const [openBusiness2, setOpenBusiness2] = useGlobalState('Business2Open');
    const [, setOpenBusines1] = useGlobalState('Business1Open');
    const [, setOpenBusiness3] = useGlobalState('Business3Open');
    const classes = useStyles();
    const [, setAge] = React.useState('');


    const handleClose = () => {
        setOpenBusiness2(false);
    };


    const [activeStep, setActiveStep] = React.useState(1);
    const steps = getSteps();

    return (
        <div >
            <Dialog onClose={handleClose} TransitionComponent={Transition}
                aria-labelledby="customized-dialog-title" open={openBusiness2}>
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    <ArrowBackIcon onClick={() => { setOpenBusines1(true); setOpenBusiness2(false); }} style={{ cursor: 'pointer' }} />
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
                            <Typography style={{ textAlign: 'center' }} variant="h5" gutterBottom>
                                Upload Documents
                        </Typography>
                        </Grid>
                        
                        <Grid item xs={12} sm={12}>
                            <div>
                                <FormControl className={clsx(classes.margin, classes.withoutLabel, classes.textField)}>
                                    <Input
                                        id="standard-adornment-weight"
                                        value="CAC certificate"
                                        // onChange={handleChange('weight')}
                                        endAdornment={<InputAdornment position="end">
                                            Upload
                                        </InputAdornment>}
                                        aria-describedby="standard-weight-helper-text"
                                        inputProps={{
                                            'aria-label': 'weight',
                                        }}
                                        fullWidth
                                    />
                                    </FormControl>
                                   
                            </div>
                        </Grid>
                            <Grid item xs={12} sm={12}>
                            <div>
                                <FormControl className={clsx(classes.margin, classes.withoutLabel, classes.textField)}>
                                    <Input
                                        id="standard-adornment-weight"
                                        value="Means of Identification"
                                        // onChange={handleChange('weight')}
                                        endAdornment={<InputAdornment position="end">
                                            Upload
                                        </InputAdornment>}
                                        aria-describedby="standard-weight-helper-text"
                                        inputProps={{
                                            'aria-label': 'weight',
                                        }}
                                        fullWidth
                                    />
                                    </FormControl>
                                   
                            </div>
                            </Grid>
                            <Grid item xs={12} sm={12}>
                            <div>
                                <FormControl className={clsx(classes.margin, classes.withoutLabel, classes.textField)}>
                                    <Input
                                        id="standard-adornment-weight"
                                        value="Other"
                                        // onChange={handleChange('weight')}
                                        endAdornment={<InputAdornment position="end">
                                            Upload
                                        </InputAdornment>}
                                        aria-describedby="standard-weight-helper-text"
                                        inputProps={{
                                            'aria-label': 'weight',
                                        }}
                                        fullWidth
                                    />
                                    </FormControl>
                                   
                            </div>
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <Button onClick={() => { setOpenBusiness2(false); setOpenBusiness3(true) }} className={classes.button} variant="contained">
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
