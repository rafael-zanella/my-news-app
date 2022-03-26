import { FC } from "react";
import { Container } from "./Button.styled";

interface IProps {
  title: string,
}

export const Button: FC<IProps> = ({ title }) => {
  return (
    <Container>
      <button>{title}</button>
    </Container>
  );
}
