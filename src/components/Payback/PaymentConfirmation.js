import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import { useGlobalState } from '../../Hooks/GlobalState';
import Grid from '@material-ui/core/Grid';
import Slide from '@material-ui/core/Slide';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';


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
  success:{
      color: "#23D123",
      fontSize: 150,
      textAlign: 'center',
  }
}));
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
});
  

export default function PaymentConfirmation() {
    const [openPaymentConfirmation, setOpenPaymentConfirmation] = useGlobalState('PaymentConfirmation');
    const classes = useStyles();
    const [] = React.useState('');


    const handleClose = () => {
        setOpenPaymentConfirmation(false);
    };


    const [] = React.useState(4);

    return (
        <div >
            <Dialog onClose={handleClose} TransitionComponent={Transition}
                aria-labelledby="customized-dialog-title" open={openPaymentConfirmation}>
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                  
                </DialogTitle>
                <DialogContent>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={12}>
                          <div style={{textAlign: 'center'}}>
                            <VerifiedUserIcon className={classes.success} />
                          </div>
                        </Grid>
                        <Grid item xs={12} sm={12}>
                        <Typography style={{textAlign: 'center'}} variant="h5" gutterBottom>
                         Confirmed
                        </Typography>
                        </Grid>
                        <Grid item xs={12} sm={12}>
                        <div style={{textAlign: 'center'}} >
                        <Typography variant="p" gutterBottom>
                           Your payment has been received. You will receive a notification on the status of your payment shortly. Thank you! 
                         </Typography>
                        </div>
                        </Grid>
                        <Grid item xs={12} sm={12}>
                        <Button className={classes.button} variant="contained">
                           Go to dashboard
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
