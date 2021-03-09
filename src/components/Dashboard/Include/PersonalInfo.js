import React, { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import {
  Paper,
  TextField,
  InputAdornment,
  Badge,
  Button,
  Typography,
} from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import { Link } from "react-router-dom";

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
    textAlign: "center",
    padding: 10,
    color: theme.palette.text.secondary,
    boxShadow: "0px 4px 12px rgba(35, 209, 35, 0.31)",
    borderRadius: "20px",
  },
  button: {
    height: "38px",
    width: "71px",
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

const PersonalInfo = () => {
  const {
    phone_number,
    password,
    email,
    setEmail,
    setPhoneNumber,
    setPassword,
    name,
    setName,
    address,
    setAddress,
    occupation,
    setOccupation,
    dob,
    setDob,
    status,
    setStatus,
    gender,
    setGender,
    id,
  } = useContext(UserContext);


  console.log(id);

  const [updateName, setUpdateName] = useState('')
  const [updateLastName, setUpdateLastName] = useState('')
  const [updateAddress, setUpdateAddress] = useState('')
  const [updateOccupation, setUpdateOccupation] = useState('')
  const [updateStatus, setUpdateStatus] = useState('')
  const [updateDob, setUpdateDob] = useState('')
  const [updateGender, setUpdateGender] = useState('')
  const [user_id, setUserId] = useState(id)


  console.log('USER ID::::::::::::::', user_id);

  const handleChangeFirstName = (e) => {
    setUpdateName(e.target.value);
  };

  const handleChangeLastName = (e)=>{
    setUpdateLastName(e.target.value)
  }

  const handleChangeAddress = (e) => {
    setUpdateAddress(e.target.value);
  };

  const handleChangeOccupation = (e) => {
    setUpdateOccupation(e.target.value);
  };

  const handleChangeStatus = (e) => {
    setUpdateStatus(e.target.value);
  };

  const handleChangeDob = (e) => {
    setUpdateDob(e.target.value);
  };
  const handleChangeGender = (e) => {
    setUpdateGender(e.target.value);
  };

  const classes = useStyles();
  const token = localStorage.getItem('tokenData')

  

const handleUpdate = async ()=>{
  setName(updateName)
  setAddress(updateAddress)
  setStatus(updateStatus)
  setOccupation(updateOccupation)
  setDob(updateDob)
  setGender(updateGender)



  await fetch(`https://backend.api.sokash.co/public/api/users/${id}`, {
  method: 'PUT',
  body: JSON.stringify({address:updateAddress, date_of_birth:updateDob, gender:updateGender, first_name:updateName, last_name:updateLastName, marital_status:updateStatus, updateOccupation}),
  Authorization: `token ${token}`,
  headers: {"Content-type": "application/json; charset=UTF-8"}

})
.then(response => response.json())
.then(result => {
  console.log('Success:', result);
})
.catch(error => {
  console.error('Error:', error);
});
}


const[nameOfKin, setNameOfKin] = useState('')
const[relationOfKin, setRelationOfKin] = useState('')
const[phoneOfKin, setPhoneOfKin] = useState('')
const[addressOfKin, setAddressOfKin] = useState('')
const[genderOfKin, setGenderOfKin] = useState('')
const[statusOfKin, setStatusOfKin] = useState('')
const[emailOfKin, setEmailOfKin] = useState('')



const SubmitNextOfKin =async ()=>{
  await fetch(`https://backend.api.sokash.co/public/api/next_of_kins`, {
  method: 'POST',
  body: JSON.stringify({user_id:id, name:nameOfKin, relationship:relationOfKin, phone_number:phoneOfKin, address:addressOfKin, gender:genderOfKin, marital_status:statusOfKin, email:emailOfKin}),
  Authorization: `token ${token}`,
  headers: {"Content-type": "application/json; charset=UTF-8"}

})
.then(response => response.json())
.then(result => {
  console.log('Success:', result);
})
.catch(error => {
  console.error('Error:', error);
});
}

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={3}>
          <Paper className={classes.paper}>
            <Badge
              overlap="circle"
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              badgeContent={<VerifiedUserIcon style={{ color: "#23D123" }} />}
            >
              <Avatar
                alt="Travis Howard"
                src="/static/images/avatar/2.jpg"
                className={classes.large}
              />
            </Badge>
            <Button
              component={Link}
              to="/account/dashboard"
              className={classes.button}
              variant="contained"
            >
              Upload
            </Button>
            <br></br>
            <Typography
              component={Link}
              to="/send-reset-otp"
              variant="h5"
              gutterBottom
              style={{ textDecoration: "none", color: "black" }}
            >
              {name}
            </Typography>
            <br></br>

            <Typography
              component={Link}
              to="/send-reset-otp"
              variant="body2"
              gutterBottom
              style={{ textDecoration: "none", color: "#23D123" }}
            >
              Verified
            </Typography>
            <br></br>

            <Typography
              component={Link}
              to="/send-reset-otp"
              variant="body2"
              gutterBottom
              style={{ textDecoration: "none", color: "black" }}
            >
              User Id: {user_id}
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}>
            <CssTextField
              className={classes.textField}
              id="standard-basic"
              placeholder="First Name"
              type="text"
              fullWidth
              onChange={handleChangeFirstName}
            />
            <CssTextField
              className={classes.textField}
              id="standard-basic"
              placeholder="Last Name"
              type="text"
              fullWidth
              onChange={handleChangeLastName}
            />
            <CssTextField
              className={classes.textField}
              id="standard-basic"
              placeholder={email}
              type="email"
              fullWidth
            />
            <CssTextField
              className={classes.textField}
              id="standard-basic"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">+234</InputAdornment>
                ),
              }}
              placeholder={phone_number}
              fullWidth
            />

            <CssTextField
              className={classes.textField}
              id="standard-basic"
              placeholder="Gender"
              type="text"
              fullWidth
              onChange={handleChangeGender}
            />
            <CssTextField
              className={classes.textField}
              id="standard-basic"
              placeholder="DOB"
              type="date"
              fullWidth
              onChange={handleChangeDob}
            />
            <CssTextField
              className={classes.textField}
              id="standard-basic"
              placeholder="Marital Status"
              type="text"
              fullWidth
              onChange={handleChangeStatus}
            />
            <CssTextField
              className={classes.textField}
              id="standard-basic"
              placeholder="Occupation"
              type="text"
              fullWidth
              onChange={handleChangeOccupation}
            />
            <CssTextField
              className={classes.textField}
              id="standard-basic"
              placeholder="Home Address"
              type="text"
              fullWidth
              onChange={handleChangeAddress}
            />
            <Button
              // component={Link}
              // to="/account/dashboard"
              className={classes.button}
              variant="contained"
             onClick={handleUpdate} 
            >
              Update
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}>
            <Typography variant="h6" gutterBottom>
              Next of Kin
            </Typography>
            <CssTextField
              className={classes.textField}
              id="standard-basic"
              placeholder="Name of Next of Kin"
              type="text"
              fullWidth
              onChange={(e)=>{setNameOfKin(e.target.value)}}
            />
            <CssTextField
              className={classes.textField}
              id="standard-basic"
              placeholder="Relationship"
              type="text"
              fullWidth
              onChange={(e)=>{setRelationOfKin(e.target.value)}}
            />
            <CssTextField
              className={classes.textField}
              id="standard-basic"
              placeholder="Phone Number"
              type="number"
              fullWidth
              onChange={(e)=>{setPhoneOfKin(e.target.value)}}
            />
            <CssTextField
              className={classes.textField}
              id="standard-basic"
              placeholder="Gender"
              type="text"
              fullWidth
              onChange={(e)=>{setGenderOfKin(e.target.value)}}
            />
            
            <CssTextField
              className={classes.textField}
              id="standard-basic"
              placeholder="Address"
              type="text"
              fullWidth
              onChange={(e)=>{setAddressOfKin(e.target.value)}}
            />
            <CssTextField
              className={classes.textField}
              id="standard-basic"
              placeholder="Marital status"
              type="text"
              fullWidth
              onChange={(e)=>{setStatusOfKin(e.target.value)}}
            />
            <CssTextField
              className={classes.textField}
              id="standard-basic"
              placeholder="Email"
              type="text"
              fullWidth
              onChange={(e)=>{setEmailOfKin(e.target.value)}}
            />
            <Button
              component={Link}
              to="/account/dashboard"
              className={classes.button}
              variant="contained"
              onChange={SubmitNextOfKin}
            >
              Save
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default PersonalInfo;
