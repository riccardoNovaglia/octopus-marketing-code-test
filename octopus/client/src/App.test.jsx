import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import App from "./App";

import { MockedProvider } from "@apollo/client/testing";
import { getMocks, productSample } from "./pages/product/product.fixture";

const product = productSample();

test("should be able to increase and decrease product quantity", async () => {
  render(
    <MockedProvider mocks={getMocks(product)} addTypename={false}>
      <App />
    </MockedProvider>
  );
  await waitForElementToBeRemoved(() => screen.queryByText(/loading/i));

  expect(screen.getByLabelText("QTY")).toHaveTextContent("1");
  userEvent.click(screen.getByRole("button", { name: "+" }));
  expect(screen.getByLabelText("QTY")).toHaveTextContent("2");
  userEvent.click(screen.getByRole("button", { name: "+" }));
  userEvent.click(screen.getByRole("button", { name: "+" }));
  expect(screen.getByLabelText("QTY")).toHaveTextContent("4");
  userEvent.click(screen.getByRole("button", { name: "-" }));
  expect(screen.getByLabelText("QTY")).toHaveTextContent("3");
});

test("should be able to add items to the basket", async () => {
  render(
    <MockedProvider mocks={getMocks(product)} addTypename={false}>
      <App />
    </MockedProvider>
  );
  await waitForElementToBeRemoved(() => screen.queryByText(/loading/i));

  expect(screen.getByLabelText("No items in the basket")).toBeInTheDocument();
  userEvent.click(screen.getByRole("button", { name: "Add to cart" }));
  expect(screen.getByLabelText("1 item in the basket")).toBeInTheDocument();
  userEvent.click(screen.getByRole("button", { name: "Add to cart" }));
  expect(screen.getByLabelText("2 items in the basket")).toBeInTheDocument();
});
