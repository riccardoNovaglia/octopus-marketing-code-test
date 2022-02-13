import { Footer } from "./components/footer/Footer";
import { Banner } from "./components/banner/Banner";
import { Product } from "./pages/product/Product";

import styles from "./App.module.scss";
import { useBasket } from "./basket/useBasket";

const App = () => {
  const { addToBasket, totalItemsInTheBasket } = useBasket();

  return (
    <>
      <Banner itemsInBasket={totalItemsInTheBasket()} />
      <main className={styles.main}>
        <Product addItemsToBasket={addToBasket} />
      </main>
      <Footer />
    </>
  );
};

export default App;
