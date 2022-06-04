import React from 'react';
import { Form, Input, Button, Checkbox, Row } from 'antd';
import {
  Switch,
  Route,
  Link,
  Redirect,
  useHistory
} from "react-router-dom";
import Setting from "./Setting"
import Contact from "./Contact"
import Login from "./Login"
import Help from './Help';
import Dashboard from './Dashboard';

const App = () => {
  const history = useHistory();
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>
      <Row type="flex" justify="center" align="middle" style={{ minHeight: '90vh' }}>
        <Form
          size='small'
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                message: 'Please input your username!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                message: 'Please input your password!',
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit" onClick={() => history.push("/dashboard")}>
              Login
            </Button>
          </Form.Item>
        </Form>
      </Row>

    </>
  );
};

export default App;


