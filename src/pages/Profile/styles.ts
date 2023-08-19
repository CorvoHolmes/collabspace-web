import { styled } from "styled-components";

export const Overview = styled.div`
  width: 75%;
`;

export const Cover = styled.img`
  width: 100%;
  height: 192px;
  object-fit: cover;
  border-radius: 8px 8px 0 0;
`;

export const Avatar = styled.img`
  width: 192px;
  height: 192px;
  border-radius: 100%;
  object-fit: cover;
  margin-top: -160px;
  margin-left: 2rem;
`;

export const UserInfo = styled.div`
  width: 100%;
  height: 250px;
  background: var(--zinc-800);
  border-radius: 0 0 8px 8px;
`;
