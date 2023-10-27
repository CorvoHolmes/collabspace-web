import ProfileCard from "../../components/ProfileCard";
import LayoutDefault from "../../layouts/Default";
import { AboutMe } from "./styles";

const UpdateProfile: React.FC = () => {
  return (
    <LayoutDefault>
      <ProfileCard />

      <AboutMe />
    </LayoutDefault>
  );
};

export default UpdateProfile;
