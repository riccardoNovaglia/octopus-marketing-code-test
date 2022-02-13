import { VisuallyHidden } from "@reach/visually-hidden";

import { AddToBasket } from "./components/AddToBasket";
import styles from "./Product.module.scss";

export function Product({ addItemsToBasket }) {
  return (
    <main className={styles.main}>
      <HeroImage />
      <Title />
      <Price>
        <AddToBasket addItemsToBasket={addItemsToBasket} />
      </Price>
      <Description />
      <Specs />
    </main>
  );
}

function HeroImage() {
  return (
    <section className={styles.heroImageWrapper} aria-hidden>
      <img
        className={styles.heroImage}
        src="https://i.ibb.co/2nzwxnQ/bulb.png"
        alt="A picture of the product"
        aria-hidden
      />
    </section>
  );
}

function Title() {
  return (
    <section>
      <h1 className={styles.productName}>Energy saving light bulb</h1>
      <p className={styles.subtitle}>25W // Packet of 4</p>
    </section>
  );
}

function Description() {
  return (
    <section>
      <h2>Description</h2>
      <p>
        Available in 7 watts, 9 watts, 11 watts Spiral Light bulb in B22, bulb
        switches on instantly, no wait around warm start and flicker free
        features make for a great all purpose bulb
      </p>
    </section>
  );
}

function Price({ children }) {
  return (
    <section className={styles.priceSection}>
      <VisuallyHidden>
        <h2>Price and add to cart</h2>
      </VisuallyHidden>
      <p className={styles.price}>
        12<span className={styles.pence}>.99</span>
      </p>
      {children}
    </section>
  );
}

function Specs() {
  return (
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
  );
}
