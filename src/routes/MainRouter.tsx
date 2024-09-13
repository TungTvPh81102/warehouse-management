import { Layout } from "antd";
import HomeScreen from "../screens/HomeScreen";
import SliderComponent from "../components/SliderComponent";
import { Route, Routes } from "react-router-dom";
import {
  IventoryScreen,
  ManageStoreScreen,
  OrderScrreen,
  ReportScreen,
  SupplierScreen,
} from "../screens";
import { HeaderComponent } from "../components";

const { Content, Footer } = Layout;
const MainRouter = () => {
  return (
    <Layout>
      <SliderComponent />
      <Layout>
        <HeaderComponent />
        <Content>
          <Routes>
            <Route path="/" element={<HomeScreen />}></Route>
            <Route path="/iventory" element={<IventoryScreen />}></Route>
            <Route path="/report" element={<ReportScreen />}></Route>
            <Route path="/suppliers" element={<SupplierScreen />}></Route>
            <Route path="/orders" element={<OrderScrreen />}></Route>
            <Route
              path="/manager-store"
              element={<ManageStoreScreen />}
            ></Route>
          </Routes>
        </Content>
        <Footer />
      </Layout>
    </Layout>
  );
};

export default MainRouter;
