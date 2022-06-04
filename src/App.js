import React, { useState, useEffect } from 'react';
import Login from "./Screens/Login";
import Splash from "./Screens/Splash"
import Contact from './Screens/Contact'
import 'antd/dist/antd.min.css'
import Router from './components/Router';

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
      <Router />
    </>
}

export default App;
