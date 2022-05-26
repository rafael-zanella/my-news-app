import { Container, Plataform } from "./ButtonLogin.styled";
import { useTheme } from "@/Contexts/ThemeContext/ThemeContext";
import { Typography } from "@/design-system/Typography";
import { FC } from "react";
import {
  GoogleLogoWithBorder,
} from "@/design-system/icons";

interface IProps {
  plataform?: "Google" | "Facebook" | "Github" | "Twitter";
}

export const ButtonLogin: FC<IProps> = ({ plataform = "Google" }) => {
  const { theme } = useTheme();

  function defineLogo() {
    return (
      <GoogleLogoWithBorder
        data-testid="button_login_google_logo"
        stroke={theme.colors.onBackgroundColor}
        width="15%"
        height="100%"
      />
    );
  }

  return (
    <Container data-testid="button_login_container">
      {defineLogo()}
      <Typography
        data-testid="button_login_titulo"
        color={theme.colors.accentColor}
        type="h4"
      >
        Continuar com <Plataform>{plataform}</Plataform>
      </Typography>
    </Container>
  );
};
