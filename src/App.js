import React, { useState, useEffect } from 'react';
import { Switch, Route, BrowserRouter as Router, Link, Redirect } from "react-router-dom";

import Login from "./Login";
import Splash from "./Screens/Splash"
import 'antd/dist/antd.min.css'
import ProtectedRoute from './ProtectedRoute'
import Dashboard from './Dashboard';

const App = () => {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Wait for 1 seconds
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return isLoading ?
    <Splash /> :
    <>
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <ProtectedRoute path="/dashboard">
            <Dashboard />
          </ProtectedRoute>
          <Route exact path="/">
            <Redirect exact from="/" to="dashboard" />
          </Route>
          <Route path="*">
            <Redirect from="/" to="dashboard" />
          </Route>
        </Switch>
      </Router>
    </>
}

export default App;
