import { useState } from "react";

import { Footer } from "./components/footer/Footer";
import { Banner } from "./components/banner/Banner";
import { Product } from "./pages/product/Product";

import styles from "./App.module.scss";

const App = () => {
  const [itemsInBasket, setItemsInBasket] = useState(0);

  function addItemsToBasket(itemQuantity) {
    setItemsInBasket(itemsInBasket + itemQuantity);
  }

  return (
    <>
      <Banner itemsInBasket={itemsInBasket} />
      <main className={styles.main}>
        <Product addItemsToBasket={addItemsToBasket} />
      </main>
      <Footer />
    </>
  );
};

export default App;
