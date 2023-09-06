import { Trash } from "phosphor-react";

import Avatar from "../AvatarSquare";

import { Container, CommentBox, AuthorAndTime, ButtonDelete } from "./styles";
import { DiffToString } from "../../utils/date";
import moment from "moment";
import { useNavigate } from "react-router-dom";

interface CommentProps {
  authorId: string;
  authorAvatar: string | null;
  authorName: string;
  commentId: string;
  content: string;
  reactions: any[];
  commentedAt: string;
}

const Comment: React.FC<CommentProps> = ({
  authorId,
  authorAvatar,
  authorName,
  commentId,
  content,
  reactions = [],
  commentedAt,
}) => {
  const navigate = useNavigate();

  function handleMe() {
    navigate(`/me/${authorId}`);
  }

  return (
    <Container>
      <Avatar
        onClick={handleMe}
        src={
          authorAvatar ||
          "https://images-ext-1.discordapp.net/external/5hyJpFaJWGqRGEUP8osz0gM1MG5bIE37lqvs1RwdH6Q/https/i.imgur.com/HYrZqHy.jpg"
        }
      />

      <CommentBox>
        <AuthorAndTime>
          <h1 onClick={handleMe}>{authorName}</h1>
          <time>
            Cerca de {DiffToString(moment().diff(commentedAt, "seconds"))}
          </time>

          <ButtonDelete>
            <Trash size={22} />
          </ButtonDelete>
        </AuthorAndTime>

        <p>{content}</p>
      </CommentBox>
    </Container>
  );
};

export default Comment;
