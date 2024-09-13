import { Button, Card, Checkbox, Form, Input, Space, Typography } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";

const { Title, Paragraph, Text } = Typography;

const SignUp = () => {
  const [isLoading, setIsLoading] = useState(false);

  const [isRemember, setisRemember] = useState(false);

  const [form] = Form.useForm();

  const handleLogin = (values: { email: string; password: string }) => {
    console.log(values);
  };

  return (
    <>
      <Card style={{ width: "50%" }}>
        <div className="text-center">
          <Title style={{ fontFamily: "JetBrains Mono" }} level={2}>
            Create an account
          </Title>
          <Paragraph style={{ fontFamily: "JetBrains Mono" }} type="secondary">
            Start your 30-day free trial.
          </Paragraph>
        </div>

        <Form
          layout="vertical"
          form={form}
          onFinish={handleLogin}
          disabled={isLoading}
          size="large"
        >
          <Form.Item
            name={"name"}
            label={"Name"}
            rules={[
              {
                required: true,
                message: "Please input your name!",
              },
            ]}
          >
            <Input
              allowClear
              placeholder="Enter name"
            />
          </Form.Item>

          <Form.Item
            name={"email"}
            label={"Email"}
            rules={[
              {
                required: true,
                message: "Please input your email!",
              },
            ]}
          >
            <Input
              allowClear
              maxLength={100}
              type="email"
              placeholder="Enter email"
            />
          </Form.Item>

          <Form.Item
            name={"password"}
            label={"Password"}
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password
              maxLength={100}
              type="password"
              placeholder="Enter password"
            />
          </Form.Item>

          <div className="mt-4 mb-3">
            <Button
              onClick={() => form.submit()}
              type="primary"
              style={{ width: "100%" }}
              size="large"
            >
              Get Started
            </Button>
          </div>
          <div className="mt-3 text-center">
            <Space>
              <Text type="secondary" style={{ fontFamily: "JetBrains Mono" }}>
                Already have an account?
              </Text>
              <Link to="/login">Login</Link>
            </Space>
          </div>
        </Form>
      </Card>
    </>
  );
};

export default SignUp;
