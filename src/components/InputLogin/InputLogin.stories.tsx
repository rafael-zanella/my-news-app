import { Meta } from "@storybook/react";
import { InputLogin } from "./InputLogin";

export default {
  title: "Components/InputLogin",
  component: InputLogin,
} as Meta;

export const Normal = () => (
    <InputLogin id='Username' type="password" placeholder="Username" onChange={() => { } } value={undefined}  />
);
