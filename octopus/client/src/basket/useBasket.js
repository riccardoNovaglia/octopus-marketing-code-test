import { useState } from "react";

export function useBasket() {
  const [basket, setBasket] = useState({});

  function addToBasket({ productId, quantity }) {
    const currentAmount = basket[productId]?.quantity ?? 0;

    setBasket({
      ...basket,
      [productId]: { quantity: currentAmount + quantity },
    });
  }

  function totalItemsInTheBasket() {
    const products = Object.keys(basket);
    return products
      .map((productId) => basket[productId].quantity)
      .reduce((acc, quantity) => acc + quantity, 0);
  }

  return {
    addToBasket,
    totalItemsInTheBasket,
    basket,
  };
}
