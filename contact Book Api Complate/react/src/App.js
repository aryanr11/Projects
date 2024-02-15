import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Signup from './contactbook/Signup';
import Login from './contactbook/Login';
import Contact from './contactbook/Contact';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Signup></Signup>
          </Route>
          <Route exact path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/contact">
            <Contact></Contact>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
