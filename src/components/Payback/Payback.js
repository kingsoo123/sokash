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
    textAlign: 'left',
    margin: 5,
    color: theme.palette.text.secondary,
    boxShadow: '0px 4px 12px rgba(35, 209, 35, 0.31)',
    borderRadius: '20px',
    cursor: 'pointer',
    padding: 5,
    margin: 15,
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
owned:{
    fontSize: '15px',
    lineHeight: '20px',
    letterSpacing: '0.2px',
    textTransform: 'uppercase',
    color: '#171D33',
  },
  amount:{
    fontSize: '50px',
    lineHeight: '62px',
    color: '#FF0000',
    margin: 35,
  }, 
  due:{
    fontSize: '14px',
    lineHeight: '18px',
    letterSpacing: '0.2px',
    color: '#171D33',
  }
}));
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="left" ref={ref} {...props} />;
});
export default function Payback() {
  const [open, setOpen] = useGlobalState('Payback');
  const [, setPayback] = useGlobalState('Payback');
  const [, setPaybackPayment] = useGlobalState('PaybackPayment');


  const classes = useStyles();

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog onClose={handleClose} TransitionComponent={Transition} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
         
        </DialogTitle>
        <DialogContent>
        <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
        <Typography variant="h4"  gutterBottom>
        Payback
        </Typography>
         </Grid>
        <Grid item xs={12} sm={12}>
          <Paper className={classes.paper}>
          <Typography className={classes.amount} variant="h5" gutterBottom>
           <p className={classes.owned}>Amount owed</p>
              50,000.00 <span className={classes.owned}>NGN</span>
            <p className={classes.due}> Due on 31st October, 2020</p>  
            </Typography>
          </Paper>
        </Grid>
        <Button onClick={() => {setPaybackPayment(true); setPayback(false)}} className={classes.button} variant="contained">
           PAYBACK NOW
        </Button> 
        </Grid>
        </DialogContent>
        <DialogActions>
        </DialogActions>
      </Dialog>
    </div>
  );
}
