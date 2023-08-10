import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 1.5rem;

  background: var(--zinc-800);
  border-radius: 8px;
  padding: 2rem;
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  gap: 1rem;
`;
