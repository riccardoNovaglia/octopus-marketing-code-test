import { VisuallyHidden } from "@reach/visually-hidden";
import { useQuery } from "@apollo/client";

import { GET_PRODUCT_QUERY } from "./productQueries";
import { AddToBasket } from "./components/AddToBasket";
import styles from "./Product.module.scss";

export function Product({ addItemsToBasket }) {
  const { loading, error, data } = useQuery(GET_PRODUCT_QUERY, {
    variables: { productId: "1" },
  });
  if (loading) return <p>Loading...</p>;
  if (error)
    return (
      <p>An error occurred getting this product's data, please try again</p>
    );

  const {
    name,
    power,
    description,
    price,
    quantity,
    brand,
    weight,
    height,
    width,
    length,
    modelCode,
    colour,
    imgUrl,
  } = data.product;
  const specs = { brand, weight, height, width, length, modelCode, colour };

  return (
    <main className={styles.main}>
      <HeroImage imgUrl={imgUrl} />
      <Title name={name} power={power} quantity={quantity} />
      <Price price={price}>
        <AddToBasket addItemsToBasket={addItemsToBasket} />
      </Price>
      <Description description={description} />
      <Specs {...specs} />
    </main>
  );
}

function HeroImage({ imgUrl }) {
  return (
    <section className={styles.heroImageWrapper} aria-hidden>
      <img
        className={styles.heroImage}
        src={imgUrl}
        alt="A picture of the product"
        aria-hidden
      />
    </section>
  );
}

function Title({ name, power, quantity }) {
  return (
    <section>
      <h1 className={styles.productName}>{name}</h1>
      <p className={styles.subtitle}>
        <span>{power}</span>
        {/* TODO: add // with CSS rather than text so that it doesn't get read out? */}
        {" // "}
        <span>Packet of {quantity}</span>
      </p>
    </section>
  );
}

function Description({ description }) {
  return (
    <section>
      <h2>Description</h2>
      <p>{description}</p>
    </section>
  );
}

function Price({ price, children }) {
  const [pounds, pence] = `${price / 100}`.split(".");
  return (
    <section className={styles.priceSection}>
      <VisuallyHidden>
        <h2>Price and add to cart</h2>
      </VisuallyHidden>
      <p className={styles.price}>
        {pounds}
        <span className={styles.pence}>.{pence}</span>
      </p>
      {children}
    </section>
  );
}

function Specs({ brand, weight, height, width, length, modelCode, colour }) {
  return (
    <section className={styles.specsSection}>
      <h2>Specifications</h2>
      <dl className={styles.specs}>
        <dt>Brand</dt>
        <dd>{brand}</dd>
        <dt>Item weight</dt>
        <dd>{weight}</dd>
        <dt>Dimensions</dt>
        <dd>
          {height}x{width}x{length}
        </dd>
        <dt>Item model number</dt>
        <dd>{modelCode}</dd>
        <dt>Colour</dt>
        <dd>{colour}</dd>
      </dl>
    </section>
  );
}
