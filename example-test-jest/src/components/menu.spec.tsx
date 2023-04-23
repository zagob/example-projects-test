import { render, screen } from "@testing-library/react";
import { Menu } from "./Menu";

describe("Menu Component", () => {
  it("list how much li", () => {
    render(<Menu />);

    const textHome = screen.getByText("Home");

    expect(textHome).toBeInTheDocument();
  });
});
