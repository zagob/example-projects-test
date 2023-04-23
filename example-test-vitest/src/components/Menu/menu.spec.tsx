import { render, screen } from "@testing-library/react";
import { Menu } from ".";

describe("Menu Component", () => {
  it("renders how much li", () => {
    render(<Menu />);
    const element = screen.getAllByRole("listitem");

    expect(element).toHaveLength(3);
  });
  it("renders tag li", () => {
    render(<Menu />);

    const elementHome = screen.getByText("Home");
    const elementAbout = screen.getByText("About");

    expect(elementHome).toBeInTheDocument();
    expect(elementAbout).toBeInTheDocument();
  });
});
