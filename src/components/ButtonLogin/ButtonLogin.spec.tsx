import { render, screen } from "@testing-library/react";
import { ButtonLogin } from "./ButtonLogin";

describe("ButtonLogin", () => {
  it("deve renderizar ButtonLogin", () => {
    render(<ButtonLogin />);

    const logo = screen.getByTestId("logo_login_logo");
    const titulo = screen.getByTestId("logo_login_logo");

    expect(logo).toBeDefined();
    expect(titulo).toBeDefined();
    expect(titulo.textContent).toBe("My News app");
  });
});
