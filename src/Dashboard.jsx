import React, { Component } from "react";
import { Redirect, Switch, Route, Link, withRouter } from "react-router-dom";
import { MailOutlined, AppstoreOutlined, SettingOutlined, HeartOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
// import "./Dashboard.css";

import NotFound from "./404";
import Contact from "./Screens/Contact";
import Setting from "./Screens/Setting";
import Help from "./Screens/Help";
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      islogout: false
    };
  }
  signOut = () => {
    localStorage.removeItem("token");
    this.setState({
      islogout: true
    });
  };
  render() {
    if (this.state.islogout) {
      return <Redirect to="/login" />;
    }
    const { match } = this.props;
    return (
      <>

        <Menu mode="horizontal" defaultSelectedKeys={['contact']}  >
          <Menu.Item key="contact" icon={<MailOutlined />}>
            <Link to={`${match.path}/contact`}>
              Contact
            </Link>
          </Menu.Item>
          <Menu.Item key="setting" icon={<SettingOutlined />}>
            <Link to={`${match.path}/setting`}>
              Setting
            </Link>
          </Menu.Item>
          <Menu.Item key="help" icon={<HeartOutlined />}>
            <Link to={`${match.path}/help`}>
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
          <Menu.Item key="logout" icon={<HeartOutlined />} >
            <Link onClick={this.signOut}>
              Log out
            </Link>
          </Menu.Item>
        </Menu>




        <main role="main">
          <div className="main">
            <Switch>
              <Route path={`${match.path}/contact`}>
                <Contact />
              </Route>
              <Route path={`${match.path}/setting`}>
                <Setting />
              </Route>
              <Route path={`${match.path}/help`}>
                <Help />
              </Route>
              <Route exact path={`${match.path}`}>
                <Contact />
              </Route>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </div>
        </main>
      </>
    );
  }
}

export default withRouter(Dashboard);
