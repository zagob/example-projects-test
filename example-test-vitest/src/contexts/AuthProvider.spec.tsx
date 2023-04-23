import { act, render, screen } from "@testing-library/react";
import { AuthProvider } from "./AuthProvider";
import { useAuth } from "../hooks/useAuth";

describe("AuthProvider Component", () => {
  it("render children elements", () => {
    render(
      <AuthProvider>
        <div>Test element</div>
      </AuthProvider>
    );
    const elementTestText = screen.getByText("Test element");
    expect(elementTestText).toBeInTheDocument();
  });
  it("provides authentication context", async () => {
    const TestComponent = () => {
      const { authenticate, signIn, signOut } = useAuth();
      return (
        <>
          <div data-testid="authenticate">{authenticate.toString()}</div>
          <button onClick={signIn}>Sign In</button>
          <button onClick={signOut}>Sign Out</button>
        </>
      );
    };

    render(
      <AuthProvider>
        <TestComponent />
      </AuthProvider>
    );

    expect(screen.getByTestId("authenticate")).toHaveTextContent("false");

    const signInButton = screen.getByText("Sign In");
    const signOutButton = screen.getByText("Sign Out");

    expect(screen.getByText("Sign In")).toBeInTheDocument();
    act(() => {
      signInButton.click();
    });
    expect(screen.getByTestId("authenticate")).toHaveTextContent("true");

    act(() => {
      signOutButton.click();
    });
    expect(screen.getByTestId("authenticate")).toHaveTextContent("false");
  });
});
