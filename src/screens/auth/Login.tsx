import { Button, Card, Checkbox, Form, Input, Space, Typography } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
import SocialLogin from "./components/SocialLogin";

const { Title, Paragraph, Text } = Typography;

const Login = () => {
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
            Login in to your account
          </Title>
          <Paragraph style={{ fontFamily: "JetBrains Mono" }} type="secondary">
            Welcome back! Please enter your details.
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

          <div className="row">
            <div className="col">
              <Checkbox
                checked={isRemember}
                onChange={(val) => setisRemember(val.target.value)}
              >
                Remember for 30 days
              </Checkbox>
            </div>
            <div className="col text-end">
              <Link to="/">Forgot Password?</Link>
            </div>
          </div>

          <div className="mt-4 mb-3">
            <Button
              onClick={() => form.submit()}
              type="primary"
              style={{ width: "100%" }}
              size="large"
            >
              Sign In
            </Button>
          </div>
          <SocialLogin />
          <div className="mt-3 text-center">
            <Space>
              <Text type="secondary" style={{ fontFamily: "JetBrains Mono" }}>
                Don't have an account?
              </Text>
              <Link to="/sign-up">Sign Up</Link>
            </Space>
          </div>
        </Form>
      </Card>
    </>
  );
};

export default Login;
