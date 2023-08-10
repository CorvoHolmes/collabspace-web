import Avatar from "../Avatar";
import InputArea from "../InputArea";
import { Container, Content } from "./styles";
import Button from "../Button";

const CreatePost: React.FC = () => {
  return (
    <Container>
      <Content>
        <Avatar
          src="https://i.pinimg.com/736x/b7/65/02/b76502e936cd209b595bd7a537e74db4.jpg"
          borderEffect
        />
        <InputArea rows={1} placeholder="O que temos para hoje..." />
      </Content>

      <Button>Publicar</Button>
    </Container>
  );
};

export default CreatePost;
