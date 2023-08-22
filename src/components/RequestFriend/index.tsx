import { Check, X } from "phosphor-react";

import {
  Avatar,
  Container,
  User,
  Info,
  Actions,
  ButtonAccept,
  ButtonRefuse,
} from "./styles";

const RequestFriend: React.FC = () => {
  return (
    <Container>
      <User>
        <Avatar src="https://img.quizur.com/f/img5f0c80e0bd9d08.31973740.jpg?lastEdited=1594654954" />
        <Info>
          <h1>José Antônio</h1>
          <p>emailaleatorio@gmail.comasdasdsadda</p>
        </Info>
      </User>

      <Actions>
        <ButtonAccept>
          <Check size={18} />
        </ButtonAccept>

        <ButtonRefuse>
          <X size={18} />
        </ButtonRefuse>
      </Actions>
    </Container>
  );
};

export default RequestFriend;
