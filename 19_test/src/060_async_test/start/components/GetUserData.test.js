import { render, screen } from "@testing-library/react";
import GetUserData from "./GetUserData";
import { ENDPOINT_URL} from "../Example";

describe('test GetUserData component', () => {
  test('while requesting data', () => {
    render(<GetUserData url={ENDPOINT_URL} />);
    const h1El = screen.getByRole('heading', {name: '通信中です！'})
    expect(h1El).toBeInTheDocument();
  });

  test('while requesting data', async () => {
    render(<GetUserData url={ENDPOINT_URL} />);
    const h2El = await screen.findByRole('heading', {name: 'プロフィール'})
    expect(h2El).toBeInTheDocument();

    const itemEls = await screen.findAllByRole('listitem');
    expect(itemEls[0].textContent).toBe("ID: 1");
    expect(itemEls[1].textContent).toBe("Name: CodeMafia");
  });

})
