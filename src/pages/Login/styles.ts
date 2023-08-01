import { styled } from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: var(--zinc-900);

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form`
  width: 320px;
  padding: 0 16px;
  display: flex;
  flex-direction: column;

  h1 {
    color: var(--zinc-100);
    font-weight: 600;
    font-size: 48px;
    margin-bottom: 40px;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-bottom: 20px;
  }
`;

export const Label = styled.label`
  color: var(--zinc-100);
  font-weight: 300px;
`;

export const Input = styled.input`
  height: 44px;
  background: var(--zinc-800);
  color: var(--zinc-100);
  font-size: 16px;
  padding: 20px 16px;
  border-radius: 4px;
  border: 0;
  outline: 0;

  ::placeholder {
    color: var(--zinc-500);
  }
`;

export const Button = styled.button`
  height: 48px;
  background: var(--emerald-700);
  color: var(--zinc-100);
  font-size: 18px;
  font-weight: bold;
  padding: 0 16px;
  border: 0;
  outline: 0;
  border-radius: 4px;

  cursor: pointer;
`;
