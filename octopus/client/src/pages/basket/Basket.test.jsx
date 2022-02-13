import { render, screen } from "@testing-library/react";

import { Basket } from "./Basket";
import userEvent from "@testing-library/user-event";

it("allows clearing all items from the basket", () => {
  const clearBasket = jest.fn();
  render(<Basket clearBasket={clearBasket} />);
  userEvent.click(screen.getByRole("button", { name: "Clear basket" }));
  expect(clearBasket).toHaveBeenCalled();
});

it("allows navigating back home", () => {
  render(<Basket clearBasket={() => {}} />);
  expect(screen.getByRole("link")).toHaveProperty("href", "http://localhost/");
});
