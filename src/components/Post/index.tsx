import Avatar from "../Avatar";
import { Container, Content, Hashtags, Divider } from "./styles";

const Post: React.FC = () => {
  return (
    <Container>
      <header>
        <div>
          <Avatar />

          <section>
            <h1>Natan Foleto</h1>
            <p>natanfoleto@hotmail.com</p>
          </section>
        </div>

        <p>Publicado à 1h</p>
      </header>

      <main>
        <Content>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam hic
            ullam reiciendis harum accusantium et voluptatum possimus eius esse
            nisi natus suscipit voluptate animi dignissimos praesentium error,
            veritatis debitis doloremque?
          </p>
        </Content>

        <Hashtags>
          <span>#collabspace</span>
          <span>#confia</span>
          <span>#láele</span>
          <span>#tchaau</span>
        </Hashtags>
      </main>

      <Divider />
      <footer>
        <h1>Deixe seu comentário</h1>

        <textarea name="" rows={5}></textarea>

        <button>Comentar</button>
      </footer>
    </Container>
  );
};

export default Post;
