import { Layout, Menu, MenuProps, Typography } from "antd";
import { Box, Chart, Home2, ProfileCircle } from "iconsax-react";
import { CiViewList } from "react-icons/ci";
import { MdOutlineInventory } from "react-icons/md";
import { Link } from "react-router-dom";
import { appInfo } from "../constants/appInfo";

const { Sider } = Layout;
const { Text } = Typography;

type MenuItem = Required<MenuProps>["items"][number];

const SliderComponent = () => {
  const items: MenuItem[] = [
    {
      key: "dashboard",
      label: <Link to="/">Dashboard</Link>,
      icon: <Home2 size={20} />,
    },
    {
      key: "iventory",
      label: <Link to="/iventory">Iventory</Link>,
      icon: <MdOutlineInventory size={20} />,
    },
    {
      key: "report",
      label: <Link to="/report">Report</Link>,
      icon: <Chart size={20} />,
    },
    {
      key: "suppliers",
      label: <Link to="/suppliers">Suppliers</Link>,
      icon: <ProfileCircle size={20} />,
    },
    {
      key: "orders",
      label: <Link to="/orders">Orders</Link>,
      icon: <Box size={20} />,
    },
    {
      key: "manager-store",
      label: <Link to="/manager-store">Manager Store</Link>,
      icon: <CiViewList size={20} />,
    },
  ];
  return (
    <Sider theme="light" style={{ height: "100vh" }}>
      <div className="p-2 d-flex align-items-center justify-content-center">
        <img width={48} height={48} src={appInfo.logo} alt={appInfo.title} />
        <Text
          style={{
            fontFamily: "JetBrains Mono",
            color: "#1570EF",
            fontWeight: "bold",
            fontSize: "20px",
          }}
        >
          {appInfo.title}
        </Text>
      </div>
      <Menu items={items} theme="light" />
    </Sider>
  );
};

export default SliderComponent;
