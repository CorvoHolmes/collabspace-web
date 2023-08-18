import LayoutDefault from "../../layouts/Default";

import ProfileCard from "../../components/ProfileCard";
import Post from "../../components/Post";

import { Posts } from "./styles";
import CreatePost from "../../components/CreatePost";

const Feed: React.FC = () => {
  return (
    <LayoutDefault>
      <ProfileCard />

      <Posts>
        <CreatePost />

        <Post />
        <Post />
      </Posts>
    </LayoutDefault>
  );
};

export default Feed;
