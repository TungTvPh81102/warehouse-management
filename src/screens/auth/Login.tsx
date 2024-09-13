import {
  Button,
  Card,
  Checkbox,
  Form,
  Input,
  message,
  Space,
  Typography,
} from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
import SocialLogin from "./components/SocialLogin";
import handleAPI from "../../api/handleAPI";
import { useDispatch } from "react-redux";
import { addAuth } from "../../reduxs/reducers/authReducer";
import { localDataNames } from "../../constants/appInfo";
import { auth } from "../../firebase/firebaseConfig";

const { Title, Paragraph, Text } = Typography;

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);

  const [isRemember, setisRemember] = useState(true);

  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const handleLogin = async (values: { email: string; password: string }) => {
    setIsLoading(true);
    try {
      const res: any = await handleAPI("/auth/login", values, "post");
      message.success(res.message);
      res.data && dispatch(addAuth(res.data));

      if (isRemember) {
        localStorage.setItem(localDataNames.authData, JSON.stringify(res.data));
      }
    } catch (error: any) {
      message.error(error.message);
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Card>
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
                checked={isRemember }
                onChange={(val) => setisRemember(val.target.value)}
              >
                Remember for 30 days
              </Checkbox>
            </div>
            <div className="col text-end">
              <Link to="/">Forgot Password?</Link>
            </div>
          </div>
          {/* <Button onClick={() => auth.signOut()}>sIGNoU</Button> */}

          <div className="mt-4 mb-3">
            <Button
              loading={isLoading}
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
