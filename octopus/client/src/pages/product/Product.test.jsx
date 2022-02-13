import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import { Product } from "./Product";
import { GraphQLError } from "graphql";
import { getMocks, productSample, getRequest } from "./product.fixture";
import userEvent from "@testing-library/user-event";

const product = productSample();

it("displays loading while the data is being fetched", async () => {
  render(
    <MockedProvider mocks={[]} addTypename={false}>
      <Product addItemsToBasket={() => {}} />
    </MockedProvider>
  );
  expect(screen.getByText(/loading/i)).toBeInTheDocument();
});

it("fetches the product by id and renders it", async () => {
  render(
    <MockedProvider mocks={getMocks(product)} addTypename={false}>
      <Product addItemsToBasket={() => {}} />
    </MockedProvider>
  );
  await waitForElementToBeRemoved(() => screen.queryByText(/loading/i));
  expect(
    screen.getByRole("heading", { name: product.name })
  ).toBeInTheDocument();
  expect(screen.getByAltText("A picture of the product")).toHaveProperty(
    "src",
    product.imgUrl
  );
  expect(screen.getByText(product.power, { exact: false })).toBeInTheDocument();
  expect(screen.getByText(product.description)).toBeInTheDocument();
  expect(screen.getByText("Brand")).toBeInTheDocument();
  expect(screen.getByText(product.brand)).toBeInTheDocument();
  expect(screen.getByText("98")).toBeInTheDocument();
  expect(screen.getByText(".76")).toBeInTheDocument();
});

it("adds the product id along with the selected quantity to the basket", async () => {
  const addToBasket = jest.fn();
  render(
    <MockedProvider mocks={getMocks(product)} addTypename={false}>
      <Product addItemsToBasket={addToBasket} />
    </MockedProvider>
  );
  await waitForElementToBeRemoved(() => screen.queryByText(/loading/i));
  userEvent.click(screen.getByRole("button", { name: "Add to cart" }));
  expect(addToBasket).toHaveBeenCalledWith({
    productId: product.id,
    quantity: 1,
  });
});

it.each([
  {
    request: getRequest(product),
    error: new Error("An error occurred"),
  },
  {
    request: getRequest(product),
    result: {
      errors: [new GraphQLError("Error!")],
    },
  },
])("shows an error if a problem occurs while fetching data", async (mock) => {
  render(
    <MockedProvider mocks={[mock]} addTypename={false}>
      <Product addItemsToBasket={() => {}} />
    </MockedProvider>
  );
  await waitForElementToBeRemoved(() => screen.queryByText(/loading/i));
  expect(screen.getByText(/an error occurred/i)).toBeInTheDocument();
});
