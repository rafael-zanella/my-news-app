import { Meta } from "@storybook/react";
import { ButtonLogin } from "./ButtonLogin";

export default {
  title: "Components/ButtonLogin",
  component: ButtonLogin,
} as Meta;

export const Normal = () => (
    <ButtonLogin plataform="Google" />
);
