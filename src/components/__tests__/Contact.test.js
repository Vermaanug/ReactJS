import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

test("Should Load Contact us Component", () => {
  render(<Contact />);

  const heading = screen.getByRole("heading");
  expect(heading).toBeInTheDocument();
});

test("Check Whether Text Box is there or not " , () => {
  render(<Contact/>)

  const input = screen.getByRole("textbox");
  expect(input).toBeInTheDocument();
})