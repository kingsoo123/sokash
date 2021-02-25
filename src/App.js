import React, {useState} from "react";
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
import TestTwo from "./components/Dashboard/TestTwo";
import TestThree from "./components/Dashboard/TestThree";
import { UserContext } from "./components/context/UserContext";


function App() {
  const [phone_number, setPhoneNumber] = useState('');
  const [country_code, setCountryCode] = useState(`234`);
  const [password, setPassword] = useState('');
  const [confirm_password, setConfirmPassword] = useState('');
  const [token, setToken] = useState('');

  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={SignIn} />
          
          <Route path="/reset-password" component={ResetPasswrod} />
          <Route path="/send-reset-otp" component={SendResetOtp} />
          <Route path="/verify-reset" component={VerifyReset} />
          <Route path="/account" component={Dashboard} />

          <UserContext.Provider value={{phone_number, setPhoneNumber, country_code, setCountryCode, password, setPassword, confirm_password, setConfirmPassword, token, setToken}}>
          <Route path="/register" component={Register} />
          <Route path="/verification" component={Verification} />
          <Route path="/testtwo" component={TestTwo} />
          <Route path="/testthree" component={TestThree} />
          </UserContext.Provider>
          

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
