import { render, screen } from "@testing-library/react";
import { Product } from "./Product";

it("renders the product", () => {
  render(<Product addItemsToBasket={() => {}} />);
  expect(
    screen.getByRole("heading", { name: "Energy saving light bulb" })
  ).toBeInTheDocument();
});
