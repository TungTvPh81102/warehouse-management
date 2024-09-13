import { Button } from "antd";
import { useDispatch } from "react-redux";
import { removeAuth } from "../reduxs/reducers/authReducer";

const HomeScreen = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(removeAuth());
  };

  return (
    <div>
      <Button onClick={handleLogout}>Logout</Button>
    </div>
  );
};

export default HomeScreen;
