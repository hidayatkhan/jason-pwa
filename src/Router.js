import React, { useState } from 'react'
import { Switch, Route, Link } from "react-router-dom";
// import { MailOutlined, AppstoreOutlined, SettingOutlined, HeartOutlined } from '@ant-design/icons';
import Setting from "./Screens/Setting"
import Contact from "./Screens/Contact"
import Login from "./Screens/Login"
import { Menu } from 'antd';
import Help from './Screens/Help';
import Dashboard from './Dashboard';
import { Redirect, Router } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';

export default function Routing() {
    return (
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
    )
}
