import React, { Component } from "react";
// import "./Login.css";
import { Redirect } from "react-router-dom";
import { Form, Input, Button, Checkbox, Row } from 'antd';
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            islogged: false,
            loginParams: {
                user_id: "",
                user_password: ""
            }
        };
    }
    handleFormChange = event => {
        let loginParamsNew = { ...this.state.loginParams };
        let val = event.target.value;
        loginParamsNew[event.target.name] = val;
        this.setState({
            loginParams: loginParamsNew
        });
    };

    login = event => {
        let user_id = this.state.loginParams.user_id;
        let user_password = this.state.loginParams.user_password;
        if (user_id === "admin" && user_password === "123") {
            localStorage.setItem("token", "T");
            this.setState({
                islogged: true
            });
        }
        event.preventDefault();
    };
    render() {
        if (localStorage.getItem("token")) {
            return <Redirect to="/" />;
        }
        return (
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
                    onFinish={this.login}

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
                        <Input
                            type="text"
                            name="user_id"
                            onChange={this.handleFormChange}
                            placeholder="Enter Username"
                        />
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
                        <Input.Password

                            name="user_password"
                            onChange={this.handleFormChange}
                            placeholder="Enter Password" />
                    </Form.Item>
                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Button type="primary" htmlType="submit" value="Login">
                            Login
                        </Button>
                    </Form.Item>
                </Form>
            </Row>

        );
    }
}
export default Login;
