import { useSelector } from "react-redux";
import AuthRouter from "./AuthRouter";
import MainRouter from "./MainRouter";
import {
  addAuth,
  authSelector,
  AuthState,
} from "../reduxs/reducers/authReducer";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { localDataNames } from "../constants/appInfo";
import { Spin } from "antd";

const Routers = () => {
  const [isLoading, setisLoading] = useState(false);

  const auth: AuthState = useSelector(authSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res = localStorage.getItem(localDataNames.authData);
    res && dispatch(addAuth(JSON.parse(res)));
  };

  return isLoading ? <Spin /> : !auth.token ? <AuthRouter /> : <MainRouter />;
};

export default Routers;
