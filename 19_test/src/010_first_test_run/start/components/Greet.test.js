import { render, screen } from "@testing-library/react";
import Greet from "./Greet";

test('if h1 tag exists', () => {
  const { debug } = render(<Greet />);
  const h1El = screen.getByText("こんにちは");
  expect(h1El).toBeInTheDocument();
})

it('should have h1 tag', () => {
  render(<Greet />);
  const h1El = screen.getByText("こんにちは");
  expect(h1El).toBeInTheDocument();
})