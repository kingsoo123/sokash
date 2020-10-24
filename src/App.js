import React from 'react';
import './App.css';
import Register from './components/Register';
import SignIn from './components/SignIn';
import Verification from './components/Verification';
import MyAccount from './components/Dashboard/myAccount';
import Dashboard from './components/Dashboard/Dashboard';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={SignIn} />
        <Route path="/register"  component={ Register }/>
        <Route path="/verification" component={Verification} />
        <Route path="/myaccount" component={MyAccount} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
