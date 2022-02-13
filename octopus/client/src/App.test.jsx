import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import App from "./App";

test("should be able to increase and decrease product quantity", async () => {
  render(<App />);
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
  render(<App />);
  expect(screen.getByLabelText("No items in the basket")).toBeInTheDocument();
  userEvent.click(screen.getByRole("button", { name: "Add to cart" }));
  expect(screen.getByLabelText("1 item in the basket")).toBeInTheDocument();
  userEvent.click(screen.getByRole("button", { name: "Add to cart" }));
  expect(screen.getByLabelText("2 items in the basket")).toBeInTheDocument();
});
