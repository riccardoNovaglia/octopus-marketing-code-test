import { VisuallyHidden } from "@reach/visually-hidden";
import { useQuery } from "@apollo/client";

import { Loading } from "./components/Loading";
import { Error } from "./components/Error";
import { AddToBasket } from "./components/addToBasket/AddToBasket";
import { GET_PRODUCT_QUERY } from "./productQueries";
import styles from "./Product.module.scss";
import { PageTitle } from "../../components/PageTitle";
import { useParams } from "react-router-dom";

export function Product({ addItemsToBasket }) {
  const params = useParams();
  const { loading, error, data } = useQuery(GET_PRODUCT_QUERY, {
    variables: { productId: params.productId ?? "1" },
  });
  if (loading) return <Loading />;
  if (error) return <Error />;

  const product = data.product;
  const { brand, weight, height, width, length, modelCode, colour } = product;
  const specs = { brand, weight, height, width, length, modelCode, colour };

  return (
    <>
      <HeroImage imgUrl={product.imgUrl} />
      <Title
        name={product.name}
        power={product.power}
        quantity={product.quantity}
      />
      <Price price={product.price}>
        <AddToBasket
          addItemsToBasket={(quantity) =>
            addItemsToBasket({ productId: product.id, quantity })
          }
        />
      </Price>
      <Description description={product.description} />
      <Specs {...specs} />
    </>
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
      <PageTitle className={styles.productName} title={name} />
      <p className={styles.subtitle}>
        {power}
        <span aria-hidden>{" // "}</span>
        Packet of {quantity}
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
