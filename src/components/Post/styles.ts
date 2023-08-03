import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 40px;
  background: var(--zinc-800);
  border-radius: 8px;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    div {
      display: flex;
      gap: 1rem;

      section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        h1 {
          font-size: 1rem;
          color: var(--zinc-200);
        }

        p {
          font-size: 0.875rem;
          color: var(--zinc-500);
        }
      }
    }

    p {
      font-size: 0.875rem;
      color: var(--zinc-500);
    }
  }

  main {
    margin-top: 1.5rem;
  }

  footer {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    h1 {
      font-size: 1rem;
      color: var(--zinc-300);
    }

    textarea {
      width: 100%;
      color: var(--zinc-300);
      background: var(--zinc-900);
      border: 0;
      outline: 0;
      resize: none;
      height: 6rem;
      padding: 1rem;
      border-radius: 8px;
      font-size: 0.875rem;

      &:focus {
        outline: 1px solid var(--emerald-500);
      }
    }

    button {
      width: 150px;
      font-size: 1rem;
      padding: 1rem 1.5rem;
      background: var(--emerald-600);
      color: var(--zinc-200);
      font-weight: bold;
      border: 0;
      outline: 0;
      border-radius: 8px;

      cursor: pointer;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  p {
    font-size: 1rem;
    color: var(--zinc-300);
  }
`;

export const Hashtags = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;

  span {
    font-size: 1rem;
    font-weight: bold;
    color: var(--emerald-600);

    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: var(--zinc-700);
  margin: 2rem 0;
`;
