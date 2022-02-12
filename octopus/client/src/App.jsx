import React from "react";

import { ReactComponent as OctopusEnergyLogo } from "./assets/logo.svg";
import { ReactComponent as BasketLogo } from "./assets/basket.svg";
import styles from "./App.module.scss";

const App = () => {
  return (
    <>
      <header role="banner" className={styles.banner}>
        <OctopusEnergyLogo className={styles.octoLogo} />
        <BasketLogo className={styles.basketLogo} />
      </header>
      <main className={styles.main}>
        <div className={styles.heroImageWrapper}>
          <img
            className={styles.heroImage}
            src="https://i.ibb.co/2nzwxnQ/bulb.png"
            alt="A lightbulb"
          />
        </div>
        <div>
          <h1 className={styles.productName}>Energy saving light bulb</h1>
          <p className={styles.itemsQuantity}>25W // Packet of 4</p>
        </div>
        <div className={styles.priceSection}>
          <p className={styles.price}>
            12<span className={styles.pence}>.99</span>
          </p>
          <div className={styles.quantityControls}>
            <p className={styles.quantityLabel}>QTY</p>
            <button className={styles.quantityButton}>-</button>
            <p className={styles.currentQuantity}>1</p>
            <button className={styles.quantityButton}>+</button>
          </div>
          <button className={styles.addToCart}>Add to cart</button>
        </div>
        <div>
          <h2>Description</h2>
          <p>
            Available in 7 watts, 9 watts, 11 watts Spiral Light bulb in B22,
            bulb switches on instantly, no wait around warm start and flicker
            free features make for a great all purpose bulb
          </p>
        </div>
        <div className={styles.specsSection}>
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
        </div>
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
