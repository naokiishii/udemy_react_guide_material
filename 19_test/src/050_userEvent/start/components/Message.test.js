import { render, screen } from "@testing-library/react";
import Message from "./Message";
import userEvent from "@testing-library/user-event";

describe('test Message component', () => {
  describe('initial rendering', () => {
    test('if input text is rendered in the screen', () => {
      render(<Message />);
      const h2El = screen.getByRole('heading', { name: '入力された文字:'});
      expect(h2El).toBeInTheDocument();
    })
  })

  describe('check the transition of display', () => {
    test('update value and hit button', async () => {
      const user = userEvent.setup();
      render(<Message />);
      const inputEl = screen.getByRole('textbox');
      const btnEl = screen.getByRole('button', { name: '送信ボタン'});
      const h2El = screen.getByRole('heading', { name: '入力された文字:'});

      expect(btnEl).toBeDisabled();
      expect(inputEl.value).toBe("");

      await user.type(inputEl, "hello");
      expect(btnEl).not.toBeDisabled();

      await user.click(btnEl);

      expect(h2El.textContent).toBe("入力された文字:hello")
    })
  })
})
