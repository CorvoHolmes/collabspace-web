import { Container, Cover, Divider, ButtonEdit } from "./styles";

import Avatar from "../Avatar";

const ProfileCard: React.FC = () => {
  return (
    <Container>
      <header>
        <Cover src="https://cutewallpaper.org/29/dual-screen-mr-robot-wallpaper/247286624.jpg" />

        <div>
          <Avatar />
        </div>
      </header>

      <main>
        <h1>Corvo Holmes</h1>
        <p>email@email.com</p>
      </main>

      <Divider />

      <footer>
        <ButtonEdit>Editar seu perfil</ButtonEdit>
      </footer>
    </Container>
  );
};

export default ProfileCard;
