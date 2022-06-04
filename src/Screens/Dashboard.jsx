import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined, HeartOutlined } from '@ant-design/icons';
import { Switch, Route, Link } from "react-router-dom";

const Dashboard = () => (
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
);

export default Dashboard;