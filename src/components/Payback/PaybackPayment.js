import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
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
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(0),
    textAlign: 'center',
    margin: 5,
    color: theme.palette.text.secondary,
    boxShadow: '0px 4px 12px rgba(35, 209, 35, 0.31)',
    borderRadius: '20px',
    cursor: 'pointer',
    padding: 5,
    margin: 15,
  },

}));
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
export default function PaybackPayment() {
  const [, setPayback] = useGlobalState('Payback');
  const [PaybackPayment, setPaybackPayment] = useGlobalState('PaybackPayment');
  const [PaymentConfirmation, setPaymentConfirmation] = useGlobalState('PaymentConfirmation')

  const classes = useStyles();

  const handleClose = () => {
    setPaybackPayment(false);
  };

  return (
    <div>
      <Dialog onClose={handleClose} TransitionComponent={Transition} aria-labelledby="customized-dialog-title" open={PaybackPayment}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
        </DialogTitle>
        <DialogContent>
        <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
        <Typography variant="h4" style={{textAlign: 'center'}} gutterBottom>
        Payment option
        </Typography>
         </Grid>
        <Grid item xs={12} sm={12}>
          <Paper className={classes.paper} onClick={() => {setPaymentConfirmation(true); setPaybackPayment(false) }}>
          <Typography variant="h5" gutterBottom>
             Bank Transfer
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Paper className={classes.paper} onClick={() => {setPaymentConfirmation(true); setPaybackPayment(false)}}>
          <Typography variant="h5" gutterBottom>
               USSD Transfer
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Paper className={classes.paper} onClick={() => {setPaymentConfirmation(true);setPaybackPayment(false) }}>
          <Typography variant="h5" gutterBottom>
             Debit/Credit Card 
            </Typography>
          </Paper>
        </Grid>
        </Grid>
        </DialogContent>
        <DialogActions>
          
        </DialogActions>
      </Dialog>
    </div>
  );
}
