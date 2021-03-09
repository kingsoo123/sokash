import React, { useState } from "react";
import "./App.css";
import Register from "./components/Register";
import SignIn from "./components/SignIn";
import Verification from "./components/Verification";
import MyAccount from "./components/Dashboard/DashboardContent";
import Dashboard from "./components/Dashboard/Dashboard";
import ResetPasswrod from "./components/ResetPassword";
import SendResetOtp from "./components/SendResetOtp";
import VerifyReset from "./components/VerifyReset";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { UserContext } from "./components/context/UserContext";
import PersonalInfo from '../src/components/Dashboard/Include/PersonalInfo';

function App() {
  const [phone_number, setPhoneNumber] = useState("0000");
  const [email, setEmail] = useState("test@gmail.com");
  const [country_code, setCountryCode] = useState(`234`);
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [otp, setOtp] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [status, setStatus] = useState("");
  const [occupation, setOccupation] = useState("");
  const [address, setAddress] = useState("");
  const [id, setId] = useState("");
  const [loanType, setLoanType] = useState("");
  const [loanReason, setLoanReason] = useState("");
  const [loanAmount, setLoanAmount] = useState("10000");
  const [loanTenure, setLoanTenure] = useState("");
  const [AccountNumber, setAccountNumber] = useState("");
  const [BusinessName, setBusinessName] = useState("");
  const [BusinessDesc, setBusinessDesc] = useState("");



  
  


  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/reset-password" component={ResetPasswrod} />
          <Route path="/send-reset-otp" component={SendResetOtp} />
          <Route path="/verify-reset" component={VerifyReset} />

          <UserContext.Provider
            value={{
              phone_number,
              setPhoneNumber,
              email,
              setEmail,
              country_code,
              setCountryCode,
              password,
              setPassword,
              confirm_password,
              setConfirmPassword,
              otp,
              setOtp,
              name,
              setName,
              gender,
              setGender,
              dob,
              setDob,
              status,
              setStatus,
              occupation,
              setOccupation,
              address,
              setAddress,
              id,
              setId,
              loanType,
              setLoanType,
              loanReason,
              setLoanReason,
              loanAmount,
              setLoanAmount,
              loanTenure,
              setLoanTenure,
              BusinessName,
              setBusinessName,
              BusinessDesc,
              setBusinessDesc,
              AccountNumber,
              setAccountNumber,
            
            }}
          >
            <Route path="/register" component={Register} />
            <Route path="/verification" component={Verification} />
            <Route exact path="/" component={SignIn} />
            <Route path="/account" component={Dashboard} />
            {/* <Route path="/account/personalInfo" component={PersonalInfo} /> */}
          </UserContext.Provider>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
