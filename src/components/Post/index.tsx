import { ThumbsUp, ChatCircleText } from "phosphor-react";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { useState, useCallback, FormEvent } from "react";
import { toast } from "react-toastify";

import AvatarSquare from "../AvatarSquare";
import Comment from "../Comment";
import InputArea from "../InputArea";
import Button from "../Button";

import {
  Container,
  Header,
  Author,
  AuthorInfo,
  Content,
  Description,
  Hashtags,
  Divider,
  Interactions,
  InteractionInfo,
  CountReaction,
  CountComment,
  InteractionAction,
  ButtonAction,
  CommentArea,
  CommentForm,
  Comments,
} from "./styles";
import { DiffToString } from "../../utils/date";
import { createComment } from "../../services/comments/types";
import { IComment } from "../../services/comments";

interface PostProps {
  authorId: string;
  authorAvatar: string | null;
  authorName: string;
  authorEmail: string;
  publishedAt: string;
  postId: string;
  content: string;
  tags: string | null;
  comments: IComment[];
  reactions: any[];
  onCreateComment: () => void;
}

const Post: React.FC<PostProps> = ({
  authorId,
  authorAvatar,
  authorName,
  authorEmail,
  publishedAt,
  postId,
  content,
  tags,
  comments = [],
  reactions,
  onCreateComment,
}) => {
  const navigate = useNavigate();

  const [commentArea, setCommentArea] = useState(false);
  const [commentContent, setCommentContent] = useState("");

  const handleCreateComment = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();

      try {
        const { result, message } = await createComment({
          postId,
          content: commentContent,
        });

        if (result === "success") {
          setCommentContent("");
          onCreateComment();
          toast.success(message);
        }

        if (result === "error") {
          toast.error(message);
        }
      } catch (error: any) {
        toast.error(error.message);
      }
    },
    [postId, commentContent, onCreateComment],
  );

  function toggleCommentArea() {
    setCommentArea(!commentArea);
  }

  function handleMe() {
    navigate(`/me/${authorId}`);
  }

  return (
    <Container>
      <Header>
        <Author>
          <AvatarSquare
            onClick={handleMe}
            src={
              authorAvatar ||
              "https://images-ext-1.discordapp.net/external/5hyJpFaJWGqRGEUP8osz0gM1MG5bIE37lqvs1RwdH6Q/https/i.imgur.com/HYrZqHy.jpg"
            }
            borderEffect
          />

          <AuthorInfo>
            <h1 onClick={handleMe}>{authorName}</h1>
            <p>{authorEmail}</p>
          </AuthorInfo>
        </Author>

        <time>
          Publicado há {DiffToString(moment().diff(publishedAt, "seconds"))}
        </time>
      </Header>

      <Content>
        <Description>
          <p>{content}</p>
        </Description>

        <Hashtags>
          <span>{tags}</span>
        </Hashtags>
      </Content>

      <Interactions>
        <InteractionInfo>
          <CountReaction>
            <span>
              <ThumbsUp size={19} weight="bold" />
              {reactions.length}
            </span>
          </CountReaction>

          <CountComment>
            <span onClick={toggleCommentArea}>{comments.length}</span>
          </CountComment>
        </InteractionInfo>

        <InteractionAction>
          <ButtonAction>
            <ThumbsUp size={22} />
            Reagir
          </ButtonAction>

          <ButtonAction onClick={toggleCommentArea}>
            <ChatCircleText size={22} />
            Comentar
          </ButtonAction>
        </InteractionAction>
      </Interactions>

      <CommentArea $commentArea={commentArea}>
        <CommentForm onSubmit={handleCreateComment}>
          <h1>Deixe seu comentário</h1>

          <InputArea
            name="commentContent"
            value={commentContent}
            rows={3}
            placeholder="Escreva seu comentário aqui ..."
            required
            onChange={(e) => setCommentContent(e.target.value)}
          />

          <Button>Comentar</Button>
        </CommentForm>

        <Divider />

        <Comments>
          {comments.map((comment) => (
            <Comment
              key={comment.id}
              postAuthorId={authorId}
              authorId={comment.user.id}
              authorAvatar={comment.user.avatarUrl}
              authorName={comment.user.name}
              commentId={comment.id}
              content={comment.content}
              commentedAt={comment.commentedAt}
              reactions={comment.reactions}
            />
          ))}
        </Comments>
      </CommentArea>
    </Container>
  );
};

export default Post;
