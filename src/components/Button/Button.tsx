import { FC } from "react";
import { Container } from "./Button.styled";

interface IProps {
  label: string,
}

export const Button: FC<IProps> = ({ label }) => {
  return (
    <Container data-testid="button">
      <button>{label}</button>
    </Container>
  );
}
