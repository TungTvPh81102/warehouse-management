import { Button, Card, Form, Input, message, Space, Typography } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
import handleAPI from "../../api/handleAPI";
import { useDispatch } from "react-redux";
import { addAuth } from "../../reduxs/reducers/authReducer";
import { localDataNames } from "../../constants/appInfo";

const { Title, Paragraph, Text } = Typography;

const SignUp = () => {
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  const [form] = Form.useForm();

  const handleRegister = async (values: {
    email: string;
    password: string;
  }) => {
    setIsLoading(true);
    try {
      const res: any = await handleAPI("/auth/register", values, "post");
      if (res.data) {
        message.success(res.message);
        // localStorage.setItem(localDataNames.authData, JSON.stringify(res));
        dispatch(addAuth(res.data));
      }
    } catch (error: any) {
      message.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Card style={{ width: "50%" }}>
        <div className="text-center">
          <img
            className="mb-3"
            src="https://firebasestorage.googleapis.com/v0/b/warehouse-fdccd.appspot.com/o/logo.png?alt=media&token=292a46f0-fb4e-4f9b-94ad-2788a9f81069"
            alt=""
            style={{
              width: 48,
              height: 48,
            }}
          />
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
          onFinish={handleRegister}
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
            <Input allowClear placeholder="Enter name" />
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
              () => ({
                validator: (_, value) => {
                  if (value.length < 6) {
                    return Promise.reject(
                      "Password must be at least 6 characters"
                    );
                  }
                  return Promise.resolve();
                },
              }),
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
              loading={isLoading}
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
