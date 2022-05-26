import { render, screen } from "@testing-library/react";
import { LogoLogin } from "./LogoLogin";

describe("LogoLogin", () => {
  it("deve renderizar LogoLogin", () => {
    render(<LogoLogin />);

    const logo = screen.getByTestId("logo_login_logo");
    const titulo = screen.getByTestId("logo_login_logo");

    expect(logo).toBeDefined();
    expect(titulo).toBeDefined();
    expect(titulo.textContent).toBe("My News app");
  });
});
