import LayoutDefault from "../../layouts/Default";

import { Overview, Cover, Avatar, UserInfo } from "./styles";

const Profile: React.FC = () => {
  return (
    <LayoutDefault>
      <Overview>
        <Cover src="https://cutewallpaper.org/29/dual-screen-mr-robot-wallpaper/247286624.jpg" />

        <UserInfo>
          <Avatar src="https://i.pinimg.com/736x/b7/65/02/b76502e936cd209b595bd7a537e74db4.jpg" />
        </UserInfo>
      </Overview>
    </LayoutDefault>
  );
};

export default Profile;
