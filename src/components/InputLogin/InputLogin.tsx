import { Container, Input, Label } from "./InputLogin.styled";
import { useTheme } from "@/Contexts/ThemeContext/ThemeContext";
import { Typography } from "@/design-system/Typography";
import { FC, useState } from "react";

interface IProps {
  id: string;
  type: string;
  placeholder: string;
  onChange: any;
  value: any;
}

export const InputLogin: FC<IProps> = ({
  id,
  type,
  placeholder,
  onChange,
  value,
}) => {
  // const { theme } = useTheme();

  return (
    <Container>
      <Input id={id} type={type} onChange={onChange} value={value} />
      <Label>{placeholder}</Label>
    </Container>
  );
};
