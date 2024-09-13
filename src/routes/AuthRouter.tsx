import { Route, Routes } from "react-router-dom";
import { Login, SignUp } from "../screens";
import { Typography } from "antd";

const { Title } = Typography;

const AuthRouter = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div
          className="col-4 d-none d-lg-block text-center"
          style={{ marginTop: "10%" }}
        >
          <div className="mb-4">
            <img
              style={{ width: 256, height: 256, objectFit: "cover" }}
              src="https://firebasestorage.googleapis.com/v0/b/warehouse-fdccd.appspot.com/o/logo.png?alt=media&token=292a46f0-fb4e-4f9b-94ad-2788a9f81069"
              alt=""
            />
          </div>
          <div>
            <Title
              style={{ fontFamily: "JetBrains Mono", color: "#1570EF" }}
              level={2}
            >
              Ware House
            </Title>
          </div>
        </div>
        <div className="col content-center">
          <Routes>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/sign-up" element={<SignUp />}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default AuthRouter;
