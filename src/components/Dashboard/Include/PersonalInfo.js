import React from 'react';
import { makeStyles, withStyles, } from '@material-ui/core/styles';
import {Paper, TextField, InputAdornment, Badge, Button, Typography} from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import {Link} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  large: {
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    padding: 10,
    color: theme.palette.text.secondary,
    boxShadow: '0px 4px 12px rgba(35, 209, 35, 0.31)',
    borderRadius: '20px',
  },
  button:{
    height: '38px',
    width: '71px',
    border: '1px solid #007945',
    borderRadius: '50px',
    minWidth: '60%',
    margin: 30,
    color: "#ffffff",
    backgroundColor: "#007945",
    "&:hover":{
       color:"#007945",
       backgroundColor: "#ffffff",
    },
  },
}));

const SmallAvatar = withStyles((theme) => ({
    root: {
      width: 22,
      height: 22,
      border: `2px solid ${theme.palette.background.paper}`,
    },
  }))(Avatar);

const CssTextField = withStyles({
    root: {
        padding: 20,
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

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={3}>
          <Paper className={classes.paper}>
      <Badge
        overlap="circle"
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        badgeContent={<VerifiedUserIcon style={{color: '#23D123'}} />}
        >
        <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" className={classes.large} />
      </Badge>
      <Button component={Link} to="/account/dashboard" className={classes.button} variant="contained">
        Upload
     </Button>
     <br></br>
     <Typography  component={Link} to="/send-reset-otp" variant="h5" gutterBottom style={{ textDecoration: 'none', color: 'black'}}>
       Ann Olamide
     </Typography >
     <br></br>

     <Typography  component={Link} to="/send-reset-otp" variant="body2" gutterBottom style={{ textDecoration: 'none', color: '#23D123'}}>
        Verified
     </Typography >
     <br></br>

    <Typography  component={Link} to="/send-reset-otp" variant="body2" gutterBottom style={{ textDecoration: 'none', color: 'black'}}>
      User Id: 12045678
    </Typography >
      </Paper>
        </Grid>
        <Grid item xs={12} sm={5}>
        <Paper className={classes.paper}>
        <CssTextField 
            className={classes.textField}
            id="standard-basic" 
            placeholder="Name"
            type="text"
            fullWidth/>
        <CssTextField 
            className={classes.textField}
            id="standard-basic" 
            placeholder="Email address"
            type="email"
            fullWidth/>
        <CssTextField 
            className={classes.textField}
            id="standard-basic" 
            InputProps={{
            startAdornment: <InputAdornment position="start">+234</InputAdornment>,
            }}
            placeholder="Phone Number"
            fullWidth/>
        
        <CssTextField 
            className={classes.textField}
            id="standard-basic" 
            placeholder="Gender"
            type="text"
            fullWidth/>
        <CssTextField 
            className={classes.textField}
            id="standard-basic" 
            placeholder="DOB"
            type="date"
            fullWidth/>
        <CssTextField 
            className={classes.textField}
            id="standard-basic" 
            placeholder="Marital Status"
            type="text"
            fullWidth/>
        <CssTextField 
            className={classes.textField}
            id="standard-basic" 
            placeholder="Occupation"
            type="text"
            fullWidth/>
        <CssTextField 
            className={classes.textField}
            id="standard-basic" 
            placeholder="Home Address"
            type="text"
            fullWidth/>
            <Button component={Link} to="/account/dashboard" className={classes.button} variant="contained">
                Update
            </Button>
        </Paper>
        </Grid>        
      </Grid>
    </div>
  );
}
