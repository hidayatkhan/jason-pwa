import React from 'react';
import { Form, Input, Button, DatePicker, Row } from 'antd';
const { TextArea } = Input;
const Contact = () => {


    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const onChange = (date, dateString) => {
        console.log(date, dateString);
    };

    return (
        <Row type="flex" justify="center" align="middle" style={{ minHeight: '70vh' }}>
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
                    label="Date"
                    name="date"
                    rules={[
                        {
                            required: true,
                            message: 'Please Select Date!',
                        },
                    ]}
                >
                    <DatePicker onChange={onChange} />
                </Form.Item>
                <Form.Item
                    label="Text Area"
                    name="textArea"
                    rules={[
                        {
                            required: true,
                            message: 'Please input',
                        },
                    ]}
                >
                    <TextArea
                        placeholder="Autosize height with minimum and maximum number of lines"
                        autoSize={{ minRows: 2, maxRows: 5 }}
                    />
                </Form.Item>

                <Form.Item
                    label="Input"
                    name="input"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Input!',
                        },
                    ]}
                >
                    <Input placeholder="Type Your Input" />
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Save
                    </Button>
                </Form.Item>
            </Form>
        </Row>
    );
};

export default Contact;