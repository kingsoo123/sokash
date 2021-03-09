import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import {
  Paper,
  TextField,
  InputAdornment,
  Badge,
  Button,
  Typography,
  Select,
  MenuItem,
  InputLabel,
  NativeSelect
} from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import { Link } from "react-router-dom";
import { id } from "date-fns/locale";

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

const BankDetails = () => {
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
    id
  } = useContext(UserContext);

  const [banks, setBanks] = useState([]);
  const [loading, setLoading] = useState(true)
  const [bankCode, setBankCode] = useState('')
  const [bankName, setBankName] = useState('')
  const [accountNumber, setAccountNumber] = useState('')
  const [bvnNumber, setBvnNumber] = useState('')

console.log(banks);
console.log(bankName);

 

const handleAccountNumber = (e)=>{
setAccountNumber(e.target.value)
}
//   console.log(phone_number);
  const classes = useStyles();

  const menuItemList = banks.map((bank, i) => {
    return(   
            <option value={bank?.code} key={i}>{bank?.name}</option> 
    )     
  });

  useEffect(async () => {
    await fetch(`https://backend.api.sokash.co/public/api/list_of_banks`)
      .then((response) => response.json())
      .then((result) => {
        setBanks(result?.data?.data);
        setLoading(false)
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);


  const RegData = {
    account_number:accountNumber,
    bank_code: bankCode,
    bank_name: bankName,
    currency:'Naira'
  };

  const verifyAccount = async () => {
    if (
      RegData?.bank_code !== "" &&
      RegData?.bank_name !== "" &&
      RegData?.account_number !== ""
    )
    {
      await fetch("https://backend.api.sokash.co/public/api/verify_bank_accounts", {
        method: "POST",
        body: JSON.stringify(RegData),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      })
        .then((response) => response.json())
        .then((json) => console.log(json))
        .catch((err) => console.log(err));
    } else {
      console.log("no place to run to");
    }
  };


  const showBankName = (val)=>{
    console.log(val);

    setBankCode(val)

    const newBank = banks.filter(bank=>{
      return bank?.code === val
    })
  //console.log(newBank[0].name," NEW BANKS::::::::::::::::::::::::");
  setBankName(newBank[0].name)
  }


  const handleBvnNumber=(e)=>{
    setBvnNumber(e.target.value)
  }

  const bvnVerify = {
    user_id: id,
    bvn_number: bvnNumber
  }


  const verifyBVN = async ()=>{
    if (
      bvnVerify.bvn_number !== ""
    )
    {
      await fetch("https://backend.api.sokash.co/public/api/verify_bvn", {
        method: "POST",
        body: JSON.stringify(bvnVerify),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      })
        .then((response) => response.json())
        .then((json) => console.log(json))
        .catch((err) => console.log(err));
    } else {
      console.log("no place to run to");
    }
  }
  return (
    <div className={classes.root}>
       
       
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
        {loading ? `loading`: <Paper className={classes.paper}>
            <CssTextField
              className={classes.textField}
              id="standard-basic"
              placeholder="Account number"
              fullWidth
              onChange={handleAccountNumber}
            />
            
            <NativeSelect  style={{ width: "90%" }} onChange={(e)=>{showBankName(e.target.value)}}>
            {menuItemList}
            </NativeSelect>

            <p>Bank code: {bankCode}</p>

            <Button
              // component={Link}
              // to="/account/dashboard"
              className={classes.button}
              variant="contained"
              onClick={verifyAccount}
            >
              Submit
            </Button>
          </Paper>}
          
        </Grid>



        <Grid item xs={12} sm={4}>
        <Paper className={classes.paper}>
            <CssTextField
              className={classes.textField}
              id="standard-basic"
              placeholder="BVN number"
              fullWidth
              onChange={handleBvnNumber}
            />
            <Button
              // component={Link}
              // to="/account/dashboard"
              className={classes.button}
              variant="contained"
              onClick={verifyBVN}
            >
              Verify Bvn
            </Button>
          </Paper>
          
        </Grid>
      </Grid>
    </div>
  );
};

export default BankDetails;
