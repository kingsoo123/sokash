import React from "react";
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

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={SignIn} />
          <Route path="/register" component={Register} />
          <Route path="/verification" component={Verification} />
          <Route path="/reset-password" component={ResetPasswrod} />
          <Route path="/send-reset-otp" component={SendResetOtp} />
          <Route path="/verify-reset" component={VerifyReset} />
          <Route path="/account" component={Dashboard} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
