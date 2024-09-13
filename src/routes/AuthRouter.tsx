import { Route, Routes } from "react-router-dom";
import { Login, SignUp } from "../screens";

const AuthRouter = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-4">
          <img src="" alt="" />
        </div>
        <div className="col-8 content-center">
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
