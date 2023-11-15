import { render, screen } from "@testing-library/react";
import Message from "./Message";
import userEvent from "@testing-library/user-event";

describe('test Message Component', () => {
  test('Q1.画面内にinput要素が表示されていることをテストしてください。', () => {
    render(<Message />);
    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();
  })

  test('Q2.input要素に値を入れると正しく値が更新されることをテストしてください。', async () => {
    render(<Message />);
    const content = screen.getByRole('textbox');
    expect(content.value).toBe('')
    const user = userEvent.setup();
    await user.type(content, "hello");
    expect(content.value).toBe('hello')
  })
})