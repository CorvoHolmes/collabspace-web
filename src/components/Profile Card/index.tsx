import Avatar from "../Avatar";
import { ButtonEdit, Container, Cover, Divider } from "./styles";

const ProfileCard: React.FC = () => {
  return (
    <Container>
      <header>
        <Cover src="https://img.freepik.com/vetores-gratis/paisagem-noturna-do-oceano-lua-cheia-e-estrelas-brilham_107791-7397.jpg" />
        <div>
          <Avatar />
        </div>
      </header>

      <main>
        <h1>Nome</h1>
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
