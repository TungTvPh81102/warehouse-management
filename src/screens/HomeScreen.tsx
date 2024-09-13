import { Button } from "antd";
import { useDispatch } from "react-redux";
import {
  authSelector,
  refreshToken,
  removeAuth,
} from "../reduxs/reducers/authReducer";
import handleAPI from "../api/handleAPI";
import { useSelector } from "react-redux";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const auth = useSelector(authSelector);

  const handleLogout = () => {
    dispatch(removeAuth());
  };

  const getProduct = async () => {
    const api = "/products";
    try {
      const res = await handleAPI(api);
      console.log(res);
    } catch (error: any) {
      if (error.error === "jwt expired") {
        handleRefreshToken();
      }
    }
  };

  const handleRefreshToken = async () => {
    const api = `/auth/refresh-token?id=${auth._id}`;
    try {
      const res = await handleAPI(api);
      dispatch(refreshToken(res.data.token));
      getProduct();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Button onClick={handleLogout}>Logout</Button>
    </div>
  );
};

export default HomeScreen;
