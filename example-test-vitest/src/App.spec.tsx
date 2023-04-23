import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import { AuthProvider } from "./contexts/AuthProvider";

describe("App Compoent", () => {
  it("renders the Menu component and the authentication button", () => {
    render(<App />);

    expect(screen.getByRole("navigation")).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
  it("allows the user to sign in and out", () => {
    render(
      <AuthProvider>
        <App />
      </AuthProvider>
    );
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toHaveTextContent("Entrar");

    fireEvent.click(buttonElement);
    expect(buttonElement).toHaveTextContent("Sair");

    fireEvent.click(buttonElement);
    expect(buttonElement).toHaveTextContent("Entrar");
  });
});
