import { ConfigProvider, message } from "antd";
import "./App.css";
import Routers from "./routes/Routers";
import { Provider } from "react-redux";
import store from "./reduxs/store";

message.config({
  top: 30,
  duration: 2,
  maxCount: 3,
  rtl: true,
  prefixCls: "my-message",
});

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorTextHeading: "",
        },
        components: {},
      }}
    >
      <Provider store={store}>
        <Routers />;
      </Provider>
    </ConfigProvider>
  );
}

export default App;
