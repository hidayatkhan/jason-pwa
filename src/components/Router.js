import React, { useState } from 'react'
import { Switch, Route, Link } from "react-router-dom";
import { MailOutlined, AppstoreOutlined, SettingOutlined, HeartOutlined } from '@ant-design/icons';
import Setting from "../Screens/Setting"
import Contact from "../Screens/Contact"
import Login from "../Screens/Login"
import { Menu } from 'antd';
import Help from '../Screens/Help';
import Dashboard from '../Screens/Dashboard';
import { Redirect } from 'react-router-dom';

export default function Routing() {
    const [login, setLogin] = useState(false)
    return (
        <>
            <Menu mode="horizontal" defaultSelectedKeys={['contact']}  >
                <Menu.Item key="contact" icon={<MailOutlined />}>
                    <Link to="contact" >
                        Contact
                    </Link>
                </Menu.Item>
                <Menu.Item key="setting" icon={<SettingOutlined />}>
                    <Link to="setting" >
                        Setting
                    </Link>
                </Menu.Item>
                <Menu.Item key="help" icon={<HeartOutlined />}>
                    <Link to="help" >
                        Help
                    </Link>
                </Menu.Item>
                <Menu.SubMenu key="SubMenu" title="Setting" icon={<SettingOutlined />}>
                    <Menu.Item key="two" icon={<AppstoreOutlined />}>
                        Settings Two
                    </Menu.Item>
                    <Menu.Item key="three" icon={<AppstoreOutlined />}>
                        Settings Three
                    </Menu.Item>
                </Menu.SubMenu>
            </Menu>

            <Switch>
                {/* <Route path="/dashboard" component={Dashboard} /> */}
                <Route path="/contact" component={Contact} />
                <Route path="/setting" component={Setting} />
                <Route path="/help" component={Help} />
                {login ? <Route path="/dashboard" component={Dashboard} /> : <Route path="/login" component={Login} />}
                {/* <Route path="/" component={Login} /> */}
            </Switch>
        </>
    )
}
