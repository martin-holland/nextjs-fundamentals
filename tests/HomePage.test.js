import { render, screen } from "@testing-library/react";
import Home from "../app/page";

describe("Home page", () => {
  it("renders the main heading (case-insensitive match)", () => {
    render(<Home />);
    expect(
      screen.getByRole("heading", { name: /martin's next\.js playground/i })
    ).toBeInTheDocument();
  });

  it("renders the intro paragraph", () => {
    render(<Home />);
    expect(screen.getByText(/fundamentals of next\.js at metropolia/i)).toBeInTheDocument();
  });

  it("links to the about page", () => {
    render(<Home />);
    const link = screen.getByRole("link", { name: /go to about page/i });
    expect(link).toHaveAttribute("href", "/about");
  });
});
