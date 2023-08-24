import {
  Container,
  Header,
  Cover,
  Content,
  Footer,
  Divider,
  ButtonEdit,
} from "./styles";

import AvatarSquare from "../AvatarSquare";
import { useNavigate } from "react-router-dom";

const ProfileCard: React.FC = () => {
  const navigate = useNavigate();

  const handleMe = () => {
    navigate("/me");
  };
  return (
    <Container>
      <Header>
        <Cover src="https://cutewallpaper.org/29/dual-screen-mr-robot-wallpaper/247286624.jpg" />

        <div onClick={handleMe}>
          <AvatarSquare
            src="https://i.pinimg.com/736x/b7/65/02/b76502e936cd209b595bd7a537e74db4.jpg"
            borderEffect
          />
        </div>
      </Header>

      <Content>
        <h1 onClick={handleMe}>Corvo Holmes</h1>
        <p>email@email.com</p>
      </Content>

      <Divider />

      <Footer>
        <ButtonEdit>Editar seu perfil</ButtonEdit>
      </Footer>
    </Container>
  );
};

export default ProfileCard;
