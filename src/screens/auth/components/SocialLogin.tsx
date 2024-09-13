import { Button, message } from "antd";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { auth } from "../../../firebase/firebaseConfig";
import handleAPI from "../../../api/handleAPI";
import { addAuth } from "../../../reduxs/reducers/authReducer";
import { localDataNames } from "../../../constants/appInfo";

const provider = new GoogleAuthProvider();
provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
provider.setCustomParameters({
  login_hint: "tungtvph46392@fpt.edu.vn",
});
const SocialLogin = () => {
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  const handleLoginGoogle = async () => {
    setIsLoading(true);
    try {
      const result = await signInWithPopup(auth, provider);
      if (result) {
        const user = result.user;
        if (user) {
          const data = {
            name: user.displayName,
            email: user.email,
          };

          const api = "/auth/google-login";

          try {
            const res: any = await handleAPI(api, data, "post");
            message.success(res.message);
            dispatch(addAuth(res.data));
            localStorage.setItem(
              localDataNames.authData,
              JSON.stringify(res.data)
            );
          } catch (error: any) {
            message.error(error.message);
          } finally {
            setIsLoading(false);
          }
        }
      } else {
        console.log("Can not login with google");
      }
    } catch (error: any) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button
      loading={isLoading}
      onClick={handleLoginGoogle}
      style={{
        width: "100%",
      }}
      icon={
        <img
          width="24"
          height="24"
          src="https://img.icons8.com/fluency/48/google-logo.png"
          alt="google-logo"
        />
      }
    >
      Google
    </Button>
  );
};

export default SocialLogin;
