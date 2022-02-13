import { act, renderHook } from "@testing-library/react-hooks";
import { useBasket } from "./useBasket";

it("allows adding items to the basket", () => {
  const { result } = renderHook(() => useBasket());
  act(() => {
    result.current.addToBasket({ productId: 1, quantity: 3 });
  });
  expect(result.current.basket).toEqual({
    1: { quantity: 3 },
  });
  expect(result.current.totalItemsInTheBasket()).toEqual(3);
});

it("can include multiple product types", () => {
  const { result } = renderHook(() => useBasket());
  act(() => {
    result.current.addToBasket({ productId: 1, quantity: 3 });
  });
  act(() => {
    result.current.addToBasket({ productId: 4, quantity: 2 });
  });
  expect(result.current.basket).toEqual({
    1: { quantity: 3 },
    4: { quantity: 2 },
  });
  expect(result.current.totalItemsInTheBasket()).toEqual(5);
});

it("can add the same product multiple times", () => {
  const { result } = renderHook(() => useBasket());
  act(() => {
    result.current.addToBasket({ productId: 1, quantity: 3 });
  });
  act(() => {
    result.current.addToBasket({ productId: 1, quantity: 7 });
  });
  expect(result.current.basket).toEqual({
    1: { quantity: 10 },
  });
  expect(result.current.totalItemsInTheBasket()).toEqual(10);
});

it("can clear all items from the basket", () => {
  const { result } = renderHook(() => useBasket());
  act(() => {
    result.current.addToBasket({ productId: 32, quantity: 3 });
  });
  act(() => {
    result.current.clearBasket();
  });
  expect(result.current.basket).toEqual({});
  expect(result.current.totalItemsInTheBasket()).toEqual(0);
});
