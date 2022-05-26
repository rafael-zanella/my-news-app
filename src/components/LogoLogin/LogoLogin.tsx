import { Container, Title } from "./LogoLogin.styled";
import { useTheme } from "@/Contexts/ThemeContext/ThemeContext";
import { LogoDefault } from "@/design-system/icons";
import { Typography } from "@/design-system/Typography";

export const LogoLogin = () => {
  const { theme } = useTheme();

  return (
    <Container data-testid="logo_login_logo">
      <Title>
        <LogoDefault
          fill={theme.colors.onBackgroundColor}
          width='35%'
          height='100%'
          data-testid="logo_login_logo"
        />
        <Typography
          type="h1"
          fontWeight={700}
          color={theme.colors.accentColor}
          data-testid="logo_login_titulo"
        >
          My News App
        </Typography>
      </Title>
    </Container>
  );
};
