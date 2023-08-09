import { Trash } from "phosphor-react";

import Avatar from "../Avatar";

import { Container, CommentBox, AuthorAndTime, ButtonDelete } from "./styles";

const Comment: React.FC = () => {
  return (
    <Container>
      <Avatar src="https://blog.cdn.own3d.tv/resize=fit:crop,height:400,width:600/2AmMcmTbT7Cej18WXpou" />

      <CommentBox>
        <AuthorAndTime>
          <h1>RandomUser123</h1>
          <time>Cerca de 2h</time>

          <ButtonDelete>
            <Trash size={22} />
          </ButtonDelete>
        </AuthorAndTime>

        <p>
          Ai Ney, ta ligado que o LeBroun ficou impressionado com a cor do meu
          tênis la em Miami 😎
        </p>
      </CommentBox>
    </Container>
  );
};

export default Comment;
