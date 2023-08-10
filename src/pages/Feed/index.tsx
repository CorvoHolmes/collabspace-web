import Header from "../../components/Header";
import ProfileCard from "../../components/ProfileCard";
import Post from "../../components/Post";

import { Container, Content, Posts } from "./styles";
import CreatePost from "../../components/CreatePost";

const Feed: React.FC = () => {
  return (
    <Container>
      <Header />

      <Content>
        <ProfileCard />

        <Posts>
          <CreatePost />

          <Post />
          <Post />
        </Posts>
      </Content>
    </Container>
  );
};

export default Feed;
