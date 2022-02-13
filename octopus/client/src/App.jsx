import { Footer } from "./components/footer/Footer";
import { Banner } from "./components/banner/Banner";
import { Product } from "./pages/product/Product";

import styles from "./App.module.scss";
import { useBasket } from "./basket/useBasket";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Basket } from "./pages/basket/Basket";

const App = () => {
  const { addToBasket, clearBasket, totalItemsInTheBasket } = useBasket();

  return (
    <BrowserRouter>
      <Banner itemsInBasket={totalItemsInTheBasket()} />
      <main className={styles.main}>
        <Routes>
          {/* TODO: really, / should be a list of products, but for now just renders the hardcoded existing product */}
          <Route
            path="/"
            element={<Product addItemsToBasket={addToBasket} />}
          />
          {/* TODO: The products page that should be above would link to individual product page using their IDs */}
          <Route
            path="/products/:productId"
            element={<Product addItemsToBasket={addToBasket} />}
          />
          <Route
            path="/basket"
            element={<Basket clearBasket={clearBasket} />}
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
