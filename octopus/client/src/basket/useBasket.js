import { useCookies } from "react-cookie";

const cookieName = "basket";

export function useBasket() {
  const [cookies, setCookie] = useCookies([cookieName]);

  function addToBasket({ productId, quantity }) {
    if (cookies.basket !== undefined) {
      const currentAmount = cookies.basket[productId]?.quantity ?? 0;

      setCookie(cookieName, {
        ...cookies.basket,
        [productId]: { quantity: currentAmount + quantity },
      });
    } else {
      setCookie(cookieName, {
        ...cookies.basket,
        [productId]: { quantity: 0 + quantity },
      });
    }
  }

  function totalItemsInTheBasket() {
    if (cookies.basket === undefined) return 0;

    const products = Object.keys(cookies.basket);
    return products
      .map((productId) => cookies.basket[productId].quantity)
      .reduce((acc, quantity) => acc + quantity, 0);
  }

  function clearBasket() {
    setCookie(cookieName, {});
  }

  return {
    addToBasket,
    totalItemsInTheBasket,
    clearBasket,
    basket: cookies.basket,
  };
}
