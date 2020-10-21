import React from 'react';
import './App.css';
import Register from './components/Register';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Switch>
        <Route exact path="/register"  component={ Register }/>
       
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
