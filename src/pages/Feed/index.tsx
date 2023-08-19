import LayoutDefault from "../../layouts/Default";

import ProfileCard from "../../components/ProfileCard";
import Post from "../../components/Post";

import { Container, Posts } from "./styles";
import CreatePost from "../../components/CreatePost";

const Feed: React.FC = () => {
  return (
    <LayoutDefault>
      <Container>
        <ProfileCard />

        <Posts>
          <CreatePost />

          <Post />
          <Post />
        </Posts>
      </Container>
    </LayoutDefault>
  );
};

export default Feed;
