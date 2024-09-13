import { Avatar, Button, Input, Space } from "antd";
import { Notification, SearchNormal } from "iconsax-react";

const HeaderComponent = () => {
  return (
    <div className="p-2 row bg-white">
      <div className="col">
        <Input
          style={{ borderRadius: 100, width: '50%' }}
          size="large"
          placeholder="Search..."
          prefix={<SearchNormal className="text-muted" size={20} />}
        />
      </div>
      <div className="col text-end">
        <Space>
            <Button style={{ color: "#5D6679" }} type="text" icon={<Notification size={20} /> }></Button>
            <Avatar
            src={"https://scontent.fhan14-5.fna.fbcdn.net/v/t39.30808-1/456382076_2239095963149955_4197352659754532297_n.jpg?stp=cp0_dst-jpg_s40x40&_nc_cat=109&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=lQTJmwq2b7QQ7kNvgGzu5eq&_nc_ht=scontent.fhan14-5.fna&oh=00_AYAs9ZP5S6L3TnBG2g-nW9n6XWzFMVI0IxnOeXP0dQy3zA&oe=66EA61B5"}
            size={40}
            />
        </Space>
      </div>
    </div>
  );
};

export default HeaderComponent;
