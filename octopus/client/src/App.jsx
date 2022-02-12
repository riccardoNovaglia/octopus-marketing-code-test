import { ReactComponent as OctopusEnergyLogo } from "./assets/logo.svg";
import { ReactComponent as BasketLogo } from "./assets/basket.svg";
import styles from "./App.module.scss";
import { useState } from "react";

const App = () => {
  const [newItemsQuantity, setNewItemsQuantity] = useState(1);
  const [itemsInBasket, setItemsInBasket] = useState(0);

  return (
    <>
      <header role="banner" className={styles.banner}>
        <OctopusEnergyLogo className={styles.octoLogo} />
        <a
          className={
            itemsInBasket > 0 ? styles.basketWrapper : styles.basketWrapperFull
          }
          aria-label={
            itemsInBasket === 0
              ? "No items in the basket"
              : itemsInBasket === 1
              ? `${itemsInBasket} item in the basket`
              : `${itemsInBasket} items in the basket`
          }
          href="/basket"
          aria-live="polite"
        >
          <BasketLogo className={styles.basketLogo} aria-hidden />
          {itemsInBasket !== 0 && (
            <p aria-hidden={true} className={styles.basketAmount}>
              {itemsInBasket}
            </p>
          )}
        </a>
      </header>
      <main className={styles.main}>
        <section className={styles.heroImageWrapper} aria-hidden>
          <img
            className={styles.heroImage}
            src="https://i.ibb.co/2nzwxnQ/bulb.png"
            alt="A lightbulb"
          />
        </section>
        <section>
          <h1 className={styles.productName}>Energy saving light bulb</h1>
          <p className={styles.itemsQuantity}>25W // Packet of 4</p>
        </section>
        <section className={styles.priceSection}>
          {/* TODO: Add visually hidden title */}
          <p className={styles.price}>
            12<span className={styles.pence}>.99</span>
          </p>
          <div className={styles.quantityControls}>
            <p id="quantityLabel" className={styles.quantityLabel}>
              QTY
            </p>
            <button
              className={styles.quantityButton}
              onClick={() => setNewItemsQuantity(newItemsQuantity - 1)}
            >
              -
            </button>
            <p
              aria-labelledby="quantityLabel"
              className={styles.currentQuantity}
            >
              {newItemsQuantity}
            </p>
            <button
              className={styles.quantityButton}
              onClick={() => setNewItemsQuantity(newItemsQuantity + 1)}
            >
              +
            </button>
          </div>
          <button
            className={styles.addToCart}
            onClick={() => setItemsInBasket(itemsInBasket + newItemsQuantity)}
          >
            Add to cart
          </button>
        </section>
        <section>
          <h2>Description</h2>
          <p>
            Available in 7 watts, 9 watts, 11 watts Spiral Light bulb in B22,
            bulb switches on instantly, no wait around warm start and flicker
            free features make for a great all purpose bulb
          </p>
        </section>
        <section className={styles.specsSection}>
          <h2>Specifications</h2>
          <dl className={styles.specs}>
            <dt>Brand</dt>
            <dd>Philips</dd>
            <dt>Item weight</dt>
            <dd>77</dd>
            <dt>Dimensions</dt>
            <dd>12.6x6.2x6.2</dd>
            <dt>Item model number</dt>
            <dd>E27 ES</dd>
            <dt>Colour</dt>
            <dd>Cool daylight</dd>
          </dl>
        </section>
      </main>
      <footer className={styles.footer}>
        <p>Octopus Energy Ltd is a company registered in England and Wales.</p>
        <p>
          Registered number: 09265424. Registered office: 35 Holborn London.
          EC1N 2HT. Trading office: 20-24 Broadwick Street London, W1F 8HT
        </p>
      </footer>
    </>
  );
};

export default App;
