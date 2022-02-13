import { useState } from "react";
import { Footer } from "./components/footer/Footer";
import { Banner } from "./components/banner/Banner";
import { Product } from "./pages/product/Product";

const App = () => {
  const [itemsInBasket, setItemsInBasket] = useState(0);

  function addItemsToBasket(itemQuantity) {
    setItemsInBasket(itemsInBasket + itemQuantity);
  }

  return (
    <>
      <Banner itemsInBasket={itemsInBasket} />
      <Product addItemsToBasket={addItemsToBasket} />
      <Footer />
    </>
  );
};

export default App;
