import { GET_PRODUCT_QUERY } from "./productQueries";

export function productSample() {
  return {
    id: 1,
    name: "Glow in the dark lightbulb",
    power: "over 9000",
    description: "Some words",
    price: 9876,
    quantity: 123,
    brand: "Sayan.inc",
    weight: 0,
    height: 100.321,
    width: 12.21,
    length: 21.12,
    modelCode: "GOKU",
    colour: "golden",
    imgUrl: "https://somewhere.com/",
  };
}

export function getMocks(product) {
  return [
    {
      request: getRequest(product),
      result: { data: { product } },
    },
  ];
}

export function getRequest(product) {
  return {
    query: GET_PRODUCT_QUERY,
    variables: { productId: `${product.id}` },
  };
}
