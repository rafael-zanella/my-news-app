import styled from "styled-components";

export const Container = styled.div`
  padding: 0 2rem;
`;

export const Main = styled.main`
  min-height: 100vh;
  padding: 4rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const InputBox = styled.input`
  width: 200px;
  height: 30px;
  margin: 5px;
`;

export const Button = styled.button`
  width: 100px;
  height: 30px;
  cursor: pointer;
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`