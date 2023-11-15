import { render, screen } from "@testing-library/react";
import Greet from "./Greet";

test('if h1 tag exists', () => {
  const { debug, container } = render(<Greet />);
  const h1El = screen.getByText("こんにちは");
  expect(h1El).toBeInTheDocument();

  const radioEl = screen.getByRole("radio");
  debug(radioEl);
  expect(radioEl).toBeInTheDocument();

  const imgEl = screen.getByRole('img');
  debug(imgEl);
  expect(imgEl).toBeInTheDocument();

  const headingEl = screen.getByRole('heading', /* {name: 'こんにちは'} */);
  debug(headingEl);
  expect(headingEl).toBeInTheDocument();
  const h1El_2 = container.querySelector('h2');
  debug(h1El_2);

  const elByLabel = screen.getByLabelText('氏名');
  debug(elByLabel);

  const elByPlaceholder = screen.getByPlaceholderText('氏名');
  debug(elByPlaceholder);
})

it('should have h1 tag', () => {
  render(<Greet />);
  const h1El = screen.getByText("こんにちは");
  expect(h1El).toBeInTheDocument();
})