import { render, screen } from "@testing-library/react";
import Greeting from "../app/components/Greeting";

describe("<Greeting />", () => {
  it("greets the name it is given", () => {
    render(<Greeting name="Martin" />);
    expect(screen.getByText("Hello, Martin!")).toBeInTheDocument();
  });

  it("falls back to a default when no name is passed", () => {
    render(<Greeting />);
    expect(screen.getByText("Hello, stranger!")).toBeInTheDocument();
  });

  it("renders the welcome paragraph", () => {
    render(<Greeting name="Ada" />);
    expect(
      screen.getByText(/welcome to the next\.js fundamentals course/i)
    ).toBeInTheDocument();
  });

  it("renders the greeting as a heading", () => {
    render(<Greeting name="Ada" />);
    expect(
      screen.getByRole("heading", { name: "Hello, Ada!" })
    ).toBeInTheDocument();
  });
});
