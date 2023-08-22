import LayoutDefault from "../../layouts/Default";

import RequestFriend from "../../components/RequestFriend";

import {
  Content,
  Overview,
  Cover,
  Avatar,
  UserInfo,
  General,
  Contact,
  Total,
  Requests,
  Container,
  RequestList,
  Sidebar,
} from "./styles";

const Profile: React.FC = () => {
  return (
    <LayoutDefault>
      <Container>
        <Content>
          <Overview>
            <Cover src="https://cutewallpaper.org/29/dual-screen-mr-robot-wallpaper/247286624.jpg" />

            <Avatar src="https://i.pinimg.com/736x/b7/65/02/b76502e936cd209b595bd7a537e74db4.jpg" />

            <UserInfo>
              <General>
                <h1>Natan Foleto</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Necessitatibus voluptate, hic nihil itaque natus suscipit
                  placeat error, ea repellendus, et obcaecati! Maiores excepturi
                  quidem laboriosam, at distinctio nam nihil quia. Lorem
                </p>

                <Total>
                  <span>
                    <strong>115</strong> publicações
                  </span>
                  <span>
                    <strong>1562</strong> amigos
                  </span>
                </Total>
              </General>

              <Contact>
                <span>Jaborandi, São Paulo, Brasil</span>
                <span>(17) 991008354</span>
                <span>Entrou em fevereiro de 2023</span>
              </Contact>
            </UserInfo>
          </Overview>
        </Content>

        <Sidebar>
          <Requests>
            <h1>Solicitações de amizade</h1>

            <RequestList>
              <RequestFriend />
              <RequestFriend />
              <RequestFriend />
              <RequestFriend />
              <RequestFriend />
            </RequestList>
          </Requests>
        </Sidebar>
      </Container>
    </LayoutDefault>
  );
};

export default Profile;
