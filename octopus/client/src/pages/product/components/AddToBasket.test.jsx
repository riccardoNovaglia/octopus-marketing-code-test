import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { AddToBasket } from "./AddToBasket";

it("increases and decreases the quantity using the control buttons", async () => {
  const { currentQuantity, increaseQuantity, decreaseQuantity } =
    renderAddToBasket();

  expect(currentQuantity()).toHaveTextContent("1");
  increaseQuantity();
  expect(currentQuantity()).toHaveTextContent("2");
  increaseQuantity(2);
  expect(currentQuantity()).toHaveTextContent("4");
  decreaseQuantity();
  expect(currentQuantity()).toHaveTextContent("3");
});

it("does not decrease to zero or negatives, and shows an error message", async () => {
  const { currentQuantity, decreaseQuantity } = renderAddToBasket();

  decreaseQuantity();
  decreaseQuantity();
  expect(currentQuantity()).toHaveTextContent("1");
  expect(screen.getByText(/at least one item/i)).toBeInTheDocument();
});

it("hides the message when the quantity increases or items are added to the cart", async () => {
  const { increaseQuantity, decreaseQuantity, addToCart } = renderAddToBasket();

  decreaseQuantity();
  increaseQuantity();
  expect(screen.queryByText(/at least one item/i)).not.toBeInTheDocument();
  decreaseQuantity(3);
  addToCart();
  expect(screen.queryByText(/at least one item/i)).not.toBeInTheDocument();
});

it("only allows increasing the items quantity to 15", async () => {
  const { increaseQuantity, currentQuantity } = renderAddToBasket();

  increaseQuantity(20);
  expect(screen.getByText(/up to 15 items/i)).toBeInTheDocument();
  expect(currentQuantity()).toHaveTextContent("15");
});

it("removes the 15 items max error message when adding to cart or decreasing the quantity", async () => {
  const { decreaseQuantity, increaseQuantity, addToCart } = renderAddToBasket();

  increaseQuantity(20);
  addToCart();
  expect(screen.queryByText(/up to 15 items/i)).not.toBeInTheDocument();
  increaseQuantity();
  decreaseQuantity();
  expect(screen.queryByText(/up to 15 items/i)).not.toBeInTheDocument();
});

it("adds the current quantity items to the basket", async () => {
  const { addToBasketFnMock, increaseQuantity, addToCart } =
    renderAddToBasket();

  addToCart();
  expect(addToBasketFnMock).toHaveBeenCalledWith(1);

  increaseQuantity(3);
  addToCart();
  expect(addToBasketFnMock).toHaveBeenLastCalledWith(4);
});

function renderAddToBasket() {
  const addToBasketFnMock = jest.fn();
  const utils = render(<AddToBasket addItemsToBasket={addToBasketFnMock} />);

  return {
    ...utils,
    addToBasketFnMock,
    currentQuantity() {
      return screen.getByLabelText("QTY");
    },
    increaseQuantity(amount = 1) {
      const increaseButton = screen.getByRole("button", { name: "+" });
      [...Array(amount)].forEach(() => userEvent.click(increaseButton));
    },
    decreaseQuantity(amount = 1) {
      const decreaseButton = screen.getByRole("button", { name: "-" });
      [...Array(amount)].forEach(() => userEvent.click(decreaseButton));
    },
    addToCart() {
      userEvent.click(screen.getByRole("button", { name: "Add to cart" }));
    },
  };
}
