import { Header } from "@/components/Header/Header";
import { Nav } from "@/components/Nav/Nav";
import { Section, Item, SettingsLayout } from "./Settings.styled";
import {
  Moon,
  ChevronRight,
  CircleQuestion,
  ArrowRightToBracket,
} from "@/design-system/icons";
import { Typography } from "@/design-system/Typography";
import { useTheme } from "@/Contexts/ThemeContext/ThemeContext";
import { Toggle } from "@/components/Toggle/Toggle";
import Link from "next/link";
import { useRouter } from "next/router";

export const Settings = () => {
  const {
    theme: { colors, title },
    changeTheme,
  } = useTheme();
  const router = useRouter();
  let token = sessionStorage.getItem("Token");

  const loginLogout = () => {
    if (token) {
      sessionStorage.removeItem("Token");
      router.push("/home");
    } else {
      router.push("/login");
    }
  };

  return (
    <SettingsLayout>
      <Header title="Configurações" />
      <main>
        <Section>
          <Item>
            <div>
              <Moon width={16} height={16} stroke={colors.onBackgroundColor} />
              <Typography type="h3">Modo escuro</Typography>
            </div>
            <Toggle checked={title === "dark"} onChange={changeTheme} />
          </Item>

          <Link href="settings/terms">
            <Item>
              <div>
                <CircleQuestion
                  width={16}
                  height={16}
                  stroke={colors.onBackgroundColor}
                />
                <Typography type="h3">Termos & Condições</Typography>
              </div>
              <ChevronRight stroke={colors.onBackgroundColor} />
            </Item>
          </Link>

          <Link href="settings/about">
            <Item>
              <div>
                <CircleQuestion
                  width={16}
                  height={16}
                  stroke={colors.onBackgroundColor}
                />
                <Typography type="h3">Sobre</Typography>
              </div>
              <ChevronRight stroke={colors.onBackgroundColor} />
            </Item>
          </Link>

          <Item>
            <div
              onClick={loginLogout}
              style={{ justifyContent: "space-between", width: "100%" }}
            >
              <div> 
                <ArrowRightToBracket
                  width={16}
                  height={16}
                  stroke={colors.onBackgroundColor}
                />
                <Typography type="h3">{token ? "Logout" : "Login"}</Typography>
              </div>
              <ChevronRight stroke={colors.onBackgroundColor} />
            </div>
          </Item>
        </Section>
      </main>
      <Nav />
    </SettingsLayout>
  );
};
